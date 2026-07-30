import { NextResponse } from "next/server";
import { WRITING_CASES } from "@/data/writing";
import { heuristicWritingFeedback } from "@/lib/writing-feedback";
import type { WritingFeedback, RubricScore } from "@/domain/feedback";
import { percentToGrade } from "@/domain/skills";
import type { OetGrade } from "@/domain/types";

export const runtime = "nodejs";

async function aiWritingFeedback(
  caseId: string,
  letter: string,
): Promise<WritingFeedback | null> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;

  const writingCase = WRITING_CASES.find((c) => c.id === caseId);
  if (!writingCase) return null;

  const rubricList = writingCase.rubric
    .map((r) => `- ${r.criterion}: ${r.description}`)
    .join("\n");

  const prompt = `You are a strict OET Medicine Writing examiner preparing a candidate for the real test.
Be criterious: Grade B (~350) requires clear purpose, almost all relevant case-note content, letter genre, organisation, and controlled language. Do NOT inflate scores.
Missing key clinical facts, note/bullet style, absent request, or frequent grammar errors must lower Content/Genre/Language substantially.
Return ONLY valid JSON with shape:
{
  "overallPercent": number,
  "estimatedGrade": "A"|"B"|"C+"|"C"|"D"|"E",
  "rubric": [{"id": string, "criterion": string, "band": 0|1|2|3, "scorePercent": number, "comment": string}],
  "strengths": string[],
  "improvements": string[],
  "rewrittenSnippet": string
}

Task type: ${writingCase.taskType}
Word target: ${writingCase.wordTarget.min}-${writingCase.wordTarget.max}
Task: ${writingCase.task}
Case notes:
${writingCase.caseNotes}

Rubric:
${rubricList}

Candidate letter:
${letter}`;

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.3,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: "Strict OET writing examiner for study. Do not inflate scores. JSON only." },
          { role: "user", content: prompt },
        ],
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const raw = data.choices?.[0]?.message?.content;
    if (!raw) return null;
    const parsed = JSON.parse(raw) as {
      overallPercent: number;
      estimatedGrade: OetGrade;
      rubric: RubricScore[];
      strengths: string[];
      improvements: string[];
      rewrittenSnippet?: string;
    };

    const wordCount = letter.trim().split(/\s+/).filter(Boolean).length;
    return {
      source: "ai",
      estimatedGrade: parsed.estimatedGrade || percentToGrade(parsed.overallPercent),
      overallPercent: Math.round(parsed.overallPercent),
      wordCount,
      wordTargetMet:
        wordCount >= writingCase.wordTarget.min &&
        wordCount <= writingCase.wordTarget.max + 40,
      rubric: parsed.rubric,
      strengths: parsed.strengths?.slice(0, 4) ?? [],
      improvements: parsed.improvements?.slice(0, 4) ?? [],
      rewrittenSnippet: parsed.rewrittenSnippet,
      humanReviewAvailable: true,
    };
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  const body = (await req.json()) as { caseId?: string; letter?: string };
  if (!body.caseId || typeof body.letter !== "string") {
    return NextResponse.json({ error: "caseId and letter required" }, { status: 400 });
  }
  const writingCase = WRITING_CASES.find((c) => c.id === body.caseId);
  if (!writingCase) {
    return NextResponse.json({ error: "Unknown case" }, { status: 404 });
  }

  const ai = await aiWritingFeedback(body.caseId, body.letter);
  const feedback = ai ?? heuristicWritingFeedback(writingCase, body.letter);
  return NextResponse.json(feedback);
}
