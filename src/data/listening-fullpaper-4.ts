import type { ListeningExtract } from "@/domain/types";

export const LISTENING_EXTRACTS_FULLPAPER_4: ListeningExtract[] = [
  {
    id: "lis-fa4-1",
    part: "A",
    title: "Suspected upper GI bleed consultation",
    specialty: "Gastroenterology",
    durationSec: 335,
    audioUrl: "/audio/lis-fa4-1.mp3",
    transcript: `Doctor: Good morning, Mr Davies. Can you tell me what happened overnight?
Patient: I woke at about three with black, tarry stools — twice. Then I vomited dark material that looked like coffee grounds.
Doctor: How much blood would you estimate overall?
Patient: Maybe a mugful of melaena, and one bowl of the vomit. I feel dizzy standing up.
Doctor: Any previous ulcers, reflux or liver disease?
Patient: I had a duodenal ulcer eight years ago. No known liver problems. I drink about twenty-eight units a week — mostly beer at weekends.
Doctor: Medications and painkillers?
Patient: Aspirin seventy-five milligrams daily since my stent three years ago, and ibuprofen four hundred milligrams most evenings for backache — maybe for a fortnight. Omeprazole twenty milligrams when I remember.
Doctor: Smoking?
Patient: Five roll-ups a day.
Doctor: Observations: pulse one hundred and eight, BP ninety-six over fifty-eight, SpO2 ninety-seven percent on air. Haemoglobin is eighty-two, urea twelve point four, INR one point one. I'll arrange urgent endoscopy after resuscitation — two large-bore cannulae, fluid and cross-match. Hold the aspirin and ibuprofen for now, start IV pantoprazole, and we'll risk-score with Blatchford.`,
    ttsScript:
      "Good morning, Mr Davies. Can you tell me what happened overnight? I woke at about three with black, tarry stools — twice. Then I vomited dark material that looked like coffee grounds. How much blood would you estimate overall? Maybe a mugful of melaena, and one bowl of the vomit. I feel dizzy standing up. Any previous ulcers, reflux or liver disease? I had a duodenal ulcer eight years ago. No known liver problems. I drink about twenty-eight units a week — mostly beer at weekends. Medications and painkillers? Aspirin seventy-five milligrams daily since my stent three years ago, and ibuprofen four hundred milligrams most evenings for backache — maybe for a fortnight. Omeprazole twenty milligrams when I remember. Smoking? Five roll-ups a day. Observations: pulse one hundred and eight, BP ninety-six over fifty-eight, SpO2 ninety-seven percent on air. Haemoglobin is eighty-two, urea twelve point four, INR one point one. I'll arrange urgent endoscopy after resuscitation — two large-bore cannulae, fluid and cross-match. Hold the aspirin and ibuprofen for now, start IV pantoprazole, and we'll risk-score with Blatchford.",
    questions: [
      {
        id: "lis-fa4-1-q1",
        prompt: "Time symptoms began overnight:",
        answer: "about 3 am",
        acceptedAnswers: ["about 3 am", "about three", "3 o'clock", "03:00", "about 3"],
        explanation: "Woke at about three with melaena.",
      },
      {
        id: "lis-fa4-1-q2",
        prompt: "Character of the vomit:",
        answer: "coffee grounds",
        acceptedAnswers: ["coffee grounds", "dark material like coffee grounds", "coffee-ground vomit"],
        explanation: "Vomited dark material that looked like coffee grounds.",
      },
      {
        id: "lis-fa4-1-q3",
        prompt: "Estimated melaena volume:",
        answer: "a mugful",
        acceptedAnswers: ["a mugful", "mugful", "one mugful"],
        explanation: "Maybe a mugful of melaena.",
      },
      {
        id: "lis-fa4-1-q4",
        prompt: "Previous ulcer history:",
        answer: "duodenal ulcer 8 years ago",
        acceptedAnswers: ["duodenal ulcer 8 years ago", "duodenal ulcer eight years ago", "duodenal ulcer"],
        explanation: "Duodenal ulcer eight years ago.",
      },
      {
        id: "lis-fa4-1-q5",
        prompt: "Weekly alcohol intake:",
        answer: "28 units",
        acceptedAnswers: ["28 units", "twenty-eight units", "28 units a week"],
        explanation: "About twenty-eight units a week.",
      },
      {
        id: "lis-fa4-1-q6",
        prompt: "Aspirin dose and indication context:",
        answer: "75 mg daily since stent",
        acceptedAnswers: [
          "75 mg daily since stent",
          "75mg daily since stent",
          "aspirin seventy-five milligrams daily since stent",
        ],
        explanation: "Aspirin seventy-five milligrams daily since stent three years ago.",
      },
      {
        id: "lis-fa4-1-q7",
        prompt: "Recent ibuprofen use:",
        answer: "400 mg most evenings for a fortnight",
        acceptedAnswers: [
          "400 mg most evenings for a fortnight",
          "400 mg evenings for two weeks",
          "four hundred milligrams most evenings — maybe for a fortnight",
        ],
        explanation: "Ibuprofen four hundred milligrams most evenings for about a fortnight.",
      },
      {
        id: "lis-fa4-1-q8",
        prompt: "Heart rate on examination:",
        answer: "108",
        acceptedAnswers: ["108", "one hundred and eight", "108 bpm"],
        explanation: "Pulse one hundred and eight.",
      },
      {
        id: "lis-fa4-1-q9",
        prompt: "Blood pressure:",
        answer: "96/58",
        acceptedAnswers: ["96/58", "96 over 58", "ninety-six over fifty-eight"],
        explanation: "BP ninety-six over fifty-eight.",
      },
      {
        id: "lis-fa4-1-q10",
        prompt: "Haemoglobin:",
        answer: "82",
        acceptedAnswers: ["82", "eighty-two", "82 g/L"],
        explanation: "Haemoglobin is eighty-two.",
      },
      {
        id: "lis-fa4-1-q11",
        prompt: "Urea result:",
        answer: "12.4",
        acceptedAnswers: ["12.4", "twelve point four", "12.4 mmol/L"],
        explanation: "Urea twelve point four.",
      },
      {
        id: "lis-fa4-1-q12",
        prompt: "Risk score tool mentioned:",
        answer: "Blatchford",
        acceptedAnswers: ["Blatchford", "Blatchford score", "Glasgow-Blatchford"],
        explanation: "We'll risk-score with Blatchford.",
      },
    ],
  },
  {
    id: "lis-fa4-2",
    part: "A",
    title: "Jaundice and biliary colic review",
    specialty: "Hepatology",
    durationSec: 340,
    audioUrl: "/audio/lis-fa4-2.mp3",
    transcript: `Doctor: Hello Mrs Khan. You've been referred with jaundice — when did you first notice the yellowing?
Patient: About five days ago. My urine went very dark two days before that, and my stools have been pale.
Doctor: Any pain?
Patient: Sharp pain under my right ribs after fatty meals for three months — lasting maybe half an hour. Last night it lasted four hours and I felt feverish.
Doctor: Fever measurement at home?
Patient: Thirty-eight point four. I took paracetamol.
Doctor: Past history and operations?
Patient: Type 2 diabetes on metformin. No operations. I'm allergic to penicillin — rash.
Doctor: Alcohol and travel?
Patient: Hardly any alcohol. No recent travel. Weight down about four kilograms in two months without trying.
Doctor: Medicines?
Patient: Metformin one gram twice daily, and I started a herbal weight tea six weeks ago — stopped yesterday.
Doctor: Bloods today: bilirubin eighty-six, ALT two hundred and ten, ALP four hundred and sixty, CRP ninety-two, WCC fourteen point eight. Ultrasound shows a dilated common bile duct and gallstones in the gallbladder. We'll keep you nil by mouth, give IV fluids and co-amoxiclav after cultures, and refer for urgent ERCP — likely a stone in the duct with cholangitis.`,
    ttsScript:
      "Hello Mrs Khan. You've been referred with jaundice — when did you first notice the yellowing? About five days ago. My urine went very dark two days before that, and my stools have been pale. Any pain? Sharp pain under my right ribs after fatty meals for three months — lasting maybe half an hour. Last night it lasted four hours and I felt feverish. Fever measurement at home? Thirty-eight point four. I took paracetamol. Past history and operations? Type 2 diabetes on metformin. No operations. I'm allergic to penicillin — rash. Alcohol and travel? Hardly any alcohol. No recent travel. Weight down about four kilograms in two months without trying. Medicines? Metformin one gram twice daily, and I started a herbal weight tea six weeks ago — stopped yesterday. Bloods today: bilirubin eighty-six, ALT two hundred and ten, ALP four hundred and sixty, CRP ninety-two, WCC fourteen point eight. Ultrasound shows a dilated common bile duct and gallstones in the gallbladder. We'll keep you nil by mouth, give IV fluids and co-amoxiclav after cultures, and refer for urgent ERCP — likely a stone in the duct with cholangitis.",
    questions: [
      {
        id: "lis-fa4-2-q1",
        prompt: "Duration of visible jaundice:",
        answer: "5 days",
        acceptedAnswers: ["5 days", "five days", "about five days"],
        explanation: "Yellowing about five days ago.",
      },
      {
        id: "lis-fa4-2-q2",
        prompt: "Stool colour change:",
        answer: "pale",
        acceptedAnswers: ["pale", "pale stools", "stools have been pale"],
        explanation: "Stools have been pale.",
      },
      {
        id: "lis-fa4-2-q3",
        prompt: "Typical biliary pain duration previously:",
        answer: "about 30 minutes",
        acceptedAnswers: ["about 30 minutes", "half an hour", "maybe half an hour"],
        explanation: "Pain lasting maybe half an hour after fatty meals.",
      },
      {
        id: "lis-fa4-2-q4",
        prompt: "Duration of last night's pain:",
        answer: "4 hours",
        acceptedAnswers: ["4 hours", "four hours"],
        explanation: "Last night it lasted four hours.",
      },
      {
        id: "lis-fa4-2-q5",
        prompt: "Home temperature:",
        answer: "38.4°C",
        acceptedAnswers: ["38.4°C", "38.4", "thirty-eight point four"],
        explanation: "Thirty-eight point four.",
      },
      {
        id: "lis-fa4-2-q6",
        prompt: "Drug allergy:",
        answer: "penicillin — rash",
        acceptedAnswers: ["penicillin — rash", "penicillin rash", "penicillin"],
        explanation: "Allergic to penicillin — rash.",
      },
      {
        id: "lis-fa4-2-q7",
        prompt: "Unintentional weight loss:",
        answer: "4 kg in 2 months",
        acceptedAnswers: ["4 kg in 2 months", "four kilograms in two months", "4 kilograms in two months"],
        explanation: "Weight down about four kilograms in two months.",
      },
      {
        id: "lis-fa4-2-q8",
        prompt: "Metformin dose:",
        answer: "1 g twice daily",
        acceptedAnswers: ["1 g twice daily", "1g BD", "one gram twice daily"],
        explanation: "Metformin one gram twice daily.",
      },
      {
        id: "lis-fa4-2-q9",
        prompt: "Bilirubin:",
        answer: "86",
        acceptedAnswers: ["86", "eighty-six", "86 µmol/L"],
        explanation: "Bilirubin eighty-six.",
      },
      {
        id: "lis-fa4-2-q10",
        prompt: "ALP:",
        answer: "460",
        acceptedAnswers: ["460", "four hundred and sixty"],
        explanation: "ALP four hundred and sixty.",
      },
      {
        id: "lis-fa4-2-q11",
        prompt: "Ultrasound finding in the duct:",
        answer: "dilated common bile duct",
        acceptedAnswers: ["dilated common bile duct", "dilated CBD", "dilated bile duct"],
        explanation: "Ultrasound shows a dilated common bile duct.",
      },
      {
        id: "lis-fa4-2-q12",
        prompt: "Urgent procedure planned:",
        answer: "ERCP",
        acceptedAnswers: ["ERCP", "urgent ERCP"],
        explanation: "Refer for urgent ERCP.",
      },
    ],
  },
  {
    id: "lis-fb4-1",
    part: "B",
    title: "Ward handover: variceal bleed",
    specialty: "Hepatology",
    durationSec: 75,
    audioUrl: "/audio/lis-fb4-1.mp3",
    transcript: `Medical registrar: Bed six is a known cirrhotic with haematemesis. Airway is clear, two large-bore cannulae are in, and terlipressin has been started. Keep him nil by mouth, correct coagulopathy as advised by haematology, and escalate early to the bleed rota if there is further vomiting of fresh blood. Antibiotics for infection prophylaxis are already written — do not omit them in variceal haemorrhage.`,
    ttsScript:
      "Bed six is a known cirrhotic with haematemesis. Airway is clear, two large-bore cannulae are in, and terlipressin has been started. Keep him nil by mouth, correct coagulopathy as advised by haematology, and escalate early to the bleed rota if there is further vomiting of fresh blood. Antibiotics for infection prophylaxis are already written — do not omit them in variceal haemorrhage.",
    questions: [
      {
        id: "lis-fb4-1-q1",
        prompt: "The vasoactive drug already started is:",
        options: ["Terlipressin", "Digoxin", "Furosemide infusion only", "Oral iron"],
        correctIndex: 0,
        explanation: "Terlipressin has been started.",
      },
    ],
  },
  {
    id: "lis-fb4-2",
    part: "B",
    title: "Handover: post-ERCP pancreatitis watch",
    specialty: "Gastroenterology",
    durationSec: 70,
    audioUrl: "/audio/lis-fb4-2.mp3",
    transcript: `Gastroenterology SHO: Mrs Patel had ERCP with sphincterotomy this afternoon. She must stay overnight with IV fluids. Check amylase or lipase if she develops severe epigastric pain radiating to the back, and keep her nil by mouth until reviewed. Call the endoscopist on-call if fever, rising CRP and peritonism suggest perforation rather than simple pancreatitis.`,
    ttsScript:
      "Mrs Patel had ERCP with sphincterotomy this afternoon. She must stay overnight with IV fluids. Check amylase or lipase if she develops severe epigastric pain radiating to the back, and keep her nil by mouth until reviewed. Call the endoscopist on-call if fever, rising CRP and peritonism suggest perforation rather than simple pancreatitis.",
    questions: [
      {
        id: "lis-fb4-2-q1",
        prompt: "Enzyme testing is indicated if she develops:",
        options: [
          "Severe epigastric pain radiating to the back",
          "Mild thirst only",
          "Improved appetite alone",
          "Normal observations with no pain",
        ],
        correctIndex: 0,
        explanation: "Check amylase or lipase if severe epigastric pain radiates to the back.",
      },
    ],
  },
  {
    id: "lis-fb4-3",
    part: "B",
    title: "Handover: decompensated cirrhosis ascites",
    specialty: "Hepatology",
    durationSec: 72,
    audioUrl: "/audio/lis-fb4-3.mp3",
    transcript: `Consultant hepatologist: For tense ascites, therapeutic paracentesis with albumin cover is preferred over repeated large-volume taps without albumin. Send ascitic fluid for neutrophils — treat spontaneous bacterial peritonitis promptly if the count is two hundred and fifty or above. Spironolactone is first-line diuretic when renal function allows; stop diuretics if creatinine climbs or sodium falls sharply.`,
    ttsScript:
      "For tense ascites, therapeutic paracentesis with albumin cover is preferred over repeated large-volume taps without albumin. Send ascitic fluid for neutrophils — treat spontaneous bacterial peritonitis promptly if the count is two hundred and fifty or above. Spironolactone is first-line diuretic when renal function allows; stop diuretics if creatinine climbs or sodium falls sharply.",
    questions: [
      {
        id: "lis-fb4-3-q1",
        prompt: "SBP treatment threshold for ascitic neutrophils is:",
        options: ["≥250", "≥50", "≥10 only", "Any count below 100"],
        correctIndex: 0,
        explanation: "Treat SBP if neutrophil count is two hundred and fifty or above.",
      },
    ],
  },
  {
    id: "lis-fb4-4",
    part: "B",
    title: "Ward brief: hepatic encephalopathy",
    specialty: "Hepatology",
    durationSec: 68,
    audioUrl: "/audio/lis-fb4-4.mp3",
    transcript: `Ward sister: Mr Okafor is day two after a variceal bleed and is becoming drowsy with a flap. Give lactulose aiming for two to three soft stools daily, look for infection and constipation as triggers, and avoid sedation unless discussed with the registrar. CT head is not first-line for typical encephalopathy when there is no focal neurology or trauma history.`,
    ttsScript:
      "Mr Okafor is day two after a variceal bleed and is becoming drowsy with a flap. Give lactulose aiming for two to three soft stools daily, look for infection and constipation as triggers, and avoid sedation unless discussed with the registrar. CT head is not first-line for typical encephalopathy when there is no focal neurology or trauma history.",
    questions: [
      {
        id: "lis-fb4-4-q1",
        prompt: "Lactulose stool target stated is:",
        options: ["2–3 soft stools daily", "No bowel motions", "Ten watery stools mandatory", "One hard stool weekly"],
        correctIndex: 0,
        explanation: "Aiming for two to three soft stools daily.",
      },
    ],
  },
  {
    id: "lis-fb4-5",
    part: "B",
    title: "Theatre list: acute cholecystitis",
    specialty: "General surgery",
    durationSec: 66,
    audioUrl: "/audio/lis-fb4-5.mp3",
    transcript: `Surgical registrar: Bed three has acute calculous cholecystitis — antibiotics are started and she is booked for laparoscopic cholecystectomy on tomorrow's CEPOD list if inflammatory markers improve overnight. Keep her nil by mouth from midnight, TED stockings on, and warn the anaesthetist about her metformin — hold on the morning of surgery. If she spikes again with rising bilirubin, arrange MRCP before theatre.`,
    ttsScript:
      "Bed three has acute calculous cholecystitis — antibiotics are started and she is booked for laparoscopic cholecystectomy on tomorrow's CEPOD list if inflammatory markers improve overnight. Keep her nil by mouth from midnight, TED stockings on, and warn the anaesthetist about her metformin — hold on the morning of surgery. If she spikes again with rising bilirubin, arrange MRCP before theatre.",
    questions: [
      {
        id: "lis-fb4-5-q1",
        prompt: "If fever recurs with rising bilirubin, arrange:",
        options: ["MRCP before theatre", "Immediate discharge", "No imaging ever", "Routine dental X-ray only"],
        correctIndex: 0,
        explanation: "Arrange MRCP before theatre if she spikes with rising bilirubin.",
      },
    ],
  },
  {
    id: "lis-fb4-6",
    part: "B",
    title: "Handover: IBD flare observations",
    specialty: "Gastroenterology",
    durationSec: 70,
    audioUrl: "/audio/lis-fb4-6.mp3",
    transcript: `IBD nurse specialist: For severe ulcerative colitis flares, stool chart every stool, daily FBC and CRP, and rigid assessment for toxic dilatation if pain worsens or the abdomen becomes silent. Intravenous hydrocortisone is already running — do not start opioids for abdominal pain without senior review, and involve surgery early if there is no clear response by day three.`,
    ttsScript:
      "For severe ulcerative colitis flares, stool chart every stool, daily FBC and CRP, and rigid assessment for toxic dilatation if pain worsens or the abdomen becomes silent. Intravenous hydrocortisone is already running — do not start opioids for abdominal pain without senior review, and involve surgery early if there is no clear response by day three.",
    questions: [
      {
        id: "lis-fb4-6-q1",
        prompt: "Surgical involvement is urged if no clear response by:",
        options: ["Day three", "Day twenty-one only", "After discharge", "Never in UC"],
        correctIndex: 0,
        explanation: "Involve surgery early if no clear response by day three.",
      },
    ],
  },
  {
    id: "lis-fc4-1",
    part: "C",
    title: "Talk: managing acute upper GI bleeding",
    specialty: "Gastroenterology",
    durationSec: 290,
    audioUrl: "/audio/lis-fc4-1.mp3",
    transcript: `Speaker: Acute upper gastrointestinal bleeding remains a common medical emergency. Resuscitation comes before the endoscope: protect the airway if consciousness is impaired, obtain large-bore intravenous access, and restore circulating volume with crystalloid while arranging cross-matched blood. Restrictive transfusion thresholds — typically haemoglobin of seventy grams per litre in stable patients without ischaemic heart disease — improve outcomes compared with liberal transfusion.

Risk stratification with the Glasgow-Blatchford score helps decide who needs admission and urgent endoscopy. Rockall scoring after endoscopy predicts rebleeding and death. Intravenous proton-pump inhibitor therapy is standard after endoscopic haemostasis for peptic ulcer bleeding; starting PPI before endoscopy is common practice though the evidence for pre-endoscopic use is mixed.

Variceal haemorrhage requires a different pathway: vasoactive drugs such as terlipressin, prophylactic antibiotics, and early endoscopy with band ligation. Balloon tamponade is a bridge when bleeding is torrential and endoscopy is delayed. Transjugular intrahepatic portosystemic shunt is considered for refractory variceal bleeding in selected patients.

Aftercare includes Helicobacter pylori testing in ulcer disease, careful restart of antiplatelets when cardiovascular risk outweighs rebleed risk, and alcohol support services for those with liver disease. Teams that rehearse bleed pathways and audit door-to-endoscopy times reduce preventable deaths.`,
    ttsScript:
      "Acute upper gastrointestinal bleeding remains a common medical emergency. Resuscitation comes before the endoscope: protect the airway if consciousness is impaired, obtain large-bore intravenous access, and restore circulating volume with crystalloid while arranging cross-matched blood. Restrictive transfusion thresholds — typically haemoglobin of seventy grams per litre in stable patients without ischaemic heart disease — improve outcomes compared with liberal transfusion. Risk stratification with the Glasgow-Blatchford score helps decide who needs admission and urgent endoscopy. Rockall scoring after endoscopy predicts rebleeding and death. Intravenous proton-pump inhibitor therapy is standard after endoscopic haemostasis for peptic ulcer bleeding; starting PPI before endoscopy is common practice though the evidence for pre-endoscopic use is mixed. Variceal haemorrhage requires a different pathway: vasoactive drugs such as terlipressin, prophylactic antibiotics, and early endoscopy with band ligation. Balloon tamponade is a bridge when bleeding is torrential and endoscopy is delayed. Transjugular intrahepatic portosystemic shunt is considered for refractory variceal bleeding in selected patients. Aftercare includes Helicobacter pylori testing in ulcer disease, careful restart of antiplatelets when cardiovascular risk outweighs rebleed risk, and alcohol support services for those with liver disease. Teams that rehearse bleed pathways and audit door-to-endoscopy times reduce preventable deaths.",
    questions: [
      {
        id: "lis-fc4-1-q1",
        prompt: "Resuscitation should occur:",
        options: ["Before the endoscope", "Only after discharge", "Instead of IV access", "After Rockall scoring alone"],
        correctIndex: 0,
        explanation: "Resuscitation comes before the endoscope.",
      },
      {
        id: "lis-fc4-1-q2",
        prompt: "Typical restrictive transfusion threshold mentioned for stable patients without IHD:",
        options: ["70 g/L", "120 g/L for all", "40 g/L only", "No threshold discussed"],
        correctIndex: 0,
        explanation: "Typically haemoglobin of seventy grams per litre in stable patients without IHD.",
      },
      {
        id: "lis-fc4-1-q3",
        prompt: "Glasgow-Blatchford scoring helps decide:",
        options: [
          "Who needs admission and urgent endoscopy",
          "Theatre wallpaper colour",
          "Only outpatient diet sheets",
          "Whether to skip cannulae",
        ],
        correctIndex: 0,
        explanation: "Helps decide who needs admission and urgent endoscopy.",
      },
      {
        id: "lis-fc4-1-q4",
        prompt: "Variceal pathway includes:",
        options: [
          "Terlipressin, antibiotics and early banding",
          "NSAID loading doses",
          "Routine home discharge without review",
          "Stopping all IV access",
        ],
        correctIndex: 0,
        explanation: "Vasoactive drugs such as terlipressin, prophylactic antibiotics, and band ligation.",
      },
      {
        id: "lis-fc4-1-q5",
        prompt: "Balloon tamponade is described as:",
        options: [
          "A bridge when bleeding is torrential and endoscopy is delayed",
          "First-line for every dyspepsia",
          "A long-term outpatient device",
          "Contraindicated in all bleeds",
        ],
        correctIndex: 0,
        explanation: "Bridge when bleeding is torrential and endoscopy is delayed.",
      },
      {
        id: "lis-fc4-1-q6",
        prompt: "Aftercare in ulcer disease should include:",
        options: [
          "Helicobacter pylori testing",
          "Lifelong high-dose ibuprofen",
          "Avoiding any PPI discussion",
          "Ignoring antiplatelet decisions",
        ],
        correctIndex: 0,
        explanation: "Aftercare includes Helicobacter pylori testing in ulcer disease.",
      },
    ],
  },
  {
    id: "lis-fc4-2",
    part: "C",
    title: "Talk: recognising acute cholangitis",
    specialty: "Hepatobiliary medicine",
    durationSec: 285,
    audioUrl: "/audio/lis-fc4-2.mp3",
    transcript: `Speaker: Acute ascending cholangitis is infection of an obstructed biliary tree and can progress rapidly to septic shock. Classical Charcot's triad — right-upper-quadrant pain, fever and jaundice — is helpful when present, but older or immunocompromised patients may lack one or more features. Reynolds' pentad adds confusion and hypotension and signals severe disease.

Blood cultures should precede antibiotics whenever possible without delaying treatment in the shocked patient. Imaging typically starts with ultrasound to look for duct dilatation and stones; CT or MRCP clarifies level and cause of obstruction. ERCP remains the definitive therapy for ductal decompression in most centres, with percutaneous drainage when ERCP fails or is unavailable.

Antibiotic choice should cover enteric gram-negatives and anaerobes according to local guidelines, with early source control. Delay to biliary drainage is a key driver of mortality in severe cholangitis. After the acute episode, plan definitive management of gallstones — often cholecystectomy once sepsis settles — to prevent recurrence.

Document allergy status carefully; many patients report penicillin allergy that needs clarification before choosing beta-lactams. Multidisciplinary discussion between gastroenterology, surgery and microbiology improves timing of intervention on busy CEPOD lists.`,
    ttsScript:
      "Acute ascending cholangitis is infection of an obstructed biliary tree and can progress rapidly to septic shock. Classical Charcot's triad — right-upper-quadrant pain, fever and jaundice — is helpful when present, but older or immunocompromised patients may lack one or more features. Reynolds' pentad adds confusion and hypotension and signals severe disease. Blood cultures should precede antibiotics whenever possible without delaying treatment in the shocked patient. Imaging typically starts with ultrasound to look for duct dilatation and stones; CT or MRCP clarifies level and cause of obstruction. ERCP remains the definitive therapy for ductal decompression in most centres, with percutaneous drainage when ERCP fails or is unavailable. Antibiotic choice should cover enteric gram-negatives and anaerobes according to local guidelines, with early source control. Delay to biliary drainage is a key driver of mortality in severe cholangitis. After the acute episode, plan definitive management of gallstones — often cholecystectomy once sepsis settles — to prevent recurrence. Document allergy status carefully; many patients report penicillin allergy that needs clarification before choosing beta-lactams. Multidisciplinary discussion between gastroenterology, surgery and microbiology improves timing of intervention on busy CEPOD lists.",
    questions: [
      {
        id: "lis-fc4-2-q1",
        prompt: "Charcot's triad includes:",
        options: [
          "RUQ pain, fever and jaundice",
          "Cough, rash and tinnitus only",
          "Ankle oedema alone",
          "Normal LFTs always",
        ],
        correctIndex: 0,
        explanation: "Right-upper-quadrant pain, fever and jaundice.",
      },
      {
        id: "lis-fc4-2-q2",
        prompt: "Reynolds' pentad adds:",
        options: ["Confusion and hypotension", "Hiccups only", "Hair loss", "Normal blood pressure always"],
        correctIndex: 0,
        explanation: "Adds confusion and hypotension and signals severe disease.",
      },
      {
        id: "lis-fc4-2-q3",
        prompt: "First-line imaging typically starts with:",
        options: ["Ultrasound", "Bone scan only", "Dental panoramic film", "No imaging"],
        correctIndex: 0,
        explanation: "Imaging typically starts with ultrasound.",
      },
      {
        id: "lis-fc4-2-q4",
        prompt: "Definitive decompression in most centres is:",
        options: ["ERCP", "Oral laxatives alone", "Watchful waiting indefinitely", "Outpatient massage"],
        correctIndex: 0,
        explanation: "ERCP remains the definitive therapy for ductal decompression in most centres.",
      },
      {
        id: "lis-fc4-2-q5",
        prompt: "A key mortality driver in severe cholangitis is:",
        options: ["Delay to biliary drainage", "Early blood cultures", "Documenting allergies", "MDT discussion"],
        correctIndex: 0,
        explanation: "Delay to biliary drainage is a key driver of mortality.",
      },
      {
        id: "lis-fc4-2-q6",
        prompt: "After sepsis settles, gallstones often need:",
        options: [
          "Cholecystectomy to prevent recurrence",
          "Lifelong ERCP weekly",
          "No further plan",
          "High-dose NSAIDs only",
        ],
        correctIndex: 0,
        explanation: "Often cholecystectomy once sepsis settles to prevent recurrence.",
      },
    ],
  },
];
