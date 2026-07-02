/* ─── RESEARCH METHODS, COMPETITORS, FINDINGS — wsup.ai case study ──── */

export const RESEARCH_METHODS = [
  {
    n: "01",
    name: "Daily Discord check-ins",
    desc: "Set up the wsup Discord early as our main listening post. Every morning I read every channel — bugs, frustrations, requests, workarounds. Patterns went to the PM. The research ran every day for 18 months.",
    descPills: [
      {
        after: "every day for 18 months",
        q: "How did you avoid burning out from daily Discord reading?",
        a: "I time-boxed it — 20 minutes in the morning, scanning rather than reading every line. I also wasn't trying to absorb everything; I was looking for repetition. A single complaint is noise. Three different users reporting the same frustration in a week is a pattern worth flagging. That mental filter kept the cognitive load manageable.",
        followups: [
          {
            q: "How did you decide what counted as 'a pattern' worth acting on?",
            a: "Loose rule: 3+ unique users mentioning the same friction within a 7-day window. For high-impact areas like billing or core chat failures, even 2 was enough — those have downstream rage cycles. For nice-to-haves, I'd wait for 5+ before flagging to the PM.",
          },
          {
            q: "Did you ever miss a pattern that mattered?",
            a: "Yes. The reference-image removal complaint was loud for two weeks before I escalated it — I underweighted it because the PM had already decided to ship the change. In hindsight, the noise was a sign the change had hit harder than we'd modeled. Now I escalate any post-change complaint cluster within 48 hours, regardless of decision context.",
          },
        ],
      },
    ],
    output: "Direct conversations drove specific shipping. Credit confusion in Discord → rebuilt the credit popup around daily streaks. Power users asking for deeper customization → shipped the next sprint.",
    outputPills: [
      {
        after: "rebuilt the credit popup around daily streaks",
        q: "How did you know streaks would work for the credit popup?",
        a: "Two signals. First, every successful retention product in the consumer space (Duolingo, Snapchat, language apps) uses streak mechanics — well-established UX pattern with known pull. Second, a competitor analysis check on Character.ai's daily reward popup showed users in their Discord praising it. So we had a pattern + segment-specific evidence. We compared two visual variants of the streak popup but didn't test streaks-vs-no-streaks because the answer was already clear from the literature.",
        followups: [
          {
            q: "Did the streak popup actually move the needle?",
            a: "Yes. We watched daily-claim behavior, and the clearer variant won. More importantly, credit-related support questions — 'where are my credits' — dropped off after we shipped it; the popup answered the question users had been asking.",
          },
        ],
      },
    ],
    image: "/cs/wsup-discord-general.png",
    imageCaption: "wsup.ai Discord — #general-chat. Real users discussing creator rewards, payouts, and credit attribution. The kind of conversation that drove the credit popup redesign.",
  },
  {
    n: "02",
    name: "Continuous competitor research",
    desc: "Monthly teardowns of every AI companion app with Ashish (PM) and Arastu (APM). Signed up, made characters, ran chats, joined their Discord servers, read their Reddit threads. The space moves fast — the research did too.",
    output: "Everyone built features. Nobody built a connected experience. That gap became wsup's pitch — not 'better chatbot' but 'one platform that holds chat, image gen, stories, and creators in one place.'",
    outputPills: [
      {
        after: "Everyone built features.",
        q: "What did each one do well?",
        a: "Each had a clear strength: Character.ai's scale and moderation, Replika's emotional depth in single-character relationships, Janitor's deep customization, Talkie's onboarding polish, Joyland's structured storytelling, SeaArt's image generation tools, CrushOn's relaxed content positioning, Dippy's mobile-first polish.",
        followups: [
          {
            q: "How did you decide which strengths to learn from vs which to ignore?",
            a: "We looked at strengths through wsup's positioning. Character.ai's scale is something we can't replicate at our size, but their moderation approach taught us what consumer-safe content controls look like. Replika's emotional depth told us users want continuity — which fed our long-term memory feature. We borrowed mechanisms, not features.",
          },
        ],
      },
      {
        after: "Nobody built a connected experience.",
        q: "Where was the gap?",
        a: "No one had built a connected experience. Each app had strong individual features but kept them siloed — chat didn't talk to creator tools, emotional depth was locked to one character, customization was buried in settings panels. The gap: nobody had made chat + creators + stories + image gen + community feel like one product. That's where wsup positioned itself.",
        followups: [
          {
            q: "How did you know it was a real gap and not just different positioning by each competitor?",
            a: "Discord behavior. Users were stitching together multiple apps to get one experience — chatting on Character.ai but generating images on SeaArt and posting them in Discord groups. That seam between products is what we kept seeing. People weren't asking us to copy a competitor; they were asking us to make all the things they were already doing fit in one place.",
          },
          {
            q: "How did wsup actually avoid the same trap of feature isolation?",
            a: "Three structural decisions: creator tools in the persistent sidebar (always visible across every page), credits that work everywhere (one currency for chat regenerations, image generation, gifts, stories — one inventory the user manages), and community ranking on every surface (Explore, Stories, Leaderboard). The architecture forces things to connect — you can't ship a new surface that ignores the credit system or the creator economy because they're always present.",
          },
        ],
      },
    ],
    doc: { href: "/wsup-competitive-analysis.pdf", label: "Competitive analysis (PDF)" },
  },
  {
    n: "03",
    name: "Ship → watch → adapt",
    desc: "We launched with chat alone. Stories, group chat, gifting, image gen, leaderboard, chat-LLM picker, deeper customization — each one added when behavior or Discord asks proved real demand. Ship, watch, adapt.",
    output: "The product was built piece by piece. Every new addition had a real reason behind it before design started.",
    outputPills: [
      {
        after: "Every new addition had a real reason behind it",
        q: "How did you measure 'real demand'?",
        a: "Three signals had to line up: (1) repeated explicit asks in Discord — 5+ unique users asking for the same thing within a month, (2) behavioral evidence in usage data — e.g. users posting characters in Discord meant they wanted a Stories surface in the app, (3) a competitor parallel — at least one well-funded competitor having shipped a similar feature, validating the segment wanted it. If 2 of 3 lined up, we'd start research. If all 3, we'd start design.",
        followups: [
          {
            q: "What about features that were obvious to your team but had no signal?",
            a: "We deferred them, almost always. The only exception was platform infrastructure — payment fixes, content safety. For features that were creator-facing or chat-facing, the rule was: if no signal, no ship. That's how we avoided shipping features without a real reason.",
          },
          {
            q: "Did you ever ship something that turned out to be wrong?",
            a: "The category dropdown was the clearest one — section 09 in this case study covers it in detail. We thought a clean dropdown was the right pattern; production data showed niche categories died. We rolled back to horizontal scroll within a week.",
          },
        ],
      },
    ],
  },
  {
    n: "04",
    name: "User personas (built recently)",
    desc: "Pulled a year of #general-chat messages (April 2025 → April 2026). Grouped the 78 active users by how they used wsup, not by age or location. Five behavioral patterns emerged. Each persona is composite, but every quote and behavior is real.",
    descPills: [
      {
        after: "not by age or location",
        q: "Why behavioral clustering instead of demographic personas?",
        a: "Demographic personas (e.g. '22, female, in college') tell you who's using the product. Behavioral personas ('invests deeply in characters, posts in Discord, notices model quality') tell you how they use it. For a roadmap question — 'should we ship this feature?' — you need to know how, not who. A 22-year-old casual user has nothing in common with a 22-year-old power creator; designing for the demographic would lump them together and serve neither well.",
        followups: [
          {
            q: "How do you know the behavioral patterns are stable and not just artifacts of a specific Discord moment?",
            a: "We cross-checked. The personas were built from a 12-month window of messages. I went back and checked whether each pattern showed up consistently across that window — behavior in April 2025 looked the same as March 2026. The patterns were stable enough to bet on. The one we're least sure about is the wall-hitter pattern — it depends on what's currently broken in the product, so it shifts with the bug landscape.",
          },
        ],
      },
      {
        after: "every quote and behavior is real",
        q: "Why scrape Discord now (April 2026) and not earlier?",
        a: "For most of the 18 months, the team was small enough that I had every Discord user in my head. As the user base grew past a few dozen active people, I lost that direct memory — and we needed a way to make decisions that wasn't 'Arpit's gut feel.' Personas formalize what was previously implicit. They're a tool for the team to use, not just for me. They also become onboarding material for new hires.",
        followups: [
          {
            q: "Could you have built personas earlier and saved time?",
            a: "Possibly, but the early personas would've been built on too little data and would've calcified the wrong patterns. The first 6 months of wsup were exploratory — users were figuring out what they wanted from the product. Building personas during that phase would've codified noise. Waiting until behavior had stabilized was the right call, even if it meant late.",
          },
        ],
      },
    ],
    output: "5 personas now drive what we build. When deciding on a new feature, the question is 'which of the five does this help?' If the answer is none of them, it's the wrong feature.",
  },
];

