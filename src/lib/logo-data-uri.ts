import { readFileSync } from "node:fs";
import { join } from "node:path";

export function getLogoDataUri(): string {
  const filePath = join(process.cwd(), "public", "logo-mark.png");
  const base64 = readFileSync(filePath).toString("base64");
  return `data:image/png;base64,${base64}`;
}
