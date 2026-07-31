import type { EnglishLesson } from "@/domain/english";

/**
 * Review checkpoints inserted after Lessons 5, 10, 15 and 20.
 * Fractional `order` values (5.5, 10.5, 15.5, 20.5) place them right after
 * the lesson with the matching whole number when the full list is sorted by order.
 */
export const ENGLISH_A1_REVIEWS: EnglishLesson[] = [
  {
    id: "en-a1-r01",
    level: "A1",
    order: 5.5,
    kind: "review",
    title: "Checkpoint 1 · Lessons 1–5",
    topic: "Review: greetings, to be, pronouns, numbers & dates",
    minutes: 12,
    goals: [
      "Review greetings, the verb to be and pronouns/possessives",
      "Practise numbers, clock time and dates",
    ],
    teach: [
      {
        heading: "Review focus",
        body: `This checkpoint revises Lessons 1–5: greetings and introductions, the verb **to be** (am/is/are), subject pronouns and possessive adjectives, numbers/age/clock time, and days/months/dates.

Read through the key phrases below, then complete the quiz to check what you remember before moving on to Lesson 6.`,
      },
    ],
    phrases: [
      { en: "Nice to meet you.", pt: "Prazer em conhecer você." },
      { en: "I'm from Brazil.", pt: "Sou do Brasil." },
      { en: "She isn't at home.", pt: "Ela não está em casa." },
      { en: "This is his phone.", pt: "Este é o celular dele." },
      { en: "It's half past three.", pt: "São três e meia." },
      { en: "What's the date today?", pt: "Qual é a data de hoje?" },
    ],
    quiz: [
      {
        id: "en-a1-r01-q1",
        type: "mcq",
        prompt: "What do you say when you meet someone for the first time?",
        options: ["Goodbye", "Nice to meet you", "Excuse me", "Good night"],
        correctIndex: 1,
        explanation: "\"Nice to meet you\" is the standard phrase for a first meeting.",
      },
      {
        id: "en-a1-r01-q2",
        type: "gap",
        prompt: "Complete: My name ___ Paulo.",
        answer: "is",
        acceptedAnswers: ["Is"],
        explanation: "We use \"is\" with \"my name\" (a singular subject).",
      },
      {
        id: "en-a1-r01-q3",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: ["She am a nurse.", "She is a nurse.", "She are a nurse.", "She be a nurse."],
        correctIndex: 1,
        explanation: "Use **is** with **she**, **he** and **it**.",
      },
      {
        id: "en-a1-r01-q4",
        type: "gap",
        prompt: "Complete: This is Paulo. ___ car is new.",
        answer: "His",
        acceptedAnswers: ["his"],
        explanation: "**His** is the possessive adjective for a man (Paulo).",
      },
      {
        id: "en-a1-r01-q5",
        type: "mcq",
        prompt: "What time is 6:15?",
        options: ["Half past six", "Quarter to six", "Quarter past six", "Six to quarter"],
        correctIndex: 2,
        explanation: "6:15 is fifteen minutes after six, so it is \"quarter past six\".",
      },
      {
        id: "en-a1-r01-q6",
        type: "gap",
        prompt: "Complete: My birthday is ___ March (month).",
        answer: "in",
        acceptedAnswers: ["In"],
        explanation: "We use **in** with months.",
      },
      {
        id: "en-a1-r01-q7",
        type: "mcq",
        prompt: "Which day comes after Wednesday?",
        options: ["Monday", "Tuesday", "Thursday", "Friday"],
        correctIndex: 2,
        explanation: "The order is Monday, Tuesday, Wednesday, Thursday, Friday.",
      },
      {
        id: "en-a1-r01-q8",
        type: "gap",
        prompt: "Write the ordinal number for 3.",
        answer: "third",
        acceptedAnswers: ["3rd", "Third"],
        explanation: "The ordinal form of \"three\" is **third**.",
      },
    ],
    practiceTip: "Before moving to Lesson 6, say your full introduction out loud three times without reading it.",
    listening: {
      title: "Checkpoint conversation: introductions and plans",
      script: `A: Hello, my name's Fatima. Nice to meet you.
B: Nice to meet you too. I'm Tom. How old are you, if you don't mind me asking?
A: I'm twenty-nine. And what's the date today, do you know?
B: It's the fourth of June. Is that your appointment today?
A: Yes, it's at half past two.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-r01-l1",
          type: "mcq",
          prompt: "How old is Fatima?",
          options: ["19", "29", "39", "49"],
          correctIndex: 1,
          explanation: "\"I'm twenty-nine.\"",
        },
        {
          id: "en-a1-r01-l2",
          type: "gap",
          prompt: "Complete: The appointment is at half ___ two.",
          answer: "past",
          acceptedAnswers: ["Past"],
          explanation: "\"Half past two\" means 2:30.",
        },
      ],
    },
    speaking: {
      tip: "Practise a full mini-introduction: greeting, name, age and one more fact.",
      lines: ["Hello, my name's ___. Nice to meet you.", "I'm ___ years old and I'm from ___."],
    },
    writing: {
      prompt: "Write a short introduction: your name, age, where you're from and today's date.",
      minWords: 15,
      keywords: ["name", "from"],
      sample: "Hello, my name is Rafael. I'm thirty years old and I'm from Salvador. Today is the second of June. Nice to meet you!",
    },
  },

  {
    id: "en-a1-r02",
    level: "A1",
    order: 10.5,
    kind: "review",
    title: "Checkpoint 2 · Lessons 6–10",
    topic: "Review: family, there is/are, this/that, present simple",
    minutes: 13,
    goals: [
      "Review family words, jobs and there is/are",
      "Practise present simple affirmative, negative and questions with do/does",
    ],
    teach: [
      {
        heading: "Review focus",
        body: `This checkpoint revises Lessons 6–10: family words and jobs with a/an, **there is/there are**, **this/that/these/those**, present simple for routines, and present simple negatives and questions with **do/does**.

Go through the key phrases, then try the quiz before starting Lesson 11.`,
      },
    ],
    phrases: [
      { en: "My father is a doctor.", pt: "Meu pai é médico." },
      { en: "There are two beds in the room.", pt: "Há duas camas no quarto." },
      { en: "These are my keys.", pt: "Estas são as minhas chaves." },
      { en: "She works in a hospital.", pt: "Ela trabalha em um hospital." },
      { en: "He doesn't work on Sundays.", pt: "Ele não trabalha aos domingos." },
      { en: "Do you speak English?", pt: "Você fala inglês?" },
    ],
    quiz: [
      {
        id: "en-a1-r02-q1",
        type: "mcq",
        prompt: "What do we call your mother's mother?",
        options: ["Aunt", "Grandmother", "Sister", "Daughter"],
        correctIndex: 1,
        explanation: "Your mother's mother is your **grandmother**.",
      },
      {
        id: "en-a1-r02-q2",
        type: "gap",
        prompt: "Complete: He's ___ engineer (use a/an).",
        answer: "an",
        acceptedAnswers: ["An"],
        explanation: "\"Engineer\" starts with a vowel sound, so we use **an**.",
      },
      {
        id: "en-a1-r02-q3",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: ["There is three chairs.", "There are three chairs.", "There a three chairs.", "Three chairs there are."],
        correctIndex: 1,
        explanation: "\"Chairs\" is plural, so we use **there are**.",
      },
      {
        id: "en-a1-r02-q4",
        type: "gap",
        prompt: "Complete: ___ is my phone (in my hand, singular).",
        answer: "This",
        acceptedAnswers: ["this"],
        explanation: "**This** is used for a singular thing close to you.",
      },
      {
        id: "en-a1-r02-q5",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: ["She work in a clinic.", "She works in a clinic.", "She working in a clinic.", "She is work in a clinic."],
        correctIndex: 1,
        explanation: "With **she**, add **-s** to the base verb.",
      },
      {
        id: "en-a1-r02-q6",
        type: "gap",
        prompt: "Complete: My brother ___ (not/like) fish.",
        answer: "doesn't like",
        acceptedAnswers: ["does not like", "Doesn't like"],
        explanation: "With **my brother** (he), the negative form is **doesn't**.",
      },
      {
        id: "en-a1-r02-q7",
        type: "mcq",
        prompt: "Which question is correct for \"she\"?",
        options: ["Does she works here?", "Do she work here?", "Does she work here?", "Is she work here?"],
        correctIndex: 2,
        explanation: "With **she**, questions use **Does** and the base verb.",
      },
      {
        id: "en-a1-r02-q8",
        type: "gap",
        prompt: "Complete: ___ you speak Portuguese? (question)",
        answer: "Do",
        acceptedAnswers: ["do"],
        explanation: "Questions with **you** start with **Do**.",
      },
    ],
    practiceTip: "Record yourself describing your home and a family member's routine, then listen back.",
    listening: {
      title: "Checkpoint conversation: a new flat",
      script: `A: Is there a bathroom in this flat?
B: Yes, there is. And there are two bedrooms too.
A: Great. Whose books are these on the shelf?
B: Those are my brother's. He's a student and he studies every evening.
A: Does he work as well?
B: No, he doesn't. He only studies at the moment.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-r02-l1",
          type: "mcq",
          prompt: "How many bedrooms are there?",
          options: ["One", "Two", "Three", "Four"],
          correctIndex: 1,
          explanation: "\"There are two bedrooms too.\"",
        },
        {
          id: "en-a1-r02-l2",
          type: "gap",
          prompt: "Complete: Does he work? — No, he ___.",
          answer: "doesn't",
          acceptedAnswers: ["does not", "Doesn't"],
          explanation: "The short negative answer for **he** is **doesn't**.",
        },
      ],
    },
    speaking: {
      tip: "Describe your home using there is/are, then say your family members' routines.",
      lines: ["There are two bedrooms in my flat.", "My brother studies every evening."],
    },
    writing: {
      prompt: "Describe your home (there is/are) and one family member's daily routine.",
      minWords: 18,
      sample:
        "There is a small kitchen in my flat. There are two bedrooms. My sister works in a hospital. She wakes up at six and starts work at eight.",
    },
  },

  {
    id: "en-a1-r03",
    level: "A1",
    order: 15.5,
    kind: "review",
    title: "Checkpoint 3 · Lessons 11–15",
    topic: "Review: food & a/an, likes/dislikes, places, prepositions, question words",
    minutes: 13,
    goals: [
      "Review food vocabulary, a/an and likes/dislikes",
      "Practise places in town, prepositions of place and question words",
    ],
    teach: [
      {
        heading: "Review focus",
        body: `This checkpoint revises Lessons 11–15: food and drink with **a/an**, **like/love/hate**, places in town, prepositions of place (**in, on, at, next to, between**), and question words (**what, where, who, when, why, how**).

Review the phrases below and complete the quiz before starting Lesson 16.`,
      },
    ],
    phrases: [
      { en: "I'd like a coffee, please.", pt: "Eu gostaria de um café, por favor." },
      { en: "She loves reading.", pt: "Ela adora ler." },
      { en: "Where's the nearest pharmacy?", pt: "Onde fica a farmácia mais próxima?" },
      { en: "The pharmacy is next to the bank.", pt: "A farmácia fica ao lado do banco." },
      { en: "What's your name?", pt: "Qual é o seu nome?" },
      { en: "How are you feeling today?", pt: "Como você está se sentindo hoje?" },
    ],
    quiz: [
      {
        id: "en-a1-r03-q1",
        type: "mcq",
        prompt: "Choose the correct article: \"___ apple\".",
        options: ["a", "an", "the", "no article"],
        correctIndex: 1,
        explanation: "\"Apple\" starts with a vowel sound, so we use **an**.",
      },
      {
        id: "en-a1-r03-q2",
        type: "gap",
        prompt: "Complete: I'd like ___ cup of tea (use a/an).",
        answer: "a",
        acceptedAnswers: ["A"],
        explanation: "\"Cup\" starts with a consonant sound, so we use **a**.",
      },
      {
        id: "en-a1-r03-q3",
        type: "mcq",
        prompt: "Which sentence is a negative?",
        options: ["I like swimming.", "I don't like swimming.", "I likes swimming.", "I doesn't like swimming."],
        correctIndex: 1,
        explanation: "The negative form with **I** is **don't like**.",
      },
      {
        id: "en-a1-r03-q4",
        type: "gap",
        prompt: "Complete: Do you ___ (like) hot weather?",
        answer: "like",
        acceptedAnswers: ["Like"],
        explanation: "After **do**, use the base form of the verb.",
      },
      {
        id: "en-a1-r03-q5",
        type: "mcq",
        prompt: "Where can you buy medicine?",
        options: ["Bank", "Pharmacy", "Park", "Station"],
        correctIndex: 1,
        explanation: "A **pharmacy** sells medicine.",
      },
      {
        id: "en-a1-r03-q6",
        type: "gap",
        prompt: "Complete: The supermarket is ___ to the bank (right beside it).",
        answer: "next",
        acceptedAnswers: ["Next"],
        explanation: "\"Next to\" means right beside something.",
      },
      {
        id: "en-a1-r03-q7",
        type: "mcq",
        prompt: "Which question word asks about a place?",
        options: ["Who", "What", "Where", "When"],
        correctIndex: 2,
        explanation: "**Where** is used to ask about places.",
      },
      {
        id: "en-a1-r03-q8",
        type: "gap",
        prompt: "Complete: ___ is your appointment? (asking about time)",
        answer: "When",
        acceptedAnswers: ["when"],
        explanation: "**When** asks about time.",
      },
    ],
    practiceTip: "Walk (or imagine walking) to a nearby café and describe the directions and your order out loud.",
    listening: {
      title: "Checkpoint conversation: finding a café",
      script: `A: Excuse me, is there a café near here?
B: Yes, go straight on and turn left. It's next to the bookshop.
A: Thanks. What would you like to order there?
B: I'd like a coffee and a sandwich. I love their cakes too.
A: What time does it open?
B: It opens at eight o'clock every day.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-r03-l1",
          type: "mcq",
          prompt: "Where is the café?",
          options: ["Next to the bank", "Next to the bookshop", "Between the park and the station", "Opposite the pharmacy"],
          correctIndex: 1,
          explanation: "\"It's next to the bookshop.\"",
        },
        {
          id: "en-a1-r03-l2",
          type: "gap",
          prompt: "Complete: What time ___ it open?",
          answer: "does",
          acceptedAnswers: ["Does"],
          explanation: "\"It\" is singular, so the question uses **does**.",
        },
      ],
    },
    speaking: {
      tip: "Ask a friend for directions to a café, then order your favourite food and drink.",
      lines: ["Where's the nearest café?", "I'd like a coffee, please.", "I love their cakes."],
    },
    writing: {
      prompt: "Write directions to your favourite café and what you like to order there.",
      minWords: 18,
      sample: "The café is next to the park. Go straight on and turn right. I love their coffee. I'd like a sandwich and an orange juice, please.",
    },
  },

  {
    id: "en-a1-r04",
    level: "A1",
    order: 20.5,
    kind: "review",
    title: "Checkpoint 4 · Lessons 16–20",
    topic: "Review: how much/many, can/can't, have got, clothes, clinic phrases",
    minutes: 15,
    goals: [
      "Review how much/how many, can/can't and have got/has got",
      "Practise describing appearance and basic clinic phrases",
    ],
    teach: [
      {
        heading: "Review focus",
        body: `This checkpoint revises Lessons 16–20: **how much/how many**, **can/can't** for ability and permission, **have got/has got**, colours and clothes, and basic patient phrases at the clinic.

Review the phrases below, complete the quiz, and finish with the listening, speaking and writing tasks to round off your A1 journey.`,
      },
    ],
    phrases: [
      { en: "How much is this?", pt: "Quanto custa isto?" },
      { en: "Can you help me, please?", pt: "Você pode me ajudar, por favor?" },
      { en: "I've got a headache.", pt: "Estou com dor de cabeça." },
      { en: "She's wearing a red dress.", pt: "Ela está usando um vestido vermelho." },
      { en: "I'd like to make an appointment.", pt: "Eu gostaria de marcar uma consulta." },
      { en: "The doctor will see you now.", pt: "O médico irá atendê-lo(a) agora." },
    ],
    quiz: [
      {
        id: "en-a1-r04-q1",
        type: "mcq",
        prompt: "Which question word goes with \"water\" (uncountable)?",
        options: ["How many", "How much", "How old", "How far"],
        correctIndex: 1,
        explanation: "\"Water\" is uncountable, so we use **How much**.",
      },
      {
        id: "en-a1-r04-q2",
        type: "gap",
        prompt: "Complete: ___ brothers do you have? (countable)",
        answer: "How many",
        acceptedAnswers: ["how many"],
        explanation: "\"Brothers\" is countable, so we use **How many**.",
      },
      {
        id: "en-a1-r04-q3",
        type: "mcq",
        prompt: "Choose the correct sentence for ability.",
        options: ["She can to swim.", "She cans swim.", "She can swim.", "She can swimming."],
        correctIndex: 2,
        explanation: "**Can** is followed by the base verb without \"to\" and without -s.",
      },
      {
        id: "en-a1-r04-q4",
        type: "gap",
        prompt: "Complete: He ___ (not/can) come tomorrow.",
        answer: "can't",
        acceptedAnswers: ["cannot", "Can't"],
        explanation: "The negative of **can** is **can't** (cannot).",
      },
      {
        id: "en-a1-r04-q5",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: ["She have got a car.", "She has got a car.", "She has get a car.", "She got has a car."],
        correctIndex: 1,
        explanation: "With **she**, use **has got**, not \"have got\".",
      },
      {
        id: "en-a1-r04-q6",
        type: "gap",
        prompt: "Complete: I ___ a headache (have got).",
        answer: "have got",
        acceptedAnswers: ["'ve got", "have got", "ve got"],
        explanation: "With **I**, we say **have got** (short form: I've got).",
      },
      {
        id: "en-a1-r04-q7",
        type: "mcq",
        prompt: "Which is the correct British spelling?",
        options: ["Color", "Colour", "Colur", "Colar"],
        correctIndex: 1,
        explanation: "British English spells this word **colour**, with a \"u\".",
      },
      {
        id: "en-a1-r04-q8",
        type: "gap",
        prompt: "Complete: Please ___ in this form (write information).",
        answer: "fill",
        acceptedAnswers: ["Fill"],
        explanation: "\"Fill in this form\" means to write your information on the form.",
      },
    ],
    practiceTip: "Role-play this checkpoint conversation with a friend, then swap roles and repeat.",
    listening: {
      title: "Checkpoint conversation: at the pharmacy and the clinic",
      script: `A: How much is this medicine, please?
B: It's five pounds. How many tablets do you need?
A: Just one box. I've got a bad headache and a temperature.
B: I'm sorry to hear that. Can you also spell your surname for our records?
A: Yes, it's Oliveira: O-L-I-V-E-I-R-A.
B: Thank you. Please take a seat — the pharmacist will call you soon.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-r04-l1",
          type: "mcq",
          prompt: "What symptoms does the customer have?",
          options: ["Only a headache", "A headache and a temperature", "A cough", "A broken arm"],
          correctIndex: 1,
          explanation: "\"I've got a bad headache and a temperature.\"",
        },
        {
          id: "en-a1-r04-l2",
          type: "gap",
          prompt: "Complete: ___ is this medicine, please?",
          answer: "How much",
          acceptedAnswers: ["how much"],
          explanation: "We use **How much** to ask about price.",
        },
      ],
    },
    speaking: {
      tip: "Practise a full pharmacy/clinic conversation: symptoms, price and spelling your name.",
      lines: ["How much is this medicine?", "I've got a headache and a temperature.", "Can you spell your surname, please?"],
    },
    writing: {
      prompt: "Write a short dialogue at a pharmacy or clinic (symptoms, price, spelling your name).",
      minWords: 20,
      sample:
        "I've got a headache and a temperature. How much is this medicine? It's six pounds. Can you spell your surname, please? It's Silva: S-I-L-V-A. Please take a seat.",
    },
  },
];
