import type { ReadingPassage } from "@/domain/types";
import { READING_PASSAGES_EXTRA } from "./reading-extra";

const READING_PASSAGES_BASE: ReadingPassage[] = [
  {
    id: "read-a-1",
    part: "A",
    title: "Expeditious: diabetes clinic pack",
    specialty: "Endocrinology",
    timeLimitSec: 900,
    text: `DOCUMENT 1 — Referral letter
Dr Amina Okoye refers Mr James Cole, 54, for poorly controlled type 2 diabetes. HbA1c 78 mmol/mol. On metformin 1 g BD and gliclazide 80 mg BD. BMI 34. No retinopathy last year. Intermittent paraesthesia in feet.

DOCUMENT 2 — Pathology
HbA1c 78 mmol/mol (target <53). Fasting glucose 9.8. eGFR 72. LDL 3.4. Urine ACR 4.2 (normal).

DOCUMENT 3 — Medication list
Metformin 1 g BD, gliclazide 80 mg BD, atorvastatin 20 mg nocte, ramipril 5 mg daily. NKDA.

DOCUMENT 4 — Clinic policy excerpt
Offer SGLT2 inhibitor if HbA1c above target on dual oral therapy and eGFR ≥45. Refer podiatry if neuropathic symptoms. Repeat retinal screen annually.`,
    questions: [
      {
        id: "q1",
        prompt: "What is Mr Cole's latest HbA1c?",
        options: ["53 mmol/mol", "72 mmol/mol", "78 mmol/mol", "98 mmol/mol"],
        correctIndex: 2,
        explanation: "Referral and pathology both list 78 mmol/mol.",
      },
      {
        id: "q2",
        prompt: "According to clinic policy, an SGLT2 inhibitor may be offered because:",
        options: [
          "He has retinopathy",
          "HbA1c remains above target on dual therapy with adequate eGFR",
          "LDL is elevated",
          "He has microalbuminuria",
        ],
        correctIndex: 1,
        explanation: "Above target on dual oral therapy and eGFR ≥45 (his is 72).",
      },
      {
        id: "q3",
        prompt: "Which symptom suggests need for podiatry referral?",
        options: ["Thirst", "Foot paraesthesia", "High LDL", "BMI 34"],
        correctIndex: 1,
        explanation: "Intermittent paraesthesia in feet — neuropathic symptoms.",
      },
    ],
  },
  {
    id: "read-b-1",
    part: "B",
    title: "Guideline excerpt: oxygen therapy",
    specialty: "Respiratory",
    timeLimitSec: 180,
    text: `Staff notice: Target oxygen saturations
For most acutely ill patients, aim for SpO2 94–98%. For patients at risk of hypercapnic respiratory failure (COPD, morbid obesity, neuromuscular disease), aim for 88–92% unless an alternative target is documented. Use controlled oxygen via Venturi whenever possible in at-risk groups. ABG within 60 minutes of starting oxygen in these patients. Do not use high-concentration oxygen routinely in chest pain of suspected cardiac origin — titrate to target.`,
    questions: [
      {
        id: "q1",
        prompt: "For a typical COPD patient without a documented alternative, the SpO2 target is:",
        options: ["94–98%", "88–92%", "85–90%", ">98%"],
        correctIndex: 1,
        explanation: "At-risk of hypercapnia: aim 88–92%.",
      },
      {
        id: "q2",
        prompt: "When should ABG be done after starting oxygen in at-risk patients?",
        options: ["Within 15 minutes", "Within 60 minutes", "Within 4 hours", "Only if saturations fall"],
        correctIndex: 1,
        explanation: "ABG within 60 minutes.",
      },
    ],
  },
  {
    id: "read-c-1",
    part: "C",
    title: "Article: shared decision-making in anticoagulation",
    specialty: "Haematology",
    timeLimitSec: 600,
    text: `Shared decision-making (SDM) is increasingly expected when starting anticoagulation for atrial fibrillation. Absolute stroke risk reduction with warfarin or DOACs is clinically meaningful, yet bleeding risk and lifestyle constraints weigh heavily for many patients. Tools such as CHA2DS2-VASc and HAS-BLED quantify risk but do not capture values: a retired gardener may accept a higher bleed risk to avoid stroke-related disability, while a patient who lives alone may prioritise regimens with fewer monitoring visits.

Evidence suggests SDM conversations improve adherence when clinicians explicitly invite preferences, compare options using absolute rather than relative risk, and document the agreed plan. Time pressure in clinic remains the main barrier. Brief decision aids used before the appointment can shift discussion toward values rather than one-way information giving. Importantly, declining anticoagulation after a high-quality SDM process should be respected and revisited periodically, especially after changes in fall risk, renal function, or social support.`,
    questions: [
      {
        id: "q1",
        prompt: "According to the text, risk scores alone are insufficient because they:",
        options: [
          "Are inaccurate in elderly patients",
          "Do not capture patient values",
          "Cannot be used with DOACs",
          "Replace the need for ABG monitoring",
        ],
        correctIndex: 1,
        explanation: "Scores quantify risk but do not capture values.",
      },
      {
        id: "q2",
        prompt: "What is described as the main barrier to SDM in clinic?",
        options: ["Patient literacy", "Lack of guidelines", "Time pressure", "Cost of DOACs"],
        correctIndex: 2,
        explanation: "Time pressure remains the main barrier.",
      },
      {
        id: "q3",
        prompt: "The author recommends that declining anticoagulation after SDM should be:",
        options: [
          "Overridden if CHA2DS2-VASc is high",
          "Respected and revisited later",
          "Reported as non-compliance",
          "Followed by mandatory warfarin trial",
        ],
        correctIndex: 1,
        explanation: "Respect and revisit periodically after clinical/social changes.",
      },
    ],
  },
];

export const READING_PASSAGES: ReadingPassage[] = [
  ...READING_PASSAGES_BASE,
  ...READING_PASSAGES_EXTRA,
];
