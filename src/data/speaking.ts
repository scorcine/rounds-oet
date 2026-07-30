import type { SpeakingRolePlay } from "@/domain/types";
import { SPEAKING_ROLEPLAYS_EXTRA } from "./speaking-extra";

const SPEAKING_ROLEPLAYS_BASE: SpeakingRolePlay[] = [
  {
    id: "spk-1",
    title: "Explaining new diagnosis: type 2 diabetes",
    setting: "GP clinic",
    specialty: "Endocrinology",
    timeLimitSec: 300,
    candidateCard: `SETTING: GP clinic
YOU ARE: The doctor
PATIENT: Adult who received fasting glucose and HbA1c results today

TASK
- Explain what type 2 diabetes means in plain language
- Discuss lifestyle and the reason for metformin
- Check understanding and respond to worry about complications
- Agree a short-term follow-up plan

DO NOT role-play the patient.`,
    interlocutorCard: `You are the patient. You are anxious about “sugar disease” after a parent had amputations. You ask whether you will need insulin immediately and whether you can still work night shifts. Give short answers unless asked to expand.`,
    criteria: [
      "Relationship building & patient-centred approach",
      "Understanding & clarifying the patient's concerns",
      "Conveying information clearly with chunking & teach-back",
      "Appropriate clinical content for the scenario",
      "Fluency, grammar, and professional tone",
    ],
    samplePhrases: [
      "What did you understand from the results so far?",
      "Type 2 diabetes means your body is not using insulin as effectively as it should.",
      "Metformin helps your body respond better to insulin and is usually the first tablet we try.",
      "Can I check I've explained that clearly — what will you do differently this week?",
    ],
  },
  {
    id: "spk-2",
    title: "Breaking bad news: abnormal chest X-ray",
    setting: "Hospital outpatient clinic",
    specialty: "Respiratory",
    timeLimitSec: 300,
    candidateCard: `SETTING: Respiratory clinic
YOU ARE: The doctor
PATIENT: Referred after an abnormal chest X-ray showing a suspicious lung nodule

TASK
- Share the finding sensitively
- Explain next step (CT / specialist referral) without over-reassuring or alarming
- Explore support and questions
- Agree what happens before they leave today`,
    interlocutorCard: `You are worried about cancer. You interrupt once with “Just tell me if it’s cancer.” You live alone and ask if someone should come with you to the next appointment.`,
    criteria: [
      "Empathy and pacing when sharing difficult information",
      "Honest language without false reassurance",
      "Clear next steps and safety-netting",
      "Responding to emotion and practical concerns",
      "Language control under pressure",
    ],
    samplePhrases: [
      "I have the results of your chest X-ray, and I want to go through them carefully with you.",
      "There is an area that looks unusual, and we need a clearer scan to understand it.",
      "I can’t confirm a diagnosis today, and I won’t speculate — the next step is…",
      "Would you like a relative or friend with you when we discuss the CT results?",
    ],
  },
  {
    id: "spk-3",
    title: "Medication counselling: warfarin start",
    setting: "Anticoagulation clinic",
    specialty: "Haematology",
    timeLimitSec: 300,
    candidateCard: `SETTING: Anticoagulation clinic
YOU ARE: The doctor
PATIENT: Starting warfarin after a new diagnosis of atrial fibrillation

TASK
- Explain why anticoagulation is recommended
- Cover INR monitoring, diet consistency, and bleeding signs
- Address interaction concerns (alcohol, antibiotics)
- Confirm understanding`,
    interlocutorCard: `You drink wine most evenings and take occasional ibuprofen for back pain. You are annoyed about frequent blood tests. Ask if a “newer tablet” without monitoring exists.`,
    criteria: [
      "Accurate counselling content",
      "Negotiating lifestyle changes respectfully",
      "Checking comprehension",
      "Managing disagreement about monitoring",
      "Clear organisation of advice",
    ],
    samplePhrases: [
      "Warfarin lowers your risk of stroke from the irregular rhythm.",
      "We need blood tests at first so we can find a safe dose for you.",
      "Keeping your diet reasonably steady matters more than avoiding all greens.",
      "Please avoid ibuprofen unless we agree an alternative — it can increase bleeding risk.",
    ],
  },
];

export const SPEAKING_ROLEPLAYS: SpeakingRolePlay[] = [
  ...SPEAKING_ROLEPLAYS_BASE,
  ...SPEAKING_ROLEPLAYS_EXTRA,
];
