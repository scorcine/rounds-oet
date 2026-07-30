import type { ListeningExtract } from "@/domain/types";

export const LISTENING_EXTRACTS_FULLPAPER_3: ListeningExtract[] = [
  {
    id: "lis-fa3-1",
    part: "A",
    title: "Suspected pulmonary embolism consultation",
    specialty: "Respiratory",
    durationSec: 330,
    audioUrl: "/audio/lis-fa3-1.mp3",
    transcript: `Doctor: Good afternoon, Mr Okonkwo. What happened today?
Patient: I got sudden left-sided chest pain walking to the shop — sharp when I breathe in. Then I felt short of breath and a bit light-headed.
Doctor: How long did the worst pain last?
Patient: About twenty minutes at its peak. It's still there but milder.
Doctor: Any cough, blood in the sputum, or calf swelling?
Patient: No blood. Dry cough. My left calf has been sore and swollen for four days after a knee arthroscopy two weeks ago.
Doctor: Are you on any blood thinners?
Patient: No. I stopped the hospital dalteparin five days after surgery as instructed.
Doctor: Past history?
Patient: Asthma as a child — inhalers only occasionally now. No clots before. Mother had a DVT after a flight.
Doctor: Medications?
Patient: Ramipril two point five milligrams daily for blood pressure, and ibuprofen four hundred milligrams as needed for the knee — maybe three times a day lately.
Doctor: Smoking?
Patient: Ten cigarettes a day for fifteen years.
Doctor: Observations: SpO2 ninety-four percent on air, pulse one hundred and twelve, BP one-twenty-six over seventy-eight, respiratory rate twenty-four. I'll do an ECG, bloods including D-dimer and troponin, and assess Wells score. Likely CT pulmonary angiogram today if intermediate or high probability. Hold further ibuprofen and start treatment-dose anticoagulation once imaging confirms PE or if clinical probability is high and no major bleed risk.`,
    ttsScript:
      "Good afternoon, Mr Okonkwo. What happened today? I got sudden left-sided chest pain walking to the shop — sharp when I breathe in. Then I felt short of breath and a bit light-headed. How long did the worst pain last? About twenty minutes at its peak. It's still there but milder. Any cough, blood in the sputum, or calf swelling? No blood. Dry cough. My left calf has been sore and swollen for four days after a knee arthroscopy two weeks ago. Are you on any blood thinners? No. I stopped the hospital dalteparin five days after surgery as instructed. Past history? Asthma as a child — inhalers only occasionally now. No clots before. Mother had a DVT after a flight. Medications? Ramipril two point five milligrams daily for blood pressure, and ibuprofen four hundred milligrams as needed for the knee — maybe three times a day lately. Smoking? Ten cigarettes a day for fifteen years. Observations: SpO2 ninety-four percent on air, pulse one hundred and twelve, BP one-twenty-six over seventy-eight, respiratory rate twenty-four. I'll do an ECG, bloods including D-dimer and troponin, and assess Wells score. Likely CT pulmonary angiogram today if intermediate or high probability. Hold further ibuprofen and start treatment-dose anticoagulation once imaging confirms PE or if clinical probability is high and no major bleed risk.",
    questions: [
      {
        id: "lis-fa3-1-q1",
        prompt: "Character of the chest pain:",
        answer: "sharp when breathing in",
        acceptedAnswers: ["sharp when breathing in", "pleuritic", "sharp on inspiration", "sharp when I breathe in"],
        explanation: "Sharp when breathing in — pleuritic pain.",
      },
      {
        id: "lis-fa3-1-q2",
        prompt: "Duration of worst pain:",
        answer: "20 minutes",
        acceptedAnswers: ["20 minutes", "twenty minutes", "about 20 minutes", "about twenty minutes"],
        explanation: "About twenty minutes at its peak.",
      },
      {
        id: "lis-fa3-1-q3",
        prompt: "Calf symptoms duration:",
        answer: "4 days",
        acceptedAnswers: ["4 days", "four days"],
        explanation: "Left calf sore and swollen for four days.",
      },
      {
        id: "lis-fa3-1-q4",
        prompt: "Time since knee arthroscopy:",
        answer: "2 weeks",
        acceptedAnswers: ["2 weeks", "two weeks", "2 weeks ago"],
        explanation: "Knee arthroscopy two weeks ago.",
      },
      {
        id: "lis-fa3-1-q5",
        prompt: "When postoperative dalteparin was stopped:",
        answer: "5 days after surgery",
        acceptedAnswers: ["5 days after surgery", "five days after surgery", "5 days post-op"],
        explanation: "Stopped hospital dalteparin five days after surgery.",
      },
      {
        id: "lis-fa3-1-q6",
        prompt: "Family history of VTE:",
        answer: "mother had DVT after a flight",
        acceptedAnswers: ["mother had DVT after a flight", "mother DVT", "mother had a DVT"],
        explanation: "Mother had a DVT after a flight.",
      },
      {
        id: "lis-fa3-1-q7",
        prompt: "Ramipril dose:",
        answer: "2.5 mg daily",
        acceptedAnswers: ["2.5 mg daily", "2.5mg daily", "two point five milligrams daily"],
        explanation: "Ramipril two point five milligrams daily.",
      },
      {
        id: "lis-fa3-1-q8",
        prompt: "Recent ibuprofen use:",
        answer: "400 mg up to 3 times a day",
        acceptedAnswers: [
          "400 mg up to 3 times a day",
          "400 mg three times a day",
          "400mg TDS",
          "four hundred milligrams as needed — maybe three times a day",
        ],
        explanation: "Ibuprofen four hundred milligrams, maybe three times a day lately.",
      },
      {
        id: "lis-fa3-1-q9",
        prompt: "Current smoking:",
        answer: "10 cigarettes a day",
        acceptedAnswers: ["10 cigarettes a day", "ten cigarettes a day", "10 a day"],
        explanation: "Ten cigarettes a day for fifteen years.",
      },
      {
        id: "lis-fa3-1-q10",
        prompt: "SpO2 on air:",
        answer: "94%",
        acceptedAnswers: ["94%", "94 percent", "ninety-four percent", "94"],
        explanation: "SpO2 ninety-four percent on air.",
      },
      {
        id: "lis-fa3-1-q11",
        prompt: "Heart rate:",
        answer: "112",
        acceptedAnswers: ["112", "one hundred and twelve", "112 bpm"],
        explanation: "Pulse one hundred and twelve.",
      },
      {
        id: "lis-fa3-1-q12",
        prompt: "Imaging likely if intermediate/high probability:",
        answer: "CT pulmonary angiogram",
        acceptedAnswers: ["CT pulmonary angiogram", "CTPA", "CT pulmonary angiography"],
        explanation: "Likely CT pulmonary angiogram today if intermediate or high probability.",
      },
    ],
  },
  {
    id: "lis-fa3-2",
    part: "A",
    title: "Chronic kidney disease review",
    specialty: "Nephrology",
    durationSec: 340,
    audioUrl: "/audio/lis-fa3-2.mp3",
    transcript: `Doctor: Hello Mrs Chen. How have you been since the last clinic?
Patient: More tired, and my ankles swell by evening. I'm passing less urine some days.
Doctor: Any chest pain, orthopnoea or itching?
Patient: Itching at night. I sleep on two pillows now. No chest pain.
Doctor: Latest home blood pressure readings?
Patient: Around one-fifty-eight over ninety-two most mornings.
Doctor: Reminder of your medicines?
Patient: Ramipril ten milligrams daily, amlodipine ten milligrams, furosemide forty milligrams each morning, atorvastatin twenty milligrams at night, and sodium bicarbonate five hundred milligrams three times daily. I take ibuprofen sometimes for backache.
Doctor: Please stop the ibuprofen — it can worsen kidney function. Any diet issues?
Patient: I still use quite a bit of salt. Protein intake is normal as far as I know.
Doctor: Bloods last week: creatinine three hundred and twenty, eGFR eighteen, potassium five point three, bicarbonate eighteen, Hb ninety-four. Urine ACR is seventy-eight.
Doctor: We'll increase furosemide to eighty milligrams each morning, refer to the anaemia pathway for possible ESA, and book vein mapping with a view to fistula if you agree dialysis planning. I'll also refer to dietetics for low-salt and potassium advice. Call us if you gain more than two kilograms in three days or become short of breath at rest.`,
    ttsScript:
      "Hello Mrs Chen. How have you been since the last clinic? More tired, and my ankles swell by evening. I'm passing less urine some days. Any chest pain, orthopnoea or itching? Itching at night. I sleep on two pillows now. No chest pain. Latest home blood pressure readings? Around one-fifty-eight over ninety-two most mornings. Reminder of your medicines? Ramipril ten milligrams daily, amlodipine ten milligrams, furosemide forty milligrams each morning, atorvastatin twenty milligrams at night, and sodium bicarbonate five hundred milligrams three times daily. I take ibuprofen sometimes for backache. Please stop the ibuprofen — it can worsen kidney function. Any diet issues? I still use quite a bit of salt. Protein intake is normal as far as I know. Bloods last week: creatinine three hundred and twenty, eGFR eighteen, potassium five point three, bicarbonate eighteen, Hb ninety-four. Urine ACR is seventy-eight. We'll increase furosemide to eighty milligrams each morning, refer to the anaemia pathway for possible ESA, and book vein mapping with a view to fistula if you agree dialysis planning. I'll also refer to dietetics for low-salt and potassium advice. Call us if you gain more than two kilograms in three days or become short of breath at rest.",
    questions: [
      {
        id: "lis-fa3-2-q1",
        prompt: "Ankle swelling pattern:",
        answer: "by evening",
        acceptedAnswers: ["by evening", "ankles swell by evening", "evening"],
        explanation: "Ankles swell by evening.",
      },
      {
        id: "lis-fa3-2-q2",
        prompt: "Sleep position change:",
        answer: "two pillows",
        acceptedAnswers: ["two pillows", "sleeps on two pillows", "2 pillows"],
        explanation: "Sleeps on two pillows now.",
      },
      {
        id: "lis-fa3-2-q3",
        prompt: "Typical home BP:",
        answer: "158/92",
        acceptedAnswers: ["158/92", "158 over 92", "one-fifty-eight over ninety-two"],
        explanation: "Around one-fifty-eight over ninety-two most mornings.",
      },
      {
        id: "lis-fa3-2-q4",
        prompt: "Current furosemide dose:",
        answer: "40 mg each morning",
        acceptedAnswers: ["40 mg each morning", "40 mg daily", "forty milligrams each morning"],
        explanation: "Furosemide forty milligrams each morning.",
      },
      {
        id: "lis-fa3-2-q5",
        prompt: "Sodium bicarbonate regimen:",
        answer: "500 mg three times daily",
        acceptedAnswers: ["500 mg three times daily", "500mg TDS", "five hundred milligrams three times daily"],
        explanation: "Sodium bicarbonate five hundred milligrams three times daily.",
      },
      {
        id: "lis-fa3-2-q6",
        prompt: "Analgesic advised to stop:",
        answer: "ibuprofen",
        acceptedAnswers: ["ibuprofen", "Ibuprofen"],
        explanation: "Please stop the ibuprofen.",
      },
      {
        id: "lis-fa3-2-q7",
        prompt: "Creatinine last week:",
        answer: "320",
        acceptedAnswers: ["320", "320 µmol/L", "three hundred and twenty"],
        explanation: "Creatinine three hundred and twenty.",
      },
      {
        id: "lis-fa3-2-q8",
        prompt: "eGFR:",
        answer: "18",
        acceptedAnswers: ["18", "eighteen"],
        explanation: "eGFR eighteen.",
      },
      {
        id: "lis-fa3-2-q9",
        prompt: "Potassium:",
        answer: "5.3",
        acceptedAnswers: ["5.3", "5.3 mmol/L", "five point three"],
        explanation: "Potassium five point three.",
      },
      {
        id: "lis-fa3-2-q10",
        prompt: "Haemoglobin:",
        answer: "94",
        acceptedAnswers: ["94", "94 g/L", "ninety-four"],
        explanation: "Hb ninety-four.",
      },
      {
        id: "lis-fa3-2-q11",
        prompt: "Urine ACR:",
        answer: "78",
        acceptedAnswers: ["78", "seventy-eight"],
        explanation: "Urine ACR is seventy-eight.",
      },
      {
        id: "lis-fa3-2-q12",
        prompt: "New furosemide dose:",
        answer: "80 mg each morning",
        acceptedAnswers: ["80 mg each morning", "80 mg daily", "eighty milligrams each morning"],
        explanation: "Increase furosemide to eighty milligrams each morning.",
      },
    ],
  },
  {
    id: "lis-fb3-1",
    part: "B",
    title: "ED handover: acute ischaemic stroke pathway",
    specialty: "Stroke medicine",
    durationSec: 78,
    audioUrl: "/audio/lis-fb3-1.mp3",
    transcript: `Stroke nurse: Resus one is a FAST-positive patient last seen well ninety minutes ago. Keep nil by mouth, check capillary glucose, and escort straight to CT. If haemorrhage is excluded and criteria are met, the aim is door-to-needle thrombolysis within thirty minutes of arrival here. Do not give aspirin until imaging is reviewed. Inform the thrombectomy centre early if large-vessel occlusion is suspected on CTA.`,
    ttsScript:
      "Resus one is a FAST-positive patient last seen well ninety minutes ago. Keep nil by mouth, check capillary glucose, and escort straight to CT. If haemorrhage is excluded and criteria are met, the aim is door-to-needle thrombolysis within thirty minutes of arrival here. Do not give aspirin until imaging is reviewed. Inform the thrombectomy centre early if large-vessel occlusion is suspected on CTA.",
    questions: [
      {
        id: "lis-fb3-1-q1",
        prompt: "Door-to-needle thrombolysis aim stated is within:",
        options: ["30 minutes of arrival", "4 hours of arrival", "24 hours", "No time target"],
        correctIndex: 0,
        explanation: "Door-to-needle thrombolysis within thirty minutes of arrival.",
      },
    ],
  },
  {
    id: "lis-fb3-2",
    part: "B",
    title: "Maternity: pre-eclampsia escalation",
    specialty: "Obstetrics",
    durationSec: 72,
    audioUrl: "/audio/lis-fb3-2.mp3",
    transcript: `Consultant obstetrician: Any pregnant woman over twenty weeks with BP at or above one-forty over ninety plus proteinuria or other features needs same-day assessment. Severe features — BP at or above one-sixty over one-ten, severe headache, visual symptoms, epigastric pain, or platelets below one hundred — require urgent senior review and magnesium sulphate if eclampsia risk is high. Do not discharge overnight without a clear plan and senior agreement.`,
    ttsScript:
      "Any pregnant woman over twenty weeks with BP at or above one-forty over ninety plus proteinuria or other features needs same-day assessment. Severe features — BP at or above one-sixty over one-ten, severe headache, visual symptoms, epigastric pain, or platelets below one hundred — require urgent senior review and magnesium sulphate if eclampsia risk is high. Do not discharge overnight without a clear plan and senior agreement.",
    questions: [
      {
        id: "lis-fb3-2-q1",
        prompt: "BP threshold quoted for severe features includes:",
        options: ["≥120/80", "≥160/110", "≥100/60", "≥90/50"],
        correctIndex: 1,
        explanation: "Severe features include BP at or above one-sixty over one-ten.",
      },
    ],
  },
  {
    id: "lis-fb3-3",
    part: "B",
    title: "Ward safety: lithium monitoring",
    specialty: "Psychiatry",
    durationSec: 68,
    audioUrl: "/audio/lis-fb3-3.mp3",
    transcript: `Pharmacist: Reminder — lithium levels should be taken twelve hours post-dose. Check U&Es and thyroid function at least every three months when stable, sooner if vomiting, diarrhoea or starting NSAIDs, ACE inhibitors or diuretics. Hold lithium and seek advice if the patient is dehydrated or the level is above one point five. Never combine with high-dose ibuprofen without senior agreement.`,
    ttsScript:
      "Reminder — lithium levels should be taken twelve hours post-dose. Check U&Es and thyroid function at least every three months when stable, sooner if vomiting, diarrhoea or starting NSAIDs, ACE inhibitors or diuretics. Hold lithium and seek advice if the patient is dehydrated or the level is above one point five. Never combine with high-dose ibuprofen without senior agreement.",
    questions: [
      {
        id: "lis-fb3-3-q1",
        prompt: "Lithium blood levels should be taken:",
        options: ["Immediately after the dose", "12 hours post-dose", "After one week only", "At random any time"],
        correctIndex: 1,
        explanation: "Lithium levels should be taken twelve hours post-dose.",
      },
    ],
  },
  {
    id: "lis-fb3-4",
    part: "B",
    title: "Trauma: major haemorrhage pack",
    specialty: "Trauma",
    durationSec: 70,
    audioUrl: "/audio/lis-fb3-4.mp3",
    transcript: `Trauma consultant: Activate the major haemorrhage protocol early for penetrating truncal injury with shock. Give blood products in a balanced ratio, tranexamic acid one gram within three hours, and keep the patient warm. Permissive hypotension is for penetrating trauma without head injury — do not apply that strategy if intracranial injury is suspected. Call interventional radiology if pelvic bleeding continues after binder application.`,
    ttsScript:
      "Activate the major haemorrhage protocol early for penetrating truncal injury with shock. Give blood products in a balanced ratio, tranexamic acid one gram within three hours, and keep the patient warm. Permissive hypotension is for penetrating trauma without head injury — do not apply that strategy if intracranial injury is suspected. Call interventional radiology if pelvic bleeding continues after binder application.",
    questions: [
      {
        id: "lis-fb3-4-q1",
        prompt: "Permissive hypotension should not be used when:",
        options: [
          "Intracranial injury is suspected",
          "The patient is warm",
          "Tranexamic acid has been given",
          "A pelvic binder is in place",
        ],
        correctIndex: 0,
        explanation: "Do not apply permissive hypotension if intracranial injury is suspected.",
      },
    ],
  },
  {
    id: "lis-fb3-5",
    part: "B",
    title: "Respiratory: acute asthma severity",
    specialty: "Respiratory",
    durationSec: 65,
    audioUrl: "/audio/lis-fb3-5.mp3",
    transcript: `Medical registrar: Life-threatening asthma features include SpO2 below ninety-two percent, silent chest, arrhythmia, hypotension, confusion, or peak flow below thirty-three percent predicted. Give oxygen, nebulised bronchodilators driven by oxygen, and steroids immediately. Call ICU early — do not wait for a normal blood gas if the patient is tiring. Intravenous magnesium is for severe asthma not responding to initial nebulisers.`,
    ttsScript:
      "Life-threatening asthma features include SpO2 below ninety-two percent, silent chest, arrhythmia, hypotension, confusion, or peak flow below thirty-three percent predicted. Give oxygen, nebulised bronchodilators driven by oxygen, and steroids immediately. Call ICU early — do not wait for a normal blood gas if the patient is tiring. Intravenous magnesium is for severe asthma not responding to initial nebulisers.",
    questions: [
      {
        id: "lis-fb3-5-q1",
        prompt: "A life-threatening SpO2 threshold mentioned is:",
        options: ["Below 92%", "Below 98%", "Above 96%", "Exactly 100%"],
        correctIndex: 0,
        explanation: "Life-threatening features include SpO2 below ninety-two percent.",
      },
    ],
  },
  {
    id: "lis-fb3-6",
    part: "B",
    title: "Renal: hyperkalaemia first response",
    specialty: "Nephrology",
    durationSec: 68,
    audioUrl: "/audio/lis-fb3-6.mp3",
    transcript: `Medical SHO: For potassium at or above six with ECG changes, give calcium gluconate to protect the heart first, then insulin–glucose and nebulised salbutamol as shifting agents. Stop ACE inhibitors, ARBs, spironolactone and potassium supplements. Recheck potassium after treatment and escalate to renal if oliguric AKI accompanies refractory hyperkalaemia. Do not rely on calcium resonium alone in an emergency.`,
    ttsScript:
      "For potassium at or above six with ECG changes, give calcium gluconate to protect the heart first, then insulin–glucose and nebulised salbutamol as shifting agents. Stop ACE inhibitors, ARBs, spironolactone and potassium supplements. Recheck potassium after treatment and escalate to renal if oliguric AKI accompanies refractory hyperkalaemia. Do not rely on calcium resonium alone in an emergency.",
    questions: [
      {
        id: "lis-fb3-6-q1",
        prompt: "First cardiac protection step when ECG changes accompany K+ ≥6:",
        options: [
          "Calcium resonium only",
          "Calcium gluconate",
          "Immediate dialysis without assessment",
          "Oral potassium supplements",
        ],
        correctIndex: 1,
        explanation: "Give calcium gluconate to protect the heart first.",
      },
    ],
  },
  {
    id: "lis-fc3-1",
    part: "C",
    title: "Talk: obstetric haemorrhage readiness",
    specialty: "Obstetrics",
    durationSec: 288,
    audioUrl: "/audio/lis-fc3-1.mp3",
    transcript: `Speaker: Today I'll cover readiness for major obstetric haemorrhage. Prevention starts antenatally: identify risk factors such as placenta praevia, previous PPH, multiparity and anaemia, and optimise haemoglobin before delivery. At delivery, active management of the third stage with oxytocin reduces average blood loss.

When haemorrhage occurs, use a structured approach — call for help, assess estimated blood loss honestly, and escalate by volume and clinical shock rather than waiting for laboratory confirmation. Uterine atony remains the commonest cause; bimanual compression and stepwise uterotonics come before invasive procedures. Tranexamic acid one gram intravenously within three hours improves outcomes and should not be forgotten amidst the oxytocin and ergometrine sequence.

Blood product strategy should follow your massive obstetric haemorrhage protocol, usually balanced red cells and FFP, with platelets and cryoprecipitate guided by counts and fibrinogen. Point-of-care viscoelastic testing, where available, speeds decisions. Cell salvage can reduce allogeneic transfusion in suitable cases.

After stabilisation, document timing of each drug and product, debrief the team and the woman, and arrange VTE prophylaxis once bleeding is controlled — haemorrhage does not abolish thrombotic risk. Psychological follow-up matters; many women develop anxiety about future births.`,
    ttsScript:
      "Today I'll cover readiness for major obstetric haemorrhage. Prevention starts antenatally: identify risk factors such as placenta praevia, previous PPH, multiparity and anaemia, and optimise haemoglobin before delivery. At delivery, active management of the third stage with oxytocin reduces average blood loss. When haemorrhage occurs, use a structured approach — call for help, assess estimated blood loss honestly, and escalate by volume and clinical shock rather than waiting for laboratory confirmation. Uterine atony remains the commonest cause; bimanual compression and stepwise uterotonics come before invasive procedures. Tranexamic acid one gram intravenously within three hours improves outcomes and should not be forgotten amidst the oxytocin and ergometrine sequence. Blood product strategy should follow your massive obstetric haemorrhage protocol, usually balanced red cells and FFP, with platelets and cryoprecipitate guided by counts and fibrinogen. Point-of-care viscoelastic testing, where available, speeds decisions. Cell salvage can reduce allogeneic transfusion in suitable cases. After stabilisation, document timing of each drug and product, debrief the team and the woman, and arrange VTE prophylaxis once bleeding is controlled — haemorrhage does not abolish thrombotic risk. Psychological follow-up matters; many women develop anxiety about future births.",
    questions: [
      {
        id: "lis-fc3-1-q1",
        prompt: "Active management of the third stage typically uses:",
        options: ["Oxytocin", "Aspirin alone", "No uterotonic", "Oral iron only"],
        correctIndex: 0,
        explanation: "Active management of the third stage with oxytocin reduces average blood loss.",
      },
      {
        id: "lis-fc3-1-q2",
        prompt: "The commonest cause of PPH mentioned is:",
        options: ["Uterine atony", "Amniotic fluid embolism only", "Allergy to oxytocin", "Normal lochia"],
        correctIndex: 0,
        explanation: "Uterine atony remains the commonest cause.",
      },
      {
        id: "lis-fc3-1-q3",
        prompt: "Tranexamic acid timing highlighted:",
        options: ["Within 3 hours", "After 48 hours only", "At the six-week check", "Never in obstetrics"],
        correctIndex: 0,
        explanation: "Tranexamic acid one gram IV within three hours improves outcomes.",
      },
      {
        id: "lis-fc3-1-q4",
        prompt: "Escalation should be based on:",
        options: [
          "Volume loss and clinical shock, not waiting for labs alone",
          "Waiting for full lab panels before any call for help",
          "Patient preference only",
          "Time of day",
        ],
        correctIndex: 0,
        explanation: "Escalate by volume and clinical shock rather than waiting for laboratory confirmation.",
      },
      {
        id: "lis-fc3-1-q5",
        prompt: "Once bleeding is controlled, remember:",
        options: [
          "VTE prophylaxis — haemorrhage does not abolish thrombotic risk",
          "Lifelong bed rest without prophylaxis",
          "Stopping all documentation",
          "Avoiding debrief",
        ],
        correctIndex: 0,
        explanation: "Arrange VTE prophylaxis once bleeding is controlled.",
      },
      {
        id: "lis-fc3-1-q6",
        prompt: "After major haemorrhage, psychological follow-up is:",
        options: ["Important — anxiety about future births is common", "Unnecessary", "Only for staff", "Delayed for ten years"],
        correctIndex: 0,
        explanation: "Psychological follow-up matters; many women develop anxiety about future births.",
      },
    ],
  },
  {
    id: "lis-fc3-2",
    part: "C",
    title: "Talk: delirium on medical wards",
    specialty: "Geriatrics",
    durationSec: 292,
    audioUrl: "/audio/lis-fc3-2.mp3",
    transcript: `Speaker: Delirium is an acute change in attention and awareness, often fluctuating, and it is a medical emergency in older adults. Use a validated tool such as 4AT at the bedside. Hypoactive delirium is easily missed — the quiet, withdrawn patient may be as unwell as the agitated one.

Search for triggers using a structured checklist: infection, medications — especially opioids, benzodiazepines and anticholinergics — constipation, urinary retention, pain, hypoxia, electrolyte disturbance, and sensory deprivation from missing glasses or hearing aids. Always check capillary glucose.

Management is primarily non-pharmacological: reorientation, consistent staffing where possible, mobilisation, sleep hygiene, and involving family. Antipsychotics are reserved for severe distress or risk of harm when other measures fail, at the lowest effective dose for the shortest time, with ECG if using QT-prolonging agents.

Document capacity assessments for each decision, and explain to families that delirium can take days to weeks to resolve even after the trigger is treated. Prevent recurrence by medication review before discharge and clear advice about early signs. Hospitals that audit delirium detection rates and falls linked to hypoactive cases tend to improve faster.`,
    ttsScript:
      "Delirium is an acute change in attention and awareness, often fluctuating, and it is a medical emergency in older adults. Use a validated tool such as 4AT at the bedside. Hypoactive delirium is easily missed — the quiet, withdrawn patient may be as unwell as the agitated one. Search for triggers using a structured checklist: infection, medications — especially opioids, benzodiazepines and anticholinergics — constipation, urinary retention, pain, hypoxia, electrolyte disturbance, and sensory deprivation from missing glasses or hearing aids. Always check capillary glucose. Management is primarily non-pharmacological: reorientation, consistent staffing where possible, mobilisation, sleep hygiene, and involving family. Antipsychotics are reserved for severe distress or risk of harm when other measures fail, at the lowest effective dose for the shortest time, with ECG if using QT-prolonging agents. Document capacity assessments for each decision, and explain to families that delirium can take days to weeks to resolve even after the trigger is treated. Prevent recurrence by medication review before discharge and clear advice about early signs. Hospitals that audit delirium detection rates and falls linked to hypoactive cases tend to improve faster.",
    questions: [
      {
        id: "lis-fc3-2-q1",
        prompt: "A bedside tool recommended for delirium is:",
        options: ["4AT", "GRACE score only", "Wells score", "CHA2DS2-VASc"],
        correctIndex: 0,
        explanation: "Use a validated tool such as 4AT at the bedside.",
      },
      {
        id: "lis-fc3-2-q2",
        prompt: "Hypoactive delirium is described as:",
        options: ["Easily missed", "Impossible", "Always noisy", "Only in children"],
        correctIndex: 0,
        explanation: "Hypoactive delirium is easily missed.",
      },
      {
        id: "lis-fc3-2-q3",
        prompt: "Medication classes especially implicated include:",
        options: [
          "Opioids, benzodiazepines and anticholinergics",
          "Vitamin C only",
          "Topical emollients",
          "Inhaled saline",
        ],
        correctIndex: 0,
        explanation: "Especially opioids, benzodiazepines and anticholinergics.",
      },
      {
        id: "lis-fc3-2-q4",
        prompt: "First-line management emphasis is:",
        options: ["Non-pharmacological measures", "High-dose antipsychotics for all", "Immediate ECT", "Ignoring family"],
        correctIndex: 0,
        explanation: "Management is primarily non-pharmacological.",
      },
      {
        id: "lis-fc3-2-q5",
        prompt: "Antipsychotics are reserved for:",
        options: [
          "Severe distress or risk of harm when other measures fail",
          "Every quiet patient overnight",
          "Routine discharge packs",
          "Preventing all future delirium",
        ],
        correctIndex: 0,
        explanation: "Reserved for severe distress or risk of harm when other measures fail.",
      },
      {
        id: "lis-fc3-2-q6",
        prompt: "Families should be told delirium may take:",
        options: ["Days to weeks to resolve after the trigger is treated", "Exactly one hour", "No time at all", "Ten years"],
        correctIndex: 0,
        explanation: "Delirium can take days to weeks to resolve even after the trigger is treated.",
      },
    ],
  },
];
