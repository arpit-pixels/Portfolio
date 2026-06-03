/* ─── PROCESS, WHAT FAILED, LEARNINGS — wsup.ai case study ──── */

export const PROCESS = [
  {
    phase: "01",
    name: "Launch — chat, characters, Discord",
    duration: "Nov 2024 – mid 2025",
    desc: "Launched the first version with the founding team — chat page, character builder, signup flow, Discord. Small team, fast cycles, no roadmap beyond 'see what people use.' This became the chat surface every later feature had to respect.",
    descPills: [
      {
        after: "the part of the product I'd be protecting in every phase that came later",
        q: "How did you keep the V1 chat surface stable while shipping all the V2 features on top?",
        a: "Treated it as protected infrastructure. Anything that touched the original chat surface required a higher review threshold (PM + designer + senior eng) — anything else could ship with normal review. We also had a written rule that every V2 feature should be additive — visible only when the user opted into it. Group chat? Only visible if you've started a group. Image gen? Only when you click the new icon. The original chat experience for a user who didn't engage with V2 features should still feel exactly like V1. That kept founding-era users grounded.",
        followups: [
          {
            q: "Did anything slip through that protection?",
            a: "Yes — the credit attribution change. Originally credits were spent at a single point per session; we changed it to per-action mid-2025. That technically touched the chat surface (a credit deduction now appeared during chat) and we should've routed it through the higher review. We didn't, because we framed it as a 'credit system change, not a chat change.' Lesson: anything users will notice DURING chat is a chat change, regardless of what we call it internally.",
          },
        ],
      },
    ],
    collab: "Ashish (PM) and I decided in standups, not specs; Discord was the feedback firehose from early on.",
  },
  {
    phase: "02",
    name: "Growth pressure — features faster than the system could keep up",
    duration: "Mid 2025 – late 2025",
    desc: "Discord blew up with feature requests every day. Image gen and creator tools became table stakes. Stories got added because users were already posting characters in Discord. Then group chat. Then a chat-LLM picker. Then gifts. Credits became the payment system. Every feature shipped in weeks — each with its own visual style. By month 12 the Figma file had grown large and inconsistent, mostly undocumented. The product no longer felt unified.",
    descPills: [
      {
        after: "The cost of moving fast was showing up as a product that no longer felt unified",
        q: "Why didn't you stop and clean up earlier instead of letting the system drift?",
        a: "I argued for it twice — at month 8 and month 10. Both times the PM weighed it against the cost of slowing feature shipping during a competitive moment, and both times we deferred. The right answer in hindsight was probably to stop at month 10, but we were watching competitors ship image generation and creator tools and we couldn't afford a visible pause. The trade was: more debt now, cleanup later. That trade can be defended; it can also be wrong. We got lucky that the cleanup window came before the debt became unbearable.",
        followups: [
          {
            q: "What would 'unbearable debt' have looked like?",
            a: "A point where every new feature took far longer to ship because of design rework, where engineers refused to commit to a sprint until a design system existed, or where users started complaining publicly about visual inconsistency. We were starting to see signs of #1 by month 12 — that's what triggered the cleanup decision. Two more months of drift and we'd have been at #2.",
          },
        ],
      },
    ],
    collab: "Ashish (PM) and Arastu (APM) ran what got built; I owned visuals but couldn't keep pace — each feature shipped with its own look.",
    collabPills: [
      {
        after: "every new feature came in with its own look",
        q: "How did you communicate to the team that 'I'm losing the system' without it sounding like an excuse?",
        a: "I shared the data, not the complaint. I'd open a sprint review with 'here's the visual inconsistency we shipped this sprint' — concrete examples: three different blue values across new features, four different button radii, two competing modal patterns. Engineering and PM saw the cost in their own terms (rework, debate time, slower future shipping). They proposed the cleanup before I had to formally pitch it. Lesson: when arguing for time investment, show the cost of NOT doing it in the team's language, not yours.",
      },
    ],
  },
  {
    phase: "03",
    name: "The cleanup — putting names on what we'd already shipped",
    duration: "Late 2025 – early 2026",
    desc: "Stepped back to define what the product had actually become. Built the design system after the fact — colors, sizes, spacing, shadows named and applied to every screen. Settled the brightness fight (engineering wanted lighter, I wanted brighter for readability; a side-by-side with real chat messages won). Replaced the see-through 'glass' panels — beautiful in Figma, broken in production — with solid backgrounds.",
    collab: "The hardest sell. Engineering wanted to keep shipping on the mess; I made the case that a named system pays back fast. It did — we were soon shipping noticeably faster.",
    collabPills: [
      {
        after: "shipping noticeably faster",
        q: "You say 'noticeably faster' and 'paid for itself quickly' but give no hard number. As a hiring manager I read vague metrics as 'I don't actually have the data.' Do you?",
        a: "I have the directional data, not a clean controlled number, and I'd rather say that than fake precision. I tracked engineer-hours spent on visual rework before and after the system — it dropped enough that engineering stopped raising it in sprint reviews, which is the real signal. I don't claim '2× faster' because I can't isolate it from the team also getting more senior and the surface area changing at the same time. A precise number here would be a number I made up. The defensible claim is the direction and the mechanism: named tokens killed the 'which blue' debates and the rework they caused.",
      },
      {
        after: "I made the case that a named system pays back fast",
        q: "How specifically did you make the math work to justify the payback?",
        a: "I built a small tracking sheet — for each shipped feature in the previous quarter, I logged engineer-hours spent on visual fixes, alignment debates, and rework. The total was significant. I projected what that same time would have been on a system-based shipping process (no debates about which blue, no rework because tokens were already named). The math showed the cleanup would pay for itself fast. Engineering didn't need to be convinced of the design value; they needed to be convinced of the time math. Once they saw it, the conversation changed.",
        followups: [
          {
            q: "Did the actual payback match your projection?",
            a: "It came in faster than projected. The math was conservative because I didn't fully account for compounding: the more screens used the system, the faster new ones could ship because patterns were established. Each new screen shipped faster than the last as patterns settled. The original projection only modeled linear gains; reality was super-linear.",
          },
        ],
      },
    ],
  },
  {
    phase: "04",
    name: "Next version launch + AI design assistant",
    duration: "Jan 2026 – present",
    desc: "Launched the next version of wsup — the one this case study shows. Picture This (image gen), TikTok-style story browsing, sorting filters, leaderboard, deeper customization, plus newer image models like NanoBanana and SeedDream. All on the design system, all consistent. Then I built VDA — an AI design assistant. Learned my style across 22+ sessions. 250+ design decisions and 60+ aesthetic rules in memory. Now builds new screens that match my work without me reviewing every pixel.",
    descPills: [
      {
        after: "Then I built VDA — a design assistant powered by AI",
        q: "Why build a designer agent instead of hiring more designers?",
        a: "Different ROIs. A new designer hire takes 3-6 months to ramp on the wsup design system, costs continuously, and serves one team. VDA codifies the system once, learns my taste, and produces components on demand with no ramp time. For routine work — variants, layout adjustments, predictable extensions — VDA is faster and cheaper. For strategic work — new surface conception, complex tradeoffs — humans are still the answer. So the agent didn't replace hiring; it absorbed the work that doesn't need a human, freeing future hires to focus on strategic work.",
        followups: [
          {
            q: "How do you trust VDA's output without reviewing every pixel?",
            a: "VDA only produces components on routine work — variants of patterns the system already has. Anything new (a new surface, a new pattern, anything that touches the chat surface) is gated for human review. The trust is bounded to the well-defined. Routine work ships; anything new is gated for my review. I tuned it until I rarely needed to change what it shipped.",
          },
          {
            q: "What happens if VDA's taste drifts from yours over time?",
            a: "I recalibrate it periodically. I review a sample of VDA's recent output, flag anything I'd have changed, and feed those changes back as new rules. The rule set keeps growing as my taste evolves. VDA grows by absorbing my evolving taste, not by generating its own. The day VDA starts making decisions I'd disagree with at scale is the day the recalibration cadence needs to be tighter.",
          },
        ],
      },
    ],
    collab: "Handoff to engineers evolved: Figma prototypes early, then builds straight from named tokens, now whole screens from the Designer Agent — all on the same system.",
  },
];

