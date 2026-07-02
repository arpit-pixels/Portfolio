import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CORRECTIONS, PHASES, TOKENS } from "./designer-agent-data";
import AgentTerminal from "./AgentTerminal";
import Reveal from "./Reveal";
import { CorrectionChart, CodeSnippet } from "./DesignerAgentBits";

/* ─── HOOKS ───────────────────────────────────────────────────────────── */
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
        <p className="cs-sub">Not from screenshots. Not from prompts. From 250+ accumulated design decisions and 60+ codified taste rules — a living system that learns how I think about UI and applies it autonomously.</p>
        <div className="chips" style={{ margin: "18px 0 6px" }}>
          <span className="chip">Built & trained end to end</span>
          <span className="chip">Claude Code · Figma MCP</span>
          <span className="chip">22+ sessions · in production</span>
          <span className="chip">wsup.ai</span>
        </div>
        <Reveal cue="role in full">
          <div className="cs-role-row">
            <div className="cs-role-item"><span className="cs-role-label">My role</span>Built, trained, and maintain the agent end to end — the architecture, the knowledge files, the prompts, and the corrections that keep it improving.</div>
            <div className="cs-role-item"><span className="cs-role-label">Stack</span>Claude Code · Figma MCP · Next.js · Tailwind · Custom knowledge files (.md)</div>
            <div className="cs-role-item"><span className="cs-role-label">Timeline</span>Built Jan–Apr 2026 · 22+ sessions · Actively running in production</div>
            <div className="cs-role-item"><span className="cs-role-label">Product</span><a href="https://wsup.ai" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue)" }}>wsup.ai</a> — AI chat platform (like Character.ai), 1M+ monthly visits</div>
          </div>
        </Reveal>
        <div className="cs-meta-row">
          <div className="cs-meta"><span className="cs-mn">90+</span><span className="cs-ml">Components</span></div>
          <div className="cs-meta"><span className="cs-mn">80+</span><span className="cs-ml">Tokens</span></div>
          <div className="cs-meta"><span className="cs-mn">250+</span><span className="cs-ml">Decisions</span></div>
          <div className="cs-meta"><span className="cs-mn">12x</span><span className="cs-ml">Faster output</span></div>
        </div>
      </header>

      <div className="agterm">
        <AgentTerminal />
        <span className="cs-screen-label" style={{ textAlign: 'center', display: 'block', marginTop: 10 }}>The agent at work — reads the wsup.ai design system, designs from tokens, audits itself, then writes what it learned back.</span>
      </div>

      {/* THE PROBLEM */}
      <section className="cs-sec" ref={probR}>
        <div className="cs-sec-head"><span className="stag">01 / THE PROBLEM</span></div>
        <h2 className="cs-h2">Design systems scale components.<br />They don't scale <em>taste.</em></h2>
        <p className="cs-p">You can tokenize colors, spacing, and radii. But every new screen still needs hundreds of small decisions — and those live in a designer's head, not the Figma file.<Reveal mode="pop" cue="the problem"><span className="rv2-p">You can tokenize colors, spacing, and radii. You can build a component library. But when a new screen needs to be designed, someone still has to make hundreds of small decisions.</span><span className="rv2-p">How much padding here? Which text opacity? Primary or secondary button? Those decisions aren't in your Figma file — they're in your head, and every new designer relearns them from scratch. The agent's job is to get them out of my head and into a system that can apply them on its own.</span></Reveal></p>
      </section>

      {/* HOW IT WORKS */}
      <section className="cs-sec" ref={howR}>
        <div className="cs-sec-head"><span className="stag">02 / HOW IT WORKS</span></div>
        <h2 className="cs-h2">Four steps, <em>zero</em> Figma</h2>
        <div className="cs-steps">
          <div className="cs-step">
            <div className="cs-step-n">01</div>
            <h3 className="cs-step-h">Load knowledge<Reveal mode="pop" cue="how">Agent reads 8 knowledge files — taste, decisions, project rules, its own growth timeline. 250+ decisions and 60+ taste rules inform every choice.</Reveal></h3>
            <div className="cs-step-files">
              {["taste.md", "decisions.md", "reasonings.md", "knowledge-base.md", "project-insights.md", "evolution.md", "workflow.md", "session-logs.md"].map(f => (
                <span key={f} className="cs-step-file">{f}</span>
              ))}
            </div>
          </div>
          <div className="cs-step">
            <div className="cs-step-n">02</div>
            <h3 className="cs-step-h">Design from brief</h3>
            <p className="cs-step-p">No reference screenshots — only tokens, components, and learned taste.<Reveal mode="pop" cue="how">Given a product requirement, builds screens using only existing tokens and components. No reference screenshots. Knows body = 70% white, desktop padding = 64px, primary buttons never repeat.</Reveal></p>
          </div>
          <div className="cs-step">
            <div className="cs-step-n">03</div>
            <h3 className="cs-step-h">Self-audit<Reveal mode="pop" cue="how">Before presenting, runs a full audit: zero hardcoded hex, icon consistency, button sizes, spacing tokens, and automatic style guide sync.</Reveal></h3>
            <div className="cs-step-checks">
              {["0 hardcoded hex", "Icon consistency", "Button size validation", "Token compliance", "Style guide sync"].map(c => (
                <span key={c} className="cs-step-check"><span style={{ color: "var(--green)" }}>✓</span> {c}</span>
              ))}
            </div>
          </div>
          <div className="cs-step">
            <div className="cs-step-n">04</div>
            <h3 className="cs-step-h">Learn from corrections</h3>
            <p className="cs-step-p">Every correction becomes a rule. The same mistake never ships twice.<Reveal mode="pop" cue="how">After my review, every correction gets written back to the knowledge files. Next session, the agent reads updated rules and never repeats the same mistake.</Reveal></p>
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
                <div className="cs-corr-after"><span className="cs-corr-label">After</span>{c.after}<Reveal mode="pop" cue="why">{c.why}</Reveal></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GROWTH — with chart */}
      <section className="cs-sec" ref={timeR}>
        <div className="cs-sec-head"><span className="stag">06 / GROWTH</span></div>
        <h2 className="cs-h2">From pixel-matching to <em>autonomous design</em></h2>
        <p className="cs-p">The agent improves with every session. As the knowledge base grows, corrections drop.</p>
        <CorrectionChart />
        <div className="cs-timeline">
          {PHASES.map((p, i) => (
            <div key={i} className="cs-phase">
              <div className="cs-phase-n">{p.n}</div>
              <div className="cs-phase-body">
                <div className="cs-phase-top">
                  <h3 className="cs-phase-h">{p.name}<Reveal mode="pop" cue="this phase">{p.desc}</Reveal></h3>
                  <span className="cs-phase-ses">Sessions {p.sessions}</span>
                </div>
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
            <img src="/cs/explore.png" alt="Explore page — card grid and discovery layout" className="cs-screenshot" />
          </div>
          <div className="cs-screen-item">
            <img src="/cs/chat.png" alt="Chat page — text hierarchy and message spacing" className="cs-screenshot" />
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
          <div className="cs-result"><div className="cs-result-n">250+</div><div className="cs-result-l">Design decisions internalized and applied autonomously</div></div>
          <div className="cs-result"><div className="cs-result-n">0</div><div className="cs-result-l">Hardcoded hex values — token discipline enforced by agent</div></div>
          <div className="cs-result"><div className="cs-result-n">Self-improving</div><div className="cs-result-l">Detects its own knowledge gaps, researches fixes, tracks growth</div></div>
        </div>
        <p className="cs-p" style={{ marginTop: 32 }}>I didn't just use AI — I built an AI system that compounds my design judgment over time. The same approach powers the <Link to="/reddit-agent" style={{ color: "var(--blue)" }}>Reddit Growth Agent</Link> — proof it works well beyond design.</p>
        <div className="cs-reflection">
          <h3 className="cs-reflection-h">What I'd do differently</h3>
          <p className="cs-p">A visual diff layer, and multi-designer taste merging.<Reveal mode="pop" cue="both, unpacked">I'd add a visual diff layer — automatically generating before/after comparisons for each correction so the knowledge base captures not just rules but visual context. I'd also explore multi-designer knowledge merging: can two designers' taste files produce a shared system that's better than either alone?</Reveal></p>
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
