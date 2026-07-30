import type { ListeningExtract } from "@/domain/types";

/** Additional Listening bank — Phase 4 expansion. */
export const LISTENING_EXTRACTS_EXTRA: ListeningExtract[] = [
  {
    id: "lis-a-2",
    part: "A",
    title: "Ankle injury in ED",
    specialty: "ED",
    durationSec: 280,
    transcript: `Doctor: What happened to your ankle?
Patient: I twisted it playing football last night. I landed awkwardly and heard a pop.
Doctor: Can you weight-bear?
Patient: Not really — I've been hopping. It's swollen on the outer side.
Doctor: Any numbness or pins and needles?
Patient: No. The pain is sharp when I move it.
Doctor: Have you had ankle injuries before?
Patient: A sprain two years ago on the same side.
Doctor: I'll examine you and arrange an X-ray under the Ottawa rules. Meanwhile keep it elevated and we'll give you analgesia.`,
    ttsScript:
      "What happened to your ankle? I twisted it playing football last night. I landed awkwardly and heard a pop. Can you weight-bear? Not really — I've been hopping. It's swollen on the outer side. Any numbness or pins and needles? No. The pain is sharp when I move it. Have you had ankle injuries before? A sprain two years ago on the same side. I'll examine you and arrange an X-ray under the Ottawa rules. Meanwhile keep it elevated and we'll give you analgesia.",
    questions: [
      {
        id: "lis-a-2-q1",
        prompt: "When did the injury occur?",
        answer: "last night",
        acceptedAnswers: ["last night", "yesterday evening", "playing football last night"],
        explanation: "Twisted it playing football last night.",
      },
      {
        id: "lis-a-2-q2",
        prompt: "Can the patient fully weight-bear?",
        options: ["Yes", "No", "Only outdoors", "Not discussed"],
        correctIndex: 1,
        explanation: "Not really — hopping.",
      },
      {
        id: "lis-a-2-q3",
        prompt: "Which imaging decision tool is mentioned?",
        answer: "Ottawa rules",
        acceptedAnswers: ["ottawa", "ottawa rules", "Ottawa ankle rules"],
        explanation: "X-ray under the Ottawa rules.",
      },
    ],
  },
  {
    id: "lis-b-2",
    part: "B",
    title: "Pre-op anaesthesia briefing",
    specialty: "Anesthesia",
    durationSec: 100,
    transcript: `Anaesthetist: Quick briefing for tomorrow's list. First patient is Mr Adeyemi for laparoscopic cholecystectomy. Mallampati 2, BMI 31, reflux on omeprazole. Treat as raised aspiration risk — RSI with cricoid. Second is Mrs Bloom, spinal for knee arthroscopy; stop apixaban as per protocol — last dose was yesterday morning. Any airway alerts go on the board by 07:30.`,
    ttsScript:
      "Quick briefing for tomorrow's list. First patient is Mr Adeyemi for laparoscopic cholecystectomy. Mallampati 2, BMI 31, reflux on omeprazole. Treat as raised aspiration risk — RSI with cricoid. Second is Mrs Bloom, spinal for knee arthroscopy; stop apixaban as per protocol — last dose was yesterday morning. Any airway alerts go on the board by 07:30.",
    questions: [
      {
        id: "lis-b-2-q1",
        prompt: "Why is RSI planned for Mr Adeyemi?",
        options: [
          "Known difficult intubation only",
          "Raised aspiration risk",
          "Patient preference",
          "Spinal anaesthesia failed",
        ],
        correctIndex: 1,
        explanation: "Reflux / aspiration risk → RSI with cricoid.",
      },
      {
        id: "lis-b-2-q2",
        prompt: "Mrs Bloom's planned anaesthetic is:",
        options: ["General anaesthetic", "Spinal", "Sedation only", "Local infiltration alone"],
        correctIndex: 1,
        explanation: "Spinal for knee arthroscopy.",
      },
    ],
  },
  {
    id: "lis-c-2",
    part: "C",
    title: "Talk: VTE prevention after hip surgery",
    specialty: "Ortho",
    durationSec: 220,
    transcript: `Speaker: After hip replacement, VTE risk remains elevated for weeks. Mechanical prophylaxis with intermittent compression should start in theatre unless contraindicated. Pharmacological options include low-molecular-weight heparin or a DOAC according to local pathways. Early mobilisation is as important as drugs — delayed first walk correlates with more calf DVTs in our audit. Patient education on calf pain, unilateral swelling and breathlessness is essential at discharge.`,
    ttsScript:
      "After hip replacement, VTE risk remains elevated for weeks. Mechanical prophylaxis with intermittent compression should start in theatre unless contraindicated. Pharmacological options include low-molecular-weight heparin or a DOAC according to local pathways. Early mobilisation is as important as drugs — delayed first walk correlates with more calf DVTs in our audit. Patient education on calf pain, unilateral swelling and breathlessness is essential at discharge.",
    questions: [
      {
        id: "lis-c-2-q1",
        prompt: "When should mechanical prophylaxis ideally start?",
        options: ["At discharge", "In theatre", "After day 5", "Only if D-dimer rises"],
        correctIndex: 1,
        explanation: "Start in theatre unless contraindicated.",
      },
      {
        id: "lis-c-2-q2",
        prompt: "Besides drugs, what reduces VTE risk?",
        options: ["Bed rest", "Early mobilisation", "High-dose vitamin K", "Avoiding fluids"],
        correctIndex: 1,
        explanation: "Early mobilisation is as important as drugs.",
      },
    ],
  },
  {
    id: "lis-a-3",
    part: "A",
    title: "GP consult: depression screen",
    specialty: "GP",
    durationSec: 260,
    transcript: `Doctor: How have your mood and energy been?
Patient: Flat for about two months. I sleep poorly and I've lost interest in football.
Doctor: Any thoughts of harming yourself?
Patient: No, nothing like that. I just feel useless at work.
Doctor: Are you still taking sertraline fifty milligrams?
Patient: I stopped three weeks ago because of nausea.
Doctor: Let's discuss options — restarting at a lower dose or trying another medicine — and I'll also refer you for talking therapy.`,
    ttsScript:
      "How have your mood and energy been? Flat for about two months. I sleep poorly and I've lost interest in football. Any thoughts of harming yourself? No, nothing like that. I just feel useless at work. Are you still taking sertraline fifty milligrams? I stopped three weeks ago because of nausea. Let's discuss options — restarting at a lower dose or trying another medicine — and I'll also refer you for talking therapy.",
    questions: [
      {
        id: "lis-a-3-q1",
        prompt: "Symptom duration?",
        answer: "two months",
        acceptedAnswers: ["2 months", "about two months", "two months"],
        explanation: "Flat for about two months.",
      },
      {
        id: "lis-a-3-q2",
        prompt: "Why was sertraline stopped?",
        options: ["Cost", "Nausea", "Insomnia", "Rash"],
        correctIndex: 1,
        explanation: "Stopped because of nausea.",
      },
    ],
  },
];