export const WHAT_FAILED = [
  {
    title: "The see-through glass mistake",
    story: "Every popup, modal, and sheet used a see-through 'glass' background — iOS-style frosted blur with color tints. Beautiful in Figma. Broken in production. The tint mixed unpredictably with whatever was behind it — a chat, a character card, an ad — so the same modal looked like a different component on every page, and text that passed contrast on one surface failed on the next.",
    storyPills: [
      {
        after: "Broken in production",
        q: "Why didn't you test in production before committing the design?",
        a: "Honest answer: I didn't think it would matter. Frosted glass is a well-established iOS pattern; I assumed it would translate. The problem was specific to wsup's dark theme — the underlying surfaces in our app vary much more than iOS's typical light environment, and the blur amplified those variations. I should've prototyped with real backgrounds at multiple zoom levels before committing the system. Lesson learned the hard way.",
        followups: [
          {
            q: "How did this not get caught in design review?",
            a: "Design review used the same Figma backgrounds — a single neutral dark surface — that hid the problem. The flaw was in our review setup, not just the design. Now I test against three different background scenarios in design review specifically because of this. The new check is: 'show me this overlay against a dark surface, a busy chat surface, and a creator surface with characters.' If it works on all three, it ships.",
          },
        ],
      },
    ],
    resolution: "Scrapped the glass. Replaced with solid dark backgrounds (#1a1a1a). Less exciting, completely reliable. Lesson: on dark themes, fancy effects that work alone fail in combination. I now test every popup against three different backgrounds before committing.",
    resolutionPills: [
      {
        after: "completely reliable",
        q: "Don't you ever want to revisit glass with proper testing?",
        a: "Maybe, eventually, in a controlled way — for one specific surface (a modal that doesn't have variable backgrounds behind it, where the surrounding surface is fixed). But system-wide application is permanently off the table. Glass effects need predictable surroundings; consumer apps don't have predictable surroundings. The lesson generalizes: every visual effect that needs context to work right will fail in a context-rich product.",
      },
    ],
  },
  {
    title: "The category dropdown menu",
    story: "The first Explore used a dropdown for the 20+ categories — the 'clean' choice. Tested with users. Niche categories like Fantasy, Sci-Fi, Slice of Life collapsed to almost zero usage. Users only opened the top 3 the dropdown showed.",
    storyPills: [
      {
        after: "Users only opened the top 3 the dropdown showed",
        q: "What % of users does that represent — was it a real loss or a small subset?",
        a: "The top-3 concentration was across the entire test group — every user we observed opened almost exclusively from the top 3, almost regardless of which categories were ranked top 3 that week. So niche category engagement collapsed to a fraction of what it had been with horizontal scroll, and that was across the user base, not a subset. Fantasy, Sci-Fi, Slice of Life users effectively churned.",
        followups: [
          {
            q: "Did you see the same pattern with horizontal scroll, just less severe?",
            a: "No — horizontal scroll showed a more even usage distribution. The top 3 categories were still the most popular (which is fine, that's organic), but the long tail held its ground. The dropdown was actively suppressing the long tail; horizontal scroll was passively letting it surface. That's the difference between a UI choice that hides options vs. one that lists them.",
          },
        ],
      },
    ],
    resolution: "Replaced with sideways-scrolling tabs. Niche categories were back to normal usage within a week. Lesson: options you have to click to find are options nobody picks. In a discovery product, hiding browse behind a click kills everything that isn't already popular.",
    resolutionPills: [
      {
        after: "options you have to click to find are options nobody picks",
        q: "Why didn't you A/B test dropdown vs scroll before shipping the dropdown?",
        a: "We were too confident in the 'clean dropdown' as the right pattern. The thinking was: dropdown is a well-known pattern, scroll is messy, surely dropdown wins. The miss was failing to think about what the user is doing — for a discovery surface, browse intent matters, and dropdowns suppress browse intent. Lesson: even for 'well-known' patterns, test in context. Patterns don't generalize across use cases.",
      },
    ],
  },
  {
    title: "The game-pass that fought the brand",
    story: "wsup's credits needed a rewards surface, so I designed a full game-pass — daily streaks, tiers, 2× reward days, gems to claim. It was polished, and I was proud of it. The PM pushed back: it looked like a mobile game, not an AI companion. We shipped a lean credits sidebar instead.",
    storyPills: [
      {
        after: "it looked like a mobile game, not an AI companion",
        q: "Your design was good and it still got cut. Didn't the PM just have different taste?",
        a: "I thought exactly that at the time — I argued it was good enough. He was right and I was wrong, and it took me a while to see why. The design was good — that was the trap. I was answering 'is this a good rewards screen' when the real question was 'is this us.' A game-pass tells the user they're in a game to grind. wsup is a companion you build a relationship with. The mechanic borrowed the wrong category's mental model, and no amount of polish fixes a design that's pulling against what the product is.",
      },
    ],
    resolution: "The lean credits sidebar shipped — smaller, quieter, on-brand for a companion instead of a gacha game. Lesson: a reward system isn't just a mechanic, it's a signal of what kind of product you're in. I now check my work against 'what are we' before 'is this good' — because good in the wrong category is still wrong.",
    resolutionPills: [
      {
        after: "good in the wrong category is still wrong",
        q: "How do you catch the 'wrong category' mistake earlier next time, before a PM has to?",
        a: "I started gut-checking new surfaces against a one-line identity test: 'what does this make the user feel they're in?' For wsup the answer has to be 'a relationship,' not 'a game' or 'a store.' If a borrowed pattern answers it wrong — streaks and tiers say 'game,' aggressive upsells say 'store' — it's suspect no matter how clean it looks. Same discipline as the token system: name what you are, then check the work against it.",
      },
    ],
  },
  {
    title: "Handing the agent too much",
    story: "As I leaned on VDA — my design assistant — for more, I started handing it whole screens at once. It drifted: fed too much context, it pulled in the wrong details, stopped holding to the token system, and on new surfaces it broke down once it ran past the patterns it knew. Keeping a single screen on-system turned into a 20–30 minute babysitting loop. At that point the agent was costing me time, not saving it.",
    storyPills: [
      {
        after: "the agent was costing me time, not saving it",
        q: "Isn't 'the AI cost me time' an argument against the whole agentic workflow you're selling?",
        a: "The opposite — it's the argument for using it right. The failure wasn't VDA, it was me handing it the wrong size of task. An agent's reliability is inverse to how much you give it at once: a bounded tweak inside the system it nails; a whole novel screen with a paragraph of context, it drifts. I'd started treating it like a junior I could brief once and walk away from. The lesson isn't 'agents don't work' — it's 'agents work at a specific scope, and my job is to keep them there.'",
      },
    ],
    resolution: "I shrank the unit of work. Instead of asking for a finished screen and then spending half an hour reconciling it, I give VDA small bounded passes inside the tokens and own the final changes myself. No task should need 20–30 minutes of supervision — if it does, it's too big a bite for the agent. Faster first draft from the agent; final judgment stays with me.",
    resolutionPills: [
      {
        after: "final judgment stays with me",
        q: "So where's the line — what does VDA do, and what do you keep?",
        a: "I split it by unit of work, not by feature. VDA gets the bounded first pass — generate the variant, lay it out on the tokens, take the mechanical first swing. I take the last pass, always: the taste call on whether it's actually right, plus anything on a surface new enough that the patterns don't exist yet. The trick that fixed the time problem was making its passes small enough that a drift is cheap to catch — a wrong tweak I fix in seconds, a wrong whole screen I'd have spent 20 minutes untangling.",
      },
    ],
  },
];