export const DISCORD_FINDINGS = [
  {
    n: "01",
    finding: "Better chat LLMs = better immersion = users stay",
    evidence: "Power users compare chat LLM tiers by reply quality. Better LLM = they stay. Forgetful or worse LLM = they post about it and disappear.",
    evidencePills: [
      {
        after: "they post about it and disappear",
        q: "How do you know power users are right about model quality and not just biased?",
        a: "We cross-checked their qualitative reports against how the models actually behaved on long conversations. The patterns matched. When power users said 'this model forgets,' we saw the same degraded long-context behavior. They weren't biased; they were sensitive instruments. Power users are often the canary for model issues that show up in usage data weeks later.",
      },
    ],
    decision: "Chat-LLM picker lives in the chat surface, not in settings. Each LLM shows its credit price upfront. Users always know which LLM they're talking to.",
    decisionPills: [
      {
        after: "Users always know which LLM they're talking to",
        q: "How do you know users stay because of model quality and not other factors?",
        a: "We can isolate it. Users who switched from a free LLM to a premium one tended to stay longer and return more often after the switch. Comparing the same user before and after removes most confounding variables — same character, same history, only the LLM changed. The pattern is consistent: better LLM in, longer engagement out.",
        followups: [
          {
            q: "Doesn't that just mean users who pay are more invested generally?",
            a: "We accounted for that by looking at users who'd been on free models for a long stretch before switching. They were already invested at that point — engagement was at a steady state. After the switch, engagement rose. So the lift comes from the model change, not from a self-selection effect of 'paying users care more.'",
          },
        ],
      },
    ],
  },
  {
    n: "02",
    finding: "Creators and community = a network, not a chatbot",
    evidence: "Users post characters in Discord for reactions. Stories tab gets steady use. People asked for a leaderboard on their own. wsup isn't 'a chatbot' to them — it's 'a place I make stuff and people see it.'",
    decision: "The sidebar makes Create Character + Create Story always visible. Explore shows characters ranked by the community. Stories tab has its own filters and TikTok-style browsing. The leaderboard shows the top creators.",
    decisionPills: [
      {
        after: "The leaderboard shows the top creators",
        q: "Was the network thesis the original product idea, or did you discover it?",
        a: "Discovered. The original thesis was a chatbot competitor — be a better Character.ai. Within 3 months of launch, Discord behavior — users posting characters and getting reactions — told us something different was emerging. We pivoted the roadmap to amplify that emergent behavior instead of fighting it. The creator-network thesis came from users, not from a strategy doc.",
        followups: [
          {
            q: "How do you stop the original chatbot users from feeling that the product moved away from them?",
            a: "By making chat better, not just adding around it. Every quarter, at least one of the shipped features has to improve the chat surface itself — better memory, faster responses, picking which chat LLM to use, deeper character customization. The creator economy is additive, not replacement. Chatbot users still get a better chatbot every quarter; creators just also get the surface they need.",
          },
        ],
      },
    ],
  },
  {
    n: "03",
    finding: "Stories tab works — fun beyond chat",
    evidence: "Stories tab keeps outperforming expectations. Users come back to scroll even when they're not in a chat.",
    decision: "Stories ships as a peer to Chat — its own filters, four formats (interactive / image / video / comic), TikTok-style browsing.",
    decisionPills: [
      {
        after: "TikTok-style browsing",
        q: "What if Stories is just early-stage novelty and engagement drops in 6 months?",
        a: "Real risk. We track time-on-Stories monthly. So far it's stable — not a launch spike that's decaying. If it had spiked then declined, we'd know it was novelty. The fact that it's holding suggests it's a real surface, not a fad. We'll re-evaluate at the 6-month mark with hard numbers; until then we treat it as load-bearing.",
        followups: [
          {
            q: "What's your fallback if Stories engagement does drop sharply?",
            a: "Demote it from a peer surface to a sub-tab under Chat. The investment isn't sunk — most of the work is on the post format and creation flow, which would survive a structural demotion. We'd lose a few weeks reverting the navigation hierarchy and the entry point in onboarding. Cheap rollback. The peer-status is a bet, not a permanent commitment.",
          },
        ],
      },
    ],
  },
];

