import { NextResponse } from "next/server";
import { SPEAKING_ROLEPLAYS } from "@/data/speaking";
import { heuristicSpeakingFeedback } from "@/lib/speaking-feedback";
import type { SpeakingFeedback, SpeakingCriterionScore, PhoneticFlag } from "@/domain/feedback";
import { percentToGrade } from "@/domain/skills";
import type { OetGrade } from "@/domain/types";

export const runtime = "nodejs";

async function aiSpeakingFeedback(
  rolePlayId: string,
  transcript: string,
): Promise<SpeakingFeedback | null> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;

  const rolePlay = SPEAKING_ROLEPLAYS.find((r) => r.id === rolePlayId);
  if (!rolePlay) return null;

  const prompt = `You are a strict OET Medicine Speaking assessor preparing a candidate for the real test.
Score Intelligibility, Fluency, Appropriateness, Resources. Be criterious: Grade B needs clear clinical communication, controlled fluency, appropriate professional functions (explain, check understanding, plan, safety-net), and adequate linguistic range.
Short or vague transcripts must score low. Do NOT inflate.
Return ONLY JSON:
{
  "overallPercent": number,
  "estimatedGrade": "A"|"B"|"C+"|"C"|"D"|"E",
  "criteria": [{"id":"intelligibility"|"fluency"|"appropriateness"|"resources","label":string,"scorePercent":number,"comment":string}],
  "phoneticFlags": [{"word":string,"issue":string,"suggestion":string}],
  "strengths": string[],
  "improvements": string[]
}

Role-play:
${rolePlay.candidateCard}

Useful phrases:
${rolePlay.samplePhrases.join(" | ")}

Transcript:
${transcript}`;

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
          { role: "system", content: "Strict OET speaking assessor for study. Do not inflate scores. JSON only." },
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
      criteria: SpeakingCriterionScore[];
      phoneticFlags: PhoneticFlag[];
      strengths: string[];
      improvements: string[];
    };

    return {
      source: "ai",
      estimatedGrade: parsed.estimatedGrade || percentToGrade(parsed.overallPercent),
      overallPercent: Math.round(parsed.overallPercent),
      transcript,
      criteria: parsed.criteria,
      phoneticFlags: parsed.phoneticFlags?.slice(0, 8) ?? [],
      strengths: parsed.strengths?.slice(0, 4) ?? [],
      improvements: parsed.improvements?.slice(0, 4) ?? [],
      humanReviewAvailable: true,
    };
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  const body = (await req.json()) as { rolePlayId?: string; transcript?: string };
  if (!body.rolePlayId || typeof body.transcript !== "string") {
    return NextResponse.json({ error: "rolePlayId and transcript required" }, { status: 400 });
  }
  const rolePlay = SPEAKING_ROLEPLAYS.find((r) => r.id === body.rolePlayId);
  if (!rolePlay) {
    return NextResponse.json({ error: "Unknown role-play" }, { status: 404 });
  }

  const ai = await aiSpeakingFeedback(body.rolePlayId, body.transcript);
  const feedback = ai ?? heuristicSpeakingFeedback(rolePlay, body.transcript);
  return NextResponse.json(feedback);
}
