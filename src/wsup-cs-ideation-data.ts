/* ─── IDEATION RECONSTRUCTION + FEATURE ORIGIN MAP — wsup.ai case study ──── */

/* Each board reconstructs the design choices considered for a core part of the
   product, the path chosen, and why the others were rejected. We didn't sketch
   every alternative on paper — but every shipped decision had a clear rejected
   path. Reconstructing them here is what separates a designer's case study
   from a feature list. */

export const IDEATION_BOARDS = [
  {
    n: "01",
    surface: "Browsing characters (Explore page)",
    problem: "20+ categories. Hundreds of characters per category. Power users know what they want; casuals don't. How do you let people browse all of it without overwhelming first-time visitors?",
    chosen: "Sideways-scrolling category tabs + character cards showing rank and chat count as the main info. SPICY toggle for filtering content.",
    chosenWhy: "Every category stays visible without eating vertical space. Cards lead with community signals — '#1279 Rank · 2.0K Chats' — which work faster than staff picks. Confirmed live: niche categories like Fantasy and Sci-Fi held their usage.",
    chosenWhyPills: [
      {
        after: "niche categories like Fantasy and Sci-Fi keep their usage instead of dropping off",
        q: "How did you prove this in production?",
        a: "We had category-level usage data before and after the layout change. With the dropdown, the top 3 categories captured ~85% of clicks; niche categories hovered near zero. Switched to horizontal scroll — within a week, niche category usage rose to a baseline proportional to character availability. The data was unambiguous; we kept horizontal scroll.",
        followups: [
          {
            q: "Why test in production rather than prototype?",
            a: "Prototype testing on a content-discovery interface gives misleading data. Without real characters, real ranking, real social signal, users behave differently — they click whatever's most prominent regardless of underlying quality. The production environment is the only place where 20+ categories with real content can be honestly tested. We accepted the short-term hit during the test in exchange for high-fidelity decision data.",
          },
        ],
      },
    ],
    alternatives: [
      {
        path: "Category dropdown menu",
        why: "The 'clean' design choice — hides 20 categories behind one menu.",
        rejected: "Tested with users. Niche categories collapsed to near-zero usage. Users only opened the top 3 the dropdown showed. Options people have to click to find are options nobody picks.",
      },
    ],
  },
  {
    n: "02",
    surface: "Stories",
    problem: "Users were posting their AI content in Discord — characters, funny outputs, comic strips. Discord was acting like a stories feed they didn't know they wanted. Should we build a stories tab? How deep?",
    chosen: "Stories as a tab equal to Chat. Multiple formats (interactive 'TapTale,' Image, Video, Comic). Sorting filters. TikTok-style browsing for scrolling through.",
    chosenWhy: "Discord behavior was the signal — users wanted a place to share what they made. Multiple formats because creators don't all express the same way. TikTok-style browse for low-commitment scrolling. Stories ships as a peer to Chat, not a sub-page.",
    chosenWhyPills: [
      {
        after: "The Stories tab is now a peer to Chat, not a sub-page",
        q: "Why peer to Chat instead of nested under it?",
        a: "Stories serves a fundamentally different use case from chat — passive scrolling vs active conversation. Nesting it under Chat would've hidden it from users who weren't already in chat mode (which is the exact moment they're least likely to want to passively consume). Making it a peer surface meant users could enter wsup specifically for stories — and many do. The peer placement also signals to creators that their stories matter independently of any one chat session, which lifts creator engagement.",
        followups: [
          {
            q: "How did you measure that Stories deserved peer status before shipping it?",
            a: "We didn't have direct data — Stories didn't exist yet. The signal was that Discord was acting as a proxy stories feed (users posting characters, comics, screenshots). The bet was that giving Stories a real surface in-app would capture and amplify that behavior. We hedged by making it visually identical to Chat in the nav, so we could downgrade it to a sub-tab if engagement was weak. It wasn't; engagement justified the peer position.",
          },
        ],
      },
    ],
    alternatives: [
      {
        path: "Text-only stories (a Twitter for AI characters)",
        why: "Simplest to build. Lowest creation effort.",
        rejected: "Limits the most expressive creators. The whole point of wsup is multiple formats — images, comics, interactive. Text-only makes wsup look like a forum.",
      },
      {
        path: "Stories nested under Chat as a sub-tab",
        why: "Treat stories as 'Chat history made public' — same place, different mode.",
        rejected: "Hides stories from users who aren't chatting. Kills discovery for new visitors. Users wanted a destination, not a sub-mode.",
        rejectedPills: [
          {
            after: "users wanted a destination, not a sub-mode",
            q: "Why is hiding Stories from non-chat users such a big deal?",
            a: "Because Stories acts as a re-engagement surface for users who haven't opened a chat in a while. If Stories is nested under Chat, users have to enter chat mode to find it — defeating its purpose. The whole point of Stories is to give a low-commitment way to come back to wsup; locking it behind active chat behavior would prevent the use case it was designed for. Stories needed to be a standalone destination for the same reason TikTok isn't nested inside YouTube.",
          },
        ],
      },
    ],
  },
  {
    n: "03",
    surface: "How wsup makes money",
    problem: "Premium AI actions cost real money — image gen, regenerating chat replies more than 3 times, gifts, premium chat LLMs. Users covering those costs keeps wsup free to start. The problem: make money without breaking chat or making users feel punished.",
    chosen: "Credits charged per premium action + 50 free daily + daily streak rewards + banner and leaderboard ads on visitors only. Ads removed when you sign up.",
    chosenWhy: "Per-action charging makes the trade clear. Streaks build a daily habit and teach features. Ads on guests turn signup into a benefit ('no more ads') instead of a wall. Two revenue paths, designed together.",
    chosenWhyPills: [
      {
        after: "Charging per action makes the trade clear — users see exactly what they're paying for",
        q: "Why per-action credits over flat subscription tiers?",
        a: "Two reasons. First, AI compute costs scale with action volume — a heavy creator costs 100x what a casual user costs. Flat tiers would either subsidize the whales (which kills margins) or price out the casual user (kills acquisition). Per-action means cost scales with usage. Second, per-action is honest — users see what each thing costs and choose. Subscriptions hide that, which feels good in marketing but creates resentment when users realize they're paying for things they don't use.",
        followups: [
          {
            q: "Doesn't per-action create decision fatigue — every action becomes a financial choice?",
            a: "Yes, which is why we made the first 50 daily actions free. Casual users never hit the wall. Heavy users hit it but understand it because they're aware of how much AI work they're doing. Decision fatigue is real but bounded to the 5% of users actively spending — and those users self-identify as creators who want control over their spend. Flat subscriptions would solve decision fatigue but break the economics. The trade was worth it.",
          },
          {
            q: "How did you keep credits from feeling punitive when users hit the wall?",
            a: "Three things. (1) The wall always shows the action's cost upfront, never as a surprise mid-action. (2) Streak rewards consistently top up the user's balance, so casual users keep getting topped up. (3) The wall is a popup, not a redirect — users stay in context and can keep using free features. The goal was to make the credit moment feel like 'do you want to do this premium thing?' not 'pay or leave.'",
          },
        ],
      },
    ],
    alternatives: [
      {
        path: "Flat subscription tiers (Free / Pro / Premium)",
        why: "Familiar SaaS model. Predictable revenue.",
        rejected: "Doesn't fit how AI costs work. A heavy creator burns 100x more compute than a casual user. Flat tiers either lose money on heavy users or price out casual ones. Credits scale with what's actually used.",
      },
      {
        path: "All-free + ads everywhere",
        why: "Lowest barrier to entry. Largest possible audience.",
        rejected: "Banner ads can't cover AI compute at consumer-app rates. The math doesn't work. And ads inside chat would destroy the feeling that keeps users.",
      },
      {
        path: "Pay-per-character",
        why: "Charge creators a small fee to publish; revenue scales with how many creators there are.",
        rejected: "Punishes the creators who make the platform grow. The worldbuilder segment (20% of users) would shrink to 5%. Kills the community network we'd been building.",
      },
    ],
  },
  {
    n: "04",
    surface: "Signup",
    problem: "wsup's edge is 'no signup wall.' But Explore needs gender and age to make the first recommendation non-random. How do you collect the minimum without breaking the promise?",
    chosen: "Two pre-filled fields (gender + age) on one screen. One Continue button. Under 30 seconds to first AI response.",
    chosenWhy: "Every field is a measurable drop in users. Pre-filling Male + 21–23 means tap-to-continue for most. Two fields is the minimum Explore needs to function.",
    chosenWhyPills: [
      {
        after: "Two fields is the minimum that lets Explore work",
        q: "How did you arrive at exactly 2 fields and not 1 or 3?",
        a: "Worked backward from the recommendation engine. Explore needed gender preference AND an age band to make a non-random first recommendation. One field (gender alone) wasn't enough — content appropriate for an 18-year-old differs sharply from a 30-year-old. Two was the minimum the recommendation could function on. Three would've been one too many — drop-off data from competitors and our own early testing showed engagement collapses at the third field.",
        followups: [
          {
            q: "Did you test 0 fields vs 2 fields?",
            a: "Yes, in early iterations we tried straight-to-Explore with no signup. The result was a high 'this isn't for me' exit rate — users saw a random first character and bounced within seconds. Two fields turned that random first impression into a non-random one, which was the difference between users staying or leaving. So 0 fields cost us more in lost users than 2 fields cost us in onboarding friction.",
          },
          {
            q: "Why pre-fill defaults instead of leaving fields blank?",
            a: "Empty fields make users think and choose, which adds time and decision load. Pre-filled defaults mean tap-to-continue if the defaults are close enough — and they usually are for the modal user. Defaults are based on the modal demographic of our user base; users who don't match can change them in 2 taps. The alternative — empty fields — would slow down the 80% to better serve the 20%, which is backwards.",
          },
        ],
      },
    ],
    alternatives: [
      {
        path: "Full preferences quiz (interests, NSFW, language, etc.)",
        why: "Better personalization on the first visit.",
        rejected: "Every quiz screen drops 30%+ of users. Better recommendations on screen 1 are worthless if 70% never reach screen 2.",
      },
      {
        path: "Zero signup — straight to Explore",
        why: "Maximum 'no friction' purity.",
        rejected: "Without gender and age, the first recommendation is essentially random. Random recs in the first 10 seconds = 'this isn't for me' moment. Two pre-filled fields is the minimum.",
      },
      {
        path: "Email-required signup (the standard SaaS pattern)",
        why: "Capture user contact info. Build a mailing list.",
        rejected: "Gives up wsup's only real edge over Character.ai. The pitch is 'chat without signing up.' Email-required is the exact wall the rest of the product was built to avoid.",
        rejectedPills: [
          {
            after: "Email-required signup is the exact wall the rest of the product was designed to avoid",
            q: "Email-required signup is industry standard. Why is it not even an option?",
            a: "Because email-required signup is exactly what every competitor has, and 'we have email-required signup' isn't a differentiator — it's a wall users see at every other product. wsup's positioning is 'chat without signing up,' which is concrete and remarkable. Email-required would erase that. Yes, it would help with marketing list-building and re-engagement emails — those are real losses. But the loss of the positioning is bigger than the marketing gain. We chose positioning over CRM ammunition.",
            followups: [
              {
                q: "How do you re-engage users without their email?",
                a: "Two ways. (1) Push notifications for mobile users (which need permission, but most users grant it). (2) The Discord community itself is a re-engagement channel — users who care come back to read it. We don't have email re-engagement and we accept that loss. The growth has happened despite it; the differentiator paid off in acquisition more than the loss cost us in retention.",
              },
            ],
          },
        ],
      },
    ],
  },
];