export const LEARNINGS = [
  {
    text: "Moving fast has a cost. We shipped fast for 18 months and the design mess had to be paid back. The cleanup was fast — but only because we'd already seen what worked in front of real users.",
    pills: [
      {
        after: "had to be paid back",
        q: "What's the right rhythm of cleanup vs shipping for a product still finding fit?",
        a: "Roughly every 3-4 quarters of feature-heavy shipping, you owe yourself a focused cleanup quarter. The exact ratio depends on team size and complexity, but a rule of thumb: when a rising share of engineering time was going to visual fixes and rework from last quarter's shipping, it's time to stop and reset. The danger is letting it keep climbing, at which point cleanup becomes a multi-quarter effort.",
      },
    ],
  },
  {
    text: "On dark themes, every visual effect that works alone will fail when combined with everything else. Glass, gradients, blur — test against three different things behind them before committing. Every time.",
    pills: [
      {
        after: "Glass, gradients, blur",
        q: "What other surface treatments fail in production beyond glass/blur?",
        a: "Gradients (look smooth in Figma, often banded on cheap displays). Drop shadows on dark surfaces (often invisible, sometimes loud depending on the backdrop). Thin lines (anti-aliasing creates inconsistencies). Translucent overlays in general. The pattern is anything that depends on what's behind it being predictable — which on a content-heavy product is never true. Test against three radically different backdrops or assume it'll fail.",
      },
    ],
  },
  {
    text: "An AI design assistant I trained over 22 sessions now builds new screens for me without me reviewing every pixel. Designers don't get replaced by AI — they get more done with it.",
    pills: [
      {
        after: "without me reviewing every pixel",
        q: "What's the actual limit of what an AI design assistant can do well?",
        a: "VDA does well on bounded extension — variants of established patterns, layout adjustments within tokens, color/spacing tweaks. It does poorly on novel surfaces (anything needing a new pattern), strategic tradeoffs (when and where the design actually breaks user trust), and anything requiring negotiation with engineering or product. The boundary is roughly: if I could explain the task to a brand-new junior designer using the design system docs alone, VDA can do it. If I'd need to explain context, history, or tradeoffs, VDA can't.",
      },
      {
        after: "they get more done with it",
        q: "An interviewer's read: 'AI design assistant' is résumé inflation for a few good Figma plugins. What did VDA actually do that a plugin can't?",
        a: "Fair challenge. A plugin executes a command; VDA carries my taste across sessions. It holds 250+ logged design decisions and 60+ aesthetic rules, so when I say 'build the variant for X,' it already knows my spacing defaults, which blue, how I handle empty states, and what I'd reject — without me re-specifying. The honest boundary: it's reliable only on bounded extension of patterns the system already has. Anything net-new I still design myself. So it's not 'AI designs the product' — it's 'AI removes the 80% of my work that was mechanical repetition of decisions I'd already made.'",
      },
    ],
  },
];

export const REFLECTION = {
  title: "What I'd do differently",
  body: "The 20+ category tabs work for users who know what they want. First-time visitors said it felt like 'walking into a store with no signs.' I'd show 6 categories on first visit and expand after the first chat. I'd also test moving the credit popup — currently shows on page load; showing it right after the first AI reply (when users have felt the magic) would probably convert better. Both on the next-quarter roadmap.",
};
