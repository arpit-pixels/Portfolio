/* ─── DESIGN SYSTEM + PRINCIPLES — wsup.ai case study ──── */

export const PRINCIPLES = [
  {
    n: "01",
    title: "Make the first chat as easy as possible",
    body: "Two taps and you're chatting. No signup. No tutorial. wsup earns the right to ask for your details only after you've felt it work.",
    proof: "Under 30 seconds from landing on the site to your first AI response.",
  },
  {
    n: "02",
    title: "Let users find characters, not the algorithm",
    body: "Cards show rank and chat count, not staff picks. The community decides what's worth opening. People trust crowd signals over algorithms.",
    proof: "Each card leads with '#1279 Rank · 2.0K Chats' — what the community is doing is the first thing you see.",
  },
  {
    n: "03",
    title: "Credits are how wsup stays alive",
    body: "Credits aren't a paywall — they're how wsup pays for AI compute. Image gen, regenerating chat replies more than 3 times, gifts, premium chat LLMs all cost real money. Users covering those costs keeps wsup free to start. The design job: make that trade clear — never hidden, never punishing.",
    proof: "Two ways wsup makes money, designed together — ads on visitors, credits on signed-up users.",
  },
];

export const TOKENS = [
  { category: "Production components", count: "132", detail: "React components built on the named system." },
  { category: "Codified patterns", count: "27", detail: "Patterns documented in the style guide — every reusable design solution has a named home." },
  { category: "Design rules", count: "154", detail: "Codified rules about when to use what, written into the system's rulebook." },
  { category: "Shipping after the cleanup", count: "Faster", detail: "Features landed on the named system noticeably faster than on the patchwork mess." },
];

export const TEXT_HIERARCHY = [
  { level: "title", opacity: "100%", color: "#ffffff", use: "Character names, headings" },
  { level: "subtitle", opacity: "80%", color: "#ffffffcc", use: "Chat count, rank indicators" },
  { level: "body", opacity: "70%", color: "#ffffffb2", use: "Descriptions, messages — the readability floor" },
  { level: "small", opacity: "60%", color: "#ffffff99", use: "Category labels, timestamps" },
  { level: "dim", opacity: "40%", color: "#ffffff66", use: "Footer text, de-emphasized metadata" },
];

