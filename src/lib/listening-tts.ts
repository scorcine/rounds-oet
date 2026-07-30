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

/**
 * Speak dialogue with alternating clinician/patient voices.
 * Falls back to flat utterance if no turns parsed.
 */
export function speakDialogueDual(
  transcript: string,
  flatFallback: string,
  handlers: { onStart?: () => void; onEnd?: () => void },
): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const turns = parseDialogueTurns(transcript);
  const { clinician, patient } = pickVoices();

  // Voices may load async in some browsers
  const run = () => {
    const voices = pickVoices();
    const cVoice = voices.clinician ?? clinician;
    const pVoice = voices.patient ?? patient;

    if (!turns.length) {
      const u = new SpeechSynthesisUtterance(flatFallback);
      u.rate = 0.92;
      if (cVoice) u.voice = cVoice;
      u.onend = () => handlers.onEnd?.();
      handlers.onStart?.();
      window.speechSynthesis.speak(u);
      return;
    }

    handlers.onStart?.();
    let i = 0;
    const next = () => {
      if (i >= turns.length) {
        handlers.onEnd?.();
        return;
      }
      const turn = turns[i++];
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
