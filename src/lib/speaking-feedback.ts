import type { SpeakingRolePlay } from "@/domain/types";
import type {
  SpeakingFeedback,
  SpeakingCriterionScore,
  PhoneticFlag,
} from "@/domain/feedback";
import { SPEAKING_CRITERION_LABELS } from "@/domain/feedback";
import { percentToGrade } from "@/domain/skills";

const FILLERS = ["um", "uh", "erm", "like", "you know", "basically"];
const HARD_WORDS = [
  "haemoptysis",
  "dyspnoea",
  "exacerbation",
  "anticoagulation",
  "hypertension",
  "metformin",
  "colonoscopy",
  "differential",
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
  if (!phrases.length) return 0.5;
  const l = text.toLowerCase();
  const hit = phrases.filter((p) => {
    const key = p.toLowerCase().split(/\s+/).slice(0, 4).join(" ");
    return l.includes(key);
  }).length;
  return hit / phrases.length;
}

function taskLanguage(text: string, card: string): number {
  const l = text.toLowerCase();
  let score = 40;
  if (/what (brings|concerns)|tell me|how long|can i check/.test(l)) score += 15;
  if (/explain|means|option|plan|follow/.test(l)) score += 15;
  if (/understand|questions|worry|concern/.test(l)) score += 15;
  if (card.toLowerCase().includes("diabetes") && /diabetes|sugar|insulin|metformin/.test(l))
    score += 10;
  if (card.toLowerCase().includes("warfarin") && /warfarin|inr|bleed|stroke/.test(l)) score += 10;
  if (card.toLowerCase().includes("x-ray") && /scan|ct|result|cancer|next step/.test(l)) score += 10;
  return Math.min(95, score);
}

function phoneticFlags(text: string): PhoneticFlag[] {
  const flags: PhoneticFlag[] = [];
  const lower = text.toLowerCase();
  for (const w of HARD_WORDS) {
    if (lower.includes(w)) {
      flags.push({
        word: w,
        issue: "Multisyllabic clinical term — clarity under pressure",
        suggestion: `Practice slowly: ${w.split("").join("·")} then at speaking pace.`,
      });
    }
  }
  if (/\b thr\b|\btree\b.*\bthree\b/i.test(text)) {
    flags.push({
      word: "three/tree",
      issue: "/θ/ vs /t/ confusion risk",
      suggestion: "Place tongue between teeth for /θ/ in three, therapy, breathlessness.",
    });
  }
  if (fillerRate(text) > 0.06) {
    flags.push({
      word: "um / uh",
      issue: "Filler density may hurt fluency rating",
      suggestion: "Pause silently instead of filling — chunk information.",
    });
  }
  return flags.slice(0, 6);
}

export function heuristicSpeakingFeedback(
  rolePlay: SpeakingRolePlay,
  transcript: string,
): SpeakingFeedback {
  const wc = wordCount(transcript);
  const fillers = fillerRate(transcript);
  const phraseHit = usesSamplePhrases(transcript, rolePlay.samplePhrases);
  const task = taskLanguage(transcript, rolePlay.candidateCard);

  const intelligibility = Math.round(
    Math.min(95, 55 + (wc > 40 ? 20 : wc > 15 ? 10 : 0) + (fillers < 0.05 ? 15 : 0)),
  );
  const fluency = Math.round(
    Math.min(95, 50 + (wc > 80 ? 25 : wc > 40 ? 15 : 5) + (fillers < 0.04 ? 20 : fillers < 0.08 ? 8 : -10)),
  );
  const appropriateness = Math.round(
    Math.min(95, 40 + task * 0.5 + phraseHit * 25),
  );
  const resources = Math.round(
    Math.min(95, 45 + phraseHit * 30 + (wc > 60 ? 15 : 5) + (/could|might|would|please/.test(transcript.toLowerCase()) ? 10 : 0)),
  );

  const scores = [intelligibility, fluency, appropriateness, resources];
  const ids = ["intelligibility", "fluency", "appropriateness", "resources"] as const;

  const comments: string[] = [
    intelligibility >= 70
      ? "Speech content is clear enough to follow clinically."
      : "Aim for fuller turns and slower delivery on key clinical words.",
    fluency >= 70
      ? "Pace and continuity look exam-ready."
      : "Reduce fillers; use short signposts (“First…”, “The next step…”).",
    appropriateness >= 70
      ? "Tone and functions fit a professional consultation."
      : "Cover explain / check understanding / plan more explicitly.",
    resources >= 70
      ? "Range of expressions supports the role-play goals."
      : "Borrow precise phrases from the card bank, then personalise.",
  ];

  const criteria: SpeakingCriterionScore[] = ids.map((id, i) => ({
    id,
    label: SPEAKING_CRITERION_LABELS[id],
    scorePercent: scores[i],
    comment: comments[i],
  }));

  const overallPercent = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const flags = phoneticFlags(transcript);

  const strengths = criteria.filter((c) => c.scorePercent >= 70).map((c) => c.comment);
  const improvements = criteria.filter((c) => c.scorePercent < 70).map((c) => c.comment);

  if (!transcript.trim()) {
    return {
      source: "heuristic",
      estimatedGrade: "E",
      overallPercent: 0,
      transcript: "",
      criteria: criteria.map((c) => ({
        ...c,
        scorePercent: 0,
        comment: "No transcript captured — use live speech recognition or paste what you said.",
      })),
      phoneticFlags: [],
      strengths: [],
      improvements: ["Provide a transcript (mic recognition or paste) for speaking feedback."],
      humanReviewAvailable: true,
    };
  }

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
