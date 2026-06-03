import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BeforeAfterSlider from "./BeforeAfterSlider";
import ProcessFlow, { type FlowData } from "./ProcessFlow";
import { InterviewModeProvider, Pill } from "./InterviewMode";

const BS_FLOW: FlowData = {
  stages: [
    { icon: "search", label: "Audit", sub: "the BS4 site + who visits" },
    { icon: "target", label: "Define", sub: "modernize, keep rankings" },
    { icon: "bulb", label: "Design", sub: "game-forward, not specs" },
    { icon: "layout", label: "Systematize", sub: "one system, every surface" },
    { icon: "ship", label: "Ship", sub: "at scale, rankings intact" },
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
    <span className="nlogo" style={{ gap: 6 }}>BlueStacks</span>
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

export default function BluestacksCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const heroR = useR(), probR = useR(), mktR = useR(), resR = useR(), screenR = useR(), processR = useR(), decR = useR(), resultR = useR();

  return (
    <InterviewModeProvider>
    <div className="cs">
      <NAV />

      <header className="cs-hero" ref={heroR}>
        <div className="cs-badge abb">CASE STUDY · WEBSITE REDESIGN</div>
        <h1 className="cs-h1">Bringing the world's #1 Android<br />emulator out of the <em>BlueStacks 4</em> era</h1>
        <p className="cs-sub">BlueStacks lets people play Android games on PC. When I joined in 2019 the product was already #1 — but the website hadn't kept up. The homepage sold specs instead of games, and the game pages were built around dated sections. I owned the redesign of the surfaces that carried nearly all the traffic: the homepage and the game landing pages.</p>
        <div className="cs-role-row">
          <div className="cs-role-item"><span className="cs-role-label">My role</span>Product Designer — owned the bluestacks.com redesign: homepage + game landing-page template</div>
          <div className="cs-role-item"><span className="cs-role-label">Product</span><a href="https://www.bluestacks.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue)" }}>bluestacks.com</a> — Android emulator · Backed by Intel, AMD, Samsung, Qualcomm</div>
          <div className="cs-role-item"><span className="cs-role-label">Timeline</span>Joined 2019 · redesign shipped 2020–2021</div>
          <div className="cs-role-item"><span className="cs-role-label">Scope</span>The bluestacks.com marketing site — homepage, game landing pages (one template, thousands of search pages), and feature pages</div>
        </div>
        <div className="cs-meta-row">
          <div className="cs-meta"><span className="cs-mn">300M+</span><span className="cs-ml">Users worldwide</span><span className="cs-src">BlueStacks platform · via bluestacks.com · 2019</span></div>
          <div className="cs-meta"><span className="cs-mn">212</span><span className="cs-ml">Countries & territories</span><span className="cs-src">via bluestacks.com · 2019</span></div>
          <div className="cs-meta"><span className="cs-mn">#1</span><span className="cs-ml">Android emulator</span><span className="cs-src">industry consensus</span></div>
          <div className="cs-meta"><span className="cs-mn">3</span><span className="cs-ml">Surface types redesigned</span><span className="cs-src">homepage · game pages · feature pages</span></div>
        </div>
      </header>

      <div className="cs-screenshots-single" style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 20px' }}>
        <img src="/cs/bluestacks-home.png" alt="Redesigned BlueStacks homepage — game-forward hero, feature cards, trust bar" className="cs-screenshot" />
        <span className="cs-screen-label" style={{ textAlign: 'center', display: 'block', marginTop: 8 }}>BlueStacks homepage — the redesign, live today</span>
      </div>

      {/* THE CHALLENGE — full-bleed dark band */}
      <section className="wsup-challenge-block">
        <div className="wsup-challenge-inner">
          <span className="wsup-challenge-label">THE CHALLENGE</span>
          <p className="wsup-challenge-body">Modernizing the website behind the world's #1 Android emulator — a homepage that read like a spec sheet, and thousands of dated game pages — <em>without losing the search rankings or the trust 300M+ users had already built.</em></p>
        </div>
      </section>

      <ProcessFlow data={BS_FLOW} />

      <section className="cs-sec" ref={probR}>
        <p className="cs-p"><strong>BlueStacks was the #1 Android emulator with 300M+ users — but the website didn't show it.</strong> The homepage led with a screenshot of the app window and a benchmark line ("6× faster than a Galaxy S9+"). The game pages — which pulled most of the search traffic — were walls of text under dated "Powerups" and "How to Play and Stream" sections.</p>
        <p className="cs-p">And this wasn't a blank-canvas rebrand. Millions of users and thousands of search-ranked game pages ran on these templates. I had to modernize the experience without losing those rankings, or the trust people already had in the brand.</p>

        <h3 className="wsup-also-h">Who actually hit these pages</h3>
        <div className="wsup-moats">
          <div className="wsup-moat"><div className="wsup-moat-n">01</div><div className="wsup-moat-name">Game-intent searchers</div><p className="wsup-moat-what">Searched "[game] on PC", landed on a game page. Wanted to play that one title fast — not read a spec sheet. The largest, most valuable traffic.</p></div>
          <div className="wsup-moat"><div className="wsup-moat-n">02</div><div className="wsup-moat-name">Gamers without flagship phones</div><p className="wsup-moat-what">Came to the homepage to run AAA Android titles their device couldn't handle. The core homepage segment.</p></div>
          <div className="wsup-moat"><div className="wsup-moat-n">03</div><div className="wsup-moat-name">Streamers & content creators</div><p className="wsup-moat-what">Wanted bigger screens, recording, multiple instances. The audience the feature/Powerups content actually spoke to.</p></div>
          <div className="wsup-moat"><div className="wsup-moat-n">04</div><div className="wsup-moat-name">Power users & game farmers</div><p className="wsup-moat-what">Multi-instance, macros, key-mapping — the technical features that kept BlueStacks differentiated. They scroll for specs; everyone else doesn't.</p></div>
        </div>
      </section>

      {/* MARKET CONTEXT */}
      <section className="cs-sec" ref={mktR} style={{ paddingTop: 32, paddingBottom: 32 }}>
        <div className="cs-sec-head"><span className="stag">MARKET CONTEXT</span></div>
        <h2 className="cs-h2" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>Where BlueStacks <em>sat</em></h2>
        <p className="cs-p" style={{ marginBottom: 20 }}>The Android-emulator market was crowded, and most rivals competed on performance and price. BlueStacks led on trust — its enterprise backers — and on reach, with a huge game library spread across thousands of search pages. The redesign had to protect both while modernizing the look.</p>
        <div className="wsup-also-tracked">
          <div className="wsup-also-card"><div className="wsup-also-body"><div className="wsup-also-name">NoxPlayer</div><p className="wsup-also-takeaway">Lightweight emulator popular in Asia. Cleaner setup, but limited macro/multi-instance — missed the power-user segment.</p></div></div>
          <div className="wsup-also-card"><div className="wsup-also-body"><div className="wsup-also-name">LDPlayer</div><p className="wsup-also-takeaway">Aggressive marketing, near-identical feature set. Less polished onboarding; competed on price and benchmark numbers.</p></div></div>
          <div className="wsup-also-card"><div className="wsup-also-body"><div className="wsup-also-name">MEmu</div><p className="wsup-also-takeaway">Gaming-first, Asia-focused. Strong on older PCs, but weaker brand and trust signaling than BlueStacks.</p></div></div>
          <div className="wsup-also-card"><div className="wsup-also-body"><div className="wsup-also-name">GameLoop (Tencent)</div><p className="wsup-also-takeaway">Pushed hard for PUBG Mobile and CoD Mobile. Single-publisher orientation limited cross-game discovery.</p></div></div>
        </div>
      </section>

      {/* 02 — APPROACH */}
      <section className="cs-sec" ref={resR}>
        <div className="cs-sec-head"><span className="stag">01 / APPROACH</span></div>
        <h2 className="cs-h2">Lead with the game,<br />not the <em>emulator</em></h2>
        <p className="cs-p"><strong>Every audience came for a game</strong> — a specific title, or just "play Android games on a big screen." The old site asked them to care about the emulator first. The redesign flips that: games lead, and the technology earns trust underneath.</p>
        <div className="cs-steps">
          <div className="cs-step"><div className="cs-step-n">01</div><h3 className="cs-step-h">Game-forward hero</h3><p className="cs-step-p">Replaced the tilted app-window screenshot with 3D game characters flanking one clear "Download BlueStacks" CTA plus a featured game. The hero now reads "gaming platform," not "utility."<Pill
            q="Replacing a product screenshot with game art is a big swing on a utility brand. How'd you de-risk it?"
            a="I didn't kill the product proof, I demoted it — the screenshot moved below the fold where the power users who care about emulator specs actually look. The hero's job is the first-second message: 'this is where games live,' not 'this is software.' The bet was that the install-intent visitor decides on vibe before specs, and the spec-hunters scroll. Both audiences keep what they need."
          /></p><p className="cs-step-rej"><span className="cs-rej-label">Rejected:</span> keeping the product screenshot. It sold the container, not the games inside it.</p></div>
          <div className="cs-step"><div className="cs-step-n">02</div><h3 className="cs-step-h">Outcome copy over spec copy</h3><p className="cs-step-p">"Play Android games on PC" replaced "6× faster than a Galaxy S9+." Specs moved below the fold, where the power users who care actually look for them.<Pill
            q="You dropped '6× faster than a Galaxy S9+.' That's a concrete, true benchmark — why throw away a hard number?"
            a="Because it answered a question the visitor wasn't asking yet. A benchmark only lands once someone's decided they care about performance; at the top of the funnel they're deciding whether this is even for them. 'Play Android games on PC' converts the undecided; the benchmark reassures the already-convinced. I kept the number — just moved it to where the doubt it answers actually forms."
          /></p><p className="cs-step-rej"><span className="cs-rej-label">Rejected:</span> leading with benchmark numbers. Accurate, but it fell flat — and meant nothing to most visitors.</p></div>
          <div className="cs-step"><div className="cs-step-n">03</div><h3 className="cs-step-h">A structured game-page template</h3><p className="cs-step-p">The highest-traffic surface. Rebuilt a wall of text into scannable blocks: rating + category up top, a single "Play on PC" CTA, then About, Tips, Features, a clean How-to, and system requirements. One template, thousands of game pages.</p><p className="cs-step-rej"><span className="cs-rej-label">Rejected:</span> a different layout per game. You can't hand-build thousands of search-ranked pages.</p></div>
          <div className="cs-step"><div className="cs-step-n">04</div><h3 className="cs-step-h">Trust where doubt forms</h3><p className="cs-step-p">Enterprise backer logos (Intel, AMD, Samsung, Qualcomm) placed on the homepage near the CTA. Emulator anxiety peaks right at the download decision.<Pill
            q="Backer logos by the CTA — is 'it reduces download anxiety' something you measured, or an assumption?"
            a="A reasoned bet, not an A/B-proven number, and I'd say so in the room. Emulator downloads carry a 'is this malware' anxiety that peaks right at the button — so the credibility signal belongs there, not on a separate security page three clicks deep. The logos were real backers the company already cited publicly; I moved them to where the doubt forms. With a test budget I'd have validated the lift, but putting the strongest trust signal at the decision point is the defensible default."
          /></p><p className="cs-step-rej"><span className="cs-rej-label">Rejected:</span> a separate security page. Doubt forms in the first seconds, not three clicks deep.</p></div>
        </div>
      </section>

      {/* 03 — KEY SCREENS */}
      <section className="cs-sec cs-sec-dark" ref={screenR}>
        <div className="cs-sec-head"><span className="stag" style={{ color: "rgba(255,255,255,.4)" }}>02 / KEY SCREENS</span></div>
        <h2 className="cs-h2" style={{ color: "white" }}>Before and after,<br />across the <em>whole site</em></h2>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 32 }}>Homepage — from spec sheet to gaming platform</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}><strong style={{ color: 'rgba(255,255,255,.85)' }}>The old homepage opened on a screenshot of the app and a benchmark line.</strong> The redesign opens on game characters and a single clear action, with the emulator's strengths reframed as feature cards below.</p>
        <BeforeAfterSlider
          beforeSrc="/cs/bs-home-before.png"
          afterSrc="/cs/bs-home-after.png"
          beforeAlt="BlueStacks 4 homepage, 2019 — app-window hero, '6x faster' spec copy, Games-of-the-Week carousel, long single-column scroll"
          afterAlt="Redesigned BlueStacks homepage — 3D character hero, browse-by-category grid, feature cards, trust bar"
          beforeLabel="Old · 2019"
          afterLabel="New"
        />
        <span className="cs-screen-label" style={{ display: 'block', textAlign: 'center', marginTop: 14 }}>⟷ Drag to compare · ↕ scroll for the full page — BlueStacks homepage, 2019 → today</span>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.45)", fontSize: 13, marginTop: 14 }}>Note: the live homepage today also surfaces cloud play and a Mac app — both added by the team <em>after</em> my redesign. The game-forward hero, feature-card structure, and trust bar are the redesign I led.<Pill
            q="You joined in 2019 and shipped over 2020–21. Were you the only designer, and what's genuinely your design vs. the team's or what's changed since?"
            a="I owned the homepage and the game-page template — the two surfaces carrying nearly all the traffic — end to end: structure, hierarchy, the game-forward direction. Marketing on hero copy, engineering on the build; I wasn't hand-coding it. What I don't claim: cloud play and the Mac app on the live site came after me, from the team, and I flag that right here. 'Mine' is the structural redesign you're looking at in the before/afters, not every pixel on bluestacks.com today."
          /></p>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 44 }}>Game landing page — the SEO workhorse</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}><strong style={{ color: 'rgba(255,255,255,.85)' }}>This template was replicated across thousands of game pages and drove the majority of search traffic.</strong> The old version buried a long description under dated "Powerups" and "How to Play and Stream" sections. The redesign leads with the game's identity — art, rating, category — and a single CTA, then structures the rest into scannable, search-friendly blocks.</p>
        <BeforeAfterSlider
          beforeSrc="/cs/bs-app-before.png"
          afterSrc="/cs/bs-app-after.png"
          beforeAlt="BlueStacks 4 game page — Rise of Kingdoms, 2019: stacked CTAs, wall of text, Powerups, How to Play and Stream"
          afterAlt="Redesigned BlueStacks game page: art, star rating, category, single Play on PC CTA, structured About / Tips / Features / How-to blocks"
          beforeLabel="Old · 2019"
          afterLabel="New"
        />
        <span className="cs-screen-label" style={{ display: 'block', textAlign: 'center', marginTop: 14 }}>⟷ Drag to compare · ↕ scroll inside the window for the full page — BlueStacks game-page template, 2019 → today</span>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 44 }}>Feature pages — explaining the product with clarity</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}><strong style={{ color: 'rgba(255,255,255,.85)' }}>BlueStacks' power features — Multi-instance, key-mapping, performance — were its real differentiators, but the pages explaining them read like manuals.</strong> Multi-instance is the clearest example: the old page was a thin "what is it / how to set it up" explainer. The redesign turns it into a visual story — what you can actually do (run multiple games, multiple accounts, 64- and 32-bit side by side), why it matters, and how to start — so a first-timer understands the feature, not just its steps.</p>
        <BeforeAfterSlider
          beforeSrc="/cs/bs-feature-before.png"
          afterSrc="/cs/bs-feature-after.png"
          beforeAlt="BlueStacks 4 Multi-instance feature page, 2019 — a thin 'what is it / how to set up' explainer"
          afterAlt="Redesigned Multi-instance feature page — a visual story of use cases, benefits, and a clear how-to"
          beforeLabel="Old · 2019"
          afterLabel="New"
        />
        <span className="cs-screen-label" style={{ display: 'block', textAlign: 'center', marginTop: 14 }}>⟷ Drag to compare · ↕ scroll for the full page — Multi-instance feature page, 2019 → today</span>
      </section>

      {/* 04 — PROCESS */}
      <section className="cs-sec" ref={processR}>
        <div className="cs-sec-head"><span className="stag">03 / PROCESS</span></div>
        <h2 className="cs-h2">Modernizing without<br />breaking what <em>worked</em></h2>
        <div className="wsup-process">
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">01</div><div className="wsup-phase-dur">2019</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Audit the BlueStacks 4 site</h3><p className="wsup-phase-desc"><strong>Problem:</strong> the site marketed an emulator with a spec sheet, but the product had become game-first. <strong>Approach:</strong> inventoried the homepage, game-page, and feature-page templates against the product as it actually was — mapping which sections earned their scroll and which were legacy weight ("How to Play and Stream," affiliate pitches, endorsement strips).</p></div></div>
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">02</div><div className="wsup-phase-dur">2020</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Redesign the homepage</h3><p className="wsup-phase-desc"><strong>Problem:</strong> the hero sold the container, not the games. <strong>Approach:</strong> reframed it around games and one clear action, restructured the long scroll into feature cards, and pulled trust signals up near the CTA.</p><p className="wsup-phase-collab"><strong>Collaboration:</strong> marketing on hero copy and CTA; engineering on a layout that held across the site's many languages.</p></div></div>
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">03</div><div className="wsup-phase-dur">2020–21</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Roll out the game-page template</h3><p className="wsup-phase-desc"><strong>Problem:</strong> the harder one — a single template lived across thousands of search-ranked game pages. A redesign couldn't cost those rankings. <strong>Approach:</strong> designed a structure that reads well for people and for search, then partnered with engineering to roll it across the catalog without losing traffic.<Pill
            q="Redesigning thousands of search-ranked pages without losing rankings is the hardest claim here. As the designer, what did you actually do to protect SEO — and did rankings dip?"
            a="I owned the design side, not the crawl analytics — so I'll be precise about my part. The redesign kept what search depends on: the URL structure, the per-game title and H1, the indexed body copy, and the heading hierarchy all survived. I changed how that content was presented, not what existed. The real risk is stripping text to make a page prettier, so the template kept dedicated slots for the descriptive copy that earned the rankings — just made it scannable. I partnered with engineering and the SEO side on the rollout so a layout change never quietly dropped indexed content; the traffic monitoring lived with them."
          /></p></div></div>
        </div>
        <div className="wsup-failure">
          <h3 className="wsup-failure-h">What didn't work</h3>
          <h4 className="wsup-failure-title">The feature-first homepage</h4>
          <p className="cs-p">Early drafts still led with emulator capabilities — multi-instance, macros, key-mapping. Technically impressive, but it fell flat. Visitors buy the outcome — playing the game — not the engine. Moving features below an outcome-led hero ("Play Android games on PC," with characters around the CTA) was the unlock.</p>
          <h4 className="wsup-failure-title" style={{ marginTop: 18 }}>One-size copy across every game page</h4>
          <p className="cs-p">A first pass reused near-identical copy across game pages to save effort. It read generic and undercut the per-game search relevance the template existed to serve. The fix: keep the <em>structure</em> shared, keep the <em>content</em> slots game-specific.<Pill
            q="One template across thousands of games — how does a blockbuster with rich content survive sitting next to an obscure title with almost none?"
            a="That's exactly where my first pass failed — near-identical copy read generic and undercut per-game relevance. The fix was a template that degrades gracefully: shared structure, game-specific slots, and sections that collapse when a game has nothing for them rather than rendering a hollow header. An indie title shows art, rating, CTA, and a short About; a major title fills Tips, Features, and How-to. The skeleton's fixed; the body flexes."
          /></p>
        </div>
      </section>

      {/* 05 — DECISIONS */}
      <section className="cs-sec" ref={decR}>
        <div className="cs-sec-head"><span className="stag">04 / DECISIONS</span></div>
        <h2 className="cs-h2">The calls that shaped<br />the <em>redesign</em></h2>
        <div className="cs-corr-grid">
          <div className="cs-corr"><div className="cs-corr-tag">Hero visual</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>App-window screenshot</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>3D game characters</div></div><p className="cs-corr-why">Visitors come for games, not the emulator shell. Characters frame BlueStacks as a gaming platform from the first frame.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Hero copy</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>"6× faster than a Galaxy S9+"</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>"Play Android games on PC"</div></div><p className="cs-corr-why">A benchmark means nothing to someone who just wants to play. Lead with the outcome. Keep the specs for the power users who scroll for them.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Game pages</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>Bespoke layout per game</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>One shared template, game-specific slots</div></div><p className="cs-corr-why">Thousands of SEO pages can't each be hand-designed. A strong shared structure scales and protects rankings.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Trust signals</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>A separate security page</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>Backer logos beside the CTA</div></div><p className="cs-corr-why">Emulator anxiety peaks at the download decision. Intel/AMD/Samsung/Qualcomm next to the button answers "is this safe?" before it's asked.</p></div>
        </div>
      </section>

      {/* 06 — IMPACT */}
      <section className="cs-sec" ref={resultR}>
        <div className="cs-sec-head"><span className="stag">05 / IMPACT</span></div>
        <h2 className="cs-h2">A site that finally<br />matched the <em>product</em></h2>
        <div className="cs-result-grid">
          <div className="cs-result"><div className="cs-result-n">3</div><div className="cs-result-l">Surface types redesigned — homepage, game landing pages, and feature pages</div></div>
          <div className="cs-result"><div className="cs-result-n">1000s</div><div className="cs-result-l">Game pages running the one redesigned template</div></div>
          <div className="cs-result"><div className="cs-result-n">300M+</div><div className="cs-result-l">BlueStacks users the new site served</div><div className="cs-src">platform · 2019</div></div>
          <div className="cs-result"><div className="cs-result-n">#1</div><div className="cs-result-l">Android emulator — position held through the redesign</div><div className="cs-src">industry consensus</div></div>
        </div>
        <div className="cs-reflection">
          <h3 className="cs-reflection-h">What I learned</h3>
          <p className="cs-p"><strong>Sell the outcome, not the engine.</strong> The biggest lever wasn't visual polish — it was moving from "6× faster than a phone" to "play your games on PC." People buy the result, not the spec.</p>
          <p className="cs-p"><strong>A template is a product.</strong> The game page wasn't one screen; it was thousands of live, indexed pages. Designing that structure once, well, mattered more than perfecting any single layout.</p>
          <p className="cs-p"><strong>Modernize without starting over.</strong> What made it hard — millions of users, thousands of ranked pages — was also the point. The win was a modern experience that kept the trust and the traffic intact.<Pill
            q="Your impact section is platform counts — 300M users, #1, thousands of pages. None of that is attributable to your redesign. Did conversion or bounce actually move?"
            a="Fair, and I won't dress platform numbers up as my outcome. I owned the surfaces, not the company's growth — so I report what's mine: the redesign shipped across every game page and the homepage and held the rankings and trust the business ran on, which was the bar. I don't have a clean before/after conversion delta I can isolate from five years of other changes, so I won't claim one. The defensible win is that the site stopped contradicting the product."
          /></p>
        </div>
      </section>

      <div className="cs-cta">
        <Link to="/nowgg" className="bgh">← now.gg</Link>
        <Link to="/" className="bdk">Back to portfolio →</Link>
      </div>
      <FOOTER />
    </div>
    </InterviewModeProvider>
  );
}
