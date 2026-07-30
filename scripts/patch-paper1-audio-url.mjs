import { readFileSync, writeFileSync } from "node:fs";

const p = "src/data/listening-fullpaper.ts";
let s = readFileSync(p, "utf8");
const ids = [...s.matchAll(/id:\s*"(lis-f[^"]+)"/g)]
  .map((m) => m[1])
  .filter((id) => !/-q\d+$/.test(id));

console.log("ids", ids);
for (const id of ids) {
  const re = new RegExp(
    `(id:\\s*"${id}"[\\s\\S]*?specialty:\\s*"[^"]+",\\s*\\n\\s*durationSec:\\s*\\d+,)`,
  );
  s = s.replace(re, (m) => {
    if (m.includes("audioUrl")) return m;
    return `${m}\n    audioUrl: "/audio/${id}.mp3",`;
  });
}
writeFileSync(p, s);
console.log("patched");
