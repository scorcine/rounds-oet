/** Natural English speech for A1 Hear buttons — studio TTS with browser fallback. */

import { cancelSpeech } from "@/lib/listening-tts";

const blobCache = new Map<string, string>();
let activeAudio: HTMLAudioElement | null = null;
let sequenceToken = 0;

export function prepareEnglishSpeakText(raw: string): string {
  return raw
    .replace(/___+/g, "...")
    .replace(/\u2026/g, "...")
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function pickEnglishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  const isPt = (v: SpeechSynthesisVoice) =>
    /pt|brazil|portuguese/i.test(`${v.name} ${v.lang}`);
  const prefer = [
    /google uk english/i,
    /microsoft (sonia|ryan|libby|george)/i,
    /en-gb/i,
    /english \(united kingdom\)/i,
    /google us english/i,
    /microsoft (aria|guy|jenny)/i,
    /en-us/i,
  ];
  for (const re of prefer) {
    const hit = voices.find((v) => !isPt(v) && (re.test(v.name) || re.test(v.lang)));
    if (hit) return hit;
  }
  return voices.find((v) => /en(-|_|$)/i.test(v.lang) && !isPt(v)) ?? null;
}

function speakBrowserEnglish(text: string, onEnd?: () => void): void {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    onEnd?.();
    return;
  }
  cancelSpeech();
  const run = () => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-GB";
    u.rate = 0.92;
    u.pitch = 1;
    const voice = pickEnglishVoice();
    if (voice) u.voice = voice;
    u.onend = () => onEnd?.();
    u.onerror = () => onEnd?.();
    window.speechSynthesis.speak(u);
  };
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null;
      run();
    };
    window.setTimeout(run, 200);
  } else {
    run();
  }
}

export function stopStudioAudio() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.src = "";
    activeAudio = null;
  }
}

export function stopAllEnglishSpeech() {
  sequenceToken += 1;
  stopStudioAudio();
  cancelSpeech();
}

async function fetchStudioUrl(text: string): Promise<string> {
  const cached = blobCache.get(text);
  if (cached) return cached;
  const res = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, voice: "nova" }),
  });
  if (!res.ok) throw new Error(`tts ${res.status}`);
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  blobCache.set(text, url);
  return url;
}

function playUrl(
  url: string,
  handlers?: { onEnd?: () => void; onError?: () => void },
): void {
  const audio = new Audio(url);
  activeAudio = audio;
  audio.onended = () => {
    if (activeAudio === audio) activeAudio = null;
    handlers?.onEnd?.();
  };
  audio.onerror = () => {
    if (activeAudio === audio) activeAudio = null;
    handlers?.onError?.();
  };
  void audio.play().catch(() => handlers?.onError?.());
}

/**
 * Play natural English audio via OpenAI TTS API; falls back to filtered browser EN voice.
 */
export async function playEnglishSpeech(
  raw: string,
  handlers?: { onStart?: () => void; onEnd?: () => void },
): Promise<void> {
  const text = prepareEnglishSpeakText(raw);
  if (!text) {
    handlers?.onEnd?.();
    return;
  }

  stopAllEnglishSpeech();
  handlers?.onStart?.();

  try {
    const url = await fetchStudioUrl(text);
    playUrl(url, {
      onEnd: handlers?.onEnd,
      onError: () => speakBrowserEnglish(text, handlers?.onEnd),
    });
  } catch {
    speakBrowserEnglish(text, handlers?.onEnd);
  }
}

export async function playEnglishSpeechSequence(
  lines: string[],
  handlers?: { onStart?: () => void; onEnd?: () => void },
): Promise<void> {
  stopAllEnglishSpeech();
  const token = sequenceToken;
  handlers?.onStart?.();

  for (let i = 0; i < lines.length; i++) {
    if (token !== sequenceToken) return;
    const text = prepareEnglishSpeakText(lines[i]!);
    if (!text) continue;

    await new Promise<void>((resolve) => {
      const finish = () => resolve();
      void (async () => {
        try {
          const url = await fetchStudioUrl(text);
          if (token !== sequenceToken) {
            finish();
            return;
          }
          stopStudioAudio();
          cancelSpeech();
          playUrl(url, {
            onEnd: finish,
            onError: () => speakBrowserEnglish(text, finish),
          });
        } catch {
          speakBrowserEnglish(text, finish);
        }
      })();
    });

    if (token !== sequenceToken) return;
    await new Promise((r) => window.setTimeout(r, 300));
  }

  if (token === sequenceToken) handlers?.onEnd?.();
}