/* Where every shipped feature came from — each one has a research signal, a
   competitor parallel, or a learning from real usage behind it. No features
   shipped without a real reason. */
export const FEATURE_MAP = [
  {
    domain: "Character creation",
    features: "Character builder · deeper character customization · custom voices · long-term memory",
    origin: "Discord asks for 'more advanced features to tune characters' (from our most invested creators)",
  },
  {
    domain: "Chat depth",
    features: "Memories · image gallery · group chat · pick chat LLM · edit/regenerate (3 free → costs credits) · text-to-image in chat · send gifts",
    origin: "Discord asks (better chat LLMs, more features) + competitor parity (Character.ai memory, Replika gifts)",
  },
  {
    domain: "Stories",
    features: "Multiple post formats (TapTale interactive / Image / Video / Comic) · sorting filters · TikTok-style browsing",
    origin: "Discord behavior — users were already posting their characters there. Plus the 'stories tab works' finding from real usage",
  },
  {
    domain: "Discovery",
    features: "20+ category tabs · ranked character cards · explore filters · leaderboard · SPICY toggle",
    origin: "Competitor research (creators + community = a network, not a chatbot) + Discord asks for niche discovery",
  },
  {
    domain: "AI image suite",
    features: "Picture This text-to-image · gallery · regenerate modal · pick which image model · planned: higgsfield + seaart.ai integration",
    origin: "Competitor parity (most AI companion apps now offer image gen) + creators want depth",
  },
  {
    domain: "Trust & safety",
    features: "Report button · content filter that improves from user downvotes",
    origin: "Real usage — community downvotes on filter mistakes now feed back into the chat LLM",
  },
  {
    domain: "Money",
    features: "Credits charged per action · 50 free daily · streak rewards · two ways of making money (ads on visitors, credits on signed-up users)",
    origin: "Business sustainability — AI compute costs real money. Designed so wsup stays alive without breaking user trust.",
  },
];
