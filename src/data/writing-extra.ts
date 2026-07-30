import type { WritingCase } from "@/domain/types";

export const WRITING_CASES_EXTRA: WritingCase[] = [
  {
    id: "writ-3",
    title: "Transfer: fractured neck of femur",
    specialty: "Ortho",
    taskType: "transfer",
    timeLimitSec: 2400,
    wordTarget: { min: 180, max: 200 },
    task: "Write a transfer letter to the orthopaedic team on-call summarising the case and request.",
    caseNotes: `Patient: Dorothy Keane, 82 F
From: ED → Orthopaedics

Presentation
- Fall at home, unable to weight-bear
- Shortened externally rotated left leg
- X-ray: left intracapsular NOF fracture

PMH: AF on apixaban; osteoporosis; cognitions intact
Last apixaban: yesterday 20:00
Analgesia: morphine 5 mg IV given
Plan request: admit for hemiarthroplasty; hold apixaban; ortho review tonight`,
    sampleLetter: `Orthopaedic Registrar on-call
City Hospital

Re: Dorothy Keane, 82 years

Dear Doctor,

I am writing to transfer Mrs Dorothy Keane from the Emergency Department with a left intracapsular fractured neck of femur after a fall at home. She is unable to weight-bear and the leg is shortened and externally rotated; X-ray confirms the fracture.

She has atrial fibrillation on apixaban (last dose yesterday evening), osteoporosis, and intact cognition. She has received morphine 5 mg IV. I would be grateful for admission for hemiarthroplasty and advice on peri-operative anticoagulation.

Yours sincerely,
ED Team`,
    rubric: [
      { id: "r1", criterion: "Purpose", description: "Clear transfer request to orthopaedics." },
      { id: "r2", criterion: "Content", description: "Fracture type, AF/apixaban, analgesia, ask." },
      { id: "r3", criterion: "Conciseness & clarity", description: "Near word target." },
      { id: "r4", criterion: "Genre & style", description: "Professional transfer letter." },
      { id: "r5", criterion: "Organisation", description: "Logical clinical flow." },
      { id: "r6", criterion: "Language", description: "Accurate grammar/vocab." },
    ],
  },
  {
    id: "writ-4",
    title: "Referral: elective cholecystectomy work-up",
    specialty: "Surgery",
    taskType: "referral",
    timeLimitSec: 2400,
    wordTarget: { min: 180, max: 200 },
    task: "Refer to the upper GI surgical clinic for symptomatic gallstones.",
    caseNotes: `Patient: Priya Nair, 44 F
GP: Dr Sam Okeke

Hx: biliary colic x 6 months; one ED visit for pain
USS: multiple gallstones; CBD normal
Bloods: LFTs normal
Meds: lansoprazole 30 mg
Request: outpatient laparoscopic cholecystectomy assessment
NKDA`,
    sampleLetter: `Mr J. Reed
Upper GI Surgery

Dear Mr Reed,

I am writing to refer Ms Priya Nair, a 44-year-old woman, with recurrent biliary colic over six months. Ultrasound shows multiple gallstones with a normal common bile duct, and liver function tests are normal. She takes lansoprazole for reflux and has no drug allergies. I would be grateful for outpatient assessment regarding laparoscopic cholecystectomy.

Yours sincerely,
Dr Sam Okeke`,
    rubric: [
      { id: "r1", criterion: "Purpose", description: "Clear outpatient surgical referral." },
      { id: "r2", criterion: "Content", description: "Symptoms, USS, LFTs, meds." },
      { id: "r3", criterion: "Conciseness & clarity", description: "Word target." },
      { id: "r4", criterion: "Genre & style", description: "Referral conventions." },
      { id: "r5", criterion: "Organisation", description: "Ordered information." },
      { id: "r6", criterion: "Language", description: "Grammar/vocab." },
    ],
  },
  {
    id: "writ-5",
    title: "Advice letter: post-op tonsillectomy parent",
    specialty: "GP",
    taskType: "advice",
    timeLimitSec: 2400,
    wordTarget: { min: 180, max: 200 },
    task: "Write to the parent/carer with discharge advice after paediatric tonsillectomy (as the treating doctor).",
    caseNotes: `Child: Leo Martins, 6 M
Procedure: tonsillectomy yesterday
Advice to include:
- Pain expected ~7–10 days; regular paracetamol/ibuprofen
- Soft diet; hydration
- Ear pain referred common
- Seek urgent care: fresh bleeding, fever, poor fluid intake, breathing difficulty
Follow-up: GP if concerned; ENT emergency if bleeding`,
    sampleLetter: `Dear Mr and Mrs Martins,

I am writing regarding Leo’s discharge after tonsillectomy. Throat pain is common for seven to ten days — give regular paracetamol and ibuprofen as advised and offer soft foods with plenty of fluids. Ear pain can occur and is usually referred from the throat.

Please seek urgent care if there is fresh bleeding, fever, poor drinking, or any breathing difficulty. Contact ENT emergency services for bleeding, or your GP if you have other concerns.

Yours sincerely,
ENT Team`,
    rubric: [
      { id: "r1", criterion: "Purpose", description: "Clear advice purpose." },
      { id: "r2", criterion: "Content", description: "Pain, diet, red flags." },
      { id: "r3", criterion: "Conciseness & clarity", description: "Readable for carers." },
      { id: "r4", criterion: "Genre & style", description: "Advice letter tone." },
      { id: "r5", criterion: "Organisation", description: "Advice then safety-net." },
      { id: "r6", criterion: "Language", description: "Plain accurate English." },
    ],
  },
];
