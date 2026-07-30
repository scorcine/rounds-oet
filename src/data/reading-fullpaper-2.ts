import type { ReadingPassage } from "@/domain/types";

export const READING_PASSAGES_FULLPAPER_2: ReadingPassage[] = [
  {
    id: "read-fa2-1",
    part: "A",
    title: "Expeditious: acute ischaemic stroke pack",
    specialty: "Stroke medicine",
    timeLimitSec: 900,
    text: `DOCUMENT 1 — ED stroke clerking
Mrs Anisha Rahman, 68, last seen well 08:15; arrived 09:05 with right facial droop, right arm weakness and expressive dysphasia. Background: AF on apixaban 5 mg BD (last dose yesterday evening missed while travelling), hypertension, type 2 diabetes. NIHSS 9. BP 176/98, HR 88 irregular, SpO2 97% air, glucose 8.4 mmol/L. Plan: urgent CT/CTA, keep NBM pending swallow screen, stroke team review for thrombolysis/thrombectomy.

DOCUMENT 2 — Imaging & pathology
Non-contrast CT head: no haemorrhage. CTA: left M1 occlusion. ASPECTS 8. Troponin 12 ng/L. Creatinine 88 µmol/L, eGFR 64. INR 1.1, platelets 268. Hb 132 g/L. ECG: AF rate-controlled. No large established infarct on CT.

DOCUMENT 3 — Acute treatment chart
IV alteplase 0.9 mg/kg (max 90 mg): 10% bolus then infusion — total dose calculated 68 mg given 09:28. Aspirin withheld until 24-hour scan. Apixaban held. BP target <185/110 during and after thrombolysis. Transferred to thrombectomy centre 09:40. NKDA. Swallow screen failed — NG plan if still unsafe at 4 hours.

DOCUMENT 4 — Trust hyperacute stroke pathway excerpt
Door-to-CT target ≤20 minutes. Door-to-needle target ≤30 minutes when thrombolysis indicated. Offer endovascular thrombectomy for proximal anterior LVO within 6 hours of onset (selected cases to 24 hours per advanced imaging). Start secondary prevention after haemorrhage excluded on 24-hour imaging: antiplatelet if no AF; anticoagulation timing individualised if AF. Refer ESD or inpatient rehab within 24 hours of stability. Driving advice mandatory before discharge.`,
    questions: [
      {
        id: "read-fa2-1-q1",
        prompt: "Which document records the NIHSS score?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 0,
        explanation: "NIHSS 9 is in the ED stroke clerking (Document 1).",
      },
      {
        id: "read-fa2-1-q2",
        prompt: "Which document states the left M1 occlusion?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 1,
        explanation: "CTA: left M1 occlusion appears in Document 2.",
      },
      {
        id: "read-fa2-1-q3",
        prompt: "Where is the alteplase total dose recorded?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 2,
        explanation: "Total dose 68 mg is on the acute treatment chart (Document 3).",
      },
      {
        id: "read-fa2-1-q4",
        prompt: "Which document gives the door-to-needle target?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 3,
        explanation: "Door-to-needle target ≤30 minutes is in the pathway (Document 4).",
      },
      {
        id: "read-fa2-1-q5",
        prompt: "Document number listing ASPECTS:",
        answer: "2",
        acceptedAnswers: ["2", "Document 2", "document 2"],
        explanation: "ASPECTS 8 is in Document 2.",
      },
      {
        id: "read-fa2-1-q6",
        prompt: "Which document notes the missed apixaban dose?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 0,
        explanation: "Missed last evening dose is in Document 1.",
      },
      {
        id: "read-fa2-1-q7",
        prompt: "Where is creatinine recorded?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 1,
        explanation: "Creatinine 88 µmol/L is in Document 2.",
      },
      {
        id: "read-fa2-1-q8",
        prompt: "Which document states BP target during thrombolysis?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 2,
        explanation: "BP target <185/110 is on the treatment chart (Document 3).",
      },
      {
        id: "read-fa2-1-q9",
        prompt: "Last seen well time:",
        answer: "08:15",
        acceptedAnswers: ["08:15", "8:15", "08.15"],
        explanation: "Last seen well 08:15 in Document 1.",
      },
      {
        id: "read-fa2-1-q10",
        prompt: "Patient's age:",
        answer: "68",
        acceptedAnswers: ["68", "68 years"],
        explanation: "Mrs Anisha Rahman, 68.",
      },
      {
        id: "read-fa2-1-q11",
        prompt: "Capillary / lab glucose:",
        answer: "8.4 mmol/L",
        acceptedAnswers: ["8.4 mmol/L", "8.4", "8.4 mmol/l"],
        explanation: "Glucose 8.4 mmol/L in Document 1.",
      },
      {
        id: "read-fa2-1-q12",
        prompt: "Alteplase bolus fraction of total dose:",
        answer: "10%",
        acceptedAnswers: ["10%", "10 percent", "10"],
        explanation: "10% bolus then infusion (Document 3).",
      },
      {
        id: "read-fa2-1-q13",
        prompt: "Document number that mandates driving advice before discharge:",
        answer: "4",
        acceptedAnswers: ["4", "Document 4", "document 4"],
        explanation: "Driving advice mandatory before discharge — Document 4.",
      },
      {
        id: "read-fa2-1-q14",
        prompt: "Which document reports failed swallow screen?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 2,
        explanation: "Swallow screen failed — Document 3.",
      },
      {
        id: "read-fa2-1-q15",
        prompt: "Thrombectomy window for proximal anterior LVO (standard) within:",
        options: ["2 hours", "6 hours", "72 hours", "1 week"],
        correctIndex: 1,
        explanation: "Within 6 hours of onset (Document 4); selected cases to 24 hours.",
      },
      {
        id: "read-fa2-1-q16",
        prompt: "Platelet count:",
        answer: "268",
        acceptedAnswers: ["268", "268 ×10⁹/L"],
        explanation: "Platelets 268 in Document 2.",
      },
      {
        id: "read-fa2-1-q17",
        prompt: "Time alteplase given:",
        answer: "09:28",
        acceptedAnswers: ["09:28", "9:28"],
        explanation: "Given 09:28 in Document 3.",
      },
      {
        id: "read-fa2-1-q18",
        prompt: "Which document lists transfer to the thrombectomy centre?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 2,
        explanation: "Transferred to thrombectomy centre 09:40 — Document 3.",
      },
      {
        id: "read-fa2-1-q19",
        prompt: "Door-to-CT target:",
        answer: "≤20 minutes",
        acceptedAnswers: ["≤20 minutes", "20 minutes", "≤20 min", "20 min"],
        explanation: "Door-to-CT target ≤20 minutes (Document 4).",
      },
      {
        id: "read-fa2-1-q20",
        prompt: "Which document confirms no haemorrhage on CT?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 1,
        explanation: "Non-contrast CT: no haemorrhage — Document 2.",
      },
    ],
  },
  {
    id: "read-fb2-1",
    part: "B",
    title: "Guideline: community-acquired pneumonia severity",
    specialty: "Respiratory",
    timeLimitSec: 180,
    text: `CAP assessment reminder
Calculate CURB-65 (Confusion, Urea >7 mmol/L, Respiratory rate ≥30, BP <90 systolic or ≤60 diastolic, age ≥65). Score 0–1: consider home treatment if social circumstances allow. Score 2: short-stay inpatient or hospital-supervised ambulatory care. Score ≥3: manage as severe; consider critical care review. Give antibiotics within 4 hours of diagnosis and obtain blood cultures before antibiotics when severe.`,
    questions: [
      {
        id: "read-fb2-1-q1",
        prompt: "CURB-65 score ≥3 should be managed as:",
        options: ["Home care only", "Severe pneumonia", "No antibiotics", "Outpatient physiotherapy alone"],
        correctIndex: 1,
        explanation: "Score ≥3: manage as severe.",
      },
    ],
  },
  {
    id: "read-fb2-2",
    part: "B",
    title: "Policy: hypoglycaemia treatment on wards",
    specialty: "Diabetes",
    timeLimitSec: 180,
    text: `Hypoglycaemia pathway (conscious patient)
If capillary glucose <4.0 mmol/L and the patient can swallow safely, give 15–20 g fast-acting carbohydrate (e.g. 5–7 glucose tablets or 200 ml fruit juice). Recheck in 15 minutes; repeat once if still <4.0. Then give long-acting carbohydrate. Do not omit the next insulin dose without senior advice — adjust instead. If unconscious, use IM glucagon or IV glucose as per protocol and call for help.`,
    questions: [
      {
        id: "read-fb2-2-q1",
        prompt: "After treating a conscious hypoglycaemic patient, recheck glucose in:",
        options: ["5 minutes", "15 minutes", "2 hours", "24 hours"],
        correctIndex: 1,
        explanation: "Recheck in 15 minutes.",
      },
    ],
  },
  {
    id: "read-fb2-3",
    part: "B",
    title: "Memo: MRI safety and pacemakers",
    specialty: "Cardiology",
    timeLimitSec: 180,
    text: `Radiology safety notice
Do not send patients with non-MR-conditional pacemakers or abandoned leads for MRI without a formal cardiology–radiology risk assessment. Confirm device mode and MR-conditional status from the implant card. Deactivate tachycardia therapies as instructed by pacing clinic for the scan period. Document interrogation before and after MRI. Emergency magnets are available in MRI but are not a substitute for pre-scan planning.`,
    questions: [
      {
        id: "read-fb2-3-q1",
        prompt: "Before MRI, staff must confirm pacemaker:",
        options: [
          "Colour only",
          "MR-conditional status from the implant card",
          "Battery brand from advertising",
          "Nothing — all devices are safe",
        ],
        correctIndex: 1,
        explanation: "Confirm device mode and MR-conditional status from the implant card.",
      },
    ],
  },
  {
    id: "read-fb2-4",
    part: "B",
    title: "Alert: methotrexate weekly dosing",
    specialty: "Rheumatology",
    timeLimitSec: 180,
    text: `Medication safety alert
Methotrexate for rheumatology indications is once weekly — never daily. Prescriptions must state the day of the week. Folic acid is usually given weekly on a different day. Check FBC, U&Es and LFTs before escalation and as per monitoring schedule. Withhold and seek advice if the patient develops mouth ulcers, unexplained breathlessness, or severe infection. Interactions with trimethoprim can increase toxicity.`,
    questions: [
      {
        id: "read-fb2-4-q1",
        prompt: "Methotrexate for rheumatology must be prescribed:",
        options: ["Once weekly", "Three times daily", "Only as needed for pain", "By continuous infusion at home"],
        correctIndex: 0,
        explanation: "Methotrexate is once weekly — never daily.",
      },
    ],
  },
  {
    id: "read-fb2-5",
    part: "B",
    title: "Protocol: status epilepticus first hour",
    specialty: "Neurology",
    timeLimitSec: 180,
    text: `Status epilepticus — immediate care
Protect airway, give oxygen, check glucose. First-line: IV lorazepam 4 mg (or buccal midazolam if no IV access). Repeat benzodiazepine once after 5–10 minutes if seizures continue. Second-line agents (e.g. levetiracetam, valproate or phenytoin as per protocol) should be started if seizures persist. Call ICU early for refractory status. Avoid delaying treatment to obtain EEG in convulsive status.`,
    questions: [
      {
        id: "read-fb2-5-q1",
        prompt: "First-line IV treatment stated is:",
        options: ["IV lorazepam 4 mg", "Oral phenytoin only", "Aspirin 300 mg", "No medication"],
        correctIndex: 0,
        explanation: "First-line: IV lorazepam 4 mg.",
      },
    ],
  },
  {
    id: "read-fb2-6",
    part: "B",
    title: "Briefing: isolation for C. difficile",
    specialty: "Infection control",
    timeLimitSec: 180,
    text: `CDI ward briefing
Isolate symptomatic patients in a single room with PPE and soap-and-water hand hygiene — alcohol gel is insufficient against spores. Send stool for C. difficile testing before starting empirical therapy when possible. Review and stop unnecessary antibiotics and PPIs. Do not use anti-motility agents in acute CDI. Terminal clean with sporicidal agent after discharge.`,
    questions: [
      {
        id: "read-fb2-6-q1",
        prompt: "Hand hygiene for C. difficile requires:",
        options: ["Soap and water", "Alcohol gel alone", "No handwashing", "Only gloves forever without washing"],
        correctIndex: 0,
        explanation: "Soap-and-water hand hygiene — alcohol gel is insufficient against spores.",
      },
    ],
  },
  {
    id: "read-fc2-1",
    part: "C",
    title: "Article: pulmonary embolism risk stratification",
    specialty: "Respiratory",
    timeLimitSec: 1200,
    text: `Pulmonary embolism (PE) spans a spectrum from incidental subsegmental clot to obstructive shock. Contemporary pathways emphasise rapid risk stratification rather than treating every confirmed PE identically. Haemodynamic instability — sustained hypotension or needing vasopressors — defines high-risk PE and should trigger consideration of thrombolysis or catheter-based therapy in parallel with resuscitation and anticoagulation, unless absolute contraindications dominate.

For normotensive patients, combine clinical scores such as PESI or sPESI with markers of right-ventricular strain on CT or echocardiography and troponin or BNP elevation. Intermediate–high risk patients warrant closer monitoring, often on a higher-acuity ward, because deterioration can be abrupt. Intermediate–low and low-risk patients may be suitable for early discharge on a direct oral anticoagulant when social support, renal function and bleeding risk allow.

Anticoagulation choice should reflect comorbidity: DOACs are first-line for most, while LMWH remains preferred in many pregnancy and active-cancer pathways. Inferior vena cava filters are reserved for acute PE or DVT with a contraindication to anticoagulation, not as routine add-ons. Follow-up must address provoked versus unprovoked classification, duration of therapy, and screening for chronic thromboembolic pulmonary hypertension when breathlessness persists at three months.

Services improve when CTPA reporting templates flag RV strain, when ambulatory PE pathways audit return rates, and when patients receive written advice about bleeding and when to seek help. Over-investigation of low pre-test probability cases remains common; negative D-dimer in unlikely PE should stop the pathway rather than proceed automatically to CT.`,
    questions: [
      {
        id: "read-fc2-1-q1",
        prompt: "High-risk PE is defined here by:",
        options: [
          "Haemodynamic instability",
          "Normal blood pressure always",
          "Negative D-dimer alone",
          "Asymptomatic bradycardia only",
        ],
        correctIndex: 0,
        explanation: "Haemodynamic instability defines high-risk PE.",
      },
      {
        id: "read-fc2-1-q2",
        prompt: "Normotensive risk stratification may use:",
        options: [
          "PESI/sPESI with RV strain markers and troponin/BNP",
          "Hair colour",
          "Only shoe size",
          "Astrology",
        ],
        correctIndex: 0,
        explanation: "Combine PESI/sPESI with RV strain markers and troponin or BNP.",
      },
      {
        id: "read-fc2-1-q3",
        prompt: "Intermediate–high risk patients often need:",
        options: [
          "Closer monitoring on a higher-acuity ward",
          "Immediate discharge without review",
          "No anticoagulation ever",
          "Routine IVC filter for all",
        ],
        correctIndex: 0,
        explanation: "They warrant closer monitoring, often on a higher-acuity ward.",
      },
      {
        id: "read-fc2-1-q4",
        prompt: "DOACs are described as first-line for:",
        options: ["Most patients", "Nobody", "Only neonates", "Only after lifelong warfarin failure"],
        correctIndex: 0,
        explanation: "DOACs are first-line for most.",
      },
      {
        id: "read-fc2-1-q5",
        prompt: "LMWH remains preferred in many pathways for:",
        options: ["Pregnancy and active cancer", "All migraine patients", "Uncomplicated eczema", "Dental scaling only"],
        correctIndex: 0,
        explanation: "LMWH remains preferred in many pregnancy and active-cancer pathways.",
      },
      {
        id: "read-fc2-1-q6",
        prompt: "IVC filters should be reserved for:",
        options: [
          "Acute PE/DVT with contraindication to anticoagulation",
          "Every low-risk PE",
          "Negative CTPA reassurance",
          "Routine travel prophylaxis",
        ],
        correctIndex: 0,
        explanation: "Reserved for acute PE or DVT with contraindication to anticoagulation.",
      },
      {
        id: "read-fc2-1-q7",
        prompt: "Persistent breathlessness at three months should prompt consideration of:",
        options: [
          "Chronic thromboembolic pulmonary hypertension screening",
          "Ignoring symptoms",
          "Stopping all follow-up forever",
          "Mandatory pneumonectomy",
        ],
        correctIndex: 0,
        explanation: "Screen for CTEPH when breathlessness persists at three months.",
      },
      {
        id: "read-fc2-1-q8",
        prompt: "In unlikely PE with negative D-dimer, the pathway should:",
        options: [
          "Stop rather than proceed automatically to CT",
          "Always perform CTPA",
          "Start thrombolysis",
          "Insert an IVC filter",
        ],
        correctIndex: 0,
        explanation: "Negative D-dimer in unlikely PE should stop the pathway.",
      },
    ],
  },
  {
    id: "read-fc2-2",
    part: "C",
    title: "Article: safer opioid prescribing after discharge",
    specialty: "Acute medicine",
    timeLimitSec: 1200,
    text: `Hospital teams increasingly recognise that discharge opioid prescriptions shape long-term risk. Patients who leave with two weeks of strong opioids after uncomplicated soft-tissue injury are more likely to still be using opioids at ninety days than those given a short, tapering supply paired with non-opioid analgesia. The clinical task is not to deny analgesia but to match potency and duration to expected recovery.

Before prescribing, document baseline pain scores, previous substance use, renal and hepatic function, and concomitant sedatives. Prefer immediate-release preparations for acute pain; avoid starting modified-release opioids for acute postsurgical pain unless specialist advice supports it. Co-prescribe laxatives routinely and discuss driving, falls and overdose risk, including the danger of mixing with alcohol or benzodiazepines.

At handover to primary care, state the intended stop date, who will review, and non-pharmacological measures already trialled. Where dependence risk is high, involve the acute pain or addiction liaison team before discharge. Naloxone supply and training may be appropriate for selected patients on high-dose regimens.

Audit indicators that change behaviour include proportion of discharges with opioids beyond seven days without specialist review, rates of co-prescription with benzodiazepines, and patient-reported understanding of taper plans. Culture matters: wards that treat opioid stewardship as part of good medicine, rather than a purely regulatory burden, sustain improvements. Clear, compassionate conversations reduce both undertreated pain and avoidable long-term exposure.`,
    questions: [
      {
        id: "read-fc2-2-q1",
        prompt: "Longer strong-opioid discharge supplies after soft-tissue injury are linked to:",
        options: [
          "Higher likelihood of opioid use at ninety days",
          "Guaranteed pain-free recovery",
          "No long-term risk",
          "Lower falls risk automatically",
        ],
        correctIndex: 0,
        explanation: "More likely still using opioids at ninety days than short tapering supply.",
      },
      {
        id: "read-fc2-2-q2",
        prompt: "For acute pain, the article prefers:",
        options: [
          "Immediate-release preparations",
          "Starting modified-release opioids routinely",
          "No analgesia documentation",
          "Only herbal remedies",
        ],
        correctIndex: 0,
        explanation: "Prefer immediate-release preparations for acute pain.",
      },
      {
        id: "read-fc2-2-q3",
        prompt: "Laxatives should be:",
        options: ["Co-prescribed routinely", "Never used", "Reserved for year-long therapy only", "Hidden from the patient"],
        correctIndex: 0,
        explanation: "Co-prescribe laxatives routinely.",
      },
      {
        id: "read-fc2-2-q4",
        prompt: "Mixing opioids with alcohol or benzodiazepines is highlighted as:",
        options: ["A danger / overdose risk", "Recommended synergy", "Required by protocol", "Irrelevant"],
        correctIndex: 0,
        explanation: "Discuss danger of mixing with alcohol or benzodiazepines.",
      },
      {
        id: "read-fc2-2-q5",
        prompt: "Handover to primary care should state:",
        options: [
          "Intended stop date and who will review",
          "Only the brand logo",
          "No taper plan",
          "Lifelong escalation advice only",
        ],
        correctIndex: 0,
        explanation: "State intended stop date, who will review, and non-drug measures.",
      },
      {
        id: "read-fc2-2-q6",
        prompt: "When dependence risk is high, involve:",
        options: [
          "Acute pain or addiction liaison before discharge",
          "No one",
          "Only marketing teams",
          "Mandatory dental extraction",
        ],
        correctIndex: 0,
        explanation: "Involve acute pain or addiction liaison team before discharge.",
      },
      {
        id: "read-fc2-2-q7",
        prompt: "An audit indicator mentioned is:",
        options: [
          "Discharges with opioids beyond seven days without specialist review",
          "Cafeteria menu scores",
          "Number of pillows issued",
          "Car-park occupancy",
        ],
        correctIndex: 0,
        explanation: "Proportion of discharges with opioids beyond seven days without specialist review.",
      },
      {
        id: "read-fc2-2-q8",
        prompt: "Sustained improvement is linked to treating stewardship as:",
        options: [
          "Part of good medicine rather than purely regulatory burden",
          "Optional paperwork only",
          "A reason to withhold all analgesia forever",
          "Irrelevant culture",
        ],
        correctIndex: 0,
        explanation: "Wards that treat opioid stewardship as part of good medicine sustain improvements.",
      },
    ],
  },
];
