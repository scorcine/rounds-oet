import type { VocabEntry } from "@/domain/types";

export const VOCAB_ENTRIES: VocabEntry[] = [
  {
    id: "v1",
    term: "shortness of breath",
    definition: "Difficulty breathing; dyspnoea.",
    specialty: "Respiratory",
    example: "She reports progressive shortness of breath on exertion over two weeks.",
    collocations: ["on exertion", "at rest", "nocturnal", "sudden onset"],
  },
  {
    id: "v2",
    term: "referral",
    definition: "Sending a patient to another clinician for opinion or management.",
    specialty: "General",
    example: "I am writing to refer this patient for urgent gastroenterology review.",
    collocations: ["urgent referral", "outpatient referral", "referral pathway"],
  },
  {
    id: "v3",
    term: "compliance / adherence",
    definition: "How consistently a patient follows agreed treatment.",
    specialty: "General",
    example: "Adherence to antihypertensive therapy has been intermittent.",
    collocations: ["poor adherence", "improve adherence", "medication adherence"],
  },
  {
    id: "v4",
    term: "differential diagnosis",
    definition: "List of possible conditions that could explain the presentation.",
    specialty: "General",
    example: "The differential diagnosis includes PE, pneumonia, and musculoskeletal pain.",
    collocations: ["narrow the differential", "working differential"],
  },
  {
    id: "v5",
    term: "haemoptysis",
    definition: "Coughing up blood from the respiratory tract.",
    specialty: "Respiratory",
    example: "Any recurrent haemoptysis should prompt urgent review.",
    collocations: ["frank haemoptysis", "streaks of blood"],
  },
  {
    id: "v6",
    term: "discharge summary",
    definition: "Clinical letter outlining admission, treatment, and follow-up.",
    specialty: "General",
    example: "Please find enclosed the discharge summary for your records.",
    collocations: ["on discharge", "discharge planning"],
  },
  {
    id: "v7",
    term: "safety-netting",
    definition: "Advice on when and how to seek further care if symptoms change.",
    specialty: "General",
    example: "Safety-netting advice was given regarding fever and increasing dyspnoea.",
    collocations: ["clear safety-netting", "safety-net advice"],
  },
  {
    id: "v8",
    term: "palpitations",
    definition: "Awareness of an abnormal or forceful heartbeat.",
    specialty: "Cardiology",
    example: "He describes intermittent palpitations lasting several minutes.",
    collocations: ["episodic palpitations", "associated with dizziness"],
  },
  {
    id: "v9",
    term: "nil by mouth (NBM)",
    definition: "Patient must not take food or drink orally.",
    specialty: "Surgery",
    example: "She remains nil by mouth pending swallow assessment.",
    collocations: ["keep NBM", "NBM from midnight"],
  },
  {
    id: "v10",
    term: "exacerbation",
    definition: "An acute worsening of a chronic condition.",
    specialty: "Respiratory",
    example: "He presented with an acute exacerbation of COPD.",
    collocations: ["acute exacerbation", "infective exacerbation"],
  },
];

export const VOCAB_SPECIALTIES = [
  "all",
  ...Array.from(new Set(VOCAB_ENTRIES.map((v) => v.specialty))).sort(),
] as const;
