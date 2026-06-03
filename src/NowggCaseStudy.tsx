import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProcessFlow, { type FlowData } from "./ProcessFlow";
import { InterviewModeProvider, Pill } from "./InterviewMode";

const NG_FLOW: FlowData = {
  stages: [
    { icon: "search", label: "Audit", sub: "competitors + 3 intents" },
    { icon: "target", label: "Define", sub: "1,000+ games, findable" },
    { icon: "grid", label: "Design", sub: "three-layer discovery" },
    { icon: "bolt", label: "Build", sub: "one-click play, lean page" },
    { icon: "loop", label: "Iterate", sub: "browsing beat search" },
  ],
};

function useR(d = 0) {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = r.current; if (!el) return;
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add("vis"), d); ob.unobserve(el); }
    }, { threshold: 0 });
    ob.observe(el);
    return () => ob.disconnect();
  }, [d]);
  return r;
}

const NAV = () => (
  <nav>
    <Link to="/" className="nlogo">← Back</Link>
    <span className="nlogo" style={{ gap: 6 }}>now.gg</span>
    <div className="nav-actions">
      <a href="mailto:arpit.uxdesign@gmail.com" className="nav-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Email</a>
      <a href="https://www.linkedin.com/in/arpit-yadav-1185ba135/" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
      <a href="https://github.com/arpityadav-bst/wsup-screen-library" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
      <a href="/arpit-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg> Resume</a>
      <a href="mailto:arpit.uxdesign@gmail.com" className="ncta">Get in touch →</a>
    </div>
  </nav>
);

const FOOTER = () => (
  <footer>
    <div className="fl">Arpit Yadav — AI-Native Designer</div>
    <div className="fr">
      <a href="mailto:arpit.uxdesign@gmail.com" className="foot-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Email</a>
      <a href="https://www.linkedin.com/in/arpit-yadav-1185ba135/" target="_blank" rel="noopener noreferrer" className="foot-link">LinkedIn</a>
      <a href="/arpit-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="foot-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg> Resume</a>
      <span>© 2026</span>
    </div>
  </footer>
);

