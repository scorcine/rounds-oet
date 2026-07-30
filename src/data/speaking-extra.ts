import type { SpeakingRolePlay } from "@/domain/types";

export const SPEAKING_ROLEPLAYS_EXTRA: SpeakingRolePlay[] = [
  {
    id: "spk-4",
    title: "ED: ankle injury advice",
    setting: "Emergency Department",
    specialty: "ED",
    timeLimitSec: 300,
    candidateCard: `YOU ARE: ED doctor
TASK: Explain likely sprain vs need for X-ray (Ottawa), RICE advice, safety-net for DVT/compartment symptoms. Check understanding.`,
    interlocutorCard: `Anxious amateur footballer wanting MRI today. Push for scan; accept reasoned plan.`,
    criteria: [
      "Clear explanation without jargon overload",
      "Shared plan for imaging/follow-up",
      "Safety-netting",
      "Managing expectations about MRI",
      "Fluency and organisation",
    ],
    samplePhrases: [
      "Based on today's assessment…",
      "X-ray helps us rule out a break.",
      "Rest, ice, elevation and gradual return…",
      "Come back sooner if…",
    ],
  },
  {
    id: "spk-5",
    title: "Pre-op anaesthesia consent chat",
    setting: "Pre-assessment clinic",
    specialty: "Anesthesia",
    timeLimitSec: 300,
    candidateCard: `YOU ARE: Anaesthetist
TASK: Explain general anaesthesia for laparoscopic cholecystectomy, aspiration risk measures, common side effects, answer fear of not waking up.`,
    interlocutorCard: `Worried about awareness and nausea. Asks if spinal is possible (not suitable here).`,
    criteria: [
      "Empathy about fear",
      "Accurate simple explanation of GA",
      "Risks/benefits balance",
      "Invite questions",
      "Language control",
    ],
    samplePhrases: [
      "It’s understandable to feel anxious.",
      "We use medicines so you are unconscious and pain-free.",
      "Nausea can happen; we give medicine to reduce that risk.",
      "What worries you most?",
    ],
  },
  {
    id: "spk-6",
    title: "Ortho: explaining hip fracture plan",
    setting: "Ward",
    specialty: "Ortho",
    timeLimitSec: 300,
    candidateCard: `YOU ARE: Orthopaedic doctor
TASK: Explain intracapsular NOF fracture and planned hemiarthroplasty to an older patient; cover timing, anticoagulation pause, physio.`,
    interlocutorCard: `Daughter present; asks about apixaban and walking again.`,
    criteria: [
      "Include family appropriately",
      "Explain operation purpose",
      "Anticoagulation plan clarity",
      "Rehab expectations",
      "Professional tone",
    ],
    samplePhrases: [
      "The ball of the hip joint is broken.",
      "We recommend replacing that part of the joint.",
      "We’ll advise when to restart the blood thinner.",
      "Physio will help you stand with support soon after surgery.",
    ],
  },
  {
    id: "spk-7",
    title: "GP: asthma action plan",
    setting: "GP clinic",
    specialty: "GP",
    timeLimitSec: 300,
    candidateCard: `YOU ARE: GP
TASK: Review inhaler technique briefly, explain preventer vs reliever, agree written action plan, safety-net for severe attack.`,
    interlocutorCard: `Uses reliever 6×/day; unsure about preventer. Smoker — defensive if lectured.`,
    criteria: [
      "Non-judgemental smoking discussion",
      "Clear inhaler roles",
      "Shared action plan",
      "Urgent symptoms listed",
      "Checking understanding",
    ],
    samplePhrases: [
      "The preventer reduces inflammation day to day.",
      "If you’re needing the blue inhaler this often…",
      "Let’s write down what to do if symptoms worsen.",
      "Would you like help cutting down smoking when you’re ready?",
    ],
  },
];
