import type { EnglishListening, EnglishSpeaking, EnglishWriting } from "@/domain/english";

/** Premium (paid-tier) extras layered on top of the free A1 lessons: extra listening, speaking and writing practice. */
export type A1PremiumExtras = {
  listening: EnglishListening;
  speaking: EnglishSpeaking;
  writing: EnglishWriting;
};

export const A1_PREMIUM_BY_ID: Record<string, A1PremiumExtras> = {
  "en-a1-01": {
    listening: {
      title: "Meeting a new colleague",
      script: `A: Hello! My name's Sarah. What's your name?
B: Hi, Sarah. I'm Daniel. Nice to meet you.
A: Nice to meet you too. Where are you from, Daniel?
B: I'm from Leeds. And you?
A: I'm from London. Are you new here?
B: Yes, it's my first day. See you later, Sarah.
A: See you later. Have a nice day!`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-01-l1",
          type: "mcq",
          prompt: "Where is Daniel from?",
          options: ["Leeds", "London", "Manchester", "Bristol"],
          correctIndex: 0,
          explanation: "Daniel says \"I'm from Leeds.\"",
        },
        {
          id: "en-a1-01-l2",
          type: "gap",
          prompt: "Complete Sarah's goodbye: \"___ a nice day!\"",
          answer: "Have",
          acceptedAnswers: ["have"],
          explanation: "\"Have a nice day!\" is a friendly way to end a conversation.",
        },
      ],
    },
    speaking: {
      tip: "Practise introducing yourself with a confident smile and clear pronunciation of your name.",
      lines: ["Hello, my name's ___. Nice to meet you.", "Where are you from?", "See you later. Have a nice day!"],
    },
    writing: {
      prompt: "Write a short introduction about yourself (name, where you're from, one fact about you).",
      minWords: 15,
      keywords: ["name", "from"],
      sample: "Hello, my name is Carlos. I'm from Brazil. I'm a nurse and I like football. Nice to meet you!",
    },
  },

  "en-a1-02": {
    listening: {
      title: "Who is who at the party",
      script: `A: Is that your brother over there?
B: No, he isn't my brother. He's my friend, Tom.
A: Oh, sorry! Is he a student?
B: No, he isn't a student. He's a teacher.
A: And are you a student too?
B: Yes, I am. I'm studying nursing.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-02-l1",
          type: "mcq",
          prompt: "What is Tom's job?",
          options: ["Student", "Teacher", "Doctor", "Nurse"],
          correctIndex: 1,
          explanation: "\"He's a teacher\" tells us Tom's job.",
        },
        {
          id: "en-a1-02-l2",
          type: "gap",
          prompt: "Complete: \"I ___ studying nursing.\"",
          answer: "am",
          acceptedAnswers: ["'m", "am"],
          explanation: "With **I**, the verb to be is **am**.",
        },
      ],
    },
    speaking: {
      tip: "Practise saying full sentences with am/is/are, then the short forms, to build fluency.",
      lines: ["I'm a student.", "She isn't from Brazil.", "Are you ready?"],
    },
    writing: {
      prompt: "Write four sentences about your family using am/is/are (include one negative).",
      minWords: 15,
      keywords: ["is", "are"],
      sample: "My name is Marcos. I am a nurse. My sister is a teacher. We aren't from London; we are from Recife.",
    },
  },

  "en-a1-03": {
    listening: {
      title: "Whose bag is this?",
      script: `A: Excuse me, is this your bag?
B: No, it isn't my bag. It's her bag — that's Maria over there.
A: Oh, OK. And is this his phone?
B: Yes, that's his phone. His name is Peter.
A: Thanks! I need to give it back to its owner.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-03-l1",
          type: "mcq",
          prompt: "Whose phone is it?",
          options: ["Maria's", "Peter's", "The speaker's", "Unknown"],
          correctIndex: 1,
          explanation: "\"That's his phone. His name is Peter.\"",
        },
        {
          id: "en-a1-03-l2",
          type: "gap",
          prompt: "Complete: \"It's ___ bag.\" (the bag belongs to Maria)",
          answer: "her",
          acceptedAnswers: ["Her"],
          explanation: "**Her** is the possessive adjective for a woman (Maria).",
        },
      ],
    },
    speaking: {
      tip: "Point at objects near and far from you and practise the possessive adjectives out loud.",
      lines: ["This is my phone.", "That's her bag.", "Is this your book?"],
    },
    writing: {
      prompt: "Describe three things and say who they belong to (my, his, her, our, their).",
      minWords: 15,
      keywords: ["his", "her"],
      sample: "This is my bag. That is his car. Our house is small, but their flat is big.",
    },
  },

  "en-a1-04": {
    listening: {
      title: "At the reception desk",
      script: `Receptionist: Good morning. What's your name and how old are you?
Patient: My name's Ana Silva. I'm thirty-two years old.
Receptionist: Thank you. Your appointment is at half past ten.
Patient: What time is it now?
Receptionist: It's a quarter past ten. The doctor is ready in fifteen minutes.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-04-l1",
          type: "mcq",
          prompt: "How old is the patient?",
          options: ["28", "30", "32", "35"],
          correctIndex: 2,
          explanation: "\"I'm thirty-two years old.\"",
        },
        {
          id: "en-a1-04-l2",
          type: "gap",
          prompt: "Complete: \"The appointment is at half ___ ten.\"",
          answer: "past",
          acceptedAnswers: ["Past"],
          explanation: "\"Half past ten\" means 10:30.",
        },
      ],
    },
    speaking: {
      tip: "Practise saying the current time out loud every hour today.",
      lines: ["What time is it?", "It's quarter past nine.", "My appointment is at eleven o'clock."],
    },
    writing: {
      prompt: "Write about your day: your age and three important times (wake up, lunch, appointment).",
      minWords: 15,
      sample:
        "I am twenty-six years old. I wake up at seven o'clock. I have lunch at half past twelve. My English class is at quarter past six.",
    },
  },

  "en-a1-05": {
    listening: {
      title: "Booking an appointment",
      script: `Receptionist: When would you like your appointment?
Patient: Is Monday possible?
Receptionist: Let me check... Monday the third of June is free at nine o'clock.
Patient: Perfect. What's the date today, by the way?
Receptionist: Today's the twenty-eighth of May.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-05-l1",
          type: "mcq",
          prompt: "What day is the new appointment?",
          options: ["Sunday", "Monday", "Tuesday", "Friday"],
          correctIndex: 1,
          explanation: "\"Monday the third of June is free.\"",
        },
        {
          id: "en-a1-05-l2",
          type: "gap",
          prompt: "Complete: \"The appointment is ___ the third of June.\"",
          answer: "on",
          acceptedAnswers: ["On"],
          explanation: "We use **on** with dates: \"on the third of June\".",
        },
      ],
    },
    speaking: {
      tip: "Say today's date and one future appointment date out loud.",
      lines: ["What's the date today?", "My appointment is on Monday.", "See you next Friday."],
    },
    writing: {
      prompt: "Write three sentences with dates: your birthday, today's date and a future appointment.",
      minWords: 15,
      sample:
        "My birthday is on the tenth of March. Today is the fifteenth of May. My next appointment is on Friday the twentieth of May.",
    },
  },

  "en-a1-06": {
    listening: {
      title: "My family",
      script: `Speaker: Let me tell you about my family. My mother is a nurse and my father is a teacher. I have one brother and one sister. My brother is an engineer and my sister is a student. My grandmother is seventy-five years old and she lives with us.`,
      prompt: "Listen to the monologue and answer the questions.",
      questions: [
        {
          id: "en-a1-06-l1",
          type: "mcq",
          prompt: "What is the speaker's mother's job?",
          options: ["Teacher", "Nurse", "Engineer", "Student"],
          correctIndex: 1,
          explanation: "\"My mother is a nurse.\"",
        },
        {
          id: "en-a1-06-l2",
          type: "gap",
          prompt: "Complete: \"My sister is a ___.\"",
          answer: "student",
          acceptedAnswers: ["Student"],
          explanation: "\"My sister is a student.\"",
        },
      ],
    },
    speaking: {
      tip: "Describe three people in your family out loud, naming their job or age.",
      lines: ["This is my mother. She's a nurse.", "I have one brother and one sister.", "My father is a teacher."],
    },
    writing: {
      prompt: "Describe three people in your family (name, relationship, job).",
      minWords: 18,
      sample:
        "This is my mother, Rosa. She is a nurse. This is my father, Paulo. He is a teacher. My brother, Lucas, is a student.",
    },
  },

  "en-a1-07": {
    listening: {
      title: "At the clinic reception",
      script: `A: Excuse me, is there a bathroom here?
B: Yes, there is. It's next to the waiting room.
A: Thank you. And are there any seats free?
B: Yes, there are two seats near the window.
A: Great, thanks. Is there a pharmacy nearby too?
B: No, there isn't a pharmacy in this building, but there's one across the street.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-07-l1",
          type: "mcq",
          prompt: "Where is the bathroom?",
          options: ["Next to reception", "Next to the waiting room", "Across the street", "Upstairs"],
          correctIndex: 1,
          explanation: "\"It's next to the waiting room.\"",
        },
        {
          id: "en-a1-07-l2",
          type: "gap",
          prompt: "Complete: \"There ___ a pharmacy in this building.\" (negative)",
          answer: "isn't",
          acceptedAnswers: ["is not", "Isn't"],
          explanation: "With a singular noun, the negative is **isn't**.",
        },
      ],
    },
    speaking: {
      tip: "Describe your street using there is/there are, then make one negative sentence.",
      lines: ["There's a pharmacy near my house.", "Are there any seats free?", "There isn't a lift here."],
    },
    writing: {
      prompt: "Describe your street: what there is and isn't (shops, park, bus stop).",
      minWords: 15,
      sample:
        "There is a supermarket near my house. There are two bus stops on my street. There isn't a park, but there's a small pharmacy.",
    },
  },

  "en-a1-08": {
    listening: {
      title: "In a clothes shop",
      script: `A: Can I help you?
B: Yes, please. How much is this jacket?
A: That one is thirty pounds. These shoes are on sale too — only fifteen pounds.
B: Great! And those bags over there, are they cheap?
A: Those are quite expensive, I'm afraid. Forty-five pounds each.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-08-l1",
          type: "mcq",
          prompt: "How much are the shoes?",
          options: ["£15", "£30", "£45", "£50"],
          correctIndex: 0,
          explanation: "\"These shoes are on sale too — only fifteen pounds.\"",
        },
        {
          id: "en-a1-08-l2",
          type: "gap",
          prompt: "Complete: \"___ bags over there are expensive.\"",
          answer: "Those",
          acceptedAnswers: ["those"],
          explanation: "**Those** is used for plural things that are far away.",
        },
      ],
    },
    speaking: {
      tip: "Point at objects near and far from you and describe them with this/that/these/those.",
      lines: ["This is my bag.", "Those shoes are nice.", "Can I have this, please?"],
    },
    writing: {
      prompt: "Describe items near you (this/these) and far away (that/those) in a shop or room.",
      minWords: 15,
      sample: "This is my phone. These are my keys. That is the door. Those chairs over there are new.",
    },
  },

  "en-a1-09": {
    listening: {
      title: "My daily routine",
      script: `Speaker: I usually wake up at six thirty. I have breakfast at seven and I go to work at eight o'clock. I work in a hospital, so I start at nine. I always have lunch at noon with my colleagues. I finish work at five and I go to bed early, at about ten o'clock.`,
      prompt: "Listen to the monologue and answer the questions.",
      questions: [
        {
          id: "en-a1-09-l1",
          type: "mcq",
          prompt: "What time does the speaker start work?",
          options: ["Seven", "Eight", "Nine", "Ten"],
          correctIndex: 2,
          explanation: "\"I work in a hospital, so I start at nine.\"",
        },
        {
          id: "en-a1-09-l2",
          type: "gap",
          prompt: "Complete: \"She ___ (have) lunch at noon.\"",
          answer: "has",
          acceptedAnswers: ["Has"],
          explanation: "With **she**, add **-s**: \"has\".",
        },
      ],
    },
    speaking: {
      tip: "Say your own daily routine out loud, one sentence for each part of the day.",
      lines: ["I wake up at six thirty.", "She works in a hospital.", "We usually have lunch at noon."],
    },
    writing: {
      prompt: "Write your daily routine using five present simple sentences.",
      minWords: 20,
      sample:
        "I wake up at six o'clock. I have breakfast at half past six. I go to work at eight. I have lunch at noon. I go to bed at eleven o'clock.",
    },
  },

  "en-a1-10": {
    listening: {
      title: "A short interview",
      script: `A: Do you speak any other languages?
B: Yes, I do. I speak Portuguese and a little Spanish.
A: Does your husband speak English too?
B: No, he doesn't. He's studying now.
A: What time does he finish his class?
B: He finishes at nine in the evening.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-10-l1",
          type: "mcq",
          prompt: "Does the husband speak English?",
          options: ["Yes", "No", "A little", "Fluently"],
          correctIndex: 1,
          explanation: "\"No, he doesn't. He's studying now.\"",
        },
        {
          id: "en-a1-10-l2",
          type: "gap",
          prompt: "Complete: \"What time ___ he finish his class?\"",
          answer: "does",
          acceptedAnswers: ["Does"],
          explanation: "With **he**, the question uses **does**.",
        },
      ],
    },
    speaking: {
      tip: "Ask a friend three do/does questions about their routine and languages.",
      lines: ["Do you speak English?", "She doesn't work on Sundays.", "What time does the clinic open?"],
    },
    writing: {
      prompt: "Write three questions and answers about a friend's routine using do/does.",
      minWords: 18,
      sample:
        "Do you work at weekends? No, I don't. Does she like her job? Yes, she does. What time does she start work? She starts at nine.",
    },
  },

  "en-a1-11": {
    listening: {
      title: "Ordering at a café",
      script: `Waiter: Good morning. What would you like to drink?
Customer: I'd like a coffee, please. And can I have an apple too?
Waiter: Of course. Anything else?
Customer: Yes, an orange juice for my friend, please.
Waiter: No problem. That's a coffee, an apple and an orange juice.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-11-l1",
          type: "mcq",
          prompt: "What does the customer order for their friend?",
          options: ["A coffee", "An apple", "An orange juice", "A sandwich"],
          correctIndex: 2,
          explanation: "\"An orange juice for my friend, please.\"",
        },
        {
          id: "en-a1-11-l2",
          type: "gap",
          prompt: "Complete: \"Can I have ___ apple, please?\"",
          answer: "an",
          acceptedAnswers: ["An"],
          explanation: "\"Apple\" starts with a vowel sound, so we use **an**.",
        },
      ],
    },
    speaking: {
      tip: "Practise ordering food and drink politely with I'd like / can I have.",
      lines: ["I'd like a coffee, please.", "Can I have an apple?", "What would you like to eat?"],
    },
    writing: {
      prompt: "Write a short conversation ordering food and drink (use a/an).",
      minWords: 15,
      sample: "I'd like a sandwich and an orange juice, please. Can I also have an apple? Thank you very much.",
    },
  },

  "en-a1-12": {
    listening: {
      title: "Talking about hobbies",
      script: `A: Do you like your job?
B: Yes, I love it! I like helping patients and I love learning new things.
A: Do you like working at night?
B: No, I don't. I hate getting up early after a night shift.
A: What about reading?
B: I love reading before bed. It helps me relax.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-12-l1",
          type: "mcq",
          prompt: "What does the speaker hate?",
          options: ["Reading", "Helping patients", "Getting up early", "Night shifts"],
          correctIndex: 2,
          explanation: "\"I hate getting up early after a night shift.\"",
        },
        {
          id: "en-a1-12-l2",
          type: "gap",
          prompt: "Complete: \"I love ___ (read) before bed.\"",
          answer: "reading",
          acceptedAnswers: ["Reading"],
          explanation: "After **love**, use a verb ending in **-ing**.",
        },
      ],
    },
    speaking: {
      tip: "Talk about three things you like and one thing you hate doing.",
      lines: ["I like coffee.", "She loves reading.", "Do you like football?"],
    },
    writing: {
      prompt: "Write about three things you like and one thing you hate doing.",
      minWords: 15,
      sample: "I like coffee and I love cooking. I also like walking in the park. I hate waiting in queues.",
    },
  },

  "en-a1-13": {
    listening: {
      title: "Asking for directions",
      script: `A: Excuse me, where's the nearest pharmacy?
B: Go straight on, then turn left. It's next to the bank.
A: Thank you. Is there a hospital near here too?
B: Yes, there is. It's between the park and the school.
A: Great, thanks for your help!`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-13-l1",
          type: "mcq",
          prompt: "Where is the pharmacy?",
          options: ["Next to the park", "Next to the bank", "Between the school and the park", "Opposite the station"],
          correctIndex: 1,
          explanation: "\"It's next to the bank.\"",
        },
        {
          id: "en-a1-13-l2",
          type: "gap",
          prompt: "Complete: \"The hospital is ___ the park and the school.\"",
          answer: "between",
          acceptedAnswers: ["Between"],
          explanation: "**Between** means in the middle of two things.",
        },
      ],
    },
    speaking: {
      tip: "Practise asking for and giving directions to a place near you.",
      lines: ["Where's the nearest pharmacy?", "Turn left at the corner.", "Is there a bank near here?"],
    },
    writing: {
      prompt: "Write directions from your house to the nearest pharmacy or hospital.",
      minWords: 15,
      sample: "Go straight on and turn right. The pharmacy is next to the supermarket. It's between the bank and the school.",
    },
  },

  "en-a1-14": {
    listening: {
      title: "Finding your way around the clinic",
      script: `A: Where's the waiting room?
B: It's on the first floor, next to the lift.
A: And where should I sit?
B: Please sit at the desk near reception. Your file is on the shelf, in the cupboard.
A: Thank you. Is Dr Green's office between reception and the waiting room?
B: Yes, exactly.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-14-l1",
          type: "mcq",
          prompt: "Where is Dr Green's office?",
          options: ["Next to the lift", "Between reception and the waiting room", "On the shelf", "In the cupboard"],
          correctIndex: 1,
          explanation: "\"Is Dr Green's office between reception and the waiting room? — Yes, exactly.\"",
        },
        {
          id: "en-a1-14-l2",
          type: "gap",
          prompt: "Complete: \"Please sit ___ the desk near reception.\"",
          answer: "at",
          acceptedAnswers: ["At"],
          explanation: "We use **at** for a specific point, like a desk.",
        },
      ],
    },
    speaking: {
      tip: "Describe where things are in a room using in, on, at, next to and between.",
      lines: ["The keys are on the table.", "She's in the waiting room.", "The clinic is between the park and the school."],
    },
    writing: {
      prompt: "Describe where three things are in your house using in, on, at, next to or between.",
      minWords: 15,
      sample: "My keys are on the table. My shoes are in the cupboard. The sofa is between the window and the door.",
    },
  },

  "en-a1-15": {
    listening: {
      title: "First meeting with a patient",
      script: `Nurse: What's your name, please?
Patient: My name's John Baker.
Nurse: Where do you live, John?
Patient: I live in Manchester.
Nurse: When is your appointment with the doctor?
Patient: It's at eleven o'clock. Why do you ask?
Nurse: Just to confirm the details. How are you feeling today?
Patient: A bit tired, thanks.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-15-l1",
          type: "mcq",
          prompt: "Where does John live?",
          options: ["London", "Leeds", "Manchester", "Bristol"],
          correctIndex: 2,
          explanation: "\"I live in Manchester.\"",
        },
        {
          id: "en-a1-15-l2",
          type: "gap",
          prompt: "Complete: \"___ is your appointment with the doctor?\"",
          answer: "When",
          acceptedAnswers: ["when"],
          explanation: "**When** asks about time.",
        },
      ],
    },
    speaking: {
      tip: "Practise asking a new patient five basic questions with different question words.",
      lines: ["What's your name?", "Where do you live?", "How are you feeling today?"],
    },
    writing: {
      prompt: "Write five questions to ask a new patient (what, where, when, why, how).",
      minWords: 18,
      sample: "What's your name? Where do you live? When is your appointment? Why are you here today? How are you feeling?",
    },
  },

  "en-a1-16": {
    listening: {
      title: "At the pharmacy",
      script: `A: How much is this medicine, please?
B: It's six pounds fifty.
A: OK. And how many tablets are in the box?
B: There are twenty tablets in the box.
A: How many do I take a day?
B: Two tablets, twice a day, with water.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-16-l1",
          type: "mcq",
          prompt: "How many tablets are in the box?",
          options: ["Ten", "Fifteen", "Twenty", "Twenty-five"],
          correctIndex: 2,
          explanation: "\"There are twenty tablets in the box.\"",
        },
        {
          id: "en-a1-16-l2",
          type: "gap",
          prompt: "Complete: \"___ is this medicine, please?\"",
          answer: "How much",
          acceptedAnswers: ["how much"],
          explanation: "We use **How much** to ask about price.",
        },
      ],
    },
    speaking: {
      tip: "Practise asking about price and quantity with how much and how many.",
      lines: ["How much is this?", "How many tablets do I take?", "How much water do you drink?"],
    },
    writing: {
      prompt: "Write a short dialogue at a pharmacy using how much and how many.",
      minWords: 15,
      sample: "How much is this medicine? It's four pounds. How many tablets do I take a day? Two tablets, in the morning and at night.",
    },
  },

  "en-a1-17": {
    listening: {
      title: "Changing an appointment",
      script: `A: Can I ask you a question?
B: Of course, go ahead.
A: Can I change my appointment to Friday?
B: Yes, you can. Friday at ten o'clock is free.
A: Great. Can you also send me a reminder text?
B: I'm sorry, we can't send text messages, but we can call you.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-17-l1",
          type: "mcq",
          prompt: "Can the receptionist send a text message?",
          options: ["Yes", "No", "Only on Fridays", "Only by email"],
          correctIndex: 1,
          explanation: "\"I'm sorry, we can't send text messages, but we can call you.\"",
        },
        {
          id: "en-a1-17-l2",
          type: "gap",
          prompt: "Complete: \"___ I change my appointment to Friday?\"",
          answer: "Can",
          acceptedAnswers: ["can"],
          explanation: "**Can I…?** asks for permission.",
        },
      ],
    },
    speaking: {
      tip: "Practise asking for help and permission using can.",
      lines: ["Can you help me, please?", "Can I ask a question?", "I can speak a little English."],
    },
    writing: {
      prompt: "Write three things you can do and one thing you can't do.",
      minWords: 15,
      sample: "I can speak two languages. I can swim very well. I can cook simple meals, but I can't drive.",
    },
  },

  "en-a1-18": {
    listening: {
      title: "Describing symptoms",
      script: `Doctor: Good morning. What's the problem today?
Patient: I've got a bad headache and I've got a temperature too.
Doctor: Have you got any pain in your throat?
Patient: Yes, I have. My throat hurts a lot.
Doctor: Has anyone in your family got the same symptoms?
Patient: Yes, my sister has got a cough as well.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-18-l1",
          type: "mcq",
          prompt: "What symptoms does the patient have?",
          options: ["Only a headache", "Headache and temperature", "Only a cough", "A broken arm"],
          correctIndex: 1,
          explanation: "\"I've got a bad headache and I've got a temperature too.\"",
        },
        {
          id: "en-a1-18-l2",
          type: "gap",
          prompt: "Complete: \"___ you got any pain in your throat?\"",
          answer: "Have",
          acceptedAnswers: ["have"],
          explanation: "Questions with **you** start with **Have**.",
        },
      ],
    },
    speaking: {
      tip: "Practise describing symptoms with have got / has got before a clinic role-play.",
      lines: ["I've got a headache.", "Have you got an appointment?", "She's got a temperature."],
    },
    writing: {
      prompt: "Describe your symptoms to a doctor using have got/has got (at least three sentences).",
      minWords: 15,
      sample:
        "I've got a sore throat and I've got a temperature. I haven't got any pain in my chest, but I've got a bad cough.",
    },
  },

  "en-a1-19": {
    listening: {
      title: "Describing a friend",
      script: `A: What does your friend look like?
B: She's tall and she's got long, dark hair.
A: What is she wearing today?
B: She's wearing a blue dress and black shoes.
A: What's your favourite colour, by the way?
B: My favourite colour is green.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-19-l1",
          type: "mcq",
          prompt: "What is the friend wearing?",
          options: ["A red jumper", "A blue dress", "A green skirt", "A black jacket"],
          correctIndex: 1,
          explanation: "\"She's wearing a blue dress and black shoes.\"",
        },
        {
          id: "en-a1-19-l2",
          type: "gap",
          prompt: "Complete: \"She's ___ long, dark hair.\"",
          answer: "got",
          acceptedAnswers: ["Got"],
          explanation: "\"She's got long, dark hair\" describes appearance with have got.",
        },
      ],
    },
    speaking: {
      tip: "Describe what you are wearing today and your favourite colour.",
      lines: ["What colour is your bag?", "She's got short hair.", "I'm wearing black shoes."],
    },
    writing: {
      prompt: "Describe what you are wearing today and your favourite colour.",
      minWords: 15,
      sample: "Today I'm wearing a blue shirt and black trousers. I've got short, dark hair. My favourite colour is blue.",
    },
  },

  "en-a1-20": {
    listening: {
      title: "Checking in at reception",
      script: `Receptionist: Good morning, can I help you?
Patient: Yes, I'd like to make an appointment. I don't feel well.
Receptionist: I'm sorry to hear that. What's your name, please?
Patient: My name's Elena Costa. Can you spell your surname, please? — sorry, Costa: C-O-S-T-A.
Receptionist: Thank you. Please take a seat. The doctor will see you in ten minutes.`,
      prompt: "Listen to the conversation and answer the questions.",
      questions: [
        {
          id: "en-a1-20-l1",
          type: "mcq",
          prompt: "What does the patient say about her health?",
          options: ["She feels great", "She doesn't feel well", "She has an appointment tomorrow", "She wants medicine"],
          correctIndex: 1,
          explanation: "\"I'd like to make an appointment. I don't feel well.\"",
        },
        {
          id: "en-a1-20-l2",
          type: "gap",
          prompt: "Complete: \"Please take a ___ in the waiting room.\"",
          answer: "seat",
          acceptedAnswers: ["Seat"],
          explanation: "\"Please take a seat\" asks someone to sit down.",
        },
      ],
    },
    speaking: {
      tip: "Role-play a reception check-in with a friend, then swap roles.",
      lines: ["I'd like to make an appointment.", "I don't feel well.", "Can you spell your surname, please?"],
    },
    writing: {
      prompt: "Write a short conversation checking in at a clinic reception.",
      minWords: 18,
      sample:
        "Good morning, I'd like to make an appointment. I don't feel well and I've got a temperature. My name is Ana Souza. Thank you, please take a seat.",
    },
  },
};
