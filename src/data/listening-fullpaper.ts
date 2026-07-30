import type { ListeningExtract } from "@/domain/types";

export const LISTENING_EXTRACTS_FULLPAPER: ListeningExtract[] = [
  {
    id: "lis-fa-1",
    part: "A",
    title: "New-onset angina consultation",
    specialty: "Cardiology",
    durationSec: 320,
    audioUrl: "/audio/lis-fa-1.mp3",
    transcript: `Doctor: Good morning, Mr Hassan. What brings you in today?
Patient: I've been getting a tight feeling across my chest for about six weeks. It comes on when I walk uphill to the bus stop.
Doctor: How far can you walk before it starts?
Patient: Roughly two hundred metres on the flat, less if it's cold. It eases within five minutes once I stop.
Doctor: Does it go down your arm or into your jaw?
Patient: Sometimes into the left arm, not the jaw. No sweating with it, but I feel short of breath.
Doctor: Any pain at rest or overnight?
Patient: Not so far. Last week I had a milder episode while carrying shopping bags.
Doctor: Past medical history?
Patient: Type 2 diabetes for eight years — metformin one gram twice daily. Blood pressure tablets — ramipril five milligrams each morning. Cholesterol — atorvastatin twenty milligrams at night. I had a TIA three years ago; I'm on aspirin seventy-five milligrams.
Doctor: Smoking?
Patient: Quit four years ago. Used to smoke fifteen a day for twenty years.
Doctor: Family history?
Patient: My brother had a stent at fifty-two. Father died of a heart attack at sixty-eight.
Doctor: I'd like an ECG today, fasting lipids and HbA1c, and I'll refer you urgently to the rapid-access chest pain clinic. Meanwhile continue your aspirin and avoid heavy exertion. If the pain comes on at rest or lasts more than fifteen minutes, call an ambulance.`,
    ttsScript:
      "Good morning, Mr Hassan. What brings you in today? I've been getting a tight feeling across my chest for about six weeks. It comes on when I walk uphill to the bus stop. How far can you walk before it starts? Roughly two hundred metres on the flat, less if it's cold. It eases within five minutes once I stop. Does it go down your arm or into your jaw? Sometimes into the left arm, not the jaw. No sweating with it, but I feel short of breath. Any pain at rest or overnight? Not so far. Last week I had a milder episode while carrying shopping bags. Past medical history? Type 2 diabetes for eight years — metformin one gram twice daily. Blood pressure tablets — ramipril five milligrams each morning. Cholesterol — atorvastatin twenty milligrams at night. I had a TIA three years ago; I'm on aspirin seventy-five milligrams. Smoking? Quit four years ago. Used to smoke fifteen a day for twenty years. Family history? My brother had a stent at fifty-two. Father died of a heart attack at sixty-eight. I'd like an ECG today, fasting lipids and HbA1c, and I'll refer you urgently to the rapid-access chest pain clinic. Meanwhile continue your aspirin and avoid heavy exertion. If the pain comes on at rest or lasts more than fifteen minutes, call an ambulance.",
    questions: [
      {
        id: "lis-fa-1-q1",
        prompt: "Duration of chest symptoms:",
        answer: "6 weeks",
        acceptedAnswers: ["six weeks", "6 weeks", "about 6 weeks", "about six weeks"],
        explanation: "Tight feeling across the chest for about six weeks.",
      },
      {
        id: "lis-fa-1-q2",
        prompt: "Typical trigger for the pain:",
        answer: "walking uphill",
        acceptedAnswers: ["walking uphill", "uphill", "walking uphill to the bus stop", "exertion"],
        explanation: "Comes on when walking uphill to the bus stop.",
      },
      {
        id: "lis-fa-1-q3",
        prompt: "Walking distance on the flat before onset:",
        answer: "200 metres",
        acceptedAnswers: ["200 metres", "200 m", "two hundred metres", "200 meters"],
        explanation: "Roughly two hundred metres on the flat.",
      },
      {
        id: "lis-fa-1-q4",
        prompt: "Time for pain to ease after stopping:",
        answer: "5 minutes",
        acceptedAnswers: ["5 minutes", "five minutes", "within 5 minutes", "within five minutes"],
        explanation: "Eases within five minutes once he stops.",
      },
      {
        id: "lis-fa-1-q5",
        prompt: "Radiation of pain:",
        answer: "left arm",
        acceptedAnswers: ["left arm", "into the left arm", "sometimes left arm"],
        explanation: "Sometimes into the left arm, not the jaw.",
      },
      {
        id: "lis-fa-1-q6",
        prompt: "Duration of type 2 diabetes:",
        answer: "8 years",
        acceptedAnswers: ["8 years", "eight years"],
        explanation: "Type 2 diabetes for eight years.",
      },
      {
        id: "lis-fa-1-q7",
        prompt: "Metformin dose and frequency:",
        answer: "1 g twice daily",
        acceptedAnswers: ["1 g twice daily", "1g BD", "1 g BD", "one gram twice daily", "1 gram twice daily"],
        explanation: "Metformin one gram twice daily.",
      },
      {
        id: "lis-fa-1-q8",
        prompt: "Ramipril dose:",
        answer: "5 mg",
        acceptedAnswers: ["5 mg", "5mg", "five milligrams", "5 milligrams"],
        explanation: "Ramipril five milligrams each morning.",
      },
      {
        id: "lis-fa-1-q9",
        prompt: "Atorvastatin dose and timing:",
        answer: "20 mg at night",
        acceptedAnswers: ["20 mg at night", "20mg nocte", "20 mg nocte", "twenty milligrams at night"],
        explanation: "Atorvastatin twenty milligrams at night.",
      },
      {
        id: "lis-fa-1-q10",
        prompt: "Aspirin dose:",
        answer: "75 mg",
        acceptedAnswers: ["75 mg", "75mg", "seventy-five milligrams", "75 milligrams"],
        explanation: "Aspirin seventy-five milligrams after TIA.",
      },
      {
        id: "lis-fa-1-q11",
        prompt: "When did the patient quit smoking?",
        answer: "4 years ago",
        acceptedAnswers: ["4 years ago", "four years ago"],
        explanation: "Quit four years ago.",
      },
      {
        id: "lis-fa-1-q12",
        prompt: "Clinic referral planned:",
        answer: "rapid-access chest pain clinic",
        acceptedAnswers: [
          "rapid-access chest pain clinic",
          "rapid access chest pain clinic",
          "chest pain clinic",
        ],
        explanation: "Urgent referral to the rapid-access chest pain clinic.",
      },
    ],
  },
  {
    id: "lis-fa-2",
    part: "A",
    title: "COPD exacerbation review",
    specialty: "Respiratory",
    durationSec: 330,
    audioUrl: "/audio/lis-fa-2.mp3",
    transcript: `Doctor: Hello Mrs Okafor. How has your breathing been since we last saw you?
Patient: Worse over the past four days. More cough, and the sputum has turned green. I get breathless after walking to the kitchen.
Doctor: Any fever or chest pain?
Patient: Mild fever yesterday evening — thirty-seven point eight. No sharp chest pain, just tightness.
Doctor: Oxygen saturations at home?
Patient: My nurse checked this morning — ninety-one percent on air. My usual is around ninety-three to ninety-four.
Doctor: How many puffs of your salbutamol inhaler are you using?
Patient: About eight to ten puffs a day the last few days. Normally two or three.
Doctor: Reminder of your regular inhalers?
Patient: Beclometasone two hundred micrograms twice daily, and tiotropium eighteen micrograms once each morning. I finished a five-day course of prednisolone last month after a similar flare.
Doctor: Antibiotics?
Patient: Amoxicillin five hundred milligrams three times daily for five days — that was six weeks ago.
Doctor: Smoking?
Patient: Still five cigarettes a day. Trying to cut down. Pack-year history is about thirty.
Doctor: Any recent hospital admissions?
Patient: One overnight stay in February for low oxygen. They gave nebulisers and steroids.
Doctor: I'll prescribe prednisolone thirty milligrams daily for five days and doxycycline one hundred milligrams twice daily for seven days. Please check saturations twice daily and come back if they drop below eighty-eight percent, or if you become drowsy. We'll also arrange pulmonary rehab referral and a stop-smoking appointment.`,
    ttsScript:
      "Hello Mrs Okafor. How has your breathing been since we last saw you? Worse over the past four days. More cough, and the sputum has turned green. I get breathless after walking to the kitchen. Any fever or chest pain? Mild fever yesterday evening — thirty-seven point eight. No sharp chest pain, just tightness. Oxygen saturations at home? My nurse checked this morning — ninety-one percent on air. My usual is around ninety-three to ninety-four. How many puffs of your salbutamol inhaler are you using? About eight to ten puffs a day the last few days. Normally two or three. Reminder of your regular inhalers? Beclometasone two hundred micrograms twice daily, and tiotropium eighteen micrograms once each morning. I finished a five-day course of prednisolone last month after a similar flare. Antibiotics? Amoxicillin five hundred milligrams three times daily for five days — that was six weeks ago. Smoking? Still five cigarettes a day. Trying to cut down. Pack-year history is about thirty. Any recent hospital admissions? One overnight stay in February for low oxygen. They gave nebulisers and steroids. I'll prescribe prednisolone thirty milligrams daily for five days and doxycycline one hundred milligrams twice daily for seven days. Please check saturations twice daily and come back if they drop below eighty-eight percent, or if you become drowsy. We'll also arrange pulmonary rehab referral and a stop-smoking appointment.",
    questions: [
      {
        id: "lis-fa-2-q1",
        prompt: "Duration of current worsening:",
        answer: "4 days",
        acceptedAnswers: ["4 days", "four days", "past 4 days", "past four days"],
        explanation: "Worse over the past four days.",
      },
      {
        id: "lis-fa-2-q2",
        prompt: "Change in sputum colour:",
        answer: "green",
        acceptedAnswers: ["green", "turned green", "green sputum"],
        explanation: "Sputum has turned green.",
      },
      {
        id: "lis-fa-2-q3",
        prompt: "Temperature recorded yesterday evening:",
        answer: "37.8°C",
        acceptedAnswers: ["37.8", "37.8°C", "37.8 C", "thirty-seven point eight"],
        explanation: "Mild fever — thirty-seven point eight.",
      },
      {
        id: "lis-fa-2-q4",
        prompt: "Today's SpO2 on air:",
        answer: "91%",
        acceptedAnswers: ["91%", "91 percent", "ninety-one percent", "91"],
        explanation: "Nurse checked — ninety-one percent on air.",
      },
      {
        id: "lis-fa-2-q5",
        prompt: "Current daily salbutamol use:",
        answer: "8–10 puffs",
        acceptedAnswers: ["8–10 puffs", "8-10 puffs", "8 to 10 puffs", "eight to ten puffs"],
        explanation: "About eight to ten puffs a day recently.",
      },
      {
        id: "lis-fa-2-q6",
        prompt: "Beclometasone dose:",
        answer: "200 micrograms twice daily",
        acceptedAnswers: [
          "200 micrograms twice daily",
          "200 mcg BD",
          "200 mcg twice daily",
          "beclometasone 200 micrograms twice daily",
        ],
        explanation: "Beclometasone two hundred micrograms twice daily.",
      },
      {
        id: "lis-fa-2-q7",
        prompt: "Tiotropium dose:",
        answer: "18 micrograms once daily",
        acceptedAnswers: [
          "18 micrograms once daily",
          "18 mcg daily",
          "eighteen micrograms once each morning",
          "tiotropium 18 micrograms",
        ],
        explanation: "Tiotropium eighteen micrograms once each morning.",
      },
      {
        id: "lis-fa-2-q8",
        prompt: "Previous amoxicillin regimen:",
        answer: "500 mg three times daily for 5 days",
        acceptedAnswers: [
          "500 mg three times daily for 5 days",
          "500mg TDS for 5 days",
          "500 mg TDS for five days",
          "five hundred milligrams three times daily for five days",
        ],
        explanation: "Amoxicillin five hundred milligrams three times daily for five days.",
      },
      {
        id: "lis-fa-2-q9",
        prompt: "Current cigarette use:",
        answer: "5 a day",
        acceptedAnswers: ["5 a day", "five a day", "5 cigarettes a day", "five cigarettes a day"],
        explanation: "Still five cigarettes a day.",
      },
      {
        id: "lis-fa-2-q10",
        prompt: "Approximate pack-year history:",
        answer: "30",
        acceptedAnswers: ["30", "thirty", "about 30", "about thirty"],
        explanation: "Pack-year history is about thirty.",
      },
      {
        id: "lis-fa-2-q11",
        prompt: "New prednisolone prescription:",
        answer: "30 mg daily for 5 days",
        acceptedAnswers: [
          "30 mg daily for 5 days",
          "30mg for 5 days",
          "thirty milligrams daily for five days",
          "prednisolone 30 mg daily for 5 days",
        ],
        explanation: "Prednisolone thirty milligrams daily for five days.",
      },
      {
        id: "lis-fa-2-q12",
        prompt: "SpO2 threshold to seek review:",
        answer: "below 88%",
        acceptedAnswers: [
          "below 88%",
          "below 88 percent",
          "drop below 88%",
          "less than 88%",
          "below eighty-eight percent",
        ],
        explanation: "Return if saturations drop below eighty-eight percent.",
      },
    ],
  },
  {
    id: "lis-fb-1",
    part: "B",
    title: "ED handover: suspected sepsis",
    specialty: "ED",
    durationSec: 75,
    audioUrl: "/audio/lis-fb-1.mp3",
    transcript: `Registrar: Bed 3 is Mr Reid, seventy-two, from the nursing home. Fever and confusion since this morning. BP ninety-eight over fifty-four, heart rate one-twelve, temp thirty-eight point nine, lactate three point two. We've given a litre of Hartmann's and taken blood cultures. Antibiotics — co-amoxiclav and gentamicin — are ordered but not yet given. Chest X-ray pending. Next of kin aware. Priority is to start antibiotics within the hour and reassess fluid response.`,
    ttsScript:
      "Bed 3 is Mr Reid, seventy-two, from the nursing home. Fever and confusion since this morning. BP ninety-eight over fifty-four, heart rate one-twelve, temp thirty-eight point nine, lactate three point two. We've given a litre of Hartmann's and taken blood cultures. Antibiotics — co-amoxiclav and gentamicin — are ordered but not yet given. Chest X-ray pending. Next of kin aware. Priority is to start antibiotics within the hour and reassess fluid response.",
    questions: [
      {
        id: "lis-fb-1-q1",
        prompt: "The immediate priority for Mr Reid is to:",
        options: [
          "Await chest X-ray before any treatment",
          "Start antibiotics within the hour",
          "Discharge back to the nursing home",
          "Stop fluids until lactate normalises",
        ],
        correctIndex: 1,
        explanation: "Priority is to start antibiotics within the hour and reassess fluid response.",
      },
    ],
  },
  {
    id: "lis-fb-2",
    part: "B",
    title: "Ward briefing: insulin safety",
    specialty: "Diabetes",
    durationSec: 70,
    audioUrl: "/audio/lis-fb-2.mp3",
    transcript: `Diabetes specialist nurse: Reminder for the medical ward — never abbreviate units as U on insulin prescriptions; write the word units in full. All new insulin starts need a second check by a registered nurse before the first dose. Capillary glucose must be checked within thirty minutes of giving a correction dose. Hypoglycaemia below four millimoles — treat with fifteen grams of rapid-acting carbohydrate and recheck in fifteen minutes.`,
    ttsScript:
      "Reminder for the medical ward — never abbreviate units as U on insulin prescriptions; write the word units in full. All new insulin starts need a second check by a registered nurse before the first dose. Capillary glucose must be checked within thirty minutes of giving a correction dose. Hypoglycaemia below four millimoles — treat with fifteen grams of rapid-acting carbohydrate and recheck in fifteen minutes.",
    questions: [
      {
        id: "lis-fb-2-q1",
        prompt: "According to the briefing, insulin prescriptions must:",
        options: [
          "Use the abbreviation U for units",
          "Write 'units' in full",
          "Be signed only by consultants",
          "Omit the dose if the patient is fasting",
        ],
        correctIndex: 1,
        explanation: "Never abbreviate units as U; write the word units in full.",
      },
    ],
  },
  {
    id: "lis-fb-3",
    part: "B",
    title: "Ortho handover: compartment syndrome watch",
    specialty: "Orthopaedics",
    durationSec: 80,
    audioUrl: "/audio/lis-fb-3.mp3",
    transcript: `SHO: Mrs Khan, bed 7, day zero after tibial nailing. Neurovascular observations every hour for the first twelve hours. Pain out of proportion to the injury, especially on passive stretch of the toes, must be escalated immediately — do not wait for absent pulses. Keep the leg at heart level, not elevated. Analgesia is oral morphine, but escalating opioid need is itself a red flag. Theatre is on standby if compartment pressures are needed.`,
    ttsScript:
      "Mrs Khan, bed 7, day zero after tibial nailing. Neurovascular observations every hour for the first twelve hours. Pain out of proportion to the injury, especially on passive stretch of the toes, must be escalated immediately — do not wait for absent pulses. Keep the leg at heart level, not elevated. Analgesia is oral morphine, but escalating opioid need is itself a red flag. Theatre is on standby if compartment pressures are needed.",
    questions: [
      {
        id: "lis-fb-3-q1",
        prompt: "Staff are told not to delay escalation until:",
        options: [
          "Pulses are absent",
          "Hb falls below 100",
          "Physio clears mobilisation",
          "Wound drain output increases",
        ],
        correctIndex: 0,
        explanation: "Escalate immediately for disproportionate pain — do not wait for absent pulses.",
      },
    ],
  },
  {
    id: "lis-fb-4",
    part: "B",
    title: "Obstetrics: CTG escalation policy",
    specialty: "Obstetrics",
    durationSec: 75,
    audioUrl: "/audio/lis-fb-4.mp3",
    transcript: `Midwife coordinator: For any suspicious CTG lasting more than thirty minutes, or a pathological CTG at any time, inform the obstetric registrar immediately and start intrauterine resuscitation — left lateral position, stop oxytocin, give fluids, and maternal oxygen if saturations are low. Document the time of escalation. Do not leave the woman unattended during this period. Cord prolapse remains a crash call regardless of CTG category.`,
    ttsScript:
      "For any suspicious CTG lasting more than thirty minutes, or a pathological CTG at any time, inform the obstetric registrar immediately and start intrauterine resuscitation — left lateral position, stop oxytocin, give fluids, and maternal oxygen if saturations are low. Document the time of escalation. Do not leave the woman unattended during this period. Cord prolapse remains a crash call regardless of CTG category.",
    questions: [
      {
        id: "lis-fb-4-q1",
        prompt: "A pathological CTG requires staff to:",
        options: [
          "Observe for another hour before calling",
          "Inform the obstetric registrar immediately",
          "Increase the oxytocin infusion rate",
          "Discharge the woman home with a CTG printout",
        ],
        correctIndex: 1,
        explanation: "Pathological CTG at any time → inform obstetric registrar immediately.",
      },
    ],
  },
  {
    id: "lis-fb-5",
    part: "B",
    title: "Haematology: transfusion reaction alert",
    specialty: "Haematology",
    durationSec: 70,
    audioUrl: "/audio/lis-fb-5.mp3",
    transcript: `Transfusion practitioner: If a patient develops fever, rigors, back pain or hypotension during a transfusion, stop the transfusion immediately, keep the IV line open with saline, and call for urgent medical review. Check the identity band against the unit label again. Return the unit and giving set to the lab. Do not discard the bag. Observations every fifteen minutes until stable. Document and complete the incident form within twenty-four hours.`,
    ttsScript:
      "If a patient develops fever, rigors, back pain or hypotension during a transfusion, stop the transfusion immediately, keep the IV line open with saline, and call for urgent medical review. Check the identity band against the unit label again. Return the unit and giving set to the lab. Do not discard the bag. Observations every fifteen minutes until stable. Document and complete the incident form within twenty-four hours.",
    questions: [
      {
        id: "lis-fb-5-q1",
        prompt: "First action if a transfusion reaction is suspected:",
        options: [
          "Speed up the infusion to finish the unit",
          "Stop the transfusion immediately",
          "Discard the bag in clinical waste",
          "Wait thirty minutes then reassess",
        ],
        correctIndex: 1,
        explanation: "Stop the transfusion immediately, keep line open with saline, call for review.",
      },
    ],
  },
  {
    id: "lis-fb-6",
    part: "B",
    title: "Anaesthesia: pre-op fasting reminder",
    specialty: "Anaesthesia",
    durationSec: 65,
    audioUrl: "/audio/lis-fb-6.mp3",
    transcript: `Consultant anaesthetist: For elective lists tomorrow — clear fluids until two hours before anaesthesia, light meal six hours before. Chewing gum counts as clear fluid in our trust policy. Medications with a sip of water are allowed unless told otherwise. Patients on SGLT2 inhibitors must omit the morning dose and have capillary ketones checked on arrival because of euglycaemic DKA risk. Flag any non-compliance to the anaesthetist before sending for theatre.`,
    ttsScript:
      "For elective lists tomorrow — clear fluids until two hours before anaesthesia, light meal six hours before. Chewing gum counts as clear fluid in our trust policy. Medications with a sip of water are allowed unless told otherwise. Patients on SGLT2 inhibitors must omit the morning dose and have capillary ketones checked on arrival because of euglycaemic DKA risk. Flag any non-compliance to the anaesthetist before sending for theatre.",
    questions: [
      {
        id: "lis-fb-6-q1",
        prompt: "Patients on SGLT2 inhibitors must:",
        options: [
          "Double the morning dose before theatre",
          "Omit the morning dose and have ketones checked",
          "Take metformin instead on the day of surgery",
          "Fast from clear fluids for twelve hours",
        ],
        correctIndex: 1,
        explanation: "Omit morning dose and check capillary ketones on arrival due to euglycaemic DKA risk.",
      },
    ],
  },
  {
    id: "lis-fc-1",
    part: "C",
    title: "Talk: managing acute upper GI bleed",
    specialty: "Gastroenterology",
    durationSec: 280,
    audioUrl: "/audio/lis-fc-1.mp3",
    transcript: `Speaker: Good afternoon. Today I'll cover a practical approach to acute upper gastrointestinal bleeding on the medical take. First, assess haemodynamic stability. A systolic blood pressure below ninety, or a heart rate above one hundred and twenty, warrants immediate resuscitation with large-bore IV access and crystalloid, while arranging urgent blood products. The Glasgow-Blatchford score helps triage: a score of zero identifies very low-risk patients who may be suitable for outpatient endoscopy, but anyone scoring six or more should stay in hospital.

Second, reverse anticoagulation thoughtfully. For warfarin with active bleeding, give vitamin K and prothrombin complex concentrate rather than waiting for fresh frozen plasma alone. DOAC-related bleeding may need specific reversal agents where available — idarucizumab for dabigatran, for example — alongside local haemostasis.

Third, timing of endoscopy. NICE guidance supports endoscopy within twenty-four hours for most non-variceal bleeds once the patient is resuscitated. Suspected variceal bleeding needs terlipressin and antibiotics before endoscopy, ideally within twelve hours. High-dose IV proton-pump inhibitor infusion after endoscopic therapy for high-risk ulcers reduces re-bleeding.

Finally, do not forget Rockall scoring after endoscopy for re-bleed risk, and ensure Helicobacter pylori testing is planned before discharge when peptic ulcer is confirmed. Questions are welcome at the end.`,
    ttsScript:
      "Good afternoon. Today I'll cover a practical approach to acute upper gastrointestinal bleeding on the medical take. First, assess haemodynamic stability. A systolic blood pressure below ninety, or a heart rate above one hundred and twenty, warrants immediate resuscitation with large-bore IV access and crystalloid, while arranging urgent blood products. The Glasgow-Blatchford score helps triage: a score of zero identifies very low-risk patients who may be suitable for outpatient endoscopy, but anyone scoring six or more should stay in hospital. Second, reverse anticoagulation thoughtfully. For warfarin with active bleeding, give vitamin K and prothrombin complex concentrate rather than waiting for fresh frozen plasma alone. DOAC-related bleeding may need specific reversal agents where available — idarucizumab for dabigatran, for example — alongside local haemostasis. Third, timing of endoscopy. NICE guidance supports endoscopy within twenty-four hours for most non-variceal bleeds once the patient is resuscitated. Suspected variceal bleeding needs terlipressin and antibiotics before endoscopy, ideally within twelve hours. High-dose IV proton-pump inhibitor infusion after endoscopic therapy for high-risk ulcers reduces re-bleeding. Finally, do not forget Rockall scoring after endoscopy for re-bleed risk, and ensure Helicobacter pylori testing is planned before discharge when peptic ulcer is confirmed. Questions are welcome at the end.",
    questions: [
      {
        id: "lis-fc-1-q1",
        prompt: "Immediate resuscitation is indicated when systolic BP is below:",
        options: ["100 mmHg", "90 mmHg", "110 mmHg", "80 mmHg"],
        correctIndex: 1,
        explanation: "Systolic blood pressure below ninety warrants immediate resuscitation.",
      },
      {
        id: "lis-fc-1-q2",
        prompt: "A Glasgow-Blatchford score of zero suggests the patient may be:",
        options: [
          "Suitable for outpatient endoscopy",
          "Sent straight to theatre",
          "Started on lifelong warfarin",
          "Managed only with platelets",
        ],
        correctIndex: 0,
        explanation: "Score of zero identifies very low-risk patients who may have outpatient endoscopy.",
      },
      {
        id: "lis-fc-1-q3",
        prompt: "Warfarin-related active bleeding should be reversed with:",
        options: [
          "Aspirin and clopidogrel",
          "Vitamin K and prothrombin complex concentrate",
          "Heparin infusion alone",
          "Oral iron only",
        ],
        correctIndex: 1,
        explanation: "Give vitamin K and PCC rather than waiting for FFP alone.",
      },
      {
        id: "lis-fc-1-q4",
        prompt: "For most resuscitated non-variceal bleeds, endoscopy should occur within:",
        options: ["6 hours", "12 hours", "24 hours", "72 hours"],
        correctIndex: 2,
        explanation: "NICE supports endoscopy within twenty-four hours for most non-variceal bleeds.",
      },
      {
        id: "lis-fc-1-q5",
        prompt: "Before endoscopy for suspected variceal bleeding, give:",
        options: [
          "Terlipressin and antibiotics",
          "High-dose aspirin",
          "Oral PPI only",
          "Metformin and fluids",
        ],
        correctIndex: 0,
        explanation: "Suspected variceal bleeding needs terlipressin and antibiotics before endoscopy.",
      },
      {
        id: "lis-fc-1-q6",
        prompt: "After peptic ulcer is confirmed, plan before discharge:",
        options: [
          "Routine colonoscopy only",
          "Helicobacter pylori testing",
          "Stopping all acid suppression permanently",
          "Mandatory splenectomy counselling",
        ],
        correctIndex: 1,
        explanation: "Ensure H. pylori testing is planned before discharge when peptic ulcer is confirmed.",
      },
    ],
  },
  {
    id: "lis-fc-2",
    part: "C",
    title: "Talk: heart failure review in primary care",
    specialty: "GP",
    durationSec: 290,
    audioUrl: "/audio/lis-fc-2.mp3",
    transcript: `Speaker: In this session I'll outline how we structure heart failure reviews in general practice. Start by confirming the phenotype — HFrEF versus HFpEF — because drug eligibility differs. For HFrEF with ejection fraction of forty percent or less, four pillars are now standard: an ACE inhibitor or ARNI, a beta-blocker, a mineralocorticoid receptor antagonist, and an SGLT2 inhibitor, titrated as tolerated.

Monitoring matters. Check renal function and electrolytes within one to two weeks after starting or uptitrating ACE inhibitors, ARNI, or MRAs. A creatinine rise of up to thirty percent from baseline can be acceptable if the patient remains well, but hyperkalaemia above five point five needs action — dose reduction or temporary pause, plus dietary advice.

Symptom review should cover orthopnoea, paroxysmal nocturnal dyspnoea, ankle swelling, and exercise tolerance using NYHA class. Ask specifically about missed doses; non-adherence often explains decompensation more than disease progression. Weight gain of more than two kilograms in three days is a red flag for fluid retention — advise patients to contact the surgery or heart failure nurse.

Vaccination against influenza annually and pneumococcal disease as per schedule reduces admissions. Advanced care planning belongs in stable periods, not only during crises: discuss ICD or CRT referrals when indicated, and explore preferences about hospital admission if quality of life is declining. Finally, refer urgently if there is syncope, new chest pain suggestive of ischaemia, or rapid atrial fibrillation with compromise.`,
    ttsScript:
      "In this session I'll outline how we structure heart failure reviews in general practice. Start by confirming the phenotype — HFrEF versus HFpEF — because drug eligibility differs. For HFrEF with ejection fraction of forty percent or less, four pillars are now standard: an ACE inhibitor or ARNI, a beta-blocker, a mineralocorticoid receptor antagonist, and an SGLT2 inhibitor, titrated as tolerated. Monitoring matters. Check renal function and electrolytes within one to two weeks after starting or uptitrating ACE inhibitors, ARNI, or MRAs. A creatinine rise of up to thirty percent from baseline can be acceptable if the patient remains well, but hyperkalaemia above five point five needs action — dose reduction or temporary pause, plus dietary advice. Symptom review should cover orthopnoea, paroxysmal nocturnal dyspnoea, ankle swelling, and exercise tolerance using NYHA class. Ask specifically about missed doses; non-adherence often explains decompensation more than disease progression. Weight gain of more than two kilograms in three days is a red flag for fluid retention — advise patients to contact the surgery or heart failure nurse. Vaccination against influenza annually and pneumococcal disease as per schedule reduces admissions. Advanced care planning belongs in stable periods, not only during crises: discuss ICD or CRT referrals when indicated, and explore preferences about hospital admission if quality of life is declining. Finally, refer urgently if there is syncope, new chest pain suggestive of ischaemia, or rapid atrial fibrillation with compromise.",
    questions: [
      {
        id: "lis-fc-2-q1",
        prompt: "HFrEF for four-pillar therapy is defined as ejection fraction of:",
        options: ["≤50%", "≤40%", "≤55%", "≤60%"],
        correctIndex: 1,
        explanation: "HFrEF with ejection fraction of forty percent or less.",
      },
      {
        id: "lis-fc-2-q2",
        prompt: "After starting or uptitrating ACE inhibitors, check bloods within:",
        options: ["24 hours", "1–2 weeks", "3 months", "1 year"],
        correctIndex: 1,
        explanation: "Renal function and electrolytes within one to two weeks.",
      },
      {
        id: "lis-fc-2-q3",
        prompt: "An acceptable creatinine rise from baseline (if well) is up to:",
        options: ["10%", "20%", "30%", "50%"],
        correctIndex: 2,
        explanation: "Creatinine rise of up to thirty percent can be acceptable if the patient remains well.",
      },
      {
        id: "lis-fc-2-q4",
        prompt: "Hyperkalaemia needing action is described as above:",
        options: ["4.5 mmol/L", "5.0 mmol/L", "5.5 mmol/L", "6.5 mmol/L"],
        correctIndex: 2,
        explanation: "Hyperkalaemia above five point five needs action.",
      },
      {
        id: "lis-fc-2-q5",
        prompt: "Weight gain prompting contact with the surgery is more than:",
        options: ["0.5 kg in a week", "1 kg in a month", "2 kg in 3 days", "5 kg in 3 months"],
        correctIndex: 2,
        explanation: "Weight gain of more than two kilograms in three days is a red flag.",
      },
      {
        id: "lis-fc-2-q6",
        prompt: "Urgent referral is indicated for:",
        options: [
          "Stable NYHA class II symptoms only",
          "Syncope or ischaemic chest pain",
          "Completed annual influenza vaccine",
          "Mild ankle swelling after a long flight",
        ],
        correctIndex: 1,
        explanation: "Refer urgently for syncope, new ischaemic chest pain, or rapid AF with compromise.",
      },
    ],
  },
];
