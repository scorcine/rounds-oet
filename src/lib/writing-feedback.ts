import type { WritingCase } from "@/domain/types";
import type { WritingFeedback, RubricScore } from "@/domain/feedback";
import { percentToGrade } from "@/domain/skills";
import { countWords } from "@/lib/utils";

function hasPurpose(letter: string, taskType: string): boolean {
  const l = letter.toLowerCase();
  if (taskType === "referral") return /refer|referral|grateful for|opinion|urgent/.test(l);
  if (taskType === "discharge") return /discharg|follow[- ]?up|was admitted|thank you for/.test(l);
  return /writing to|please find|regarding/.test(l);
}

function extractKeywords(caseNotes: string): string[] {
  const lines = caseNotes.split(/\n/).map((l) => l.trim()).filter(Boolean);
  const words: string[] = [];
  for (const line of lines) {
    const cleaned = line.replace(/^[-•*]\s*/, "");
    const parts = cleaned.split(/[,:;]/).map((p) => p.trim()).filter((p) => p.length > 3);
    for (const p of parts.slice(0, 2)) {
      const token = p.split(/\s+/).slice(0, 4).join(" ").toLowerCase();
      if (token.length > 4 && !/^(patient|date|exam|plan|relevant)/.test(token)) {
        words.push(token);
      }
    }
  }
  return [...new Set(words)].slice(0, 18);
}

function contentCoverage(letter: string, caseNotes: string): number {
  const keys = extractKeywords(caseNotes);
  if (!keys.length) return 50;
  const l = letter.toLowerCase();
  const hit = keys.filter((k) => {
    const head = k.split(/\s+/).slice(0, 2).join(" ");
    return l.includes(head) || l.includes(k);
  }).length;
  return Math.round((hit / keys.length) * 100);
}

function looksLikeNoteForm(letter: string): boolean {
  const lines = letter.split(/\n/).filter((l) => l.trim());
  const bulletHeavy = lines.filter((l) => /^[-•*]|\d+\./.test(l.trim())).length;
  return bulletHeavy >= Math.max(3, lines.length * 0.4);
}

function hasLetterFrame(letter: string): boolean {
  const l = letter.toLowerCase();
  return (
    (/dear\b/.test(l) || /re:|regarding/.test(l)) &&
    (/yours\b|kind regards|sincerely/.test(l) || letter.length > 400)
  );
}

function grammarRoughScore(letter: string): number {
  let score = 75;
  if (/\bi am writing referring\b/i.test(letter)) score -= 15;
  if (/\bpatient have\b/i.test(letter)) score -= 10;
  if (/\binformations\b/i.test(letter)) score -= 8;
  if (/\ba hypertension\b/i.test(letter)) score -= 8;
  if (/\badvise to return\b/i.test(letter)) score -= 5;
  const sentences = letter.split(/[.!?]+/).filter((s) => s.trim().length > 20);
  if (sentences.length >= 4) score += 5;
  if (letter.length > 100 && !/[.!?][\s\S]*[.!?]/.test(letter)) score -= 12;
  return Math.max(20, Math.min(95, score));
}

export function heuristicWritingFeedback(
  writingCase: WritingCase,
  letter: string,
): WritingFeedback {
  const wordCount = countWords(letter);
  const wordTargetMet =
    wordCount >= writingCase.wordTarget.min &&
    wordCount <= writingCase.wordTarget.max + 40;

  const purposeOk = hasPurpose(letter, writingCase.taskType);
  const coverage = contentCoverage(letter, writingCase.caseNotes);
  const noteForm = looksLikeNoteForm(letter);
  const genreOk = hasLetterFrame(letter) && !noteForm;
  const grammar = grammarRoughScore(letter);
  const orgScore = (() => {
    const paras = letter.split(/\n\s*\n/).filter((p) => p.trim().length > 40);
    if (paras.length >= 3) return 85;
    if (paras.length === 2) return 70;
    if (letter.length > 300) return 55;
    return 35;
  })();

  const rubricDefs = writingCase.rubric.length
    ? writingCase.rubric
    : [
        { id: "purpose", criterion: "Purpose", description: "Clear purpose" },
        { id: "content", criterion: "Content", description: "Key content" },
        { id: "conciseness", criterion: "Conciseness & clarity", description: "Length/clarity" },
        { id: "genre", criterion: "Genre & style", description: "Letter conventions" },
        { id: "organisation", criterion: "Organisation", description: "Logical flow" },
        { id: "language", criterion: "Language", description: "Grammar/vocab" },
      ];

  const rawScores: number[] = [
    purposeOk ? 88 : 40,
    coverage,
    wordTargetMet ? 82 : wordCount < writingCase.wordTarget.min ? 45 : 60,
    genreOk ? 85 : 42,
    orgScore,
    grammar,
  ];

  const rubric: RubricScore[] = rubricDefs.map((r, i) => {
    const pct = rawScores[Math.min(i, rawScores.length - 1)] ?? 60;
    const band = (pct >= 85 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0) as 0 | 1 | 2 | 3;
    const comments = [
      purposeOk
        ? "Purpose is signalled clearly for the reader."
        : "State the purpose early (e.g. “I am writing to refer…”).",
      coverage >= 70
        ? "Most clinically relevant details from the notes appear in the letter."
        : "Include more key findings from the case notes (results, meds, red flags).",
      wordTargetMet
        ? "Length is close to the exam target."
        : `Aim for ${writingCase.wordTarget.min}–${writingCase.wordTarget.max} words (now ${wordCount}).`,
      genreOk
        ? "Reads as a professional letter rather than notes."
        : "Avoid note/bullet form; use greeting, paragraphs and closing.",
      orgScore >= 70
        ? "Information is grouped in a readable order."
        : "Group: purpose → history/findings → request/plan.",
      grammar >= 70
        ? "Language is largely controlled for clinical correspondence."
        : "Watch articles, agreement and full sentences.",
    ];
    return {
      id: r.id,
      criterion: r.criterion,
      band,
      scorePercent: pct,
      comment: comments[Math.min(i, comments.length - 1)],
    };
  });

  const overallPercent = Math.round(
    rubric.reduce((a, r) => a + r.scorePercent, 0) / rubric.length,
  );

  const strengths: string[] = [];
  const improvements: string[] = [];
  for (const r of rubric) {
    if (r.scorePercent >= 75) strengths.push(r.comment);
    else improvements.push(r.comment);
  }

  return {
    source: "heuristic",
    estimatedGrade: percentToGrade(overallPercent),
    overallPercent,
    wordCount,
    wordTargetMet,
    rubric,
    strengths: strengths.slice(0, 3),
    improvements: improvements.slice(0, 4),
    rewrittenSnippet: purposeOk
      ? undefined
      : `I am writing to ${writingCase.taskType === "discharge" ? "update you on" : "refer"} this patient for ${writingCase.specialty.toLowerCase()} review.`,
    humanReviewAvailable: true,
  };
}
