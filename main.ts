// Worst Superpower — a one-line entry for make.fun's Worst Superpower bounty.
// The program writes exactly one line of text to /output/entry.txt:
// the most useless superpower imaginable, stated in a single breath.
// The power: shrink a spoon, slightly, once, forever. A drawer of
// ever-smaller spoons is the whole joke — no rescue, no upside.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I can turn any spoon I hold into a slightly smaller spoon, once, and I can never turn it back.";

// The grader mounts a fresh, writable /output and sets MAKEFUN_OUTPUT_DIR
// to it; locally the same variable points at a scratch dir. Fall back to
// the literal /output path so the program also runs bare.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate only accepts 1–140 characters; fail loudly instead of
// ever writing an over-long line.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-140`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), ENTRY, "utf8");
