import type { EnglishLesson } from "@/domain/english";

export const ENGLISH_A2_LESSONS: EnglishLesson[] = [
  {
    id: "en-a2-01",
    level: "A2",
    order: 1,
    title: "Past simple: was, were and regular verbs",
    topic: "Past simple — was/were and regular verbs",
    minutes: 8,
    goals: [
      "Use was/were correctly with people, places and feelings",
      "Form the past simple of regular verbs with -ed",
      "Talk about a completed action in the past",
    ],
    teach: [
      {
        heading: "Was and were",
        body: `Use **was** with I, he, she and it. Use **were** with you, we and they.

- I **was** tired yesterday.
- She **was** at the clinic.
- They **were** late.

For negatives, add **not**: wasn't, weren't. For questions, swap the order: **Were you** at work? **Was he** ill?`,
      },
      {
        heading: "Regular verbs in the past",
        body: `Most regular verbs add **-ed** in the past: work → worked, visit → visited, ask → asked.

Spelling rules:
- Verbs ending in **-e**: add **-d** (live → lived)
- Short vowel + consonant: double the consonant (stop → stopped)
- Verbs ending in **-y** after a consonant: change to **-ied** (study → studied)

Use the past simple for finished actions: *I **called** the patient at nine o'clock.*`,
      },
      {
        heading: "Time words",
        body: `Past simple often appears with time expressions: **yesterday**, **last week**, **two days ago**, **in 2024**.

- We **were** busy **last Monday**.
- He **finished** the report **yesterday**.`,
      },
    ],
    phrases: [
      { en: "I was at home yesterday.", pt: "Eu estava em casa ontem." },
      { en: "They were very helpful.", pt: "Eles foram muito prestativos." },
      { en: "She worked until six.", pt: "Ela trabalhou até as seis." },
      { en: "We visited the hospital last month.", pt: "Visitamos o hospital no mês passado." },
      { en: "Was he on duty?", pt: "Ele estava de plantão?" },
      { en: "I didn't finish the form.", pt: "Eu não terminei o formulário." },
    ],
    quiz: [
      {
        id: "en-a2-01-q1",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: [
          "They was at the surgery yesterday.",
          "They were at the surgery yesterday.",
          "They were at the surgery yesterday?",
          "They are at the surgery yesterday.",
        ],
        correctIndex: 1,
        explanation:
          "Use **were** with **they**. The sentence describes a finished time in the past.",
      },
      {
        id: "en-a2-01-q2",
        type: "gap",
        prompt: "Complete: She ___ (study) medicine in London.",
        answer: "studied",
        acceptedAnswers: ["Studied"],
        explanation:
          "With regular verbs ending in consonant + **y**, change **y** to **ied**: study → studied.",
      },
      {
        id: "en-a2-01-q3",
        type: "mcq",
        prompt: "Which question is correct?",
        options: [
          "Was you tired?",
          "Were you tired?",
          "Did you was tired?",
          "You were tired?",
        ],
        correctIndex: 1,
        explanation: "Use **Were** with **you** in questions: **Were you tired?**",
      },
      {
        id: "en-a2-01-q4",
        type: "gap",
        prompt: "Complete: I ___ (not / be) at work last Friday.",
        answer: "wasn't",
        acceptedAnswers: ["was not", "Wasn't", "Was not"],
        explanation:
          "The negative of **was** is **wasn't** (was not). Use it with **I**.",
      },
    ],
  },
  {
    id: "en-a2-02",
    level: "A2",
    order: 2,
    title: "Going to for future plans",
    topic: "Going to (future plans)",
    minutes: 7,
    goals: [
      "Use going to for plans and intentions",
      "Make positive, negative and question forms",
      "Talk about what you intend to do soon",
    ],
    teach: [
      {
        heading: "Plans and intentions",
        body: `Use **be going to + infinitive** for plans you have already decided:

- I **am going to start** a new course next month.
- She **is going to see** the doctor on Tuesday.
- We **are not going to work** this weekend.

Short forms: **I'm going to**, **She's going to**, **We're going to**.`,
      },
      {
        heading: "Questions and negatives",
        body: `Questions: move **be** to the front.

- **Are you going to** move house?
- **Is he going to** apply for the job?

Negatives: add **not** after **be**.

- They **aren't going to** travel until summer.
- I **am not going to** forget your appointment.`,
      },
      {
        heading: "Going to vs will",
        body: `At A2, remember: **going to** = a plan you thought about before speaking. **Will** often appears for instant decisions (*I'll help you*).

- *I've booked the tickets. We **are going to** fly on Friday.*
- *The phone is ringing. **I'll** answer it.*`,
      },
    ],
    phrases: [
      { en: "I'm going to study tonight.", pt: "Vou estudar hoje à noite." },
      { en: "She's going to call you back.", pt: "Ela vai te ligar de volta." },
      { en: "Are you going to attend the meeting?", pt: "Você vai participar da reunião?" },
      { en: "We're not going to be late.", pt: "Nós não vamos nos atrasar." },
      { en: "He's going to apply for a new job.", pt: "Ele vai se candidatar a um emprego novo." },
    ],
    quiz: [
      {
        id: "en-a2-02-q1",
        type: "mcq",
        prompt: "Which sentence shows a future plan?",
        options: [
          "I will open the window.",
          "I'm going to visit my aunt on Sunday.",
          "I visit my aunt every Sunday.",
          "I visited my aunt on Sunday.",
        ],
        correctIndex: 1,
        explanation:
          "**I'm going to visit** describes a plan for the future. The other options are present habit, past, or an instant decision.",
      },
      {
        id: "en-a2-02-q2",
        type: "gap",
        prompt: "Complete: They ___ going to move to Manchester.",
        answer: "are",
        acceptedAnswers: ["Are", "'re", "are"],
        explanation: "With **they**, use **are**: **They are going to** move.",
      },
      {
        id: "en-a2-02-q3",
        type: "gap",
        prompt: "Complete: ___ she going to start the course in April?",
        answer: "Is",
        acceptedAnswers: ["is"],
        explanation: "In questions with **she**, use **Is** at the start: **Is she going to…?**",
      },
      {
        id: "en-a2-02-q4",
        type: "mcq",
        prompt: "Choose the correct negative.",
        options: [
          "I not going to wait.",
          "I'm not going to wait.",
          "I don't going to wait.",
          "I'm going to not wait.",
        ],
        correctIndex: 1,
        explanation:
          "The negative form is **be + not + going to**: **I'm not going to wait.**",
      },
    ],
  },
  {
    id: "en-a2-03",
    level: "A2",
    order: 3,
    title: "Comparatives and superlatives",
    topic: "Comparatives & superlatives",
    minutes: 8,
    goals: [
      "Compare two things with comparatives",
      "Say which thing is the most with superlatives",
      "Use than correctly in comparisons",
    ],
    teach: [
      {
        heading: "Short adjectives",
        body: `One-syllable adjectives usually add **-er** for the comparative and **-est** for the superlative:

- fast → **faster** → **the fastest**
- old → **older** → **the oldest**

Use **than** after the comparative: *This ward is **busier than** that one.*`,
      },
      {
        heading: "Long adjectives",
        body: `Adjectives with two or more syllables use **more** / **most**:

- comfortable → **more comfortable** → **the most comfortable**
- expensive → **more expensive** → **the most expensive**

Some two-syllable adjectives can use either form: **cleverer** or **more clever**.`,
      },
      {
        heading: "Irregular forms",
        body: `Learn these common irregular forms:

- good → **better** → **the best**
- bad → **worse** → **the worst**
- far → **farther/further** → **the farthest/the furthest**

Example: *This is **the best** option for the patient.*`,
      },
    ],
    phrases: [
      { en: "This room is bigger than that one.", pt: "Este quarto é maior do que aquele." },
      { en: "She is more experienced than him.", pt: "Ela é mais experiente do que ele." },
      { en: "It was the worst day of the week.", pt: "Foi o pior dia da semana." },
      { en: "This is the most important question.", pt: "Esta é a pergunta mais importante." },
      { en: "My shift is longer than yours.", pt: "Meu turno é mais longo do que o seu." },
      { en: "He is the tallest person here.", pt: "Ele é a pessoa mais alta aqui." },
    ],
    quiz: [
      {
        id: "en-a2-03-q1",
        type: "mcq",
        prompt: "Choose the correct comparative.",
        options: [
          "more fast",
          "fastest",
          "faster",
          "more faster",
        ],
        correctIndex: 2,
        explanation: "**Fast** is a short adjective: fast → **faster** (not *more fast*).",
      },
      {
        id: "en-a2-03-q2",
        type: "gap",
        prompt: "Complete: This test is ___ (difficult) than the last one.",
        answer: "more difficult",
        acceptedAnswers: ["More difficult"],
        explanation:
          "Long adjectives use **more + adjective**: **more difficult than**.",
      },
      {
        id: "en-a2-03-q3",
        type: "mcq",
        prompt: "Which superlative is correct?",
        options: [
          "the goodest",
          "the most good",
          "the best",
          "the better",
        ],
        correctIndex: 2,
        explanation: "**Good** is irregular: good → better → **the best**.",
      },
      {
        id: "en-a2-03-q4",
        type: "gap",
        prompt: "Complete: She is the ___ (young) nurse on the team.",
        answer: "youngest",
        acceptedAnswers: ["Youngest"],
        explanation: "Short adjective **young** → **youngest** for the superlative.",
      },
    ],
  },
  {
    id: "en-a2-04",
    level: "A2",
    order: 4,
    title: "Countable and uncountable nouns",
    topic: "Countable & uncountable (some/any/much/many)",
    minutes: 9,
    goals: [
      "Distinguish countable and uncountable nouns",
      "Use some, any, much and many correctly",
      "Ask and answer about quantities in everyday situations",
    ],
    teach: [
      {
        heading: "Countable vs uncountable",
        body: `**Countable** nouns have singular and plural forms: one apple, two apples; a patient, three patients.

**Uncountable** nouns have no plural: water, information, advice, money, bread.

You cannot say *an informations* or *two advices*.`,
      },
      {
        heading: "Some and any",
        body: `Use **some** in positive sentences: *There is **some** milk.* / *I have **some** questions.*

Use **any** in questions and negatives: *Do you have **any** pain?* / *There isn't **any** sugar.*

In offers and requests, **some** is common: *Would you like **some** tea?*`,
      },
      {
        heading: "Much and many",
        body: `Use **much** with uncountable nouns: *How **much** time do we have?*

Use **many** with countable plurals: *How **many** tablets did you take?*

In positive statements, **a lot of** is often more natural: *I have **a lot of** work today.*`,
      },
    ],
    phrases: [
      { en: "Do you have any questions?", pt: "Você tem alguma pergunta?" },
      { en: "There isn't any milk left.", pt: "Não sobrou nenhum leite." },
      { en: "How much water do you drink?", pt: "Quanta água você bebe?" },
      { en: "How many appointments do you have?", pt: "Quantas consultas você tem?" },
      { en: "I'd like some information, please.", pt: "Gostaria de algumas informações, por favor." },
      { en: "We don't have much time.", pt: "Não temos muito tempo." },
    ],
    quiz: [
      {
        id: "en-a2-04-q1",
        type: "mcq",
        prompt: "Which noun is uncountable?",
        options: ["tablet", "bottle", "advice", "appointment"],
        correctIndex: 2,
        explanation:
          "**Advice** is uncountable in English. You say *some advice*, not *an advice*.",
      },
      {
        id: "en-a2-04-q2",
        type: "gap",
        prompt: "Complete: How ___ patients are waiting?",
        answer: "many",
        acceptedAnswers: ["Many"],
        explanation:
          "**Patients** is countable plural, so use **How many** (not *how much*).",
      },
      {
        id: "en-a2-04-q3",
        type: "mcq",
        prompt: "Choose the correct sentence.",
        options: [
          "I don't have some money.",
          "I don't have any money.",
          "I don't have many money.",
          "I don't have a money.",
        ],
        correctIndex: 1,
        explanation:
          "In negatives with uncountable nouns, use **any**: **I don't have any money.**",
      },
      {
        id: "en-a2-04-q4",
        type: "gap",
        prompt: "Complete: There is ___ sugar in the cupboard.",
        answer: "some",
        acceptedAnswers: ["Some"],
        explanation:
          "In positive statements, use **some** with uncountable nouns: **some sugar**.",
      },
    ],
  },
  {
    id: "en-a2-05",
    level: "A2",
    order: 5,
    title: "Should and must: advice and rules",
    topic: "Should / must (advice & rules)",
    minutes: 8,
    goals: [
      "Give advice with should and shouldn't",
      "Talk about rules and obligations with must and mustn't",
      "Understand the difference between advice and strict rules",
    ],
    teach: [
      {
        heading: "Should for advice",
        body: `Use **should** to give advice or say something is a good idea:

- You **should** rest for two days.
- She **shouldn't** drive if she feels dizzy.

**Should** is softer than **must**. It suggests what is best, not a law.`,
      },
      {
        heading: "Must for rules and obligation",
        body: `Use **must** for strong obligation or rules:

- You **must** wear a badge in the hospital.
- Patients **must** sign the consent form.

**Mustn't** means something is forbidden: *You **mustn't** smoke here.*`,
      },
      {
        heading: "Should vs must",
        body: `Compare:

- *You **should** drink more water.* (good advice)
- *You **must** drink only water before the test.* (strict rule)

In everyday English, **have to** also expresses obligation: *I **have to** finish this report.*`,
      },
    ],
    phrases: [
      { en: "You should see a doctor.", pt: "Você deveria consultar um médico." },
      { en: "You shouldn't skip meals.", pt: "Você não deveria pular refeições." },
      { en: "You must arrive on time.", pt: "Você precisa chegar no horário." },
      { en: "You mustn't use your phone here.", pt: "Você não pode usar o celular aqui." },
      { en: "Should I take this with food?", pt: "Devo tomar isso com comida?" },
      { en: "Staff must wear ID badges.", pt: "A equipe deve usar crachás de identificação." },
    ],
    quiz: [
      {
        id: "en-a2-05-q1",
        type: "mcq",
        prompt: "Which sentence gives advice (not a strict rule)?",
        options: [
          "You must stop smoking immediately.",
          "You should try to sleep eight hours.",
          "You mustn't enter without permission.",
          "Visitors must sign in.",
        ],
        correctIndex: 1,
        explanation:
          "**Should** gives advice. **Must** and **mustn't** express rules or strong obligation.",
      },
      {
        id: "en-a2-05-q2",
        type: "gap",
        prompt: "Complete: You ___ smoke in the building. (forbidden)",
        answer: "mustn't",
        acceptedAnswers: ["must not", "Mustn't", "Must not"],
        explanation:
          "**Mustn't** means something is not allowed: **You mustn't smoke** here.",
      },
      {
        id: "en-a2-05-q3",
        type: "gap",
        prompt: "Complete: She ___ rest if she has a fever. (good idea)",
        answer: "should",
        acceptedAnswers: ["Should"],
        explanation: "Use **should** for advice: **She should rest**.",
      },
      {
        id: "en-a2-05-q4",
        type: "mcq",
        prompt: "Choose the correct question.",
        options: [
          "Must I should call you?",
          "Should I call you later?",
          "Should I must call you?",
          "Do I should call you?",
        ],
        correctIndex: 1,
        explanation:
          "Questions with **should** start with **Should + subject + verb**: **Should I call you later?**",
      },
    ],
  },
  {
    id: "en-a2-06",
    level: "A2",
    order: 6,
    title: "Health symptoms and feelings",
    topic: "Health symptoms & feelings (A2 medical bridge)",
    minutes: 10,
    goals: [
      "Name common symptoms and how you feel",
      "Use have got / feel / hurt to describe health problems",
      "Ask simple questions about a patient's condition",
    ],
    teach: [
      {
        heading: "Describing symptoms",
        body: `Common patterns:

- I **have got** a headache / a cough / a temperature.
- My throat **hurts**.
- I **feel** dizzy / sick / tired / anxious.

In UK English, **I've got** is very common: *I've got a sore back.*`,
      },
      {
        heading: "How long and how bad",
        body: `Add time and intensity:

- I've **had** this pain **for** three days.
- It **started** yesterday.
- It's **getting worse**.
- It's **not too bad**, but it keeps me awake.

Use **since** with a point in time: *I've felt unwell **since** Monday.*`,
      },
      {
        heading: "Simple questions for patients",
        body: `Useful questions at A2:

- **Where** does it hurt?
- **How long** have you had this?
- **Do you** feel hot or cold?
- **Are you** taking any medication?

Keep questions short and clear. One idea per question.`,
      },
    ],
    phrases: [
      { en: "I've got a headache.", pt: "Estou com dor de cabeça." },
      { en: "I feel dizzy when I stand up.", pt: "Fico tonto quando me levanto." },
      { en: "My chest hurts.", pt: "Meu peito dói." },
      { en: "How long have you had this cough?", pt: "Há quanto tempo você está com essa tosse?" },
      { en: "I haven't slept well.", pt: "Não dormi bem." },
      { en: "It's getting worse.", pt: "Está piorando." },
    ],
    quiz: [
      {
        id: "en-a2-06-q1",
        type: "mcq",
        prompt: "Which sentence is correct in UK English?",
        options: [
          "I have headache.",
          "I've got a headache.",
          "I am headache.",
          "I feel headache.",
        ],
        correctIndex: 1,
        explanation:
          "Use **I've got a headache** (or **I have a headache**). You need the article **a**.",
      },
      {
        id: "en-a2-06-q2",
        type: "gap",
        prompt: "Complete: Where does it ___?",
        answer: "hurt",
        acceptedAnswers: ["Hurt"],
        explanation:
          "Ask about pain with **Where does it hurt?** The verb is **hurt**.",
      },
      {
        id: "en-a2-06-q3",
        type: "mcq",
        prompt: "Choose the best question about duration.",
        options: [
          "How many you have this pain?",
          "How long have you had this pain?",
          "How much time you have pain?",
          "Since when you pain?",
        ],
        correctIndex: 1,
        explanation:
          "**How long have you had this pain?** is the natural way to ask about duration.",
      },
      {
        id: "en-a2-06-q4",
        type: "gap",
        prompt: "Complete: I feel ___ when I stand up quickly. (not steady)",
        answer: "dizzy",
        acceptedAnswers: ["Dizzy"],
        explanation:
          "**Dizzy** describes the feeling when everything spins or you lose balance.",
      },
    ],
  },
  {
    id: "en-a2-07",
    level: "A2",
    order: 7,
    title: "Appointments and invitations",
    topic: "Appointments & invitations",
    minutes: 8,
    goals: [
      "Make, change and confirm appointments politely",
      "Accept or decline invitations clearly",
      "Use time expressions for scheduling",
    ],
    teach: [
      {
        heading: "Making appointments",
        body: `Polite requests:

- **I'd like to** book an appointment, please.
- **Could I** see the doctor on Thursday?
- **Is** Dr Patel **available** next week?

When confirming: *Your appointment is **at** 2.30 **on** Friday.*`,
      },
      {
        heading: "Changing or cancelling",
        body: `Use polite language:

- I'm afraid I **need to cancel** my appointment.
- **Could I** **reschedule** for next Monday?
- Something **has come up** — can we move it to the afternoon?

Always give a reason if possible, but keep it brief.`,
      },
      {
        heading: "Invitations",
        body: `To invite: *Would you like to join us for coffee after the shift?*

To accept: *That sounds lovely. **I'd love to.***

To decline politely: *I'm sorry, I **can't make it**. Maybe another time.*

Use **on** with days and dates; **at** with clock times.`,
      },
    ],
    phrases: [
      { en: "I'd like to book an appointment, please.", pt: "Gostaria de marcar uma consulta, por favor." },
      { en: "Could we reschedule for next Tuesday?", pt: "Poderíamos remarcar para terça que vem?" },
      { en: "Your appointment is at ten o'clock.", pt: "Sua consulta é às dez horas." },
      { en: "Would you like to come to the meeting?", pt: "Você gostaria de vir à reunião?" },
      { en: "I'm sorry, I can't make it.", pt: "Desculpe, não vou conseguir ir." },
      { en: "That sounds lovely — I'd love to.", pt: "Parece ótimo — adoraria ir." },
    ],
    quiz: [
      {
        id: "en-a2-07-q1",
        type: "mcq",
        prompt: "Which is the most polite way to book an appointment?",
        options: [
          "Give me an appointment.",
          "I want appointment now.",
          "I'd like to book an appointment, please.",
          "Appointment Thursday.",
        ],
        correctIndex: 2,
        explanation:
          "**I'd like to book an appointment, please** is polite and complete.",
      },
      {
        id: "en-a2-07-q2",
        type: "gap",
        prompt: "Complete: Your appointment is ___ 3.15 on Wednesday.",
        answer: "at",
        acceptedAnswers: ["At"],
        explanation: "Use **at** with clock times: **at 3.15**.",
      },
      {
        id: "en-a2-07-q3",
        type: "gap",
        prompt: "Complete: I'm sorry, I can't ___ it. (attend)",
        answer: "make",
        acceptedAnswers: ["Make"],
        explanation:
          "The fixed phrase is **I can't make it** — meaning you cannot attend.",
      },
      {
        id: "en-a2-07-q4",
        type: "mcq",
        prompt: "Choose the correct time expression.",
        options: [
          "on 2.30",
          "at Monday",
          "on Monday",
          "in Monday",
        ],
        correctIndex: 2,
        explanation: "Use **on** with days: **on Monday**. Use **at** with times.",
      },
    ],
  },
  {
    id: "en-a2-08",
    level: "A2",
    order: 8,
    title: "Jobs and describing people",
    topic: "Jobs & describing people",
    minutes: 7,
    goals: [
      "Talk about jobs and workplaces",
      "Describe people's appearance and personality simply",
      "Use present simple for permanent characteristics",
    ],
    teach: [
      {
        heading: "Jobs and workplaces",
        body: `Use **a/an** with jobs: *She's **a** nurse. He's **an** anaesthetist.*

To say where someone works: *He **works in** a hospital. She **works on** a ward.*

Questions: *What **do you do**?* / *Where **do you work**?*`,
      },
      {
        heading: "Appearance",
        body: `Use **be + adjective** and **have got**:

- She **is tall** and **has got** dark hair.
- He **is wearing** a blue uniform. (now)
- They **are** in their thirties.

Order: size → age → shape → colour → clothes (general to specific).`,
      },
      {
        heading: "Personality",
        body: `Common adjectives: friendly, patient, organised, calm, confident, shy.

- My colleague **is very** patient **with** new staff.
- The manager **is** strict **but** fair.

Use **very** or **really** to add emphasis: *She's **really** helpful.*`,
      },
    ],
    phrases: [
      { en: "What do you do?", pt: "O que você faz (de trabalho)?" },
      { en: "She works in a GP surgery.", pt: "Ela trabalha em um consultório de clínico geral." },
      { en: "He is tall with short brown hair.", pt: "Ele é alto e tem cabelo castanho curto." },
      { en: "She is very friendly and patient.", pt: "Ela é muito simpática e paciente." },
      { en: "He is wearing a white coat.", pt: "Ele está usando um jaleco branco." },
    ],
    quiz: [
      {
        id: "en-a2-08-q1",
        type: "mcq",
        prompt: "Choose the correct job article.",
        options: [
          "She is nurse.",
          "She is a nurse.",
          "She is an nurse.",
          "She works as nurse.",
        ],
        correctIndex: 1,
        explanation: "Jobs need **a/an**: **She is a nurse.**",
      },
      {
        id: "en-a2-08-q2",
        type: "gap",
        prompt: "Complete: He works ___ a hospital in Leeds.",
        answer: "in",
        acceptedAnswers: ["In"],
        explanation: "Use **work in** for a building or organisation: **works in a hospital**.",
      },
      {
        id: "en-a2-08-q3",
        type: "mcq",
        prompt: "Which describes personality?",
        options: [
          "She has got long hair.",
          "She is wearing scrubs.",
          "She is very patient.",
          "She is thirty-five.",
        ],
        correctIndex: 2,
        explanation: "**Patient** describes personality. The other options describe appearance or age.",
      },
      {
        id: "en-a2-08-q4",
        type: "gap",
        prompt: "Complete: My manager is strict ___ fair.",
        answer: "but",
        acceptedAnswers: ["But"],
        explanation:
          "Use **but** to contrast two ideas: **strict but fair**.",
      },
    ],
  },
  {
    id: "en-a2-09",
    level: "A2",
    order: 9,
    title: "Travel and directions",
    topic: "Travel & directions",
    minutes: 9,
    goals: [
      "Ask for and give simple directions",
      "Use prepositions of place and movement",
      "Talk about travel plans and transport",
    ],
    teach: [
      {
        heading: "Asking for directions",
        body: `Polite questions:

- **Excuse me**, how do I **get to** the station?
- **Is there** a bus stop **near here**?
- **Could you tell me** where the pharmacy is?

Listen for: **turn left/right**, **go straight on**, **at the corner**.`,
      },
      {
        heading: "Prepositions of place",
        body: `Common prepositions:

- **in** front of / **behind** the building
- **next to** / **opposite** the café
- **on** the corner / **at** the traffic lights
- **between** the bank and the post office

*The clinic is **opposite** the park.*`,
      },
      {
        heading: "Travel vocabulary",
        body: `Transport: bus, train, taxi, underground (UK), platform, ticket, single/return.

- I **take** the train **to** London.
- You **need to** **change** at Birmingham.
- The flight **leaves** at six.

UK note: say **underground** or **Tube** in London; **motorway** not *freeway*.`,
      },
    ],
    phrases: [
      { en: "Excuse me, how do I get to the hospital?", pt: "Com licença, como chego ao hospital?" },
      { en: "Go straight on and turn left.", pt: "Siga em frente e vire à esquerda." },
      { en: "It's opposite the park.", pt: "Fica em frente ao parque." },
      { en: "Is there a bus stop near here?", pt: "Tem um ponto de ônibus perto daqui?" },
      { en: "I need a return ticket to Manchester.", pt: "Preciso de uma passagem de ida e volta para Manchester." },
      { en: "The train leaves from platform two.", pt: "O trem parte da plataforma dois." },
    ],
    quiz: [
      {
        id: "en-a2-09-q1",
        type: "mcq",
        prompt: "Which preposition is correct?",
        options: [
          "The shop is opposite to the bank.",
          "The shop is opposite the bank.",
          "The shop is opposite from the bank.",
          "The shop is opposite at the bank.",
        ],
        correctIndex: 1,
        explanation:
          "Use **opposite** directly before the noun: **opposite the bank** (no *to*).",
      },
      {
        id: "en-a2-09-q2",
        type: "gap",
        prompt: "Complete: Go straight on and turn ___ at the traffic lights.",
        answer: "left",
        acceptedAnswers: ["Left"],
        explanation:
          "Use **turn left** (or **turn right**) after **go straight on**: **turn left at the traffic lights**.",
      },
      {
        id: "en-a2-09-q3",
        type: "mcq",
        prompt: "In UK English, which word means a major road?",
        options: ["Freeway", "Highway", "Motorway", "Interstate"],
        correctIndex: 2,
        explanation: "British English uses **motorway**. *Freeway* and *highway* are US terms.",
      },
      {
        id: "en-a2-09-q4",
        type: "gap",
        prompt: "Complete: Excuse me, how do I get ___ the station?",
        answer: "to",
        acceptedAnswers: ["To"],
        explanation:
          "The pattern is **get to + place**: **How do I get to the station?**",
      },
    ],
  },
  {
    id: "en-a2-10",
    level: "A2",
    order: 10,
    title: "Short emails and messages",
    topic: "Short emails and messages",
    minutes: 8,
    goals: [
      "Write short formal and informal messages",
      "Use common email openings and closings",
      "Request information or confirm details clearly",
    ],
    teach: [
      {
        heading: "Email structure",
        body: `A short email has four parts:

1. **Greeting**: Dear Mr Ahmed / Hi Sarah
2. **Opening line**: I am writing to… / Just a quick note to…
3. **Main message**: one or two short paragraphs
4. **Closing**: Kind regards / Best wishes + your name

Keep sentences short. One main purpose per email.`,
      },
      {
        heading: "Useful phrases",
        body: `Formal:
- I am writing to ** enquire about**…
- **Please find** the details below.
- **Thank you for** your help.

Informal:
- **Just wanted to** check…
- **Can you** let me know?
- **See you** on Thursday.`,
      },
      {
        heading: "Messages and tone",
        body: `Match the tone to the reader:

- To a manager: *Dear Ms Chen, I am writing to confirm my appointment.*
- To a colleague: *Hi Tom, are you free at lunch?*

Avoid ALL CAPS (it looks angry). Check names and dates before sending.`,
      },
    ],
    phrases: [
      { en: "I am writing to confirm my appointment.", pt: "Escrevo para confirmar minha consulta." },
      { en: "Please let me know if this suits you.", pt: "Por favor, me avise se isso serve para você." },
      { en: "Thank you for your reply.", pt: "Obrigado pela sua resposta." },
      { en: "Kind regards,", pt: "Atenciosamente," },
      { en: "Hi Sam, just a quick question.", pt: "Oi Sam, só uma pergunta rápida." },
      { en: "Could you send me the details?", pt: "Você poderia me enviar os detalhes?" },
    ],
    quiz: [
      {
        id: "en-a2-10-q1",
        type: "mcq",
        prompt: "Which greeting is most appropriate for a formal email to Dr Hughes?",
        options: [
          "Hey!",
          "Hi Dr Hughes,",
          "Dear Dr Hughes,",
          "Yo Dr Hughes,",
        ],
        correctIndex: 2,
        explanation:
          "Use **Dear Dr Hughes,** for formal emails. **Hi** is acceptable but slightly less formal.",
      },
      {
        id: "en-a2-10-q2",
        type: "gap",
        prompt: "Complete: I am writing to ___ about the training session.",
        answer: "enquire",
        acceptedAnswers: ["Enquire", "inquire", "Inquire"],
        explanation:
          "UK English prefers **enquire about**. US English uses **inquire** — both are accepted here.",
      },
      {
        id: "en-a2-10-q3",
        type: "mcq",
        prompt: "Choose the best informal closing.",
        options: [
          "Yours faithfully,",
          "Best wishes,",
          "Respectfully submitted,",
          "I remain, sir, your obedient servant,",
        ],
        correctIndex: 1,
        explanation:
          "**Best wishes** works well for informal or semi-formal emails. **Yours faithfully** is very formal.",
      },
      {
        id: "en-a2-10-q4",
        type: "gap",
        prompt: "Complete: Please ___ me know if Thursday works for you.",
        answer: "let",
        acceptedAnswers: ["Let"],
        explanation:
          "The fixed phrase is **Please let me know** — a polite way to ask for a response.",
      },
    ],
  },
];
