import type { WritingCase } from "@/domain/types";

const rubric = (
  purpose: string,
  content: string,
): WritingCase["rubric"] => [
  { id: "r1", criterion: "Purpose", description: purpose },
  { id: "r2", criterion: "Content", description: content },
  { id: "r3", criterion: "Conciseness & clarity", description: "Near word target; clear sentences." },
  { id: "r4", criterion: "Genre & style", description: "Professional letter conventions." },
  { id: "r5", criterion: "Organisation", description: "Logical clinical flow." },
  { id: "r6", criterion: "Language", description: "Accurate grammar and vocabulary." },
];

/** Second content bank — original OET-style letters (not from official materials). */
export const WRITING_CASES_BANK2: WritingCase[] = [
  {
    id: "writ-6",
    title: "Discharge: community-acquired pneumonia",
    specialty: "Respiratory",
    taskType: "discharge",
    timeLimitSec: 2400,
    wordTarget: { min: 180, max: 200 },
    task: "Write a discharge letter to the GP summarising admission, treatment and follow-up.",
    caseNotes: `Patient: Helen Crowe, 67 F
Admission: 5 days CAP; CURB-65 = 2 on arrival
CXR: RLL consolidation
Cultures: sputum grew S. pneumoniae sensitive to amoxicillin
Rx in hospital: IV benzylpenicillin → oral amoxicillin
Discharged on: amoxicillin 500 mg TDS × 5 further days
O2 sat air 96%; mobilising independently
Follow-up: GP review in 1 week; repeat CXR in 6 weeks
NKDA; ex-smoker 20 pack-years`,
    sampleLetter: `Dr A. Mensah
Riverside Medical Centre

Re: Helen Crowe, 67 years

Dear Doctor,

Thank you for your ongoing care of Mrs Helen Crowe, who was discharged today after five days in hospital with community-acquired pneumonia. On admission her CURB-65 score was 2 and chest X-ray showed right lower lobe consolidation. Sputum grew Streptococcus pneumoniae sensitive to amoxicillin.

She completed intravenous benzylpenicillin then stepped down to oral amoxicillin and is discharged on amoxicillin 500 mg three times daily for a further five days. Oxygen saturation is 96% on air and she mobilises independently. She is an ex-smoker with a 20 pack-year history and has no drug allergies.

Please review her in one week and arrange a repeat chest X-ray in six weeks. Please contact us if you have concerns.

Yours sincerely,
Respiratory Team`,
    rubric: rubric("Clear GP discharge summary.", "Diagnosis, organism, antibiotics, follow-up imaging."),
  },
  {
    id: "writ-7",
    title: "Referral: suspected IBD flare",
    specialty: "Gastro",
    taskType: "referral",
    timeLimitSec: 2400,
    wordTarget: { min: 180, max: 200 },
    task: "Refer urgently to gastroenterology for suspected ulcerative colitis flare.",
    caseNotes: `Patient: Marco Silva, 29 M
GP: Dr L. Chen
Known UC (diagnosed 2021); on mesalazine 2.4 g daily
Now: bloody diarrhoea 8×/day × 10 days; urgency; nocturnal stools
Weight loss 3 kg; mild lower abdominal tenderness
Bloods: CRP 48; Hb 118; alb 34
Stool: C. diff negative; cultures pending
No fever today; soft abdomen
Request: urgent outpatient / hot clinic review; advise on steroids`,
    sampleLetter: `Dr Patel
Gastroenterology

Dear Doctor,

I am writing to refer Mr Marco Silva, a 29-year-old man with known ulcerative colitis, who appears to be in flare. Over the past ten days he has had bloody diarrhoea up to eight times daily with urgency and nocturnal stools, and has lost three kilograms. He remains on mesalazine 2.4 g daily.

Examination today showed mild lower abdominal tenderness without peritonism. CRP is 48, haemoglobin 118 g/L and albumin 34. Clostridioides difficile toxin is negative; stool cultures are pending. He is afebrile.

I would be grateful for urgent clinic review and advice regarding corticosteroid therapy. Please contact me if further information is required.

Yours sincerely,
Dr L. Chen`,
    rubric: rubric("Urgent gastro referral.", "UC history, stool frequency, bloods, ask."),
  },
  {
    id: "writ-8",
    title: "Transfer: diabetic ketoacidosis",
    specialty: "Endocrine",
    taskType: "transfer",
    timeLimitSec: 2400,
    wordTarget: { min: 180, max: 200 },
    task: "Transfer to the medical HDU / endocrine team for ongoing DKA management.",
    caseNotes: `Patient: Aisha Rahman, 22 F
Type 1 DM; insulin pump — stopped working yesterday
ED: vomiting, Kussmaul breathing; glucose 28 mmol/L; ketones 5.2; pH 7.12
Started: fixed-rate IV insulin infusion; 0.9% saline; K+ replacement per protocol
Current K+ 3.6; GCS 15
Request: HDU bed for DKA pathway; endocrine review; pump troubleshooting later`,
    sampleLetter: `Medical HDU / Endocrine Registrar

Re: Aisha Rahman, 22 years

Dear Colleague,

I am writing to transfer Miss Aisha Rahman from the Emergency Department with diabetic ketoacidosis. She has type 1 diabetes and reports her insulin pump failed yesterday. She presented with vomiting and Kussmaul breathing. Capillary glucose was 28 mmol/L, blood ketones 5.2 mmol/L and venous pH 7.12.

We have commenced a fixed-rate intravenous insulin infusion, 0.9% saline and potassium replacement according to protocol. Current potassium is 3.6 mmol/L and GCS remains 15. I would be grateful for an HDU bed and endocrine review; pump troubleshooting can follow once she is stable.

Yours sincerely,
ED Team`,
    rubric: rubric("Clear DKA transfer.", "Pump failure, labs, treatment started, ask."),
  },
  {
    id: "writ-9",
    title: "Advice: warfarin education after PE",
    specialty: "Haematology",
    taskType: "advice",
    timeLimitSec: 2400,
    wordTarget: { min: 180, max: 200 },
    task: "Write to the patient explaining warfarin after provoked PE (as treating doctor).",
    caseNotes: `Patient: Tom Briggs, 54 M
Diagnosis: provoked PE after long-haul flight
Plan: warfarin target INR 2–3 for 3 months; bridge with LMWH until INR therapeutic × 2
Advice: diet consistency (vitamin K), alcohol limits, drug interactions, bleeding red flags
Clinic: anticoagulation clinic in 5 days; GP INR thereafter
Avoid contact sports; seek help if haemoptysis / melena / severe headache`,
    sampleLetter: `Dear Mr Briggs,

I am writing to confirm your treatment after a blood clot in the lung related to a long flight. You will take warfarin aiming for an INR between 2 and 3 for three months. Low-molecular-weight heparin will continue until your INR has been in range on two checks.

Please keep your vitamin K intake fairly consistent, limit alcohol, and check with a pharmacist before starting new medicines, including over-the-counter products. Avoid contact sports. Seek urgent help for coughing blood, black stools, uncontrolled bleeding, or a sudden severe headache.

You have an anticoagulation clinic appointment in five days; your GP will then manage INR monitoring. Please contact us if you have questions.

Yours sincerely,
Haematology Team`,
    rubric: rubric("Patient advice letter.", "INR target, bridging, lifestyle, red flags."),
  },
  {
    id: "writ-10",
    title: "Referral: two-week wait breast clinic",
    specialty: "GP",
    taskType: "referral",
    timeLimitSec: 2400,
    wordTarget: { min: 180, max: 200 },
    task: "Refer under the two-week wait pathway for a suspicious breast lump.",
    caseNotes: `Patient: Naomi Okoro, 48 F
Finding: 2 cm firm irregular lump UOQ left breast × 3 weeks
Skin: mild tethering; no nipple discharge; no lymphadenopathy felt
FH: maternal aunt breast Ca at 55
Mammogram/USS: not yet done
Periods: regular; HRT none
Request: 2WW breast clinic`,
    sampleLetter: `Breast Clinic — Two-Week Wait

Dear Colleague,

I am referring Mrs Naomi Okoro, a 48-year-old woman, under the two-week wait pathway with a suspicious left breast lump. She has noticed a firm, irregular 2 cm mass in the upper outer quadrant for three weeks. There is mild skin tethering. There is no nipple discharge and I could not feel axillary lymphadenopathy.

She has a maternal aunt with breast cancer at age 55. She is not on HRT and has regular periods. Imaging has not yet been arranged. I would be grateful for urgent assessment.

Yours sincerely,
GP`,
    rubric: rubric("2WW referral purpose.", "Lump features, FH, clear urgency."),
  },
  {
    id: "writ-11",
    title: "Discharge: post-partum hypertension",
    specialty: "Obstetrics",
    taskType: "discharge",
    timeLimitSec: 2400,
    wordTarget: { min: 180, max: 200 },
    task: "Discharge summary to GP after post-partum hypertension management.",
    caseNotes: `Patient: Sofia Almeida, 31 F
Parity: P1; SVD day 2
Issue: BP 158/98; headaches; no visual change; reflexes normal
Labs: normal platelets, ALT, creatinine; urine PCR mildly raised
Rx: labetalol 200 mg BD started; BP now 132/84
Advice: BP check day 5 and day 10; urgent return if headache/visual symptoms
Breastfeeding: labetalol compatible`,
    sampleLetter: `Dr Kim
Greenfield Surgery

Re: Sofia Almeida, 31 years

Dear Doctor,

Mrs Sofia Almeida was discharged on day two after a spontaneous vaginal delivery. She developed post-partum hypertension with blood pressure 158/98 mmHg and headache. There were no visual symptoms and reflexes were normal. Platelets, ALT and creatinine were normal; urine protein-creatinine ratio was mildly raised.

We commenced labetalol 200 mg twice daily, which is compatible with breastfeeding. Her blood pressure is now 132/84 mmHg. Please check her blood pressure on day five and day ten, and arrange urgent review if headache or visual symptoms recur.

Yours sincerely,
Obstetric Team`,
    rubric: rubric("GP discharge after birth.", "BP, labs, labetalol, safety-net."),
  },
];
