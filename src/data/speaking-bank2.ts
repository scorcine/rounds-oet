import type { SpeakingRolePlay } from "@/domain/types";

/** Second speaking bank — original role-plays. */
export const SPEAKING_ROLEPLAYS_BANK2: SpeakingRolePlay[] = [
  {
    id: "spk-8",
    title: "Respiratory: explaining pneumonia antibiotics",
    setting: "Ward / discharge bay",
    specialty: "Respiratory",
    timeLimitSec: 300,
    candidateCard: `YOU ARE: Respiratory doctor
TASK: Explain CAP diagnosis, finish oral antibiotics, smoking cessation offer, when to seek help (worsening SOB, fever, chest pain). Check understanding.`,
    interlocutorCard: `Wants to stop antibiotics early because feeling better. Mildly defensive about smoking.`,
    criteria: [
      "Clear explanation of finishing the course",
      "Empathic smoking discussion",
      "Safety-netting",
      "Checking understanding",
      "Organisation and fluency",
    ],
    samplePhrases: [
      "Even when you feel better, completing the antibiotics helps prevent relapse.",
      "If breathlessness or fever returns…",
      "Would you like support cutting down smoking?",
      "Can I check what you’ll do if symptoms worsen?",
    ],
  },
  {
    id: "spk-9",
    title: "Gastro: IBD flare shared plan",
    setting: "Outpatient clinic",
    specialty: "Gastro",
    timeLimitSec: 300,
    candidateCard: `YOU ARE: Gastroenterologist
TASK: Explain likely UC flare, stool tests already done, discuss short steroid course risks/benefits, urgent return symptoms (severe pain, fever, heavy bleeding).`,
    interlocutorCard: `Afraid of steroids (“moon face”). Asks about diet cures.`,
    criteria: [
      "Address steroid concerns honestly",
      "Avoid false promises about diet alone",
      "Shared decision-making",
      "Clear red flags",
      "Professional rapport",
    ],
    samplePhrases: [
      "Steroids can cause temporary side effects; we use the shortest effective course.",
      "Diet can help comfort, but it doesn’t replace medical treatment in a flare.",
      "Come sooner if you develop fever or heavy bleeding.",
    ],
  },
  {
    id: "spk-10",
    title: "ED: explaining DKA treatment",
    setting: "Emergency Department",
    specialty: "ED",
    timeLimitSec: 300,
    candidateCard: `YOU ARE: ED doctor
TASK: Explain DKA simply to a young adult with T1DM after pump failure; outline fluids, insulin infusion, HDU transfer, what happens to the pump for now.`,
    interlocutorCard: `Anxious about ICU; worried about missing university tomorrow.`,
    criteria: [
      "Plain-language explanation",
      "Empathy about plans disrupted",
      "Clear next steps",
      "Invite questions",
      "Calm organised delivery",
    ],
    samplePhrases: [
      "Your body is short of insulin, so acids built up in the blood.",
      "We’ll give fluids and insulin through a drip on a monitored ward.",
      "The pump stays off until you’re stable and the team reassesses it.",
    ],
  },
  {
    id: "spk-11",
    title: "Haematology: warfarin counselling",
    setting: "Clinic",
    specialty: "Haematology",
    timeLimitSec: 300,
    candidateCard: `YOU ARE: Doctor
TASK: Counsel after provoked PE — warfarin purpose, INR monitoring, interactions, bleeding signs, travel/alcohol. Confirm understanding.`,
    interlocutorCard: `Drinks wine daily; takes herbal supplements; asks if aspirin is enough instead.`,
    criteria: [
      "Correct why warfarin (not aspirin alone)",
      "Practical lifestyle advice without lecturing",
      "Bleeding safety-net",
      "Teach-back",
      "Language accuracy",
    ],
    samplePhrases: [
      "Aspirin alone isn’t enough for this type of clot.",
      "Herbal products can interfere — please check with us first.",
      "What will you do if you notice black stools?",
    ],
  },
  {
    id: "spk-12",
    title: "GP: two-week wait breast referral talk",
    setting: "GP clinic",
    specialty: "GP",
    timeLimitSec: 300,
    candidateCard: `YOU ARE: GP
TASK: Explain why urgent breast clinic referral is needed, what to expect (exam/imaging), that most lumps are not cancer but need checking, answer fear.`,
    interlocutorCard: `Terrified after aunt’s cancer; asks if waiting two weeks is dangerous.`,
    criteria: [
      "Balanced reassurance without false certainty",
      "Explain pathway clearly",
      "Empathy",
      "Invite questions",
      "Fluency",
    ],
    samplePhrases: [
      "Most breast lumps are not cancer, but we check urgently to be safe.",
      "The two-week wait means specialist assessment soon.",
      "It’s completely understandable to feel worried.",
    ],
  },
  {
    id: "spk-13",
    title: "Obstetrics: post-partum BP advice",
    setting: "Postnatal ward",
    specialty: "Obstetrics",
    timeLimitSec: 300,
    candidateCard: `YOU ARE: Obstetric doctor
TASK: Explain raised BP after birth, labetalol and breastfeeding, home BP checks, when to return (severe headache, visual change, epigastric pain).`,
    interlocutorCard: `Wants to stop tablets to breastfeed; partner asks if PE is risk.`,
    criteria: [
      "Breastfeeding compatibility clarity",
      "Include partner appropriately",
      "Safety-net pre-eclampsia symptoms",
      "Checking understanding",
      "Calm tone",
    ],
    samplePhrases: [
      "Labetalol is considered compatible with breastfeeding.",
      "Please come back urgently if you get a severe headache or visual changes.",
      "We’ll arrange blood pressure checks over the next days.",
    ],
  },
];
