import { NextResponse } from "next/server";
import { getEnglishLesson } from "@/data/english";
import type { EnglishLesson, EnglishQuizItem } from "@/domain/english";

export const runtime = "nodejs";

const ROUND_SIZE = 8;

type RawItem = {
  type?: string;
  prompt?: unknown;
  options?: unknown;
  correctIndex?: unknown;
  answer?: unknown;
  acceptedAnswers?: unknown;
  explanation?: unknown;
};

function lessonContext(lesson: EnglishLesson): string {
  const teach = lesson.teach.map((t) => `- ${t.heading}: ${t.body}`).join("\n");
  const phrases = lesson.phrases.map((p) => `- ${p.en} (${p.pt})`).join("\n");
  const goals = lesson.goals.map((g) => `- ${g}`).join("\n");
  return `Lesson: ${lesson.title} (${lesson.topic}), CEFR ${lesson.level}
Goals:
${goals}
What was taught:
${teach}
Key phrases:
${phrases}`;
}

function sanitize(raw: RawItem, id: string): EnglishQuizItem | null {
  const prompt = typeof raw.prompt === "string" ? raw.prompt.trim() : "";
  const explanation = typeof raw.explanation === "string" ? raw.explanation.trim() : "";
  if (!prompt || !explanation) return null;

  if (raw.type === "mcq") {
    if (!Array.isArray(raw.options)) return null;
    const options = raw.options.map((o) => String(o).trim()).filter(Boolean);
    const correctIndex = Number(raw.correctIndex);
    if (options.length < 3 || options.length > 4) return null;
    if (new Set(options.map((o) => o.toLowerCase())).size !== options.length) return null;
    if (!Number.isInteger(correctIndex) || correctIndex < 0 || correctIndex >= options.length) {
      return null;
    }
    return { id, type: "mcq", prompt, options, correctIndex, explanation };
  }

  if (raw.type === "gap") {
    const answer = typeof raw.answer === "string" ? raw.answer.trim() : "";
    if (!answer) return null;
    const acceptedAnswers = Array.isArray(raw.acceptedAnswers)
      ? raw.acceptedAnswers.map((a) => String(a).trim()).filter(Boolean)
      : [];
    return { id, type: "gap", prompt, answer, acceptedAnswers, explanation };
  }

  return null;
}

export async function POST(req: Request) {
  const body = (await req.json()) as { lessonId?: string; avoid?: string[]; round?: number };
  const lesson = typeof body.lessonId === "string" ? getEnglishLesson(body.lessonId) : undefined;
  if (!lesson) {
    return NextResponse.json({ error: "lesson not found" }, { status: 404 });
  }

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "AI unavailable" }, { status: 503 });
  }

  const avoid = (Array.isArray(body.avoid) ? body.avoid : [])
    .map(String)
    .slice(-80)
    .map((p) => `- ${p}`)
    .join("\n");
  const round = typeof body.round === "number" ? body.round : Date.now();
  const examples = (lesson.drills ?? [])
    .slice(0, 4)
    .map((q) =>
      q.type === "mcq"
        ? `- mcq: ${q.prompt} | options: ${q.options.join(" / ")} | correct: ${q.options[q.correctIndex]}`
        : `- gap: ${q.prompt} | answer: ${q.answer}`,
    )
    .join("\n");

  const prompt = `You write practice questions for Brazilian Portuguese speakers learning English at CEFR ${lesson.level}.
Create ${ROUND_SIZE} NEW questions that practise exactly what this lesson teaches, using fresh situations, names, places and sentences, so the learner must understand the rule instead of memorising answers.

${lessonContext(lesson)}

Return ONLY valid JSON:
{"items": [
  {"type": "mcq", "prompt": string, "options": string[], "correctIndex": number, "explanation": string},
  {"type": "gap", "prompt": string, "answer": string, "acceptedAnswers": string[], "explanation": string}
]}

Rules:
- Mix about half "mcq" (exactly 4 options) and half "gap" (one short answer, 1–4 words).
- mcq: exactly ONE option is correct English; the other three must be clearly wrong (not just less natural). Vary where the correct option appears.
- gap: the prompt must contain "___" and the answer must fit it exactly so the full sentence is correct. Any hint in brackets must describe the answer truthfully (e.g. don't say "noun" for a verb, don't say "-ing" unless the answer ends in -ing). List other correct forms (contractions, capitalisation) in acceptedAnswers.
- Vary the task: translation from Portuguese, fill the gap, choose the correct form, fix the mistake, put words in order, pick the best reply in a short dialogue.
- Include common Portuguese-speaker traps where relevant (literal translations, missing articles, "have" for age, etc.).
- Keep vocabulary at ${lesson.level}. Explanations: one short, simple sentence in English that says why the answer is right.
- Before returning, re-check every item: solve it yourself and confirm the marked answer is the only correct one. Watch for hidden alternatives (e.g. "love to dance" vs "love dancing", emphatic "I do like", "to watch" vs "watching"): rewrite the mcq so only one option works, or add the alternative to acceptedAnswers for gaps.

Style examples from this lesson (match the style, do NOT copy them):
${examples || "- (none)"}

Do NOT reuse or lightly reword any of these previous questions:
${avoid || "- (none)"}`;

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_DRILLS_MODEL || "gpt-4o",
        temperature: 0.7,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: "Careful English teacher. Accurate answers. JSON only." },
          { role: "user", content: prompt },
        ],
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "AI request failed" }, { status: 502 });
    }
    const data = await res.json();
    const raw = data.choices?.[0]?.message?.content;
    const parsed = raw ? (JSON.parse(raw) as { items?: RawItem[] }) : {};
    const items = (parsed.items ?? [])
      .map((item, i) => sanitize(item, `${lesson.id}-gen-${round}-${i}`))
      .filter((q): q is EnglishQuizItem => q !== null)
      .slice(0, ROUND_SIZE);

    if (items.length < 4) {
      return NextResponse.json({ error: "Not enough valid questions" }, { status: 502 });
    }
    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ error: "AI request failed" }, { status: 502 });
  }
}
