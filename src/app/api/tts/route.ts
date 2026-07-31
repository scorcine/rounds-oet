import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

/** Clean learner prompts for natural English TTS (no underscore spam). */
export function prepareTtsText(raw: string): string {
  return raw
    .replace(/___+/g, "...")
    .replace(/\u2026/g, "...")
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 900);
}

const memoryCache = new Map<string, ArrayBuffer>();

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { text?: string; voice?: string };
    const text = prepareTtsText(body.text ?? "");
    if (text.length < 2) {
      return NextResponse.json({ error: "Missing text" }, { status: 400 });
    }

    const voice = body.voice || "nova";
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
      return NextResponse.json({ error: "TTS unavailable" }, { status: 503 });
    }

    const cacheKey = createHash("sha1").update(`${voice}|${text}`).digest("hex");
    let buf = memoryCache.get(cacheKey);
    if (!buf) {
      const model = process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";
      const res = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          voice,
          input: text,
          format: "mp3",
          speed: 0.95,
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        console.error("TTS fail", res.status, err);
        return NextResponse.json({ error: "TTS provider error" }, { status: 502 });
      }
      buf = await res.arrayBuffer();
      if (memoryCache.size > 80) {
        const first = memoryCache.keys().next().value;
        if (first) memoryCache.delete(first);
      }
      memoryCache.set(cacheKey, buf);
    }

    return new NextResponse(buf, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "TTS failed" }, { status: 500 });
  }
}
