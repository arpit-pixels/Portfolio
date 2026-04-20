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
  const heroR = useR(), probR = useR(), resR = useR(), screenR = useR(), processR = useR(), decR = useR(), resultR = useR();

  return (
    <div className="cs">
      <NAV />

      <header className="cs-hero" ref={heroR}>
        <div className="cs-badge abb">CASE STUDY · PRODUCT DESIGN</div>
        <h1 className="cs-h1">Designing for the world's<br />largest Android emulator — <em>500M+ users</em></h1>
        <p className="cs-sub">BlueStacks lets users play Android games on PC and Mac. 1 billion downloads. I led UX across the desktop app, web platform, game discovery, and cloud gaming experience.</p>
        <div className="cs-role-row">
          <div className="cs-role-item"><span className="cs-role-label">My role</span>Lead Product Designer — desktop app UX, web platform, game discovery, category system, download flows</div>
          <div className="cs-role-item"><span className="cs-role-label">Product</span><a href="https://www.bluestacks.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue)" }}>bluestacks.com</a> — Android emulator + cloud gaming · Backed by Intel, AMD, Samsung, Qualcomm</div>
          <div className="cs-role-item"><span className="cs-role-label">Timeline</span>2019–2024 · Led UX across BlueStacks 5, BlueStacks X, and BlueStacks Air</div>
          <div className="cs-role-item"><span className="cs-role-label">Scale</span>500M+ users · 1B+ downloads · 2M+ Android games · #1 Android emulator globally</div>
        </div>
        <div className="cs-meta-row">
          <div className="cs-meta"><span className="cs-mn">500M+</span><span className="cs-ml">Users worldwide</span><span className="cs-src">via BlueStacks press · 2021</span></div>
          <div className="cs-meta"><span className="cs-mn">1B+</span><span className="cs-ml">Downloads</span><span className="cs-src">via PR Newswire · 2021</span></div>
          <div className="cs-meta"><span className="cs-mn">2M+</span><span className="cs-ml">Games available</span><span className="cs-src">via bluestacks.com</span></div>
          <div className="cs-meta"><span className="cs-mn">#1</span><span className="cs-ml">Android emulator</span><span className="cs-src">industry consensus</span></div>
        </div>
      </header>

      <div className="cs-screenshots-single" style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 20px' }}>
        <img src="/cs/bluestacks-home.png" alt="BlueStacks homepage" className="cs-screenshot" />
        <span className="cs-screen-label" style={{ textAlign: 'center', display: 'block', marginTop: 8 }}>BlueStacks — Play Android games on PC, Mac, or cloud</span>
      </div>

      {/* 01 — CHALLENGE */}
      <section className="cs-sec" ref={probR}>
        <div className="cs-sec-head"><span className="stag">01 / THE CHALLENGE</span></div>
        <h2 className="cs-h2">Serving 500M users<br />across <em>three</em> platforms</h2>
        <div className="cs-two-col">
          <div>
            <p className="cs-p">BlueStacks started as a desktop emulator. Then came cloud gaming (BlueStacks X). Then Mac with Apple Silicon (BlueStacks Air). Each product serves the same user intent — play Android games on a bigger screen — but with fundamentally different technical constraints and user expectations.</p>
            <p className="cs-p">The UX challenge: how do you present download, cloud play, and Mac support without overwhelming users who just want to play a game?</p>
          </div>
          <div className="cs-problem-list">
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Three products (App, Cloud, Air) with overlapping use cases</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> 2M+ game library made discovery overwhelming</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Users ranged from tech-savvy gamers to first-time emulator users</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Download flow had to compete with cloud instant-play</div>
            <div className="cs-problem-item cs-problem-solved"><span className="cs-problem-check">✓</span> Unified homepage that adapts: download for power users, cloud for instant play</div>
          </div>
        </div>
      </section>

      {/* 02 — APPROACH */}
      <section className="cs-sec" ref={resR}>
        <div className="cs-sec-head"><span className="stag">02 / APPROACH</span></div>
        <h2 className="cs-h2">One entry point,<br /><em>multiple</em> paths</h2>
        <p className="cs-p">Instead of forcing users to choose a product first, I designed a unified landing that adapts to intent:</p>
        <div className="cs-steps">
          <div className="cs-step"><div className="cs-step-n">01</div><h3 className="cs-step-h">Hero with dual CTA</h3><p className="cs-step-p">"Download BlueStacks" for power users who want the full emulator. A featured game "Play on PC" CTA for users who came for a specific title. Two intents, one hero.</p></div>
          <div className="cs-step"><div className="cs-step-n">02</div><h3 className="cs-step-h">Trust bar</h3><p className="cs-step-p">Backed by Intel, AMD, Qualcomm, Samsung, Ignition, Korea Investment Partners — logos visible immediately below the fold. For an emulator product, trust is everything.</p></div>
          <div className="cs-step"><div className="cs-step-n">03</div><h3 className="cs-step-h">Category browsing</h3><p className="cs-step-p">Top Games, Exclusive, RPG, Strategy, Action, Gamepad — horizontal tab navigation for 2M+ games. Each category curated to show high-quality titles, not every game in the library.</p></div>
          <div className="cs-step"><div className="cs-step-n">04</div><h3 className="cs-step-h">Product feature cards</h3><p className="cs-step-p">BlueStacks Air (Mac), BlueStacks Store (rewards), Performance, 2M+ Games — each card addresses a different user question without requiring navigation.</p></div>
        </div>
      </section>

      {/* 03 — KEY SCREENS */}
      <section className="cs-sec cs-sec-dark" ref={screenR}>
        <div className="cs-sec-head"><span className="stag" style={{ color: "rgba(255,255,255,.4)" }}>03 / KEY SCREENS</span></div>
        <h2 className="cs-h2" style={{ color: "white" }}>Gaming-grade visual <em>design</em></h2>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 32 }}>Hero — Character-driven, game-forward</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>3D game characters flank the hero CTA — the page feels like a game launcher, not a software download page. The gradient shifts from green to blue, creating an immersive gaming atmosphere. Trust logos (Intel, AMD, Samsung) visible immediately below.</p>
        <div className="wsup-screen-pair">
          <div className="cs-screen-item">
            <img src="/cs/bluestacks-sub1.png" alt="BlueStacks features page showing emulator capabilities" className="cs-screenshot" />
            <span className="cs-screen-label">Features — emulator capabilities, game showcase, download CTA</span>
          </div>
          <div className="cs-screen-item">
            <img src="/cs/bluestacks-scroll.png" alt="BlueStacks category browsing with game cards" className="cs-screenshot" />
            <span className="cs-screen-label">Browse — category tabs, curated game grid</span>
          </div>
        </div>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 40 }}>Rewards & store</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>BlueStacks Store with cashback, discounts, and rewards creates a monetization layer that feels like a benefit, not a paywall. The store is integrated into the main navigation — always one click away.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 16 }}>
          <img src="/cs/bluestacks-scroll2.png" alt="BlueStacks store and rewards" className="cs-screenshot" />
          <span className="cs-screen-label">Store integration — rewards, game discovery, latest releases</span>
        </div>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 40 }}>Mobile — Download-first experience</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>Mobile users get a streamlined download flow. Hero adapts, categories stay browsable, trust signals remain visible.</p>
        <div className="wsup-mobile-row">
          <div className="cs-screen-item" style={{ maxWidth: 220 }}>
            <img src="/cs/bluestacks-m-home.png" alt="BlueStacks mobile with hero CTA and categories" className="cs-screenshot" />
            <span className="cs-screen-label">Mobile — hero CTA, category browsing, trust logos</span>
          </div>
        </div>
      </section>

      {/* 04 — PROCESS */}
      <section className="cs-sec" ref={processR}>
        <div className="cs-sec-head"><span className="stag">04 / PROCESS</span></div>
        <h2 className="cs-h2">Designing at scale<br />means designing <em>carefully</em></h2>
        <div className="wsup-process">
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">01</div><div className="wsup-phase-dur">2019–20</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Desktop app UX (BlueStacks 5)</h3><p className="wsup-phase-desc">Redesigned the desktop emulator experience — game library, multi-instance manager, performance settings. Focus on reducing perceived complexity for non-technical users while preserving power-user features.</p><p className="wsup-phase-collab"><strong>Collaboration:</strong> Worked with engineering on performance-perception UX — making 10-second loads feel acceptable through progressive loading states and game art previews.</p></div></div>
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">02</div><div className="wsup-phase-dur">2021–22</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Cloud gaming (BlueStacks X)</h3><p className="wsup-phase-desc">Designed the web-based cloud gaming experience — instant play without downloads. The biggest UX shift: from "install then play" to "click and play." Required rethinking every flow.</p><p className="wsup-phase-collab"><strong>Collaboration:</strong> Close work with the now.gg team (same parent company) to align the cloud player UX across both platforms.</p></div></div>
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">03</div><div className="wsup-phase-dur">2023–24</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Web platform & store</h3><p className="wsup-phase-desc">Redesigned bluestacks.com as a unified entry point. Dual CTA strategy (download vs. instant play), category browsing, trust signals, and the BlueStacks Store with rewards and cashback.</p><p className="wsup-phase-collab"><strong>Collaboration:</strong> A/B tested hero CTAs with marketing. "Download" alone lost 15% of users who wanted instant play. Dual CTA captured both intents.</p></div></div>
        </div>
        <div className="wsup-failure">
          <h3 className="wsup-failure-h">What didn't work</h3>
          <h4 className="wsup-failure-title">The feature-first homepage</h4>
          <p className="cs-p">Early versions of bluestacks.com led with emulator features — multi-instance, macro recording, key mapping. Technically accurate but emotionally dead. Users don't buy features, they buy outcomes ("play Android games on my PC"). Rewriting the hero from "Advanced Features" to "Play Android games on PC, Mac or try instantly from our cloud" with game characters flanking the CTA increased download rates.</p>
        </div>
      </section>

      {/* 05 — DECISIONS */}
      <section className="cs-sec" ref={decR}>
        <div className="cs-sec-head"><span className="stag">05 / DECISIONS</span></div>
        <h2 className="cs-h2">Design choices at<br /><em>500M</em> user scale</h2>
        <div className="cs-corr-grid">
          <div className="cs-corr"><div className="cs-corr-tag">Character art over product screenshots</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>Show the emulator UI in the hero</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>3D game characters as hero visuals</div></div><p className="cs-corr-why">Users don't come for the emulator — they come for the games. Leading with game characters frames BlueStacks as a gaming platform, not a technical tool.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Trust logos above the fold</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>Trust signals on a separate page</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>Intel, AMD, Samsung, Qualcomm logos visible immediately</div></div><p className="cs-corr-why">Emulators carry "is this safe?" anxiety. Enterprise-grade backers visible within 2 scrolls dissolves trust objections before they form.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Dual CTA strategy</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>Single "Download" CTA</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>Download + Featured game side-by-side</div></div><p className="cs-corr-why">Not all users want the full emulator. Some came for one specific game. The featured game CTA captures intent-driven users who would bounce from a generic download page.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Gradient over flat dark</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>Flat dark background like now.gg</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>Green-to-blue gradient with depth</div></div><p className="cs-corr-why">BlueStacks is a premium product, not a utility. The gradient adds dimensionality and separates it visually from browser-based competitors. It feels like game packaging.</p></div>
        </div>
      </section>

      {/* 05 — IMPACT */}
      <section className="cs-sec" ref={resultR}>
        <div className="cs-sec-head"><span className="stag">06 / IMPACT</span></div>
        <h2 className="cs-h2">Design at the <em>scale</em><br />of half a billion users</h2>
        <div className="cs-result-grid">
          <div className="cs-result"><div className="cs-result-n">500M+</div><div className="cs-result-l">Users — largest mobile gaming community in the world</div><div className="cs-src">via BlueStacks press · 2021</div></div>
          <div className="cs-result"><div className="cs-result-n">1B+</div><div className="cs-result-l">Total downloads across all versions</div><div className="cs-src">via PR Newswire · 2021</div></div>
          <div className="cs-result"><div className="cs-result-n">#1</div><div className="cs-result-l">Android emulator globally — maintained through multiple redesigns</div><div className="cs-src">industry consensus</div></div>
          <div className="cs-result"><div className="cs-result-n">3 products</div><div className="cs-result-l">Unified UX across App Player, Cloud (X), and Mac (Air)</div></div>
        </div>
        <div className="wsup-quotes" style={{ marginTop: 24 }}>
          <div className="wsup-quote"><p className="wsup-quote-text">"BlueStacks kept the top spot in the Android emulator market by releasing major updates that focused on performance and user experience"</p><span className="wsup-quote-source">— QuikNotes 2026 review</span></div>
          <div className="wsup-quote"><p className="wsup-quote-text">"The fastest, lightest and highest rated Android emulator and cloud gaming platform"</p><span className="wsup-quote-source">— BlueStacks product positioning</span></div>
        </div>
        <div className="cs-reflection">
          <h3 className="cs-reflection-h">What I learned</h3>
          <p className="cs-p">At 500M users, every design change is a risk. I learned to validate with data before shipping, design for the 80% case while not breaking the 20%, and that trust signals aren't optional for download products — they're as important as the download button. The dual CTA pattern (download + instant play) was a revelation: don't force users into one path when they arrive with different intents.</p>
        </div>
      </section>

      <div className="cs-cta">
        <Link to="/nowgg" className="bgh">← now.gg</Link>
        <Link to="/gametv" className="bdk">Next: game.tv →</Link>
      </div>
      <FOOTER />
    </div>
  );
}
