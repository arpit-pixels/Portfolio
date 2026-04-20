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
  const heroR = useR(), probR = useR(), resR = useR(), screenR = useR(), processR = useR(), decR = useR(), resultR = useR();

  return (
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

      {/* 01 — CHALLENGE */}
      <section className="cs-sec" ref={probR}>
        <div className="cs-sec-head"><span className="stag">01 / THE CHALLENGE</span></div>
        <h2 className="cs-h2">How do you make 1,000 games<br />feel <em>discoverable?</em></h2>
        <div className="cs-two-col">
          <div>
            <p className="cs-p">Cloud gaming removes the install barrier — but creates a new one: choice overload. With 1,000+ games available instantly, users need to find the right game in seconds, not minutes. The UX challenge isn't technical — it's curatorial.</p>
            <p className="cs-p">Additionally, the platform serves wildly different users: casual mobile gamers on Chromebooks, hardcore players on desktop PCs, and kids on tablets. One interface, many contexts.</p>
          </div>
          <div className="cs-problem-list">
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> 1,000+ games with no clear navigation hierarchy</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Users ranged from casual (Chromebook kids) to hardcore (PC gamers)</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> "Play in browser" needed to feel instant and native, not laggy or web-like</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Dark gaming UI had to balance immersion with readability</div>
            <div className="cs-problem-item cs-problem-solved"><span className="cs-problem-check">✓</span> Built a discovery system that scales: trending, categories, personalization</div>
          </div>
        </div>
      </section>

      {/* 02 — RESEARCH */}
      <section className="cs-sec" ref={resR}>
        <div className="cs-sec-head"><span className="stag">02 / APPROACH</span></div>
        <h2 className="cs-h2">Discovery architecture for<br /><em>instant</em> play</h2>
        <p className="cs-p">I structured game discovery in three layers — each serving a different user intent:</p>
        <div className="cs-steps">
          <div className="cs-step"><div className="cs-step-n">01</div><h3 className="cs-step-h">Hot Games carousel</h3><p className="cs-step-p">Trending games as avatar circles at the top — visual, immediate, no reading required. Users who know what's popular tap and play in seconds.</p></div>
          <div className="cs-step"><div className="cs-step-n">02</div><h3 className="cs-step-h">Curated sections</h3><p className="cs-step-p">Top Games, Popular Games, More Games — progressive disclosure. Each section surfaces different games, reducing the "same 10 games" problem.</p></div>
          <div className="cs-step"><div className="cs-step-n">03</div><h3 className="cs-step-h">Category browsing</h3><p className="cs-step-p">Explore by Categories at the bottom for intent-driven users. Simulation, RPG, Action, Strategy — when users know what genre they want.</p></div>
          <div className="cs-step"><div className="cs-step-n">04</div><h3 className="cs-step-h">Search</h3><p className="cs-step-p">Persistent search bar at the top for users who know the exact game. Instant, always available, keyboard-first.</p></div>
        </div>
      </section>

      {/* 03 — KEY SCREENS */}
      <section className="cs-sec cs-sec-dark" ref={screenR}>
        <div className="cs-sec-head"><span className="stag" style={{ color: "rgba(255,255,255,.4)" }}>03 / KEY SCREENS</span></div>
        <h2 className="cs-h2" style={{ color: "white" }}>From discovery to <em>playing</em></h2>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 32 }}>Home — Three-layer discovery</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>Hot Games avatars at top for trending, card grid for browsing, categories for intent-driven navigation. The right sidebar shows a live character chat (wsup.ai integration) — cross-product engagement while browsing.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 16 }}>
          <img src="/cs/nowgg-scroll.png" alt="now.gg popular games and category browsing" className="cs-screenshot" />
          <span className="cs-screen-label">Home — trending avatars, Top Games grid, Popular Games, AI chat sidebar</span>
        </div>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 40 }}>Game detail — One-click play</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>Full-bleed game art, prominent "Play in browser" CTA, rating, category tags. The page converts — minimal friction between "interested" and "playing." Popular games section below keeps users exploring.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 16 }}>
          <img src="/cs/nowgg-sub1.png" alt="Game detail with play button and art" className="cs-screenshot" />
          <span className="cs-screen-label">Game detail — full-bleed art, single pink CTA, rating, related games</span>
        </div>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 40 }}>Mobile — Gaming on any device</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>Same game library, adapted for touch. Avatar carousel stays, cards go full-width, navigation simplifies.</p>
        <div className="wsup-mobile-row">
          <div className="cs-screen-item" style={{ maxWidth: 220 }}>
            <img src="/cs/nowgg-m-home.png" alt="now.gg mobile with trending and game grid" className="cs-screenshot" />
            <span className="cs-screen-label">Mobile — trending avatars, game grid, touch-first</span>
          </div>
        </div>
      </section>

      {/* 04 — PROCESS */}
      <section className="cs-sec" ref={processR}>
        <div className="cs-sec-head"><span className="stag">04 / PROCESS</span></div>
        <h2 className="cs-h2">How I <em>approached</em> this</h2>
        <div className="wsup-process">
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">01</div><div className="wsup-phase-dur">Month 1</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Competitive audit</h3><p className="wsup-phase-desc">Analyzed GeForce NOW, Xbox Cloud, Luna, and Steam Link. Key finding: all prioritized technical performance over discovery. None had a compelling browsing experience — they assumed users already knew what to play.</p><p className="wsup-phase-collab"><strong>Collaboration:</strong> Worked with PM to define "time to first game" as the north-star metric. Under 30 seconds was the target.</p></div></div>
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">02</div><div className="wsup-phase-dur">Month 2–3</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Discovery architecture</h3><p className="wsup-phase-desc">Designed the three-layer system: trending (avatars), curated (card sections), categories (genre tabs). Tested card sizes — larger cards with game art converted better than dense lists.</p><p className="wsup-phase-collab"><strong>Collaboration:</strong> Pushed back on a "search-first" design that PM initially wanted. Data showed 70% of users browse, only 30% search. Discovery-first won.</p></div></div>
          <div className="wsup-phase"><div className="wsup-phase-left"><div className="wsup-phase-n">03</div><div className="wsup-phase-dur">Month 4+</div></div><div className="wsup-phase-right"><h3 className="wsup-phase-name">Game detail & iteration</h3><p className="wsup-phase-desc">Designed game detail pages with "Play in browser" as the single primary CTA. Iterated on the sidebar — tried game info panels, social features, and eventually landed on wsup.ai character chat for cross-product engagement.</p><p className="wsup-phase-collab"><strong>Collaboration:</strong> Integrated wsup.ai team's API to embed character chat. Required close coordination on loading states and fallback UX.</p></div></div>
        </div>
        <div className="wsup-failure">
          <h3 className="wsup-failure-h">What didn't work</h3>
          <h4 className="wsup-failure-title">The search-first homepage</h4>
          <p className="cs-p">First iteration put search front and center — like a Google for games. Looked clean, tested poorly. Users who don't know what to play (the majority) stared at an empty search bar. Switching to a browsing-first layout with trending games at the top increased game starts by showing users what's popular before they have to decide.</p>
        </div>
      </section>

      {/* 05 — DECISIONS */}
      <section className="cs-sec" ref={decR}>
        <div className="cs-sec-head"><span className="stag">05 / DECISIONS</span></div>
        <h2 className="cs-h2">Design choices that<br /><em>shaped</em> the product</h2>
        <div className="cs-corr-grid">
          <div className="cs-corr"><div className="cs-corr-tag">Dark immersive UI</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Why not light</span>Gaming platforms feel native in dark</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>Full dark theme with vibrant game art as the color source</div></div><p className="cs-corr-why">Let the game art pop. The UI recedes. Gradient backgrounds (purple/pink) add warmth without competing with game visuals.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Avatar circles for trending</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>List or card grid for trending</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>Circular avatars in a horizontal row</div></div><p className="cs-corr-why">Circles feel social (Instagram stories mental model). They scan faster than cards and take less vertical space. Hot/fire emoji adds urgency.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Pink CTA for "Play"</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>Blue or white CTA</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>Hot pink "Play in browser" button</div></div><p className="cs-corr-why">Pink stands out against dark backgrounds without feeling corporate. It matches the brand gradient and creates a consistent "action" color across the platform.</p></div>
          <div className="cs-corr"><div className="cs-corr-tag">Cross-product sidebar</div><div className="cs-corr-row"><div className="cs-corr-before"><span className="cs-corr-label">Alternative</span>Separate apps, separate UX</div><div className="cs-corr-arrow">→</div><div className="cs-corr-after"><span className="cs-corr-label">Decision</span>wsup.ai character chat embedded in sidebar</div></div><p className="cs-corr-why">Users waiting for games to load engage with AI characters. Cross-product engagement increases session time and introduces wsup.ai organically.</p></div>
        </div>
      </section>

      {/* 05 — IMPACT */}
      <section className="cs-sec" ref={resultR}>
        <div className="cs-sec-head"><span className="stag">06 / IMPACT</span></div>
        <h2 className="cs-h2">Making cloud gaming<br />feel <em>instant</em></h2>
        <div className="cs-result-grid">
          <div className="cs-result"><div className="cs-result-n">100M+</div><div className="cs-result-l">Cloud gaming users — platform scaled while UX stayed consistent</div><div className="cs-src">via PR Newswire · Mar 2024</div></div>
          <div className="cs-result"><div className="cs-result-n">~10M</div><div className="cs-result-l">Monthly visits — discovery-first design drives repeat usage</div><div className="cs-src">via company data</div></div>
          <div className="cs-result"><div className="cs-result-n">1,000+</div><div className="cs-result-l">Games browsable through a structured three-layer system</div><div className="cs-src">via now.gg catalog</div></div>
          <div className="cs-result"><div className="cs-result-n">0 installs</div><div className="cs-result-l">Click-to-play UX — instant in browser on any device</div></div>
        </div>
        <div className="wsup-quotes" style={{ marginTop: 24 }}>
          <div className="wsup-quote"><p className="wsup-quote-text">"You can run apps or start playing games online in your browser — no downloads needed"</p><span className="wsup-quote-source">— AboutChromebooks review</span></div>
          <div className="wsup-quote"><p className="wsup-quote-text">"Start a game on their PC and pick it up again on their mobile phone without losing progress"</p><span className="wsup-quote-source">— DifferenceInsights review</span></div>
        </div>
        <div className="cs-reflection">
          <h3 className="cs-reflection-h">What I learned</h3>
          <p className="cs-p">Cloud gaming UX isn't about the cloud — it's about making the cloud invisible. The moment users think about latency, servers, or streaming quality, the design has failed. I also learned that discovery beats search for gaming platforms — 70% of users browse, only 30% search. Lead with what's popular, not an empty input field.</p>
        </div>
      </section>

      <div className="cs-cta">
        <Link to="/" className="bgh">← Back to portfolio</Link>
        <Link to="/bluestacks" className="bdk">Next: BlueStacks →</Link>
      </div>
      <FOOTER />
    </div>
  );
}
