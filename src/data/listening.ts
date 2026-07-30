import type { ListeningExtract } from "@/domain/types";
import { LISTENING_EXTRACTS_EXTRA } from "./listening-extra";

const LISTENING_EXTRACTS_BASE: ListeningExtract[] = [
  {
    id: "lis-a-1",
    part: "A",
    title: "Chest pain consultation",
    specialty: "Cardiology",
    durationSec: 300,
    transcript: `Doctor: Good morning, Mr Patel. What brings you in today?
Patient: I've had this pressure in my chest since yesterday evening. It came on while I was walking up the stairs at home.
Doctor: Can you describe the pain for me?
Patient: It's like a heavy weight, right in the centre. It didn't go down my arm, but I felt a bit sick and sweaty.
Doctor: How long did it last?
Patient: About twenty minutes. I sat down and it eased, but I've felt tired since.
Doctor: Any previous heart problems?
Patient: No, but my father had a heart attack at sixty. I take tablets for blood pressure — amlodipine five milligrams.
Doctor: Smoking?
Patient: I quit three years ago. I used to smoke ten a day.
Doctor: I'd like to do an ECG and some blood tests today, including troponin. We'll also check your cholesterol.`,
    ttsScript:
      "Good morning, Mr Patel. What brings you in today? I've had this pressure in my chest since yesterday evening. It came on while I was walking up the stairs at home. Can you describe the pain for me? It's like a heavy weight, right in the centre. It didn't go down my arm, but I felt a bit sick and sweaty. How long did it last? About twenty minutes. I sat down and it eased, but I've felt tired since. Any previous heart problems? No, but my father had a heart attack at sixty. I take tablets for blood pressure — amlodipine five milligrams. Smoking? I quit three years ago. I used to smoke ten a day. I'd like to do an ECG and some blood tests today, including troponin. We'll also check your cholesterol.",
    questions: [
      {
        id: "q1",
        prompt: "When did the patient's symptoms begin?",
        answer: "yesterday evening",
        acceptedAnswers: ["yesterday evening", "last night", "yesterday"],
        explanation: "He reports pressure in the chest since yesterday evening.",
      },
      {
        id: "q2",
        prompt: "What triggered the pain?",
        answer: "walking up stairs",
        acceptedAnswers: ["stairs", "walking upstairs", "walking up the stairs"],
        explanation: "Onset while walking up the stairs at home.",
      },
      {
        id: "q3",
        prompt: "How long did the episode last?",
        answer: "20 minutes",
        acceptedAnswers: ["twenty minutes", "20 mins", "about 20 minutes"],
        explanation: "Patient says about twenty minutes.",
      },
      {
        id: "q4",
        prompt: "Current antihypertensive medication and dose?",
        answer: "amlodipine 5 mg",
        acceptedAnswers: ["amlodipine 5mg", "amlodipine five milligrams", "amlodipine 5 milligrams"],
        explanation: "Amlodipine five milligrams daily.",
      },
      {
        id: "q5",
        prompt: "Which cardiac biomarker does the doctor plan to check?",
        options: ["BNP", "Troponin", "D-dimer", "CRP"],
        correctIndex: 1,
        explanation: "Doctor mentions troponin blood tests.",
      },
    ],
  },
  {
    id: "lis-b-1",
    part: "B",
    title: "Handover: post-op hip replacement",
    specialty: "Orthopaedics",
    durationSec: 90,
    transcript: `Nurse coordinator: Just a quick update on bed 4, Mrs Chen, day one after right total hip replacement. She was comfortable overnight on PRN oxycodone. Neurovascular observations of the right leg are intact. Hb this morning is 98. Physio wants her standing with a frame this afternoon. Watch for dizziness on first mobilisation — she had a vasovagal episode yesterday evening after standing. VTE prophylaxis is enoxaparin 40 milligrams subcutaneously daily. Wound is dry. She's nil by mouth until speech therapy reviews her swallow at 11 because of mild choking on water last night — likely related to residual anaesthetic effects, but we need clearance.`,
    ttsScript:
      "Just a quick update on bed 4, Mrs Chen, day one after right total hip replacement. She was comfortable overnight on PRN oxycodone. Neurovascular observations of the right leg are intact. Hb this morning is 98. Physio wants her standing with a frame this afternoon. Watch for dizziness on first mobilisation — she had a vasovagal episode yesterday evening after standing. VTE prophylaxis is enoxaparin 40 milligrams subcutaneously daily. Wound is dry. She's nil by mouth until speech therapy reviews her swallow at 11 because of mild choking on water last night — likely related to residual anaesthetic effects, but we need clearance.",
    questions: [
      {
        id: "q1",
        prompt: "The main reason Mrs Chen is nil by mouth is:",
        options: [
          "Pending blood transfusion",
          "Awaiting swallow assessment",
          "Preparing for theatre",
          "Nausea after opioids",
        ],
        correctIndex: 1,
        explanation: "NBM until speech therapy reviews swallow after choking on water.",
      },
      {
        id: "q2",
        prompt: "What complication occurred on first standing yesterday?",
        options: ["Wound bleed", "Vasovagal episode", "Dislocation", "Desaturation"],
        correctIndex: 1,
        explanation: "Vasovagal episode after standing yesterday evening.",
      },
    ],
  },
  {
    id: "lis-c-1",
    part: "C",
    title: "Talk: antibiotic stewardship in ED",
    specialty: "Infectious disease",
    durationSec: 240,
    transcript: `Speaker: Today I'll outline three practical steps for antibiotic stewardship in the emergency department. First, obtain cultures before the first dose whenever sepsis is suspected — but do not delay antibiotics more than one hour in septic shock. Second, use local guidelines for community-acquired pneumonia; our audit showed 38% of patients received broader cover than needed, mainly dual antipseudomonal therapy without risk factors. Third, set an automatic 48-hour review for IV antibiotics started in ED. Early IV-to-oral switch reduces line infections and shortens stays. Questions about penicillin allergy labels are crucial: many listed allergies are intolerance. Where safe, deliberate challenge pathways can reclaim first-line agents.`,
    ttsScript:
      "Today I'll outline three practical steps for antibiotic stewardship in the emergency department. First, obtain cultures before the first dose whenever sepsis is suspected — but do not delay antibiotics more than one hour in septic shock. Second, use local guidelines for community-acquired pneumonia; our audit showed 38% of patients received broader cover than needed, mainly dual antipseudomonal therapy without risk factors. Third, set an automatic 48-hour review for IV antibiotics started in ED. Early IV-to-oral switch reduces line infections and shortens stays. Questions about penicillin allergy labels are crucial: many listed allergies are intolerance. Where safe, deliberate challenge pathways can reclaim first-line agents.",
    questions: [
      {
        id: "q1",
        prompt: "In septic shock, antibiotics should start within:",
        options: ["15 minutes", "1 hour", "3 hours", "6 hours"],
        correctIndex: 1,
        explanation: "Do not delay antibiotics more than one hour in septic shock.",
      },
      {
        id: "q2",
        prompt: "What percentage received unnecessarily broad pneumonia cover?",
        options: ["18%", "28%", "38%", "48%"],
        correctIndex: 2,
        explanation: "Audit showed 38%.",
      },
      {
        id: "q3",
        prompt: "IV antibiotics started in ED should be reviewed at:",
        options: ["12 hours", "24 hours", "48 hours", "72 hours"],
        correctIndex: 2,
        explanation: "Automatic 48-hour review recommended.",
      },
    ],
  },
];

export const LISTENING_EXTRACTS: ListeningExtract[] = [
  ...LISTENING_EXTRACTS_BASE,
  ...LISTENING_EXTRACTS_EXTRA,
];
