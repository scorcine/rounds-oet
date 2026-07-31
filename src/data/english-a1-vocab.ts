import type { SrsCardTemplate } from "@/domain/study";

/**
 * A1 spaced-repetition deck (50 cards) covering the core Rounds English Path A1 topics:
 * greetings, to be, numbers, family, routines, food, places, question words, can, have got and clothes/clinic.
 *
 * `CompetencyId` only exposes medical/exam competencies, so cards are mapped to the closest fit:
 * - "functional_grammar" for structural items (to be, can, have got, question words)
 * - "communicative_functions" for vocabulary used to perform everyday communicative tasks
 */
export const ENGLISH_A1_VOCAB: SrsCardTemplate[] = [
  // Greetings & introductions
  {
    id: "srs-a1-001",
    competency: "communicative_functions",
    front: "Hello",
    back: "Olá / Oi.\nExample: Hello, my name is Ana.",
    tags: ["english-a1", "greetings"],
  },
  {
    id: "srs-a1-002",
    competency: "communicative_functions",
    front: "Nice to meet you.",
    back: "Prazer em conhecer você.\nExample: Nice to meet you, I'm Carlos.",
    tags: ["english-a1", "greetings"],
  },
  {
    id: "srs-a1-003",
    competency: "communicative_functions",
    front: "Goodbye",
    back: "Tchau / Adeus.\nExample: Goodbye, see you tomorrow.",
    tags: ["english-a1", "greetings"],
  },
  {
    id: "srs-a1-004",
    competency: "communicative_functions",
    front: "Excuse me.",
    back: "Com licença.\nExample: Excuse me, where's the bathroom?",
    tags: ["english-a1", "greetings"],
  },

  // Verb to be
  {
    id: "srs-a1-005",
    competency: "functional_grammar",
    front: "I am / I'm",
    back: "Eu sou / estou.\nExample: I'm a nurse.",
    tags: ["english-a1", "be"],
  },
  {
    id: "srs-a1-006",
    competency: "functional_grammar",
    front: "She is / She's",
    back: "Ela é / está.\nExample: She's my sister.",
    tags: ["english-a1", "be"],
  },
  {
    id: "srs-a1-007",
    competency: "functional_grammar",
    front: "They aren't",
    back: "Eles não são / não estão.\nExample: They aren't from Brazil.",
    tags: ["english-a1", "be"],
  },
  {
    id: "srs-a1-008",
    competency: "functional_grammar",
    front: "Is he...?",
    back: "Ele é...? / Ele está...?\nExample: Is he a doctor?",
    tags: ["english-a1", "be"],
  },

  // Numbers, age & time
  {
    id: "srs-a1-009",
    competency: "communicative_functions",
    front: "Ten",
    back: "Dez.\nExample: I have ten fingers.",
    tags: ["english-a1", "numbers"],
  },
  {
    id: "srs-a1-010",
    competency: "communicative_functions",
    front: "Twenty-one",
    back: "Vinte e um.\nExample: She is twenty-one years old.",
    tags: ["english-a1", "numbers"],
  },
  {
    id: "srs-a1-011",
    competency: "communicative_functions",
    front: "Half past",
    back: "E meia (hora).\nExample: It's half past three.",
    tags: ["english-a1", "numbers"],
  },
  {
    id: "srs-a1-012",
    competency: "communicative_functions",
    front: "Quarter to",
    back: "Quinze para (a hora).\nExample: It's a quarter to nine.",
    tags: ["english-a1", "numbers"],
  },

  // Family
  {
    id: "srs-a1-013",
    competency: "communicative_functions",
    front: "Mother",
    back: "Mãe.\nExample: My mother is a teacher.",
    tags: ["english-a1", "family"],
  },
  {
    id: "srs-a1-014",
    competency: "communicative_functions",
    front: "Brother",
    back: "Irmão.\nExample: I have one brother.",
    tags: ["english-a1", "family"],
  },
  {
    id: "srs-a1-015",
    competency: "communicative_functions",
    front: "Grandfather",
    back: "Avô.\nExample: My grandfather is seventy years old.",
    tags: ["english-a1", "family"],
  },
  {
    id: "srs-a1-016",
    competency: "communicative_functions",
    front: "Husband / wife",
    back: "Marido / esposa.\nExample: My husband works in a hospital.",
    tags: ["english-a1", "family"],
  },

  // Daily routines
  {
    id: "srs-a1-017",
    competency: "communicative_functions",
    front: "Wake up",
    back: "Acordar.\nExample: I wake up at seven o'clock.",
    tags: ["english-a1", "routines"],
  },
  {
    id: "srs-a1-018",
    competency: "communicative_functions",
    front: "Every day",
    back: "Todos os dias.\nExample: I study English every day.",
    tags: ["english-a1", "routines"],
  },
  {
    id: "srs-a1-019",
    competency: "communicative_functions",
    front: "Usually",
    back: "Normalmente / geralmente.\nExample: We usually have lunch at noon.",
    tags: ["english-a1", "routines"],
  },
  {
    id: "srs-a1-020",
    competency: "communicative_functions",
    front: "Go to bed",
    back: "Ir dormir / deitar.\nExample: He goes to bed early.",
    tags: ["english-a1", "routines"],
  },

  // Food & drink
  {
    id: "srs-a1-021",
    competency: "communicative_functions",
    front: "Bread",
    back: "Pão.\nExample: I eat bread for breakfast.",
    tags: ["english-a1", "food"],
  },
  {
    id: "srs-a1-022",
    competency: "communicative_functions",
    front: "Water",
    back: "Água.\nExample: Can I have some water, please?",
    tags: ["english-a1", "food"],
  },
  {
    id: "srs-a1-023",
    competency: "communicative_functions",
    front: "I'd like...",
    back: "Eu gostaria de...\nExample: I'd like a coffee, please.",
    tags: ["english-a1", "food"],
  },
  {
    id: "srs-a1-024",
    competency: "communicative_functions",
    front: "Hungry / thirsty",
    back: "Com fome / com sede.\nExample: I'm hungry and thirsty.",
    tags: ["english-a1", "food"],
  },

  // Places in town
  {
    id: "srs-a1-025",
    competency: "communicative_functions",
    front: "Pharmacy",
    back: "Farmácia.\nExample: Where's the nearest pharmacy?",
    tags: ["english-a1", "places"],
  },
  {
    id: "srs-a1-026",
    competency: "communicative_functions",
    front: "Hospital",
    back: "Hospital.\nExample: The hospital is next to the park.",
    tags: ["english-a1", "places"],
  },
  {
    id: "srs-a1-027",
    competency: "communicative_functions",
    front: "Next to",
    back: "Ao lado de.\nExample: The bank is next to the pharmacy.",
    tags: ["english-a1", "places"],
  },
  {
    id: "srs-a1-028",
    competency: "communicative_functions",
    front: "Turn left / right",
    back: "Vire à esquerda / direita.\nExample: Turn left at the corner.",
    tags: ["english-a1", "places"],
  },

  // Question words
  {
    id: "srs-a1-029",
    competency: "functional_grammar",
    front: "Where",
    back: "Onde.\nExample: Where do you live?",
    tags: ["english-a1", "questions"],
  },
  {
    id: "srs-a1-030",
    competency: "functional_grammar",
    front: "Who",
    back: "Quem.\nExample: Who is that man?",
    tags: ["english-a1", "questions"],
  },
  {
    id: "srs-a1-031",
    competency: "functional_grammar",
    front: "How much",
    back: "Quanto (custa / incontável).\nExample: How much is this?",
    tags: ["english-a1", "questions"],
  },
  {
    id: "srs-a1-032",
    competency: "functional_grammar",
    front: "How many",
    back: "Quantos(as) (contável).\nExample: How many brothers do you have?",
    tags: ["english-a1", "questions"],
  },

  // Can / can't
  {
    id: "srs-a1-033",
    competency: "functional_grammar",
    front: "Can (ability)",
    back: "Poder / conseguir (habilidade).\nExample: I can speak two languages.",
    tags: ["english-a1", "can"],
  },
  {
    id: "srs-a1-034",
    competency: "functional_grammar",
    front: "Can't",
    back: "Não poder / não conseguir.\nExample: She can't come today.",
    tags: ["english-a1", "can"],
  },
  {
    id: "srs-a1-035",
    competency: "functional_grammar",
    front: "Can I...?",
    back: "Posso...?\nExample: Can I open the window?",
    tags: ["english-a1", "can"],
  },
  {
    id: "srs-a1-036",
    competency: "functional_grammar",
    front: "Can you help me?",
    back: "Você pode me ajudar?\nExample: Can you help me, please?",
    tags: ["english-a1", "can"],
  },

  // Have got / has got
  {
    id: "srs-a1-037",
    competency: "functional_grammar",
    front: "I've got",
    back: "Eu tenho (algo).\nExample: I've got a headache.",
    tags: ["english-a1", "have-got"],
  },
  {
    id: "srs-a1-038",
    competency: "functional_grammar",
    front: "She's got",
    back: "Ela tem (algo).\nExample: She's got a temperature.",
    tags: ["english-a1", "have-got"],
  },
  {
    id: "srs-a1-039",
    competency: "functional_grammar",
    front: "Have you got...?",
    back: "Você tem...?\nExample: Have you got an appointment?",
    tags: ["english-a1", "have-got"],
  },
  {
    id: "srs-a1-040",
    competency: "functional_grammar",
    front: "Haven't got",
    back: "Não tenho.\nExample: I haven't got any money.",
    tags: ["english-a1", "have-got"],
  },
  {
    id: "srs-a1-041",
    competency: "functional_grammar",
    front: "Hasn't got",
    back: "Não tem (ele/ela).\nExample: He hasn't got any allergies.",
    tags: ["english-a1", "have-got"],
  },

  // Colours & clothes
  {
    id: "srs-a1-042",
    competency: "communicative_functions",
    front: "Shirt",
    back: "Camisa.\nExample: He's wearing a blue shirt.",
    tags: ["english-a1", "clothes"],
  },
  {
    id: "srs-a1-043",
    competency: "communicative_functions",
    front: "Shoes",
    back: "Sapatos.\nExample: I'm wearing black shoes.",
    tags: ["english-a1", "clothes"],
  },
  {
    id: "srs-a1-044",
    competency: "communicative_functions",
    front: "Colour",
    back: "Cor.\nExample: What colour is your bag?",
    tags: ["english-a1", "clothes"],
  },
  {
    id: "srs-a1-045",
    competency: "communicative_functions",
    front: "She's got long hair.",
    back: "Ela tem cabelo comprido.\nExample: She's got long, dark hair.",
    tags: ["english-a1", "clothes"],
  },

  // At the clinic
  {
    id: "srs-a1-046",
    competency: "communicative_functions",
    front: "I don't feel well.",
    back: "Não estou me sentindo bem.\nExample: I don't feel well today.",
    tags: ["english-a1", "clinic"],
  },
  {
    id: "srs-a1-047",
    competency: "communicative_functions",
    front: "My arm hurts.",
    back: "Meu braço dói.\nExample: My arm hurts a lot.",
    tags: ["english-a1", "clinic"],
  },
  {
    id: "srs-a1-048",
    competency: "communicative_functions",
    front: "Make an appointment",
    back: "Marcar uma consulta.\nExample: I'd like to make an appointment.",
    tags: ["english-a1", "clinic"],
  },
  {
    id: "srs-a1-049",
    competency: "communicative_functions",
    front: "Take a seat.",
    back: "Sentar-se / aguardar sentado.\nExample: Please take a seat in the waiting room.",
    tags: ["english-a1", "clinic"],
  },
  {
    id: "srs-a1-050",
    competency: "communicative_functions",
    front: "Fill in this form.",
    back: "Preencher este formulário.\nExample: Please fill in this form.",
    tags: ["english-a1", "clinic"],
  },
];