export default function NowggCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const heroR = useR(), probR = useR(), mktR = useR(), resR = useR(), screenR = useR(), processR = useR(), decR = useR(), resultR = useR();

  return (
    <InterviewModeProvider>
    <div className="cs">
      <NAV />

      <header className="cs-hero" ref={heroR}>
        <div className="cs-badge abb">CASE STUDY · PRODUCT DESIGN</div>
        <h1 className="cs-h1">Cloud gaming UX for<br /><em>100M+</em> users</h1>
        <p className="cs-sub">now.gg is a cloud gaming platform where users play mobile games directly in the browser — no downloads, no installs. I led the UX across discovery, game pages, and the in-browser play experience.</p>
        <div className="cs-role-row">
          <div className="cs-role-item"><span className="cs-role-label">My role</span>Lead Product Designer — game discovery UX, game detail pages, cloud player interface, category system</div>
          <div className="cs-role-item"><span className="cs-role-label">Product</span><a href="https://now.gg" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue)" }}>now.gg</a> — cloud gaming platform by now.gg Inc. (parent of BlueStacks)</div>
          <div className="cs-role-item"><span className="cs-role-label">Timeline</span>2019–2024 · Led UX across multiple product iterations</div>
          <div className="cs-role-item"><span className="cs-role-label">Scale</span>100M+ users · ~10M monthly visits · 1,000+ games · Multi-device (PC, Mac, Chromebook, tablet)</div>
        </div>
        <div className="cs-meta-row">
          <div className="cs-meta"><span className="cs-mn">100M+</span><span className="cs-ml">Cloud gaming users</span><span className="cs-src">via PR Newswire · Mar 2024</span></div>
          <div className="cs-meta"><span className="cs-mn">~10M</span><span className="cs-ml">Monthly visits</span><span className="cs-src">via company data</span></div>
          <div className="cs-meta"><span className="cs-mn">1,000+</span><span className="cs-ml">Games in library</span><span className="cs-src">via now.gg catalog</span></div>
          <div className="cs-meta"><span className="cs-mn">0 installs</span><span className="cs-ml">Play instantly in browser</span></div>
        </div>
      </header>

      <div className="cs-screenshots-single" style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 20px' }}>
        <img src="/cs/nowgg-home.png" alt="now.gg homepage" className="cs-screenshot" />
        <span className="cs-screen-label" style={{ textAlign: 'center', display: 'block', marginTop: 8 }}>now.gg — instant play mobile games in the browser</span>
      </div>

      {/* THE CHALLENGE — full-bleed dark band */}
      <section className="wsup-challenge-block">
        <div className="wsup-challenge-inner">
          <span className="wsup-challenge-label">THE CHALLENGE</span>
          <p className="wsup-challenge-body">Make 1,000+ instantly-playable cloud games feel <em>discoverable</em> — one interface serving casual mobile players, hardcore PC gamers, and kids on tablets, each arriving with a different idea of what to play next.</p>
        </div>
      </section>

      <ProcessFlow data={NG_FLOW} />

      <section className="cs-sec" ref={probR}>
        <p className="cs-p"><strong>Cloud gaming removes the install barrier — and replaces it with a new one.</strong> When every game in your library starts in one click, "what do I play" becomes the hard part. With 1,000+ titles available instantly, the problem isn't technical — it's helping people choose.</p>
        <p className="cs-p">And the platform serves very different people — casual players on Chromebooks, hardcore PC gamers, kids on tablets. One interface, many contexts.</p>

        <h3 className="wsup-also-h">Who actually used now.gg</h3>
        <div className="wsup-moats">
          <div className="wsup-moat"><div className="wsup-moat-n">01</div><div className="wsup-moat-name">Casual gamers on weak devices</div><p className="wsup-moat-what">Chromebook students, older phones, low-spec laptops. Cloud let them play AAA mobile games their hardware couldn't run.</p></div>
          <div className="wsup-moat"><div className="wsup-moat-n">02</div><div className="wsup-moat-name">"Try before install" gamers</div><p className="wsup-moat-what">Wanted to sample a game before committing 1–2GB of phone storage. The fastest conversion segment to repeat visits.</p></div>
          <div className="wsup-moat"><div className="wsup-moat-n">03</div><div className="wsup-moat-name">Game-intent searchers</div><p className="wsup-moat-what">Found now.gg via a specific game's "play online" search. Cared about that one title — discovery had to extend interest beyond it.</p></div>
          <div className="wsup-moat"><div className="wsup-moat-n">04</div><div className="wsup-moat-name">Publishers + game studios</div><p className="wsup-moat-what">Used the platform as a zero-friction demo channel for their own titles. Drove curated placements and exclusive launches.</p></div>
        </div>
      </section>

      {/* MARKET CONTEXT */}
      <section className="cs-sec" ref={mktR} style={{ paddingTop: 32, paddingBottom: 32 }}>
        <div className="cs-sec-head"><span className="stag">MARKET CONTEXT</span></div>
        <h2 className="cs-h2" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>Where now.gg <em>sits</em></h2>
        <p className="cs-p" style={{ marginBottom: 20 }}>Most "cloud gaming" products of the era targeted PC and console games — AAA titles streamed from data centers. now.gg was different: cloud Android games, instantly playable in any browser, no install or login. Its real competitors were narrower than "cloud gaming" makes it sound.</p>
        <div className="wsup-also-tracked">
          <div className="wsup-also-card">
            <div className="wsup-also-body">
              <div className="wsup-also-name">NVIDIA GeForce NOW</div>
              <p className="wsup-also-takeaway">Cloud PC gaming for AAA titles via Steam/Epic libraries. Adjacent category — performance-led, assumed users brought their own game library.</p>
            </div>
          </div>
          <div className="wsup-also-card">
            <div className="wsup-also-body">
              <div className="wsup-also-name">Xbox Cloud Gaming</div>
              <p className="wsup-also-takeaway">Console games via cloud, gated behind Game Pass. AAA-focused, Microsoft ecosystem. Strong on premium content, weak on instant casual play.</p>
            </div>
          </div>
          <div className="wsup-also-card">
            <div className="wsup-also-body">
              <div className="wsup-also-name">Stadia (Google)</div>
              <p className="wsup-also-takeaway">High-profile cloud PC gaming launch; shut down January 2023. Failed on discovery and library breadth — exactly the problems we were designing around.<Pill
                q="You cite Stadia shutting down on discovery. now.gg's discovery is three curated rows — what makes that scale to 1,000+ games instead of failing the same way?"
                a="Stadia's problem wasn't row count — it was that nothing told you what was worth your time, a thin catalog shown flat. Three rows is just the top of a funnel that also has categories, search, and a related-games loop on every detail page, so the 1,000th game is reachable by genre or by 'people who played X.' The rows give a cold visitor a confident first move; the layers beneath carry the long tail. The failure mode I designed against is the flat grid where every title has equal weight — the 'all games' infinite scroll I rejected."
              /></p>
            </div>
          </div>
          <div className="wsup-also-card">
            <div className="wsup-also-body">
              <div className="wsup-also-name">BlueStacks X (sister product)</div>
              <p className="wsup-also-takeaway">Cloud Android via desktop app + browser. Same parent company. Shared cloud infra and player UX — the products converged where the mental models overlapped.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — RESEARCH */}
      <section className="cs-sec" ref={resR}>
        <div className="cs-sec-head"><span className="stag">01 / APPROACH</span></div>
        <h2 className="cs-h2">Discovery built for<br /><em>instant</em> play</h2>
        <p className="cs-p"><strong>Visitors arrive wanting one of three things.</strong> Some want what's popular right now. Some want to browse by genre. Some know the exact game. The home page has to serve all three without pushing anyone down the wrong path.<Pill
            q="Kids on tablets, hardcore PC gamers, game-intent searchers — one homepage. Isn't that how you get a page that serves no one well? Did a segment lose out?"
            a="I layered by intent instead of averaging across audiences. The same page reads differently depending on what you came for: trending avatars up top for the 'show me something' majority, the card grid for browsers, categories and search for the intent-driven minority. Nobody gets a watered-down compromise — each segment has an entry point and ignores the rest. The one I consciously under-served on the homepage is the spec-driven power user; they're served better on the game page, and forcing their needs onto the front door would've made it feel like a catalog."
          /></p>
        <div className="cs-steps">
          <div className="cs-step"><div className="cs-step-n">01</div><h3 className="cs-step-h">Hot Games carousel</h3><p className="cs-step-p">Trending games as avatar circles at the top — visual, immediate, no reading required. Users who know what's popular tap and play in seconds.</p><p className="cs-step-rej"><span className="cs-rej-label">Rejected:</span> a static "Editor's Picks" tile. It assumed users trusted us to choose — but new visitors don't yet. Real-time popularity earns the click.</p></div>
          <div className="cs-step"><div className="cs-step-n">02</div><h3 className="cs-step-h">Curated sections</h3><p className="cs-step-p">Top Games, Popular Games, More Games — each surfaces different titles. Solves the "same 10 games" problem.<Pill
            q="Three hand-curated rows is editorial overhead. Why not let an algorithm rank one feed?"
            a="A single ranked feed collapses discovery to whatever's already popular — the long tail dies, the same failure mode I hit with wsup's category dropdown. Three sections with different intent (Top / Popular / More) force variety onto the page and give a new visitor more than one shape of game to react to. The curation cost is real, but it's the difference between a homepage that feels like a playground and one that feels like a leaderboard."
          /></p><p className="cs-step-rej"><span className="cs-rej-label">Rejected:</span> a single "all games" infinite scroll. Looked clean but flattened every title to equal weight — discovery collapsed to whatever loaded first.</p></div>
          <div className="cs-step"><div className="cs-step-n">03</div><h3 className="cs-step-h">Category browsing</h3><p className="cs-step-p">Explore by Categories at the bottom. Simulation, RPG, Action, Strategy — for users who know what genre they want.<Pill
            q="Why bury categories at the bottom instead of a Steam-style left rail?"
            a="Because a left-rail nav says 'catalog,' and now.gg's first-visit job is 'instant playground.' Categories serve the minority who arrive knowing their genre; the majority arrive curious and want to be shown something. Putting genre nav at the bottom serves the intent-driven user without making the front door feel like a database query for everyone else."
          /></p><p className="cs-step-rej"><span className="cs-rej-label">Rejected:</span> a left-rail category nav like a Steam-style store. Heavy on a homepage that needed to feel like an instant playground, not a catalog.</p></div>
          <div className="cs-step"><div className="cs-step-n">04</div><h3 className="cs-step-h">Search</h3><p className="cs-step-p">Persistent search bar at the top. For users who know the exact game — instant, keyboard-first.</p><p className="cs-step-rej"><span className="cs-rej-label">Rejected:</span> making search the hero (an early iteration). For most visitors, an empty search bar is a question they can't answer yet.</p></div>
        </div>
      </section>

      {/* 03 — KEY SCREENS */}
      <section className="cs-sec cs-sec-dark" ref={screenR}>
        <div className="cs-sec-head"><span className="stag" style={{ color: "rgba(255,255,255,.4)" }}>02 / KEY SCREENS</span></div>
        <h2 className="cs-h2" style={{ color: "white" }}>From discovery to <em>playing</em></h2>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 32 }}>Home — Three-layer discovery</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}><strong style={{ color: 'rgba(255,255,255,.85)' }}>Problem: 1,000 games scrolled in a flat grid is paralysis.</strong> Users either bounce or pick the first thing they see. The home page needed to give every kind of visitor a starting point — Hot Games avatars at top for trending, card grid for browsing, categories at the bottom for intent-driven navigation. The right sidebar runs a live wsup.ai character chat — engagement while you decide.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 16 }}>
          <img src="/cs/nowgg-scroll.png" alt="now.gg popular games and category browsing" className="cs-screenshot" />
        </div>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 40 }}>Game detail — One-click play</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}><strong style={{ color: 'rgba(255,255,255,.85)' }}>Problem: traditional game detail pages assume install friction.</strong> They sell the game first — screenshots, reviews, system specs — because the user has to commit before they can play. Cloud removes that constraint. The page collapses to one CTA: full-bleed game art, "Play in browser" in pink, rating + tags as light context. Below, a related-games strip keeps the discovery loop alive.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 16 }}>
          <img src="/cs/nowgg-sub1.png" alt="Game detail with play button and art" className="cs-screenshot" />
        </div>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 40 }}>Mobile — Gaming on any device</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}><strong style={{ color: 'rgba(255,255,255,.85)' }}>Problem: cloud gaming on phone is most users' first contact.</strong> Mobile visitors don't expect a full discovery experience — they want to start playing fast. So the avatar carousel stays (still the fastest "popular now" signal), cards go full-width to feel native, and navigation collapses to the essentials. Same library, less surface.</p>
        <div className="wsup-mobile-row">
          <div className="cs-screen-item" style={{ maxWidth: 220 }}>
            <img src="/cs/nowgg-m-home.png" alt="now.gg mobile with trending and game grid" className="cs-screenshot" />
          </div>
        </div>
      </section>

      {/* 04 — PROCESS */}
      <section className="cs-sec" ref={processR}>
        <div className="cs-sec-head"><span className="stag">03 / PROCESS</span></div>
        <h2 className="cs-h2">How I <em>approached</em> this</h2>
        <div className="wsup-process">
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">01</div><div className="wsup-phase-dur">Month 1</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Competitive audit</h3><p className="wsup-phase-desc"><strong>Problem:</strong> every existing cloud gaming product (GeForce NOW, Xbox Cloud, Luna, Steam Link) prioritized technical performance over discovery — they assumed you already knew what you wanted to play. <strong>Approach:</strong> reframe the category. Treat cloud as "instant try" rather than "remote install," and design for browsing as the primary state.</p><p className="wsup-phase-collab"><strong>Collaboration:</strong> set "time to first game" as the primary metric with PM — under 30 seconds the target.</p></div></div>
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">02</div><div className="wsup-phase-dur">Month 2–3</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Discovery design</h3><p className="wsup-phase-desc"><strong>Problem:</strong> a single flat library scroll dropped users — they couldn't tell what was worth playing. <strong>Approach:</strong> a three-layer system — trending as avatars (social, visual), curated as cards (browse), categories as tabs (intent). Bigger cards with real game art beat dense list rows.</p><p className="wsup-phase-collab"><strong>Collaboration:</strong> pushed back on the PM's "search-first" idea — internal data showed users browsed, not searched. Discovery-first won.<Pill
            q="Your biggest call — browsing-first over search-first — rests on 'internal data showed.' What data, and was this a real test or a post-hoc story?"
            a="I won't inflate it into a controlled experiment. The signal was behavioral: search shipped in the early build and was barely used, while the curated rows got the engagement — most arrivals didn't come with a title in mind. PM wanted search-first on intuition; I pushed back with that usage pattern, we shifted the hierarchy, then watched game-starts. They went up. Directional evidence plus a clear mechanism — an empty search bar is a question most visitors can't answer yet — not a p-value."
          /></p></div></div>
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">03</div><div className="wsup-phase-dur">Month 4+</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Game detail & iteration</h3><p className="wsup-phase-desc"><strong>Problem:</strong> game detail pages were doing too many jobs — selling the game, listing specs, surfacing related titles, monetization. The "Play" button was lost in the noise. <strong>Approach:</strong> collapse the page to one decision. Full-bleed art, one pink CTA, light context. Sidebar moved through info panels and social before landing on wsup.ai character chat — engagement while games load.</p><p className="wsup-phase-collab"><strong>Collaboration:</strong> integrated the wsup.ai team's API — close coordination on loading states and sidebar-disconnect fallbacks.</p></div></div>
        </div>
        <div className="wsup-failure">
          <h3 className="wsup-failure-h">What didn't work</h3>
          <h4 className="wsup-failure-title">The search-first homepage</h4>
          <p className="cs-p">First iteration put search front and center — like a Google for games. Looked clean, tested poorly. Users who didn't know what to play (the majority) stared at an empty search bar. Switched to browsing-first with trending games up top. Game starts went up — users saw what was popular before they had to decide.</p>
          <h4 className="wsup-failure-title" style={{ marginTop: 18 }}>Overloaded game detail pages</h4>
          <p className="cs-p">Early game detail pages tried to do everything — sell the game, list system requirements, surface reviews, push related titles, run a chat panel. The "Play" CTA disappeared into the noise. The fix wasn't redesign — it was deletion. Stripped everything except game art + one pink CTA + light context. Conversion from detail page to play climbed once the page made one offer instead of seven.<Pill
            q="You say conversion 'climbed' and game-starts 'went up.' From what to what — or do you not have the numbers?"
            a="Direction, not a clean controlled delta, and I'll say that rather than invent precision. Both moved the right way in the data we watched, but I can't hand you an isolated percentage — the product was changing around those edits at the same time, and a number I can't attribute cleanly is one I shouldn't quote. The honest part is the mechanism: one offer converts better than seven, and being shown beats being asked."
          /></p>
        </div>
      </section>

      {/* 05 — DECISIONS */}
      <section className="cs-sec" ref={decR}>
        <div className="cs-sec-head"><span className="stag">04 / DECISIONS</span></div>
        <h2 className="cs-h2">Design choices that<br /><em>shaped</em> the product</h2>
        <div className="cs-corr-grid">
          <div className="cs-corr"><div className="cs-corr-tag">Dark immersive UI</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Why not light</span>Gaming platforms feel native in dark</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>Full dark theme with vibrant game art as the color source</div></div><p className="cs-corr-why">Let the game art pop. The UI recedes. Gradient backgrounds (purple/pink) add warmth without competing with game visuals.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Avatar circles for trending</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>List or card grid for trending</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>Circular avatars in a horizontal row</div></div><p className="cs-corr-why">Circles feel social (Instagram stories mental model). They scan faster than cards and take less vertical space. Hot/fire emoji adds urgency.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Pink CTA for "Play"</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>Blue or white CTA</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>Hot pink "Play in browser" button</div></div><p className="cs-corr-why">Pink stands out against dark backgrounds without feeling corporate. It matches the brand gradient and creates a consistent "action" color across the platform.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Cross-product sidebar</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>Separate apps, separate UX</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>wsup.ai character chat embedded in sidebar</div></div><p className="cs-corr-why">Users waiting for games to load engage with AI characters. Cross-product engagement increases session time and introduces wsup.ai organically.<Pill
            q="Honestly — the wsup.ai chat in the sidebar. Real user value, or cross-promotion the org wanted that you designed around?"
            a="Both, and I'd rather be straight about it. The company wanted a path from now.gg into wsup.ai — that's real. My job was to make it earn its place instead of being an ad bolted onto the page. So it only lives in dead time — a game loading, or while you're deciding — never interrupting play, never stealing the primary CTA. The test I held it to was 'does this hurt time-to-first-game?' If it had, it was gone. It survived because it filled a wait, not because the org liked it."
          /></p></div>
        </div>
      </section>

      {/* 05 — IMPACT */}
      <section className="cs-sec" ref={resultR}>
        <div className="cs-sec-head"><span className="stag">05 / IMPACT</span></div>
        <h2 className="cs-h2">Making cloud gaming<br />feel <em>instant</em></h2>
        <div className="cs-result-grid">
          <div className="cs-result"><div className="cs-result-n">100M+</div><div className="cs-result-l">Cloud gaming users — platform scaled while UX stayed consistent</div><div className="cs-src">via PR Newswire · Mar 2024</div></div>
          <div className="cs-result"><div className="cs-result-n">~10M</div><div className="cs-result-l">Monthly visits — discovery-first design drives repeat usage</div><div className="cs-src">via company data</div></div>
          <div className="cs-result"><div className="cs-result-n">1,000+</div><div className="cs-result-l">Games browsable through a structured three-layer system</div><div className="cs-src">via now.gg catalog</div></div>
          <div className="cs-result"><div className="cs-result-n">0 installs</div><div className="cs-result-l">Click-to-play UX — instant in browser on any device</div></div>
        </div>
        <div className="cs-reflection">
          <h3 className="cs-reflection-h">What I learned</h3>
          <p className="cs-p"><strong>The best cloud gaming UX makes the cloud invisible.</strong> The moment users think about latency, servers, or streaming quality, the design has failed. Loading states, session start, and exit flows do most of that hiding work — long before the player ever opens.</p>
          <p className="cs-p"><strong>Discovery beats search for gaming platforms.</strong> Most visitors don't know what they want to play — they want to be shown. Lead with trending and curated cards. Search exists for the minority who arrived with a name in mind, not as the primary surface.</p>
          <p className="cs-p"><strong>One offer per surface, always.</strong> The biggest conversion lift came from deleting features, not adding them — a single pink "Play" CTA on the detail page beat a layout that tried to sell, inform, and cross-sell at once. Cloud removes friction; UX needs to honor that by not adding new friction back in.</p>
        </div>
      </section>

      <div className="cs-cta">
        <Link to="/" className="bgh">← Back to portfolio</Link>
        <Link to="/bluestacks" className="bdk">Next: BlueStacks →</Link>
      </div>
      <FOOTER />
    </div>
    </InterviewModeProvider>
  );
}
