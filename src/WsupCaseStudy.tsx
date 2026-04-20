import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { STATS, PROBLEMS, COMPETITORS, JOURNEYS, TOKENS, TEXT_HIERARCHY, USER_QUOTES, PROCESS, WHAT_FAILED, LEARNINGS } from "./wsup-case-study-data";

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

export default function WsupCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const heroR = useR(), probR = useR(), researchR = useR(), processR = useR(),
    screenR = useR(), systemR = useR(), resultR = useR();

  return (
    <div className="cs">
      <nav>
        <Link to="/" className="nlogo">← Back</Link>
        <span className="nlogo" style={{ gap: 6 }}>wsup.ai</span>
        <div className="nav-actions">
          <a href="mailto:arpit.uxdesign@gmail.com" className="nav-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Email</a>
          <a href="https://www.linkedin.com/in/arpit-yadav-1185ba135/" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
          <a href="https://github.com/arpityadav-bst/wsup-screen-library" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
          <a href="/arpit-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg> Resume</a>
          <a href="mailto:arpit.uxdesign@gmail.com" className="ncta">Get in touch →</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="cs-hero" ref={heroR}>
        <div className="cs-badge abb">CASE STUDY · PRODUCT DESIGN</div>
        <h1 className="cs-h1">Designing the UX for<br />an AI platform used by <em>1M+ people</em></h1>
        <p className="cs-sub">wsup.ai is an AI character companion platform — users discover characters, chat, create their own, and build communities. I designed the complete experience across web and mobile as the lead product designer.</p>
        <div className="cs-role-row">
          <div className="cs-role-item"><span className="cs-role-label">My role</span>Lead Product Designer — UX, design system, all screens, developer handoff · Now shifted to agentic design process</div>
          <div className="cs-role-item"><span className="cs-role-label">Tools</span>Figma · FigJam · Figma Variables · Auto Layout · Component Properties</div>
          <div className="cs-role-item"><span className="cs-role-label">Timeline</span>Jan 2026 – present · Actively shipping</div>
          <div className="cs-role-item"><span className="cs-role-label">Team</span>PM (Ashish Pathak) · APM (Arastu Kumar) · Engineering team</div>
        </div>
        <div className="cs-meta-row">
          {STATS.map((s, i) => <div key={i} className="cs-meta"><span className="cs-mn">{s.n}</span><span className="cs-ml">{s.label}</span><span className="cs-src">via {s.src}</span></div>)}
        </div>
      </header>

      {/* Product screenshot */}
      <div className="cs-screenshots-single" style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 20px' }}>
        <img src="/cs/wsup-d-explore.png" alt="wsup.ai explore page" className="cs-screenshot" />
        <span className="cs-screen-label" style={{ textAlign: 'center', display: 'block', marginTop: 8 }}><a href="https://wsup.ai" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)' }}>wsup.ai</a> — Explore page · Web, iOS, Android · 1M+ monthly visits</span>
      </div>

      {/* 01 — CHALLENGE */}
      <section className="cs-sec" ref={probR}>
        <div className="cs-sec-head"><span className="stag">01 / THE CHALLENGE</span></div>
        <h2 className="cs-h2">A product growing faster<br />than its <em>design</em></h2>
        <div className="cs-two-col">
          <div>
            <p className="cs-p">wsup.ai was gaining traction — 1M+ monthly visits, users across the US, Czechia, and UK. But the experience had gaps. New users landed on a content-heavy dark page with no guidance. 20+ character categories were flat. The credit system interrupted chat. Desktop had dead space.</p>
            <p className="cs-p">The product had features. It didn't have a design language.</p>
          </div>
          <div className="cs-problem-list">
            {PROBLEMS.map((p, i) => (
              <div key={i} className={`cs-problem-item${p.solved ? ' cs-problem-solved' : ''}`}>
                <span className={p.solved ? 'cs-problem-check' : 'cs-problem-x'}>{p.icon}</span> {p.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — RESEARCH */}
      <section className="cs-sec" ref={researchR}>
        <div className="cs-sec-head"><span className="stag">02 / RESEARCH</span></div>
        <h2 className="cs-h2">How does the <em>competition</em><br />handle this?</h2>
        <p className="cs-p">I analyzed 5 direct competitors before designing. The pattern: everyone was building features. Nobody was building a consistent experience.</p>
        <div className="wsup-comp-grid">
          {COMPETITORS.map((c, i) => (
            <div key={i} className="wsup-comp-card">
              <div className="wsup-comp-group">{c.name}</div>
              <p className="wsup-comp-examples"><strong style={{ color: 'var(--ink)' }}>Strength:</strong> {c.strength}</p>
              <p className="wsup-comp-examples" style={{ marginTop: 6 }}><strong style={{ color: 'var(--blue)' }}>Gap:</strong> {c.gap}</p>
            </div>
          ))}
        </div>
        {/* User journeys inline */}
        <h3 className="cs-h3" style={{ marginTop: 36 }}>Mapping the core journeys</h3>
        <p className="cs-p">Four paths define the product. I mapped each before touching pixels — understanding where users spend time and where they drop off.</p>
        <div className="wsup-flows">
          {JOURNEYS.map((j, i) => (
            <div key={i} className="wsup-flow-card">
              <div className="wsup-flow-name">{j.name}</div>
              <div className="wsup-flow-steps">{j.desc}</div>
              <div className="wsup-flow-insight">{j.why}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — PROCESS */}
      <section className="cs-sec" ref={processR}>
        <div className="cs-sec-head"><span className="stag">03 / PROCESS</span></div>
        <h2 className="cs-h2">How I actually <em>worked</em></h2>
        <div className="wsup-process">
          {PROCESS.map((p, i) => (
            <div key={i} className="wsup-phase">
              <div className="wsup-phase-left">
                <div className="wsup-phase-n">{p.phase}</div>
                <div className="wsup-phase-dur">{p.duration}</div>
              </div>
              <div className="wsup-phase-right">
                <h3 className="wsup-phase-name">{p.name}</h3>
                <p className="wsup-phase-desc">{p.desc}</p>
                <p className="wsup-phase-collab"><strong>Collaboration:</strong> {p.collab}</p>
              </div>
            </div>
          ))}
        </div>
        {/* What didn't work */}
        <div className="wsup-failure">
          <h3 className="wsup-failure-h">What didn't work</h3>
          <h4 className="wsup-failure-title">{WHAT_FAILED.title}</h4>
          <p className="cs-p">{WHAT_FAILED.story}</p>
          <p className="cs-p" style={{ marginTop: 12 }}><strong style={{ color: 'var(--green)' }}>Resolution:</strong> {WHAT_FAILED.resolution}</p>
        </div>
      </section>

      {/* 04 — KEY SCREENS (with decisions merged in) */}
      <section className="cs-sec cs-sec-dark" ref={screenR}>
        <div className="cs-sec-head"><span className="stag" style={{ color: "rgba(255,255,255,.4)" }}>04 / KEY SCREENS</span></div>
        <h2 className="cs-h2" style={{ color: "white" }}>Every screen solves<br />a <em>specific</em> problem</h2>

        {/* Explore */}
        <h3 className="cs-h3" style={{ color: 'white', marginTop: 32 }}>Explore — Discovery at scale</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>20+ categories, hundreds of characters. Horizontal category tabs keep options scannable. Character cards show rank + chat count — social proof drives discovery better than curation. Filtering by category (e.g., Anime) instantly narrows without a page reload.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 16 }}>
          <img src="/cs/wsup-d-anime.png" alt="Anime category filtered view" className="cs-screenshot" />
          <span className="cs-screen-label">Explore — category tabs, character grid with rank + chat count, sidebar navigation</span>
        </div>

        {/* Chat */}
        <h3 className="cs-h3" style={{ color: 'white', marginTop: 40 }}>Chat — Where users live</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>90% of user time is here. Character profile in the right sidebar prevents context switching. Left sidebar shows recent chats — turning navigation into a relationship manager, not just a menu.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 16 }}>
          <img src="/cs/wsup-chat-desktop.png" alt="Chat desktop" className="cs-screenshot" />
          <span className="cs-screen-label">Three-column layout — recent chats, conversation, character profile</span>
        </div>

        {/* Credits */}
        <h3 className="cs-h3" style={{ color: 'white', marginTop: 40 }}>Credits — Monetization that teaches</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>Daily streak rewards for chat, story creation, and image generation. Each claim teaches a product feature. Shown on page visit — never mid-conversation.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 16 }}>
          <img src="/cs/wsup-d-stories.png" alt="Credits popup" className="cs-screenshot" />
          <span className="cs-screen-label">Daily credits — streak counter, feature-linked rewards</span>
        </div>

        {/* Mobile */}
        <h3 className="cs-h3" style={{ color: 'white', marginTop: 40 }}>Mobile — Designed separately, not stretched</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>Sidebar becomes bottom nav. Cards adapt to 2-column grid. Spacing compresses — mobile pushes slim, desktop pushes wide. Opposite directions, both intentional.</p>
        <div className="wsup-mobile-gallery">
          <div className="cs-screen-item" style={{ maxWidth: 220 }}>
            <img src="/cs/wsup-m-home-clean.png" alt="Mobile explore with category tabs and character grid" className="cs-screenshot" />
            <span className="cs-screen-label">Explore — categories, character grid, bottom nav</span>
          </div>
          <div className="cs-screen-item" style={{ maxWidth: 220 }}>
            <img src="/cs/wsup-m-chat-clean.png" alt="Mobile chat with AI character" className="cs-screenshot" />
            <span className="cs-screen-label">Chat — full-screen conversation, character art</span>
          </div>
        </div>
      </section>

      {/* 05 — DESIGN SYSTEM */}
      <section className="cs-sec" ref={systemR}>
        <div className="cs-sec-head"><span className="stag">05 / DESIGN SYSTEM</span></div>
        <h2 className="cs-h2">The invisible layer<br />that makes it <em>consistent</em></h2>
        <p className="cs-p">Dark themes amplify every inconsistency. I built a strict token system — 90+ colors, 14 spacing values, 4 radii, 6 shadows. Every value named, purposeful, documented.</p>
        <div className="cs-token-grid">
          {TOKENS.map((t, i) => <div key={i} className="cs-token-card"><div className="cs-token-n">{t.count}</div><div className="cs-token-l">{t.category}</div></div>)}
        </div>
        <h3 className="cs-h3" style={{ marginTop: 32 }}>The text readability system</h3>
        <p className="cs-p">70% white is the floor for readable text — not 60% (industry default). I tested with real chat content. This one decision affected every screen.</p>
        <div className="wsup-text-hierarchy" style={{ background: '#171717', borderRadius: 12, padding: 20, marginTop: 16 }}>
          {TEXT_HIERARCHY.map((t, i) => (
            <div key={i} className="wsup-th-row">
              <span className="wsup-th-sample" style={{ color: t.color }}>Aa</span>
              <span className="wsup-th-level" style={{ color: 'rgba(255,255,255,.4)' }}>{t.level}</span>
              <span className="wsup-th-opacity" style={{ color: 'rgba(255,255,255,.3)' }}>{t.opacity}</span>
              <span className="wsup-th-use" style={{ color: 'rgba(255,255,255,.5)' }}>{t.use}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 06 — IMPACT */}
      <section className="cs-sec" ref={resultR}>
        <div className="cs-sec-head"><span className="stag">06 / IMPACT</span></div>
        <h2 className="cs-h2">From fragmented product<br />to <em>coherent</em> experience</h2>
        <div className="cs-result-grid">
          <div className="cs-result"><div className="cs-result-n">1M+</div><div className="cs-result-l">Monthly visits — design stayed consistent as product scaled</div><div className="cs-src">via Semrush · Mar 2026</div></div>
          <div className="cs-result"><div className="cs-result-n">17 min</div><div className="cs-result-l">Avg session — engagement metric across web + mobile</div><div className="cs-src">via Semrush · Mar 2026</div></div>
          <div className="cs-result"><div className="cs-result-n">3.9★</div><div className="cs-result-l">App Store rating</div><div className="cs-src">via App Store</div></div>
          <div className="cs-result"><div className="cs-result-n">&lt;30s</div><div className="cs-result-l">First visit to first chat</div><div className="cs-src">via live flow</div></div>
        </div>
        {/* User quotes */}
        <div className="wsup-quotes">
          {USER_QUOTES.map((q, i) => (
            <div key={i} className="wsup-quote">
              <p className="wsup-quote-text">"{q.quote}"</p>
              <span className="wsup-quote-source">— {q.source}</span>
            </div>
          ))}
        </div>
        <h3 className="cs-h3" style={{ marginTop: 32 }}>What I learned</h3>
        <div className="wsup-learnings">
          {LEARNINGS.map((l, i) => <div key={i} className="wsup-learning"><span className="wsup-learning-n">{String(i + 1).padStart(2, '0')}</span><p className="wsup-learning-text">{l}</p></div>)}
        </div>
        <div className="cs-reflection">
          <h3 className="cs-reflection-h">What I'd do differently</h3>
          <p className="cs-p">The 20+ category tabs work for power users who know what they want. But first-time visitors told us they felt like "walking into a store with no signs." I'd explore progressive disclosure — show 5-6 hero categories on first visit, expand to full set after the first chat. I'd also A/B test the credit popup timing. It currently shows on page visit, but showing it after the first AI response might convert better — the user has experienced value before being asked to invest.</p>
        </div>
      </section>

      <div className="cs-cta">
        <Link to="/" className="bgh">← Back to portfolio</Link>
        <Link to="/designer-agent" className="bdk">Next: Designer Agent →</Link>
      </div>

      <footer>
        <div className="fl">Arpit Yadav — AI-Native Designer</div>
        <div className="fr">
          <a href="mailto:arpit.uxdesign@gmail.com" className="foot-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Email</a>
          <a href="https://www.linkedin.com/in/arpit-yadav-1185ba135/" target="_blank" rel="noopener noreferrer" className="foot-link">LinkedIn</a>
          <a href="/arpit-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="foot-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg> Resume</a>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
