import type { ReadingPassage } from "@/domain/types";

export const READING_PASSAGES_FULLPAPER_5: ReadingPassage[] = [
  {
    id: "read-fa5-1",
    part: "A",
    title: "Expeditious: diabetic ketoacidosis admission pack",
    specialty: "Acute medicine",
    timeLimitSec: 900,
    text: `DOCUMENT 1 — ED clerking (suspected DKA)
Miss Sarah Whitfield, 22, known type 1 diabetes for 9 years, brought in by ambulance with a 2-day history of vomiting, abdominal pain and polyuria. Reports missing insulin doses over the preceding two days due to gastroenteritis. Observations on arrival 09:40: temp 37.3°C, HR 122, BP 98/60, RR 30 (deep, sighing pattern), SpO2 99% air, GCS 14 (drowsy). Capillary glucose "HI" (unrecordable), capillary ketones 6.2 mmol/L. NEWS2 8. Plan: commence DKA protocol, HDU liaison if GCS falls, hourly neurological observations.

DOCUMENT 2 — Pathology & fluid balance
Venous blood gas: pH 7.02, bicarbonate 6 mmol/L, base excess −22. Laboratory glucose 42 mmol/L. U&Es: Na 128 mmol/L, K+ 5.9 mmol/L, urea 11.2 mmol/L, creatinine 118 µmol/L. Blood ketones 6.4 mmol/L. WCC 16.8, CRP 34. Fluid balance first 2 hours: 1000 ml sodium chloride 0.9% in, urine output 90 ml via catheter.

DOCUMENT 3 — Medication & treatment chart
Sodium chloride 0.9% 1000 ml over 1 hour from 09:50, then 1000 ml over 2 hours, then 1000 ml over 2 hours (potassium chloride added to bags 2 and 3 once level below 5.5). Fixed-rate intravenous insulin infusion 0.1 unit/kg/hour (patient weight 58 kg = 5.8 units/hour) commenced 10:05. Continue usual long-acting insulin (Lantus 20 units at night). Hourly capillary glucose and ketones. VTE prophylaxis withheld pending review. NKDA.

DOCUMENT 4 — Trust DKA management pathway excerpt
Diagnostic criteria: glucose above 11 mmol/L (or known diabetes), ketones 3 mmol/L or more (or significant ketonuria), and either venous pH below 7.3 or bicarbonate below 15. Give fixed-rate intravenous insulin at 0.1 unit/kg/hour; continue the patient's long-acting insulin analogue unchanged throughout. Add potassium chloride to replacement fluids once level falls below 5.5 mmol/L, provided urine output is adequate. Resolution: ketones below 0.6 mmol/L, venous pH above 7.3, bicarbonate above 18 mmol/L. Involve critical care if GCS falls, pH remains below 7.1, or potassium falls below 3.5 despite replacement. Refer to the diabetes specialist team within 24 hours of admission.`,
    questions: [
      {
        id: "read-fa5-1-q1",
        prompt: "Which document records the GCS score?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 0,
        explanation: "GCS 14 (drowsy) is in the ED clerking (Document 1).",
      },
      {
        id: "read-fa5-1-q2",
        prompt: "Which document lists the CRP result?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 1,
        explanation: "CRP 34 is in Document 2.",
      },
      {
        id: "read-fa5-1-q3",
        prompt: "Where is the insulin infusion rate in units per hour recorded?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 2,
        explanation: "5.8 units/hour is on the treatment chart (Document 3).",
      },
      {
        id: "read-fa5-1-q4",
        prompt: "Which document states the diagnostic bicarbonate threshold?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 3,
        explanation: "Bicarbonate below 15 as a diagnostic criterion — Document 4.",
      },
      {
        id: "read-fa5-1-q5",
        prompt: "Document number recording the duration of type 1 diabetes:",
        answer: "1",
        acceptedAnswers: ["1", "Document 1", "document 1"],
        explanation: "Known type 1 diabetes for 9 years appears in Document 1.",
      },
      {
        id: "read-fa5-1-q6",
        prompt: "Which document records urine output of 90 ml in the first two hours?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 1,
        explanation: "Fluid balance / urine output in Document 2.",
      },
      {
        id: "read-fa5-1-q7",
        prompt: "Where is the continuation of Lantus documented?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 2,
        explanation: "Continue usual long-acting insulin (Lantus) — Document 3.",
      },
      {
        id: "read-fa5-1-q8",
        prompt: "Which document advises involving critical care if pH remains below 7.1?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 3,
        explanation: "Critical care involvement criteria are in the pathway (Document 4).",
      },
      {
        id: "read-fa5-1-q9",
        prompt: "Venous pH on arrival:",
        answer: "7.02",
        acceptedAnswers: ["7.02"],
        explanation: "Venous blood gas pH 7.02 in Document 2.",
      },
      {
        id: "read-fa5-1-q10",
        prompt: "Laboratory glucose result:",
        answer: "42 mmol/L",
        acceptedAnswers: ["42 mmol/L", "42"],
        explanation: "Laboratory glucose 42 mmol/L in Document 2.",
      },
      {
        id: "read-fa5-1-q11",
        prompt: "Volume and duration of the first fluid bag:",
        answer: "1000 ml over 1 hour",
        acceptedAnswers: ["1000 ml over 1 hour", "1 litre over 1 hour", "1000ml over 1 hour"],
        explanation: "Sodium chloride 0.9% 1000 ml over 1 hour in Document 3.",
      },
      {
        id: "read-fa5-1-q12",
        prompt: "Potassium (K+) result on bloods:",
        answer: "5.9 mmol/L",
        acceptedAnswers: ["5.9 mmol/L", "5.9"],
        explanation: "K+ 5.9 mmol/L in Document 2.",
      },
      {
        id: "read-fa5-1-q13",
        prompt: "Document number stating resolution ketones below 0.6:",
        answer: "4",
        acceptedAnswers: ["4", "Document 4", "document 4"],
        explanation: "Resolution criteria including ketones below 0.6 — Document 4.",
      },
      {
        id: "read-fa5-1-q14",
        prompt: "Which document notes capillary ketones of 6.2 on arrival?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 0,
        explanation: "Capillary ketones 6.2 mmol/L — Document 1.",
      },
      {
        id: "read-fa5-1-q15",
        prompt: "Arrival heart rate:",
        answer: "122",
        acceptedAnswers: ["122"],
        explanation: "HR 122 in Document 1.",
      },
      {
        id: "read-fa5-1-q16",
        prompt: "Bicarbonate on venous blood gas:",
        answer: "6 mmol/L",
        acceptedAnswers: ["6 mmol/L", "6"],
        explanation: "Bicarbonate 6 mmol/L in Document 2.",
      },
      {
        id: "read-fa5-1-q17",
        prompt: "Fixed-rate insulin infusion rate:",
        answer: "0.1 unit/kg/hour (5.8 units/hour)",
        acceptedAnswers: [
          "0.1 unit/kg/hour (5.8 units/hour)",
          "0.1 unit/kg/hour",
          "5.8 units/hour",
          "0.1 units per kilogram per hour",
        ],
        explanation: "Fixed-rate intravenous insulin infusion 0.1 unit/kg/hour, 5.8 units/hour (Document 3).",
      },
      {
        id: "read-fa5-1-q18",
        prompt: "Which document states referral to the diabetes specialist team within 24 hours?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 3,
        explanation: "Refer to the diabetes specialist team within 24 hours — Document 4.",
      },
      {
        id: "read-fa5-1-q19",
        prompt: "Time the insulin infusion was commenced:",
        answer: "10:05",
        acceptedAnswers: ["10:05", "10.05"],
        explanation: "Infusion commenced 10:05 in Document 3.",
      },
      {
        id: "read-fa5-1-q20",
        prompt: "Which document records the presenting complaint of vomiting, abdominal pain and polyuria?",
        options: ["Document 1", "Document 2", "Document 3", "Document 4"],
        correctIndex: 0,
        explanation: "2-day history of vomiting, abdominal pain and polyuria — Document 1.",
      },
    ],
  },
  {
    id: "read-fb5-1",
    part: "B",
    title: "Guideline: hypoglycaemia treatment steps",
    specialty: "Acute medicine",
    timeLimitSec: 180,
    text: `Hypoglycaemia — immediate treatment
For a conscious patient with capillary glucose below 4 mmol/L who can swallow safely, give 15–20 g of fast-acting carbohydrate such as glucose tablets, gel or fruit juice — avoid chocolate or biscuits as first-line treatment since absorption is slower. Recheck glucose after 15 minutes and repeat treatment if still below 4. Once glucose rises above 4, give a longer-acting carbohydrate such as toast, or the next meal if due. If the patient is unconscious or unable to swallow safely, give nothing by mouth — call for help and give intramuscular glucagon or intravenous glucose.`,
    questions: [
      {
        id: "read-fb5-1-q1",
        prompt: "First-line fast-acting carbohydrate treatment for a conscious hypoglycaemic patient is:",
        options: ["Chocolate or biscuits", "15–20 g of glucose tablets, gel or juice", "A full meal only", "Nothing until glucose is rechecked"],
        correctIndex: 1,
        explanation: "Give 15–20 g of fast-acting carbohydrate such as glucose tablets, gel or juice.",
      },
    ],
  },
  {
    id: "read-fb5-2",
    part: "B",
    title: "Policy: insulin storage and administration safety",
    specialty: "Pharmacy",
    timeLimitSec: 180,
    text: `Insulin safety alert
Unopened insulin should be stored in a refrigerator between 2°C and 8°C. Once in use, most insulin can be kept at room temperature below 25°C for up to 28 days, then discarded even if some remains, so the in-use discard date must be checked alongside the expiry date. Insulin doses must always be measured in units using an insulin syringe or pen — never a standard hypodermic syringe, and insulin must never be drawn up from a pen device using a syringe. Confirm and document units, not millilitres, at every handover.`,
    questions: [
      {
        id: "read-fb5-2-q1",
        prompt: "Once opened, insulin kept at room temperature should generally be discarded after:",
        options: ["24 hours", "28 days", "6 months", "It never needs discarding"],
        correctIndex: 1,
        explanation: "Kept at room temperature for up to 28 days, then discarded.",
      },
    ],
  },
  {
    id: "read-fb5-3",
    part: "B",
    title: "Memo: diabetic foot red flags in primary care",
    specialty: "Primary care",
    timeLimitSec: 180,
    text: `GP alert — diabetic foot red flags
Any patient with diabetes presenting with a new foot ulcer, spreading redness, discharge, fever or sudden severe pain should be referred the same day to the multidisciplinary diabetic foot service or emergency department — do not wait for a routine podiatry appointment. Loss of sensation means patients may under-report pain despite significant infection. Crepitus, rapidly spreading discolouration or pain out of proportion to examination findings suggest necrotising infection and require emergency same-day surgical assessment.`,
    questions: [
      {
        id: "read-fb5-3-q1",
        prompt: "A diabetic patient with a new foot ulcer and spreading redness should be:",
        options: [
          "Reviewed at the next scheduled podiatry visit",
          "Referred the same day, not to a routine appointment",
          "Managed only with oral analgesia",
          "Discharged if pain is absent",
        ],
        correctIndex: 1,
        explanation: "Referred the same day — do not wait for a routine podiatry appointment.",
      },
    ],
  },
  {
    id: "read-fb5-4",
    part: "B",
    title: "Alert: steroid-induced hyperglycaemia",
    specialty: "Pharmacy",
    timeLimitSec: 180,
    text: `Pharmacy bulletin — steroids and glucose control
Glucocorticoids such as prednisolone and dexamethasone commonly cause or worsen hyperglycaemia, typically peaking in the afternoon and evening after a once-daily morning dose. Monitor capillary glucose at least once daily in patients without known diabetes who start moderate-to-high dose steroids, and more frequently in those with known diabetes. Adjust or start diabetes treatment promptly rather than waiting for outpatient review, and warn patients about symptoms of hyperglycaemia. Do not stop steroids abruptly to manage glucose — adjust glucose-lowering treatment instead.`,
    questions: [
      {
        id: "read-fb5-4-q1",
        prompt: "Steroid-induced hyperglycaemia typically peaks:",
        options: [
          "Immediately before the dose is given",
          "Only overnight",
          "In the afternoon and evening after a morning dose",
          "It does not follow any pattern",
        ],
        correctIndex: 2,
        explanation: "Typically peaking in the afternoon and evening after a once-daily morning dose.",
      },
    ],
  },
  {
    id: "read-fb5-5",
    part: "B",
    title: "Protocol: capillary ketone testing in type 1 diabetes",
    specialty: "Endocrinology",
    timeLimitSec: 180,
    text: `Diabetes team advisory
Blood ketone testing is preferred over urine ketone testing where meters are available, as it reflects current ketone levels rather than levels from several hours earlier. Patients with type 1 diabetes should check ketones when unwell, when glucose is persistently above 13 mmol/L, or if experiencing nausea, vomiting or abdominal pain. A result of 3 mmol/L or more, especially with vomiting or drowsiness, warrants urgent same-day medical assessment rather than home management alone.`,
    questions: [
      {
        id: "read-fb5-5-q1",
        prompt: "Blood ketone testing is preferred over urine testing because it:",
        options: [
          "Is cheaper to perform",
          "Requires no patient training",
          "Reflects current ketone levels",
          "Only needs to be done annually",
        ],
        correctIndex: 2,
        explanation: "Reflects current ketone levels rather than levels from several hours earlier.",
      },
    ],
  },
  {
    id: "read-fb5-6",
    part: "B",
    title: "Briefing: diabetes and driving safety",
    specialty: "Occupational health",
    timeLimitSec: 180,
    text: `Occupational advice — diabetes and driving
Patients treated with insulin or sulfonylureas must check glucose before driving and at least every two hours on long journeys. Driving must not resume until at least 45 minutes after treating hypoglycaemia, and only once the patient feels fully back to normal. More than one episode of severe hypoglycaemia requiring third-party assistance within 12 months must be reported to the licensing authority and may lead to licence review. A fast-acting carbohydrate source should always be carried in the vehicle.`,
    questions: [
      {
        id: "read-fb5-6-q1",
        prompt: "After treating hypoglycaemia, driving should not resume for at least:",
        options: ["5 minutes", "24 hours", "1 week", "45 minutes"],
        correctIndex: 3,
        explanation: "Driving must not resume until at least 45 minutes after treating hypoglycaemia.",
      },
    ],
  },
  {
    id: "read-fc5-1",
    part: "C",
    title: "Article: modern management of diabetic ketoacidosis",
    specialty: "Endocrinology",
    timeLimitSec: 1200,
    text: `Diabetic ketoacidosis (DKA) remains one of the most common life-threatening complications of diabetes, arising from an absolute or relative deficiency of insulin combined with elevated counter-regulatory hormones. Although classically associated with type 1 diabetes, an increasing proportion of cases now occur in people with type 2 diabetes, particularly during severe intercurrent illness or with certain medications, including sodium-glucose co-transporter-2 (SGLT2) inhibitors, which can precipitate euglycaemic ketoacidosis with only modestly elevated glucose.

Diagnosis rests on the triad of hyperglycaemia, ketonaemia and acidosis, though clinicians should remain alert to euglycaemic presentations where glucose may be below the traditional threshold despite significant ketosis. Capillary blood ketone meters have transformed bedside assessment, allowing ketones to be tracked in near real time rather than relying on urine dipsticks that reflect ketosis several hours earlier.

Management begins with fluid resuscitation, which itself lowers glucose and improves perfusion before insulin is even started. A fixed-rate intravenous insulin infusion, rather than the historical sliding-scale approach, is now standard, calculated by patient weight rather than glucose level alone. Established basal insulin analogues should continue uninterrupted throughout treatment, since stopping them risks rebound ketogenesis once the intravenous infusion is later discontinued.

Potassium management is a frequent source of error. Total body potassium is typically depleted despite a normal or high admission level, because acidosis and insulin deficiency shift potassium out of cells. As insulin therapy begins, potassium moves back intracellularly and levels can fall precipitously; regular monitoring and timely replacement are essential to prevent life-threatening arrhythmia.

Overly rapid correction of hyperglycaemia or plasma osmolality carries a recognised risk of cerebral oedema, a rare but often fatal complication that disproportionately affects children and young adults. Glucose and sodium should therefore be corrected gradually, and clinicians should have a low threshold for neurological reassessment if headache, altered behaviour or reduced consciousness develop during treatment.

Once resolution criteria are met — near-normal ketones, resolving acidosis and a rising bicarbonate — patients can transition to their usual subcutaneous insulin regimen. Crucially, the intravenous infusion should continue for a period after the first subcutaneous dose to allow adequate insulin levels to be established, since immediate cessation risks rapid recurrence of ketosis. Before discharge, every episode warrants review of the precipitating cause, reinforcement of sick day guidance, and specialist diabetes follow-up to reduce the risk of recurrence.`,
    questions: [
      {
        id: "read-fc5-1-q1",
        prompt: "An increasing proportion of DKA cases now occur in type 2 diabetes, particularly associated with:",
        options: [
          "Excess dietary fibre",
          "SGLT2 inhibitor use, causing euglycaemic ketoacidosis",
          "Overuse of metformin alone",
          "Routine annual retinal screening",
        ],
        correctIndex: 1,
        explanation: "SGLT2 inhibitors can precipitate euglycaemic ketoacidosis.",
      },
      {
        id: "read-fc5-1-q2",
        prompt: "Euglycaemic DKA is characterised by:",
        options: [
          "Glucose always above 40 mmol/L",
          "Complete absence of ketones",
          "Significant ketosis despite glucose below the traditional diagnostic threshold",
          "Normal blood gases throughout",
        ],
        correctIndex: 2,
        explanation: "Glucose may be below the traditional threshold despite significant ketosis.",
      },
      {
        id: "read-fc5-1-q3",
        prompt: "Compared with urine dipsticks, capillary blood ketone meters:",
        options: [
          "Are less accurate in every setting",
          "Reflect ketosis in near real time rather than several hours earlier",
          "Cannot be used at the bedside",
          "Replace the need for blood glucose testing",
        ],
        correctIndex: 1,
        explanation: "Allow ketones to be tracked in near real time rather than several hours earlier.",
      },
      {
        id: "read-fc5-1-q4",
        prompt: "The fixed-rate intravenous insulin infusion is calculated using:",
        options: ["Time since last meal", "Blood pressure trend", "Patient age alone", "Patient weight"],
        correctIndex: 3,
        explanation: "Calculated by patient weight rather than glucose level alone.",
      },
      {
        id: "read-fc5-1-q5",
        prompt: "Basal insulin analogues during DKA treatment should:",
        options: [
          "Be stopped until resolution",
          "Continue uninterrupted to prevent rebound ketogenesis",
          "Be replaced by oral agents",
          "Be given only once daily regardless of usual regimen",
        ],
        correctIndex: 1,
        explanation: "Should continue uninterrupted since stopping risks rebound ketogenesis.",
      },
      {
        id: "read-fc5-1-q6",
        prompt: "Potassium often falls precipitously during treatment because:",
        options: [
          "Fluids dilute potassium irreversibly",
          "Ketones bind potassium directly",
          "Insulin therapy shifts potassium back into cells",
          "Acidosis increases renal potassium retention",
        ],
        correctIndex: 2,
        explanation: "As insulin therapy begins, potassium moves back intracellularly.",
      },
      {
        id: "read-fc5-1-q7",
        prompt: "Overly rapid correction of glucose or osmolality carries a risk of:",
        options: [
          "Immediate cure of diabetes",
          "Improved neurological outcomes",
          "No recognised complication",
          "Cerebral oedema, especially in children and young adults",
        ],
        correctIndex: 3,
        explanation: "A recognised risk of cerebral oedema, disproportionately affecting children and young adults.",
      },
      {
        id: "read-fc5-1-q8",
        prompt: "Before the intravenous insulin infusion is stopped after the first subcutaneous dose, clinicians should:",
        options: [
          "Stop it immediately to avoid hypoglycaemia",
          "Continue it for a period to allow adequate insulin levels to be established",
          "Wait one week regardless of resolution criteria",
          "Switch directly to a sulfonylurea",
        ],
        correctIndex: 1,
        explanation: "Continue for a period after the first subcutaneous dose to prevent rapid recurrence of ketosis.",
      },
    ],
  },
  {
    id: "read-fc5-2",
    part: "C",
    title: "Article: preventing diabetic foot amputation",
    specialty: "Diabetic foot medicine",
    timeLimitSec: 1200,
    text: `Diabetic foot disease is a leading cause of non-traumatic lower limb amputation, yet a substantial proportion of amputations are considered preventable with timely, coordinated care. The pathway to ulceration typically combines peripheral neuropathy, which removes protective pain sensation, with peripheral arterial disease, which impairs healing, and is frequently compounded by structural foot deformity and inappropriate footwear.

Risk stratification through annual screening — assessing sensation with a 10-gram monofilament, palpating pulses, and inspecting skin integrity — allows services to target review frequency appropriately, from annual checks in low-risk patients to specialist review within days for those at high risk or with active ulceration. Delay between ulcer onset and specialist assessment is repeatedly identified as a key modifiable factor in poor outcomes, with services that achieve rapid access to multidisciplinary diabetic foot teams reporting lower amputation rates.

Assessment of a new ulcer should be systematic: wound swabs to guide antibiotic choice, plain radiography or, where osteomyelitis is suspected clinically but not confirmed, magnetic resonance imaging, and vascular assessment to identify significant arterial disease amenable to revascularisation. Ankle-brachial pressure index measurements can be falsely reassuring in long-standing diabetes because arterial wall calcification stiffens vessels and elevates readings, so toe pressures or Doppler waveform assessment are preferred when calcification is suspected.

Off-loading — removing mechanical pressure from the wound through total contact casting, removable cast walkers or specialised footwear — is as critical to healing as antibiotic therapy, yet adherence is often poor because patients find devices cumbersome or fear losing independence. Education that explains the direct link between off-loading and healing time can improve concordance.

Certain presentations demand emergency rather than routine escalation: crepitus, rapidly spreading discolouration, bullae, or pain disproportionate to examination findings should raise suspicion of necrotising soft tissue infection, a surgical emergency with high mortality if treatment is delayed. Systemic sepsis in the context of a diabetic foot wound likewise mandates the same urgent pathway as sepsis from any other source.

Beyond the acute episode, sustainable prevention depends on structural factors: consistent footwear provision, smoking cessation support, glycaemic and cardiovascular risk optimisation, and psychological support, since the fear of further ulceration or amputation can itself limit mobility and rehabilitation. Every major amputation should trigger multidisciplinary case review to identify avoidable delays and system failures, feeding directly into service improvement.`,
    questions: [
      {
        id: "read-fc5-2-q1",
        prompt: "Diabetic foot ulceration typically arises from a combination of:",
        options: [
          "Excess vitamin intake and low blood pressure",
          "Peripheral neuropathy and peripheral arterial disease",
          "Overactive immune response alone",
          "Excessive exercise",
        ],
        correctIndex: 1,
        explanation: "Combines peripheral neuropathy with peripheral arterial disease.",
      },
      {
        id: "read-fc5-2-q2",
        prompt: "A key modifiable factor in poor outcomes, repeatedly identified in the article, is:",
        options: [
          "Choice of wound dressing brand",
          "Patient's preferred clinic location",
          "Delay between ulcer onset and specialist assessment",
          "Time of year of presentation",
        ],
        correctIndex: 2,
        explanation: "Delay between ulcer onset and specialist assessment is a key modifiable factor.",
      },
      {
        id: "read-fc5-2-q3",
        prompt: "Ankle-brachial pressure index can be falsely reassuring in long-standing diabetes because:",
        options: [
          "Nerve damage lowers readings artificially",
          "Arterial calcification stiffens vessels and elevates readings",
          "The test cannot be performed on diabetic patients",
          "Readings are always identical to toe pressures",
        ],
        correctIndex: 1,
        explanation: "Arterial wall calcification stiffens vessels and elevates readings.",
      },
      {
        id: "read-fc5-2-q4",
        prompt: "When arterial calcification is suspected, preferred alternative assessments include:",
        options: ["Chest X-ray", "Full blood count only", "Toe pressures or Doppler waveform assessment", "Urine dipstick testing"],
        correctIndex: 2,
        explanation: "Toe pressures or Doppler waveform assessment are preferred when calcification is suspected.",
      },
      {
        id: "read-fc5-2-q5",
        prompt: "Off-loading pressure from a plantar ulcer is described as:",
        options: [
          "Unnecessary once antibiotics are started",
          "Only relevant after amputation",
          "Contraindicated in most patients",
          "As critical to healing as antibiotic therapy",
        ],
        correctIndex: 3,
        explanation: "Off-loading is as critical to healing as antibiotic therapy.",
      },
      {
        id: "read-fc5-2-q6",
        prompt: "Presentations that demand emergency rather than routine escalation include:",
        options: [
          "Mild erythema without other symptoms",
          "Stable, dry, healed scar tissue",
          "Routine callus formation",
          "Crepitus, rapidly spreading discolouration and disproportionate pain",
        ],
        correctIndex: 3,
        explanation: "Should raise suspicion of necrotising soft tissue infection.",
      },
      {
        id: "read-fc5-2-q7",
        prompt: "Systemic sepsis arising from a diabetic foot wound should be treated:",
        options: [
          "Only after outpatient review",
          "With oral antibiotics at home",
          "Without blood cultures",
          "Via the same urgent pathway as sepsis from any other source",
        ],
        correctIndex: 3,
        explanation: "Mandates the same urgent pathway as sepsis from any other source.",
      },
      {
        id: "read-fc5-2-q8",
        prompt: "Every major amputation should trigger:",
        options: [
          "Immediate discharge without follow-up",
          "Cessation of all further foot screening",
          "No formal review process",
          "Multidisciplinary case review to identify avoidable delays",
        ],
        correctIndex: 3,
        explanation: "Should trigger multidisciplinary case review to identify avoidable delays and system failures.",
      },
    ],
  },
];
