/**
 * Generate original listening MP3s via OpenAI TTS from data files.
 *
 * Usage:
 *   node --env-file=.env.local scripts/generate-listening-audio.mjs
 *   ONLY=lis-fa-1,lis-fa-2 node --env-file=.env.local scripts/generate-listening-audio.mjs
 *   FILES=listening-fullpaper,listening-fullpaper-2 node --env-file=.env.local scripts/generate-listening-audio.mjs
 */
import { mkdir, writeFile, access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dataDir = path.join(root, "src", "data");
const outDir = path.join(root, "public", "audio");

const FALLBACK_TRACKS = [
  {
    id: "lis-a-4",
    voice: "alloy",
    text: "How has your breathing been since discharge? Better, but I still cough, especially at night. Any fever in the last three days? No fever. I finished the antibiotics yesterday. Are you back to walking to the shops? Yes, slowly. I get short of breath on the hill. Reminder — we need a repeat chest X-ray in six weeks, and please avoid smoking. Nicotine replacement is available if you want help.",
  },
];

const VOICES = ["alloy", "onyx", "nova", "shimmer", "echo", "fable"];

function stripTsString(raw) {
  let s = raw.trim();
  if ((s.startsWith("`") && s.endsWith("`")) || (s.startsWith('"') && s.endsWith('"'))) {
    s = s.slice(1, -1);
  }
  return s.replace(/\\n/g, " ").replace(/\s+/g, " ").trim();
}

/** Parse id + ttsScript pairs from a listening data .ts file. */
function parseTracksFromSource(source, fileHint = "") {
  const tracks = [];
  const idRe = /id:\s*"([^"]+)"/g;
  let m;
  const ids = [];
  while ((m = idRe.exec(source))) {
    // only extract ids that look like listening extract ids (not question ids)
    if (!/-q\d+$/i.test(m[1]) && (m[1].startsWith("lis-") || m[1].startsWith("listen"))) {
      ids.push({ id: m[1], index: m.index });
    }
  }

  for (let i = 0; i < ids.length; i++) {
    const start = ids[i].index;
    const end = i + 1 < ids.length ? ids[i + 1].index : source.length;
    const block = source.slice(start, end);
    const ttsMatch =
      block.match(/ttsScript:\s*`([\s\S]*?)`/) ||
      block.match(/ttsScript:\s*"((?:\\.|[^"\\])*)"/) ||
      block.match(/ttsScript:\s*\n\s*"((?:\\.|[^"\\])*)"/);
    if (!ttsMatch) continue;
    const text = stripTsString(
      ttsMatch[0].includes("`") ? `\`${ttsMatch[1]}\`` : `"${ttsMatch[1]}"`,
    );
    if (text.length < 40) continue;
    tracks.push({
      id: ids[i].id,
      voice: VOICES[i % VOICES.length],
      text,
      fileHint,
    });
  }
  return tracks;
}

async function loadTracks() {
  const fileFilter = process.env.FILES?.split(",").map((s) => s.trim()).filter(Boolean);
  const names = (await readdir(dataDir)).filter(
    (n) => n.startsWith("listening") && n.endsWith(".ts"),
  );
  const selected = fileFilter?.length
    ? names.filter((n) => fileFilter.some((f) => n.includes(f.replace(/\.ts$/, ""))))
    : names.filter((n) => n.includes("fullpaper") || n === "listening-bank2.ts");

  const tracks = [];
  for (const name of selected) {
    const src = await readFile(path.join(dataDir, name), "utf8");
    tracks.push(...parseTracksFromSource(src, name));
  }

  // Always include bank2 short tracks if empty parse
  if (!tracks.length) return FALLBACK_TRACKS;

  // de-dupe by id
  const map = new Map();
  for (const t of tracks) map.set(t.id, t);
  return [...map.values()];
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    console.error("Missing OPENAI_API_KEY");
    process.exit(1);
  }

  await mkdir(outDir, { recursive: true });
  let list = await loadTracks();
  const only = process.env.ONLY?.split(",").map((s) => s.trim()).filter(Boolean);
  if (only?.length) list = list.filter((t) => only.includes(t.id));

  const model = process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";
  console.log(`Tracks to consider: ${list.length}`);

  for (const track of list) {
    const dest = path.join(outDir, `${track.id}.mp3`);
    if (process.env.FORCE !== "1" && (await exists(dest))) {
      console.log(`skip ${track.id} (exists)`);
      continue;
    }
    // OpenAI TTS input limit ~4096 chars; truncate safely
    const input = track.text.slice(0, 4000);
    console.log(`generate ${track.id} (${input.length} chars)…`);
    const res = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        voice: track.voice,
        input,
        format: "mp3",
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      console.error(`fail ${track.id}: ${res.status} ${err}`);
      process.exit(1);
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`wrote ${dest} (${buf.length} bytes)`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
