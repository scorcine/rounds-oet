import type { ListeningExtract } from "@/domain/types";

export const LISTENING_EXTRACTS_FULLPAPER_5: ListeningExtract[] = [
  {
    id: "lis-fa5-1",
    part: "A",
    title: "Diabetic ketoacidosis presentation",
    specialty: "Endocrinology",
    durationSec: 335,
    audioUrl: "/audio/lis-fa5-1.mp3",
    transcript: `Doctor: Good afternoon, Mr Ahmed. What's brought you in today?
Patient: I've been vomiting since yesterday morning — six or seven times now. I'm terribly thirsty and I've been up most of the night going to the toilet.
Doctor: How long have you felt unwell overall?
Patient: About three days. It started with a sore throat and I felt like I was coming down with flu.
Doctor: How long have you had diabetes, and have you been checking your blood sugars?
Patient: Six years, type 1. My glucose this morning at home was twenty-eight.
Doctor: Have you taken your usual insulin doses during this illness?
Patient: I skipped my long-acting insulin twice because I wasn't eating much — I thought I needed less.
Doctor: What's your usual insulin regimen?
Patient: Lantus eighteen units at night, and Novorapid six units with meals.
Doctor: Any abdominal pain or trouble with your breathing?
Patient: Yes, quite bad tummy pain all over, and I feel like I'm taking deep, fast breaths.
Doctor: Has anyone noticed a smell to your breath?
Patient: My sister said it smelled like pear drops.
Doctor: Any chest pain, confusion, or change in how much urine you're passing?
Patient: No chest pain. I feel a bit muddled and very tired. Urine's been frequent, not reduced.
Doctor: Observations: heart rate one hundred and eighteen, blood pressure one-oh-two over sixty-four, respiratory rate twenty-eight, temperature thirty-seven point one. Capillary glucose is twenty-nine, blood ketones five point eight, venous pH seven point one. We'll treat this as diabetic ketoacidosis — starting a fixed-rate intravenous insulin infusion at zero point one units per kilogram per hour alongside intravenous fluids, and we'll continue your usual long-acting insulin unchanged. We'll monitor your potassium, glucose and ketones hourly to start with.`,
    ttsScript:
      "Good afternoon, Mr Ahmed. What's brought you in today? I've been vomiting since yesterday morning — six or seven times now. I'm terribly thirsty and I've been up most of the night going to the toilet. How long have you felt unwell overall? About three days. It started with a sore throat and I felt like I was coming down with flu. How long have you had diabetes, and have you been checking your blood sugars? Six years, type 1. My glucose this morning at home was twenty-eight. Have you taken your usual insulin doses during this illness? I skipped my long-acting insulin twice because I wasn't eating much — I thought I needed less. What's your usual insulin regimen? Lantus eighteen units at night, and Novorapid six units with meals. Any abdominal pain or trouble with your breathing? Yes, quite bad tummy pain all over, and I feel like I'm taking deep, fast breaths. Has anyone noticed a smell to your breath? My sister said it smelled like pear drops. Any chest pain, confusion, or change in how much urine you're passing? No chest pain. I feel a bit muddled and very tired. Urine's been frequent, not reduced. Observations: heart rate one hundred and eighteen, blood pressure one-oh-two over sixty-four, respiratory rate twenty-eight, temperature thirty-seven point one. Capillary glucose is twenty-nine, blood ketones five point eight, venous pH seven point one. We'll treat this as diabetic ketoacidosis — starting a fixed-rate intravenous insulin infusion at zero point one units per kilogram per hour alongside intravenous fluids, and we'll continue your usual long-acting insulin unchanged. We'll monitor your potassium, glucose and ketones hourly to start with.",
    questions: [
      {
        id: "lis-fa5-1-q1",
        prompt: "Vomiting pattern and onset:",
        answer: "6–7 times since yesterday morning",
        acceptedAnswers: [
          "6–7 times since yesterday morning",
          "six or seven times since yesterday morning",
          "6-7 times since yesterday morning",
        ],
        explanation: "Vomiting since yesterday morning — six or seven times.",
      },
      {
        id: "lis-fa5-1-q2",
        prompt: "Total duration of feeling unwell:",
        answer: "3 days",
        acceptedAnswers: ["3 days", "three days", "about three days"],
        explanation: "About three days overall.",
      },
      {
        id: "lis-fa5-1-q3",
        prompt: "Initial symptom before vomiting began:",
        answer: "sore throat / flu-like symptoms",
        acceptedAnswers: ["sore throat / flu-like symptoms", "sore throat", "coming down with flu"],
        explanation: "Started with a sore throat and felt like flu.",
      },
      {
        id: "lis-fa5-1-q4",
        prompt: "Years living with type 1 diabetes:",
        answer: "6 years",
        acceptedAnswers: ["6 years", "six years"],
        explanation: "Six years, type 1.",
      },
      {
        id: "lis-fa5-1-q5",
        prompt: "Home capillary glucose this morning:",
        answer: "28",
        acceptedAnswers: ["28", "28 mmol/L", "twenty-eight"],
        explanation: "Glucose this morning at home was twenty-eight.",
      },
      {
        id: "lis-fa5-1-q6",
        prompt: "Reason insulin doses were skipped:",
        answer: "wasn't eating much — thought he needed less",
        acceptedAnswers: [
          "wasn't eating much — thought he needed less",
          "not eating much, thought he needed less insulin",
          "wasn't eating much",
        ],
        explanation: "Skipped long-acting insulin twice because he wasn't eating much.",
      },
      {
        id: "lis-fa5-1-q7",
        prompt: "Usual long-acting insulin and dose:",
        answer: "Lantus 18 units at night",
        acceptedAnswers: ["Lantus 18 units at night", "Lantus 18 units nightly", "18 units of Lantus at night"],
        explanation: "Lantus eighteen units at night.",
      },
      {
        id: "lis-fa5-1-q8",
        prompt: "Usual rapid-acting insulin and dose:",
        answer: "Novorapid 6 units with meals",
        acceptedAnswers: ["Novorapid 6 units with meals", "Novorapid 6 units at mealtimes", "6 units Novorapid with meals"],
        explanation: "Novorapid six units with meals.",
      },
      {
        id: "lis-fa5-1-q9",
        prompt: "Breath odour noted by his sister:",
        answer: "pear drops",
        acceptedAnswers: ["pear drops", "smelled like pear drops"],
        explanation: "His sister said it smelled like pear drops.",
      },
      {
        id: "lis-fa5-1-q10",
        prompt: "Heart rate on assessment:",
        answer: "118",
        acceptedAnswers: ["118", "one hundred and eighteen", "118 bpm"],
        explanation: "Heart rate one hundred and eighteen.",
      },
      {
        id: "lis-fa5-1-q11",
        prompt: "Respiratory rate on assessment:",
        answer: "28",
        acceptedAnswers: ["28", "twenty-eight", "28 breaths/min"],
        explanation: "Respiratory rate twenty-eight.",
      },
      {
        id: "lis-fa5-1-q12",
        prompt: "Venous pH result:",
        answer: "7.1",
        acceptedAnswers: ["7.1", "seven point one"],
        explanation: "Venous pH seven point one.",
      },
    ],
  },
  {
    id: "lis-fa5-2",
    part: "A",
    title: "Diabetic foot infection assessment",
    specialty: "Diabetic foot medicine",
    durationSec: 330,
    audioUrl: "/audio/lis-fa5-2.mp3",
    transcript: `Doctor: Good morning, Mr Yilmaz. What's the trouble with your foot?
Patient: I've had a sore on the bottom of my right foot for about two weeks. It's got worse the last three days — more red and swollen, and there's a smell.
Doctor: Did you notice any injury before it appeared?
Patient: Not really. I found it while drying my feet — I don't feel much down there these days.
Doctor: How long have you had that reduced feeling in your feet?
Patient: A few years now — my diabetes nurse mentioned neuropathy a while back.
Doctor: Any fever, chills, or feeling generally unwell?
Patient: Yes, I've felt hot and shivery since last night, and quite tired.
Doctor: How long have you had diabetes, and how is it usually treated?
Patient: Type 2 for fifteen years. I'm on metformin one gram twice daily and gliclazide eighty milligrams twice daily.
Doctor: Any previous foot ulcers or amputations?
Patient: A small toe ulcer two years ago — it healed with antibiotics. No amputations.
Doctor: Do you smoke?
Patient: I stopped eight years ago. Smoked for twenty years before that.
Doctor: Let's have a look. Temperature is thirty-eight point two, heart rate one hundred and four, blood pressure one-thirty-two over seventy-eight. The ulcer is about three centimetres across with surrounding redness spreading further out, and a probe-to-bone test is positive, which raises concern for bone infection. Today's blood glucose is nineteen, and your CRP is one hundred and eighty-eight. We'll admit you, start intravenous co-amoxiclav, arrange an X-ray of the foot, and refer you urgently to the diabetic foot team.`,
    ttsScript:
      "Good morning, Mr Yilmaz. What's the trouble with your foot? I've had a sore on the bottom of my right foot for about two weeks. It's got worse the last three days — more red and swollen, and there's a smell. Did you notice any injury before it appeared? Not really. I found it while drying my feet — I don't feel much down there these days. How long have you had that reduced feeling in your feet? A few years now — my diabetes nurse mentioned neuropathy a while back. Any fever, chills, or feeling generally unwell? Yes, I've felt hot and shivery since last night, and quite tired. How long have you had diabetes, and how is it usually treated? Type 2 for fifteen years. I'm on metformin one gram twice daily and gliclazide eighty milligrams twice daily. Any previous foot ulcers or amputations? A small toe ulcer two years ago — it healed with antibiotics. No amputations. Do you smoke? I stopped eight years ago. Smoked for twenty years before that. Let's have a look. Temperature is thirty-eight point two, heart rate one hundred and four, blood pressure one-thirty-two over seventy-eight. The ulcer is about three centimetres across with surrounding redness spreading further out, and a probe-to-bone test is positive, which raises concern for bone infection. Today's blood glucose is nineteen, and your CRP is one hundred and eighty-eight. We'll admit you, start intravenous co-amoxiclav, arrange an X-ray of the foot, and refer you urgently to the diabetic foot team.",
    questions: [
      {
        id: "lis-fa5-2-q1",
        prompt: "Duration of the foot ulcer:",
        answer: "2 weeks",
        acceptedAnswers: ["2 weeks", "two weeks", "about two weeks"],
        explanation: "A sore on the foot for about two weeks.",
      },
      {
        id: "lis-fa5-2-q2",
        prompt: "Time frame of recent worsening:",
        answer: "last 3 days",
        acceptedAnswers: ["last 3 days", "the last three days", "3 days"],
        explanation: "Got worse the last three days.",
      },
      {
        id: "lis-fa5-2-q3",
        prompt: "How the ulcer was first noticed:",
        answer: "while drying his feet, without pain",
        acceptedAnswers: ["while drying his feet, without pain", "found it while drying his feet", "drying his feet"],
        explanation: "Found it while drying his feet — reduced sensation, no pain.",
      },
      {
        id: "lis-fa5-2-q4",
        prompt: "Duration of reduced foot sensation:",
        answer: "a few years",
        acceptedAnswers: ["a few years", "few years"],
        explanation: "A few years now, since neuropathy was mentioned.",
      },
      {
        id: "lis-fa5-2-q5",
        prompt: "Onset of fever and feeling unwell:",
        answer: "since last night",
        acceptedAnswers: ["since last night", "last night"],
        explanation: "Felt hot and shivery since last night.",
      },
      {
        id: "lis-fa5-2-q6",
        prompt: "Duration of type 2 diabetes:",
        answer: "15 years",
        acceptedAnswers: ["15 years", "fifteen years"],
        explanation: "Type 2 for fifteen years.",
      },
      {
        id: "lis-fa5-2-q7",
        prompt: "Metformin dose:",
        answer: "1 g twice daily",
        acceptedAnswers: ["1 g twice daily", "1g BD", "one gram twice daily"],
        explanation: "Metformin one gram twice daily.",
      },
      {
        id: "lis-fa5-2-q8",
        prompt: "Gliclazide dose:",
        answer: "80 mg twice daily",
        acceptedAnswers: ["80 mg twice daily", "80mg BD", "eighty milligrams twice daily"],
        explanation: "Gliclazide eighty milligrams twice daily.",
      },
      {
        id: "lis-fa5-2-q9",
        prompt: "Temperature on examination:",
        answer: "38.2°C",
        acceptedAnswers: ["38.2°C", "38.2", "thirty-eight point two"],
        explanation: "Temperature is thirty-eight point two.",
      },
      {
        id: "lis-fa5-2-q10",
        prompt: "Heart rate on examination:",
        answer: "104",
        acceptedAnswers: ["104", "one hundred and four", "104 bpm"],
        explanation: "Heart rate one hundred and four.",
      },
      {
        id: "lis-fa5-2-q11",
        prompt: "Approximate size of the ulcer:",
        answer: "3 cm across",
        acceptedAnswers: ["3 cm across", "three centimetres", "about 3 cm"],
        explanation: "The ulcer is about three centimetres across.",
      },
      {
        id: "lis-fa5-2-q12",
        prompt: "CRP result:",
        answer: "188",
        acceptedAnswers: ["188", "one hundred and eighty-eight"],
        explanation: "CRP is one hundred and eighty-eight.",
      },
    ],
  },
  {
    id: "lis-fb5-1",
    part: "B",
    title: "Handover: DKA insulin and fluid protocol",
    specialty: "Endocrinology",
    durationSec: 74,
    audioUrl: "/audio/lis-fb5-1.mp3",
    transcript: `Medical registrar: For diabetic ketoacidosis, start a fixed-rate intravenous insulin infusion at zero point one units per kilogram per hour alongside intravenous fluids — do not stop the patient's usual long-acting insulin analogue. Add potassium chloride to the replacement fluids once the level falls below five point five, provided the patient is passing urine. Resolution is defined as ketones below zero point six, venous pH above seven point three, and bicarbonate above eighteen. Continue the fixed-rate infusion for at least one hour after the first dose of subcutaneous rapid-acting insulin, to prevent rebound ketosis.`,
    ttsScript:
      "For diabetic ketoacidosis, start a fixed-rate intravenous insulin infusion at zero point one units per kilogram per hour alongside intravenous fluids — do not stop the patient's usual long-acting insulin analogue. Add potassium chloride to the replacement fluids once the level falls below five point five, provided the patient is passing urine. Resolution is defined as ketones below zero point six, venous pH above seven point three, and bicarbonate above eighteen. Continue the fixed-rate infusion for at least one hour after the first dose of subcutaneous rapid-acting insulin, to prevent rebound ketosis.",
    questions: [
      {
        id: "lis-fb5-1-q1",
        prompt: "According to the handover, potassium replacement is added once the level falls below:",
        options: ["3.0 mmol/L", "5.5 mmol/L", "7.0 mmol/L", "It is never replaced"],
        correctIndex: 1,
        explanation: "Potassium chloride is added once the level falls below five point five.",
      },
    ],
  },
  {
    id: "lis-fb5-2",
    part: "B",
    title: "Ward brief: severe hypoglycaemia response",
    specialty: "Acute medicine",
    durationSec: 70,
    audioUrl: "/audio/lis-fb5-2.mp3",
    transcript: `Ward nurse: For any conscious patient with capillary glucose below four who can swallow safely, give fifteen to twenty grams of fast-acting carbohydrate, such as glucose tablets or juice, and recheck in fifteen minutes. If unconscious or unable to swallow, do not give anything orally — call for help, and give intramuscular glucagon or intravenous ten percent glucose if IV access is available. Once glucose rises above four, give a longer-acting carbohydrate such as toast, and identify the cause before leaving the patient unsupervised.`,
    ttsScript:
      "For any conscious patient with capillary glucose below four who can swallow safely, give fifteen to twenty grams of fast-acting carbohydrate, such as glucose tablets or juice, and recheck in fifteen minutes. If unconscious or unable to swallow, do not give anything orally — call for help, and give intramuscular glucagon or intravenous ten percent glucose if IV access is available. Once glucose rises above four, give a longer-acting carbohydrate such as toast, and identify the cause before leaving the patient unsupervised.",
    questions: [
      {
        id: "lis-fb5-2-q1",
        prompt: "For a conscious patient with capillary glucose below 4, the first step is:",
        options: [
          "Start an insulin infusion",
          "Give 15–20 g of fast-acting carbohydrate",
          "Give intramuscular glucagon immediately",
          "Withhold all treatment until glucose is rechecked",
        ],
        correctIndex: 1,
        explanation: "Give fifteen to twenty grams of fast-acting carbohydrate if conscious and able to swallow.",
      },
    ],
  },
  {
    id: "lis-fb5-3",
    part: "B",
    title: "Handover: hyperosmolar hyperglycaemic state",
    specialty: "Endocrinology",
    durationSec: 76,
    audioUrl: "/audio/lis-fb5-3.mp3",
    transcript: `Consultant physician: Hyperosmolar hyperglycaemic state typically affects older type 2 diabetic patients with marked hyperglycaemia, high osmolality and little or no ketosis. Fluid replacement is the cornerstone of treatment and should be more gradual than in DKA, aiming to correct the deficit over about forty-eight hours to avoid rapid osmotic shifts. Insulin is usually withheld initially unless significant ketosis is present, and is started at a lower fixed rate once glucose stops falling with fluids alone. Anticipate a high risk of venous thromboembolism and prescribe prophylactic anticoagulation unless contraindicated.`,
    ttsScript:
      "Hyperosmolar hyperglycaemic state typically affects older type 2 diabetic patients with marked hyperglycaemia, high osmolality and little or no ketosis. Fluid replacement is the cornerstone of treatment and should be more gradual than in DKA, aiming to correct the deficit over about forty-eight hours to avoid rapid osmotic shifts. Insulin is usually withheld initially unless significant ketosis is present, and is started at a lower fixed rate once glucose stops falling with fluids alone. Anticipate a high risk of venous thromboembolism and prescribe prophylactic anticoagulation unless contraindicated.",
    questions: [
      {
        id: "lis-fb5-3-q1",
        prompt: "In HHS, fluid replacement is targeted to correct the deficit over approximately:",
        options: ["6 hours", "1 hour", "48 hours", "1 week"],
        correctIndex: 2,
        explanation: "Aiming to correct the deficit over about forty-eight hours.",
      },
    ],
  },
  {
    id: "lis-fb5-4",
    part: "B",
    title: "Ward brief: diabetic foot sepsis escalation",
    specialty: "Podiatric surgery",
    durationSec: 72,
    audioUrl: "/audio/lis-fb5-4.mp3",
    transcript: `Podiatric surgeon: Any diabetic patient with a foot wound and systemic signs of sepsis — fever, tachycardia, rising CRP or new confusion — needs urgent same-day assessment by the multidisciplinary diabetic foot team, with blood cultures and broad-spectrum antibiotics before results return. Do not wait for an outpatient clinic slot. Crepitus, rapidly spreading discolouration or severe pain out of proportion to examination findings should raise concern for necrotising fasciitis and prompt an immediate surgical review.`,
    ttsScript:
      "Any diabetic patient with a foot wound and systemic signs of sepsis — fever, tachycardia, rising CRP or new confusion — needs urgent same-day assessment by the multidisciplinary diabetic foot team, with blood cultures and broad-spectrum antibiotics before results return. Do not wait for an outpatient clinic slot. Crepitus, rapidly spreading discolouration or severe pain out of proportion to examination findings should raise concern for necrotising fasciitis and prompt an immediate surgical review.",
    questions: [
      {
        id: "lis-fb5-4-q1",
        prompt: "Crepitus and rapidly spreading discolouration in a diabetic foot wound should raise concern for:",
        options: ["Simple cellulitis", "Dry gangrene only", "Necrotising fasciitis", "Normal healing"],
        correctIndex: 2,
        explanation: "Should raise concern for necrotising fasciitis and prompt immediate surgical review.",
      },
    ],
  },
  {
    id: "lis-fb5-5",
    part: "B",
    title: "Patient education: sick day insulin rules",
    specialty: "Diabetes nursing",
    durationSec: 70,
    audioUrl: "/audio/lis-fb5-5.mp3",
    transcript: `Diabetes specialist nurse: Sick day rules matter even when a patient cannot eat normally. Never stop insulin completely during illness — doses may need adjusting, but insulin should continue, as intercurrent illness often raises requirements. Check blood glucose and, for type 1 diabetes, blood ketones at least every four hours. Encourage sugar-free fluids to avoid dehydration and small amounts of carbohydrate if not eating normally. Seek urgent advice or attend hospital if ketones remain raised despite extra insulin, or if vomiting prevents fluids being kept down.`,
    ttsScript:
      "Sick day rules matter even when a patient cannot eat normally. Never stop insulin completely during illness — doses may need adjusting, but insulin should continue, as intercurrent illness often raises requirements. Check blood glucose and, for type 1 diabetes, blood ketones at least every four hours. Encourage sugar-free fluids to avoid dehydration and small amounts of carbohydrate if not eating normally. Seek urgent advice or attend hospital if ketones remain raised despite extra insulin, or if vomiting prevents fluids being kept down.",
    questions: [
      {
        id: "lis-fb5-5-q1",
        prompt: "Sick day rule advice states that insulin should:",
        options: [
          "Always be stopped if not eating",
          "Be doubled regardless of glucose",
          "Never be stopped completely during illness",
          "Be replaced by tablets",
        ],
        correctIndex: 2,
        explanation: "Never stop insulin completely during illness — doses may need adjusting instead.",
      },
    ],
  },
  {
    id: "lis-fb5-6",
    part: "B",
    title: "Handover: insulin pump ketosis troubleshooting",
    specialty: "Diabetes technology",
    durationSec: 74,
    audioUrl: "/audio/lis-fb5-6.mp3",
    transcript: `Diabetes registrar: If a patient using an insulin pump develops unexplained high glucose and ketones, suspect pump or cannula failure rather than assuming true insulin resistance. Advise an immediate correction dose by insulin pen or syringe, not through the pump, and change the cannula and reservoir before restarting the device. Continue checking ketones every two hours until they clear, and admit if ketones remain above one point five despite correction doses.`,
    ttsScript:
      "If a patient using an insulin pump develops unexplained high glucose and ketones, suspect pump or cannula failure rather than assuming true insulin resistance. Advise an immediate correction dose by insulin pen or syringe, not through the pump, and change the cannula and reservoir before restarting the device. Continue checking ketones every two hours until they clear, and admit if ketones remain above one point five despite correction doses.",
    questions: [
      {
        id: "lis-fb5-6-q1",
        prompt: "If ketones and glucose rise unexpectedly in a pump user, the correction dose should be given by:",
        options: [
          "The pump only",
          "Doubling the pump basal rate",
          "Oral hypoglycaemics",
          "Insulin pen or syringe, not the pump",
        ],
        correctIndex: 3,
        explanation: "Advise an immediate correction dose by insulin pen or syringe, not through the pump.",
      },
    ],
  },
  {
    id: "lis-fc5-1",
    part: "C",
    title: "Talk: management of diabetic ketoacidosis",
    specialty: "Endocrinology",
    durationSec: 292,
    audioUrl: "/audio/lis-fc5-1.mp3",
    transcript: `Speaker: Diabetic ketoacidosis is a life-threatening complication of insulin deficiency, characterised by hyperglycaemia, ketonaemia and metabolic acidosis. Diagnosis typically requires blood glucose above eleven — or known diabetes — together with blood ketones of three or more, or significant ketonuria, and either a venous pH below seven point three or bicarbonate below fifteen.

Initial management prioritises intravenous fluid replacement, followed closely by a fixed-rate intravenous insulin infusion calculated by patient weight, usually zero point one units per kilogram per hour. Established long-acting insulin analogues should be continued throughout treatment to provide background cover and reduce rebound hyperglycaemia once the infusion later stops.

Potassium requires close monitoring, since insulin drives potassium into cells and levels can fall rapidly even when the admission value looks normal or high. Replacement is added once potassium falls below five point five, provided the patient is passing urine, with hourly checks in the first few hours of treatment.

Clinicians should identify and treat the precipitant — commonly infection, missed insulin doses, or newly diagnosed diabetes — while avoiding overly rapid correction of glucose or osmolality, which risks cerebral oedema, particularly in children and young adults.

Resolution is defined by ketones below zero point six, pH above seven point three and bicarbonate above eighteen. At that point, the patient can transition to their usual subcutaneous insulin regimen, but the intravenous infusion should continue for at least one hour after the first subcutaneous dose to prevent rebound ketosis. Discharge planning should include diabetes team follow-up and reinforcement of sick day rules to prevent recurrence.`,
    ttsScript:
      "Diabetic ketoacidosis is a life-threatening complication of insulin deficiency, characterised by hyperglycaemia, ketonaemia and metabolic acidosis. Diagnosis typically requires blood glucose above eleven — or known diabetes — together with blood ketones of three or more, or significant ketonuria, and either a venous pH below seven point three or bicarbonate below fifteen. Initial management prioritises intravenous fluid replacement, followed closely by a fixed-rate intravenous insulin infusion calculated by patient weight, usually zero point one units per kilogram per hour. Established long-acting insulin analogues should be continued throughout treatment to provide background cover and reduce rebound hyperglycaemia once the infusion later stops. Potassium requires close monitoring, since insulin drives potassium into cells and levels can fall rapidly even when the admission value looks normal or high. Replacement is added once potassium falls below five point five, provided the patient is passing urine, with hourly checks in the first few hours of treatment. Clinicians should identify and treat the precipitant — commonly infection, missed insulin doses, or newly diagnosed diabetes — while avoiding overly rapid correction of glucose or osmolality, which risks cerebral oedema, particularly in children and young adults. Resolution is defined by ketones below zero point six, pH above seven point three and bicarbonate above eighteen. At that point, the patient can transition to their usual subcutaneous insulin regimen, but the intravenous infusion should continue for at least one hour after the first subcutaneous dose to prevent rebound ketosis. Discharge planning should include diabetes team follow-up and reinforcement of sick day rules to prevent recurrence.",
    questions: [
      {
        id: "lis-fc5-1-q1",
        prompt: "Diagnostic criteria for DKA include blood ketones of:",
        options: ["Below 0.6 only", "3 or more, or significant ketonuria", "Exactly 1.0", "Ketones are not required for diagnosis"],
        correctIndex: 1,
        explanation: "Blood ketones of three or more, or significant ketonuria.",
      },
      {
        id: "lis-fc5-1-q2",
        prompt: "The fixed-rate intravenous insulin infusion is calculated based on:",
        options: ["Time of day", "Blood pressure", "Patient weight", "Patient age only"],
        correctIndex: 2,
        explanation: "A fixed-rate infusion calculated by patient weight.",
      },
      {
        id: "lis-fc5-1-q3",
        prompt: "Established long-acting insulin analogues should be:",
        options: [
          "Stopped immediately on admission",
          "Continued throughout treatment",
          "Doubled during the infusion",
          "Replaced by oral agents",
        ],
        correctIndex: 1,
        explanation: "Should be continued throughout treatment to reduce rebound hyperglycaemia.",
      },
      {
        id: "lis-fc5-1-q4",
        prompt: "Potassium replacement is added once the level falls below:",
        options: ["5.5", "8.0", "2.0", "Potassium is never replaced"],
        correctIndex: 0,
        explanation: "Replacement is added once potassium falls below five point five.",
      },
      {
        id: "lis-fc5-1-q5",
        prompt: "Overly rapid correction of glucose or osmolality risks:",
        options: [
          "Improved outcomes in all age groups",
          "Immediate resolution of ketosis",
          "Cerebral oedema, particularly in children and young adults",
          "No recognised complication",
        ],
        correctIndex: 2,
        explanation: "Risks cerebral oedema, particularly in children and young adults.",
      },
      {
        id: "lis-fc5-1-q6",
        prompt: "Before stopping the intravenous insulin infusion, clinicians should:",
        options: [
          "Stop it immediately once oral intake resumes",
          "Continue it for at least one hour after the first subcutaneous dose",
          "Wait until ketones reach zero exactly",
          "Switch directly to gliclazide",
        ],
        correctIndex: 1,
        explanation: "Continue the infusion for at least one hour after the first subcutaneous dose.",
      },
    ],
  },
  {
    id: "lis-fc5-2",
    part: "C",
    title: "Talk: preventing diabetic foot amputation",
    specialty: "Diabetic foot medicine",
    durationSec: 288,
    audioUrl: "/audio/lis-fc5-2.mp3",
    transcript: `Speaker: Diabetic foot disease results from a combination of peripheral neuropathy, peripheral arterial disease and, often, impaired immune response, which together increase the risk of ulceration, infection and amputation.

Annual screening should assess sensation with a ten-gram monofilament, check pulses, and inspect skin integrity, stratifying patients into low, moderate and high risk categories that determine review frequency. Patients with neuropathy lose protective pain sensation, so injuries and pressure damage can go unnoticed until infection is established.

Any new ulcer, especially with surrounding cellulitis, discharge or systemic upset, should prompt urgent referral to the multidisciplinary diabetic foot team within twenty-four hours, since delay is strongly associated with worse outcomes and higher amputation rates.

Assessment includes wound swabs, plain X-ray to look for osteomyelitis, and vascular assessment with ankle-brachial pressure index or Doppler studies — remembering that arterial calcification can falsely elevate readings in long-standing diabetes, so toe pressures are preferred when this is suspected.

Off-loading pressure from the wound, using total contact casting or specialised footwear, is as important as antibiotics for healing plantar ulcers, yet is frequently under-used because patients find devices cumbersome.

Red flags for limb-threatening or life-threatening infection include crepitus, rapidly spreading discolouration, and severe pain out of proportion to signs, which warrant emergency surgical review rather than routine clinic pathways. Every amputation should trigger multidisciplinary review to identify preventable factors.`,
    ttsScript:
      "Diabetic foot disease results from a combination of peripheral neuropathy, peripheral arterial disease and, often, impaired immune response, which together increase the risk of ulceration, infection and amputation. Annual screening should assess sensation with a ten-gram monofilament, check pulses, and inspect skin integrity, stratifying patients into low, moderate and high risk categories that determine review frequency. Patients with neuropathy lose protective pain sensation, so injuries and pressure damage can go unnoticed until infection is established. Any new ulcer, especially with surrounding cellulitis, discharge or systemic upset, should prompt urgent referral to the multidisciplinary diabetic foot team within twenty-four hours, since delay is strongly associated with worse outcomes and higher amputation rates. Assessment includes wound swabs, plain X-ray to look for osteomyelitis, and vascular assessment with ankle-brachial pressure index or Doppler studies — remembering that arterial calcification can falsely elevate readings in long-standing diabetes, so toe pressures are preferred when this is suspected. Off-loading pressure from the wound, using total contact casting or specialised footwear, is as important as antibiotics for healing plantar ulcers, yet is frequently under-used because patients find devices cumbersome. Red flags for limb-threatening or life-threatening infection include crepitus, rapidly spreading discolouration, and severe pain out of proportion to signs, which warrant emergency surgical review rather than routine clinic pathways. Every amputation should trigger multidisciplinary review to identify preventable factors.",
    questions: [
      {
        id: "lis-fc5-2-q1",
        prompt: "Annual foot screening assesses sensation using:",
        options: ["A tuning fork only", "A 10-gram monofilament", "Blood pressure cuff", "Peak flow meter"],
        correctIndex: 1,
        explanation: "Assess sensation with a ten-gram monofilament.",
      },
      {
        id: "lis-fc5-2-q2",
        prompt: "A new ulcer with cellulitis and systemic upset should be referred:",
        options: ["Only at the next routine appointment", "After six weeks", "Urgently within 24 hours", "Never to the MDT"],
        correctIndex: 2,
        explanation: "Urgent referral to the multidisciplinary diabetic foot team within twenty-four hours.",
      },
      {
        id: "lis-fc5-2-q3",
        prompt: "Arterial calcification in long-standing diabetes can:",
        options: [
          "Always lower ABPI readings",
          "Have no effect on vascular assessment",
          "Falsely elevate ankle-brachial pressure index readings",
          "Prevent any vascular disease",
        ],
        correctIndex: 2,
        explanation: "Arterial calcification can falsely elevate ABPI readings.",
      },
      {
        id: "lis-fc5-2-q4",
        prompt: "When calcification is suspected, a preferred alternative assessment is:",
        options: ["Chest X-ray", "Toe pressures", "Peak flow", "Urine dipstick"],
        correctIndex: 1,
        explanation: "Toe pressures are preferred when calcification is suspected.",
      },
      {
        id: "lis-fc5-2-q5",
        prompt: "Off-loading pressure from a plantar ulcer is described as:",
        options: [
          "Unnecessary if antibiotics are given",
          "As important as antibiotics for healing",
          "Only relevant after amputation",
          "Contraindicated in diabetes",
        ],
        correctIndex: 1,
        explanation: "As important as antibiotics for healing plantar ulcers.",
      },
      {
        id: "lis-fc5-2-q6",
        prompt: "Red flags such as crepitus and disproportionate pain warrant:",
        options: [
          "Routine clinic booking",
          "Discharge with oral antibiotics only",
          "No further action",
          "Emergency surgical review",
        ],
        correctIndex: 3,
        explanation: "Warrant emergency surgical review rather than routine clinic pathways.",
      },
    ],
  },
];
