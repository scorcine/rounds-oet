import { NextResponse } from "next/server";
import { heuristicEnglishWritingFeedback } from "@/lib/english-writing-feedback";
import type { EnglishWritingFeedback } from "@/domain/feedback";

export const runtime = "nodejs";

async function aiEnglishWritingFeedback(input: {
  text: string;
  prompt: string;
  minWords: number;
  keywords?: string[];
  sample: string;
  level: string;
  lessonTitle: string;
}): Promise<EnglishWritingFeedback | null> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;

  const prompt = `You are a friendly English teacher for CEFR ${input.level} learners (many speak Portuguese).
Give clear, encouraging writing feedback. Focus on real mistakes in the learner text.
Return ONLY valid JSON:
{
  "ok": boolean,
  "scorePercent": number,
  "summary": string,
  "corrections": [{"original": string, "corrected": string, "explanation": string}],
  "strengths": string[],
  "improvements": string[],
  "correctedVersion": string
}

Rules:
- ok = true if the learner roughly completed the task and met ~${input.minWords} words (small grammar errors still ok=true).
- scorePercent 0–100 for this level (be fair, not harsh for A1).
- corrections: up to 6 concrete fixes from THEIR text (quote original snippet → corrected).
- explanations in simple English (one short sentence each).
- correctedVersion: full rewrite of THEIR text, keeping their meaning/facts (name, city, family), fixing grammar/spelling/capitalisation.
- strengths / improvements: short bullet-style strings (max 4 each).
- Do not invent clinical OET letter rules — this is general English Path writing.

Lesson: ${input.lessonTitle}
Task prompt: ${input.prompt}
Minimum words: ${input.minWords}
Suggested keywords (soft): ${(input.keywords ?? []).join(", ") || "none"}
Sample answer (style guide only): ${input.sample}

Learner text:
${input.text}`;

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.35,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: "CEFR English writing coach. Helpful, concrete, JSON only.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const raw = data.choices?.[0]?.message?.content;
    if (!raw) return null;
    const parsed = JSON.parse(raw) as {
      ok?: boolean;
      scorePercent?: number;
      summary?: string;
      corrections?: EnglishWritingFeedback["corrections"];
      strengths?: string[];
      improvements?: string[];
      correctedVersion?: string;
    };

    const wordCount = input.text.trim().split(/\s+/).filter(Boolean).length;
    const lengthOk = wordCount >= input.minWords;
    const keywordsOk =
      !input.keywords?.length ||
      input.keywords.some((k) => input.text.toLowerCase().includes(k.toLowerCase()));

    return {
      source: "ai",
      ok: typeof parsed.ok === "boolean" ? parsed.ok : lengthOk && keywordsOk,
      scorePercent: Math.round(
        Math.max(0, Math.min(100, parsed.scorePercent ?? (lengthOk ? 70 : 40))),
      ),
      summary: parsed.summary?.trim() || "Here is feedback on your writing.",
      corrections: (parsed.corrections ?? []).slice(0, 6).map((c) => ({
        original: String(c.original ?? ""),
        corrected: String(c.corrected ?? ""),
        explanation: String(c.explanation ?? ""),
      })),
      strengths: (parsed.strengths ?? []).slice(0, 4).map(String),
      improvements: (parsed.improvements ?? []).slice(0, 5).map(String),
      correctedVersion:
        parsed.correctedVersion?.trim() ||
        heuristicEnglishWritingFeedback(input).correctedVersion,
    };
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  const body = (await req.json()) as {
    text?: string;
    prompt?: string;
    minWords?: number;
    keywords?: string[];
    sample?: string;
    level?: string;
    lessonTitle?: string;
  };

  if (typeof body.text !== "string" || !body.text.trim()) {
    return NextResponse.json({ error: "text required" }, { status: 400 });
  }
  if (typeof body.prompt !== "string" || typeof body.sample !== "string") {
    return NextResponse.json({ error: "prompt and sample required" }, { status: 400 });
  }

  const input = {
    text: body.text,
    prompt: body.prompt,
    minWords: typeof body.minWords === "number" ? body.minWords : 15,
    keywords: body.keywords,
    sample: body.sample,
    level: body.level || "A1",
    lessonTitle: body.lessonTitle || "English lesson",
  };

  const ai = await aiEnglishWritingFeedback(input);
  const feedback = ai ?? heuristicEnglishWritingFeedback(input);
  return NextResponse.json(feedback);
}
