import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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


/* ─── KARMA CHART ─────────────────────────────────────────────────────── */
const KARMA_DATA = [
  { day: "Day 1", v: 1 },
  { day: "Day 2", v: 29 },
  { day: "Day 3", v: 85 },
  { day: "Day 3 eve", v: 515 },
  { day: "Day 4", v: 1100 },
];

function KarmaChart() {
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
  const max = 1100;

  return (
    <div ref={ref} className="cs-chart">
      <div className="cs-chart-label">Karma growth over 4 days</div>
      <div className="cs-chart-bars">
        {KARMA_DATA.map((d, i) => (
          <div key={i} className="cs-chart-col">
            <div className="cs-chart-val">{animated ? d.v.toLocaleString() : 0}</div>
            <div className="cs-chart-bar-wrap">
              <div
                className={`cs-chart-bar ${i === KARMA_DATA.length - 1 ? "cs-chart-bar-low" : ""}`}
                style={{ height: animated ? `${Math.max((d.v / max) * 100, 2)}%` : "0%", transitionDelay: `${i * 120}ms` }}
              />
            </div>
            <div className="cs-chart-s">{d.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── CODE SNIPPET ────────────────────────────────────────────────────── */
function LessonsSnippet() {
  return (
    <div className="cs-code">
      <div className="cs-code-header">
        <span className="cs-code-file">lessons-learned.md</span>
        <span className="cs-code-tag">100+ lessons extracted from live posting</span>
      </div>
      <pre className="cs-code-body">{`## What works
- Long-form specific replies > generic one-liners
- Citing real details (expense numbers, benchmarks) = trust
- Early posting on "Rising" threads = 10x karma potential
- Reply to existing comments 60%, top-level 40%

## What doesn't
- r/ChatGPT rejects unsupported capability claims
- r/LocalLLaMA demands benchmarks, not opinions
- Short agreement comments ("this!") = downvotes
- Posting on "Hot" threads = buried under 500 comments

## Behavioral rules
- Variable cooldowns: log-normal distribution, not uniform
- Comment length mix: 40% short, 40% medium, 20% long
- Return to threads 2–4 hours post for reply engagement
- Upvote 2–3 posts per session (HARD REQUIREMENT)`}</pre>
    </div>
  );
}

/* ─── DATA ────────────────────────────────────────────────────────────── */
const STEPS = [
  { n: "01", h: "Research", p: "Scans subreddits for high-value rising threads — posts with momentum but few comments. Targets threads where a genuine, specific answer adds real value." },
  { n: "02", h: "Draft", p: "Generates context-aware comments. Long-form specific replies outperform generic one-liners. Cites details, shares experience, avoids bot signatures." },
  { n: "03", h: "Safety check", p: "Every comment runs through compliance — slop detection, subreddit rules, cooldown timers, and a circuit breaker that pauses on any removal." },
  { n: "04", h: "Post & learn", p: "Tracks performance after posting. Downvoted comments get analyzed. Patterns get extracted into lessons. The system improves every cycle." },
];

const SAFETY = [
  "4-layer shadowban detection",
  "Circuit breaker — pauses on first removal",
  "15-minute minimum cooldown between posts",
  "Variable comment lengths (40% short, 40% medium, 20% long)",
  "Log-normal cooldown distribution (not uniform random)",
  "15 comments/day hard cap",
  "90/10 rule — 90% value, 10% promotion",
];

const TOP_COMMENTS = [
  { sub: "r/pcgaming", topic: "NZXT rental PC scam breakdown", karma: "472" },
  { sub: "r/pcmasterrace", topic: "Console gaming rental model critique", karma: "351" },
  { sub: "r/singularity", topic: "Terence Tao on AI reasoning", karma: "88" },
  { sub: "r/pcgaming", topic: "Cloud gaming latency analysis", karma: "56" },
];

/* ─── PAGE ────────────────────────────────────────────────────────────── */
export default function RedditAgent() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const heroR = useR();
  const probR = useR();
  const howR = useR();
  const resR = useR();
  const lessonsR = useR();
  const safeR = useR();
  const takeR = useR();

  return (
    <div className="cs">
      <nav>
        <Link to="/" className="nlogo">← Back</Link>
        <span className="nlogo" style={{ gap: 6 }}>Reddit Agent</span>
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
        <div className="cs-badge abg">LAB PROJECT · AGENT_02</div>
        <p className="cs-lab-note">Lab projects apply agentic thinking outside of design — testing architecture patterns in real-world systems.</p>
        <h1 className="cs-h1">An AI agent that grew<br /><em>1 → 1,100 karma</em> in 4 days</h1>
        <p className="cs-sub">Not spam. Not bots. Genuinely useful comments on high-value threads — researched, context-aware, and safety-controlled. Agentic thinking applied beyond design.</p>
        <div className="cs-role-row">
          <div className="cs-role-item"><span className="cs-role-label">My role</span>Designed the agentic loop, safety architecture, and self-learning pipeline end to end.</div>
          <div className="cs-role-item"><span className="cs-role-label">Stack</span>Claude Code · Python · ADB (Android Debug Bridge) · PRAW research → discarded</div>
          <div className="cs-role-item"><span className="cs-role-label">Timeline</span>Built Apr 2026 · 4-day active run · System paused, learnings documented</div>
          <div className="cs-role-item"><span className="cs-role-label">Why Reddit</span>Tested whether agentic architecture (research → act → learn → improve) transfers beyond design into community engagement.</div>
        </div>
        <div className="cs-meta-row">
          <div className="cs-meta"><span className="cs-mn">1,100</span><span className="cs-ml">Karma earned</span></div>
          <div className="cs-meta"><span className="cs-mn">45</span><span className="cs-ml">Comments posted</span></div>
          <div className="cs-meta"><span className="cs-mn">100+</span><span className="cs-ml">Lessons learned</span></div>
          <div className="cs-meta"><span className="cs-mn">0</span><span className="cs-ml">Bans or removals</span></div>
        </div>
      </header>

      {/* PROFILE PROOF */}
      <div className="cs-screenshots-single" style={{ maxWidth: 800, margin: '0 auto', padding: '0 20px 40px' }}>
        <img src="/cs/reddit-profile.png" alt="Reddit profile showing karma growth" className="cs-screenshot" />
        <span className="cs-screen-label" style={{ textAlign: 'center', display: 'block', marginTop: 8 }}>Live Reddit profile — 1,100+ karma from 45 organic comments</span>
      </div>

      {/* THE PROBLEM */}
      <section className="cs-sec" ref={probR}>
        <div className="cs-sec-head"><span className="stag">01 / THE QUESTION</span></div>
        <h2 className="cs-h2">Can agentic architecture work <em>outside</em> design?</h2>
        <div className="cs-two-col">
          <div>
            <p className="cs-p">The <Link to="/designer-agent" style={{ color: "var(--blue)" }}>Designer Agent</Link> proved that a research → act → learn → improve loop could scale design judgment. Same architecture pattern — proving the loop is domain-agnostic, not just a design trick.</p>
            <p className="cs-p">Reddit was the test. Building organic community presence requires research, context-awareness, and continuous learning — the same loop, different content.</p>
          </div>
          <div className="cs-problem-list">
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Manual commenting: hours for minimal reach</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Bots and spam get banned instantly</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> Generic replies add no value</div>
            <div className="cs-problem-item"><span className="cs-problem-x">✗</span> No feedback loop — same mistakes repeat</div>
            <div className="cs-problem-item cs-problem-solved"><span className="cs-problem-check">✓</span> Hypothesis: agentic loop with safety controls</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="cs-sec" ref={howR}>
        <div className="cs-sec-head"><span className="stag">02 / HOW IT WORKS</span></div>
        <h2 className="cs-h2">Research, draft, check, <em>learn</em></h2>
        <div className="cs-steps">
          {STEPS.map((s, i) => (
            <div key={i} className="cs-step">
              <div className="cs-step-n">{s.n}</div>
              <h3 className="cs-step-h">{s.h}</h3>
              <p className="cs-step-p">{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="cs-sec" ref={resR}>
        <div className="cs-sec-head"><span className="stag">03 / RESULTS</span></div>
        <h2 className="cs-h2">The <em>numbers</em></h2>
        <KarmaChart />
        <h3 className="cs-h3">Top performing comments</h3>
        <div className="ra-comments">
          {TOP_COMMENTS.map((c, i) => (
            <div key={i} className="ra-comment">
              <div className="ra-comment-left">
                <div className="ra-upvote">▲</div>
                <div className="ra-karma">{c.karma}</div>
                <div className="ra-downvote">▼</div>
              </div>
              <div className="ra-comment-right">
                <div className="ra-sub-pill">{c.sub}</div>
                <p className="ra-topic">{c.topic}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="cs-p" style={{ marginTop: 24 }}>The agent learned that long-form, specific replies citing real details consistently outperform short generic responses.</p>
        <div className="cs-screen-gallery" style={{ marginTop: 32 }}>
          <div className="cs-screen-item">
            <img src="/cs/reddit-comment1.png" alt="Top comment — 473 karma on r/pcmasterrace" className="cs-screenshot" />
            <span className="cs-screen-label">473 karma — r/pcmasterrace thread on console gaming</span>
          </div>
          <div className="cs-screen-item">
            <img src="/cs/reddit-comment2.png" alt="Top comment — 349 karma on r/pcgaming" className="cs-screenshot" />
            <span className="cs-screen-label">349 karma — r/pcgaming thread on Kickstarter MMOs</span>
          </div>
        </div>
        <div className="cs-screenshots-single" style={{ marginTop: 16 }}>
          <img src="/cs/reddit-top.png" alt="Top performing comments overview" className="cs-screenshot" />
          <span className="cs-screen-label">Top comments sorted by karma — all organic, zero removals</span>
        </div>
      </section>

      {/* LESSONS */}
      <section className="cs-sec" ref={lessonsR}>
        <div className="cs-sec-head"><span className="stag">04 / KNOWLEDGE</span></div>
        <h2 className="cs-h2">What the agent <em>actually learned</em></h2>
        <p className="cs-p">Every lesson was extracted from real posting data — not assumptions. The agent tracks what works, what fails, and adjusts its behavior autonomously.</p>
        <LessonsSnippet />
      </section>

      {/* SAFETY */}
      <section className="cs-sec cs-sec-dark" ref={safeR}>
        <div className="cs-sec-head"><span className="stag" style={{ color: "rgba(255,255,255,.4)" }}>05 / SAFETY FIRST</span></div>
        <h2 className="cs-h2" style={{ color: "white" }}>Built to be <em>safe,</em> not just fast</h2>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>Automated posting is ethically charged. My stance: if the output isn't genuinely useful to the community, it shouldn't exist. Every guardrail enforces value-first behavior — not evasion, but contribution.</p>
        <div className="cs-safety-list">
          {SAFETY.map((s, i) => (
            <div key={i} className="cs-safety-item">
              <span className="cs-safety-check">✓</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TAKEAWAY */}
      <section className="cs-sec" ref={takeR}>
        <div className="cs-sec-head"><span className="stag">06 / TAKEAWAY</span></div>
        <h2 className="cs-h2">What this <em>proved</em></h2>
        <div className="cs-result-grid">
          <div className="cs-result"><div className="cs-result-n">Transferable</div><div className="cs-result-l">The research → act → learn → improve loop works beyond design — same architecture, different domain</div></div>
          <div className="cs-result"><div className="cs-result-n">Self-improving</div><div className="cs-result-l">100+ lessons extracted autonomously. The system gets better without manual tuning.</div></div>
          <div className="cs-result"><div className="cs-result-n">Safety-first</div><div className="cs-result-l">Zero bans, zero removals. Guardrails aren't optional — they're the architecture.</div></div>
          <div className="cs-result"><div className="cs-result-n">Systems thinking</div><div className="cs-result-l">A designer who can architect autonomous systems across domains — that's what AI-native means.</div></div>
        </div>
        <div className="cs-reflection">
          <h3 className="cs-reflection-h">What I'd do differently</h3>
          <p className="cs-p">Add A/B testing between comment styles before scaling — the agent learned what works through trial and error, but a structured experiment would have gotten there faster with less noise. I'd also build a sentiment analysis layer to measure comment quality beyond karma.</p>
        </div>
      </section>

      {/* CTA */}
      <div className="cs-cta">
        <Link to="/designer-agent" className="bgh">← Designer Agent</Link>
        <Link to="/nowgg" className="bdk">Next: now.gg →</Link>
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