export const COMPETITORS = [
  {
    name: "Character.ai",
    image: "/cs/competitors/character-ai.png",
    strength: "Best at long conversations. The 'New chat from here' feature lets you branch off any message — no other product has it.",
    gap: "Hard to discover characters. No tags, no filters, and guests can't browse without signing up.",
    gapPills: [
      {
        after: "guests can't browse without signing up",
        q: "If Character.ai is the largest, why isn't your strategy 'do what they do but better'?",
        a: "Because their scale is also their constraint. Character.ai has to optimize for the median user — anyone outside the modal user gets generic experiences. wsup at smaller scale can specialize for users who don't fit that median. Creator economy, niche character types, less-restricted creative range — these are user segments Character.ai can't serve at their scale without disrupting their median user. We're not trying to be a smaller Character.ai; we're trying to be the platform Character.ai's edge users would prefer.",
        followups: [
          {
            q: "Doesn't that strategy cap your growth — you're targeting niches, not the mainstream?",
            a: "It caps the immediate addressable market, yes. But the bet is that the niches we serve well today (creators, less-restricted users, multimodal users) become a more significant share of the AI companion market as it matures. Character.ai's moderation will tighten as they scale; their content edge will erode. The users they push out land somewhere — and that 'somewhere' is what we're building. The growth isn't from outcompeting Character.ai head-on; it's from absorbing the segments they shed.",
          },
        ],
      },
    ],
  },
  {
    name: "PolyBuzz",
    image: "/cs/competitors/polybuzz.png",
    strength: "Easiest to scan. Every card shows 4–5 trait pills. Persona toggle sits right in the composer — one tap to switch.",
    gap: "More filtering isn't better discovery. 16 niche categories overwhelm new users. The composer is text-only — no voice, no image, no AI-assist.",
  },
  {
    name: "Janitor",
    image: "/cs/competitors/janitor-ai.png",
    strength: "Best filtering of the set. Two-axis discovery (relationship × time) — Trending / Hidden Gems / Favorites combined with 24h / Weekly. AI-assist built into the composer.",
    gap: "148 pages of pagination is a relic. No character context shown during chat. Overwhelming for first-time visitors.",
  },
  {
    name: "Kindroid",
    image: "/cs/competitors/kindroid.png",
    strength: "Most premium feel of the set. Cinematic cards. Voice-first composer with the mic as the biggest button. 'New Scenario' lives inside chat.",
    gap: "No public character library — every user starts from zero with no social proof. Provocative titles on every card lose impact when they're the default.",
  },
];

