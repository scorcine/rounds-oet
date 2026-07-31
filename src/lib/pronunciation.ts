/** Lightweight pronunciation scoring via transcript comparison (Web Speech API). */

export type PronunciationWordResult = {
  target: string;
  heard: string | null;
  ok: boolean;
};

export type PronunciationResult = {
  scorePercent: number;
  matched: number;
  total: number;
  words: PronunciationWordResult[];
  heard: string;
  tip: string;
};

function normalizeToken(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9']/g, "")
    .trim();
}

/** Expand contractions so "i'm" ≈ "i am" matching is more forgiving. */
function expand(token: string): string[] {
  const map: Record<string, string[]> = {
    "i'm": ["i", "am"],
    "you're": ["you", "are"],
    "he's": ["he", "is"],
    "she's": ["she", "is"],
    "it's": ["it", "is"],
    "we're": ["we", "are"],
    "they're": ["they", "are"],
    "isn't": ["is", "not"],
    "aren't": ["are", "not"],
    "don't": ["do", "not"],
    "doesn't": ["does", "not"],
    "can't": ["cannot", "can"],
    cannot: ["can", "not"],
    "what's": ["what", "is"],
    "where's": ["where", "is"],
    "who's": ["who", "is"],
    "that's": ["that", "is"],
    "there's": ["there", "is"],
    "i've": ["i", "have"],
    "you've": ["you", "have"],
    "we've": ["we", "have"],
    "they've": ["they", "have"],
  };
  return map[token] ?? [token];
}

export function tokenizeTarget(text: string): string[] {
  return text
    .split(/\s+/)
    .map(normalizeToken)
    .filter((t) => t && t !== "_" && !/^_+$/.test(t))
    .flatMap(expand)
    .filter(Boolean);
}

export function tokenizeHeard(text: string): string[] {
  return text
    .split(/\s+/)
    .map(normalizeToken)
    .filter(Boolean)
    .flatMap(expand)
    .filter(Boolean);
}

/**
 * Score how well `heard` matches `target`.
 * Blanks (___) in the target are treated as wildcards (any word).
 */
export function scorePronunciation(target: string, heard: string): PronunciationResult {
  const rawTargets = target
    .split(/\s+/)
    .map((w) => w.trim())
    .filter(Boolean);

  const heardTokens = tokenizeHeard(heard);
  let hi = 0;
  const words: PronunciationWordResult[] = [];
  let matched = 0;
  let total = 0;

  for (const raw of rawTargets) {
    const isBlank = /^_+$/.test(raw.replace(/[.,!?]/g, "")) || raw.includes("___");
    if (isBlank) {
      // consume one heard token if present
      const heardWord = heardTokens[hi] ?? null;
      if (heardWord) hi += 1;
      words.push({ target: "…", heard: heardWord, ok: Boolean(heardWord) });
      total += 1;
      if (heardWord) matched += 1;
      continue;
    }

    const expected = tokenizeTarget(raw);
    if (!expected.length) continue;

    let ok = true;
    const heardBits: string[] = [];
    for (const exp of expected) {
      total += 1;
      const got = heardTokens[hi];
      if (got && (got === exp || (exp.length > 3 && (got.startsWith(exp.slice(0, 3)) || exp.startsWith(got.slice(0, 3)))))) {
        matched += 1;
        heardBits.push(got);
        hi += 1;
      } else if (got) {
        // try skip one filler
        const next = heardTokens[hi + 1];
        if (next === exp) {
          matched += 1;
          heardBits.push(next);
          hi += 2;
        } else {
          ok = false;
          heardBits.push(got ?? "—");
          hi += 1;
        }
      } else {
        ok = false;
      }
    }
    words.push({
      target: raw.replace(/[.,!?]/g, ""),
      heard: heardBits.join(" ") || null,
      ok,
    });
  }

  const scorePercent = total ? Math.round((matched / total) * 100) : 0;
  let tip = "Nice clarity — keep practising at natural speed.";
  if (scorePercent < 50) {
    tip = "Slow down and tap Hear on the model line, then try again word by word.";
  } else if (scorePercent < 70) {
    tip = "Good effort — focus on the red words and repeat the full line once more.";
  } else if (scorePercent < 85) {
    tip = "Clear enough for A1 — polish the weaker words for a higher score.";
  }

  return {
    scorePercent,
    matched,
    total,
    words,
    heard: heard.trim(),
    tip,
  };
}

type SpeechRec = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult:
    | ((event: {
        results: ArrayLike<{ 0: { transcript: string }; isFinal: boolean }>;
      }) => void)
    | null;
  onerror: ((event?: { error?: string }) => void) | null;
  onend: (() => void) | null;
};

export function getSpeechRecognition(): (new () => SpeechRec) | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRec;
    webkitSpeechRecognition?: new () => SpeechRec;
  };
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}

export function listenOnce(lang = "en-GB"): Promise<string> {
  return new Promise((resolve, reject) => {
    const Ctor = getSpeechRecognition();
    if (!Ctor) {
      reject(new Error("Speech recognition is not supported in this browser."));
      return;
    }
    const rec = new Ctor();
    rec.continuous = false;
    rec.interimResults = false;
    rec.lang = lang;
    let finalText = "";
    rec.onresult = (event) => {
      for (let i = 0; i < event.results.length; i++) {
        const piece = event.results[i];
        if (piece.isFinal) finalText += piece[0].transcript + " ";
      }
    };
    rec.onerror = (e) => {
      reject(new Error(e?.error || "recognition-error"));
    };
    rec.onend = () => {
      resolve(finalText.trim());
    };
    try {
      rec.start();
    } catch (err) {
      reject(err);
    }
  });
}
