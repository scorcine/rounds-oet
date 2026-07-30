import type { WritingCase } from "@/domain/types";
import type { WritingFeedback, RubricScore } from "@/domain/feedback";
import { percentToGrade } from "@/domain/skills";
import { countWords } from "@/lib/utils";

function hasPurpose(letter: string, taskType: string): boolean {
  const l = letter.toLowerCase();
  if (taskType === "referral")
    return /(?:i am|i'm) writing to refer|refer(?:ral)?|grateful for (?:your )?(?:urgent )?assessment|opinion|review/.test(
      l,
    );
  if (taskType === "discharge")
    return /discharg|was admitted|thank you for (?:continuing|ongoing)|follow[- ]?up/.test(l);
  if (taskType === "transfer") return /transfer|handover|take over|accept/.test(l);
  if (taskType === "advice") return /advice|advise|please|important that you|you should/.test(l);
  return /(?:i am|i'm) writing|regarding|re:/.test(l);
}

function extractKeywords(caseNotes: string): string[] {
  const lines = caseNotes.split(/\n/).map((l) => l.trim()).filter(Boolean);
  const words: string[] = [];
  for (const line of lines) {
    const cleaned = line.replace(/^[-•*]\s*/, "");
    const parts = cleaned.split(/[,:;]/).map((p) => p.trim()).filter((p) => p.length > 3);
    for (const p of parts.slice(0, 2)) {
      const token = p.split(/\s+/).slice(0, 4).join(" ").toLowerCase();
      if (token.length > 4 && !/^(patient|date|exam|plan|relevant|from|hx|pmh)/.test(token)) {
        words.push(token);
      }
    }
  }
  return [...new Set(words)].slice(0, 22);
}

function contentCoverage(letter: string, caseNotes: string): number {
  const keys = extractKeywords(caseNotes);
  if (!keys.length) return 40;
  const l = letter.toLowerCase();
  const hit = keys.filter((k) => {
    const head = k.split(/\s+/).slice(0, 2).join(" ");
    return l.includes(head) || l.includes(k);
  }).length;
  // Strict: missing key clinical facts hurts hard
  return Math.round((hit / keys.length) * 100);
}

function looksLikeNoteForm(letter: string): boolean {
  const lines = letter.split(/\n/).filter((l) => l.trim());
  const bulletHeavy = lines.filter((l) => /^[-•*]|\d+\./.test(l.trim())).length;
  return bulletHeavy >= Math.max(3, lines.length * 0.35);
}

function hasLetterFrame(letter: string): boolean {
  const l = letter.toLowerCase();
  const greeting = /\bdear\b/.test(l);
  const closing = /\byours\b|\bkind regards\b|\bsincerely\b/.test(l);
  const reLine = /\bre:|regarding\b/.test(l);
  return greeting && closing && (reLine || letter.length > 350);
}

function namesPatient(letter: string, caseNotes: string): boolean {
  const m = caseNotes.match(/Patient:\s*([A-Za-z]+)/i);
  if (!m) return true;
  return letter.toLowerCase().includes(m[1].toLowerCase());
}

function hasClearRequest(letter: string): boolean {
  return /grateful|please (?:arrange|review|assess|advise|consider)|i would appreciate|kindly|request/.test(
    letter.toLowerCase(),
  );
}

function grammarRoughScore(letter: string): number {
  let score = 68; // start below “easy B”
  const penalties: [RegExp, number][] = [
    [/\bi am writing referring\b/i, 12],
    [/\bpatient have\b/i, 10],
    [/\binformations\b/i, 8],
    [/\ba hypertension\b/i, 8],
    [/\ba diabetes\b/i, 8],
    [/\badvise to return\b/i, 6],
    [/\breferring for\b/i, 4],
    [/\bhe have\b|\bshe have\b/i, 10],
    [/\bwas went\b/i, 10],
    [/\bthank(s)? you for refer\b/i, 6],
  ];
  for (const [re, n] of penalties) {
    if (re.test(letter)) score -= n;
  }
  const sentences = letter.split(/[.!?]+/).filter((s) => s.trim().length > 20);
  if (sentences.length >= 5) score += 6;
  else if (sentences.length < 3) score -= 10;
  if (letter.length > 100 && !/[.!?][\s\S]*[.!?]/.test(letter)) score -= 15;
  // Long run-ons / missing commas rough proxy
  const longClauses = sentences.filter((s) => s.split(/\s+/).length > 45).length;
  score -= longClauses * 4;
  return Math.max(15, Math.min(92, score));
}

function clampPct(n: number): number {
  return Math.max(0, Math.min(100, Math.round(n)));
}

export function heuristicWritingFeedback(
  writingCase: WritingCase,
  letter: string,
): WritingFeedback {
  const wordCount = countWords(letter);
  const wordTargetMet =
    wordCount >= writingCase.wordTarget.min &&
    wordCount <= writingCase.wordTarget.max + 20; // tighter than before (+40)

  const purposeOk = hasPurpose(letter, writingCase.taskType);
  const coverage = contentCoverage(letter, writingCase.caseNotes);
  const noteForm = looksLikeNoteForm(letter);
  const genreOk = hasLetterFrame(letter) && !noteForm;
  const grammar = grammarRoughScore(letter);
  const patientOk = namesPatient(letter, writingCase.caseNotes);
  const requestOk = hasClearRequest(letter);

  const orgScore = (() => {
    const paras = letter.split(/\n\s*\n/).filter((p) => p.trim().length > 40);
    if (paras.length >= 3 && purposeOk) return 78;
    if (paras.length === 2) return 62;
    if (letter.length > 300) return 48;
    return 28;
  })();

  const purposeScore = clampPct(
    (purposeOk ? 72 : 28) + (requestOk ? 12 : -8) + (patientOk ? 8 : -15),
  );
  const contentScore = clampPct(coverage * 0.85 + (patientOk ? 5 : -10));
  const conciseScore = wordTargetMet
    ? 74
    : wordCount < writingCase.wordTarget.min
      ? clampPct(30 + (wordCount / writingCase.wordTarget.min) * 25)
      : clampPct(55 - Math.min(25, (wordCount - writingCase.wordTarget.max) / 4));
  const genreScore = genreOk ? 76 : noteForm ? 30 : 42;
  const languageScore = grammar;

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
    purposeScore,
    contentScore,
    conciseScore,
    genreScore,
    orgScore,
    languageScore,
  ];

  const rubric: RubricScore[] = rubricDefs.map((r, i) => {
    const pct = rawScores[Math.min(i, rawScores.length - 1)] ?? 50;
    // Stricter band mapping (aligned toward needing solid control for top bands)
    const band = (pct >= 88 ? 3 : pct >= 72 ? 2 : pct >= 52 ? 1 : 0) as 0 | 1 | 2 | 3;
    const comments = [
      purposeOk && requestOk
        ? "Purpose and request are clear for the receiving clinician."
        : "Open with a clear purpose and end with an explicit request (review, admit, advise).",
      contentScore >= 70
        ? "Most clinically relevant details from the notes appear in the letter."
        : "Too many case-note facts are missing — OET Content is unforgiving on omissions.",
      wordTargetMet
        ? "Length is inside a realistic exam window."
        : `Target ${writingCase.wordTarget.min}–${writingCase.wordTarget.max} words (now ${wordCount}).`,
      genreOk
        ? "Reads as professional correspondence, not notes."
        : "Use Dear… / Re: / paragraphs / Yours sincerely — avoid bullet dumps.",
      orgScore >= 70
        ? "Information order supports clinical reading."
        : "Organise: purpose → relevant history/findings → request/plan.",
      languageScore >= 72
        ? "Language is mostly controlled for clinical correspondence."
        : "Accuracy issues (articles, agreement, sentence control) will cap the Language criterion.",
    ];
    return {
      id: r.id,
      criterion: r.criterion,
      band,
      scorePercent: pct,
      comment: comments[Math.min(i, comments.length - 1)],
    };
  });

  // Overall slightly weighted to Purpose + Content (exam reality)
  const overallPercent = clampPct(
    purposeScore * 0.2 +
      contentScore * 0.25 +
      conciseScore * 0.1 +
      genreScore * 0.15 +
      orgScore * 0.15 +
      languageScore * 0.15,
  );

  const strengths: string[] = [];
  const improvements: string[] = [];
  for (const r of rubric) {
    if (r.scorePercent >= 72) strengths.push(r.comment);
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
    rewrittenSnippet:
      purposeOk && requestOk
        ? undefined
        : `I am writing to ${writingCase.taskType === "discharge" ? "update you regarding" : "refer"} this patient for ${writingCase.specialty.toLowerCase()} review. I would be grateful for your assessment.`,
    humanReviewAvailable: true,
  };
}
