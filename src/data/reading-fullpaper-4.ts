import type { ReadingPassage } from "@/domain/types";

export const READING_PASSAGES_FULLPAPER_4: ReadingPassage[] = [
  {
    id: "read-fa4-1",
    part: "A",
    title: "Expeditious: suspected upper GI bleed pack",
    specialty: "Gastroenterology",
    timeLimitSec: 900,
    text: `DOCUMENT 1 — MAU clerking (suspected upper GI bleed)
Mr Terrence Oakley, 68, brought in by ambulance after two episodes of haematemesis at home, described by his wife as "bright red with clots." He also passed one loose black stool this morning. Background: osteoarthritis, ischaemic heart disease with a coronary stent inserted 18 months ago, hypertension. On arrival 09:40: pale, HR 122, BP 88/54, RR 24, SpO2 96% air, GCS 15. Abdomen soft, non-tender. PR reveals melaena. Plan: two large-bore cannulae, urgent bloods and crossmatch, IV fluids, discuss with gastroenterology for endoscopy today.

DOCUMENT 2 — Admission bloods
Hb 76 g/L, MCV 82 fl, platelets 198, WCC 9.1. Urea 14.6 mmol/L, creatinine 88 µmol/L, Na 138, K 4.2. INR 1.0, APTT 29 seconds. Group & save sent; crossmatch of 4 units requested. Glasgow-Blatchford score calculated at 14 on admission bloods and observations. Repeat Hb after first unit: 84 g/L.

DOCUMENT 3 — Drug and fluid chart
Aspirin 75 mg daily and clopidogrel 75 mg daily (dual antiplatelet since stent) — both held on admission pending cardiology advice. IV pantoprazole 80 mg bolus then infusion 8 mg/hour started 10:05. Hartmann's solution 500 ml stat, then 1 unit packed red cells transfused 11:15–12:45. Paracetamol 1 g QDS for analgesia. NKDA. Nil by mouth from admission.

DOCUMENT 4 — Trust upper GI bleeding pathway (endoscopy unit)
All patients with suspected acute upper GI bleeding require Glasgow-Blatchford scoring on admission; a score of 0 may allow safe outpatient management, whereas any score above 0 warrants admission. Endoscopy should occur within 24 hours of admission for all patients, and immediately after resuscitation for those who remain haemodynamically unstable. Restrictive transfusion strategy: transfuse to a target haemoglobin of 70–90 g/L unless active massive bleeding or significant cardiovascular disease dictates a higher threshold. Antiplatelet and anticoagulant resumption should be discussed with cardiology/haematology once haemostasis is confirmed, generally within 3–5 days if bleeding risk allows.`,
    questions: [
      {
        id: "read-fa4-1-q1",
        prompt: "Which document records the plan for two large-bore cannulae?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 0,
        explanation: "Two large-bore cannulae are part of the plan in the MAU clerking (Document 1).",
      },
      {
        id: "read-fa4-1-q2",
        prompt: "Which document lists the INR result?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 1,
        explanation: "INR 1.0 is in the admission bloods (Document 2).",
      },
      {
        id: "read-fa4-1-q3",
        prompt: "Where is the pantoprazole infusion rate recorded?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 2,
        explanation: "Infusion 8 mg/hour appears on the drug and fluid chart (Document 3).",
      },
      {
        id: "read-fa4-1-q4",
        prompt: "Which document states the restrictive transfusion target?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 3,
        explanation: "Target haemoglobin 70–90 g/L is in the pathway (Document 4).",
      },
      {
        id: "read-fa4-1-q5",
        prompt: "Haemoglobin on admission:",
        answer: "76 g/L",
        acceptedAnswers: ["76 g/L", "76", "76g/L"],
        explanation: "Hb 76 g/L in Document 2.",
      },
      {
        id: "read-fa4-1-q6",
        prompt: "Which document reports the repeat haemoglobin after the first unit?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 1,
        explanation: "Repeat Hb 84 g/L is in Document 2.",
      },
      {
        id: "read-fa4-1-q7",
        prompt: "Time of arrival:",
        answer: "09:40",
        acceptedAnswers: ["09:40", "9:40", "09.40"],
        explanation: "On arrival 09:40 (Document 1).",
      },
      {
        id: "read-fa4-1-q8",
        prompt: "Which document states endoscopy should occur within 24 hours for all patients?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 3,
        explanation: "Endoscopy within 24 hours — Document 4.",
      },
      {
        id: "read-fa4-1-q9",
        prompt: "Heart rate on arrival:",
        answer: "122",
        acceptedAnswers: ["122", "122 bpm"],
        explanation: "HR 122 in Document 1.",
      },
      {
        id: "read-fa4-1-q10",
        prompt: "Blood pressure on arrival:",
        answer: "88/54",
        acceptedAnswers: ["88/54", "88 over 54"],
        explanation: "BP 88/54 in Document 1.",
      },
      {
        id: "read-fa4-1-q11",
        prompt: "Which document records that aspirin and clopidogrel were held?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 2,
        explanation: "Both antiplatelets held on admission — Document 3.",
      },
      {
        id: "read-fa4-1-q12",
        prompt: "Glasgow-Blatchford score:",
        answer: "14",
        acceptedAnswers: ["14", "14/23"],
        explanation: "Score calculated at 14 (Document 2).",
      },
      {
        id: "read-fa4-1-q13",
        prompt: "Document number stating antiplatelet resumption should be discussed with cardiology/haematology:",
        answer: "4",
        acceptedAnswers: ["4", "Document 4", "document 4"],
        explanation: "Resumption timing and referral appear in Document 4.",
      },
      {
        id: "read-fa4-1-q14",
        prompt: "Which document notes that PR examination reveals melaena?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 0,
        explanation: "PR reveals melaena — Document 1.",
      },
      {
        id: "read-fa4-1-q15",
        prompt: "Number of units crossmatched:",
        answer: "4 units",
        acceptedAnswers: ["4 units", "4", "four units"],
        explanation: "Crossmatch of 4 units requested (Document 2).",
      },
      {
        id: "read-fa4-1-q16",
        prompt: "Pantoprazole bolus dose:",
        answer: "80 mg",
        acceptedAnswers: ["80 mg", "80mg"],
        explanation: "IV pantoprazole 80 mg bolus (Document 3).",
      },
      {
        id: "read-fa4-1-q17",
        prompt: "Which document specifies the 70–90 g/L transfusion target?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 3,
        explanation: "Restrictive transfusion strategy — Document 4.",
      },
      {
        id: "read-fa4-1-q18",
        prompt: "How long ago was the coronary stent inserted?",
        answer: "18 months ago",
        acceptedAnswers: ["18 months ago", "18 months"],
        explanation: "Stent inserted 18 months ago (Document 1).",
      },
      {
        id: "read-fa4-1-q19",
        prompt: "Which document records the urea result?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 1,
        explanation: "Urea 14.6 mmol/L in Document 2.",
      },
      {
        id: "read-fa4-1-q20",
        prompt: "Stat fluid bolus given on admission:",
        answer: "Hartmann's 500 ml",
        acceptedAnswers: ["Hartmann's 500 ml", "500 ml Hartmann's", "Hartmann's solution 500 ml"],
        explanation: "Hartmann's solution 500 ml stat (Document 3).",
      },
    ],
  },
  {
    id: "read-fb4-1",
    part: "B",
    title: "Guideline: PPI co-prescription with NSAIDs",
    specialty: "Gastroenterology",
    timeLimitSec: 180,
    text: `NSAID gastroprotection
Patients requiring ongoing NSAID therapy who are at increased risk of peptic ulceration — age over 65, history of ulcer disease, or concurrent aspirin, corticosteroids or anticoagulants — should be co-prescribed a proton pump inhibitor for the duration of NSAID use. Where possible, switch to a lower-risk NSAID or use the lowest effective dose for the shortest duration. Review the ongoing need for both the NSAID and the gastroprotection at each medication review.`,
    questions: [
      {
        id: "read-fb4-1-q1",
        prompt: "Patients at increased ulcer risk on NSAIDs should be co-prescribed:",
        options: ["A proton pump inhibitor", "A second NSAID", "No additional medicine", "An antihistamine"],
        correctIndex: 0,
        explanation: "Co-prescribe a proton pump inhibitor for the duration of NSAID use.",
      },
    ],
  },
  {
    id: "read-fb4-2",
    part: "B",
    title: "Policy: bedside blood transfusion checks",
    specialty: "Transfusion practice",
    timeLimitSec: 180,
    text: `Safe transfusion practice
Immediately before administering any blood component, two members of staff must independently check the patient's identity against the compatibility label and prescription at the bedside, using at least three identifiers. Vital signs must be recorded before transfusion, at 15 minutes, and at completion. Stop the transfusion immediately and inform medical staff if the patient develops fever, rigors, breathlessness or urticaria.`,
    questions: [
      {
        id: "read-fb4-2-q1",
        prompt: "Before administering blood, staff must check patient identity using:",
        options: [
          "At least three identifiers at the bedside",
          "A single verbal name check only",
          "The porter's delivery note alone",
          "No formal check when time-critical",
        ],
        correctIndex: 0,
        explanation: "Two staff independently check identity using at least three identifiers.",
      },
    ],
  },
  {
    id: "read-fb4-3",
    part: "B",
    title: "Alert: red flags for two-week-wait referral in iron deficiency anaemia",
    specialty: "Gastroenterology",
    timeLimitSec: 180,
    text: `Iron deficiency anaemia referral criteria
Any adult with unexplained iron deficiency anaemia should be referred urgently for investigation of the gastrointestinal tract, particularly men of any age and postmenopausal women, unless a clear non-gastrointestinal cause is confirmed. Do not attribute iron deficiency to menstrual loss in postmenopausal women. Ferrous sulfate replacement should not delay referral or endoscopic investigation.`,
    questions: [
      {
        id: "read-fb4-3-q1",
        prompt: "Iron deficiency anaemia should NOT be attributed to menstrual loss in:",
        options: ["Postmenopausal women", "Men under 40", "Pregnant women", "Children under 5"],
        correctIndex: 0,
        explanation: "Do not attribute iron deficiency to menstrual loss in postmenopausal women.",
      },
    ],
  },
  {
    id: "read-fb4-4",
    part: "B",
    title: "Protocol: pre-endoscopy management of suspected variceal bleeding",
    specialty: "Hepatology",
    timeLimitSec: 180,
    text: `Suspected variceal haemorrhage — pre-endoscopy bundle
In patients with known or suspected liver disease presenting with haematemesis, start a vasoactive drug such as terlipressin as soon as variceal bleeding is suspected, without waiting for endoscopic confirmation. Give prophylactic antibiotics on admission. Correct severe coagulopathy in discussion with haematology, but do not delay vasoactive therapy or antibiotics while awaiting results.`,
    questions: [
      {
        id: "read-fb4-4-q1",
        prompt: "Terlipressin should be started:",
        options: [
          "As soon as variceal bleeding is suspected, before endoscopic confirmation",
          "Only after endoscopy confirms varices",
          "Only if antibiotics are declined",
          "Two days after admission",
        ],
        correctIndex: 0,
        explanation: "Start terlipressin as soon as variceal bleeding is suspected.",
      },
    ],
  },
  {
    id: "read-fb4-5",
    part: "B",
    title: "Memo: safe discharge after low-risk upper GI bleed assessment",
    specialty: "Acute medicine",
    timeLimitSec: 180,
    text: `Low-risk upper GI bleed pathway
Patients presenting with suspected upper gastrointestinal bleeding who have a Glasgow-Blatchford score of 0, are haemodynamically stable, and have no concerning history may be considered for outpatient management with early endoscopy rather than admission. Provide clear written safety-netting advice on melaena, haematemesis and dizziness, and confirm a reliable means of return to hospital if symptoms recur.`,
    questions: [
      {
        id: "read-fb4-5-q1",
        prompt: "Outpatient management may be considered for patients with a Glasgow-Blatchford score of:",
        options: ["0", "8", "12", "Any score above 6"],
        correctIndex: 0,
        explanation: "A score of 0 may allow outpatient management.",
      },
    ],
  },
  {
    id: "read-fb4-6",
    part: "B",
    title: "Briefing: anticoagulant reversal in major gastrointestinal bleeding",
    specialty: "Haematology",
    timeLimitSec: 180,
    text: `Reversal of anticoagulation in major GI bleeding
For patients on warfarin with major gastrointestinal bleeding, give intravenous vitamin K and prothrombin complex concentrate without waiting for a repeat INR if bleeding is life-threatening. For direct oral anticoagulants, check the timing of the last dose and renal function, and seek haematology advice regarding specific reversal agents. Do not withhold resuscitation while arranging reversal.`,
    questions: [
      {
        id: "read-fb4-6-q1",
        prompt: "In life-threatening bleeding on warfarin, prothrombin complex concentrate should be given:",
        options: [
          "Without waiting for a repeat INR",
          "Only after INR returns to normal",
          "Only once vitamin K has been given for 24 hours",
          "Never in combination with vitamin K",
        ],
        correctIndex: 0,
        explanation: "Give PCC without waiting for a repeat INR if bleeding is life-threatening.",
      },
    ],
  },
  {
    id: "read-fc4-1",
    part: "C",
    title: "Article: investigating iron-deficiency anaemia — from primary care to endoscopy",
    specialty: "Gastroenterology",
    timeLimitSec: 600,
    text: `Iron deficiency anaemia is common and, in adults without an obvious cause, should always prompt consideration of an underlying gastrointestinal source, including occult malignancy. Full blood count, ferritin and coeliac serology are appropriate first investigations; a normal ferritin does not exclude iron deficiency in the presence of concurrent inflammation, since ferritin behaves as an acute-phase reactant.

History should specifically ask about weight loss, change in bowel habit, dysphagia, use of NSAIDs or aspirin, and family history of colorectal cancer. Examination may be entirely normal even with significant pathology, so a reassuring abdominal exam should not defer appropriate referral. Dietary iron deficiency is a diagnosis of exclusion in adults and should not be assumed without investigation.

Bidirectional endoscopy — gastroscopy and colonoscopy — is generally recommended for men of any age and postmenopausal women with confirmed iron deficiency anaemia, unless there is a clear alternative explanation. Premenopausal women require a more individualised approach, balancing menstrual history against other risk factors; persistent or recurrent iron deficiency despite adequate replacement still warrants investigation.

Oral ferrous sulfate or ferrous fumarate remains first-line replacement, with intravenous iron reserved for intolerance, malabsorption or when rapid correction is needed. Replacement therapy should never delay definitive investigation of the gastrointestinal tract. Services that fast-track two-week-wait referrals directly to combined diagnostic endoscopy lists reduce time to diagnosis for colorectal and gastric cancer.`,
    questions: [
      {
        id: "read-fc4-1-q1",
        prompt: "Unexplained iron deficiency anaemia in adults should prompt consideration of:",
        options: [
          "An underlying gastrointestinal source, including malignancy",
          "Only dietary causes",
          "No further investigation",
          "Immediate blood transfusion",
        ],
        correctIndex: 0,
        explanation: "Should always prompt consideration of an underlying gastrointestinal source, including malignancy.",
      },
      {
        id: "read-fc4-1-q2",
        prompt: "A normal ferritin:",
        options: [
          "Does not exclude iron deficiency during concurrent inflammation",
          "Always excludes iron deficiency",
          "Confirms a dietary cause",
          "Means investigation can stop",
        ],
        correctIndex: 0,
        explanation: "Ferritin is an acute-phase reactant, so a normal result does not exclude iron deficiency with inflammation.",
      },
      {
        id: "read-fc4-1-q3",
        prompt: "History should specifically ask about:",
        options: [
          "Weight loss, bowel habit change and dysphagia",
          "Only sleep pattern",
          "Favourite foods alone",
          "Recent haircuts",
        ],
        correctIndex: 0,
        explanation: "Ask about weight loss, change in bowel habit, dysphagia, NSAID/aspirin use and family history.",
      },
      {
        id: "read-fc4-1-q4",
        prompt: "A reassuring abdominal examination:",
        options: [
          "Should not defer appropriate referral",
          "Excludes all pathology",
          "Confirms dietary deficiency",
          "Means endoscopy is unnecessary",
        ],
        correctIndex: 0,
        explanation: "Examination may be entirely normal even with significant pathology.",
      },
      {
        id: "read-fc4-1-q5",
        prompt: "Bidirectional endoscopy is generally recommended for:",
        options: [
          "Men of any age and postmenopausal women",
          "Only children",
          "Only pregnant women",
          "Nobody with a normal ferritin",
        ],
        correctIndex: 0,
        explanation: "Recommended for men of any age and postmenopausal women unless a clear alternative cause exists.",
      },
      {
        id: "read-fc4-1-q6",
        prompt: "Premenopausal women require:",
        options: [
          "A more individualised approach balancing menstrual history and risk factors",
          "Automatic exclusion from referral",
          "Mandatory colonoscopy regardless of history",
          "No blood tests",
        ],
        correctIndex: 0,
        explanation: "A more individualised approach balancing menstrual history against other risk factors.",
      },
      {
        id: "read-fc4-1-q7",
        prompt: "First-line iron replacement is:",
        options: [
          "Oral ferrous sulfate or ferrous fumarate",
          "Intravenous iron for everyone",
          "Dietary advice alone",
          "Blood transfusion routinely",
        ],
        correctIndex: 0,
        explanation: "Oral ferrous sulfate or ferrous fumarate remains first-line replacement.",
      },
      {
        id: "read-fc4-1-q8",
        prompt: "Fast-track referral to combined diagnostic endoscopy lists:",
        options: [
          "Reduces time to diagnosis for colorectal and gastric cancer",
          "Delays diagnosis deliberately",
          "Is only for research purposes",
          "Replaces the need for any blood tests",
        ],
        correctIndex: 0,
        explanation: "Fast-tracking reduces time to diagnosis for colorectal and gastric cancer.",
      },
    ],
  },
  {
    id: "read-fc4-2",
    part: "C",
    title: "Article: recognising and escalating acute severe ulcerative colitis",
    specialty: "Gastroenterology",
    timeLimitSec: 600,
    text: `Acute severe ulcerative colitis is a medical emergency that carries a real risk of colonic perforation and death if escalation is delayed. The Truelove and Witts criteria remain a practical bedside tool: six or more bloody stools per day plus at least one marker of systemic upset — tachycardia, fever, anaemia or a raised inflammatory marker — define severe disease requiring hospital admission.

Baseline assessment includes a stool chart, daily bloods (full blood count, CRP, renal and liver function), stool culture and Clostridioides difficile testing to exclude superadded infection, and an abdominal X-ray to look for colonic dilatation. Flexible sigmoidoscopy with biopsy, performed cautiously without full bowel preparation, helps confirm the diagnosis and exclude cytomegalovirus colitis.

Intravenous corticosteroids are first-line treatment, with response reviewed formally at day three using objective criteria such as stool frequency and CRP. Patients not responding by day three should be discussed promptly with the colorectal surgical team and considered for rescue therapy — typically infliximab or ciclosporin — rather than continuing steroids alone, since delay increases the risk of emergency colectomy and complications.

Venous thromboembolism prophylaxis is required despite rectal bleeding, since the prothrombotic risk of active colitis outweighs the bleeding risk in most cases. Nutrition should be optimised, and opioids and anti-motility agents avoided because they increase the risk of toxic megacolon. Clear escalation plans, agreed jointly by gastroenterology and surgery on admission, shorten time to rescue therapy or surgery when needed.`,
    questions: [
      {
        id: "read-fc4-2-q1",
        prompt: "Truelove and Witts criteria for severe disease include:",
        options: [
          "Six or more bloody stools per day plus a marker of systemic upset",
          "Two soft stools daily",
          "Normal CRP and no tachycardia",
          "Absence of bleeding",
        ],
        correctIndex: 0,
        explanation: "Six or more bloody stools per day plus at least one marker of systemic upset.",
      },
      {
        id: "read-fc4-2-q2",
        prompt: "Baseline assessment should include testing for:",
        options: [
          "Clostridioides difficile to exclude superadded infection",
          "Only urine dipstick",
          "Skin biopsy",
          "Hearing test",
        ],
        correctIndex: 0,
        explanation: "Stool culture and C. difficile testing exclude superadded infection.",
      },
      {
        id: "read-fc4-2-q3",
        prompt: "Abdominal X-ray is performed to look for:",
        options: ["Colonic dilatation", "Renal stones only", "Lung nodules", "Fractures"],
        correctIndex: 0,
        explanation: "Abdominal X-ray looks for colonic dilatation.",
      },
      {
        id: "read-fc4-2-q4",
        prompt: "Flexible sigmoidoscopy in this setting helps:",
        options: [
          "Confirm diagnosis and exclude cytomegalovirus colitis",
          "Replace all blood tests",
          "Treat perforation directly",
          "Avoid the need for steroids",
        ],
        correctIndex: 0,
        explanation: "Helps confirm the diagnosis and exclude cytomegalovirus colitis.",
      },
      {
        id: "read-fc4-2-q5",
        prompt: "Response to IV corticosteroids should be reviewed:",
        options: [
          "Formally at day three using objective criteria",
          "Only after two weeks",
          "Never — treatment continues indefinitely",
          "Only if the patient requests it",
        ],
        correctIndex: 0,
        explanation: "Response is reviewed formally at day three using objective criteria.",
      },
      {
        id: "read-fc4-2-q6",
        prompt: "Non-responders at day three should be:",
        options: [
          "Discussed promptly with colorectal surgery and considered for rescue therapy",
          "Discharged home immediately",
          "Given only oral steroids",
          "Left without escalation for another week",
        ],
        correctIndex: 0,
        explanation: "Discussed promptly with the surgical team and considered for rescue therapy.",
      },
      {
        id: "read-fc4-2-q7",
        prompt: "VTE prophylaxis in acute severe colitis:",
        options: [
          "Is required despite rectal bleeding",
          "Should always be withheld",
          "Is only for surgical patients",
          "Increases toxic megacolon risk",
        ],
        correctIndex: 0,
        explanation: "Required despite rectal bleeding, since prothrombotic risk outweighs bleeding risk.",
      },
      {
        id: "read-fc4-2-q8",
        prompt: "Opioids and anti-motility agents should be avoided because they:",
        options: [
          "Increase the risk of toxic megacolon",
          "Cure colitis directly",
          "Are required for pain control",
          "Reduce CRP",
        ],
        correctIndex: 0,
        explanation: "They increase the risk of toxic megacolon.",
      },
    ],
  },
];
