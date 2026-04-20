import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SESSION_DATA, CORRECTIONS, PHASES, TOKENS } from "./designer-agent-data";

/* ─── HOOKS ───────────────────────────────────────────────────────────── */
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


/* ─── CORRECTION CHART ────────────────────────────────────────────────── */
function CorrectionChart() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAnimated(true); ob.unobserve(el); }
    }, { threshold: 0.3 });
    ob.observe(el);
    return () => ob.disconnect();
  }, []);
  const max = Math.max(...SESSION_DATA.map(d => d.v));

  return (
    <div ref={ref} className="cs-chart">
      <div className="cs-chart-label">Corrections per session</div>
      <div className="cs-chart-bars">
        {SESSION_DATA.map((d, i) => (
          <div key={i} className="cs-chart-col">
            <div className="cs-chart-val">{animated ? d.v : 0}</div>
            <div className="cs-chart-bar-wrap">
              <div
                className={`cs-chart-bar ${d.s === "6" ? "cs-chart-bar-spike" : d.v <= 8 ? "cs-chart-bar-low" : ""}`}
                style={{ height: animated ? `${(d.v / max) * 100}%` : "0%", transitionDelay: `${i * 80}ms` }}
              />
            </div>
            <div className="cs-chart-s">S{d.s}</div>
          </div>
        ))}
      </div>
      <div className="cs-chart-annotations">
        <span className="cs-chart-ann">← Session 6: desktop build — hardest session, 22 corrections</span>
        <span className="cs-chart-ann cs-chart-ann-good">Sessions 8–9: 6–8 corrections →</span>
      </div>
    </div>
  );
}

/* ─── CODE SNIPPET ────────────────────────────────────────────────────── */
function CodeSnippet() {
  return (
    <div className="cs-code">
      <div className="cs-code-header">
        <span className="cs-code-file">taste.md</span>
        <span className="cs-code-tag">From the agent's actual knowledge base</span>
      </div>
      <pre className="cs-code-body">{`## Text Color Hierarchy (tested rule)
- title:   100% white  — headings only
- subtitle: 80% white  — data values, active states
- body:     70% white  — copy users actually read
- small:    60% white  — secondary labels ONLY
- xsmall:   50% white  — metadata, stat labels
- dim:      40% white  — de-emphasized metadata
- xxsmall:  30% white  — legal, copyright

## Spacing Philosophy
- Mobile: push SLIMMER (negative margins > taller containers)
- Desktop: push WIDER (opposite direction — corrected 5x)
- 64px (4xl token) = standard center padding. Non-negotiable.

## Component Reuse
- Extract after 2 usages, not 3
- "Does this exist?" must be automatic BEFORE any markup
- Right sidebar reuses mobile components directly — never rebuild`}</pre>
    </div>
  );
}

