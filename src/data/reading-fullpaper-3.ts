import type { ReadingPassage } from "@/domain/types";

export const READING_PASSAGES_FULLPAPER_3: ReadingPassage[] = [
  {
    id: "read-fa3-1",
    part: "A",
    title: "Expeditious: sepsis with AKI pack",
    specialty: "Acute medicine",
    timeLimitSec: 900,
    text: `DOCUMENT 1 — ED clerking (suspected sepsis)
Mr Harold Briggs, 74, from home, 2-day history of fever, dysuria and confusion. Background: CKD stage 3 (baseline creatinine 130 µmol/L), type 2 diabetes, hypertension. Observations on arrival 11:10: temp 38.7°C, HR 118, BP 86/52, RR 28, SpO2 94% air, NEWS2 9. Lactate 3.8 mmol/L. Source likely urinary. Plan: sepsis six, catheter specimen urine, blood cultures, urgent fluids and antibiotics, medical HDU bed.

DOCUMENT 2 — Pathology & fluid balance
WCC 18.4, neutrophils 15.1, CRP 246. Creatinine 248 µmol/L (baseline 130), K+ 5.6 mmol/L, Na 132, bicarbonate 18, eGFR 22. Hb 119 g/L, platelets 162. Urine dip: leucocytes 3+, nitrites positive, blood 2+. Blood cultures pending. Fluid balance first 4 hours: 1.5 L Hartmann's in, urine output 40 ml total via catheter.

DOCUMENT 3 — Medication & treatment chart
Oxygen 24% Venturi to target SpO2 94–98%. IV co-amoxiclav 1.2 g TDS + gentamicin 5 mg/kg (adjusted, first dose 320 mg) at 11:25 after cultures. Hartmann's 500 ml boluses ×3. Hold ramipril and metformin. Insulin sliding scale started. Paracetamol 1 g QDS. Hyperkalaemia: calcium gluconate given for peaked T waves; insulin–glucose next. NKDA.

DOCUMENT 4 — Trust sepsis–AKI pathway excerpt
Red-flag sepsis: antibiotics within 1 hour of recognition; lactate repeat within 2 hours if initial ≥2. For AKI with sepsis, stop nephrotoxins (ACEI/ARB, NSAIDs, metformin), assess obstruction, maintain MAP ≥65 with fluids then vasopressors if needed. Refer critical care if lactate remains >4 after 30 ml/kg crystalloid or if anuria persists. Daily weight and strict fluid balance. Renal referral if K+ refractory or stage 3 AKI with complications.`,
    questions: [
      {
        id: "read-fa3-1-q1",
        prompt: "Which document records the NEWS2 score?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 0,
        explanation: "NEWS2 9 is in the ED clerking (Document 1).",
      },
      {
        id: "read-fa3-1-q2",
        prompt: "Which document lists the CRP result?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 1,
        explanation: "CRP 246 is in Document 2.",
      },
      {
        id: "read-fa3-1-q3",
        prompt: "Where is the gentamicin first dose recorded?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 2,
        explanation: "First dose 320 mg is on the treatment chart (Document 3).",
      },
      {
        id: "read-fa3-1-q4",
        prompt: "Which document states the antibiotics-within-1-hour rule?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 3,
        explanation: "Red-flag sepsis antibiotics within 1 hour — Document 4.",
      },
      {
        id: "read-fa3-1-q5",
        prompt: "Document number listing baseline creatinine:",
        answer: "1",
        acceptedAnswers: ["1", "Document 1", "document 1"],
        explanation: "Baseline creatinine 130 µmol/L appears in Document 1 (also referenced in Document 2).",
      },
      {
        id: "read-fa3-1-q6",
        prompt: "Which document records urine output of 40 ml in 4 hours?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 1,
        explanation: "Fluid balance / urine output in Document 2.",
      },
      {
        id: "read-fa3-1-q7",
        prompt: "Where is calcium gluconate administration documented?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 2,
        explanation: "Calcium gluconate for peaked T waves — Document 3.",
      },
      {
        id: "read-fa3-1-q8",
        prompt: "Which document advises maintaining MAP ≥65?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 3,
        explanation: "MAP ≥65 guidance is in the pathway (Document 4).",
      },
      {
        id: "read-fa3-1-q9",
        prompt: "Lactate on arrival:",
        answer: "3.8 mmol/L",
        acceptedAnswers: ["3.8 mmol/L", "3.8", "3.8 mmol/l"],
        explanation: "Lactate 3.8 mmol/L in Document 1.",
      },
      {
        id: "read-fa3-1-q10",
        prompt: "Current creatinine:",
        answer: "248 µmol/L",
        acceptedAnswers: ["248 µmol/L", "248", "248 umol/L"],
        explanation: "Creatinine 248 µmol/L in Document 2.",
      },
      {
        id: "read-fa3-1-q11",
        prompt: "Co-amoxiclav dose:",
        answer: "1.2 g TDS",
        acceptedAnswers: ["1.2 g TDS", "1.2g TDS", "1.2 g three times daily"],
        explanation: "IV co-amoxiclav 1.2 g TDS in Document 3.",
      },
      {
        id: "read-fa3-1-q12",
        prompt: "Medicines held include:",
        answer: "ramipril and metformin",
        acceptedAnswers: ["ramipril and metformin", "ramipril & metformin", "hold ramipril and metformin"],
        explanation: "Hold ramipril and metformin (Document 3).",
      },
      {
        id: "read-fa3-1-q13",
        prompt: "Document number stating lactate repeat timing if initial ≥2:",
        answer: "4",
        acceptedAnswers: ["4", "Document 4", "document 4"],
        explanation: "Lactate repeat within 2 hours if initial ≥2 — Document 4.",
      },
      {
        id: "read-fa3-1-q14",
        prompt: "Which document notes nitrites positive on urine dip?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 1,
        explanation: "Urine dip nitrites positive — Document 2.",
      },
      {
        id: "read-fa3-1-q15",
        prompt: "Arrival blood pressure:",
        answer: "86/52",
        acceptedAnswers: ["86/52", "86 over 52"],
        explanation: "BP 86/52 in Document 1.",
      },
      {
        id: "read-fa3-1-q16",
        prompt: "Potassium:",
        answer: "5.6 mmol/L",
        acceptedAnswers: ["5.6 mmol/L", "5.6", "5.6 mmol/l"],
        explanation: "K+ 5.6 mmol/L in Document 2.",
      },
      {
        id: "read-fa3-1-q17",
        prompt: "Oxygen device and target:",
        answer: "24% Venturi to SpO2 94–98%",
        acceptedAnswers: [
          "24% Venturi to SpO2 94–98%",
          "24% Venturi 94–98%",
          "24% Venturi to target SpO2 94–98%",
        ],
        explanation: "Oxygen 24% Venturi to target SpO2 94–98% (Document 3).",
      },
      {
        id: "read-fa3-1-q18",
        prompt: "Which document says refer critical care if lactate remains >4 after 30 ml/kg?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 3,
        explanation: "Critical care referral criteria — Document 4.",
      },
      {
        id: "read-fa3-1-q19",
        prompt: "Time first antibiotics given:",
        answer: "11:25",
        acceptedAnswers: ["11:25", "11.25"],
        explanation: "Antibiotics at 11:25 in Document 3.",
      },
      {
        id: "read-fa3-1-q20",
        prompt: "Which document identifies the likely source as urinary?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 0,
        explanation: "Source likely urinary — Document 1.",
      },
    ],
  },
  {
    id: "read-fb3-1",
    part: "B",
    title: "Guideline: anaphylaxis adrenaline dosing",
    specialty: "ED",
    timeLimitSec: 180,
    text: `Anaphylaxis — immediate treatment
Give IM adrenaline 500 micrograms (0.5 ml of 1:1000) into the mid-anterolateral thigh for adults. Repeat after 5 minutes if no improvement. Lie the patient flat with legs elevated unless breathing is compromised (then sit up). Give high-flow oxygen and IV fluids for shock. Remove the trigger if still present. Observe for biphasic reaction; admit if adrenaline required.`,
    questions: [
      {
        id: "read-fb3-1-q1",
        prompt: "Adult IM adrenaline dose stated is:",
        options: ["500 micrograms", "50 micrograms", "5 mg IV push routinely", "No adrenaline"],
        correctIndex: 0,
        explanation: "IM adrenaline 500 micrograms for adults.",
      },
    ],
  },
  {
    id: "read-fb3-2",
    part: "B",
    title: "Policy: NG tube confirmation",
    specialty: "Nursing practice",
    timeLimitSec: 180,
    text: `Nasogastric feeding safety
Never commence feed or medication until tube position is confirmed. First-line: aspirate pH ≤5.5. If aspirate unobtainable or pH >5.5, arrange chest X-ray interpretation by a competent clinician — do not rely on whoosh test. Document measurement at the nose and secure the tube. Re-check after vomiting, severe coughing or suspected displacement.`,
    questions: [
      {
        id: "read-fb3-2-q1",
        prompt: "First-line confirmation of NG position is:",
        options: ["Aspirate pH ≤5.5", "Whoosh test alone", "Patient report only", "No check needed"],
        correctIndex: 0,
        explanation: "First-line: aspirate pH ≤5.5.",
      },
    ],
  },
  {
    id: "read-fb3-3",
    part: "B",
    title: "Memo: gestational hypertension follow-up",
    specialty: "Obstetrics",
    timeLimitSec: 180,
    text: `Antenatal day assessment
Women with new BP ≥140/90 after 20 weeks without proteinuria need bloods (FBC, U&Es, LFTs, urate) and urine PCR, with obstetric review the same day if severe features are absent but BP remains raised. Provide PET symptom advice. Repeat BP at least twice weekly initially. Escalate immediately for headache, visual aura, epigastric pain or BP ≥160/110.`,
    questions: [
      {
        id: "read-fb3-3-q1",
        prompt: "Immediate escalation is required for BP:",
        options: ["≥160/110", "≥120/70", "≥90/60", "Any reading below 100 systolic"],
        correctIndex: 0,
        explanation: "Escalate immediately for BP ≥160/110 (among other features).",
      },
    ],
  },
  {
    id: "read-fb3-4",
    part: "B",
    title: "Alert: digoxin toxicity clues",
    specialty: "Cardiology",
    timeLimitSec: 180,
    text: `Digoxin safety briefing
Suspect toxicity with nausea, visual disturbance, confusion or new arrhythmias — especially bradycardia or ventricular ectopy — in patients on digoxin, particularly with AKI or hypokalaemia. Check digoxin level (timing relative to dose matters), U&Es and ECG. Hold digoxin and correct electrolytes. Discuss digoxin-specific antibody fragments for life-threatening arrhythmia or severe hyperkalaemia with toxic levels.`,
    questions: [
      {
        id: "read-fb3-4-q1",
        prompt: "Toxicity risk is especially increased with:",
        options: ["AKI or hypokalaemia", "Well-controlled eczema", "High fibre diet alone", "Wearing glasses"],
        correctIndex: 0,
        explanation: "Particularly with AKI or hypokalaemia.",
      },
    ],
  },
  {
    id: "read-fb3-5",
    part: "B",
    title: "Protocol: needle-stick aftercare",
    specialty: "Occupational health",
    timeLimitSec: 180,
    text: `Sharps injury — immediate steps
Encourage bleeding, wash with soap and water — do not suck the wound. Report to the shift leader and occupational health / ED as per local hours. Source patient testing requires appropriate consent pathways. Risk assessment for HIV/hepatitis post-exposure prophylaxis should occur without delay; PEP for HIV is most effective when started ASAP, ideally within hours. Complete the incident form the same shift.`,
    questions: [
      {
        id: "read-fb3-5-q1",
        prompt: "After a needle-stick, the wound should be:",
        options: [
          "Washed with soap and water (do not suck)",
          "Sucked vigorously",
          "Ignored until next week",
          "Covered without washing",
        ],
        correctIndex: 0,
        explanation: "Wash with soap and water — do not suck the wound.",
      },
    ],
  },
  {
    id: "read-fb3-6",
    part: "B",
    title: "Briefing: alcohol withdrawal scoring",
    specialty: "Acute medicine",
    timeLimitSec: 180,
    text: `CIWA-Ar ward reminder
Score symptoms regularly in patients at risk of alcohol withdrawal. Offer benzodiazepines as per protocol when CIWA-Ar reaches treatment threshold. Give Pabrinex (or local thiamine regimen) parenterally to those at risk of Wernicke’s encephalopathy before glucose if severely malnourished. Do not discharge while scores remain high or seizures have occurred within 24 hours without senior review.`,
    questions: [
      {
        id: "read-fb3-6-q1",
        prompt: "Parenteral thiamine (e.g. Pabrinex) is emphasised for those at risk of:",
        options: ["Wernicke’s encephalopathy", "Simple constipation only", "Urticaria alone", "Tinnitus"],
        correctIndex: 0,
        explanation: "Give parenteral thiamine to those at risk of Wernicke’s encephalopathy.",
      },
    ],
  },
  {
    id: "read-fc3-1",
    part: "C",
    title: "Article: recognising obstructive sleep apnoea in clinic",
    specialty: "Respiratory",
    timeLimitSec: 1200,
    text: `Obstructive sleep apnoea (OSA) is common, under-diagnosed, and tightly linked to resistant hypertension, atrial fibrillation, road traffic accidents and poorly controlled type 2 diabetes. Snoring alone does not confirm the diagnosis; ask about witnessed apnoeas, unrefreshing sleep, morning headache and sleepiness in passive situations. The Epworth Sleepiness Scale helps quantify daytime sleepiness but can under-estimate risk in patients who minimise symptoms to keep driving licences.

Examination may show a crowded oropharynx, large neck circumference or resistant hypertension, yet a normal exam never excludes OSA. Home sleep studies are appropriate for high-probability uncomplicated cases; inpatient polysomnography remains useful when heart failure, neuromuscular disease or unclear results complicate the picture.

Continuous positive airway pressure (CPAP) is first-line for moderate–severe symptomatic OSA. Adherence predicts benefit more than machine brand: early troubleshooting of mask leak, nasal obstruction and claustrophobia improves persistence. Weight loss, positional strategies and mandibular advancement devices have roles in selected mild–moderate disease. Surgeons’ referrals should follow failed conservative measures except for clear anatomical candidates discussed in a multidisciplinary meeting.

Driving advice is non-negotiable. Patients with suspected or confirmed OSA and sleepiness must be told not to drive until adequately treated, and clinicians should document that conversation. Services that embed OSA screening in AF and bariatric pathways catch disease earlier and reduce avoidable cardiovascular admissions.`,
    questions: [
      {
        id: "read-fc3-1-q1",
        prompt: "Snoring alone:",
        options: [
          "Does not confirm OSA",
          "Always proves severe OSA",
          "Excludes the diagnosis",
          "Removes driving concerns",
        ],
        correctIndex: 0,
        explanation: "Snoring alone does not confirm the diagnosis.",
      },
      {
        id: "read-fc3-1-q2",
        prompt: "The Epworth Scale can under-estimate risk when patients:",
        options: [
          "Minimise symptoms to keep driving licences",
          "Always exaggerate sleepiness",
          "Never drive",
          "Have no neck",
        ],
        correctIndex: 0,
        explanation: "Can under-estimate risk in patients who minimise symptoms to keep driving licences.",
      },
      {
        id: "read-fc3-1-q3",
        prompt: "A normal examination:",
        options: ["Never excludes OSA", "Always excludes OSA", "Proves CPAP will fail", "Means no history is needed"],
        correctIndex: 0,
        explanation: "A normal exam never excludes OSA.",
      },
      {
        id: "read-fc3-1-q4",
        prompt: "First-line therapy for moderate–severe symptomatic OSA is:",
        options: ["CPAP", "Immediate laryngectomy", "Benzodiazepines at night", "No treatment"],
        correctIndex: 0,
        explanation: "CPAP is first-line for moderate–severe symptomatic OSA.",
      },
      {
        id: "read-fc3-1-q5",
        prompt: "What predicts CPAP benefit more than machine brand?",
        options: ["Adherence", "Colour of the hose", "Clinic wallpaper", "Appointment day"],
        correctIndex: 0,
        explanation: "Adherence predicts benefit more than machine brand.",
      },
      {
        id: "read-fc3-1-q6",
        prompt: "Patients with OSA and sleepiness must be advised:",
        options: [
          "Not to drive until adequately treated",
          "To drive longer hours",
          "That documentation is optional",
          "To ignore DVLA concerns",
        ],
        correctIndex: 0,
        explanation: "Told not to drive until adequately treated; document the conversation.",
      },
      {
        id: "read-fc3-1-q7",
        prompt: "Home sleep studies suit:",
        options: [
          "High-probability uncomplicated cases",
          "Every neonate first",
          "Only after five failed CPAP trials",
          "Patients refusing all history-taking",
        ],
        correctIndex: 0,
        explanation: "Home sleep studies are appropriate for high-probability uncomplicated cases.",
      },
      {
        id: "read-fc3-1-q8",
        prompt: "Embedding OSA screening in AF and bariatric pathways may:",
        options: [
          "Catch disease earlier and reduce avoidable cardiovascular admissions",
          "Increase undiagnosed rates deliberately",
          "Replace the need for any history",
          "Abolish hypertension permanently in all patients",
        ],
        correctIndex: 0,
        explanation: "Catch disease earlier and reduce avoidable cardiovascular admissions.",
      },
    ],
  },
  {
    id: "read-fc3-2",
    part: "C",
    title: "Article: shared care in early rheumatoid arthritis",
    specialty: "Rheumatology",
    timeLimitSec: 1200,
    text: `Early rheumatoid arthritis (RA) outcomes improve when treatment starts before irreversible joint damage. NICE-aligned pathways urge referral of suspected persistent synovitis urgently — ideally with review within days to a few weeks — rather than prolonged primary-care NSAID trials alone. Baseline assessment includes joint counts, inflammatory markers, rheumatoid factor, anti-CCP antibodies, and screening for infection and lung disease before immunosuppression.

Treat-to-target strategies aim for remission or low disease activity, escalating DMARDs when targets are missed at regular reviews. Methotrexate remains the anchor conventional DMARD for many, with clear weekly dosing education and blood-test monitoring. Combination conventional DMARDs or early biologic/targeted synthetic agents are considered when poor prognostic factors or inadequate response appear.

Shared care succeeds when responsibilities are explicit: who checks bloods, who adjusts dose, and how quickly abnormalities are acted on. Patients need written sick-day rules for intercurrent infection and advice on vaccination timing relative to B-cell depleting therapies. Pregnancy planning should be raised early; several DMARDs require washout or switch.

Audit of time-to-first-DMARD, proportion achieving target by six months, and glucocorticoid cumulative dose helps services spot delays. Empathic explanation that “early aggressive treatment protects joints” often improves acceptance of monitoring burdens. Delayed referral remains the dominant modifiable failure in many regions.`,
    questions: [
      {
        id: "read-fc3-2-q1",
        prompt: "Suspected persistent synovitis should be referred:",
        options: [
          "Urgently rather than prolonged NSAID trials alone",
          "Only after years of symptoms",
          "Never from primary care",
          "After joint replacement only",
        ],
        correctIndex: 0,
        explanation: "Referral urgently rather than prolonged primary-care NSAID trials alone.",
      },
      {
        id: "read-fc3-2-q2",
        prompt: "Treat-to-target aims for:",
        options: [
          "Remission or low disease activity",
          "Maximum glucocorticoid dose indefinitely",
          "Avoiding all blood tests",
          "Ignoring joint counts",
        ],
        correctIndex: 0,
        explanation: "Aim for remission or low disease activity.",
      },
      {
        id: "read-fc3-2-q3",
        prompt: "Methotrexate is described as:",
        options: [
          "The anchor conventional DMARD for many",
          "A daily antibiotic",
          "Unnecessary to monitor",
          "Only topical",
        ],
        correctIndex: 0,
        explanation: "Methotrexate remains the anchor conventional DMARD for many.",
      },
      {
        id: "read-fc3-2-q4",
        prompt: "Shared care needs clarity on:",
        options: [
          "Who checks bloods and adjusts doses",
          "Only parking permits",
          "Cafeteria rosters",
          "Font choice in letters",
        ],
        correctIndex: 0,
        explanation: "Who checks bloods, who adjusts dose, how abnormalities are acted on.",
      },
      {
        id: "read-fc3-2-q5",
        prompt: "Pregnancy planning should be:",
        options: ["Raised early", "Ignored until delivery", "Deferred for a decade always", "Handled without DMARD knowledge"],
        correctIndex: 0,
        explanation: "Pregnancy planning should be raised early.",
      },
      {
        id: "read-fc3-2-q6",
        prompt: "A useful audit metric mentioned is:",
        options: [
          "Time-to-first-DMARD",
          "Number of waiting-room magazines",
          "Colour of clinic chairs",
          "Lunch break length only",
        ],
        correctIndex: 0,
        explanation: "Audit of time-to-first-DMARD (among others).",
      },
      {
        id: "read-fc3-2-q7",
        prompt: "Explaining that early aggressive treatment protects joints may:",
        options: [
          "Improve acceptance of monitoring burdens",
          "Worsen adherence deliberately",
          "Replace the need for DMARDs",
          "Eliminate all infection risk",
        ],
        correctIndex: 0,
        explanation: "Empathic explanation often improves acceptance of monitoring burdens.",
      },
      {
        id: "read-fc3-2-q8",
        prompt: "The dominant modifiable failure in many regions is:",
        options: ["Delayed referral", "Excessive early DMARD use", "Too many anti-CCP tests", "Overuse of joint counts"],
        correctIndex: 0,
        explanation: "Delayed referral remains the dominant modifiable failure.",
      },
    ],
  },
];