export const ALSO_TRACKED = [
  { name: "Replika", image: "/cs/competitors/replika.png", takeaway: "Deep 1:1 emotional bonds. No public library, no creator sharing — strong for one-on-one, weak for network growth." },
  { name: "Talkie", image: "/cs/competitors/talkie.png", takeaway: "Strong on model quality (MiniMax). A pronoun/age/relationship signup gate kills first-visit browsing." },
  { name: "Joyland", image: "/cs/competitors/joyland.png", takeaway: "Adult-fantasy positioning narrows the audience. Aggressive signup modal kills cold browse." },
  { name: "SeaArt", image: "/cs/competitors/seaart.png", takeaway: "Image gen is the primary product. Character chat is bolted on — feels transactional, not relational." },
  { name: "Dippy", image: "/cs/competitors/dippy.png", takeaway: "Mobile-first Character.AI clone. Heaviest ad load of the set." },
];

export const WSUP_MOATS = [
  { name: "Persona system", what: "First-class persona toggle on every chat — no competitor surfaces it this prominently." },
  { name: "Group chat", what: "Real multi-character chat as a primary feature, not a feature buried in settings." },
  { name: "Replies that read like fiction", what: "AI replies are formatted with italic actions, plain dialogue, and inner-thought asides — reads like a novel, not a chatbot." },
  { name: "Character profile sidebar", what: "Always-on character context while chatting, on every platform." },
  { name: "Gamification depth", what: "Credits + daily streaks + leaderboard stacked as one system. Most competitors have one of those; we have all three." },
  { name: "SPICY toggle", what: "Single-tap content-range switch on Explore. No competitor has the same one-control trade-off." },
  { name: "Per-message image generation", what: "Generate images from any chat message inline. Most competitors require switching to a separate tool." },
];
