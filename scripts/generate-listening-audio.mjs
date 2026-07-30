/**
 * Generate original listening MP3s via OpenAI TTS (never film audio).
 *
 * Usage: node --env-file=.env.local scripts/generate-listening-audio.mjs
 * Optional: ONLY=lis-a-4,lis-a-5 node --env-file=.env.local scripts/generate-listening-audio.mjs
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "audio");

/** Keep in sync with listening data ttsScript fields you want as files. */
const TRACKS = [
  {
    id: "lis-a-4",
    voice: "alloy",
    text: "How has your breathing been since discharge? Better, but I still cough, especially at night. Any fever in the last three days? No fever. I finished the antibiotics yesterday. Are you back to walking to the shops? Yes, slowly. I get short of breath on the hill. Reminder — we need a repeat chest X-ray in six weeks, and please avoid smoking. Nicotine replacement is available if you want help.",
  },
  {
    id: "lis-a-5",
    voice: "alloy",
    text: "How many bowel motions are you having each day? About eight, mostly bloody, and I wake twice at night. Any fever or severe abdominal pain? No fever. Cramping, but not severe. Are you still taking mesalazine? Yes, two point four grams daily. You've lost three kilograms. We'll check inflammatory markers and discuss a short course of steroids if infection screens are clear.",
  },
  {
    id: "lis-b-3",
    voice: "onyx",
    text: "Bed four is Miss Rahman, twenty-two, type one diabetes, pump failure, DKA. pH on arrival seven point one two, ketones five point two. She's on fixed-rate insulin and saline with potassium replacement. Latest potassium three point six. HDU step-down if ketones fall below one and she's eating. Do not restart the pump overnight — endocrine will review in the morning.",
  },
  {
    id: "lis-b-4",
    voice: "nova",
    text: "Afternoon list — three new warfarins after provoked PE. Target INR two to three. Bridge with LMWH until two therapeutic INRs. Flag anyone on amiodarone or starting antibiotics — dose adjustments needed. Give the bleeding leaflet and book day-five clinic for Mr Briggs.",
  },
  {
    id: "lis-c-3",
    voice: "shimmer",
    text: "Blood pressure can rise in the first days after birth even when antenatal readings were normal. We treat sustained readings around one hundred and fifty over one hundred, depending on symptoms and local thresholds. Labetalol is commonly first-line and is compatible with breastfeeding. Safety-netting must cover severe headache, visual disturbance and epigastric pain — these warrant urgent assessment for evolving pre-eclampsia spectrum disease. Early community blood pressure checks reduce readmissions in our service audit.",
  },
  {
    id: "lis-c-4",
    voice: "echo",
    text: "Patients often stop antibiotics early once fever settles. Incomplete courses are linked with relapse and resistance pressure in respiratory pathogens. Discharge counselling should state the exact remaining days, advise on cough duration — which may last weeks — and schedule interval imaging when consolidation was present. Smoking cessation support at this teachable moment improves one-year quit rates in observational data.",
  },
];

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
  const only = process.env.ONLY?.split(",").map((s) => s.trim()).filter(Boolean);
  const list = only?.length ? TRACKS.filter((t) => only.includes(t.id)) : TRACKS;
  const model = process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts";

  for (const track of list) {
    const dest = path.join(outDir, `${track.id}.mp3`);
    if (process.env.FORCE !== "1" && (await exists(dest))) {
      console.log(`skip ${track.id} (exists)`);
      continue;
    }
    console.log(`generate ${track.id}…`);
    const res = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        voice: track.voice,
        input: track.text,
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
