/* ─── DATA FOR WSUP.AI CASE STUDY — based on live product analysis ───── */

export const STATS = [
  { n: "1M+", label: "Monthly visits", src: "Semrush · Mar 2026" },
  { n: "17 min", label: "Avg session", src: "Semrush · Mar 2026" },
  { n: "3.9★", label: "App Store rating", src: "App Store" },
  { n: "20+", label: "Content categories", src: "Live product" },
];

export const PROBLEMS = [
  { icon: "✗", text: "No onboarding — users dropped into a dark, content-heavy page with no guidance", solved: false },
  { icon: "✗", text: "Discovery was flat — 20+ character categories with no hierarchy or personalization", solved: false },
  { icon: "✗", text: "Dark theme readability — text was inconsistent, some copy vanished against dark surfaces", solved: false },
  { icon: "✗", text: "Monetization friction — credit prompts interrupted the core chat experience", solved: false },
  { icon: "✗", text: "Desktop felt empty — sidebar + header + content area with too much dead space", solved: false },
  { icon: "✓", text: "Designed a system that solves all five — from first visit through daily retention", solved: true },
];

export const COMPETITORS = [
  { name: "Character.ai", strength: "Largest user base, strong moderation, polished chat", gap: "Desktop is stretched mobile. Rigid content filters frustrate creative users. No creator monetization." },
  { name: "Replika", strength: "Deep emotional companion model, strong retention", gap: "Single-character only. No discovery, no social features, no creator ecosystem." },
  { name: "Janitor AI", strength: "Maximum customization, developer-friendly", gap: "Overwhelming UI, no visual system. Feels like a dev tool, not a consumer product." },
  { name: "Talkie AI", strength: "Polished interface, strong character personality engine", gap: "Heavy onboarding. Creator tools are limited. Discovery feels algorithmic, not explorable." },
  { name: "Joyland AI", strength: "Visual novel approach, structured storytelling", gap: "Limited chat flexibility. Niche audience. Desktop experience is an afterthought." },
];

export const JOURNEYS = [
  { name: "First visit → First chat", desc: "Gender + age onboarding (2 taps) → Explore grid → Category tabs → Tap character → Chat. Under 30 seconds to first message.", why: "Zero-friction entry is wsup.ai's core differentiator. Every extra step costs users." },
  { name: "Discovery → Engagement", desc: "20+ category tabs (Recommended, Anime, Romantic, Fantasy...) → Character cards with rank + chat count as social proof → SPICY toggle for content filtering", why: "Categories need to feel browsable, not overwhelming. Horizontal scroll keeps them accessible without eating vertical space." },
  { name: "Free user → Paying user", desc: "50 free daily credits → In-chat prompts for premium features → Daily check-in streak rewards → Credit purchase flow", why: "Monetization should feel like unlocking more, not hitting a wall. Credits popup uses streaks to build habit." },
  { name: "Consumer → Creator", desc: "Sidebar: Create Character + Create a Story → Persona builder → AI image generation → Publish to explore grid", why: "The sidebar makes creation a first-class action, not buried in settings. Creator tools visible from every page." },
];

export const SCREEN_DECISIONS = [
  { screen: "Explore", decision: "Category tabs as horizontal scroll, not dropdown", reasoning: "20+ categories need to be scannable at a glance. Dropdown hides options. Horizontal scroll with the active tab highlighted lets users browse without committing." },
  { screen: "Explore", decision: "Character cards show rank + chat count", reasoning: "Social proof drives discovery in a content-heavy platform. A card with '#1279 Rank · 2.0K Chats' tells users 'others trust this character' without requiring a click." },
  { screen: "Chat", decision: "Character profile in right sidebar, not a separate page", reasoning: "Context switching kills chat immersion. The right sidebar shows character details, 'View Profile' and subscription options without leaving the conversation." },
  { screen: "Sidebar", decision: "Recent chats + Group chat in persistent sidebar", reasoning: "Users return to specific characters. Making recent chats always visible turns the sidebar into a relationship manager, not just navigation." },
  { screen: "Onboarding", decision: "Gender + age only, pre-selected defaults", reasoning: "The modal pre-selects Male + 21-23 so users can tap Continue immediately. Two fields, one button, under 5 seconds. Anything more and the 'no sign-up' promise breaks." },
  { screen: "Credits", decision: "Daily check-in streak with escalating rewards", reasoning: "A streak counter (Day 5 → 7 days to level up) builds daily habit. Claim buttons for chat, story creation, image gen — each reward teaches a feature." },
];

