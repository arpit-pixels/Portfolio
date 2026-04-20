import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function useR(d = 0) {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = r.current; if (!el) return;
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add("vis"), d); ob.unobserve(el); }
    }, { threshold: 0.2 });
    ob.observe(el);
    return () => ob.disconnect();
  }, [d]);
  return r;
}

const NAV = () => (
  <nav>
    <Link to="/" className="nlogo">← Back</Link>
    <span className="nlogo" style={{ gap: 6 }}>game.tv</span>
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

export default function GametvCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const heroR = useR(), probR = useR(), resR = useR(), screenR = useR(), processR = useR(), decR = useR(), resultR = useR();

  return (
    <div className="cs">
      <NAV />

      <header className="cs-hero" ref={heroR}>
        <div className="cs-badge abb">CASE STUDY · PRODUCT DESIGN</div>
        <h1 className="cs-h1">UX for the world's <em>#1</em><br />mobile esports platform</h1>
        <p className="cs-sub">game.tv powers a tournament every 60 seconds across 17 countries. I designed the creator experience — from tournament hosting to content monetization to community building.</p>
        <div className="cs-role-row">
          <div className="cs-role-item"><span className="cs-role-label">My role</span>Product Designer — creator onboarding, tournament UX, content creation tools, community features, NFT marketplace</div>
          <div className="cs-role-item"><span className="cs-role-label">Product</span><a href="https://game.tv" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue)" }}>game.tv</a> — mobile esports + creator platform · $25M funded · 17 countries</div>
          <div className="cs-role-item"><span className="cs-role-label">Timeline</span>2019–2022 · From esports platform to creator economy</div>
          <div className="cs-role-item"><span className="cs-role-label">Scale</span>11M+ tournament registrations · 5M+ downloads · 190K+ guilds · 300+ game titles · 17+ countries</div>
        </div>
        <div className="cs-meta-row">
          <div className="cs-meta"><span className="cs-mn">11M+</span><span className="cs-ml">Tournament registrations</span><span className="cs-src">via company data</span></div>
          <div className="cs-meta"><span className="cs-mn">5M+</span><span className="cs-ml">App downloads</span><span className="cs-src">via company data</span></div>
          <div className="cs-meta"><span className="cs-mn">190K+</span><span className="cs-ml">Gaming guilds</span><span className="cs-src">via company data</span></div>
          <div className="cs-meta"><span className="cs-mn">17+</span><span className="cs-ml">Countries</span><span className="cs-src">via company data</span></div>
        </div>
      </header>

      <div className="cs-screenshots-single" style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 20px' }}>
        <img src="/cs/gametv-home.png" alt="game.tv homepage" className="cs-screenshot" />
        <span className="cs-screen-label" style={{ textAlign: 'center', display: 'block', marginTop: 8 }}>game.tv — create gaming content, build a recurring income stream</span>
      </div>

      {/* 01 — CHALLENGE */}
      <section className="cs-sec" ref={probR}>
        <div className="cs-sec-head"><span className="stag">01 / THE CHALLENGE</span></div>
        <h2 className="cs-h2">From tournament tool<br />to <em>creator economy</em></h2>
        <div className="cs-two-col">
          <div>
            <p className="cs-p">game.tv started as a tournament automation platform — "Tourney" bot runs tournaments from start to finish. But the product vision expanded: creators needed to stream, make short videos, build communities, monetize with NFTs, and earn recurring income.</p>
            <p className="cs-p">The design challenge: how do you add creator economy features without losing the esports identity that got you 11M registrations?</p>
          </div>
          <div className="cs-problem-list">
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Esports users expected tournament tools — not a content platform</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Creator onboarding had to be simpler than Twitch or YouTube</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> NFT marketplace was new territory — no established UX patterns for gaming NFTs</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> 17 countries meant localization, cultural differences, and varying internet quality</div>
            <div className="cs-problem-item cs-problem-solved"><span className="cs-problem-check">✓</span> Designed a four-step creator journey: play → create → build community → earn</div>
          </div>
        </div>
      </section>

      {/* 02 — APPROACH */}
      <section className="cs-sec" ref={resR}>
        <div className="cs-sec-head"><span className="stag">02 / APPROACH</span></div>
        <h2 className="cs-h2">Four steps from gamer<br />to <em>creator</em></h2>
        <p className="cs-p">The product tagline is "It's Easy to Get Started. Game On." — and the UX had to deliver on that promise. I designed a progressive journey that turns gamers into earners:</p>
        <div className="cs-steps">
          <div className="cs-step"><div className="cs-step-n">01</div><h3 className="cs-step-h">Sign up and create a profile</h3><p className="cs-step-p">"Be crazy. Be cool. Be you." — the onboarding frames creation as self-expression, not work. Low barrier, personality-first.</p></div>
          <div className="cs-step"><div className="cs-step-n">02</div><h3 className="cs-step-h">Curate exclusive offerings</h3><p className="cs-step-p">"Keep the surprises coming." — tournaments, streams, short videos. Each content type has its own creation flow, but all share the same publish pipeline.</p></div>
          <div className="cs-step"><div className="cs-step-n">03</div><h3 className="cs-step-h">Build a thriving community</h3><p className="cs-step-p">"Turn fans into superfans." — guilds, clubs, direct interaction. Community tools are baked into the platform, not bolted on.</p></div>
          <div className="cs-step"><div className="cs-step-n">04</div><h3 className="cs-step-h">Grow income doing what you love</h3><p className="cs-step-p">"Go for glory." — NFTs, exclusive content, fan support, tournament prize pools. Multiple monetization paths so creators aren't dependent on one revenue stream.</p></div>
        </div>
      </section>

      {/* 03 — KEY SCREENS */}
      <section className="cs-sec cs-sec-dark" ref={screenR}>
        <div className="cs-sec-head"><span className="stag" style={{ color: "rgba(255,255,255,.4)" }}>03 / KEY SCREENS</span></div>
        <h2 className="cs-h2" style={{ color: "white" }}>A platform that does<br /><em>five things</em> well</h2>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 32 }}>Landing — Creator-first positioning</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>The hero leads with "Create gaming content. Build a recurring income stream." — not "host tournaments." This was a deliberate repositioning from esports tool to creator platform, executed through UX copy and visual hierarchy.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 16 }}>
          <img src="/cs/gametv-scroll2.png" alt="game.tv creator stories and top games" className="cs-screenshot" />
          <span className="cs-screen-label">Creator stories — real gamers, top games, news coverage</span>
        </div>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 40 }}>Features — Progressive disclosure</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>Five features (Host Tournaments, Live Streams, Short Videos, Upload Videos, NFT Gallery) presented as numbered steps. Each expands to show details — the page teaches the platform without overwhelming.</p>
        <div className="wsup-screen-pair">
          <div className="cs-screen-item">
            <img src="/cs/gametv-scroll.png" alt="game.tv features" className="cs-screenshot" />
            <span className="cs-screen-label">Four-step journey + exclusive features section</span>
          </div>
          <div className="cs-screen-item">
            <img src="/cs/gametv-sub2.png" alt="game.tv esports page with stats" className="cs-screenshot" />
            <span className="cs-screen-label">Esports page — 5M+ downloads, 190K+ guilds, app store CTAs</span>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px 20px 40px' }}>
        <h3 className="cs-h3">Mobile — Where the gamers are</h3>
        <p className="cs-p">game.tv's audience is mobile-first — Free Fire, Brawl Stars, Clash Royale players on phones. The mobile experience had to be even cleaner than desktop.</p>
        <div className="wsup-mobile-row">
          <div className="cs-screen-item" style={{ maxWidth: 220 }}>
            <img src="/cs/gametv-m-home.png" alt="game.tv mobile with creator hero and download CTA" className="cs-screenshot" />
            <span className="cs-screen-label">Mobile — creator-first hero, download CTA, 4-step journey</span>
          </div>
        </div>
      </div>

      {/* 04 — PROCESS */}
      <section className="cs-sec" ref={processR}>
        <div className="cs-sec-head"><span className="stag">04 / PROCESS</span></div>
        <h2 className="cs-h2">Building a creator platform<br /><em>inside</em> an esports tool</h2>
        <div className="wsup-process">
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">01</div><div className="wsup-phase-dur">2019–20</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Tournament UX foundation</h3><p className="wsup-phase-desc">Designed the core tournament experience — bracket creation, automated matchmaking via "Tourney" bot, result tracking. The initial UX was tournament-centric: find a game, join a tournament, play, win prizes.</p><p className="wsup-phase-collab"><strong>Collaboration:</strong> Worked with the Tourney bot engineering team to design conversation flows that felt human, not robotic. Bot messages needed to be clear enough for a 14-year-old Free Fire player.</p></div></div>
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">02</div><div className="wsup-phase-dur">2020–21</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Community features</h3><p className="wsup-phase-desc">Added guilds (100K+), voice/text chat, and community management tools. The challenge: making community feel native to a platform built for one-off tournaments. Guild creation UX had to be simpler than Discord.</p><p className="wsup-phase-collab"><strong>Collaboration:</strong> PM pushed for Discord-style complexity. I argued for simplicity — our users were mobile-first gamers, not desktop power users. Simplified guild creation to 3 steps.</p></div></div>
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">03</div><div className="wsup-phase-dur">2021–22</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Creator economy pivot</h3><p className="wsup-phase-desc">Designed live streaming, short video creation, NFT marketplace, and monetization flows. This was the biggest design challenge: repositioning from "tournament tool" to "creator platform" without alienating existing users.</p><p className="wsup-phase-collab"><strong>Collaboration:</strong> Led design reviews with leadership to align on the creator-first positioning. The hero copy change from "Host tournaments" to "Create content, build income" was debated for weeks before shipping.</p></div></div>
        </div>
        <div className="wsup-failure">
          <h3 className="wsup-failure-h">What didn't work</h3>
          <h4 className="wsup-failure-title">The Discord-style guild UX</h4>
          <p className="cs-p">First version of guilds mimicked Discord's channel-heavy structure — categories, permissions, roles. Our mobile-first audience (primarily Free Fire and Brawl Stars players, ages 14–22) found it overwhelming. Guild creation had a 40% drop-off. Simplified to: name, game, invite link. Three steps. Drop-off cut in half.</p>
        </div>
      </section>

      {/* 05 — DECISIONS */}
      <section className="cs-sec" ref={decR}>
        <div className="cs-sec-head"><span className="stag">05 / DECISIONS</span></div>
        <h2 className="cs-h2">Design choices for a<br /><em>global</em> creator platform</h2>
        <div className="cs-corr-grid">
          <div className="cs-corr"><div className="cs-corr-tag">Creator-first, not esports-first</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Before</span>"Host tournaments" as the primary CTA</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">After</span>"Create content, build income" as the hero message</div></div><p className="cs-corr-why">Tournaments alone are a feature. Content creation is an identity. Repositioning the hero copy changed how users perceive the platform — from tool to career enabler.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Real creators, not illustrations</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>Abstract gaming illustrations</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>Real creator photos with gaming gear</div></div><p className="cs-corr-why">Aspirational but relatable. Users see real people earning from gaming — not a fantasy. The hero imagery answers "can someone like me do this?" with a visual yes.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Numbered steps as teaching</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>Feature grid or icon cards</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>Sequential numbered steps (01, 02, 03, 04)</div></div><p className="cs-corr-why">Numbers imply a journey — "start here, end there." A feature grid says "here's everything at once." For a platform with 5+ distinct features, sequential framing prevents overwhelm.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Dark theme with warm accents</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>Light or neon gaming aesthetic</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>Dark navy with blue/yellow accents</div></div><p className="cs-corr-why">Dark feels premium and gaming-native. Yellow accents (Download CTA, trophy icons) create energy without neon fatigue. The palette works across 17 countries' cultural associations.</p></div>
        </div>
      </section>

      {/* 05 — IMPACT */}
      <section className="cs-sec" ref={resultR}>
        <div className="cs-sec-head"><span className="stag">06 / IMPACT</span></div>
        <h2 className="cs-h2">From esports tool<br />to global <em>creator</em> platform</h2>
        <div className="cs-result-grid">
          <div className="cs-result"><div className="cs-result-n">11M+</div><div className="cs-result-l">Tournament registrations — #1 mobile esports platform globally</div><div className="cs-src">via company data</div></div>
          <div className="cs-result"><div className="cs-result-n">5M+</div><div className="cs-result-l">App downloads — creator tools drove organic growth</div><div className="cs-src">via company data</div></div>
          <div className="cs-result"><div className="cs-result-n">190K+</div><div className="cs-result-l">Gaming guilds — simplified creation (3 steps) cut drop-off in half</div><div className="cs-src">via company data</div></div>
          <div className="cs-result"><div className="cs-result-n">$25M</div><div className="cs-result-l">Funding raised — design execution was part of the investor story</div><div className="cs-src">via Crunchbase · Dec 2019</div></div>
        </div>
        <div className="wsup-quotes" style={{ marginTop: 24 }}>
          <div className="wsup-quote"><p className="wsup-quote-text">"game.tv hosts one tournament every minute, becoming the go-to place for amateur gamers"</p><span className="wsup-quote-source">— PR Newswire</span></div>
          <div className="wsup-quote"><p className="wsup-quote-text">"The easiest way to build community, start and manage esports tournaments"</p><span className="wsup-quote-source">— game.tv product positioning</span></div>
        </div>
        <div className="cs-reflection">
          <h3 className="cs-reflection-h">What I learned</h3>
          <p className="cs-p">Designing for a global audience taught me that UX copy matters more than visual design when crossing cultures. "Be crazy. Be cool. Be you" works everywhere because it's about identity, not features. The numbered step pattern (01→04) is universally understood regardless of language. And the hardest lesson: when pivoting a product's identity (esports → creator), change the hero first. If the landing page still says the old story, nothing else matters.</p>
        </div>
      </section>

      <div className="cs-cta">
        <Link to="/bluestacks" className="bgh">← BlueStacks</Link>
        <Link to="/" className="bdk">Back to portfolio →</Link>
      </div>
      <FOOTER />
    </div>
  );
}
