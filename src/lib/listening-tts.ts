/** Dual-voice browser TTS for clinical dialogues (Doctor / Patient / Speaker). */

export type DialogueTurn = {
  role: string;
  text: string;
};

type SpeakHandlers = {
  onStart?: () => void;
  onEnd?: () => void;
};

type SpeakOptions = {
  startRatio?: number;
  /** Ignore callbacks from older speak sessions after cancel/restart. */
  session?: number;
};

let activeSession = 0;
let keepAliveTimer: ReturnType<typeof setInterval> | null = null;

function clearKeepAlive() {
  if (keepAliveTimer != null) {
    clearInterval(keepAliveTimer);
    keepAliveTimer = null;
  }
}

/** Chrome can freeze speechSynthesis; nudge resume while speaking. */
function startKeepAlive() {
  clearKeepAlive();
  keepAliveTimer = setInterval(() => {
    try {
      if (typeof window === "undefined" || !window.speechSynthesis) return;
      if (window.speechSynthesis.speaking) window.speechSynthesis.resume();
    } catch {
      /* ignore */
    }
  }, 4000);
}

export function cancelSpeech() {
  activeSession += 1;
  clearKeepAlive();
  if (typeof window !== "undefined" && window.speechSynthesis) {
    try {
      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();
    } catch {
      /* ignore */
    }
  }
}

export function pauseSpeech() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  clearKeepAlive();
  try {
    window.speechSynthesis.pause();
  } catch {
    /* ignore */
  }
}

export function resumeSpeech() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.resume();
    startKeepAlive();
  } catch {
    /* ignore */
  }
}

export function isSpeechActive() {
  if (typeof window === "undefined" || !window.speechSynthesis) return false;
  return window.speechSynthesis.speaking || window.speechSynthesis.pending;
}

export function isSpeechPaused() {
  if (typeof window === "undefined" || !window.speechSynthesis) return false;
  return window.speechSynthesis.paused;
}

/** Parse "Doctor: …" / "Patient: …" style transcripts into turns. */
export function parseDialogueTurns(transcript: string): DialogueTurn[] {
  const lines = transcript.split(/\n/).map((l) => l.trim()).filter(Boolean);
  const turns: DialogueTurn[] = [];
  for (const line of lines) {
    const m = line.match(
      /^(Doctor|Patient|Nurse|Anaesthetist|Registrar|Speaker|Nurse lead|Interviewer|[AB]):\s*(.+)$/i,
    );
    if (m) {
      turns.push({ role: m[1], text: m[2].trim() });
    }
  }
  return turns;
}

function pickVoices(): { clinician: SpeechSynthesisVoice | null; patient: SpeechSynthesisVoice | null } {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return { clinician: null, patient: null };
  }
  const voices = window.speechSynthesis.getVoices();
  const en = voices.filter((v) => /en(-|_|$)/i.test(v.lang) || /english/i.test(v.name));
  const pool = en.length ? en : voices;

  const patient =
    pool.find((v) => /female|zira|samantha|susan|martha|victoria|karen|moira/i.test(v.name)) ??
    pool[1] ??
    pool[0] ??
    null;
  const clinician =
    pool.find(
      (v) =>
        v !== patient &&
        /male|daniel|david|george|james|mark|alex|fred|ryan|arthur/i.test(v.name),
    ) ??
    pool.find((v) => v !== patient) ??
    pool[0] ??
    null;

  return { clinician, patient };
}

function isPatientRole(role: string): boolean {
  return /patient|^b$/i.test(role);
}

function sliceFromRatio(text: string, ratio: number): string {
  const r = Math.min(1, Math.max(0, ratio));
  if (r <= 0) return text;
  if (r >= 1) return "";
  let i = Math.floor(text.length * r);
  while (i < text.length && !/\s/.test(text[i]!)) i += 1;
  const sliced = text.slice(i).trim();
  return sliced || text.slice(Math.floor(text.length * r)).trim();
}

function isCanceledError(err: SpeechSynthesisErrorEvent) {
  const reason = (err as SpeechSynthesisErrorEvent & { error?: string }).error ?? "";
  return reason === "canceled" || reason === "interrupted";
}

/**
 * Speak dialogue with alternating clinician/patient voices.
 * Falls back to flat utterance if no turns parsed.
 * `startRatio` (0–1) skips ahead for scrubbing/seek.
 */
export function speakDialogueDual(
  transcript: string,
  flatFallback: string,
  handlers: SpeakHandlers,
  options?: SpeakOptions,
): number {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    handlers.onEnd?.();
    return -1;
  }

  cancelSpeech();
  const session = activeSession;
  if (options) options.session = session;

  const startRatio = options?.startRatio ?? 0;
  const turns = parseDialogueTurns(transcript);

  const stillCurrent = () => session === activeSession;

  const finish = () => {
    if (!stillCurrent()) return;
    clearKeepAlive();
    handlers.onEnd?.();
  };

  const run = () => {
    if (!stillCurrent()) return;
    const { clinician: cVoice, patient: pVoice } = pickVoices();

    try {
      window.speechSynthesis.resume();
    } catch {
      /* ignore */
    }

    if (!turns.length) {
      const text = sliceFromRatio(flatFallback, startRatio);
      if (!text) {
        finish();
        return;
      }
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.92;
      if (cVoice) u.voice = cVoice;
      u.onend = () => finish();
      u.onerror = (e) => {
        if (isCanceledError(e)) return;
        finish();
      };
      if (stillCurrent()) {
        handlers.onStart?.();
        startKeepAlive();
        window.speechSynthesis.speak(u);
      }
      return;
    }

    const totalChars = turns.reduce((n, t) => n + t.text.length, 0) || 1;
    let skipped = 0;
    let startIdx = 0;
    for (let i = 0; i < turns.length; i++) {
      const next = skipped + turns[i]!.text.length;
      if (skipped / totalChars >= startRatio) {
        startIdx = i;
        break;
      }
      if (next / totalChars > startRatio) {
        startIdx = i;
        break;
      }
      skipped = next;
      startIdx = i + 1;
    }

    if (startIdx >= turns.length) {
      finish();
      return;
    }

    handlers.onStart?.();
    startKeepAlive();
    let i = startIdx;

    const speakNext = () => {
      if (!stillCurrent()) return;
      if (i >= turns.length) {
        finish();
        return;
      }
      const turn = turns[i++]!;
      const u = new SpeechSynthesisUtterance(turn.text);
      u.rate = 0.92;
      if (isPatientRole(turn.role)) {
        if (pVoice) u.voice = pVoice;
        u.pitch = 1.05;
      } else {
        if (cVoice) u.voice = cVoice;
        u.pitch = 1;
      }
      u.onend = () => {
        if (!stillCurrent()) return;
        speakNext();
      };
      u.onerror = (e) => {
        if (!stillCurrent()) return;
        if (isCanceledError(e)) return;
        // Skip broken turn instead of aborting the whole dialogue
        speakNext();
      };
      window.speechSynthesis.speak(u);
    };

    // Small delay after cancel() — Chrome often drops the first utterance otherwise
    window.setTimeout(() => {
      if (!stillCurrent()) return;
      speakNext();
    }, 60);
  };

  if (window.speechSynthesis.getVoices().length === 0) {
    const onVoices = () => {
      window.speechSynthesis.onvoiceschanged = null;
      run();
    };
    window.speechSynthesis.onvoiceschanged = onVoices;
    window.setTimeout(run, 300);
  } else {
    run();
  }

  return session;
}
