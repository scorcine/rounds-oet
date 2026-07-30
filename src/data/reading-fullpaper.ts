import type { ReadingPassage } from "@/domain/types";

export const READING_PASSAGES_FULLPAPER: ReadingPassage[] = [
  {
    id: "read-fa-1",
    part: "A",
    title: "Expeditious: acute coronary syndrome pack",
    specialty: "Cardiology",
    timeLimitSec: 900,
    text: `DOCUMENT 1 — ED clerking
Mr David Ng, 61, presented at 09:40 with central chest pressure for 45 minutes while gardening. Associated nausea; no syncope. Background: hypertension, hyperlipidaemia, ex-smoker (quit 2019). Medications on arrival: amlodipine 10 mg daily, atorvastatin 40 mg nocte, aspirin 75 mg daily. ECG: 2 mm ST depression in V4–V6. Troponin I at 1 hour: 186 ng/L (URL 34). Killip class I. GRACE score 128. Plan: dual antiplatelet therapy, fondaparinux, admit CCU, early inpatient angiography.

DOCUMENT 2 — Pathology & observations
Hb 138 g/L, WCC 9.1, platelets 245. Na 138, K 4.1, creatinine 94 µmol/L, eGFR 72. Glucose 7.8. Lipid profile last month: LDL 3.1 mmol/L. BP 148/88, HR 92, SpO2 97% air, temp 36.7°C. Pain score on arrival 7/10; after GTN spray ×2 and morphine 5 mg IV, pain 2/10.

DOCUMENT 3 — Medication chart (ED)
Aspirin 300 mg loading given 09:55. Ticagrelor 180 mg loading given 10:05, then 90 mg BD. Fondaparinux 2.5 mg SC daily (first dose 10:20). Atorvastatin increased to 80 mg nocte. Amlodipine continued. Omeprazole 20 mg daily started (GI protection). GTN spray PRN. Morphine 5 mg IV ×1. NKDA.

DOCUMENT 4 — Trust ACS pathway excerpt
NSTE-ACS with GRACE >140 or rising troponin plus dynamic ECG changes: angiography within 24 hours. GRACE 109–140 with confirmed NSTE-ACS: angiography within 72 hours. Dual antiplatelet therapy for 12 months unless bleeding risk high. High-intensity statin for all ACS unless contraindicated. Refer cardiac rehabilitation before discharge. Smoking cessation support mandatory for current/recent smokers.`,
    questions: [
      {
        id: "read-fa-1-q1",
        prompt: "Duration of chest pressure before ED arrival:",
        answer: "45 minutes",
        acceptedAnswers: ["45 minutes", "45 mins", "forty-five minutes"],
        explanation: "Central chest pressure for 45 minutes while gardening.",
      },
      {
        id: "read-fa-1-q2",
        prompt: "Patient's age:",
        answer: "61",
        acceptedAnswers: ["61", "61 years", "sixty-one"],
        explanation: "Mr David Ng, 61.",
      },
      {
        id: "read-fa-1-q3",
        prompt: "Amlodipine dose on arrival:",
        answer: "10 mg daily",
        acceptedAnswers: ["10 mg daily", "10mg daily", "10 mg", "amlodipine 10 mg daily"],
        explanation: "Amlodipine 10 mg daily listed in clerking.",
      },
      {
        id: "read-fa-1-q4",
        prompt: "ECG finding:",
        answer: "2 mm ST depression in V4–V6",
        acceptedAnswers: [
          "2 mm ST depression in V4–V6",
          "2 mm ST depression V4-V6",
          "ST depression in V4–V6",
          "2mm ST depression in V4-V6",
        ],
        explanation: "ECG: 2 mm ST depression in V4–V6.",
      },
      {
        id: "read-fa-1-q5",
        prompt: "1-hour troponin I result:",
        answer: "186 ng/L",
        acceptedAnswers: ["186 ng/L", "186", "186 ng/l"],
        explanation: "Troponin I at 1 hour: 186 ng/L.",
      },
      {
        id: "read-fa-1-q6",
        prompt: "GRACE score:",
        answer: "128",
        acceptedAnswers: ["128"],
        explanation: "GRACE score 128.",
      },
      {
        id: "read-fa-1-q7",
        prompt: "Creatinine:",
        answer: "94 µmol/L",
        acceptedAnswers: ["94 µmol/L", "94 umol/L", "94", "94 µmol/l"],
        explanation: "Creatinine 94 µmol/L.",
      },
      {
        id: "read-fa-1-q8",
        prompt: "Pain score after analgesia:",
        answer: "2/10",
        acceptedAnswers: ["2/10", "2", "pain 2/10"],
        explanation: "After GTN and morphine, pain 2/10.",
      },
      {
        id: "read-fa-1-q9",
        prompt: "Aspirin loading dose given:",
        answer: "300 mg",
        acceptedAnswers: ["300 mg", "300mg", "aspirin 300 mg"],
        explanation: "Aspirin 300 mg loading given 09:55.",
      },
      {
        id: "read-fa-1-q10",
        prompt: "Ticagrelor maintenance dose:",
        answer: "90 mg BD",
        acceptedAnswers: ["90 mg BD", "90mg BD", "90 mg twice daily", "ticagrelor 90 mg BD"],
        explanation: "Ticagrelor 180 mg loading, then 90 mg BD.",
      },
      {
        id: "read-fa-1-q11",
        prompt: "Fondaparinux dose:",
        answer: "2.5 mg SC daily",
        acceptedAnswers: [
          "2.5 mg SC daily",
          "2.5mg SC daily",
          "2.5 mg subcutaneously daily",
          "fondaparinux 2.5 mg SC daily",
        ],
        explanation: "Fondaparinux 2.5 mg SC daily.",
      },
      {
        id: "read-fa-1-q12",
        prompt: "Atorvastatin dose after ED change:",
        answer: "80 mg nocte",
        acceptedAnswers: ["80 mg nocte", "80mg nocte", "80 mg at night", "atorvastatin 80 mg nocte"],
        explanation: "Atorvastatin increased to 80 mg nocte.",
      },
      {
        id: "read-fa-1-q13",
        prompt: "Which document states the GRACE score?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 0,
        explanation: "GRACE score 128 is recorded in Document 1 (ED clerking).",
      },
      {
        id: "read-fa-1-q14",
        prompt: "Which document records the creatinine result?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 1,
        explanation: "Creatinine 94 µmol/L is in Document 2 (pathology & observations).",
      },
      {
        id: "read-fa-1-q15",
        prompt: "Where is the aspirin loading dose recorded?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 2,
        explanation: "Aspirin 300 mg loading is on the medication chart (Document 3).",
      },
      {
        id: "read-fa-1-q16",
        prompt: "Which document states dual antiplatelet therapy duration?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 3,
        explanation: "DAPT for 12 months is in the Trust ACS pathway (Document 4).",
      },
      {
        id: "read-fa-1-q17",
        prompt: "Document number listing fondaparinux dose:",
        answer: "3",
        acceptedAnswers: ["3", "Document 3", "document 3"],
        explanation: "Fondaparinux 2.5 mg SC daily is on the medication chart (Document 3).",
      },
      {
        id: "read-fa-1-q18",
        prompt: "Which document states Killip class?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 0,
        explanation: "Killip class I is in Document 1.",
      },
      {
        id: "read-fa-1-q19",
        prompt: "Where is last month's LDL recorded?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 1,
        explanation: "LDL 3.1 mmol/L is in Document 2.",
      },
      {
        id: "read-fa-1-q20",
        prompt: "Which document requires referral to cardiac rehabilitation before discharge?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 3,
        explanation: "Cardiac rehabilitation referral is mandated in Document 4.",
      },
    ],
  },
  {
    id: "read-fb-1",
    part: "B",
    title: "Guideline: VTE prophylaxis after hip fracture",
    specialty: "Orthopaedics",
    timeLimitSec: 180,
    text: `Staff notice — Hip fracture VTE pathway
Unless contraindicated, start intermittent pneumatic compression in theatre and continue until mobile. Pharmacological prophylaxis with enoxaparin 40 mg SC daily (or 20 mg if eGFR <30) should begin 6–12 hours post-op if haemostasis is secure. Continue for 28 days after hip fracture surgery. Do not rely on aspirin alone for pharmacological prophylaxis in this group. Early mobilisation remains essential; delay beyond day 1 increases DVT risk in local audit data.`,
    questions: [
      {
        id: "read-fb-1-q1",
        prompt: "Pharmacological VTE prophylaxis after hip fracture should continue for:",
        options: ["7 days", "14 days", "28 days", "90 days"],
        correctIndex: 2,
        explanation: "Continue for 28 days after hip fracture surgery.",
      },
    ],
  },
  {
    id: "read-fb-2",
    part: "B",
    title: "Policy: oxygen targets in COPD",
    specialty: "Respiratory",
    timeLimitSec: 180,
    text: `Oxygen prescribing reminder
Patients with COPD or other risk of hypercapnic respiratory failure should have a documented SpO2 target of 88–92% unless a different target is specified by the respiratory team. Use a 24% or 28% Venturi mask initially. Obtain an ABG within 60 minutes of starting oxygen. If pH <7.35 and PaCO2 is rising, escalate for NIV assessment. Never leave high-flow uncontrolled oxygen running in this group.`,
    questions: [
      {
        id: "read-fb-2-q1",
        prompt: "Default SpO2 target for COPD at risk of hypercapnia is:",
        options: ["94–98%", "88–92%", "85–88%", ">98%"],
        correctIndex: 1,
        explanation: "Documented SpO2 target of 88–92% unless otherwise specified.",
      },
    ],
  },
  {
    id: "read-fb-3",
    part: "B",
    title: "Memo: gestational diabetes screening",
    specialty: "Obstetrics",
    timeLimitSec: 180,
    text: `Antenatal clinic memo
Offer a 75 g oral glucose tolerance test at 24–28 weeks to women with risk factors (BMI ≥30, previous GDM, first-degree relative with diabetes, previous macrosomia). Women with previous GDM should be offered testing earlier, ideally soon after the booking visit. Diagnose GDM if fasting glucose ≥5.6 mmol/L or 2-hour value ≥7.8 mmol/L. Refer to the joint diabetes–antenatal clinic within one week of a positive result.`,
    questions: [
      {
        id: "read-fb-3-q1",
        prompt: "A fasting glucose that meets the diagnostic threshold for GDM is:",
        options: ["≥5.0 mmol/L", "≥5.6 mmol/L", "≥6.5 mmol/L", "≥7.8 mmol/L"],
        correctIndex: 1,
        explanation: "Diagnose GDM if fasting glucose ≥5.6 mmol/L or 2-hour ≥7.8 mmol/L.",
      },
    ],
  },
  {
    id: "read-fb-4",
    part: "B",
    title: "Alert: warfarin bridging before endoscopy",
    specialty: "Gastroenterology",
    timeLimitSec: 180,
    text: `Endoscopy unit — anticoagulation briefing
For high-risk bleeding procedures (e.g. polypectomy, ERCP with sphincterotomy), stop warfarin 5 days before and check INR on the day. Target INR ≤1.5. Bridging with LMWH is reserved for patients at high thrombotic risk (mechanical mitral valve, VTE within 3 months, AF with prior stroke). Last therapeutic LMWH dose should be ≥24 hours before the procedure. Restart warfarin on the evening of the procedure if haemostasis is adequate.`,
    questions: [
      {
        id: "read-fb-4-q1",
        prompt: "Target INR on the day of a high-risk bleeding endoscopy is:",
        options: ["≤1.5", "≤2.5", "2–3", "≥3.5"],
        correctIndex: 0,
        explanation: "Check INR on the day; target INR ≤1.5.",
      },
    ],
  },
  {
    id: "read-fb-5",
    part: "B",
    title: "Protocol: massive transfusion activation",
    specialty: "Haematology",
    timeLimitSec: 180,
    text: `Massive haemorrhage protocol — key steps
Activate by calling switchboard stating “massive haemorrhage” and giving location and patient identifiers. Pack 1 typically contains 4 units RBC and 4 units FFP; platelets and cryoprecipitate follow on request or as per protocol pack 2. Give tranexamic acid 1 g IV within 3 hours of injury or onset where indicated. Keep the patient warm. Recheck FBC, clotting, fibrinogen and calcium after each pack. Do not delay blood for crossmatch if the patient is exsanguinating — use emergency O-negative or group-specific blood as per policy.`,
    questions: [
      {
        id: "read-fb-5-q1",
        prompt: "Tranexamic acid should be given within:",
        options: ["30 minutes", "1 hour", "3 hours", "12 hours"],
        correctIndex: 2,
        explanation: "Give tranexamic acid 1 g IV within 3 hours of injury or onset where indicated.",
      },
    ],
  },
  {
    id: "read-fb-6",
    part: "B",
    title: "Briefing: day-case anaesthesia discharge",
    specialty: "Anaesthesia",
    timeLimitSec: 180,
    text: `Day surgery discharge criteria
Patients may leave only when vital signs are stable, pain is controlled on oral analgesia, nausea is minimal, and they can mobilise safely with assistance as appropriate. A responsible adult must escort them home and stay overnight after general or regional anaesthesia. Advise no driving, alcohol, or important decisions for 24 hours. Provide written and verbal wound and medication advice. If SpO2 remains below the patient's baseline target despite oxygen weaning, escalate rather than discharge.`,
    questions: [
      {
        id: "read-fb-6-q1",
        prompt: "After general anaesthesia, patients must:",
        options: [
          "Drive themselves home if pain-free",
          "Have a responsible adult escort and overnight support",
          "Return to work the same afternoon",
          "Stop all oral analgesia for 24 hours",
        ],
        correctIndex: 1,
        explanation: "A responsible adult must escort them home and stay overnight after GA or regional anaesthesia.",
      },
    ],
  },
  {
    id: "read-fc-1",
    part: "C",
    title: "Article: SGLT2 inhibitors beyond glycaemia",
    specialty: "Diabetes",
    timeLimitSec: 1200,
    text: `Sodium–glucose co-transporter 2 (SGLT2) inhibitors were developed to lower blood glucose in type 2 diabetes by promoting urinary glucose excretion. Their place in practice has widened dramatically. Large outcome trials have shown reductions in hospitalisation for heart failure and in progression of chronic kidney disease, benefits that appear partly independent of the degree of HbA1c lowering. As a result, cardiology and renal guidelines now recommend these agents for selected patients with heart failure or albuminuric CKD even when diabetes is absent.

Mechanistically, osmotic diuresis, modest natriuresis, and favourable effects on intraglomerular pressure are often cited. Clinicians should still respect practical cautions. Genital mycotic infections are relatively common and usually mild; patient counselling on hygiene reduces recurrence. Volume depletion can occur, particularly in older adults on loop diuretics, so temporary interruption during acute dehydrating illness is wise. The rarer but serious risk of euglycaemic diabetic ketoacidosis means that patients should be told to seek urgent care if they develop unexplained nausea, vomiting, or malaise — even when capillary glucose is not markedly raised. Peri-operative protocols increasingly advise omitting the morning dose and checking ketones.

Initiation decisions should integrate eGFR thresholds in the product licence, concomitant medications, and the patient's ability to recognise sick-day rules. Framing the discussion around heart and kidney protection, rather than glucose alone, often improves adherence. Deprescribing other agents that add little cardiovascular benefit may be appropriate once an SGLT2 inhibitor is established, provided glycaemic targets remain met. Ongoing audit of genital infection rates, DKA presentations, and prescription gaps after hospital discharge will show whether local pathways are delivering the outcome gains seen in trials.`,
    questions: [
      {
        id: "read-fc-1-q1",
        prompt: "SGLT2 inhibitors were originally developed to:",
        options: [
          "Treat heart failure only",
          "Lower blood glucose in type 2 diabetes",
          "Replace insulin in type 1 diabetes",
          "Cure chronic kidney disease",
        ],
        correctIndex: 1,
        explanation: "Developed to lower blood glucose in type 2 diabetes via urinary glucose excretion.",
      },
      {
        id: "read-fc-1-q2",
        prompt: "Outcome trials showed benefits that are:",
        options: [
          "Entirely explained by large HbA1c drops",
          "Partly independent of HbA1c lowering",
          "Limited to genital infection prevention",
          "Seen only with metformin co-prescription",
        ],
        correctIndex: 1,
        explanation: "Benefits appear partly independent of the degree of HbA1c lowering.",
      },
      {
        id: "read-fc-1-q3",
        prompt: "Guidelines may recommend SGLT2 inhibitors in heart failure or CKD:",
        options: [
          "Only if HbA1c exceeds 86 mmol/mol",
          "Even when diabetes is absent",
          "Only after kidney transplant",
          "Never outside endocrinology clinics",
        ],
        correctIndex: 1,
        explanation: "Recommended for selected HF or albuminuric CKD patients even without diabetes.",
      },
      {
        id: "read-fc-1-q4",
        prompt: "A relatively common adverse effect mentioned is:",
        options: ["Stroke", "Genital mycotic infection", "Aplastic anaemia", "Thyroid storm"],
        correctIndex: 1,
        explanation: "Genital mycotic infections are relatively common and usually mild.",
      },
      {
        id: "read-fc-1-q5",
        prompt: "During acute dehydrating illness, the author advises:",
        options: [
          "Doubling the SGLT2 inhibitor dose",
          "Temporary interruption of the drug",
          "Switching immediately to insulin pump therapy",
          "Stopping all antihypertensives permanently",
        ],
        correctIndex: 1,
        explanation: "Temporary interruption during acute dehydrating illness is wise.",
      },
      {
        id: "read-fc-1-q6",
        prompt: "Euglycaemic DKA is dangerous because:",
        options: [
          "Glucose is always extremely high",
          "Symptoms can occur without markedly raised glucose",
          "It only affects people without diabetes",
          "It is treated with oral glucose alone",
        ],
        correctIndex: 1,
        explanation: "Seek care for unexplained nausea/vomiting/malaise even when glucose is not markedly raised.",
      },
      {
        id: "read-fc-1-q7",
        prompt: "Framing clinic discussions around heart and kidney protection may:",
        options: [
          "Worsen adherence",
          "Improve adherence",
          "Replace the need for eGFR checks",
          "Eliminate genital infection risk",
        ],
        correctIndex: 1,
        explanation: "Framing around heart and kidney protection often improves adherence.",
      },
      {
        id: "read-fc-1-q8",
        prompt: "Local audit after rollout should include:",
        options: [
          "Only HbA1c averages",
          "Genital infections, DKA presentations, and post-discharge prescription gaps",
          "Bone density alone",
          "Driving licence renewals",
        ],
        correctIndex: 1,
        explanation: "Audit genital infection rates, DKA presentations, and prescription gaps after discharge.",
      },
    ],
  },
  {
    id: "read-fc-2",
    part: "C",
    title: "Article: shared decisions in atrial fibrillation anticoagulation",
    specialty: "Haematology",
    timeLimitSec: 1200,
    text: `Choosing anticoagulation for atrial fibrillation (AF) is no longer a simple binary of warfarin versus nothing. Direct oral anticoagulants (DOACs) have become first-line for most eligible patients because they do not require routine INR monitoring and have favourable intracranial bleeding profiles in trial populations. Yet absolute benefit still depends on baseline stroke risk, usually estimated with CHA2DS2-VASc, while bleeding risk tools such as HAS-BLED highlight modifiable hazards — uncontrolled hypertension, concomitant antiplatelets, excess alcohol — rather than providing a reason to withhold therapy automatically.

Shared decision-making asks clinicians to present absolute risks and benefits in plain language, invite the patient's priorities, and document the agreed plan. A retired patient who fears disabling stroke may accept a higher bleeding risk; another who lives alone and has had recurrent falls may prioritise regimens that minimise monitoring visits or choose, after discussion, to decline anticoagulation temporarily while fall-prevention measures are put in place. Declining therapy after a high-quality conversation should be respected and revisited when renal function, falls risk, or social support change.

Time pressure remains the chief barrier in clinic. Pre-visit decision aids and nurse-led counselling can shift the consultation from one-way information-giving toward values clarification. Renal dosing errors with DOACs are a recurring safety theme in incident reports; eGFR (and for some agents, creatinine clearance estimates) must be checked at initiation and at intervals thereafter, especially in older adults and those on interacting medicines such as certain antifungals or antiretrovirals.

Finally, peri-procedural management should follow local bridging policies: many low-bleeding-risk procedures can proceed without interrupting DOACs, whereas higher-risk interventions need carefully timed omission. Clear written instructions reduce both thrombotic gaps and avoidable bleeds. Services that audit time-in-therapeutic-range for remaining warfarin users, DOAC persistence at twelve months, and documented SDM conversations are better placed to close the gap between guideline aspiration and everyday practice.`,
    questions: [
      {
        id: "read-fc-2-q1",
        prompt: "DOACs are first-line for most eligible AF patients partly because they:",
        options: [
          "Require weekly INR checks",
          "Do not require routine INR monitoring",
          "Have no bleeding risk",
          "Cure atrial fibrillation",
        ],
        correctIndex: 1,
        explanation: "DOACs do not require routine INR monitoring and have favourable intracranial bleeding profiles.",
      },
      {
        id: "read-fc-2-q2",
        prompt: "CHA2DS2-VASc is used primarily to estimate:",
        options: ["Bleeding risk", "Stroke risk", "Fall risk", "Renal clearance"],
        correctIndex: 1,
        explanation: "Baseline stroke risk is usually estimated with CHA2DS2-VASc.",
      },
      {
        id: "read-fc-2-q3",
        prompt: "HAS-BLED is described as highlighting:",
        options: [
          "Reasons to withhold anticoagulation automatically",
          "Modifiable bleeding hazards",
          "Only genetic clotting disorders",
          "Targets for heart rate control",
        ],
        correctIndex: 1,
        explanation: "HAS-BLED highlights modifiable hazards rather than automatic withholding.",
      },
      {
        id: "read-fc-2-q4",
        prompt: "After a high-quality SDM conversation, declining anticoagulation should be:",
        options: [
          "Overridden if CHA2DS2-VASc is above zero",
          "Respected and revisited later",
          "Reported as mandatory non-compliance",
          "Followed by forced warfarin loading",
        ],
        correctIndex: 1,
        explanation: "Declining after high-quality conversation should be respected and revisited when circumstances change.",
      },
      {
        id: "read-fc-2-q5",
        prompt: "The chief barrier to SDM in clinic is:",
        options: ["Lack of DOACs", "Time pressure", "Absence of CHA2DS2-VASc", "Patient illiteracy only"],
        correctIndex: 1,
        explanation: "Time pressure remains the chief barrier in clinic.",
      },
      {
        id: "read-fc-2-q6",
        prompt: "A recurring DOAC safety theme in incident reports is:",
        options: [
          "Renal dosing errors",
          "Excessive INR monitoring",
          "Mandatory bridging for all dental work",
          "Inability to take tablets with water",
        ],
        correctIndex: 0,
        explanation: "Renal dosing errors with DOACs are a recurring safety theme.",
      },
      {
        id: "read-fc-2-q7",
        prompt: "Many low-bleeding-risk procedures can:",
        options: [
          "Never proceed on a DOAC",
          "Proceed without interrupting DOACs",
          "Require three months off anticoagulation",
          "Only use heparin infusions",
        ],
        correctIndex: 1,
        explanation: "Many low-bleeding-risk procedures can proceed without interrupting DOACs.",
      },
      {
        id: "read-fc-2-q8",
        prompt: "Useful service audits mentioned include:",
        options: [
          "Only staff satisfaction scores",
          "Warfarin TTR, DOAC persistence at 12 months, and documented SDM",
          "Number of ECGs filed",
          "Cafeteria opening hours",
        ],
        correctIndex: 1,
        explanation: "Audit TTR for warfarin users, DOAC persistence at twelve months, and documented SDM conversations.",
      },
    ],
  },
];
