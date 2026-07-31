import type { EnglishWritingFeedback } from "@/domain/feedback";

type Rule = {
  pattern: RegExp;
  corrected: string;
  explanation: string;
};

const COMMON_RULES: Rule[] = [
  {
    pattern: /\bI['´']?m\s+live\b/gi,
    corrected: "I live",
    explanation: "Use live (verb), not I'm live. Say: I live in…",
  },
  {
    pattern: /\bI['´']?m\s+doctor\b/gi,
    corrected: "I'm a doctor",
    explanation: "Jobs need a/an: I'm a doctor / I'm a nurse.",
  },
  {
    pattern: /\bI['´']?m\s+nurse\b/gi,
    corrected: "I'm a nurse",
    explanation: "Jobs need a/an: I'm a nurse.",
  },
  {
    pattern: /\bmy wife name['´']?s\b/gi,
    corrected: "my wife's name is",
    explanation: "Possessive: my wife's name is…",
  },
  {
    pattern: /\bI have two kids\s*\(([^)]+)\)\b/gi,
    corrected: "I have two kids, $1",
    explanation: "You can list names with commas: I have two kids, Lucas and Davi.",
  },
  {
    pattern: /\bin santos\b/gi,
    corrected: "in Santos",
    explanation: "Capitalise city names: Santos, São Paulo, London.",
  },
  {
    pattern: /\bfrom brazil\b/gi,
    corrected: "from Brazil",
    explanation: "Capitalise country names: Brazil.",
  },
];

function applyRules(text: string): {
  corrected: string;
  corrections: EnglishWritingFeedback["corrections"];
} {
  const corrections: EnglishWritingFeedback["corrections"] = [];
  let corrected = text;

  for (const rule of COMMON_RULES) {
    const match = corrected.match(rule.pattern);
    if (!match) continue;
    const original = match[0];
    const next = corrected.replace(rule.pattern, rule.corrected);
    if (next === corrected) continue;
    corrections.push({
      original,
      corrected: rule.corrected.replace(/\$1/g, match[1] ?? "").trim(),
      explanation: rule.explanation,
    });
    corrected = next;
  }

  // Normalise curly/acute apostrophes used as English apostrophes
  corrected = corrected.replace(/[´`]/g, "'");

  return { corrected, corrections };
}

export function heuristicEnglishWritingFeedback(input: {
  text: string;
  prompt: string;
  minWords: number;
  keywords?: string[];
  sample: string;
}): EnglishWritingFeedback {
  const wordCount = input.text.trim().split(/\s+/).filter(Boolean).length;
  const keywordsOk =
    !input.keywords?.length ||
    input.keywords.some((k) => input.text.toLowerCase().includes(k.toLowerCase()));
  const lengthOk = wordCount >= input.minWords;
  const { corrected, corrections } = applyRules(input.text);

  const improvements: string[] = [];
  if (!lengthOk) {
    improvements.push(`Write at least ${input.minWords} words (you have ${wordCount}).`);
  }
  if (!keywordsOk && input.keywords?.length) {
    improvements.push(`Try to include ideas related to: ${input.keywords.join(", ")}.`);
  }
  for (const c of corrections) {
    improvements.push(c.explanation);
  }
  if (!improvements.length) {
    improvements.push("Check capital letters on names and cities, and use a/an with jobs.");
  }

  const strengths: string[] = [];
  if (lengthOk) strengths.push("You reached the minimum length.");
  if (keywordsOk) strengths.push("Your text covers the task idea.");
  if (/\b(hello|hi|nice to meet|from|i['´']?m)\b/i.test(input.text)) {
    strengths.push("You used useful A1 phrases for introductions.");
  }

  const scoreBase = lengthOk && keywordsOk ? 70 : lengthOk ? 55 : 35;
  const scorePercent = Math.max(20, Math.min(95, scoreBase - corrections.length * 8));

  return {
    source: "heuristic",
    ok: lengthOk && keywordsOk,
    scorePercent,
    summary:
      corrections.length > 0
        ? "Good try — a few grammar fixes will make this clearer."
        : lengthOk && keywordsOk
          ? "Solid for this level — small polish ideas below."
          : "Not quite ready yet — see the tips below.",
    corrections: corrections.slice(0, 6),
    strengths: strengths.slice(0, 3),
    improvements: improvements.slice(0, 5),
    correctedVersion: corrections.length ? corrected.trim() : input.sample,
  };
}
