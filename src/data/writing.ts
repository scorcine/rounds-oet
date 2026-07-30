import type { WritingCase } from "@/domain/types";
import { WRITING_CASES_EXTRA } from "./writing-extra";
import { WRITING_CASES_BANK2 } from "./writing-bank2";

const WRITING_CASES_BASE: WritingCase[] = [
  {
    id: "writ-1",
    title: "Referral: suspected colorectal cancer",
    specialty: "Gastroenterology",
    taskType: "referral",
    timeLimitSec: 2400,
    wordTarget: { min: 180, max: 200 },
    task: "Using the case notes, write a letter of referral to the gastroenterologist. Explain the reason for referral and relevant history. Do not use note form.",
    caseNotes: `Patient: Margaret Hughes, 67 F
Date seen: 28 July 2026
GP: Dr Leo Martins, Riverside Medical Centre

Presenting complaint
- 3 months altered bowel habit: looser stools, frequency ↑ 4–5×/day
- Intermittent fresh blood on paper (last 6 weeks)
- Unintentional weight loss 4 kg
- Fatigue

Relevant Hx
- Mild diverticular disease (2021 colonoscopy — benign)
- Hypertension; on amlodipine 5 mg
- No family Hx colorectal Ca
- Never smoker; alcohol <4 units/week

Exam
- Pale conjunctivae
- Abdomen soft, no mass
- PR: no mass, trace fresh blood on glove

Investigations
- Hb 98 g/L (was 128 six months ago)
- Ferritin 12
- FIT positive

Plan
- Urgent gastroenterology referral (2-week pathway)
- Continue amlodipine
- Advised to seek care if heavy bleeding / severe pain / collapse`,
    sampleLetter: `Dr A. Shah
Consultant Gastroenterologist
City Hospital

28 July 2026

Re: Margaret Hughes, DOB 12/03/1959

Dear Dr Shah,

I am writing to refer Mrs Margaret Hughes, a 67-year-old woman, for urgent assessment of suspected colorectal malignancy.

She reports a three-month history of looser stools up to four or five times daily, intermittent fresh rectal bleeding for six weeks, four kilograms of unintentional weight loss, and fatigue. Examination showed conjunctival pallor with a soft abdomen and no palpable mass; rectal examination revealed no mass but fresh blood on the glove. Bloods show new anaemia (Hb 98 g/L, previously 128) with ferritin 12, and FIT is positive.

She has prior mild diverticular disease on colonoscopy in 2021, hypertension treated with amlodipine 5 mg, and no family history of colorectal cancer. I would be grateful for urgent specialist review via the two-week pathway.

Yours sincerely,
Dr Leo Martins`,
    rubric: [
      {
        id: "r1",
        criterion: "Purpose",
        description: "Clear urgent referral for suspected colorectal cancer / 2-week pathway.",
      },
      {
        id: "r2",
        criterion: "Content",
        description: "Includes duration of symptoms, bleeding, weight loss, anaemia, FIT, and key PMH.",
      },
      {
        id: "r3",
        criterion: "Conciseness & clarity",
        description: "Letter length near 180–200 words; no note form; professional tone.",
      },
      {
        id: "r4",
        criterion: "Genre & style",
        description: "Appropriate greeting, structure, and closing for a referral letter.",
      },
      {
        id: "r5",
        criterion: "Organisation",
        description: "Logical flow: reason → history → findings → request.",
      },
      {
        id: "r6",
        criterion: "Language",
        description: "Accurate clinical vocabulary and grammar suitable for Grade B.",
      },
    ],
  },
  {
    id: "writ-2",
    title: "Discharge: community pneumonia",
    specialty: "Respiratory",
    taskType: "discharge",
    timeLimitSec: 2400,
    wordTarget: { min: 180, max: 200 },
    task: "Write a discharge letter to the patient's GP summarising admission, treatment, and follow-up.",
    caseNotes: `Patient: Omar Farouk, 58 M
Admission: 22–26 July 2026
Ward: Respiratory

Dx: Community-acquired pneumonia (CURB-65 = 1)

Course
- Presented with 4 days fever, productive cough, right pleuritic pain
- CXR: right lower lobe consolidation
- Started amoxicillin + doxycycline IV→oral day 2
- SpO2 on air 96% at discharge; afebrile 48 hrs

PMH: Asthma (seretide); allergic rhinitis
Meds on discharge: complete 5 further days oral amoxicillin 500 mg TDS + doxycycline 100 mg BD; continue seretide; PRN salbutamol

Follow-up
- GP review 1 week
- Repeat CXR 6 weeks
- Safety-net: return if fever, SOB, haemoptysis`,
    sampleLetter: `Dr Priya Nair
Greenfield Surgery

26 July 2026

Re: Omar Farouk, DOB 03/11/1967

Dear Dr Nair,

Thank you for your ongoing care of Mr Omar Farouk, who was discharged today after a four-day admission with community-acquired pneumonia (CURB-65 score 1).

He presented with fever, productive cough and right pleuritic pain. Chest X-ray confirmed right lower lobe consolidation. He improved on amoxicillin and doxycycline, stepping down from intravenous to oral therapy on day two. At discharge he had been afebrile for 48 hours with saturations of 96% on air.

He should complete five further days of oral amoxicillin 500 mg three times daily and doxycycline 100 mg twice daily, and continue his usual Seretide with salbutamol as required. Please review him in one week and arrange a repeat chest X-ray in six weeks. He has been advised to return urgently if fever, breathlessness or haemoptysis recur.

Yours sincerely,
Dr Helen Cho
Respiratory Team`,
    rubric: [
      {
        id: "r1",
        criterion: "Purpose",
        description: "Clear discharge communication to GP with follow-up plan.",
      },
      {
        id: "r2",
        criterion: "Content",
        description: "Diagnosis, key results, treatment, discharge meds, safety-netting.",
      },
      {
        id: "r3",
        criterion: "Conciseness & clarity",
        description: "Near word target; readable paragraphs.",
      },
      {
        id: "r4",
        criterion: "Genre & style",
        description: "Professional discharge letter conventions.",
      },
      {
        id: "r5",
        criterion: "Organisation",
        description: "Admission summary → course → plan.",
      },
      {
        id: "r6",
        criterion: "Language",
        description: "Accurate grammar and clinical phrasing.",
      },
    ],
  },
];

export const WRITING_CASES: WritingCase[] = [
  ...WRITING_CASES_BASE,
  ...WRITING_CASES_EXTRA,
  ...WRITING_CASES_BANK2,
];
