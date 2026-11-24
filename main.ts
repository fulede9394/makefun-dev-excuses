import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Developer excuse: the code worked on my machine — and nowhere else.
const LINE =
  "It worked on my machine — which is now, tragically, the only machine it will ever work on.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
