import type { ListeningExtract } from "@/domain/types";

export const LISTENING_EXTRACTS_FULLPAPER_2: ListeningExtract[] = [
  {
    id: "lis-fa2-1",
    part: "A",
    title: "Suspected stroke consultation",
    specialty: "Stroke medicine",
    durationSec: 325,
    audioUrl: "/audio/lis-fa2-1.mp3",
    transcript: `Doctor: Good morning, Mrs Patel. Can you tell me what happened this morning?
Patient: About an hour ago my right arm went weak and I couldn't find my words. My husband said my face drooped on the right.
Doctor: Is the weakness still there?
Patient: The arm is a bit better but still clumsy. Speech is clearer now than it was.
Doctor: Any headache, double vision or loss of consciousness?
Patient: Mild headache, no double vision. I didn't black out.
Doctor: Past medical history?
Patient: Atrial fibrillation for three years — I'm on apixaban five milligrams twice daily. Hypertension — amlodipine ten milligrams each morning. Type 2 diabetes — metformin five hundred milligrams twice daily.
Doctor: Have you missed any apixaban doses?
Patient: I think I missed last night's dose. I was travelling.
Doctor: Smoking or alcohol?
Patient: Never smoked. Maybe four units of wine a week.
Doctor: Any previous TIA or stroke?
Patient: A TIA two years ago — left-hand numbness for twenty minutes. CT was normal then.
Doctor: Blood pressure today is one hundred and seventy-eight over ninety-six. NIHSS is four. I'll arrange an urgent CT head and bloods, keep you nil by mouth until swallow is assessed, and ask the stroke team to review. Do not give further apixaban until we've imaged and discussed thrombolysis or thrombectomy eligibility.`,
    ttsScript:
      "Good morning, Mrs Patel. Can you tell me what happened this morning? About an hour ago my right arm went weak and I couldn't find my words. My husband said my face drooped on the right. Is the weakness still there? The arm is a bit better but still clumsy. Speech is clearer now than it was. Any headache, double vision or loss of consciousness? Mild headache, no double vision. I didn't black out. Past medical history? Atrial fibrillation for three years — I'm on apixaban five milligrams twice daily. Hypertension — amlodipine ten milligrams each morning. Type 2 diabetes — metformin five hundred milligrams twice daily. Have you missed any apixaban doses? I think I missed last night's dose. I was travelling. Smoking or alcohol? Never smoked. Maybe four units of wine a week. Any previous TIA or stroke? A TIA two years ago — left-hand numbness for twenty minutes. CT was normal then. Blood pressure today is one hundred and seventy-eight over ninety-six. NIHSS is four. I'll arrange an urgent CT head and bloods, keep you nil by mouth until swallow is assessed, and ask the stroke team to review. Do not give further apixaban until we've imaged and discussed thrombolysis or thrombectomy eligibility.",
    questions: [
      {
        id: "lis-fa2-1-q1",
        prompt: "Time since symptom onset:",
        answer: "about 1 hour",
        acceptedAnswers: ["about 1 hour", "about an hour", "1 hour", "one hour", "an hour ago"],
        explanation: "Symptoms began about an hour ago.",
      },
      {
        id: "lis-fa2-1-q2",
        prompt: "Side of arm weakness:",
        answer: "right",
        acceptedAnswers: ["right", "right arm", "the right"],
        explanation: "Right arm went weak.",
      },
      {
        id: "lis-fa2-1-q3",
        prompt: "Facial finding reported by husband:",
        answer: "right-sided droop",
        acceptedAnswers: ["right-sided droop", "face drooped on the right", "right face droop", "right facial droop"],
        explanation: "Face drooped on the right.",
      },
      {
        id: "lis-fa2-1-q4",
        prompt: "Duration of atrial fibrillation:",
        answer: "3 years",
        acceptedAnswers: ["3 years", "three years"],
        explanation: "Atrial fibrillation for three years.",
      },
      {
        id: "lis-fa2-1-q5",
        prompt: "Apixaban dose:",
        answer: "5 mg twice daily",
        acceptedAnswers: ["5 mg twice daily", "5mg BD", "5 mg BD", "five milligrams twice daily"],
        explanation: "Apixaban five milligrams twice daily.",
      },
      {
        id: "lis-fa2-1-q6",
        prompt: "Amlodipine dose:",
        answer: "10 mg each morning",
        acceptedAnswers: ["10 mg each morning", "10 mg daily", "10mg daily", "ten milligrams each morning"],
        explanation: "Amlodipine ten milligrams each morning.",
      },
      {
        id: "lis-fa2-1-q7",
        prompt: "Metformin dose:",
        answer: "500 mg twice daily",
        acceptedAnswers: ["500 mg twice daily", "500mg BD", "500 mg BD", "five hundred milligrams twice daily"],
        explanation: "Metformin five hundred milligrams twice daily.",
      },
      {
        id: "lis-fa2-1-q8",
        prompt: "Missed anticoagulant dose:",
        answer: "last night's apixaban",
        acceptedAnswers: ["last night's apixaban", "last night", "last night's dose", "missed last night's dose"],
        explanation: "She thinks she missed last night's apixaban dose.",
      },
      {
        id: "lis-fa2-1-q9",
        prompt: "Weekly alcohol intake:",
        answer: "4 units",
        acceptedAnswers: ["4 units", "four units", "4 units of wine", "four units of wine a week"],
        explanation: "Maybe four units of wine a week.",
      },
      {
        id: "lis-fa2-1-q10",
        prompt: "Previous TIA symptom:",
        answer: "left-hand numbness for 20 minutes",
        acceptedAnswers: [
          "left-hand numbness for 20 minutes",
          "left hand numbness for twenty minutes",
          "left-hand numbness",
          "numbness left hand 20 minutes",
        ],
        explanation: "TIA two years ago — left-hand numbness for twenty minutes.",
      },
      {
        id: "lis-fa2-1-q11",
        prompt: "Blood pressure today:",
        answer: "178/96",
        acceptedAnswers: ["178/96", "178 over 96", "one hundred and seventy-eight over ninety-six"],
        explanation: "BP one hundred and seventy-eight over ninety-six.",
      },
      {
        id: "lis-fa2-1-q12",
        prompt: "NIHSS score:",
        answer: "4",
        acceptedAnswers: ["4", "four"],
        explanation: "NIHSS is four.",
      },
    ],
  },
  {
    id: "lis-fa2-2",
    part: "A",
    title: "Acute asthma review",
    specialty: "Respiratory",
    durationSec: 335,
    audioUrl: "/audio/lis-fa2-2.mp3",
    transcript: `Doctor: Hello Mr Adeyemi. How is your breathing today?
Patient: Bad since last night. I woke at two with wheeze and used my blue inhaler six times before morning.
Doctor: Can you complete sentences?
Patient: Just about, but I'm getting tired. Peak flow at home was two hundred and forty — usually around four hundred and eighty.
Doctor: Any fever or green sputum?
Patient: No fever. Clear sputum only.
Doctor: Trigger?
Patient: Cold air walking the dog, and I ran out of my brown inhaler three days ago.
Doctor: Regular treatment when you have it?
Patient: Beclometasone two hundred micrograms two puffs twice daily, salbutamol as needed, and montelukast ten milligrams at night. Prednisolone courses maybe three times a year.
Doctor: Admissions?
Patient: One ITU stay five years ago for asthma. Last ED visit was eight months ago.
Doctor: Smoking?
Patient: Quit ten years ago. Ten pack-years before that.
Doctor: Allergies?
Patient: Aspirin makes me wheeze. No drug rash.
Doctor: Saturations here are ninety-three percent on air, respiratory rate twenty-eight, pulse one hundred and ten. We'll give nebulised salbutamol and ipratropium, oral prednisolone forty milligrams, and recheck peak flow in fifteen minutes. If you don't improve, we'll consider magnesium and discuss admission.`,
    ttsScript:
      "Hello Mr Adeyemi. How is your breathing today? Bad since last night. I woke at two with wheeze and used my blue inhaler six times before morning. Can you complete sentences? Just about, but I'm getting tired. Peak flow at home was two hundred and forty — usually around four hundred and eighty. Any fever or green sputum? No fever. Clear sputum only. Trigger? Cold air walking the dog, and I ran out of my brown inhaler three days ago. Regular treatment when you have it? Beclometasone two hundred micrograms two puffs twice daily, salbutamol as needed, and montelukast ten milligrams at night. Prednisolone courses maybe three times a year. Admissions? One ITU stay five years ago for asthma. Last ED visit was eight months ago. Smoking? Quit ten years ago. Ten pack-years before that. Allergies? Aspirin makes me wheeze. No drug rash. Saturations here are ninety-three percent on air, respiratory rate twenty-eight, pulse one hundred and ten. We'll give nebulised salbutamol and ipratropium, oral prednisolone forty milligrams, and recheck peak flow in fifteen minutes. If you don't improve, we'll consider magnesium and discuss admission.",
    questions: [
      {
        id: "lis-fa2-2-q1",
        prompt: "When symptoms worsened:",
        answer: "last night",
        acceptedAnswers: ["last night", "since last night", "woke at two"],
        explanation: "Bad since last night; woke at two with wheeze.",
      },
      {
        id: "lis-fa2-2-q2",
        prompt: "Blue inhaler uses before morning:",
        answer: "6 times",
        acceptedAnswers: ["6 times", "six times", "6"],
        explanation: "Used blue inhaler six times before morning.",
      },
      {
        id: "lis-fa2-2-q3",
        prompt: "Home peak flow today:",
        answer: "240",
        acceptedAnswers: ["240", "two hundred and forty", "240 L/min"],
        explanation: "Peak flow at home was two hundred and forty.",
      },
      {
        id: "lis-fa2-2-q4",
        prompt: "Usual peak flow:",
        answer: "480",
        acceptedAnswers: ["480", "four hundred and eighty", "around 480"],
        explanation: "Usually around four hundred and eighty.",
      },
      {
        id: "lis-fa2-2-q5",
        prompt: "When brown inhaler ran out:",
        answer: "3 days ago",
        acceptedAnswers: ["3 days ago", "three days ago"],
        explanation: "Ran out of brown inhaler three days ago.",
      },
      {
        id: "lis-fa2-2-q6",
        prompt: "Beclometasone regimen:",
        answer: "200 micrograms two puffs twice daily",
        acceptedAnswers: [
          "200 micrograms two puffs twice daily",
          "200 mcg two puffs BD",
          "two puffs twice daily of 200 micrograms",
          "beclometasone 200 micrograms two puffs twice daily",
        ],
        explanation: "Beclometasone two hundred micrograms two puffs twice daily.",
      },
      {
        id: "lis-fa2-2-q7",
        prompt: "Montelukast dose and timing:",
        answer: "10 mg at night",
        acceptedAnswers: ["10 mg at night", "10mg nocte", "ten milligrams at night"],
        explanation: "Montelukast ten milligrams at night.",
      },
      {
        id: "lis-fa2-2-q8",
        prompt: "Prednisolone courses per year:",
        answer: "3",
        acceptedAnswers: ["3", "three", "maybe three", "3 times a year"],
        explanation: "Prednisolone courses maybe three times a year.",
      },
      {
        id: "lis-fa2-2-q9",
        prompt: "ITU admission timing:",
        answer: "5 years ago",
        acceptedAnswers: ["5 years ago", "five years ago"],
        explanation: "One ITU stay five years ago for asthma.",
      },
      {
        id: "lis-fa2-2-q10",
        prompt: "Pack-year history before quitting:",
        answer: "10",
        acceptedAnswers: ["10", "ten", "10 pack-years"],
        explanation: "Ten pack-years before quitting.",
      },
      {
        id: "lis-fa2-2-q11",
        prompt: "Drug that triggers wheeze:",
        answer: "aspirin",
        acceptedAnswers: ["aspirin", "Aspirin"],
        explanation: "Aspirin makes him wheeze.",
      },
      {
        id: "lis-fa2-2-q12",
        prompt: "Oral prednisolone dose planned:",
        answer: "40 mg",
        acceptedAnswers: ["40 mg", "40mg", "forty milligrams", "oral prednisolone 40 mg"],
        explanation: "Oral prednisolone forty milligrams.",
      },
    ],
  },
  {
    id: "lis-fb2-1",
    part: "B",
    title: "ED briefing: suspected pulmonary embolism",
    specialty: "ED",
    durationSec: 75,
    audioUrl: "/audio/lis-fb2-1.mp3",
    transcript: `Registrar: Cubicle 4 is Ms Doyle, forty-one, sudden pleuritic pain and breathlessness after a long-haul flight yesterday. SpO2 ninety-three percent on air, heart rate one hundred and eight, BP one-eighteen over seventy. Wells score is moderate. We've done an ECG — sinus tachycardia only — and D-dimer is pending. If D-dimer is raised she'll need CT pulmonary angiogram; give oxygen to target ninety-four to ninety-eight percent and do not start anticoagulation until we've ruled out major contraindications and confirmed imaging urgency with the medical registrar.`,
    ttsScript:
      "Cubicle 4 is Ms Doyle, forty-one, sudden pleuritic pain and breathlessness after a long-haul flight yesterday. SpO2 ninety-three percent on air, heart rate one hundred and eight, BP one-eighteen over seventy. Wells score is moderate. We've done an ECG — sinus tachycardia only — and D-dimer is pending. If D-dimer is raised she'll need CT pulmonary angiogram; give oxygen to target ninety-four to ninety-eight percent and do not start anticoagulation until we've ruled out major contraindications and confirmed imaging urgency with the medical registrar.",
    questions: [
      {
        id: "lis-fb2-1-q1",
        prompt: "If D-dimer is raised, the next imaging step is:",
        options: [
          "Ventilation–perfusion scan only at home",
          "CT pulmonary angiogram",
          "Immediate thrombolysis without imaging",
          "Abdominal ultrasound",
        ],
        correctIndex: 1,
        explanation: "Raised D-dimer → CT pulmonary angiogram.",
      },
    ],
  },
  {
    id: "lis-fb2-2",
    part: "B",
    title: "Ward update: acute kidney injury",
    specialty: "Nephrology",
    durationSec: 70,
    audioUrl: "/audio/lis-fb2-2.mp3",
    transcript: `Consultant: Mr Singh in bay two has stage two AKI — creatinine up from ninety to two hundred and ten. Stop the ramipril and ibuprofen today. Check bladder scan for retention, strict fluid balance, and daily weights. Repeat U&Es in eight hours. If potassium rises above six, use the hyperkalaemia pathway. Avoid contrast until we've discussed with radiology. Renal referral if urine output stays below point three millilitres per kilogram per hour despite fluid challenge.`,
    ttsScript:
      "Mr Singh in bay two has stage two AKI — creatinine up from ninety to two hundred and ten. Stop the ramipril and ibuprofen today. Check bladder scan for retention, strict fluid balance, and daily weights. Repeat U&Es in eight hours. If potassium rises above six, use the hyperkalaemia pathway. Avoid contrast until we've discussed with radiology. Renal referral if urine output stays below point three millilitres per kilogram per hour despite fluid challenge.",
    questions: [
      {
        id: "lis-fb2-2-q1",
        prompt: "Medicines to stop today include:",
        options: [
          "Paracetamol and omeprazole",
          "Ramipril and ibuprofen",
          "Insulin and aspirin",
          "Lactulose and senna",
        ],
        correctIndex: 1,
        explanation: "Stop the ramipril and ibuprofen today.",
      },
    ],
  },
  {
    id: "lis-fb2-3",
    part: "B",
    title: "Psychiatry liaison: self-harm risk",
    specialty: "Psychiatry",
    durationSec: 80,
    audioUrl: "/audio/lis-fb2-3.mp3",
    transcript: `Liaison psychiatrist: For anyone presenting after overdose, complete a full risk assessment before discharge from ED. Ask about ongoing suicidal intent, plans, access to means, and protective factors. If there is active intent with a plan, do not allow the patient to leave — escalate to the duty consultant and consider a Mental Health Act assessment. Remove ligature risks from the cubicle. Offer a quiet space and a named nurse. Document capacity for each decision about leaving against advice.`,
    ttsScript:
      "For anyone presenting after overdose, complete a full risk assessment before discharge from ED. Ask about ongoing suicidal intent, plans, access to means, and protective factors. If there is active intent with a plan, do not allow the patient to leave — escalate to the duty consultant and consider a Mental Health Act assessment. Remove ligature risks from the cubicle. Offer a quiet space and a named nurse. Document capacity for each decision about leaving against advice.",
    questions: [
      {
        id: "lis-fb2-3-q1",
        prompt: "If there is active suicidal intent with a plan, staff should:",
        options: [
          "Discharge with a leaflet only",
          "Not allow the patient to leave and escalate",
          "Ask them to return next week",
          "Sedate without assessment",
        ],
        correctIndex: 1,
        explanation: "Do not allow leaving; escalate and consider Mental Health Act assessment.",
      },
    ],
  },
  {
    id: "lis-fb2-4",
    part: "B",
    title: "Labour ward: postpartum haemorrhage drill",
    specialty: "Obstetrics",
    durationSec: 75,
    audioUrl: "/audio/lis-fb2-4.mp3",
    transcript: `Obstetric registrar: For primary postpartum haemorrhage, call for help early, rub up the uterus, and give oxytocin five units IV as per protocol while obtaining large-bore access. Send bloods for FBC, clotting, fibrinogen and crossmatch four units. Tranexamic acid one gram IV should be given as soon as possible within three hours. Keep the woman warm and catheterise to monitor output. Escalate to the consultant if bleeding continues after first-line uterotonics.`,
    ttsScript:
      "For primary postpartum haemorrhage, call for help early, rub up the uterus, and give oxytocin five units IV as per protocol while obtaining large-bore access. Send bloods for FBC, clotting, fibrinogen and crossmatch four units. Tranexamic acid one gram IV should be given as soon as possible within three hours. Keep the woman warm and catheterise to monitor output. Escalate to the consultant if bleeding continues after first-line uterotonics.",
    questions: [
      {
        id: "lis-fb2-4-q1",
        prompt: "Tranexamic acid in PPH should be given:",
        options: [
          "Only after hysterectomy",
          "As soon as possible within three hours",
          "After twenty-four hours only",
          "Orally at home",
        ],
        correctIndex: 1,
        explanation: "Tranexamic acid one gram IV as soon as possible within three hours.",
      },
    ],
  },
  {
    id: "lis-fb2-5",
    part: "B",
    title: "Trauma bay: cervical spine precautions",
    specialty: "Trauma",
    durationSec: 70,
    audioUrl: "/audio/lis-fb2-5.mp3",
    transcript: `Trauma lead: Any patient with significant blunt trauma above the clavicles stays in manual in-line stabilisation until the collar is correctly fitted and triple immobilisation is complete. Log-roll only with enough trained staff. Do not remove the collar for airway manoeuvres unless you can maintain alignment — use jaw thrust. CT cervical spine is the imaging of choice here if the patient meets NEXUS or Canadian C-spine criteria for imaging. Clearance is a senior decision documented in the notes.`,
    ttsScript:
      "Any patient with significant blunt trauma above the clavicles stays in manual in-line stabilisation until the collar is correctly fitted and triple immobilisation is complete. Log-roll only with enough trained staff. Do not remove the collar for airway manoeuvres unless you can maintain alignment — use jaw thrust. CT cervical spine is the imaging of choice here if the patient meets NEXUS or Canadian C-spine criteria for imaging. Clearance is a senior decision documented in the notes.",
    questions: [
      {
        id: "lis-fb2-5-q1",
        prompt: "Preferred imaging when C-spine imaging criteria are met:",
        options: ["Plain films only at home", "CT cervical spine", "MRI before any assessment", "No imaging ever"],
        correctIndex: 1,
        explanation: "CT cervical spine is the imaging of choice when criteria are met.",
      },
    ],
  },
  {
    id: "lis-fb2-6",
    part: "B",
    title: "Medical take: neutropenic sepsis alert",
    specialty: "Oncology",
    durationSec: 72,
    audioUrl: "/audio/lis-fb2-6.mp3",
    transcript: `Oncology SpR: Any oncology patient with fever above thirty-eight degrees and neutrophils below one point zero is treated as neutropenic sepsis until proven otherwise. Door-to-needle antibiotics within sixty minutes — do not wait for chest X-ray. Take blood cultures from peripheral and central lines first if it will not delay antibiotics. Use the trust piperacillin–tazobactam regimen unless penicillin-allergic. Reassess lactate and urine output after the first fluid bolus.`,
    ttsScript:
      "Any oncology patient with fever above thirty-eight degrees and neutrophils below one point zero is treated as neutropenic sepsis until proven otherwise. Door-to-needle antibiotics within sixty minutes — do not wait for chest X-ray. Take blood cultures from peripheral and central lines first if it will not delay antibiotics. Use the trust piperacillin–tazobactam regimen unless penicillin-allergic. Reassess lactate and urine output after the first fluid bolus.",
    questions: [
      {
        id: "lis-fb2-6-q1",
        prompt: "Antibiotics for suspected neutropenic sepsis should start:",
        options: [
          "After the chest X-ray report",
          "Within sixty minutes",
          "The next morning",
          "Only if CRP is above 100",
        ],
        correctIndex: 1,
        explanation: "Door-to-needle antibiotics within sixty minutes — do not wait for chest X-ray.",
      },
    ],
  },
  {
    id: "lis-fc2-1",
    part: "C",
    title: "Talk: secondary prevention after ischaemic stroke",
    specialty: "Stroke medicine",
    durationSec: 285,
    audioUrl: "/audio/lis-fc2-1.mp3",
    transcript: `Speaker: This afternoon I'll summarise secondary prevention after ischaemic stroke and TIA. First, antiplatelet choice. For most patients not in atrial fibrillation, aspirin seventy-five to three hundred milligrams daily is started immediately, then usually clopidogrel seventy-five milligrams long term, or dual therapy briefly in selected high-risk TIA or minor stroke as per local protocol. If atrial fibrillation is present, anticoagulation is the priority once haemorrhage has been excluded and timing agreed with the stroke team.

Blood pressure targets matter. After the acute phase, aim typically below one hundred and thirty over eighty if tolerated, using a thiazide-like diuretic and ACE inhibitor combination as a common first approach. Lipid management means high-intensity statin therapy with LDL targets individualised — many services aim below one point eight millimoles per litre after atherosclerotic stroke.

Carotid imaging should be arranged promptly for anterior-circulation events. Symptomatic stenosis of fifty to ninety-nine percent may warrant endarterectomy or stenting within two weeks when surgical risk is acceptable. Lifestyle advice is not optional: smoking cessation, exercise, and Mediterranean-style diet reduce recurrence. Finally, screen for diabetes and obstructive sleep apnoea where clinically suspected, and ensure driving advice is documented before discharge.`,
    ttsScript:
      "This afternoon I'll summarise secondary prevention after ischaemic stroke and TIA. First, antiplatelet choice. For most patients not in atrial fibrillation, aspirin seventy-five to three hundred milligrams daily is started immediately, then usually clopidogrel seventy-five milligrams long term, or dual therapy briefly in selected high-risk TIA or minor stroke as per local protocol. If atrial fibrillation is present, anticoagulation is the priority once haemorrhage has been excluded and timing agreed with the stroke team. Blood pressure targets matter. After the acute phase, aim typically below one hundred and thirty over eighty if tolerated, using a thiazide-like diuretic and ACE inhibitor combination as a common first approach. Lipid management means high-intensity statin therapy with LDL targets individualised — many services aim below one point eight millimoles per litre after atherosclerotic stroke. Carotid imaging should be arranged promptly for anterior-circulation events. Symptomatic stenosis of fifty to ninety-nine percent may warrant endarterectomy or stenting within two weeks when surgical risk is acceptable. Lifestyle advice is not optional: smoking cessation, exercise, and Mediterranean-style diet reduce recurrence. Finally, screen for diabetes and obstructive sleep apnoea where clinically suspected, and ensure driving advice is documented before discharge.",
    questions: [
      {
        id: "lis-fc2-1-q1",
        prompt: "In atrial fibrillation after ischaemic stroke, the priority once haemorrhage is excluded is:",
        options: ["Lifelong dual antiplatelets only", "Anticoagulation (timing agreed)", "No prevention needed", "Carotid stenting for all"],
        correctIndex: 1,
        explanation: "If AF is present, anticoagulation is the priority once haemorrhage is excluded and timing agreed.",
      },
      {
        id: "lis-fc2-1-q2",
        prompt: "Typical longer-term BP aim mentioned after the acute phase:",
        options: ["<150/95", "<130/80 if tolerated", "<100/60 for all", "No target"],
        correctIndex: 1,
        explanation: "Aim typically below one hundred and thirty over eighty if tolerated.",
      },
      {
        id: "lis-fc2-1-q3",
        prompt: "Many services' LDL aim after atherosclerotic stroke:",
        options: ["Below 1.8 mmol/L", "Below 5.0 mmol/L", "Above 3.0 mmol/L", "No lipid therapy"],
        correctIndex: 0,
        explanation: "Many services aim below one point eight millimoles per litre.",
      },
      {
        id: "lis-fc2-1-q4",
        prompt: "Symptomatic carotid stenosis of 50–99% may warrant intervention within:",
        options: ["2 days always", "2 weeks when surgical risk acceptable", "1 year routinely", "5 years"],
        correctIndex: 1,
        explanation: "Endarterectomy or stenting within two weeks when surgical risk is acceptable.",
      },
      {
        id: "lis-fc2-1-q5",
        prompt: "Lifestyle measures specifically listed include:",
        options: [
          "Smoking cessation, exercise, Mediterranean-style diet",
          "Bed rest only",
          "High-salt snacks",
          "Unrestricted binge drinking",
        ],
        correctIndex: 0,
        explanation: "Smoking cessation, exercise, and Mediterranean-style diet reduce recurrence.",
      },
      {
        id: "lis-fc2-1-q6",
        prompt: "Before discharge, ensure documentation of:",
        options: ["Driving advice", "Cosmetic surgery plans", "Only dental history", "Holiday insurance quotes"],
        correctIndex: 0,
        explanation: "Ensure driving advice is documented before discharge.",
      },
    ],
  },
  {
    id: "lis-fc2-2",
    part: "C",
    title: "Talk: recognising and treating sepsis on the wards",
    specialty: "Acute medicine",
    durationSec: 295,
    audioUrl: "/audio/lis-fc2-2.mp3",
    transcript: `Speaker: Let's walk through a ward-based approach to sepsis. Use NEWS2 as your early warning scaffold, but remember sepsis is a clinical diagnosis — think infection plus new organ dysfunction. Red flags include lactate at or above two, systolic blood pressure below ninety, new confusion, and urine output below point five millilitres per kilogram per hour.

The Sepsis Six remains a useful bundle: oxygen to target saturations, blood cultures before antibiotics when possible, broad-spectrum antibiotics within one hour for red-flag sepsis, IV fluid challenge, measure lactate, and monitor urine output. Choice of antibiotic follows local guidelines and allergy status; escalate early to piperacillin–tazobactam or carbapenems only when indicated.

Source control is as important as drugs. Review lines, wounds, urine, chest and abdomen. If biliary sepsis or obstructed infected kidney is suspected, arrange urgent imaging and specialty review the same day. Reassess after each litre of fluid; watch for fluid overload in heart failure or CKD.

Finally, communicate clearly with families, document ceilings of care where appropriate, and consider critical care outreach when lactate remains high or noradrenaline appears likely. Antibiotics must be reviewed at forty-eight hours with microbiology results.`,
    ttsScript:
      "Let's walk through a ward-based approach to sepsis. Use NEWS2 as your early warning scaffold, but remember sepsis is a clinical diagnosis — think infection plus new organ dysfunction. Red flags include lactate at or above two, systolic blood pressure below ninety, new confusion, and urine output below point five millilitres per kilogram per hour. The Sepsis Six remains a useful bundle: oxygen to target saturations, blood cultures before antibiotics when possible, broad-spectrum antibiotics within one hour for red-flag sepsis, IV fluid challenge, measure lactate, and monitor urine output. Choice of antibiotic follows local guidelines and allergy status; escalate early to piperacillin–tazobactam or carbapenems only when indicated. Source control is as important as drugs. Review lines, wounds, urine, chest and abdomen. If biliary sepsis or obstructed infected kidney is suspected, arrange urgent imaging and specialty review the same day. Reassess after each litre of fluid; watch for fluid overload in heart failure or CKD. Finally, communicate clearly with families, document ceilings of care where appropriate, and consider critical care outreach when lactate remains high or noradrenaline appears likely. Antibiotics must be reviewed at forty-eight hours with microbiology results.",
    questions: [
      {
        id: "lis-fc2-2-q1",
        prompt: "Sepsis is described as infection plus:",
        options: ["Mild cough only", "New organ dysfunction", "Normal lactate always", "Isolated fever without illness"],
        correctIndex: 1,
        explanation: "Think infection plus new organ dysfunction.",
      },
      {
        id: "lis-fc2-2-q2",
        prompt: "A lactate red flag mentioned is:",
        options: ["At or above 2", "Below 0.5", "Exactly 0", "Only above 10"],
        correctIndex: 0,
        explanation: "Red flags include lactate at or above two.",
      },
      {
        id: "lis-fc2-2-q3",
        prompt: "For red-flag sepsis, broad-spectrum antibiotics should start within:",
        options: ["1 hour", "12 hours", "48 hours", "1 week"],
        correctIndex: 0,
        explanation: "Broad-spectrum antibiotics within one hour for red-flag sepsis.",
      },
      {
        id: "lis-fc2-2-q4",
        prompt: "Blood cultures should be taken:",
        options: [
          "After antibiotics always",
          "Before antibiotics when possible",
          "Never from central lines",
          "Only at discharge",
        ],
        correctIndex: 1,
        explanation: "Blood cultures before antibiotics when possible.",
      },
      {
        id: "lis-fc2-2-q5",
        prompt: "Suspected biliary sepsis or obstructed infected kidney needs:",
        options: [
          "Urgent imaging and same-day specialty review",
          "Outpatient review in three months",
          "No imaging",
          "Discharge without antibiotics",
        ],
        correctIndex: 0,
        explanation: "Arrange urgent imaging and specialty review the same day.",
      },
      {
        id: "lis-fc2-2-q6",
        prompt: "Antibiotics should be reviewed at:",
        options: ["6 hours", "48 hours", "2 weeks", "Never"],
        correctIndex: 1,
        explanation: "Antibiotics must be reviewed at forty-eight hours with microbiology results.",
      },
    ],
  },
];
