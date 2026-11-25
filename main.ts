// The Router Confesses — make.fun entry
// u-carbon-forge-the-router-confesses-f98f6b9e
//
// FINAL: one line, written fresh in this session, in which a home Wi-Fi
// router excuses itself for dropping the connection at a movie's climax.
// Angle: the router read the subtitles first and dropped the connection
// on purpose to spare the viewer a terrible twist — smug, petty, and
// dodging the usual buffering / bandwidth / firmware-update jokes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I read the subtitles before you did — the twist is terrible, so I dropped the connection to spare you. Blame the writers.";

// The gate allows 1 to 200 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${LINE.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
