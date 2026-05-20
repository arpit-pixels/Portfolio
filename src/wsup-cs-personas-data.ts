/* ─── 5 BEHAVIORAL PERSONAS — wsup.ai case study ──── */
/* Synthesized from 1 year of #general-chat: 1,812 messages, 78 active authors */

export const PERSONAS = [
  {
    n: "01",
    name: "Yara",
    archetype: "The Worldbuilder",
    share: "~20%",
    age: "18–24",
    location: "Southeast Asia",
    usage: "Daily",
    quote: "I can't make good characters anymore. Please tell me if reference images ever come back.",
    behavior: "Builds multi-character backstories. Tracks chat LLM quality obsessively.",
    designsFor: "Treat character images as identity, not cosmetics. Never remove a feature without an explanation users can find.",
    designsForPills: [
      {
        after: "Never remove a feature without an explanation users can find",
        q: "How do you balance Yara's deep investment with broader product needs?",
        a: "The tension is real — Yara wants depth and stability; the broader user base wants new features and breadth. We resolve it through additive design: Yara's protected surfaces (chat, character builder, memory) get slow careful changes with advance notice; new surfaces (Stories, image gen) ship at normal pace because they're optional for her. Yara never feels disturbed because her core surfaces are stable; she gets new things when she opts into them. The cost is engineering complexity (more conditional UI). It's worth it.",
        followups: [
          {
            q: "What if Yara doesn't opt into the new surfaces — does the product evolve away from her over time?",
            a: "It can, but the protection is symmetrical. Yara never has to use Stories or image gen, but she also doesn't have to opt out of them — they don't intrude on her chat surface. The product's footprint grows in directions Yara doesn't follow, but her territory stays intact. Long-term, if Yara's behavior diverges enough from the median user, we'd consider whether her segment needs its own variant of the product. We're not there yet.",
          },
        ],
      },
    ],
  },
  {
    n: "02",
    name: "Jordan",
    archetype: "The Community Regular",
    share: "~22%",
    age: "15–20",
    location: "Mixed",
    usage: "2–4 short sessions/wk",
    quote: "Honestly I'm just here because I'm bored. Chat, anyone alive?",
    behavior: "Posts check-ins more than content. Screenshots funny AI moments. Won't read tutorials.",
    designsFor: "Make 'random / discover' frictionless. Design for delight moments. Their ambient presence keeps the community alive for everyone else.",
    designsForPills: [
      {
        after: "Their ambient presence keeps the community alive for everyone else",
        q: "If Jordan won't engage deeply, why design for him at all?",
        a: "Jordan's value isn't engagement depth — it's ambient presence. The Discord and Stories tab need an audience to feel alive. If only worldbuilders and system-thinkers populated wsup, the community would feel empty for new users (who skew Jordan-type). Jordan provides the social proof that makes the platform feel populated. Designing for him isn't about getting deep engagement; it's about making sure he doesn't bounce in the first 30 seconds, so his presence registers as activity for everyone else.",
      },
    ],
  },
  {
    n: "03",
    name: "Sam",
    archetype: "The Wall-Hitter",
    share: "~12%",
    age: "Ambiguous",
    location: "Mixed",
    usage: "Stalled on a bug",
    quote: "I've said this five times. Why is it still broken?",
    behavior: "One issue, repeated escalation. Tags devs directly. Waits for a fix, doesn't try workarounds.",
    designsFor: "Show in-app status for known bugs. Auto-acknowledge support reports. Never reply 'have you tried restarting' to a user who's reported the same issue multiple times.",
    designsForPills: [
      {
        after: "Never reply 'have you tried restarting' to a user who's reported the same issue multiple times",
        q: "How do you actually design for Sam if Sam is mostly leaving?",
        a: "We don't try to retain Sam directly with feature design. Instead, we design the support surfaces (status indicators, ticket confirmations, a public roadmap) that prevent Sam's frustration loop — so the next user who'd otherwise become Sam stops at a different exit point. It's preventive, not retentive. Once a user is in Sam mode, the design has already failed; the win is preventing the entrance to that mode.",
        followups: [
          {
            q: "Doesn't that mean Sam herself is sacrificed for a future Sam who hasn't churned yet?",
            a: "Not entirely. We do reach out to Sam directly when we identify her — through Discord support response and apology messaging. But the structural fix benefits the next 100 Sams more than re-engaging the one who's already burnt. Triage at scale: invest in the systemic fix that prevents the pattern, while doing best-effort recovery on the individual already in the pattern. The recovery rate on actively-frustrated users is low (~15%); the prevention rate on users who would've become frustrated is much higher.",
          },
        ],
      },
    ],
  },
  {
    n: "04",
    name: "Callum",
    archetype: "The System Thinker",
    share: "~8%",
    age: "28–40",
    location: "UK / Australia",
    usage: "Deliberate, several times a week",
    quote: "At a guess, it's interpreting 'mage' as minor age. Same tech as the UK safe mode rollout.",
    behavior: "Forms hypotheses before posting. Files Discord reports that read like bug tickets.",
    designsFor: "Release filter changelogs — Callum reads them and calibrates. Build a structured bug-report pathway. Acknowledge his hypothesis even briefly.",
    designsForPills: [
      {
        after: "Acknowledge his hypothesis even briefly",
        q: "Callum is 8% of users. Why design specifically for him?",
        a: "Because his contributions outweigh his share. Callum files structured bug reports with hypotheses — the kind of feedback that's worth 10x a typical user complaint. He notices issues other users miss (geographic flag patterns, model degradation), often weeks before they're widespread. Designing his preferred channels (technical bug pathway, filter changelogs) isn't about retaining him directly — it's about making sure his signal-rich feedback reaches the team in usable form. We get more product insight per Callum-hour than per typical user-hour.",
        followups: [
          {
            q: "Aren't you just designing for the loudest user, not the most representative one?",
            a: "Callum isn't loud — he's structured. A loud user complains; Callum diagnoses. We're not optimizing for volume of feedback; we're optimizing for signal quality. The 8% Callum users aren't speaking for the median user (we have other research methods for that). They're functioning as our highest-resolution debug instruments. Designing for them is investment in our own diagnostic capability.",
          },
        ],
      },
    ],
  },
  {
    n: "05",
    name: "Maya",
    archetype: "The Community Anchor",
    share: "~6%",
    age: "22–32",
    location: "Mixed",
    usage: "Daily, Discord more than the app",
    quote: "Go to ask-the-devs and tag furiousming with the character name. They actually look at those.",
    behavior: "Informal first-tier support. Catches newcomers, forwards real bug reports to staff.",
    designsFor: "Brief her on breaking changes 24h before they ship. Build a pinned FAQ she can update. Never let her forwarded reports go unacknowledged.",
    designsForPills: [
      {
        after: "Never let her forwarded reports go unacknowledged",
        q: "What if Maya leaves? Isn't she a single point of failure for community support?",
        a: "Yes, and we're aware of it. The mitigation is structural: invest in tools (FAQ, status page, pinned answers) that absorb Maya's load so the role doesn't depend on a specific person. Several Mayas exist at any time — some are staff, some are power users. If one disappears, others fill in. The risk is concentrated when only one person fills the role; we monitor that and proactively recruit/recognize multiple Mayas to keep the bench deep.",
        followups: [
          {
            q: "How do you recognize Mayas without making it feel transactional?",
            a: "Subtly. Direct messages thanking them for specific help. Inviting them to early access on new features. Occasional public shoutouts in announcements. No formal 'community manager' status, no badges, no compensation — that would change the relationship. Mayas help because they care; making it formal turns it into work and dilutes the genuine community signal. The recognition is ambient.",
          },
        ],
      },
    ],
  },
];
