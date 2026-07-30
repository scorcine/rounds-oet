import type { ListeningExtract } from "@/domain/types";

/** Second listening bank — original clinical scripts + optional /audio/*.mp3 */
export const LISTENING_EXTRACTS_BANK2: ListeningExtract[] = [
  {
    id: "lis-a-4",
    part: "A",
    title: "Pneumonia follow-up",
    specialty: "Respiratory",
    durationSec: 260,
    audioUrl: "/audio/lis-a-4.mp3",
    transcript: `Doctor: How has your breathing been since discharge?
Patient: Better, but I still cough, especially at night.
Doctor: Any fever in the last three days?
Patient: No fever. I finished the antibiotics yesterday.
Doctor: Are you back to walking to the shops?
Patient: Yes, slowly. I get short of breath on the hill.
Doctor: Reminder — we need a repeat chest X-ray in six weeks, and please avoid smoking. Nicotine replacement is available if you want help.`,
    ttsScript:
      "How has your breathing been since discharge? Better, but I still cough, especially at night. Any fever in the last three days? No fever. I finished the antibiotics yesterday. Are you back to walking to the shops? Yes, slowly. I get short of breath on the hill. Reminder — we need a repeat chest X-ray in six weeks, and please avoid smoking. Nicotine replacement is available if you want help.",
    questions: [
      {
        id: "lis-a-4-q1",
        prompt: "When did the patient finish antibiotics?",
        answer: "yesterday",
        acceptedAnswers: ["yesterday", "finished yesterday"],
        explanation: "Finished the antibiotics yesterday.",
      },
      {
        id: "lis-a-4-q2",
        prompt: "When is the repeat chest X-ray planned?",
        options: ["In one week", "In six weeks", "Only if fever returns", "Not mentioned"],
        correctIndex: 1,
        explanation: "Repeat CXR in six weeks.",
      },
    ],
  },
  {
    id: "lis-a-5",
    part: "A",
    title: "UC flare history",
    specialty: "Gastro",
    durationSec: 270,
    audioUrl: "/audio/lis-a-5.mp3",
    transcript: `Doctor: How many bowel motions are you having each day?
Patient: About eight, mostly bloody, and I wake twice at night.
Doctor: Any fever or severe abdominal pain?
Patient: No fever. Cramping, but not severe.
Doctor: Are you still taking mesalazine?
Patient: Yes, two point four grams daily.
Doctor: You've lost three kilograms. We'll check inflammatory markers and discuss a short course of steroids if infection screens are clear.`,
    ttsScript:
      "How many bowel motions are you having each day? About eight, mostly bloody, and I wake twice at night. Any fever or severe abdominal pain? No fever. Cramping, but not severe. Are you still taking mesalazine? Yes, two point four grams daily. You've lost three kilograms. We'll check inflammatory markers and discuss a short course of steroids if infection screens are clear.",
    questions: [
      {
        id: "lis-a-5-q1",
        prompt: "Daytime stool frequency?",
        answer: "eight",
        acceptedAnswers: ["8", "about eight", "eight a day"],
        explanation: "About eight bowel motions a day.",
      },
      {
        id: "lis-a-5-q2",
        prompt: "Mesalazine dose mentioned?",
        answer: "2.4 g daily",
        acceptedAnswers: ["2.4 grams", "two point four grams", "2.4 g daily"],
        explanation: "Two point four grams daily.",
      },
    ],
  },
  {
    id: "lis-b-3",
    part: "B",
    title: "Handover: DKA on the ward",
    specialty: "Endocrine",
    durationSec: 110,
    audioUrl: "/audio/lis-b-3.mp3",
    transcript: `Registrar: Bed four is Miss Rahman, twenty-two, type one diabetes, pump failure, DKA. pH on arrival seven point one two, ketones five point two. She's on fixed-rate insulin and saline with potassium replacement. Latest potassium three point six. HDU step-down if ketones fall below one and she's eating. Do not restart the pump overnight — endocrine will review in the morning.`,
    ttsScript:
      "Bed four is Miss Rahman, twenty-two, type one diabetes, pump failure, DKA. pH on arrival seven point one two, ketones five point two. She's on fixed-rate insulin and saline with potassium replacement. Latest potassium three point six. HDU step-down if ketones fall below one and she's eating. Do not restart the pump overnight — endocrine will review in the morning.",
    questions: [
      {
        id: "lis-b-3-q1",
        prompt: "What triggered this DKA episode?",
        options: ["Missed meals only", "Pump failure", "Steroid therapy", "New type 2 diagnosis"],
        correctIndex: 1,
        explanation: "Pump failure mentioned.",
      },
      {
        id: "lis-b-3-q2",
        prompt: "Should the insulin pump be restarted overnight?",
        options: ["Yes immediately", "No — endocrine review in the morning", "Only if glucose <4", "Patient decision alone"],
        correctIndex: 1,
        explanation: "Do not restart overnight; endocrine review morning.",
      },
    ],
  },
  {
    id: "lis-b-4",
    part: "B",
    title: "Briefing: anticoagulation clinic",
    specialty: "Haematology",
    durationSec: 100,
    audioUrl: "/audio/lis-b-4.mp3",
    transcript: `Nurse lead: Afternoon list — three new warfarins after provoked PE. Target INR two to three. Bridge with LMWH until two therapeutic INRs. Flag anyone on amiodarone or starting antibiotics — dose adjustments needed. Give the bleeding leaflet and book day-five clinic for Mr Briggs.`,
    ttsScript:
      "Afternoon list — three new warfarins after provoked PE. Target INR two to three. Bridge with LMWH until two therapeutic INRs. Flag anyone on amiodarone or starting antibiotics — dose adjustments needed. Give the bleeding leaflet and book day-five clinic for Mr Briggs.",
    questions: [
      {
        id: "lis-b-4-q1",
        prompt: "Target INR range?",
        options: ["1–1.5", "2–3", "3.5–4.5", "Any above 1.2"],
        correctIndex: 1,
        explanation: "Target INR two to three.",
      },
      {
        id: "lis-b-4-q2",
        prompt: "When to stop bridging LMWH?",
        options: ["After first dose of warfarin", "After two therapeutic INRs", "At three months", "Never"],
        correctIndex: 1,
        explanation: "Until two therapeutic INRs.",
      },
    ],
  },
  {
    id: "lis-c-3",
    part: "C",
    title: "Talk: post-partum hypertension",
    specialty: "Obstetrics",
    durationSec: 200,
    audioUrl: "/audio/lis-c-3.mp3",
    transcript: `Speaker: Blood pressure can rise in the first days after birth even when antenatal readings were normal. We treat sustained readings around one hundred and fifty over one hundred, depending on symptoms and local thresholds. Labetalol is commonly first-line and is compatible with breastfeeding. Safety-netting must cover severe headache, visual disturbance and epigastric pain — these warrant urgent assessment for evolving pre-eclampsia spectrum disease. Early community blood pressure checks reduce readmissions in our service audit.`,
    ttsScript:
      "Blood pressure can rise in the first days after birth even when antenatal readings were normal. We treat sustained readings around one hundred and fifty over one hundred, depending on symptoms and local thresholds. Labetalol is commonly first-line and is compatible with breastfeeding. Safety-netting must cover severe headache, visual disturbance and epigastric pain — these warrant urgent assessment for evolving pre-eclampsia spectrum disease. Early community blood pressure checks reduce readmissions in our service audit.",
    questions: [
      {
        id: "lis-c-3-q1",
        prompt: "Which antihypertensive is described as commonly first-line and breastfeeding-compatible?",
        options: ["Ramipril", "Labetalol", "Spironolactone", "Atenolol only"],
        correctIndex: 1,
        explanation: "Labetalol commonly first-line and compatible with breastfeeding.",
      },
      {
        id: "lis-c-3-q2",
        prompt: "Which symptom cluster needs urgent review?",
        options: [
          "Mild ankle swelling alone",
          "Severe headache, visual change, epigastric pain",
          "Lochia lasting two weeks",
          "Hunger after breastfeeding",
        ],
        correctIndex: 1,
        explanation: "Severe headache, visual disturbance, epigastric pain.",
      },
    ],
  },
  {
    id: "lis-c-4",
    part: "C",
    title: "Talk: finishing antibiotics after CAP",
    specialty: "Respiratory",
    durationSec: 190,
    audioUrl: "/audio/lis-c-4.mp3",
    transcript: `Speaker: Patients often stop antibiotics early once fever settles. Incomplete courses are linked with relapse and resistance pressure in respiratory pathogens. Discharge counselling should state the exact remaining days, advise on cough duration — which may last weeks — and schedule interval imaging when consolidation was present. Smoking cessation support at this teachable moment improves one-year quit rates in observational data.`,
    ttsScript:
      "Patients often stop antibiotics early once fever settles. Incomplete courses are linked with relapse and resistance pressure in respiratory pathogens. Discharge counselling should state the exact remaining days, advise on cough duration — which may last weeks — and schedule interval imaging when consolidation was present. Smoking cessation support at this teachable moment improves one-year quit rates in observational data.",
    questions: [
      {
        id: "lis-c-4-q1",
        prompt: "Why is completing antibiotics emphasised?",
        options: [
          "To shorten cough to 24 hours",
          "Relapse and resistance concerns",
          "Hospital policy only",
          "Because imaging is unnecessary",
        ],
        correctIndex: 1,
        explanation: "Incomplete courses linked with relapse and resistance.",
      },
      {
        id: "lis-c-4-q2",
        prompt: "How long may cough continue after pneumonia?",
        options: ["Only until fever ends", "Possibly weeks", "Exactly three days", "Never after antibiotics"],
        correctIndex: 1,
        explanation: "Cough may last weeks.",
      },
    ],
  },
];
