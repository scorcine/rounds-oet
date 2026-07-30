import type { ReadingPassage } from "@/domain/types";

export const READING_PASSAGES_EXTRA: ReadingPassage[] = [
  {
    id: "read-a-2",
    part: "A",
    title: "Expeditious: pre-op surgery pack",
    specialty: "Surgery",
    timeLimitSec: 900,
    text: `DOCUMENT 1 — Referral
Ms Priya Nair, 44, symptomatic gallstones. USS: multiple calculi, thin-walled gallbladder. Booked for elective laparoscopic cholecystectomy.

DOCUMENT 2 — Pre-op bloods
Hb 132, platelets 240, INR 1.0, LFTs normal. Group & save done.

DOCUMENT 3 — Medication
No anticoagulants. Takes lansoprazole 30 mg for reflux.

DOCUMENT 4 — Day-surgery policy
Arrive 07:00. Clear fluids until 2 hours pre-op. VTE risk assessment on admission. Same-day discharge if pain controlled and voiding.`,
    questions: [
      {
        id: "read-a-2-q1",
        prompt: "Planned procedure?",
        options: ["Open cholecystectomy", "Laparoscopic cholecystectomy", "ERCP", "Hernia repair"],
        correctIndex: 1,
        explanation: "Elective laparoscopic cholecystectomy.",
      },
      {
        id: "read-a-2-q2",
        prompt: "Clear fluids allowed until:",
        options: ["Midnight", "6 hours pre-op", "2 hours pre-op", "Induction"],
        correctIndex: 2,
        explanation: "Until 2 hours pre-op.",
      },
    ],
  },
  {
    id: "read-b-2",
    part: "B",
    title: "ED protocol: sepsis six",
    specialty: "ED",
    timeLimitSec: 180,
    text: `Sepsis Six (complete within 1 hour of recognition): oxygen to target saturations; blood cultures; IV antibiotics; IV fluid challenge; measure lactate; monitor urine output. Escalate to critical care if lactate remains >4 mmol/L after initial resuscitation or if systolic BP <90 despite fluids.`,
    questions: [
      {
        id: "read-b-2-q1",
        prompt: "Time target to complete Sepsis Six?",
        options: ["15 minutes", "1 hour", "3 hours", "6 hours"],
        correctIndex: 1,
        explanation: "Within 1 hour of recognition.",
      },
      {
        id: "read-b-2-q2",
        prompt: "Escalate if lactate remains above:",
        options: ["1 mmol/L", "2 mmol/L", "4 mmol/L", "10 mmol/L"],
        correctIndex: 2,
        explanation: "Lactate >4 after resuscitation.",
      },
    ],
  },
  {
    id: "read-c-2",
    part: "C",
    title: "Article: day-case anaesthesia trends",
    specialty: "Anesthesia",
    timeLimitSec: 600,
    text: `Day-case pathways increasingly include procedures once thought to require overnight stay. Success depends less on the operation alone than on patient selection, multimodal analgesia, and clear discharge criteria. Nausea remains a leading cause of unplanned admission; prophylactic antiemetics tailored to risk scores reduce this. Opioid-sparing techniques improve mobilisation but require ward staff training. The author’s view is that expansion should be driven by outcome data, not theatre efficiency metrics alone.`,
    questions: [
      {
        id: "read-c-2-q1",
        prompt: "A leading cause of unplanned admission is:",
        options: ["Hypertension", "Nausea", "Late starts", "IT failures"],
        correctIndex: 1,
        explanation: "Nausea remains a leading cause.",
      },
      {
        id: "read-c-2-q2",
        prompt: "The author argues expansion should be driven by:",
        options: [
          "Theatre efficiency only",
          "Outcome data",
          "Patient demand surveys alone",
          "Surgeon preference",
        ],
        correctIndex: 1,
        explanation: "Outcome data, not efficiency metrics alone.",
      },
    ],
  },
];
