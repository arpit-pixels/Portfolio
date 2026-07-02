/* ─── MAIN ORCHESTRATOR — wsup.ai case study data ────
   Brief, top-line stats, funnel + business outcomes live here.
   Detailed content is split across:
     - wsup-cs-research-data.ts   (research methods, competitors, findings)
     - wsup-cs-personas-data.ts   (5 behavioral personas)
     - wsup-cs-ideation-data.ts   (ideation boards, feature origin map)
     - wsup-cs-system-data.ts     (principles, tokens, text hierarchy, journeys)
     - wsup-cs-process-data.ts    (process phases, what failed, learnings, reflection)
*/

export const BRIEF = {
  oneLiner: "Growing wsup.ai from a chat app into a 1.79M-visit AI platform.",
  context: "wsup.ai launched in November 2024 as a simple chat app — characters, conversations, and a Discord server. Eighteen months later, users could build their own characters, post stories, generate AI images, group chat, send gifts, climb a leaderboard — all held together by a credit system. 1.79M monthly visits as of March 2026.",
  challenge: "Growing wsup beyond a chat app — without breaking the trust the original users had built.",
  scope: "Web, iOS, and Android. Three platforms designed separately, not responsive copies of each other. Five main parts of the product: Explore, Chat, Stories, Creator, Credits.",
  outcome: "1.79M monthly visits, 17:08 average session, 71% returning — engagement on par with Character.ai. Three lasting things came out of this work: a design system that unified the product, a credit-and-ads model that funds the AI without breaking trust, and an AI design assistant that ships routine screens in my style without me drawing them.",
};

export const ROLE = {
  title: "Lead Product Designer · Founding designer",
  responsibilities: "Owned UX end-to-end · established the design system · shipped every production screen · built and trained an AI design assistant",
  team: "PM (Ashish Pathak) · APM (Arastu Kumar) · Engineering team",
  timeline: "November 2024 – present · 18 months in",
  tools: "Figma · FigJam · Variables · Auto Layout · Component Properties · Agentic AI design",
};

export const STATS = [
  { n: "1.79M", label: "Monthly visits", src: "Semrush · Mar 2026" },
  { n: "17:08", label: "Avg session", src: "Semrush · Mar 2026" },
  { n: "4.89", label: "Pages per visit", src: "Semrush · Mar 2026" },
  { n: "71%", label: "Direct traffic", src: "Semrush · Mar 2026" },
];

export const FUNNEL_STAGES = [
  {
    stage: "01 — Getting people here",
    what: "1.79M monthly visits. 71% type the URL directly. 34.5% of Google searches that lead here are people searching 'wsup ai' by name.",
    designAngle: "Most visitors return by typing the URL or searching for wsup by name. The design earns word-of-mouth — not paid ads, not viral tricks.",
  },
  {
    stage: "02 — Keeping them here",
    what: "17 minutes 8 seconds average session. 4.89 pages per visit. 58% leave after one page.",
    designAngle: "Sessions are in Character.ai range. 4.89 pages-per-visit means users browse across discovery, chat, stories, and creator tools — not bouncing after one click.",
  },
  {
    stage: "03 — Making money from visitors",
    what: "Banner and leaderboard ads, only on logged-out traffic.",
    designAngle: "This is how wsup makes money from the 1.79M visitors who haven't signed up yet. The ads disappear the moment they sign up.",
    designAnglePills: [
      {
        after: "The ads disappear the moment they sign up",
        q: "Doesn't this train users that signing up is annoying since you're using ads as a wall?",
        a: "We thought about that. The framing in the product is the opposite: ads are a passive presence on the visitor experience, and signup is a positive action that removes them. Users don't perceive 'ads here, please sign up to remove' — they perceive 'I see ads as a guest, no ads after I sign up.' We tested the language: nowhere in the product does anything say 'sign up to remove ads.' The ad removal is a discovered benefit, not a marketed one. Discovered benefits build positive feeling; marketed gates build resentment.",
        followups: [
          {
            q: "How do you know users perceive it as positive vs annoying?",
            a: "Guest sessions convert to signups well. And the qualitative signal: zero Discord complaints about ads being annoying or about the ad-free post-signup feeling like a manipulation. If users perceived it as a wall, the Discord would be telling us. The silence on this is the strongest evidence.",
          },
        ],
      },
    ],
  },
  {
    stage: "04 — Getting them to sign up",
    what: "Signing up removes the ads — it's a benefit users get, not a wall they have to climb.",
    designAngle: "Most products say 'sign up to unlock this feature.' wsup says 'sign up to make the ads go away.' Same mechanism, more honest framing.",
  },
  {
    stage: "05 — Getting them to come back",
    what: "Day 1, Day 7, and Day 30 return rates are comparable to the top apps in this category.",
    designAngle: "Daily streaks, multiple things to do (chat + stories + creator tools), and the Discord stack up. Users return for the relationships they've built with their characters — not for features.",
  },
  {
    stage: "06 — Making money from users",
    what: "A small group of heavy users drive a large share of revenue — typical for creative platforms.",
    designAngle: "Per-action pricing scales with how much AI work is happening. Casual users aren't punished; heavy users don't get an unfair subsidy. Credits work like fuel, not a paywall.",
    designAnglePills: [
      {
        after: "Casual users aren't punished",
        q: "How do you keep casual users from feeling priced out as wsup grows?",
        a: "Three protections. (1) 50 free credits daily — enough to cover normal casual chat for almost any user; the typical casual user never hits the wall. (2) Streak rewards top up casual users every day they show up, making the free pool feel generous rather than rationed. (3) Per-action pricing means casual users only see a price when they reach for a premium feature — image generation, advanced models, the 4th regenerate. The wall isn't moved closer to them; it's just there if they reach for things that cost real money.",
        followups: [
          {
            q: "What happens if AI compute costs go up and you can't sustain 50 free daily credits?",
            a: "We'd renegotiate from there — drop to 25, or shrink which actions are free, or introduce ad-supported free tier for signed-in users (a 'second-gen' version of the visitor ad model). The economic constraint is real. If costs squeeze us, we'd cut the casual benefits before raising prices on heavy users — because heavy users have demonstrated willingness to pay, and casual users haven't. Protecting the heavy-user economics protects the platform.",
          },
        ],
      },
    ],
  },
];

/* V2: deduped — 1.79M and 71% already live in the hero stats row.
   Kept: the engagement comparison + the two facts the hero doesn't show. */
export const BUSINESS_OUTCOMES = [
  { metric: "How engaged users are", value: "17:08", note: "Average session — same as Character.ai (Semrush)" },
  { metric: "Brand awareness", value: "34.5%", note: "of search traffic comes from people searching 'wsup ai' by name (Semrush)" },
  { metric: "US users", value: "76.6%", note: "of users are in the US — 1.37M monthly visits (Semrush)" },
];

/* Convenience re-exports — components can import everything from this one file */
export { RESEARCH_METHODS, COMPETITORS, ALSO_TRACKED, WSUP_MOATS, DISCORD_FINDINGS } from "./wsup-cs-research-data";
export { PERSONAS } from "./wsup-cs-personas-data";
export { IDEATION_BOARDS, FEATURE_MAP } from "./wsup-cs-ideation-data";
export { PRINCIPLES, TOKENS, TEXT_HIERARCHY } from "./wsup-cs-system-data";
export { PROCESS, WHAT_FAILED, LEARNINGS, REFLECTION } from "./wsup-cs-process-data";
