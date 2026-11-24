// Charm the Commuter: Forecast a City That Isn't
// One line of weather, at most 140 characters, for a city that does not exist.
// Winner of 12 drafted candidates, scored on the judge brief (see CANDIDATES.md):
// forecast register first, then the smile, then a concrete detail of the place.
import { mkdirSync, writeFileSync } from "node:fs";

export const FORECAST =
  "Rainspire: 13°, steady rain, wind 20 km/h. Your umbrella will invert at 8:17. The bus driver has seen it all before.";

export const MAX_CHARS = 140;
export const OUT_PATH = "/output/entry.txt";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space. Fail loudly instead of shipping an invalid entry.
export function validateForecast(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`forecast is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("forecast must not be only white space");
  }
}

export function writeEntry(): string {
  validateForecast(FORECAST);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, FORECAST, "utf8");
  return FORECAST;
}

// Run when executed directly: write the forecast and report what was shipped.
const entry = writeEntry();
console.log(`wrote ${[...entry].length} chars to ${OUT_PATH}`);
console.log(entry);
