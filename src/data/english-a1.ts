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
      "Greet people in formal and informal situations",
      "Introduce yourself and ask someone's name",
      "Use please, thank you and goodbye politely",
    ],
    teach: [
      {
        heading: "Saying hello and goodbye",
        body: `"Hello" and "Hi" are common greetings for any time of day. "Good morning" (before midday), "Good afternoon" (midday to about 6 p.m.) and "Good evening" (after 6 p.m.) are more formal.

To say goodbye, use "Goodbye", "Bye" or the more casual "See you later." "Have a nice day" is a friendly way to end a conversation.`,
      },
      {
        heading: "Introducing yourself",
        body: `Use "My name is…" or "I'm…" to give your name: "My name is Ana." / "I'm Carlos."

To ask someone's name, say "What's your name?" To ask where someone is from, say "Where are you from?" The answer uses "I'm from…": "I'm from Brazil."

When you meet someone for the first time, say "Nice to meet you." The usual reply is "Nice to meet you too."`,
      },
      {
        heading: "Being polite",
        body: `Always say "please" when you ask for something and "thank you" when you receive something.

If someone says "Thank you", you can reply "You're welcome" or "No problem."

"Excuse me" is useful to get someone's attention or to say sorry for a small mistake.`,
      },
    ],
    phrases: [
      { en: "Hello, my name is Ana.", pt: "Olá, meu nome é Ana." },
      { en: "Nice to meet you.", pt: "Prazer em conhecer você." },
      { en: "How are you?", pt: "Como você está?" },
      { en: "I'm fine, thank you. And you?", pt: "Estou bem, obrigado(a). E você?" },
      { en: "Where are you from?", pt: "De onde você é?" },
      { en: "See you later.", pt: "Até mais tarde." },
      { en: "Excuse me, please.", pt: "Com licença, por favor." },
    ],
    quiz: [
      {
        id: "en-a1-01-q1",
        type: "mcq",
        prompt: "What do you say when you meet someone for the first time?",
        options: ["Goodbye", "Nice to meet you", "I'm sorry", "How much is it?"],
        correctIndex: 1,
        explanation: "\"Nice to meet you\" is the standard phrase for a first meeting.",
      },
      {
        id: "en-a1-01-q2",
        type: "gap",
        prompt: "Complete: My name ___ Paulo.",
        answer: "is",
        acceptedAnswers: ["Is"],
        explanation: "We use \"is\" with \"my name\" (a singular subject).",
      },
      {
        id: "en-a1-01-q3",
        type: "mcq",
        prompt: "Which greeting is correct after 6 p.m.?",
        options: ["Good morning", "Good afternoon", "Good evening", "Good night"],
        correctIndex: 2,
        explanation: "\"Good evening\" greets people after around 6 p.m. \"Good night\" is only used to say goodbye.",
      },
      {
        id: "en-a1-01-q4",
        type: "gap",
        prompt: "Complete: ___ are you from?",
        answer: "Where",
        acceptedAnswers: ["where"],
        explanation: "\"Where are you from?\" asks about someone's country or city.",
      },
      {
        id: "en-a1-01-q5",
        type: "mcq",
        prompt: "How do you politely reply to \"Thank you\"?",
        options: ["You're welcome", "Goodbye", "Please", "Excuse me"],
        correctIndex: 0,
        explanation: "\"You're welcome\" is the standard polite reply to thanks.",
      },
      {
        id: "en-a1-01-q6",
        type: "gap",
        prompt: "Complete the reply: \"Thank you very much.\" — \"___ problem.\"",
        answer: "No",
        acceptedAnswers: ["no"],
        explanation: "\"No problem\" is a friendly, informal reply to \"Thank you\".",
      },
    ],
    practiceTip: "Practise greetings out loud with a friend or in front of a mirror every morning.",
  },
  {
    id: "en-a1-02",
    level: "A1",
    order: 2,
    title: "The verb to be: am, is, are",
    topic: "Verb to be (am/is/are) + negatives",
    minutes: 7,
    goals: [
      "Use am, is and are with the correct subject pronouns",
      "Make negative sentences with the verb to be",
      "Ask simple yes/no questions with to be",
    ],
    teach: [
      {
        heading: "Am, is, are",
        body: `The verb **to be** changes with the subject: **I am**, **you/we/they are**, **he/she/it is**.

- I **am** a student.
- You **are** my friend.
- She **is** a nurse.

We usually use short forms in speaking: **I'm**, **you're**, **he's**, **she's**, **it's**, **we're**, **they're**.`,
      },
      {
        heading: "Negative sentences",
        body: `To make a negative, add **not** after the verb: **am not**, **is not**, **are not**.

Short negative forms: **isn't** (is not) and **aren't** (are not). Note that **I'm not** has no short form for "am not".

- He **isn't** at home.
- They **aren't** ready.`,
      },
      {
        heading: "Yes/no questions",
        body: `To ask a question, put the verb before the subject: **Am I**…? **Is she**…? **Are you**…?

- **Is he** a doctor? — Yes, he **is**. / No, he **isn't**.
- **Are you** tired? — Yes, I **am**. / No, I'm not.`,
      },
    ],
    phrases: [
      { en: "I am a student.", pt: "Eu sou estudante." },
      { en: "She is my sister.", pt: "Ela é minha irmã." },
      { en: "We are ready.", pt: "Nós estamos prontos." },
      { en: "He isn't at home.", pt: "Ele não está em casa." },
      { en: "Are you tired?", pt: "Você está cansado(a)?" },
      { en: "They aren't from Brazil.", pt: "Eles não são do Brasil." },
    ],
    quiz: [
      {
        id: "en-a1-02-q1",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: ["She am a teacher.", "She is a teacher.", "She are a teacher.", "She be a teacher."],
        correctIndex: 1,
        explanation: "Use **is** with **she**, **he** and **it**.",
      },
      {
        id: "en-a1-02-q2",
        type: "gap",
        prompt: "Complete: We ___ ready for the class.",
        answer: "are",
        acceptedAnswers: ["Are"],
        explanation: "Use **are** with **we**, **you** and **they**.",
      },
      {
        id: "en-a1-02-q3",
        type: "mcq",
        prompt: "Which is the negative of \"He is happy\"?",
        options: ["He not is happy.", "He isn't happy.", "He aren't happy.", "He don't happy."],
        correctIndex: 1,
        explanation: "The negative of **is** is **isn't** (is not).",
      },
      {
        id: "en-a1-02-q4",
        type: "gap",
        prompt: "Complete the question: ___ you a nurse?",
        answer: "Are",
        acceptedAnswers: ["are"],
        explanation: "Questions with **you** use **Are** before the subject.",
      },
      {
        id: "en-a1-02-q5",
        type: "mcq",
        prompt: "What is the short form of \"I am not\"?",
        options: ["I'm not", "I amn't", "I aren't", "I'sn't"],
        correctIndex: 0,
        explanation: "There is no single short form for \"am not\"; we say **I'm not**.",
      },
      {
        id: "en-a1-02-q6",
        type: "gap",
        prompt: "Complete: They ___ (not) from London.",
        answer: "aren't",
        acceptedAnswers: ["are not", "Aren't", "Are not"],
        explanation: "The negative of **are** is **aren't** (are not).",
      },
    ],
    practiceTip: "Say five sentences about yourself using am/is/are before you go to sleep.",
  },
  {
    id: "en-a1-03",
    level: "A1",
    order: 3,
    title: "Subject pronouns and possessive adjectives",
    topic: "Subject pronouns & possessive adjectives (I/my, you/your, he/his…)",
    minutes: 7,
    goals: [
      "Use subject pronouns I, you, he, she, it, we, they correctly",
      "Match possessive adjectives with the right pronoun",
      "Talk about people and things that belong to them",
    ],
    teach: [
      {
        heading: "Subject pronouns",
        body: `Subject pronouns replace the name of a person or thing: **I, you, he, she, it, we, they**.

- **He** is my brother. (He = a man)
- **She** is a doctor. (She = a woman)
- **It** is a small clinic. (It = a thing or place)
- **They** are my colleagues. (They = more than one person)`,
      },
      {
        heading: "Possessive adjectives",
        body: `Possessive adjectives show who something belongs to: **my, your, his, her, its, our, their**.

- **My** name is Rita.
- **Your** phone is on the table.
- **His** appointment is at 9 a.m.; **her** appointment is at 10 a.m.
- **Our** hospital is near the centre. **Their** flat is small.`,
      },
      {
        heading: "Common mistakes",
        body: `Do not confuse **his** (for a man) with **her** (for a woman). Also remember **its** (possessive, no apostrophe) is different from **it's** (it is).

- This is Marcos and this is **his** car.
- This is Ana and this is **her** car.
- The clinic has **its** own car park.`,
      },
    ],
    phrases: [
      { en: "My name is Beatriz.", pt: "Meu nome é Beatriz." },
      { en: "This is his phone.", pt: "Este é o celular dele." },
      { en: "Her sister is a nurse.", pt: "A irmã dela é enfermeira." },
      { en: "Our house is small.", pt: "Nossa casa é pequena." },
      { en: "Their children study English.", pt: "Os filhos deles estudam inglês." },
      { en: "Is this your bag?", pt: "Esta é a sua bolsa?" },
    ],
    quiz: [
      {
        id: "en-a1-03-q1",
        type: "mcq",
        prompt: "Choose the correct pronoun: \"___ is a doctor\" (talking about a woman).",
        options: ["He", "She", "It", "They"],
        correctIndex: 1,
        explanation: "**She** is the subject pronoun for a woman.",
      },
      {
        id: "en-a1-03-q2",
        type: "gap",
        prompt: "Complete: This is Paulo. ___ car is new.",
        answer: "His",
        acceptedAnswers: ["his"],
        explanation: "**His** is the possessive adjective for a man (Paulo).",
      },
      {
        id: "en-a1-03-q3",
        type: "mcq",
        prompt: "Which sentence is correct?",
        options: ["Her name is Carla.", "She name is Carla.", "Hers name is Carla.", "His name is Carla."],
        correctIndex: 0,
        explanation: "**Her** is the possessive adjective used before a noun (name) for a woman.",
      },
      {
        id: "en-a1-03-q4",
        type: "gap",
        prompt: "Complete: We love ___ (we) new house.",
        answer: "our",
        acceptedAnswers: ["Our"],
        explanation: "**Our** is the possessive adjective for **we**.",
      },
      {
        id: "en-a1-03-q5",
        type: "mcq",
        prompt: "Choose the correct word: \"The dog is wagging ___ tail.\"",
        options: ["it's", "its", "their", "his"],
        correctIndex: 1,
        explanation: "**Its** (no apostrophe) is possessive. **It's** means \"it is\".",
      },
      {
        id: "en-a1-03-q6",
        type: "gap",
        prompt: "Complete: They are teachers. ___ students like them.",
        answer: "Their",
        acceptedAnswers: ["their"],
        explanation: "**Their** is the possessive adjective for **they**.",
      },
    ],
    practiceTip: "Point at objects around your house and name their owner using possessive adjectives.",
  },
  {
    id: "en-a1-04",
    level: "A1",
    order: 4,
    title: "Numbers, age and clock time",
    topic: "Numbers, age & clock time",
    minutes: 8,
    goals: [
      "Count from 0 to 100 and use numbers in daily situations",
      "Ask and answer about someone's age",
      "Tell the time using o'clock, half past and quarter to/past",
    ],
    teach: [
      {
        heading: "Numbers",
        body: `Learn numbers in groups: 0–10 (zero, one, two, three, four, five, six, seven, eight, nine, ten), 11–20 (eleven to twenty), and the tens (twenty, thirty, forty… one hundred).

For numbers like 21 or 35, join the ten and the unit with a hyphen: **twenty-one**, **thirty-five**.`,
      },
      {
        heading: "Talking about age",
        body: `To ask someone's age, say "How old are you?" The answer uses the verb **to be**, not "have": "I **am** twenty-five years old" or simply "I'm twenty-five."

- How old is she? — She **is** thirty.
- How old are your children? — They **are** eight and ten.`,
      },
      {
        heading: "Telling the time",
        body: `Say "It's + hour + o'clock" for exact hours: "It's three o'clock."

For other times, use **past** (after the hour) and **to** (before the next hour): "half past four" (4:30), "quarter past six" (6:15), "quarter to nine" (8:45), "ten past two" (2:10).

Ask the time with "What time is it?" or "What's the time?"`,
      },
    ],
    phrases: [
      { en: "How old are you?", pt: "Quantos anos você tem?" },
      { en: "I'm twenty-eight years old.", pt: "Tenho vinte e oito anos." },
      { en: "What time is it?", pt: "Que horas são?" },
      { en: "It's half past three.", pt: "São três e meia." },
      { en: "It's a quarter to seven.", pt: "Faltam quinze para as sete." },
      { en: "My appointment is at ten o'clock.", pt: "Minha consulta é às dez horas." },
    ],
    quiz: [
      {
        id: "en-a1-04-q1",
        type: "mcq",
        prompt: "How do you ask about age?",
        options: ["How much are you?", "How old are you?", "How many are you?", "How is you age?"],
        correctIndex: 1,
        explanation: "\"How old are you?\" is the correct way to ask someone's age.",
      },
      {
        id: "en-a1-04-q2",
        type: "gap",
        prompt: "Complete: It's ___ o'clock (3:00).",
        answer: "three",
        acceptedAnswers: ["Three"],
        explanation: "\"It's three o'clock\" gives the exact hour.",
      },
      {
        id: "en-a1-04-q3",
        type: "mcq",
        prompt: "What time is 6:15?",
        options: ["Half past six", "Quarter to six", "Quarter past six", "Six to quarter"],
        correctIndex: 2,
        explanation: "6:15 is fifteen minutes after six, so it is \"quarter past six\".",
      },
      {
        id: "en-a1-04-q4",
        type: "gap",
        prompt: "Complete: She ___ (be) thirty years old.",
        answer: "is",
        acceptedAnswers: ["Is"],
        explanation: "We use the verb **to be**, not \"have\", to talk about age in English.",
      },
      {
        id: "en-a1-04-q5",
        type: "mcq",
        prompt: "What time is 8:45?",
        options: ["Quarter to nine", "Quarter past eight", "Half past eight", "Nine to quarter"],
        correctIndex: 0,
        explanation: "8:45 is fifteen minutes before nine, so it is \"quarter to nine\".",
      },
      {
        id: "en-a1-04-q6",
        type: "gap",
        prompt: "Write the number 21 in words.",
        answer: "twenty-one",
        acceptedAnswers: ["Twenty-one", "twenty one", "Twenty one"],
        explanation: "Numbers between 21 and 99 join the ten and the unit with a hyphen: twenty-one.",
      },
    ],
    practiceTip: "Practise telling the time every time you check your phone or watch.",
  },
  {
    id: "en-a1-05",
    level: "A1",
    order: 5,
    title: "Days, months and dates",
    topic: "Days, months & dates",
    minutes: 7,
    goals: [
      "Name the days of the week and months of the year",
      "Say and write dates correctly",
      "Ask and answer \"What's the date today?\"",
    ],
    teach: [
      {
        heading: "Days and months",
        body: `The days of the week are: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday. Always write them with a capital letter.

The months are: January, February, March, April, May, June, July, August, September, October, November and December — also with a capital letter.`,
      },
      {
        heading: "Ordinal numbers for dates",
        body: `Dates use ordinal numbers: 1st (first), 2nd (second), 3rd (third), 4th (fourth)… 31st (thirty-first).

In British English, we usually write the date as day–month–year: **3rd June 2026** or **3/6/2026**. We say it as "the third of June."`,
      },
      {
        heading: "Asking about dates",
        body: `To ask about the date, say "What's the date today?" or "What day is it today?"

- What's the date today? — It's the **fifteenth of May**.
- What day is it? — It's **Tuesday**.
- My birthday is **on** the tenth of March.`,
      },
    ],
    phrases: [
      { en: "What's the date today?", pt: "Qual é a data de hoje?" },
      { en: "Today is Monday.", pt: "Hoje é segunda-feira." },
      { en: "My birthday is in July.", pt: "Meu aniversário é em julho." },
      { en: "The appointment is on the third of June.", pt: "A consulta é no dia três de junho." },
      { en: "See you next Friday.", pt: "Até sexta-feira que vem." },
      { en: "What day is it today?", pt: "Que dia é hoje?" },
    ],
    quiz: [
      {
        id: "en-a1-05-q1",
        type: "mcq",
        prompt: "Which day comes after Wednesday?",
        options: ["Monday", "Tuesday", "Thursday", "Friday"],
        correctIndex: 2,
        explanation: "The order is Monday, Tuesday, Wednesday, Thursday, Friday, so Thursday comes after Wednesday.",
      },
      {
        id: "en-a1-05-q2",
        type: "gap",
        prompt: "Complete: My birthday is ___ March (month).",
        answer: "in",
        acceptedAnswers: ["In"],
        explanation: "We use **in** with months: \"in March\", \"in July\".",
      },
      {
        id: "en-a1-05-q3",
        type: "mcq",
        prompt: "How do you say \"1st\" in words?",
        options: ["one", "first", "oneth", "onest"],
        correctIndex: 1,
        explanation: "\"1st\" is read as the ordinal number **first**.",
      },
      {
        id: "en-a1-05-q4",
        type: "gap",
        prompt: "Complete: The appointment is ___ Monday (day).",
        answer: "on",
        acceptedAnswers: ["On"],
        explanation: "We use **on** with days: \"on Monday\", \"on the third of June\".",
      },
      {
        id: "en-a1-05-q5",
        type: "mcq",
        prompt: "Which month comes before October?",
        options: ["November", "August", "September", "December"],
        correctIndex: 2,
        explanation: "The order is August, September, October, November, so September comes before October.",
      },
      {
        id: "en-a1-05-q6",
        type: "gap",
        prompt: "Write the ordinal number for 3.",
        answer: "third",
        acceptedAnswers: ["3rd", "Third"],
        explanation: "The ordinal form of \"three\" is **third**.",
      },
    ],
    practiceTip: "Write today's date in English at the top of your notebook every day.",
  },
  {
    id: "en-a1-06",
    level: "A1",
    order: 6,
    title: "Family and people",
    topic: "Family & people (jobs light)",
    minutes: 7,
    goals: [
      "Name close family members",
      "Describe simple jobs with a/an + job",
      "Talk briefly about your family",
    ],
    teach: [
      {
        heading: "Family words",
        body: `Close family: **mother/mum**, **father/dad**, **parents**, **brother**, **sister**, **son**, **daughter**, **husband**, **wife**, **grandmother/grandma**, **grandfather/grandpa**.

- This is my **mother**. Her name is Rosa.
- I have one **brother** and two **sisters**.`,
      },
      {
        heading: "Jobs",
        body: `Use **a/an + job** to say what someone does: "She's **a** nurse." "He's **an** engineer." (use **an** before a vowel sound: an engineer, an actor).

Common jobs: doctor, nurse, teacher, engineer, dentist, receptionist, driver, student.`,
      },
      {
        heading: "Talking about your family",
        body: `You can describe your family with simple sentences: "I have a big family." "My father is a teacher." "My sister is a student."

- How many brothers and sisters do you have? — I have one brother.
- What does your mother do? — She's a doctor.`,
      },
    ],
    phrases: [
      { en: "This is my mother.", pt: "Esta é a minha mãe." },
      { en: "I have two brothers.", pt: "Eu tenho dois irmãos." },
      { en: "My father is a doctor.", pt: "Meu pai é médico." },
      { en: "She's my sister.", pt: "Ela é minha irmã." },
      { en: "He's an engineer.", pt: "Ele é engenheiro." },
      { en: "My grandmother is seventy years old.", pt: "Minha avó tem setenta anos." },
    ],
    quiz: [
      {
        id: "en-a1-06-q1",
        type: "mcq",
        prompt: "What do we call your mother's mother?",
        options: ["Aunt", "Grandmother", "Sister", "Daughter"],
        correctIndex: 1,
        explanation: "Your mother's mother is your **grandmother**.",
      },
      {
        id: "en-a1-06-q2",
        type: "gap",
        prompt: "Complete: He's ___ engineer (use a/an).",
        answer: "an",
        acceptedAnswers: ["An"],
        explanation: "\"Engineer\" starts with a vowel sound, so we use **an**.",
      },
      {
        id: "en-a1-06-q3",
        type: "mcq",
        prompt: "Choose the correct job sentence.",
        options: ["She a nurse.", "She's a nurse.", "She's an nurse.", "She nurse."],
        correctIndex: 1,
        explanation: "We need the verb **is** (short form 's) and the article **a** before \"nurse\".",
      },
      {
        id: "en-a1-06-q4",
        type: "gap",
        prompt: "Complete: My father's son is my ___.",
        answer: "brother",
        acceptedAnswers: ["Brother"],
        explanation: "A male child of your parents is your **brother**.",
      },
      {
        id: "en-a1-06-q5",
        type: "mcq",
        prompt: "Which word describes a male child?",
        options: ["Daughter", "Son", "Wife", "Husband"],
        correctIndex: 1,
        explanation: "A male child is a **son**; a female child is a daughter.",
      },
      {
        id: "en-a1-06-q6",
        type: "gap",
        prompt: "Complete: What ___ your mother do? (job)",
        answer: "does",
        acceptedAnswers: ["Does"],
        explanation: "\"What does she do?\" is the standard way to ask about someone's job.",
      },
    ],
    practiceTip: "Draw your family tree and label each person in English.",
  },
  {
    id: "en-a1-07",
    level: "A1",
    order: 7,
    title: "There is and there are",
    topic: "There is / there are",
    minutes: 7,
    goals: [
      "Use there is with singular and uncountable nouns",
      "Use there are with plural nouns",
      "Make negatives and questions with there is/are",
    ],
    teach: [
      {
        heading: "There is / there are",
        body: `Use **There is** (singular) and **There are** (plural) to say that something exists.

- **There is** a pharmacy near here.
- **There are** three chairs in the waiting room.

Short form: **There's** a doctor available.`,
      },
      {
        heading: "Negatives",
        body: `Negatives: **There isn't** (singular) and **There aren't** (plural).

- **There isn't** a lift in this building.
- **There aren't** any seats free.

We often use **any** with plural negatives: "There aren't **any** beds."`,
      },
      {
        heading: "Questions",
        body: `Questions: **Is there…?** and **Are there…?**

- **Is there** a bathroom here? — Yes, **there is**.
- **Are there** any doctors on duty? — No, **there aren't**.`,
      },
    ],
    phrases: [
      { en: "There is a hospital near my house.", pt: "Há um hospital perto da minha casa." },
      { en: "There are two beds in the room.", pt: "Há duas camas no quarto." },
      { en: "There isn't a pharmacy here.", pt: "Não há farmácia aqui." },
      { en: "Is there a doctor available?", pt: "Há algum médico disponível?" },
      { en: "Are there any seats free?", pt: "Há alguma cadeira livre?" },
      { en: "There aren't any towels.", pt: "Não há toalhas." },
    ],
    quiz: [
      {
        id: "en-a1-07-q1",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: ["There is three chairs.", "There are three chairs.", "There a three chairs.", "Three chairs there are."],
        correctIndex: 1,
        explanation: "\"Chairs\" is plural, so we use **there are**.",
      },
      {
        id: "en-a1-07-q2",
        type: "gap",
        prompt: "Complete: ___ a pharmacy on this street? (question)",
        answer: "Is there",
        acceptedAnswers: ["is there"],
        explanation: "Questions with a singular noun start with **Is there**.",
      },
      {
        id: "en-a1-07-q3",
        type: "mcq",
        prompt: "Which is the negative form for plural nouns?",
        options: ["There isn't", "There aren't", "There not are", "There no are"],
        correctIndex: 1,
        explanation: "**There aren't** is the negative form used with plural nouns.",
      },
      {
        id: "en-a1-07-q4",
        type: "gap",
        prompt: "Complete: There ___ any free beds today.",
        answer: "aren't",
        acceptedAnswers: ["are not", "Aren't"],
        explanation: "With plural nouns and \"any\", we use **aren't** in negatives.",
      },
      {
        id: "en-a1-07-q5",
        type: "mcq",
        prompt: "Choose the correct question.",
        options: ["Are there a doctor?", "Is there a doctor?", "There is a doctor?", "Does there a doctor?"],
        correctIndex: 1,
        explanation: "\"Doctor\" is singular, so the question uses **Is there**.",
      },
      {
        id: "en-a1-07-q6",
        type: "gap",
        prompt: "Complete: There ___ a lift in this building.",
        answer: "isn't",
        acceptedAnswers: ["is not", "Isn't"],
        explanation: "With a singular noun, the negative form is **isn't**.",
      },
    ],
    practiceTip: "Look around your room and make five sentences with there is/there are.",
  },
  {
    id: "en-a1-08",
    level: "A1",
    order: 8,
    title: "This, that, these and those",
    topic: "This / that / these / those",
    minutes: 6,
    goals: [
      "Use this/that for singular things and these/those for plural things",
      "Distinguish near (this/these) and far (that/those)",
      "Point to and describe objects",
    ],
    teach: [
      {
        heading: "Near and far",
        body: `**This** and **these** are for things close to you. **That** and **those** are for things far away.

- **This** pen (in my hand) is blue.
- **That** building (across the street) is a hospital.`,
      },
      {
        heading: "Singular and plural",
        body: `**This/that** are singular. **These/those** are plural.

- **This** is my bag. **These** are my keys.
- **That** is her car. **Those** are her shoes.`,
      },
      {
        heading: "Using them in conversation",
        body: `We often use these words with a noun or alone:

- **This** book is interesting. / **This** is interesting.
- Can I have **that**, please? (pointing at something far away)
- **These** apples are fresh. **Those** apples are old.`,
      },
    ],
    phrases: [
      { en: "This is my bag.", pt: "Esta é a minha bolsa." },
      { en: "That is the hospital.", pt: "Aquele é o hospital." },
      { en: "These are my keys.", pt: "Estas são as minhas chaves." },
      { en: "Those shoes are nice.", pt: "Aqueles sapatos são bonitos." },
      { en: "Can I have this, please?", pt: "Posso ficar com isto, por favor?" },
      { en: "Is that your car?", pt: "Aquele é o seu carro?" },
    ],
    quiz: [
      {
        id: "en-a1-08-q1",
        type: "mcq",
        prompt: "Choose the correct word for a plural thing far away.",
        options: ["This", "That", "These", "Those"],
        correctIndex: 3,
        explanation: "**Those** is used for plural things that are far away.",
      },
      {
        id: "en-a1-08-q2",
        type: "gap",
        prompt: "Complete: ___ is my phone (in my hand, singular).",
        answer: "This",
        acceptedAnswers: ["this"],
        explanation: "**This** is used for a singular thing close to you.",
      },
      {
        id: "en-a1-08-q3",
        type: "mcq",
        prompt: "Which sentence is correct for one object close to you?",
        options: ["These is my pen.", "This is my pen.", "That are my pen.", "Those is my pen."],
        correctIndex: 1,
        explanation: "\"Pen\" is singular and close, so we use **This is**.",
      },
      {
        id: "en-a1-08-q4",
        type: "gap",
        prompt: "Complete: ___ are my parents (people far away, plural).",
        answer: "Those",
        acceptedAnswers: ["those"],
        explanation: "**Those** is used for plural people or things that are far away.",
      },
      {
        id: "en-a1-08-q5",
        type: "mcq",
        prompt: "Choose the correct singular form for something far away.",
        options: ["This", "These", "That", "Those"],
        correctIndex: 2,
        explanation: "**That** is singular and used for something far from you.",
      },
      {
        id: "en-a1-08-q6",
        type: "gap",
        prompt: "Complete: ___ shoes over there are nice (plural, far).",
        answer: "Those",
        acceptedAnswers: ["those"],
        explanation: "\"Shoes\" is plural and \"over there\" shows distance, so we use **Those**.",
      },
    ],
    practiceTip: "Pick up objects near you and far from you and practise this/that/these/those.",
  },
  {
    id: "en-a1-09",
    level: "A1",
    order: 9,
    title: "Present simple: daily routines",
    topic: "Present simple — daily routines (affirmative)",
    minutes: 8,
    goals: [
      "Form the present simple with I/you/we/they and he/she/it",
      "Talk about habits and daily routines",
      "Use time expressions like always, usually and every day",
    ],
    teach: [
      {
        heading: "Present simple forms",
        body: `Use the base verb with **I, you, we, they**: "I **work**", "They **eat**". Add **-s** with **he, she, it**: "He **works**", "She **eats**".

Spelling rules for **he/she/it**: verbs ending in -sh, -ch, -ss, -x, -o add **-es** (watch → watch**es**, go → go**es**). Verbs ending in consonant + y change to **-ies** (study → stud**ies**).`,
      },
      {
        heading: "Daily routines",
        body: `The present simple describes habits and routines: "I **wake up** at seven." "She **starts** work at nine." "We **have** lunch at noon."

- I **get up**, **have** breakfast and **go** to work every day.
- He **finishes** work at five o'clock.`,
      },
      {
        heading: "Frequency words",
        body: `Words like **always**, **usually**, **often** and **sometimes** go before the main verb, but after the verb **to be**.

- I **always** brush my teeth in the morning.
- She is **usually** on time.
- We eat **every day** at seven.`,
      },
    ],
    phrases: [
      { en: "I wake up at six thirty.", pt: "Eu acordo às seis e meia." },
      { en: "She works in a hospital.", pt: "Ela trabalha em um hospital." },
      { en: "We usually have lunch at noon.", pt: "Nós normalmente almoçamos ao meio-dia." },
      { en: "He goes to bed early.", pt: "Ele vai dormir cedo." },
      { en: "They study English every day.", pt: "Eles estudam inglês todos os dias." },
      { en: "I always drink water in the morning.", pt: "Eu sempre bebo água de manhã." },
    ],
    quiz: [
      {
        id: "en-a1-09-q1",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: ["She work in a clinic.", "She works in a clinic.", "She working in a clinic.", "She is work in a clinic."],
        correctIndex: 1,
        explanation: "With **she**, add **-s** to the base verb: \"works\".",
      },
      {
        id: "en-a1-09-q2",
        type: "gap",
        prompt: "Complete: He ___ (study) English every day.",
        answer: "studies",
        acceptedAnswers: ["Studies"],
        explanation: "Verbs ending in consonant + y change to **-ies**: study → studies.",
      },
      {
        id: "en-a1-09-q3",
        type: "mcq",
        prompt: "Which sentence uses the frequency word correctly?",
        options: ["I brush always my teeth.", "I always brush my teeth.", "I brush my teeth always always.", "Brush I always my teeth."],
        correctIndex: 1,
        explanation: "Frequency words like **always** go before the main verb.",
      },
      {
        id: "en-a1-09-q4",
        type: "gap",
        prompt: "Complete: They ___ (go) to work by bus.",
        answer: "go",
        acceptedAnswers: ["Go"],
        explanation: "With **they**, use the base form of the verb without -s.",
      },
      {
        id: "en-a1-09-q5",
        type: "mcq",
        prompt: "Choose the correct third-person form of \"watch\".",
        options: ["watchs", "watches", "watchies", "watchings"],
        correctIndex: 1,
        explanation: "Verbs ending in -ch add **-es**: watch → watches.",
      },
      {
        id: "en-a1-09-q6",
        type: "gap",
        prompt: "Complete: We ___ (have) breakfast at seven every morning.",
        answer: "have",
        acceptedAnswers: ["Have"],
        explanation: "With **we**, use the base form of the verb: \"have\".",
      },
    ],
    practiceTip: "Write your daily routine as a list of five present simple sentences.",
  },
  {
    id: "en-a1-10",
    level: "A1",
    order: 10,
    title: "Present simple: negatives and questions",
    topic: "Present simple — negatives & questions (do/does)",
    minutes: 8,
    goals: [
      "Make negative sentences with don't and doesn't",
      "Form yes/no questions with do and does",
      "Answer short questions correctly",
    ],
    teach: [
      {
        heading: "Negatives",
        body: `Use **don't** (do not) with I/you/we/they and **doesn't** (does not) with he/she/it. After don't/doesn't, use the base verb without -s.

- I **don't** like coffee.
- She **doesn't** work on Sundays.
- They **don't** speak French.`,
      },
      {
        heading: "Yes/no questions",
        body: `Start the question with **Do** (I/you/we/they) or **Does** (he/she/it), followed by the subject and the base verb.

- **Do** you **work** here? — Yes, I **do**. / No, I **don't**.
- **Does** he **speak** English? — Yes, he **does**. / No, he **doesn't**.`,
      },
      {
        heading: "Wh- questions",
        body: `You can also add a question word before **do/does**: What, Where, When, Why, How.

- **Where do** you **live**?
- **What time does** the clinic **open**?
- **Why doesn't** she **drive** to work?`,
      },
    ],
    phrases: [
      { en: "I don't drink coffee.", pt: "Eu não bebo café." },
      { en: "She doesn't work on Sundays.", pt: "Ela não trabalha aos domingos." },
      { en: "Do you speak English?", pt: "Você fala inglês?" },
      { en: "Does he live near here?", pt: "Ele mora perto daqui?" },
      { en: "What time does the clinic open?", pt: "A que horas a clínica abre?" },
      { en: "They don't have children.", pt: "Eles não têm filhos." },
    ],
    quiz: [
      {
        id: "en-a1-10-q1",
        type: "mcq",
        prompt: "Choose the correct negative.",
        options: ["He don't like tea.", "He doesn't likes tea.", "He doesn't like tea.", "He not like tea."],
        correctIndex: 2,
        explanation: "With **he**, use **doesn't** followed by the base verb: \"doesn't like\".",
      },
      {
        id: "en-a1-10-q2",
        type: "gap",
        prompt: "Complete: ___ you speak Portuguese? (question)",
        answer: "Do",
        acceptedAnswers: ["do"],
        explanation: "Questions with **you** start with **Do**.",
      },
      {
        id: "en-a1-10-q3",
        type: "mcq",
        prompt: "Which question is correct for \"she\"?",
        options: ["Does she works here?", "Do she work here?", "Does she work here?", "Is she work here?"],
        correctIndex: 2,
        explanation: "With **she**, the question uses **Does** and the base verb: \"Does she work here?\"",
      },
      {
        id: "en-a1-10-q4",
        type: "gap",
        prompt: "Complete: My brother ___ (not/like) fish.",
        answer: "doesn't",
        acceptedAnswers: ["does not", "Doesn't"],
        explanation: "With **my brother** (he), the negative form is **doesn't**.",
      },
      {
        id: "en-a1-10-q5",
        type: "mcq",
        prompt: "Choose the short answer for \"Do you live here?\" (yes).",
        options: ["Yes, I does.", "Yes, I do.", "Yes, I am.", "Yes, I have."],
        correctIndex: 1,
        explanation: "Short answers repeat the auxiliary verb: \"Yes, I do.\"",
      },
      {
        id: "en-a1-10-q6",
        type: "gap",
        prompt: "Complete: What time ___ the pharmacy close?",
        answer: "does",
        acceptedAnswers: ["Does"],
        explanation: "\"The pharmacy\" is singular (it), so we use **does** in the question.",
      },
    ],
    practiceTip: "Ask a friend five questions about their routine using do/does.",
  },
  {
    id: "en-a1-11",
    level: "A1",
    order: 11,
    title: "Food, drinks and a/an",
    topic: "Food & drinks + a/an",
    minutes: 7,
    goals: [
      "Name common food and drinks",
      "Use a/an correctly before singular nouns",
      "Order food and drink politely",
    ],
    teach: [
      {
        heading: "Common food and drinks",
        body: `Learn everyday words: **bread, rice, meat, chicken, fish, fruit, vegetables, water, milk, coffee, tea, juice**.

- For breakfast, I usually have bread and coffee.
- Would you like some water?`,
      },
      {
        heading: "A and an",
        body: `Use **a** before a consonant sound and **an** before a vowel sound (a, e, i, o, u).

- **a** banana, **a** sandwich, **a** cup of tea
- **an** apple, **an** egg, **an** orange

Remember it is the **sound**, not the letter: "**an** hour" (the h is silent), but "**a** university" (sounds like "yoo").`,
      },
      {
        heading: "Ordering food",
        body: `To order politely, say "I'd like…" or "Can I have…, please?"

- I'd like **a** coffee, please.
- Can I have **an** orange juice?
- What would you like to drink? — I'll have some water, thanks.`,
      },
    ],
    phrases: [
      { en: "I'd like a coffee, please.", pt: "Eu gostaria de um café, por favor." },
      { en: "Can I have an apple?", pt: "Posso comer uma maçã?" },
      { en: "I'm hungry.", pt: "Estou com fome." },
      { en: "I'm thirsty.", pt: "Estou com sede." },
      { en: "What would you like to eat?", pt: "O que você gostaria de comer?" },
      { en: "She drinks tea every morning.", pt: "Ela bebe chá todas as manhãs." },
    ],
    quiz: [
      {
        id: "en-a1-11-q1",
        type: "mcq",
        prompt: "Choose the correct article: \"___ apple\".",
        options: ["a", "an", "the", "no article"],
        correctIndex: 1,
        explanation: "\"Apple\" starts with a vowel sound, so we use **an**.",
      },
      {
        id: "en-a1-11-q2",
        type: "gap",
        prompt: "Complete: I'd like ___ cup of tea (use a/an).",
        answer: "a",
        acceptedAnswers: ["A"],
        explanation: "\"Cup\" starts with a consonant sound, so we use **a**.",
      },
      {
        id: "en-a1-11-q3",
        type: "mcq",
        prompt: "Which word needs \"an\" before it?",
        options: ["banana", "orange", "sandwich", "cup"],
        correctIndex: 1,
        explanation: "\"Orange\" starts with a vowel sound, so it takes **an**.",
      },
      {
        id: "en-a1-11-q4",
        type: "gap",
        prompt: "Complete: Can I have ___ glass of water, please?",
        answer: "a",
        acceptedAnswers: ["A"],
        explanation: "\"Glass\" starts with a consonant sound, so we use **a**.",
      },
      {
        id: "en-a1-11-q5",
        type: "mcq",
        prompt: "How do you say you want to eat?",
        options: ["I'm thirsty.", "I'm hungry.", "I'm tired.", "I'm cold."],
        correctIndex: 1,
        explanation: "\"I'm hungry\" means you want to eat. \"I'm thirsty\" means you want to drink.",
      },
      {
        id: "en-a1-11-q6",
        type: "gap",
        prompt: "Complete: She has ___ egg for breakfast (use a/an).",
        answer: "an",
        acceptedAnswers: ["An"],
        explanation: "\"Egg\" starts with a vowel sound, so we use **an**.",
      },
    ],
    practiceTip: "Make a shopping list in English using a/an before each item.",
  },
  {
    id: "en-a1-12",
    level: "A1",
    order: 12,
    title: "Likes and dislikes",
    topic: "Likes & dislikes (like/love/hate + noun/-ing)",
    minutes: 7,
    goals: [
      "Talk about likes and dislikes with like, love and hate",
      "Use these verbs with a noun or with -ing",
      "Ask other people about their preferences",
    ],
    teach: [
      {
        heading: "Like, love and hate",
        body: `Use **like**, **love** and **hate** to talk about feelings towards things and activities. Remember the **-s** for he/she/it: "She **likes** tea."

- I **like** football.
- He **loves** his job.
- They **hate** waiting in queues.`,
      },
      {
        heading: "Verb + -ing",
        body: `After like/love/hate, you can also use a verb ending in **-ing**.

- I **like** reading books.
- She **loves** cooking.
- We **hate** getting up early.

Note: use **don't/doesn't like** for the negative: "I don't like running."`,
      },
      {
        heading: "Asking about preferences",
        body: `To ask about preferences, use "Do you like…?"

- **Do you like** coffee? — Yes, I **love** it.
- **Does he like** swimming? — No, he **doesn't**; he prefers walking.`,
      },
    ],
    phrases: [
      { en: "I like coffee.", pt: "Eu gosto de café." },
      { en: "She loves reading.", pt: "Ela adora ler." },
      { en: "He hates waiting.", pt: "Ele odeia esperar." },
      { en: "Do you like football?", pt: "Você gosta de futebol?" },
      { en: "I don't like cold weather.", pt: "Eu não gosto de tempo frio." },
      { en: "We love travelling.", pt: "Nós adoramos viajar." },
    ],
    quiz: [
      {
        id: "en-a1-12-q1",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: ["She like tea.", "She likes tea.", "She liking tea.", "She is like tea."],
        correctIndex: 1,
        explanation: "With **she**, add **-s** to the verb: \"likes\".",
      },
      {
        id: "en-a1-12-q2",
        type: "gap",
        prompt: "Complete: I love ___ (cook) at weekends.",
        answer: "cooking",
        acceptedAnswers: ["Cooking"],
        explanation: "After **love**, we can use a verb ending in **-ing**: \"cooking\".",
      },
      {
        id: "en-a1-12-q3",
        type: "mcq",
        prompt: "Which sentence is a negative?",
        options: ["I like swimming.", "I don't like swimming.", "I likes swimming.", "I doesn't like swimming."],
        correctIndex: 1,
        explanation: "The negative form with **I** is **don't like**.",
      },
      {
        id: "en-a1-12-q4",
        type: "gap",
        prompt: "Complete: Do you ___ (like) hot weather?",
        answer: "like",
        acceptedAnswers: ["Like"],
        explanation: "After **do**, use the base form of the verb: \"like\".",
      },
      {
        id: "en-a1-12-q5",
        type: "mcq",
        prompt: "Choose the correct question about a third person.",
        options: ["Does he likes football?", "Do he like football?", "Does he like football?", "Is he like football?"],
        correctIndex: 2,
        explanation: "With **he**, questions use **Does** and the base verb: \"Does he like…?\"",
      },
      {
        id: "en-a1-12-q6",
        type: "gap",
        prompt: "Complete: They hate ___ (wait) in queues.",
        answer: "waiting",
        acceptedAnswers: ["Waiting"],
        explanation: "After **hate**, we can use a verb ending in **-ing**: \"waiting\".",
      },
    ],
    practiceTip: "List three things you love and three things you hate doing.",
  },
  {
    id: "en-a1-13",
    level: "A1",
    order: 13,
    title: "Places in town",
    topic: "Places in town",
    minutes: 7,
    goals: [
      "Name common places in a town or city",
      "Ask for and give simple directions to a place",
      "Say where a place is located",
    ],
    teach: [
      {
        heading: "Common places",
        body: `Learn key places: **hospital, pharmacy, supermarket, bank, school, park, station, post office, restaurant, GP surgery**.

- The **pharmacy** sells medicine.
- The **GP surgery** is where you see a family doctor.`,
      },
      {
        heading: "Asking for a place",
        body: `Ask "Where's the…?" or "Is there a… near here?"

- **Where's** the nearest pharmacy?
- **Is there a** bank near here? — Yes, it's on Green Street.`,
      },
      {
        heading: "Simple directions",
        body: `Give directions with simple phrases: "go straight on", "turn left/right", "it's on the corner", "it's next to the bank".

- Go straight on, then turn left. The hospital is on the corner.
- The supermarket is next to the station.`,
      },
    ],
    phrases: [
      { en: "Where's the nearest pharmacy?", pt: "Onde fica a farmácia mais próxima?" },
      { en: "Is there a bank near here?", pt: "Tem um banco perto daqui?" },
      { en: "Turn left at the corner.", pt: "Vire à esquerda na esquina." },
      { en: "The hospital is next to the park.", pt: "O hospital fica ao lado do parque." },
      { en: "Go straight on.", pt: "Siga em frente." },
      { en: "I need to go to the post office.", pt: "Eu preciso ir aos correios." },
    ],
    quiz: [
      {
        id: "en-a1-13-q1",
        type: "mcq",
        prompt: "Where can you buy medicine?",
        options: ["Bank", "Pharmacy", "Park", "Station"],
        correctIndex: 1,
        explanation: "A **pharmacy** (chemist) sells medicine.",
      },
      {
        id: "en-a1-13-q2",
        type: "gap",
        prompt: "Complete: ___ the nearest hospital? (question)",
        answer: "Where's",
        acceptedAnswers: ["Where is", "where's", "where is"],
        explanation: "\"Where's the nearest…?\" asks about the closest place.",
      },
      {
        id: "en-a1-13-q3",
        type: "mcq",
        prompt: "Which phrase asks about a place near you?",
        options: ["Turn left, please.", "Is there a bank near here?", "I like the park.", "Go straight on."],
        correctIndex: 1,
        explanation: "\"Is there a… near here?\" is used to ask if a place exists nearby.",
      },
      {
        id: "en-a1-13-q4",
        type: "gap",
        prompt: "Complete: The supermarket is ___ to the bank (right beside it).",
        answer: "next",
        acceptedAnswers: ["Next"],
        explanation: "\"Next to\" means right beside something.",
      },
      {
        id: "en-a1-13-q5",
        type: "mcq",
        prompt: "Where do you see a family doctor?",
        options: ["Post office", "Supermarket", "GP surgery", "Station"],
        correctIndex: 2,
        explanation: "A **GP surgery** is where you see a family doctor in the UK.",
      },
      {
        id: "en-a1-13-q6",
        type: "gap",
        prompt: "Complete: ___ left at the corner (instruction).",
        answer: "Turn",
        acceptedAnswers: ["turn"],
        explanation: "\"Turn left/right\" is a common direction instruction.",
      },
    ],
    practiceTip: "Draw a simple map of your neighbourhood and label the places in English.",
  },
  {
    id: "en-a1-14",
    level: "A1",
    order: 14,
    title: "Prepositions of place",
    topic: "Prepositions of place (in, on, at, next to, between)",
    minutes: 7,
    goals: [
      "Use in, on and at to talk about location",
      "Use next to and between to describe position",
      "Describe where things and places are",
    ],
    teach: [
      {
        heading: "In, on and at",
        body: `Use **in** for enclosed spaces (rooms, buildings, cities, countries): **in** the room, **in** London.

Use **on** for surfaces: **on** the table, **on** the wall.

Use **at** for specific points or addresses: **at** the door, **at** the reception, **at** 45 High Street.`,
      },
      {
        heading: "Next to and between",
        body: `**Next to** means beside or close to something. **Between** means in the middle of two things.

- The pharmacy is **next to** the bank.
- The hospital is **between** the park and the school.`,
      },
      {
        heading: "Describing location",
        body: `Combine these words to describe places: "The chair is **in** the room, **next to** the window." "The clinic is **on** Green Street, **between** the bank and the school."

- Your appointment is **at** the reception desk.
- The medicine is **on** the shelf, **in** the cupboard.`,
      },
    ],
    phrases: [
      { en: "The keys are on the table.", pt: "As chaves estão em cima da mesa." },
      { en: "She's in the waiting room.", pt: "Ela está na sala de espera." },
      { en: "Wait at the reception, please.", pt: "Espere na recepção, por favor." },
      { en: "The pharmacy is next to the bank.", pt: "A farmácia fica ao lado do banco." },
      { en: "The clinic is between the park and the school.", pt: "A clínica fica entre o parque e a escola." },
      { en: "Please sit at the desk.", pt: "Por favor, sente-se à mesa." },
    ],
    quiz: [
      {
        id: "en-a1-14-q1",
        type: "mcq",
        prompt: "Choose the correct preposition: \"The book is ___ the table.\"",
        options: ["in", "on", "at", "between"],
        correctIndex: 1,
        explanation: "We use **on** for things on a surface, like a table.",
      },
      {
        id: "en-a1-14-q2",
        type: "gap",
        prompt: "Complete: She is ___ the waiting room (enclosed space).",
        answer: "in",
        acceptedAnswers: ["In"],
        explanation: "We use **in** for enclosed spaces like rooms.",
      },
      {
        id: "en-a1-14-q3",
        type: "mcq",
        prompt: "Which preposition means \"in the middle of two things\"?",
        options: ["Next to", "Between", "At", "On"],
        correctIndex: 1,
        explanation: "**Between** describes a position in the middle of two things.",
      },
      {
        id: "en-a1-14-q4",
        type: "gap",
        prompt: "Complete: Please wait ___ the reception desk (specific point).",
        answer: "at",
        acceptedAnswers: ["At"],
        explanation: "We use **at** for a specific point, like a desk or a door.",
      },
      {
        id: "en-a1-14-q5",
        type: "mcq",
        prompt: "Choose the correct preposition: \"The chemist is ___ the bank.\" (right beside)",
        options: ["between", "on", "next to", "in"],
        correctIndex: 2,
        explanation: "**Next to** means right beside something.",
      },
      {
        id: "en-a1-14-q6",
        type: "gap",
        prompt: "Complete: I live ___ São Paulo (city).",
        answer: "in",
        acceptedAnswers: ["In"],
        explanation: "We use **in** with cities, towns and countries.",
      },
    ],
    practiceTip: "Describe where three objects are in your room using in, on, at, next to and between.",
  },
  {
    id: "en-a1-15",
    level: "A1",
    order: 15,
    title: "Question words",
    topic: "Question words (what/where/who/when/why/how)",
    minutes: 7,
    goals: [
      "Use the main question words correctly",
      "Form simple wh- questions",
      "Understand the difference between similar question words",
    ],
    teach: [
      {
        heading: "The main question words",
        body: `**What** asks about things ("What's your name?"), **where** about places ("Where do you live?"), **who** about people ("Who is that?"), **when** about time ("When is your appointment?").

**Why** asks for a reason ("Why are you late?") and **how** asks about manner or condition ("How are you?").`,
      },
      {
        heading: "Word order",
        body: `Question word + auxiliary verb (do/does/is/are) + subject + main verb.

- **What time do** you **start** work?
- **Where does** she **live**?
- **Who is** that man?`,
      },
      {
        heading: "How + adjective",
        body: `**How** combines with adjectives to ask for details: **how old**, **how much**, **how many**, **how far**, **how often**.

- **How old** are you?
- **How often** do you visit the doctor? — Once a year.`,
      },
    ],
    phrases: [
      { en: "What's your name?", pt: "Qual é o seu nome?" },
      { en: "Where do you live?", pt: "Onde você mora?" },
      { en: "Who is that person?", pt: "Quem é essa pessoa?" },
      { en: "When is your appointment?", pt: "Quando é a sua consulta?" },
      { en: "Why are you late?", pt: "Por que você está atrasado(a)?" },
      { en: "How are you feeling today?", pt: "Como você está se sentindo hoje?" },
    ],
    quiz: [
      {
        id: "en-a1-15-q1",
        type: "mcq",
        prompt: "Which question word asks about a place?",
        options: ["Who", "What", "Where", "When"],
        correctIndex: 2,
        explanation: "**Where** is used to ask about places.",
      },
      {
        id: "en-a1-15-q2",
        type: "gap",
        prompt: "Complete: ___ is your appointment? (asking about time)",
        answer: "When",
        acceptedAnswers: ["when"],
        explanation: "**When** asks about time.",
      },
      {
        id: "en-a1-15-q3",
        type: "mcq",
        prompt: "Which question word asks for a reason?",
        options: ["How", "Why", "Who", "What"],
        correctIndex: 1,
        explanation: "**Why** asks for a reason or explanation.",
      },
      {
        id: "en-a1-15-q4",
        type: "gap",
        prompt: "Complete: ___ do you live? (place)",
        answer: "Where",
        acceptedAnswers: ["where"],
        explanation: "**Where** is the correct question word for a place.",
      },
      {
        id: "en-a1-15-q5",
        type: "mcq",
        prompt: "Choose the correct question.",
        options: ["What time you start work?", "What time does you start work?", "What time do you start work?", "What time do start you work?"],
        correctIndex: 2,
        explanation: "The correct order is: question word + do/does + subject + verb.",
      },
      {
        id: "en-a1-15-q6",
        type: "gap",
        prompt: "Complete: ___ is that man? (asking about a person)",
        answer: "Who",
        acceptedAnswers: ["who"],
        explanation: "**Who** asks about people.",
      },
    ],
    practiceTip: "Write six questions about a classmate using what, where, who, when, why and how.",
  },
  {
    id: "en-a1-16",
    level: "A1",
    order: 16,
    title: "How much and how many",
    topic: "How much / how many",
    minutes: 7,
    goals: [
      "Distinguish countable and uncountable nouns",
      "Use how many with countable nouns",
      "Use how much with uncountable nouns and prices",
    ],
    teach: [
      {
        heading: "Countable and uncountable nouns",
        body: `Countable nouns can be counted and have a plural: one apple, two apples. Uncountable nouns have no plural: water, rice, information, money.

- I have **two** brothers. (countable)
- I need **some** water. (uncountable)`,
      },
      {
        heading: "How many",
        body: `Use **How many** with plural countable nouns.

- **How many** brothers do you have? — I have **two**.
- **How many** tablets do I take? — **Two** tablets, twice a day.`,
      },
      {
        heading: "How much",
        body: `Use **How much** with uncountable nouns and to ask about price.

- **How much** water do you drink a day?
- **How much** is this medicine? — It's five pounds.`,
      },
    ],
    phrases: [
      { en: "How many brothers do you have?", pt: "Quantos irmãos você tem?" },
      { en: "How much water do you drink?", pt: "Quanta água você bebe?" },
      { en: "How much is this?", pt: "Quanto custa isto?" },
      { en: "How many tablets do I take?", pt: "Quantos comprimidos eu tomo?" },
      { en: "There isn't much time.", pt: "Não há muito tempo." },
      { en: "There are a few apples left.", pt: "Restam algumas maçãs." },
    ],
    quiz: [
      {
        id: "en-a1-16-q1",
        type: "mcq",
        prompt: "Which question word goes with \"water\" (uncountable)?",
        options: ["How many", "How much", "How old", "How far"],
        correctIndex: 1,
        explanation: "\"Water\" is uncountable, so we use **How much**.",
      },
      {
        id: "en-a1-16-q2",
        type: "gap",
        prompt: "Complete: ___ brothers do you have? (countable)",
        answer: "How many",
        acceptedAnswers: ["how many"],
        explanation: "\"Brothers\" is a countable plural noun, so we use **How many**.",
      },
      {
        id: "en-a1-16-q3",
        type: "mcq",
        prompt: "Choose the countable noun.",
        options: ["Water", "Rice", "Apple", "Money"],
        correctIndex: 2,
        explanation: "\"Apple\" can be counted (one apple, two apples), so it is countable.",
      },
      {
        id: "en-a1-16-q4",
        type: "gap",
        prompt: "Complete: ___ is this medicine? (asking price)",
        answer: "How much",
        acceptedAnswers: ["how much"],
        explanation: "We use **How much** to ask about price.",
      },
      {
        id: "en-a1-16-q5",
        type: "mcq",
        prompt: "Choose the correct question.",
        options: ["How much tablets?", "How many tablet?", "How many tablets?", "How much tablet?"],
        correctIndex: 2,
        explanation: "\"Tablets\" is countable and plural, so we use **How many tablets**.",
      },
      {
        id: "en-a1-16-q6",
        type: "gap",
        prompt: "Complete: How ___ money do you have?",
        answer: "much",
        acceptedAnswers: ["Much"],
        explanation: "\"Money\" is uncountable, so we use **How much**.",
      },
    ],
    practiceTip: "Look in your fridge and practise how much/how many with the food you find.",
  },
  {
    id: "en-a1-17",
    level: "A1",
    order: 17,
    title: "Can and can't",
    topic: "Can / can't (ability & permission)",
    minutes: 7,
    goals: [
      "Use can to talk about ability",
      "Use can/can't to ask for and give permission",
      "Form questions and negatives with can",
    ],
    teach: [
      {
        heading: "Can for ability",
        body: `**Can** + base verb shows that someone is able to do something. It doesn't change with he/she/it.

- I **can swim**.
- She **can speak** three languages.
- They **can't drive**. (cannot)`,
      },
      {
        heading: "Can for permission",
        body: `**Can** also asks for or gives permission.

- **Can I** open the window? — Yes, you **can**.
- **Can I** ask you a question? — Of course.
- You **can't** smoke here. (it isn't allowed)`,
      },
      {
        heading: "Questions and short answers",
        body: `Questions: **Can + subject + verb?** Short answers: **Yes, I can.** / **No, I can't.**

- **Can you** help me, please? — Yes, of course.
- **Can she** come tomorrow? — No, she **can't**.`,
      },
    ],
    phrases: [
      { en: "I can speak a little English.", pt: "Eu consigo falar um pouco de inglês." },
      { en: "Can you help me, please?", pt: "Você pode me ajudar, por favor?" },
      { en: "Can I ask a question?", pt: "Posso fazer uma pergunta?" },
      { en: "She can't come today.", pt: "Ela não pode vir hoje." },
      { en: "You can sit here.", pt: "Você pode sentar aqui." },
      { en: "Can I open the window?", pt: "Posso abrir a janela?" },
    ],
    quiz: [
      {
        id: "en-a1-17-q1",
        type: "mcq",
        prompt: "Choose the correct sentence for ability.",
        options: ["She can to swim.", "She cans swim.", "She can swim.", "She can swimming."],
        correctIndex: 2,
        explanation: "**Can** is followed by the base verb without \"to\" and without -s: \"can swim\".",
      },
      {
        id: "en-a1-17-q2",
        type: "gap",
        prompt: "Complete: ___ you help me, please? (asking for help)",
        answer: "Can",
        acceptedAnswers: ["can"],
        explanation: "**Can you…?** is a polite way to ask someone for help.",
      },
      {
        id: "en-a1-17-q3",
        type: "mcq",
        prompt: "Which sentence asks for permission?",
        options: ["I can drive.", "Can I open the window?", "She can't drive.", "We can speak English."],
        correctIndex: 1,
        explanation: "\"Can I…?\" is used to ask for permission to do something.",
      },
      {
        id: "en-a1-17-q4",
        type: "gap",
        prompt: "Complete: He ___ (not/can) come tomorrow.",
        answer: "can't",
        acceptedAnswers: ["cannot", "Can't"],
        explanation: "The negative of **can** is **can't** (cannot).",
      },
      {
        id: "en-a1-17-q5",
        type: "mcq",
        prompt: "Choose the correct short answer for \"Can you swim?\" (no).",
        options: ["No, I can't.", "No, I not can.", "No, I amn't.", "No, I don't can."],
        correctIndex: 0,
        explanation: "Short answers with **can** use \"No, I can't.\"",
      },
      {
        id: "en-a1-17-q6",
        type: "gap",
        prompt: "Complete: I ___ (can) speak two languages.",
        answer: "can",
        acceptedAnswers: ["Can"],
        explanation: "**Can** does not change with the subject and needs no -s.",
      },
    ],
    practiceTip: "Make a list of five things you can and can't do.",
  },
  {
    id: "en-a1-18",
    level: "A1",
    order: 18,
    title: "Have got and has got",
    topic: "Have got / has got",
    minutes: 7,
    goals: [
      "Use have got and has got to talk about possession",
      "Make negatives and questions with have got",
      "Talk about symptoms with have got",
    ],
    teach: [
      {
        heading: "Have got / has got",
        body: `Use **have got** (I/you/we/they) and **has got** (he/she/it) to talk about possession. It is common in British English.

- I **have got** a car. (= I have a car.)
- She **has got** a headache.
- Short forms: **I've got**, **she's got**.`,
      },
      {
        heading: "Negatives and questions",
        body: `Negative: **haven't got / hasn't got**. Question: **Have you got…? / Has he got…?**

- I **haven't got** any money.
- **Has she got** a fever?
- **Have you got** an appointment today?`,
      },
      {
        heading: "Talking about symptoms",
        body: `**Have got** is very useful to describe symptoms at a clinic.

- I've **got** a headache.
- He's **got** a temperature.
- **Have you got** any pain here?`,
      },
    ],
    phrases: [
      { en: "I've got a headache.", pt: "Estou com dor de cabeça." },
      { en: "She's got a temperature.", pt: "Ela está com febre." },
      { en: "Have you got an appointment?", pt: "Você tem uma consulta marcada?" },
      { en: "He hasn't got any allergies.", pt: "Ele não tem nenhuma alergia." },
      { en: "I haven't got my ID card.", pt: "Eu não estou com o meu documento de identidade." },
      { en: "Have you got any pain here?", pt: "Você sente alguma dor aqui?" },
    ],
    quiz: [
      {
        id: "en-a1-18-q1",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: ["She have got a car.", "She has got a car.", "She has get a car.", "She got has a car."],
        correctIndex: 1,
        explanation: "With **she**, use **has got**, not \"have got\".",
      },
      {
        id: "en-a1-18-q2",
        type: "gap",
        prompt: "Complete: I ___ a headache (have got).",
        answer: "have got",
        acceptedAnswers: ["'ve got", "have got", "ve got"],
        explanation: "With **I**, we say **have got** (short form: I've got).",
      },
      {
        id: "en-a1-18-q3",
        type: "mcq",
        prompt: "Which is the correct negative?",
        options: ["I haven't got time.", "I not have got time.", "I hasn't got time.", "I don't have got time."],
        correctIndex: 0,
        explanation: "With **I**, the negative is **haven't got**.",
      },
      {
        id: "en-a1-18-q4",
        type: "gap",
        prompt: "Complete: ___ you got an appointment today? (question)",
        answer: "Have",
        acceptedAnswers: ["have"],
        explanation: "Questions with **you** start with **Have**: \"Have you got…?\"",
      },
      {
        id: "en-a1-18-q5",
        type: "mcq",
        prompt: "Choose the correct question for \"she\".",
        options: ["Has she got a fever?", "Have she got a fever?", "Does she has got a fever?", "Is she got a fever?"],
        correctIndex: 0,
        explanation: "With **she**, the question form is **Has she got…?**",
      },
      {
        id: "en-a1-18-q6",
        type: "gap",
        prompt: "Complete: He ___ any allergies (not/have got).",
        answer: "hasn't got",
        acceptedAnswers: ["has not got", "Hasn't got"],
        explanation: "With **he**, the negative form is **hasn't got**.",
      },
    ],
    practiceTip: "Practise describing symptoms with have got/has got before a clinic role-play.",
  },
  {
    id: "en-a1-19",
    level: "A1",
    order: 19,
    title: "Colours, clothes and basic appearance",
    topic: "Colours, clothes & basic appearance",
    minutes: 7,
    goals: [
      "Name common colours and items of clothing",
      "Describe someone's basic appearance",
      "Use adjectives with the verb to be and have got",
    ],
    teach: [
      {
        heading: "Colours",
        body: `Learn basic colours: **red, blue, green, yellow, black, white, brown, orange, purple, grey**. Note the British spelling: **colour**, not "color".

- Her dress is **red**.
- I like your **blue** shirt.`,
      },
      {
        heading: "Clothes",
        body: `Common clothes words: **shirt, trousers, dress, skirt, shoes, jacket, coat, jumper, T-shirt**.

- He's wearing a **blue jumper** and **black trousers**.
- She's got a **green dress**.`,
      },
      {
        heading: "Basic appearance",
        body: `Describe appearance with **have got** and **be**: "She's **got** long hair." "He's **tall**." "She's **got** brown eyes."

- He's **got** short, dark hair.
- She's **tall** and **thin**.
- My favourite colour is blue.`,
      },
    ],
    phrases: [
      { en: "What colour is your bag?", pt: "De que cor é a sua bolsa?" },
      { en: "She's wearing a red dress.", pt: "Ela está usando um vestido vermelho." },
      { en: "He's got short hair.", pt: "Ele tem cabelo curto." },
      { en: "My favourite colour is green.", pt: "Minha cor favorita é verde." },
      { en: "She's tall and has brown eyes.", pt: "Ela é alta e tem olhos castanhos." },
      { en: "I'm wearing black shoes.", pt: "Estou usando sapatos pretos." },
    ],
    quiz: [
      {
        id: "en-a1-19-q1",
        type: "mcq",
        prompt: "Which is the correct British spelling?",
        options: ["Color", "Colour", "Colur", "Colar"],
        correctIndex: 1,
        explanation: "British English spells this word **colour**, with a \"u\".",
      },
      {
        id: "en-a1-19-q2",
        type: "gap",
        prompt: "Complete: She's got ___ hair (long).",
        answer: "long",
        acceptedAnswers: ["Long"],
        explanation: "\"She's got long hair\" describes the length of her hair.",
      },
      {
        id: "en-a1-19-q3",
        type: "mcq",
        prompt: "Choose the item of clothing worn on the feet.",
        options: ["Jumper", "Shoes", "Jacket", "Skirt"],
        correctIndex: 1,
        explanation: "**Shoes** are worn on the feet.",
      },
      {
        id: "en-a1-19-q4",
        type: "gap",
        prompt: "Complete: My favourite ___ is blue (asking about a colour).",
        answer: "colour",
        acceptedAnswers: ["Colour"],
        explanation: "\"My favourite colour\" asks about a person's preferred colour.",
      },
      {
        id: "en-a1-19-q5",
        type: "mcq",
        prompt: "Choose the correct sentence describing appearance.",
        options: ["He have got brown eyes.", "He's got brown eyes.", "He is got brown eyes.", "He got brown eyes has."],
        correctIndex: 1,
        explanation: "With **he**, we say **has got** (short form: He's got).",
      },
      {
        id: "en-a1-19-q6",
        type: "gap",
        prompt: "Complete: She's wearing a ___ dress (colour red).",
        answer: "red",
        acceptedAnswers: ["Red"],
        explanation: "\"Red\" is the colour word that describes the dress.",
      },
    ],
    practiceTip: "Describe what you and a friend are wearing today, including the colours.",
  },
  {
    id: "en-a1-20",
    level: "A1",
    order: 20,
    title: "At the clinic: basic patient phrases",
    topic: "At the clinic — basic patient phrases (A1 medical bridge)",
    minutes: 9,
    goals: [
      "Check in and make an appointment at a reception desk",
      "Describe simple symptoms using basic phrases",
      "Understand simple instructions from clinic staff",
    ],
    teach: [
      {
        heading: "At reception",
        body: `When you arrive, the receptionist may ask: "Can I help you?" or "Do you have an appointment?"

Useful replies: "I'd like to make an appointment." "I have an appointment with Dr Silva." "My name is…" "Can you spell your surname, please?"`,
      },
      {
        heading: "Describing symptoms",
        body: `Use simple phrases to describe how you feel: "I feel sick." "I've got a headache." "My arm hurts." "I've got a temperature."

- I don't feel well.
- My throat hurts.
- I've got a cough.

Point to the part of the body if you don't know the word — this is normal and helpful for the doctor.`,
      },
      {
        heading: "Understanding instructions",
        body: `Clinic staff often use simple instructions: "Please take a seat." "Please wait here." "The doctor will see you now." "Please fill in this form."

- Please take a seat in the waiting room.
- Please fill in your name and date of birth.
- The doctor will call your name.`,
      },
    ],
    phrases: [
      { en: "I'd like to make an appointment.", pt: "Eu gostaria de marcar uma consulta." },
      { en: "I don't feel well.", pt: "Eu não estou me sentindo bem." },
      { en: "My arm hurts.", pt: "Meu braço dói." },
      { en: "I've got a temperature.", pt: "Estou com febre." },
      { en: "Please take a seat.", pt: "Por favor, sente-se." },
      { en: "The doctor will see you now.", pt: "O médico irá atendê-lo(a) agora." },
      { en: "Can you spell your surname, please?", pt: "Você pode soletrar seu sobrenome, por favor?" },
    ],
    quiz: [
      {
        id: "en-a1-20-q1",
        type: "mcq",
        prompt: "What do you say to book a visit to the doctor?",
        options: ["I'd like to make an appointment.", "I've got a temperature.", "Please take a seat.", "Can you spell that?"],
        correctIndex: 0,
        explanation: "\"I'd like to make an appointment\" is used to book a visit.",
      },
      {
        id: "en-a1-20-q2",
        type: "gap",
        prompt: "Complete: My arm ___ (hurt).",
        answer: "hurts",
        acceptedAnswers: ["Hurts"],
        explanation: "With **arm** (it), the verb takes -s: \"hurts\".",
      },
      {
        id: "en-a1-20-q3",
        type: "mcq",
        prompt: "Which sentence describes a symptom?",
        options: ["Please take a seat.", "I've got a headache.", "Can I help you?", "Fill in this form."],
        correctIndex: 1,
        explanation: "\"I've got a headache\" describes a symptom you are feeling.",
      },
      {
        id: "en-a1-20-q4",
        type: "gap",
        prompt: "Complete: I don't ___ well today (feel).",
        answer: "feel",
        acceptedAnswers: ["Feel"],
        explanation: "\"I don't feel well\" is a common way to say you are unwell.",
      },
      {
        id: "en-a1-20-q5",
        type: "mcq",
        prompt: "What does the receptionist say when it's your turn?",
        options: ["I feel sick.", "The doctor will see you now.", "My throat hurts.", "I'd like an appointment."],
        correctIndex: 1,
        explanation: "\"The doctor will see you now\" tells the patient it is their turn.",
      },
      {
        id: "en-a1-20-q6",
        type: "gap",
        prompt: "Complete: Please ___ in this form (write information).",
        answer: "fill",
        acceptedAnswers: ["Fill"],
        explanation: "\"Fill in this form\" means to write your information on the form.",
      },
    ],
    practiceTip: "Role-play a reception check-in with a friend, then swap roles.",
  },
];