export const TOKENS = [
  { category: "Colors", count: "90+", detail: "Text hierarchy, surfaces, status, credits, forms" },
  { category: "Spacing", count: "14", detail: "8px grid — 2px to 80px" },
  { category: "Radius", count: "4", detail: "pill · popup · card · button" },
  { category: "Shadows", count: "6", detail: "Calibrated for dark surfaces" },
];

export const TEXT_HIERARCHY = [
  { level: "title", opacity: "100%", color: "#ffffff", use: "Character names, headings" },
  { level: "subtitle", opacity: "80%", color: "#ffffffcc", use: "Chat count, rank indicators" },
  { level: "body", opacity: "70%", color: "#ffffffb2", use: "Descriptions, messages — the readability floor" },
  { level: "small", opacity: "60%", color: "#ffffff99", use: "Category labels, timestamps" },
  { level: "dim", opacity: "40%", color: "#ffffff66", use: "Footer text, de-emphasized metadata" },
];

export const USER_QUOTES = [
  { quote: "Simple and accessible — you can start chatting without any complicated setup", source: "App Store review" },
  { quote: "The variety of AI characters is one of the more entertaining aspects", source: "GeniusFirms review" },
  { quote: "It doesn't feel like a tool. It feels like a place", source: "SmartPostly review" },
];

export const PROCESS = [
  { phase: "01", name: "Audit & Research", duration: "Weeks 1–2", desc: "Analyzed existing Figma files (228 components, 203 variables). Audited 5 competitors. Mapped user journeys. Identified the gaps before touching any pixels.", collab: "Aligned with PM on priorities — discovery and chat were P0, creator tools were P1." },
  { phase: "02", name: "Foundation", duration: "Weeks 3–4", desc: "Built the token system (90+ colors, spacing scale, radii, shadows). Established the text opacity hierarchy. Created the dark theme rules that everything else sits on.", collab: "Debated the 70% readability floor with engineering — they wanted 60% to match their existing implementation. I showed side-by-side comparisons. 70% won." },
  { phase: "03", name: "Core Screens", duration: "Weeks 5–8", desc: "Designed Explore, Chat, and Profile — the three screens that cover 95% of user time. Mobile and desktop as separate designs, not responsive scaling.", collab: "Weekly design reviews with PM and APM. Pushed back on a tabbed Explore layout — data showed horizontal scroll had better category engagement." },
  { phase: "04", name: "System & Iteration", duration: "Weeks 9–present", desc: "Expanded to creator tools, monetization, leaderboard. Documented everything in a living style guide. Now shifting to agentic design process for faster iteration.", collab: "Handoff evolved from screenshot-based to token-referenced specs. Developers stopped asking 'which blue?'" },
];

export const WHAT_FAILED = {
  title: "The frosted glass experiment",
  story: "I designed all overlays — modals, sheets, popups — with frosted glass backgrounds (backdrop-blur). It looked beautiful in Figma. In production on the dark theme, it broke. Clicks passed through the blur layer. Colors bled unpredictably depending on what was behind the overlay. The glass effect looked different on every screen because the backgrounds varied.",
  resolution: "Scrapped frosted glass entirely. Replaced with solid dark surfaces (#1a1a1a). Less visually exciting, but completely reliable. The lesson: on dark themes, visual effects that work in isolation often fail in context. I now test every surface treatment against 3+ different background scenarios before committing.",
};

export const LEARNINGS = [
  "Zero-friction onboarding is a product decision, not a UX detail. Every field you add costs users. wsup.ai's 2-tap onboarding is its competitive moat.",
  "Dark theme readability isn't about picking nice colors — it's about a strict opacity system. 70% white is the floor for anything users should actually read.",
  "Monetization works when it feels like unlocking, not blocking. Daily credit streaks teach features while building retention.",
  "A sidebar is a relationship manager when it shows recent chats. It's dead weight when it only shows navigation links.",
  "Social proof on cards (rank + chat count) outperforms curated 'staff picks' for discovery. Let the community signal quality.",
];
