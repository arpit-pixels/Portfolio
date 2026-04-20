/* ─── DATA FOR DESIGNER AGENT CASE STUDY ─────────────────────────────── */

export const SESSION_DATA = [
  { s: "1", v: 8 }, { s: "2", v: 10 }, { s: "3", v: 12 },
  { s: "4", v: 15 }, { s: "5", v: 5 }, { s: "6", v: 22 },
  { s: "7", v: 18 }, { s: "8", v: 8 }, { s: "9", v: 6 },
];

export const CORRECTIONS = [
  { before: "Body text at 40% white", after: "70% white minimum", rule: "Readability floor", why: "40% is too faint for copy users should actually read. Corrected 3+ times before it stuck." },
  { before: "tracking: 0.2px on labels", after: "tracking: 0.8px", rule: "Label spacing", why: "Uppercase at 10px needs wide letter-spacing. Iterated from 0.2 → 0.7 → 0.8 across sessions." },
  { before: "Same-size cards for all states", after: "Active = large, dormant = compact", rule: "Size IS hierarchy", why: "Visual importance should map to physical size. Lower-priority items get smaller cards." },
  { before: "Primary buttons repeated in grids", after: "One primary per screen", rule: "Primary discipline", why: "Primary is reserved for the single most important action. Grids use secondary variant." },
  { before: "Desktop spacing = mobile spacing", after: "Desktop goes wider, not tighter", rule: "Spacing inverts", why: "Mobile pushes slim. Desktop pushes generous. Opposite directions — corrected 5+ times." },
  { before: "Rebuilt sidebar from scratch", after: "Import existing components", rule: "Reuse first", why: "ProfileHero, StatsRow, ActivePersonaCard already existed. Never rebuild what's built." },
];

export const PHASES = [
  { n: "01", name: "Pixel Matcher", sessions: "1–3", desc: "Could match Figma screenshots accurately. Required reference for every decision.", corrections: "5–10" },
  { n: "02", name: "Pattern Recognizer", sessions: "3–4", desc: "Started extracting shared components. Recognized when elements should be reused.", corrections: "~15" },
  { n: "03", name: "Taste Learner", sessions: "4–5", desc: "First autonomous design — profile desktop layout accepted. Started internalizing spacing philosophy.", corrections: "~15" },
  { n: "04", name: "Autonomous Designer", sessions: "5–9", desc: "Designs new screens from knowledge alone. Self-identifies gaps and researches to fill them.", corrections: "6–8" },
];

export const TOKENS = [
  { label: "Spacing values", count: 14 },
  { label: "Color tokens", count: 90 },
  { label: "Components", count: 62 },
  { label: "Radius tokens", count: 4 },
  { label: "Shadow definitions", count: 6 },
  { label: "Style guide sections", count: 25 },
];
