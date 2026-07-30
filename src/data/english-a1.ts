import type { EnglishLesson } from "@/domain/english";

export const ENGLISH_A1_LESSONS: EnglishLesson[] = [
  {
    id: "en-a1-01",
    level: "A1",
    order: 1,
    title: "Hello and introductions",
    topic: "Hello & introductions",
    minutes: 6,
    goals: [
      "Greet people politely in formal and informal situations",
      "Introduce yourself with your name and nationality",
      "Ask and answer basic 'How are you?' exchanges",
    ],
    teach: [
      {
        heading: "Saying hello",
        body: `In the UK, people often say "Hello" or "Hi" in everyday situations. "Good morning", "Good afternoon" and "Good evening" are more formal and polite.

When you meet someone for the first time, say "Nice to meet you." The other person usually replies "Nice to meet you too."`,
      },
      {
        heading: "Introducing yourself",
        body: `Use "My name is…" or "I'm…" to say your name. You can add your job or where you are from: "I'm Ana. I'm from Brazil."

To ask someone's name, say "What's your name?" In a polite situation, you can say "May I ask your name?"`,
      },
      {
        heading: "How are you?",
        body: `"How are you?" is a common greeting, not always a deep question. Common answers are "I'm fine, thanks" or "I'm good, thanks."

Always say "please" and "thank you" — they are very important in British English. "You're welcome" or "No problem" are common replies to "Thank you."`,
      },
    ],
    phrases: [
      { en: "Hello, my name is Maria.", pt: "Olá, meu nome é Maria." },
      { en: "Nice to meet you.", pt: "Prazer em conhecer você." },
      { en: "How are you?", pt: "Como você está?" },
      { en: "I'm fine, thanks. And you?", pt: "Estou bem, obrigada. E você?" },
      { en: "I'm from São Paulo.", pt: "Sou de São Paulo." },
      { en: "Good morning.", pt: "Bom dia." },
    ],
    quiz: [
      {
        id: "en-a1-01-q1",
        type: "mcq",
        prompt: "What do you say when you meet someone for the first time?",
        options: [
          "Goodbye",
          "Nice to meet you",
          "See you later",
          "I'm sorry",
        ],
        correctIndex: 1,
        explanation:
          '"Nice to meet you" is the standard phrase when you meet someone for the first time.',
      },
      {
        id: "en-a1-01-q2",
        type: "gap",
        prompt: "Complete: My ___ is Carlos.",
        answer: "name",
        explanation: 'We use "My name is…" to introduce ourselves.',
      },
      {
        id: "en-a1-01-q3",
        type: "mcq",
        prompt: "Which is a polite reply to 'How are you?'",
        options: [
          "I'm fine, thanks",
          "My name is João",
          "I'm from Brazil",
          "Good night",
        ],
        correctIndex: 0,
        explanation:
          '"I\'m fine, thanks" is a natural answer to "How are you?"',
      },
      {
        id: "en-a1-01-q4",
        type: "gap",
        prompt: "Complete: How ___ you?",
        answer: "are",
        acceptedAnswers: ["Are"],
        explanation: 'The question form is "How are you?"',
      },
    ],
  },
  {
    id: "en-a1-02",
    level: "A1",
    order: 2,
    title: "The verb to be",
    topic: "Verb to be (am/is/are)",
    minutes: 7,
    goals: [
      "Use am, is and are correctly with different subjects",
      "Make positive and negative sentences with to be",
      "Form simple questions with am, is and are",
    ],
    teach: [
      {
        heading: "Am, is, are",
        body: `The verb "to be" is very common in English. Use "am" with I: "I am a nurse." Use "is" with he, she, it and singular nouns: "She is a doctor." Use "are" with you, we, they and plural nouns: "They are students."

In speech, we often use contractions: I'm, he's, she's, it's, we're, they're.`,
      },
      {
        heading: "Negative sentences",
        body: `Add "not" after am, is or are to make a negative sentence: "I am not tired." "She is not at home." "They are not ready."

Contractions are common: I'm not, isn't (is not), aren't (are not). "I'm not" is normal; "amn't" is not used in standard English.`,
      },
      {
        heading: "Questions",
        body: `To ask a yes/no question, put am, is or are before the subject: "Are you a nurse?" "Is he from London?" "Am I late?"

Short answers: "Yes, I am." / "No, I'm not." "Yes, she is." / "No, she isn't."`,
      },
    ],
    phrases: [
      { en: "I am a medical student.", pt: "Eu sou estudante de medicina." },
      { en: "She is a nurse.", pt: "Ela é enfermeira." },
      { en: "They are in the clinic.", pt: "Eles estão na clínica." },
      { en: "I am not from the UK.", pt: "Eu não sou do Reino Unido." },
      { en: "Are you a doctor?", pt: "Você é médico(a)?" },
      { en: "He is not here today.", pt: "Ele não está aqui hoje." },
    ],
    quiz: [
      {
        id: "en-a1-02-q1",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: [
          "She are a nurse.",
          "She is a nurse.",
          "She am a nurse.",
          "She be a nurse.",
        ],
        correctIndex: 1,
        explanation: 'With "she", we use "is": "She is a nurse."',
      },
      {
        id: "en-a1-02-q2",
        type: "gap",
        prompt: "Complete: They ___ students.",
        answer: "are",
        explanation: 'With "they", we use "are".',
      },
      {
        id: "en-a1-02-q3",
        type: "mcq",
        prompt: "Which is the correct negative sentence?",
        options: [
          "I amn't ready.",
          "I not am ready.",
          "I am not ready.",
          "I are not ready.",
        ],
        correctIndex: 2,
        explanation:
          'The correct negative is "I am not ready" (or "I\'m not ready").',
      },
      {
        id: "en-a1-02-q4",
        type: "gap",
        prompt: "Complete the question: ___ you a doctor?",
        answer: "Are",
        acceptedAnswers: ["are"],
        explanation: 'Questions with "you" use "Are" at the start.',
      },
    ],
  },
  {
    id: "en-a1-03",
    level: "A1",
    order: 3,
    title: "Numbers, age and time",
    topic: "Numbers, age & time",
    minutes: 7,
    goals: [
      "Count from 0 to 100 and use numbers in simple contexts",
      "Say and ask about age",
      "Tell the time using o'clock and half past",
    ],
    teach: [
      {
        heading: "Numbers 0–100",
        body: `Learn key numbers: zero, one, two… twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred.

For ages and phone numbers, say each number clearly. "34" is "thirty-four". In the UK, people often group phone numbers in pairs.`,
      },
      {
        heading: "Talking about age",
        body: `To say your age, use "I am" + number + "years old": "I am twenty-five years old." In casual speech, people often say "I'm twenty-five."

Ask with "How old are you?" You can also ask "What's your age?" in forms, but "How old are you?" is more common in conversation.`,
      },
      {
        heading: "Telling the time",
        body: `Use "o'clock" for exact hours: "It's three o'clock." Use "half past" for 30 minutes: "It's half past two" (2:30).

Add "a.m." for morning and "p.m." for afternoon and evening. "The appointment is at half past nine" means 9:30.`,
      },
    ],
    phrases: [
      { en: "I am thirty years old.", pt: "Eu tenho trinta anos." },
      { en: "How old are you?", pt: "Quantos anos você tem?" },
      { en: "It's two o'clock.", pt: "São duas horas." },
      { en: "It's half past ten.", pt: "São dez e meia." },
      { en: "My appointment is at nine.", pt: "Minha consulta é às nove." },
      { en: "I have two children.", pt: "Eu tenho dois filhos." },
    ],
    quiz: [
      {
        id: "en-a1-03-q1",
        type: "mcq",
        prompt: "How do you say 2:30 in English?",
        options: [
          "Two and thirty",
          "Half past two",
          "Two minus thirty",
          "Thirty two o'clock",
        ],
        correctIndex: 1,
        explanation: '2:30 is "half past two" in British English.',
      },
      {
        id: "en-a1-03-q2",
        type: "gap",
        prompt: "Complete: How old ___ you?",
        answer: "are",
        explanation: 'The question is "How old are you?"',
      },
      {
        id: "en-a1-03-q3",
        type: "mcq",
        prompt: "Which sentence is correct?",
        options: [
          "I have twenty years.",
          "I am twenty years old.",
          "I am twenty years.",
          "I have twenty old.",
        ],
        correctIndex: 1,
        explanation:
          'In English we say "I am … years old", not "I have … years."',
      },
      {
        id: "en-a1-03-q4",
        type: "gap",
        prompt: "Complete: It's three ___ . (exact hour)",
        answer: "o'clock",
        acceptedAnswers: ["o'clock", "oclock"],
        explanation: 'Exact hours use "o\'clock": "It\'s three o\'clock."',
      },
    ],
  },
  {
    id: "en-a1-04",
    level: "A1",
    order: 4,
    title: "Family and people",
    topic: "Family & people",
    minutes: 6,
    goals: [
      "Name common family members in English",
      "Use possessive adjectives (my, your, his, her)",
      "Describe people with simple adjectives",
    ],
    teach: [
      {
        heading: "Family words",
        body: `Core family words: mother, father, parents, son, daughter, brother, sister, husband, wife, children, grandmother, grandfather, grandparents.

"My" shows something belongs to you: "my mother". "Your" is for the person you speak to. "His" is for a man; "her" is for a woman.`,
      },
      {
        heading: "Talking about family",
        body: `Say "This is my…" when you introduce a family member in person or on a photo. "These are my parents."

Ask about family with "Do you have…?" — "Do you have brothers or sisters?" Answer: "Yes, I do" or "No, I don't."`,
      },
      {
        heading: "Simple descriptions",
        body: `Use basic adjectives before nouns: "my young son", "her old father". Common adjectives: young, old, tall, short, nice, kind.

"He is tall" and "She is kind" use the verb "to be" + adjective. Do not add "very" too often at A1 — one adjective is enough.`,
      },
    ],
    phrases: [
      { en: "This is my mother.", pt: "Esta é minha mãe." },
      { en: "I have one brother.", pt: "Eu tenho um irmão." },
      { en: "Her name is Lucia.", pt: "O nome dela é Lucia." },
      { en: "Do you have children?", pt: "Você tem filhos?" },
      { en: "My father is sixty years old.", pt: "Meu pai tem sessenta anos." },
      { en: "They are a nice family.", pt: "Eles são uma família legal." },
    ],
    quiz: [
      {
        id: "en-a1-04-q1",
        type: "mcq",
        prompt: "Your sister's mother is your…",
        options: ["aunt", "mother", "daughter", "wife"],
        correctIndex: 1,
        explanation: "Your mother is also your sister's mother.",
      },
      {
        id: "en-a1-04-q2",
        type: "gap",
        prompt: "Complete: ___ name is Pedro. (talking about a man)",
        answer: "His",
        acceptedAnswers: ["his"],
        explanation: 'We use "his" for a man: "His name is Pedro."',
      },
      {
        id: "en-a1-04-q3",
        type: "mcq",
        prompt: "Which question asks about family?",
        options: [
          "Do you have brothers or sisters?",
          "What time is it?",
          "Where is the hospital?",
          "Can you swim?",
        ],
        correctIndex: 0,
        explanation:
          '"Do you have brothers or sisters?" asks about your family.',
      },
      {
        id: "en-a1-04-q4",
        type: "gap",
        prompt: "Complete: These are ___ parents. (they belong to me)",
        answer: "my",
        explanation: 'Use "my" for things that belong to you.',
      },
    ],
  },
  {
    id: "en-a1-05",
    level: "A1",
    order: 5,
    title: "Daily routines",
    topic: "Daily routines (present simple)",
    minutes: 8,
    goals: [
      "Talk about everyday activities with the present simple",
      "Use adverbs of frequency (always, usually, sometimes)",
      "Form positive and negative routine sentences",
    ],
    teach: [
      {
        heading: "Present simple for routines",
        body: `Use the present simple for things you do regularly: "I work in a hospital." "She starts work at eight."

With he, she and it, add -s to the verb: "He works in a clinic." "She finishes at five." The base form is used with I, you, we and they.`,
      },
      {
        heading: "Frequency words",
        body: `"Always" means every time. "Usually" means most days. "Sometimes" means not every day. "Never" means zero times.

Put frequency words before the main verb: "I usually have breakfast at seven." With "to be", put them after the verb: "She is always busy."`,
      },
      {
        heading: "Negative routines",
        body: `Use "don't" (do not) with I, you, we, they: "I don't drink coffee." Use "doesn't" (does not) with he, she, it: "He doesn't smoke."

Questions: "Do you walk to work?" "Does she finish late?" Short answers: "Yes, I do." / "No, she doesn't."`,
      },
    ],
    phrases: [
      { en: "I wake up at six.", pt: "Eu acordo às seis." },
      { en: "She works in a hospital.", pt: "Ela trabalha em um hospital." },
      { en: "We usually have lunch at one.", pt: "Geralmente almoçamos à uma." },
      { en: "He doesn't drive to work.", pt: "Ele não vai de carro para o trabalho." },
      { en: "Do you finish at five?", pt: "Você termina às cinco?" },
      { en: "I sometimes study in the evening.", pt: "Às vezes estudo à noite." },
    ],
    quiz: [
      {
        id: "en-a1-05-q1",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: [
          "She work in a clinic.",
          "She works in a clinic.",
          "She working in a clinic.",
          "She is work in a clinic.",
        ],
        correctIndex: 1,
        explanation: 'With "she", add -s: "She works in a clinic."',
      },
      {
        id: "en-a1-05-q2",
        type: "gap",
        prompt: "Complete: I ___ drink tea. (negative)",
        answer: "don't",
        acceptedAnswers: ["don't", "do not"],
        explanation: 'Negative with I/you/we/they uses "don\'t": "I don\'t drink tea."',
      },
      {
        id: "en-a1-05-q3",
        type: "mcq",
        prompt: "Where does 'usually' go in this sentence? 'I ___ have breakfast at seven.'",
        options: [
          "usually",
          "have usually",
          "usually have",
          "have breakfast usually",
        ],
        correctIndex: 2,
        explanation:
          'Frequency adverbs go before the main verb: "I usually have breakfast at seven."',
      },
      {
        id: "en-a1-05-q4",
        type: "gap",
        prompt: "Complete: He ___ smoke. (negative, he/she/it)",
        answer: "doesn't",
        acceptedAnswers: ["doesn't", "does not"],
        explanation: 'With he/she/it, use "doesn\'t" for negatives.',
      },
    ],
  },
  {
    id: "en-a1-06",
    level: "A1",
    order: 6,
    title: "Food and drinks",
    topic: "Food & drinks",
    minutes: 6,
    goals: [
      "Name common food and drink items",
      "Say what you like and don't like",
      "Order simple food and drinks politely",
    ],
    teach: [
      {
        heading: "Common food vocabulary",
        body: `Basic foods: bread, rice, pasta, chicken, fish, eggs, salad, fruit, vegetables, cheese, soup.

Drinks: water, tea, coffee, milk, juice. In the UK, "tea" often means a hot drink with milk, not just herbal tea.`,
      },
      {
        heading: "Like and don't like",
        body: `Use "I like…" and "I don't like…" for preferences: "I like fish." "I don't like spicy food."

"I would like…" is polite when ordering: "I would like a coffee, please." In casual speech, people say "I'd like…"`,
      },
      {
        heading: "Ordering politely",
        body: `In cafés and canteens, say "Can I have…, please?" or "I'd like…, please." Always say "please" and "thank you."

If you have allergies or dietary needs, say "I can't eat…" or "I'm allergic to…" — staff will usually help you find a safe option.`,
      },
    ],
    phrases: [
      { en: "I would like a glass of water, please.", pt: "Eu gostaria de um copo de água, por favor." },
      { en: "I don't like coffee.", pt: "Eu não gosto de café." },
      { en: "Can I have the menu, please?", pt: "Posso ver o cardápio, por favor?" },
      { en: "I'm allergic to nuts.", pt: "Sou alérgico(a) a nozes." },
      { en: "The soup is very good.", pt: "A sopa está muito boa." },
      { en: "I'd like chicken and rice.", pt: "Eu gostaria de frango com arroz." },
    ],
    quiz: [
      {
        id: "en-a1-06-q1",
        type: "mcq",
        prompt: "Which phrase is polite for ordering in a café?",
        options: [
          "Give me coffee",
          "I would like a tea, please",
          "I want tea now",
          "Coffee!",
        ],
        correctIndex: 1,
        explanation:
          '"I would like a tea, please" is polite and appropriate in the UK.',
      },
      {
        id: "en-a1-06-q2",
        type: "gap",
        prompt: "Complete: I ___ like spicy food. (negative)",
        answer: "don't",
        acceptedAnswers: ["don't", "do not"],
        explanation: 'Say "I don\'t like…" for things you dislike.',
      },
      {
        id: "en-a1-06-q3",
        type: "mcq",
        prompt: "What do you say if nuts are dangerous for you?",
        options: [
          "I don't have nuts",
          "I'm allergic to nuts",
          "I like nuts",
          "Nuts are fine",
        ],
        correctIndex: 1,
        explanation:
          '"I\'m allergic to nuts" tells staff about a medical allergy.',
      },
      {
        id: "en-a1-06-q4",
        type: "gap",
        prompt: "Complete: Can I ___ a sandwich, please?",
        answer: "have",
        explanation: '"Can I have…?" is a common polite request.',
      },
    ],
  },
  {
    id: "en-a1-07",
    level: "A1",
    order: 7,
    title: "Places in town",
    topic: "Places in town",
    minutes: 7,
    goals: [
      "Name common places in a town or city",
      "Use prepositions of place (in, on, at, near)",
      "Understand simple directions",
    ],
    teach: [
      {
        heading: "Places vocabulary",
        body: `Useful places: hospital, pharmacy (chemist's in UK speech), supermarket, bus stop, train station, bank, post office, park, school, clinic, GP surgery.

A "chemist's" or "pharmacy" sells medicines. A "GP surgery" is where you see a general doctor in the UK NHS.`,
      },
      {
        heading: "Prepositions of place",
        body: `"In" is inside a place: "in the hospital". "On" is for streets: "on Main Street". "At" is for a point or building: "at the bus stop", "at work".

"Near" and "next to" mean close by: "The pharmacy is near the hospital." "Opposite" means on the other side of the road.`,
      },
      {
        heading: "Simple directions",
        body: `Common direction words: left, right, straight on, turn left, turn right.

"Go straight on" means continue in the same direction. "It's on your left" means the place is to the left side as you walk or drive.`,
      },
    ],
    phrases: [
      { en: "The hospital is near the park.", pt: "O hospital fica perto do parque." },
      { en: "Where is the pharmacy?", pt: "Onde fica a farmácia?" },
      { en: "Turn left at the traffic lights.", pt: "Vire à esquerda no semáforo." },
      { en: "It's on Main Street.", pt: "Fica na rua Main." },
      { en: "The clinic is opposite the bank.", pt: "A clínica fica em frente ao banco." },
      { en: "Go straight on.", pt: "Siga em frente." },
    ],
    quiz: [
      {
        id: "en-a1-07-q1",
        type: "mcq",
        prompt: "Which preposition fits: 'The bus stop is ___ the corner.'",
        options: ["in", "at", "on", "under"],
        correctIndex: 1,
        explanation: 'We say "at the corner" or "at the bus stop" for a specific point.',
      },
      {
        id: "en-a1-07-q2",
        type: "gap",
        prompt: "Complete: The supermarket is ___ the hospital. (close by)",
        answer: "near",
        acceptedAnswers: ["near", "next to"],
        explanation: '"Near" shows that two places are close together.',
      },
      {
        id: "en-a1-07-q3",
        type: "mcq",
        prompt: "In the UK, where do you usually go to see a GP?",
        options: [
          "A GP surgery",
          "A post office",
          "A bus stop",
          "A park",
        ],
        correctIndex: 0,
        explanation:
          "A GP surgery is the usual place to see a general practitioner in the UK.",
      },
      {
        id: "en-a1-07-q4",
        type: "gap",
        prompt: "Complete: Turn ___ at the traffic lights.",
        answer: "left",
        acceptedAnswers: ["Left"],
        explanation: 'We say "Turn left at the traffic lights."',
      },
    ],
  },
  {
    id: "en-a1-08",
    level: "A1",
    order: 8,
    title: "Simple questions",
    topic: "Asking simple questions (what/where/who)",
    minutes: 7,
    goals: [
      "Ask questions with what, where and who",
      "Use question word order in the present simple",
      "Understand and give short answers",
    ],
    teach: [
      {
        heading: "Question words",
        body: `"What" asks about things: "What is your job?" "Where" asks about place: "Where do you live?" "Who" asks about people: "Who is your doctor?"

These words go at the start of the question. Do not use "what" for people — use "who".`,
      },
      {
        heading: "Word order",
        body: `With "to be", put the verb after the question word: "Where is the clinic?" "Who is she?"

With other verbs, use "do/does": "What do you do?" (What is your job?) "Where does she work?" With he/she/it, use "does"; with I/you/we/they, use "do".`,
      },
      {
        heading: "Short answers",
        body: `You don't need long replies at A1. "Where is the hospital?" — "It's on Park Road." "Who is he?" — "He's my doctor."

If you don't understand, say "Sorry?" or "Can you repeat that, please?" — both are polite in the UK.`,
      },
    ],
    phrases: [
      { en: "What is your name?", pt: "Qual é o seu nome?" },
      { en: "Where do you live?", pt: "Onde você mora?" },
      { en: "Who is your GP?", pt: "Quem é o seu médico de família?" },
      { en: "What time is the appointment?", pt: "Que horas é a consulta?" },
      { en: "Where is the waiting room?", pt: "Onde fica a sala de espera?" },
      { en: "Sorry, can you repeat that?", pt: "Desculpe, pode repetir?" },
    ],
    quiz: [
      {
        id: "en-a1-08-q1",
        type: "mcq",
        prompt: "Which question word do you use for a person?",
        options: ["What", "Where", "Who", "When"],
        correctIndex: 2,
        explanation: '"Who" is used for people: "Who is your doctor?"',
      },
      {
        id: "en-a1-08-q2",
        type: "gap",
        prompt: "Complete: ___ do you live?",
        answer: "Where",
        acceptedAnswers: ["where", "Where"],
        explanation: '"Where" asks about place.',
      },
      {
        id: "en-a1-08-q3",
        type: "mcq",
        prompt: "Choose the correct question.",
        options: [
          "Where she works?",
          "Where does she work?",
          "Where do she work?",
          "Where is she work?",
        ],
        correctIndex: 1,
        explanation:
          'With "she", use "does": "Where does she work?"',
      },
      {
        id: "en-a1-08-q4",
        type: "gap",
        prompt: "Complete: What ___ your job?",
        answer: "is",
        explanation: 'With "your job", use "to be": "What is your job?"',
      },
    ],
  },
  {
    id: "en-a1-09",
    level: "A1",
    order: 9,
    title: "Can and can't",
    topic: "Can / can't",
    minutes: 6,
    goals: [
      "Talk about ability with can and can't",
      "Make polite requests with Can I…?",
      "Offer and ask for help in simple situations",
    ],
    teach: [
      {
        heading: "Ability",
        body: `"Can" shows ability: "I can swim." "She can speak English." The negative is "can't" (cannot): "I can't drive."

"Can" is the same for all subjects — no -s with he/she/it: "He can read." "They can help."`,
      },
      {
        heading: "Polite requests",
        body: `"Can I…?" is a friendly way to ask permission: "Can I sit here?" "Can I have some water?"

"Could I…?" is a little more formal and very common in healthcare: "Could I ask a question?" At A1, "Can I…?" is enough for most situations.`,
      },
      {
        heading: "Offers and help",
        body: `"Can I help you?" is what staff often say. You can reply "Yes, please" or "No, thank you."

"I can't" is useful when something is difficult: "I can't hear you" or "I can't find the clinic." Ask for help with "Can you help me, please?"`,
      },
    ],
    phrases: [
      { en: "I can speak a little English.", pt: "Eu consigo falar um pouco de inglês." },
      { en: "I can't drive.", pt: "Eu não sei dirigir." },
      { en: "Can I help you?", pt: "Posso ajudar você?" },
      { en: "Can you help me, please?", pt: "Você pode me ajudar, por favor?" },
      { en: "She can't come today.", pt: "Ela não pode vir hoje." },
      { en: "Can I sit here?", pt: "Posso sentar aqui?" },
    ],
    quiz: [
      {
        id: "en-a1-09-q1",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: [
          "He cans swim.",
          "He can swim.",
          "He can to swim.",
          "He can swims.",
        ],
        correctIndex: 1,
        explanation:
          '"Can" never changes form and is followed by the base verb: "He can swim."',
      },
      {
        id: "en-a1-09-q2",
        type: "gap",
        prompt: "Complete: I ___ speak French. (not able)",
        answer: "can't",
        acceptedAnswers: ["can't", "cannot"],
        explanation: 'The negative of "can" is "can\'t" or "cannot".',
      },
      {
        id: "en-a1-09-q3",
        type: "mcq",
        prompt: "Which is a polite request?",
        options: [
          "Sit down",
          "Can I sit here?",
          "I sit here",
          "You sit here",
        ],
        correctIndex: 1,
        explanation: '"Can I sit here?" is a polite way to ask permission.',
      },
      {
        id: "en-a1-09-q4",
        type: "gap",
        prompt: "Complete: ___ you help me, please?",
        answer: "Can",
        acceptedAnswers: ["can"],
        explanation: '"Can you help me, please?" is a polite request for help.',
      },
    ],
  },
  {
    id: "en-a1-10",
    level: "A1",
    order: 10,
    title: "At the clinic",
    topic: "At the clinic — very basic patient phrases",
    minutes: 8,
    goals: [
      "Use essential phrases when arriving at a clinic or GP surgery",
      "Describe simple symptoms with basic words",
      "Understand common instructions from reception and nurses",
    ],
    teach: [
      {
        heading: "Arriving at the clinic",
        body: `When you arrive, say "Hello, I have an appointment." Give your name and appointment time if asked. You may hear "Please take a seat" — that means wait in the waiting area.

If you are early or late, say "I'm sorry I'm late" or "I'm a bit early." Staff appreciate polite, clear communication.`,
      },
      {
        heading: "Simple symptoms",
        body: `At A1, use short phrases: "I have pain here" (point to the area). "I have a headache." "I feel sick." "I have a cough."

"How long?" means how much time — answer with "For two days" or "Since Monday." Don't worry about perfect grammar; clear words help the clinician.`,
      },
      {
        heading: "Common instructions",
        body: `"Please wait here" — stay where you are. "Follow me" — walk with the staff member. "Take off your jacket" — remove clothing as shown.

If you don't understand, say "I don't understand" or "Can you speak slowly, please?" This is normal and helpful in medical settings.`,
      },
    ],
    phrases: [
      { en: "Hello, I have an appointment.", pt: "Olá, tenho uma consulta marcada." },
      { en: "I don't feel well.", pt: "Não estou me sentindo bem." },
      { en: "I have a headache.", pt: "Estou com dor de cabeça." },
      { en: "It hurts here.", pt: "Dói aqui." },
      { en: "Can you speak slowly, please?", pt: "Pode falar devagar, por favor?" },
      { en: "Thank you for your help.", pt: "Obrigado(a) pela ajuda." },
    ],
    quiz: [
      {
        id: "en-a1-10-q1",
        type: "mcq",
        prompt: "What do you say when you arrive for a booked visit?",
        options: [
          "I have an appointment",
          "I am a doctor",
          "Goodbye",
          "I live here",
        ],
        correctIndex: 0,
        explanation:
          '"Hello, I have an appointment" tells reception why you are there.',
      },
      {
        id: "en-a1-10-q2",
        type: "gap",
        prompt: "Complete: I have a ___. (pain in your head)",
        answer: "headache",
        explanation: 'A pain in the head is a "headache".',
      },
      {
        id: "en-a1-10-q3",
        type: "mcq",
        prompt: "What should you say if the nurse speaks too fast?",
        options: [
          "Speak slowly, please",
          "I am fine",
          "See you tomorrow",
          "I am the doctor",
        ],
        correctIndex: 0,
        explanation:
          '"Can you speak slowly, please?" helps you understand in a clinic.',
      },
      {
        id: "en-a1-10-q4",
        type: "gap",
        prompt: "Complete: I don't ___ well.",
        answer: "feel",
        explanation: '"I don\'t feel well" is a basic way to say you are unwell.',
      },
    ],
  },
];
