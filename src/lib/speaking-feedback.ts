import type { SpeakingRolePlay } from "@/domain/types";
import type {
  SpeakingFeedback,
  SpeakingCriterionScore,
  PhoneticFlag,
} from "@/domain/feedback";
import { SPEAKING_CRITERION_LABELS } from "@/domain/feedback";
import { percentToGrade } from "@/domain/skills";

const FILLERS = ["um", "uh", "erm", "like", "you know", "basically", "sort of", "kind of"];
const HARD_WORDS = [
  "haemoptysis",
  "dyspnoea",
  "exacerbation",
  "anticoagulation",
  "hypertension",
  "metformin",
  "colonoscopy",
  "differential",
  "labetalol",
  "mesalazine",
];

function wordCount(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

function fillerRate(text: string): number {
  const words = text.toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return 1;
  const fillers = words.filter((w) => FILLERS.includes(w.replace(/[^a-z']/g, ""))).length;
  return fillers / words.length;
}

function usesSamplePhrases(text: string, phrases: string[]): number {
  if (!phrases.length) return 0.35;
  const l = text.toLowerCase();
  const hit = phrases.filter((p) => {
    const key = p.toLowerCase().split(/\s+/).slice(0, 4).join(" ");
    return l.includes(key);
  }).length;
  return hit / phrases.length;
}

function taskLanguage(text: string, card: string): number {
  const l = text.toLowerCase();
  let score = 28;
  if (/what (brings|concerns)|tell me|how long|can i check|would you mind/.test(l)) score += 12;
  if (/explain|means|option|plan|follow|next step/.test(l)) score += 12;
  if (/understand|questions|worry|concern|does that make sense|any questions/.test(l))
    score += 14;
  if (/if .{0,40}(worsen|return|urgent|emergency|seek)/.test(l)) score += 10; // safety-net
  if (card.toLowerCase().includes("diabetes") && /diabetes|sugar|insulin|metformin/.test(l))
    score += 8;
  if (card.toLowerCase().includes("warfarin") && /warfarin|inr|bleed|stroke/.test(l)) score += 8;
  if (card.toLowerCase().includes("x-ray") && /scan|ct|result|cancer|next step|ottawa/.test(l))
    score += 8;
  if (/sorry|i understand|it('?s| is) (normal|common) to (feel|be)/.test(l)) score += 6;
  return Math.min(90, score);
}

function phoneticFlags(text: string): PhoneticFlag[] {
  const flags: PhoneticFlag[] = [];
  const lower = text.toLowerCase();
  for (const w of HARD_WORDS) {
    if (lower.includes(w)) {
      flags.push({
        word: w,
        issue: "Multisyllabic clinical term — clarity under pressure",
        suggestion: `Practice slowly, then at consultation pace: ${w}.`,
      });
    }
  }
  if (fillerRate(text) > 0.05) {
    flags.push({
      word: "um / uh",
      issue: "Filler density may hurt Fluency",
      suggestion: "Silent pause + signpost (“First…”, “The plan is…”) instead of fillers.",
    });
  }
  return flags.slice(0, 6);
}

function clamp(n: number): number {
  return Math.max(0, Math.min(92, Math.round(n)));
}

export function heuristicSpeakingFeedback(
  rolePlay: SpeakingRolePlay,
  transcript: string,
): SpeakingFeedback {
  const wc = wordCount(transcript);
  const fillers = fillerRate(transcript);
  const phraseHit = usesSamplePhrases(transcript, rolePlay.samplePhrases);
  const task = taskLanguage(transcript, rolePlay.candidateCard);

  // Deliberately hard to “gift” a B without real consultation language
  const intelligibility = clamp(
    42 + (wc > 90 ? 18 : wc > 50 ? 10 : wc > 25 ? 4 : -8) + (fillers < 0.04 ? 12 : fillers < 0.07 ? 4 : -8),
  );
  const fluency = clamp(
    38 +
      (wc > 120 ? 18 : wc > 70 ? 10 : 2) +
      (fillers < 0.035 ? 16 : fillers < 0.06 ? 6 : -12),
  );
  const appropriateness = clamp(30 + task * 0.55 + phraseHit * 18);
  const resources = clamp(
    34 +
      phraseHit * 22 +
      (wc > 80 ? 12 : wc > 40 ? 5 : -5) +
      (/could|might|would|please|i suggest|i recommend/.test(transcript.toLowerCase()) ? 8 : 0),
  );

  const scores = [intelligibility, fluency, appropriateness, resources];
  const ids = ["intelligibility", "fluency", "appropriateness", "resources"] as const;

  const comments: string[] = [
    intelligibility >= 72
      ? "Turns are clear enough for a clinical listener."
      : "Need fuller, clearer turns — slow down on key clinical words.",
    fluency >= 72
      ? "Continuity is closer to exam pace."
      : "Cut fillers; use short signposts and finish clinical points.",
    appropriateness >= 72
      ? "Functions (explain / check / plan / safety-net) are present."
      : "Cover explain, check understanding, shared plan and safety-net explicitly.",
    resources >= 72
      ? "Range of expressions supports the role-play goals."
      : "Expand precise clinical language (modality, advice, reassurance) beyond basic phrases.",
  ];

  const criteria: SpeakingCriterionScore[] = ids.map((id, i) => ({
    id,
    label: SPEAKING_CRITERION_LABELS[id],
    scorePercent: scores[i],
    comment: comments[i],
  }));

  const overallPercent = Math.round(
    intelligibility * 0.25 + fluency * 0.25 + appropriateness * 0.3 + resources * 0.2,
  );
  const flags = phoneticFlags(transcript);

  if (!transcript.trim() || wc < 25) {
    return {
      source: "heuristic",
      estimatedGrade: "E",
      overallPercent: wc < 5 ? 0 : Math.min(35, overallPercent),
      transcript,
      criteria: criteria.map((c) => ({
        ...c,
        scorePercent: wc < 5 ? 0 : Math.min(40, c.scorePercent),
        comment:
          wc < 5
            ? "No usable transcript — speak the full role-play (or paste what you said)."
            : "Transcript too short for a realistic OET speaking sample (~2–3 minutes of talk).",
      })),
      phoneticFlags: [],
      strengths: [],
      improvements: [
        "Produce a full consultation sample (≥ ~80–120 words) covering task card goals.",
      ],
      humanReviewAvailable: true,
    };
  }

  const strengths = criteria.filter((c) => c.scorePercent >= 72).map((c) => c.comment);
  const improvements = criteria.filter((c) => c.scorePercent < 72).map((c) => c.comment);

  return {
    source: "heuristic",
    estimatedGrade: percentToGrade(overallPercent),
    overallPercent,
    transcript,
    criteria,
    phoneticFlags: flags,
    strengths: strengths.slice(0, 3),
    improvements: improvements.slice(0, 4),
    humanReviewAvailable: true,
  };
}
