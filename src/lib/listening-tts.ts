/** Dual-voice browser TTS for clinical dialogues (Doctor / Patient / Speaker). */

export type DialogueTurn = {
  role: string;
  text: string;
};

/** Parse "Doctor: …" / "Patient: …" style transcripts into turns. */
export function parseDialogueTurns(transcript: string): DialogueTurn[] {
  const lines = transcript.split(/\n/).map((l) => l.trim()).filter(Boolean);
  const turns: DialogueTurn[] = [];
  for (const line of lines) {
    const m = line.match(
      /^(Doctor|Patient|Nurse|Anaesthetist|Registrar|Speaker|Nurse lead|Interviewer):\s*(.+)$/i,
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
  return /patient/i.test(role);
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

/**
 * Speak dialogue with alternating clinician/patient voices.
 * Falls back to flat utterance if no turns parsed.
 * `startRatio` (0–1) skips ahead for scrubbing/seek.
 */
export function speakDialogueDual(
  transcript: string,
  flatFallback: string,
  handlers: { onStart?: () => void; onEnd?: () => void },
  options?: { startRatio?: number },
): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const startRatio = options?.startRatio ?? 0;
  const turns = parseDialogueTurns(transcript);
  const { clinician, patient } = pickVoices();

  // Voices may load async in some browsers
  const run = () => {
    const voices = pickVoices();
    const cVoice = voices.clinician ?? clinician;
    const pVoice = voices.patient ?? patient;

    if (!turns.length) {
      const text = sliceFromRatio(flatFallback, startRatio);
      if (!text) {
        handlers.onEnd?.();
        return;
      }
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.92;
      if (cVoice) u.voice = cVoice;
      u.onend = () => handlers.onEnd?.();
      handlers.onStart?.();
      window.speechSynthesis.speak(u);
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
      handlers.onEnd?.();
      return;
    }

    handlers.onStart?.();
    let i = startIdx;
    const next = () => {
      if (i >= turns.length) {
        handlers.onEnd?.();
        return;
      }
      const turn = turns[i++]!;
      const u = new SpeechSynthesisUtterance(turn.text);
      u.rate = 0.92;
      if (isPatientRole(turn.role)) {
        if (pVoice) u.voice = pVoice;
        u.pitch = 1.12;
      } else {
        if (cVoice) u.voice = cVoice;
        u.pitch = 0.95;
      }
      u.onend = next;
      u.onerror = next;
      window.speechSynthesis.speak(u);
    };
    next();
  };

  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null;
      run();
    };
    // safety timeout
    window.setTimeout(run, 250);
  } else {
    run();
  }
}