/* ─── PAGE ────────────────────────────────────────────────────────────── */
export default function DesignerAgent() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const heroR = useR();
  const probR = useR();
  const howR = useR();
  const dsR = useR();
  const codeR = useR();
  const corrR = useR();
  const timeR = useR();
  const resR = useR();
  const screensR = useR();

  return (
    <div className="cs">
      <nav>
        <Link to="/" className="nlogo">← Back</Link>
        <span className="nlogo" style={{ gap: 6 }}>Designer Agent</span>
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
        <div className="cs-badge abb">CASE STUDY · AGENT_01</div>
        <h1 className="cs-h1">An AI agent that<br />designs from <em>my taste</em></h1>
        <p className="cs-sub">Not from screenshots. Not from prompts. From 134 accumulated design decisions and 100+ taste corrections — a living system that learns how I think about UI and applies it autonomously.</p>
        <div className="cs-role-row">
          <div className="cs-role-item"><span className="cs-role-label">My role</span>Built, trained, and maintain the agent end to end — architecture, knowledge schema, prompt engineering, and ongoing corrections.</div>
          <div className="cs-role-item"><span className="cs-role-label">Stack</span>Claude Code · Figma MCP · Next.js · Tailwind · Custom knowledge files (.md)</div>
          <div className="cs-role-item"><span className="cs-role-label">Timeline</span>Built Jan–Apr 2026 · 9 sessions · Actively running in production</div>
          <div className="cs-role-item"><span className="cs-role-label">Product</span><a href="https://wsup.ai" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue)" }}>wsup.ai</a> — AI chat platform (like Character.ai), 500K+ users</div>
        </div>
        <div className="cs-meta-row">
          <div className="cs-meta"><span className="cs-mn">62</span><span className="cs-ml">Components</span></div>
          <div className="cs-meta"><span className="cs-mn">142</span><span className="cs-ml">Tokens</span></div>
          <div className="cs-meta"><span className="cs-mn">134</span><span className="cs-ml">Decisions</span></div>
          <div className="cs-meta"><span className="cs-mn">12x</span><span className="cs-ml">Faster output</span></div>
        </div>
      </header>

      {/* THE PROBLEM */}
      <section className="cs-sec" ref={probR}>
        <div className="cs-sec-head"><span className="stag">01 / THE PROBLEM</span></div>
        <h2 className="cs-h2">Design systems scale components.<br />They don't scale <em>taste.</em></h2>
        <div className="cs-two-col">
          <div>
            <p className="cs-p">You can tokenize colors, spacing, and radii. You can build a component library. But when a new screen needs to be designed, someone still has to make hundreds of micro-decisions.</p>
            <p className="cs-p">How much padding here? Which text opacity? Should this be a primary or secondary button? Those decisions aren't in your Figma file. They're in your head.</p>
          </div>
          <div className="cs-problem-list">
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Manual: 4 hours per screen</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Taste lives in one person's head</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Every new designer relearns from scratch</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Figma plugins don't encode reasoning</div>
            <div className="cs-problem-item cs-problem-solved"><span className="cs-problem-check">✓</span> Solution: externalize taste into an agent</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="cs-sec" ref={howR}>
        <div className="cs-sec-head"><span className="stag">02 / HOW IT WORKS</span></div>
        <h2 className="cs-h2">Four steps, <em>zero</em> Figma</h2>
        <div className="cs-steps">
          <div className="cs-step">
            <div className="cs-step-n">01</div>
            <h3 className="cs-step-h">Load knowledge</h3>
            <p className="cs-step-p">Agent reads 9 knowledge files — taste, decisions, project rules, its own growth timeline. 134 decisions + 100 taste corrections inform every choice.</p>
            <div className="cs-step-files">
              {["taste.md", "decisions.md", "reasonings.md", "knowledge-base.md", "project-insights.md", "evolution.md", "workflow.md", "session-logs.md"].map(f => (
                <span key={f} className="cs-step-file">{f}</span>
              ))}
            </div>
          </div>
          <div className="cs-step">
            <div className="cs-step-n">02</div>
            <h3 className="cs-step-h">Design from brief</h3>
            <p className="cs-step-p">Given a product requirement, builds screens using only existing tokens and components. No reference screenshots. Knows body = 70% white, desktop padding = 64px, primary buttons never repeat.</p>
          </div>
          <div className="cs-step">
            <div className="cs-step-n">03</div>
            <h3 className="cs-step-h">Self-audit</h3>
            <p className="cs-step-p">Before presenting, runs a full audit: zero hardcoded hex, icon consistency, button sizes, spacing tokens, and automatic style guide sync.</p>
            <div className="cs-step-checks">
              {["0 hardcoded hex", "Icon consistency", "Button size validation", "Token compliance", "Style guide sync"].map(c => (
                <span key={c} className="cs-step-check"><span style={{ color: "var(--green)" }}>✓</span> {c}</span>
              ))}
            </div>
          </div>
          <div className="cs-step">
            <div className="cs-step-n">04</div>
            <h3 className="cs-step-h">Learn from corrections</h3>
            <p className="cs-step-p">After my review, every correction gets written back to the knowledge files. Next session, the agent reads updated rules and never repeats the same mistake.</p>
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM — with real screenshots */}
      <section className="cs-sec cs-sec-dark" ref={dsR}>
        <div className="cs-sec-head"><span className="stag" style={{ color: "rgba(255,255,255,.4)" }}>03 / THE SYSTEM</span></div>
        <h2 className="cs-h2" style={{ color: "white" }}>The design system <em>under the hood</em></h2>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>Every token, component, and rule lives inside the wsup.ai production project. The agent reads and writes to the same codebase that ships.</p>
        <div className="cs-token-grid">
          {TOKENS.map((t, i) => (
            <div key={i} className="cs-token-card">
              <div className="cs-token-n">{t.count}+</div>
              <div className="cs-token-l">{t.label}</div>
            </div>
          ))}
        </div>
        <div className="cs-color-bar">
          {[["#4a3ec6","Accent"],["#82a1ff","Secondary"],["#de5a48","Alert"],["#ffc32a","Warning"],["#b3d661","Success"],["#0397eb","Idle"],["#67c3bb","Info"]].map(([bg,name]) => (
            <div key={name} className="cs-swatch-wrap">
              <div className="cs-swatch" style={{ background: bg }} />
              <span className="cs-swatch-label">{name}</span>
            </div>
          ))}
        </div>
        <div className="cs-screenshots-dark">
          <img src="/cs/style-guide.png" alt="wsup.ai style guide" className="cs-screenshot" />
        </div>
      </section>

      {/* ACTUAL CODE FROM THE AGENT */}
      <section className="cs-sec" ref={codeR}>
        <div className="cs-sec-head"><span className="stag">04 / THE KNOWLEDGE</span></div>
        <h2 className="cs-h2">This is what the agent <em>actually reads</em></h2>
        <p className="cs-p">Not prompts I write each time. Persistent knowledge files that grow with every session. Here's a real excerpt:</p>
        <CodeSnippet />
      </section>

      {/* WHAT IT LEARNED */}
      <section className="cs-sec" ref={corrR}>
        <div className="cs-sec-head"><span className="stag">05 / CORRECTIONS</span></div>
        <h2 className="cs-h2">Real corrections, <em>real rules</em></h2>
        <p className="cs-p">Every rule came from a real correction during a real design session. Not guesses — accumulated taste from iterative review.</p>
        <div className="cs-corr-grid">
          {CORRECTIONS.map((c, i) => (
            <div key={i} className="cs-corr">
              <div className="cs-corr-tag">{c.rule}</div>
              <div className="cs-corr-row">
                <div className="cs-corr-before"><span className="cs-corr-label">Before</span>{c.before}</div>
                <div className="cs-corr-arrow">→</div>
                <div className="cs-corr-after"><span className="cs-corr-label">After</span>{c.after}</div>
              </div>
              <p className="cs-corr-why">{c.why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GROWTH — with chart */}
      <section className="cs-sec" ref={timeR}>
        <div className="cs-sec-head"><span className="stag">06 / GROWTH</span></div>
        <h2 className="cs-h2">From pixel-matching to <em>autonomous design</em></h2>
        <p className="cs-p">The agent evolves continuously through distinct capability phases. Corrections drop as the knowledge base grows.</p>
        <CorrectionChart />
        <div className="cs-timeline">
          {PHASES.map((p, i) => (
            <div key={i} className="cs-phase">
              <div className="cs-phase-n">{p.n}</div>
              <div className="cs-phase-body">
                <div className="cs-phase-top">
                  <h3 className="cs-phase-h">{p.name}</h3>
                  <span className="cs-phase-ses">Sessions {p.sessions}</span>
                </div>
                <p className="cs-phase-p">{p.desc}</p>
                <div className="cs-phase-bar-row">
                  <div className="cs-phase-bar"><div className="cs-phase-fill" style={{ width: `${[70, 85, 85, 40][i]}%` }} /></div>
                  <span className="cs-phase-corr">~{p.corrections} corrections/screen</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCREENS THE AGENT HELPED BUILD */}
      <section className="cs-sec cs-sec-dark" ref={screensR}>
        <div className="cs-sec-head"><span className="stag" style={{ color: "rgba(255,255,255,.4)" }}>07 / OUTPUT</span></div>
        <h2 className="cs-h2" style={{ color: "white" }}>Screens the agent <em>helped build</em></h2>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>These are real production screens from <a href="https://wsup.ai" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue)" }}>wsup.ai</a> — designed with the agent, reviewed by me, and shipped.</p>
        <div className="cs-screen-gallery">
          <div className="cs-screen-item">
            <img src="/cs/explore.png" alt="Explore page" className="cs-screenshot" />
            <span className="cs-screen-label">Explore — agent built the card grid, spacing, and discovery layout from tokens alone</span>
          </div>
          <div className="cs-screen-item">
            <img src="/cs/chat.png" alt="Chat page" className="cs-screenshot" />
            <span className="cs-screen-label">Chat — agent applied text hierarchy rules (100%/80%/70%/60% white) and message spacing</span>
          </div>
          <div className="cs-screen-item">
            <img src="/cs/profile.png" alt="Profile page" className="cs-screenshot" />
            <span className="cs-screen-label">Profile — first fully autonomous design accepted with 6 corrections (Session 9)</span>
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section className="cs-sec" ref={resR}>
        <div className="cs-sec-head"><span className="stag">08 / RESULT</span></div>
        <h2 className="cs-h2">The agent isn't replacing me.<br />It's <em>scaling</em> me.</h2>
        <div className="cs-result-grid">
          <div className="cs-result"><div className="cs-result-n">4h → 20m</div><div className="cs-result-l">Screen design time reduced 12x — timed on equivalent complexity screens, same token set</div></div>
          <div className="cs-result"><div className="cs-result-n">134</div><div className="cs-result-l">Design decisions internalized and applied autonomously</div></div>
          <div className="cs-result"><div className="cs-result-n">0</div><div className="cs-result-l">Hardcoded hex values — token discipline enforced by agent</div></div>
          <div className="cs-result"><div className="cs-result-n">Self-improving</div><div className="cs-result-l">Detects its own knowledge gaps, researches fixes, tracks growth</div></div>
        </div>
        <p className="cs-p" style={{ marginTop: 32 }}>I didn't just use AI — I architected an AI system that compounds my design judgment over time. The same architecture pattern powers the <Link to="/reddit-agent" style={{ color: "var(--blue)" }}>Reddit Growth Agent</Link> — proving this loop is domain-agnostic.</p>
        <div className="cs-reflection">
          <h3 className="cs-reflection-h">What I'd do differently</h3>
          <p className="cs-p">I'd add a visual diff layer — automatically generating before/after comparisons for each correction so the knowledge base captures not just rules but visual context. I'd also explore multi-designer knowledge merging: can two designers' taste files produce a shared system that's better than either alone?</p>
        </div>
      </section>

      {/* CTA */}
      <div className="cs-cta">
        <Link to="/wsup-design" className="bgh">← wsup.ai</Link>
        <Link to="/reddit-agent" className="bdk">Next: Reddit Agent →</Link>
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
