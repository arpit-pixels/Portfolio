import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { KarmaChart, LessonsSnippet } from "./RedditAgentBits";

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


/* ─── DATA ────────────────────────────────────────────────────────────── */
const STEPS = [
  { n: "01", h: "Discover", p: "Semantic discovery: expands the goal into ~8 search angles, ranks subreddits by where the conversation actually is, then filters threads for genuine relevance. Targets rising threads where a specific answer adds real value." },
  { n: "02", h: "Read the room", p: "For image, video, or link posts it screenshots the post and describes the media with Claude vision (or reads the article) before writing a word. It never comments blind." },
  { n: "03", h: "Draft", p: "Claude (Opus) writes from the full knowledge base — 200 lessons, per-subreddit culture notes, banned patterns. Human-realistic length mix; auto-rewrites anything that trips the AI-slop detector." },
  { n: "04", h: "Comply", p: "~18 safety gates before anything posts — subreddit rules (heuristic + LLM), banned topics, slop, promo voice — plus a circuit breaker that pauses the whole system on a single removal or bot accusation." },
  { n: "05", h: "Post & learn", p: "Types through an Android accessibility keyboard and confirms the comment actually landed (editor dismissed + API check). Then it tracks karma and replies and writes new lessons back to its own files." },
];

const SAFETY_SHORT = [
  "~18-gate compliance", "Circuit breaker", "Bot-accusation pipeline", "Human-like cooldowns",
  "Real length mix", "Warm-up caps", "Shadowban detection", "Audit journal",
];
const SAFETY = [
  "~18-gate compliance check — subreddit rules, banned topics, doxxing, slop, promo voice (heuristic + LLM)",
  "Circuit breaker — 72-hour pause on a single removal or two bot accusations",
  "Bot-accusation pipeline — detects it, analyzes it, writes a rule so it never repeats",
  "Variable, human-like cooldowns (log-normal, not fixed intervals)",
  "Comment-length mix drawn from real human comment data, not a template",
  "Daily comment cap that scales with account age (warm-up schedule)",
  "4-layer shadowban detection",
  "Audit journal — refuses to act until every knowledge file has been read",
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
        <p className="cs-lab-note">Lab projects take the same agent approach outside design — testing it in real systems.</p>
        <h1 className="cs-h1">An AI agent that grew <em>1 → 1,100 karma</em><br />in 4 days — then kept getting smarter</h1>
        <p className="cs-sub">Not spam. Not bots. 95 genuinely useful comments across 14 subreddits — and 200 lessons it wrote for itself.<Reveal mode="pop" cue="the full picture">What started as a 4-day sprint from 1 to 1,100 karma grew into a self-improving system — semantic thread discovery, a ~18-gate safety layer, and a multi-platform core with Reddit live and Discord scaffolded.</Reveal></p>
        <div className="chips" style={{ margin: "18px 0 6px" }}>
          <span className="chip">Built end to end</span>
          <span className="chip">Claude Code · Python · ADB</span>
          <span className="chip">95 comments · 14 subreddits</span>
          <span className="chip">0 bans</span>
        </div>
        <Reveal cue="role in full">
          <div className="cs-role-row">
            <div className="cs-role-item"><span className="cs-role-label">My role</span>Built and shipped the agent end to end — the loop, the safety system, and the self-learning pipeline.</div>
            <div className="cs-role-item"><span className="cs-role-label">Stack</span>Claude Code (Opus + Sonnet) · Python · ADB + Portal accessibility posting · Reddit JSON API · Claude vision for media · PRAW → discarded</div>
            <div className="cs-role-item"><span className="cs-role-label">Timeline</span>Built Apr 2026, evolved through May 2026 · 95 comments across 14 subreddits · Reddit live, more platforms scaffolded</div>
            <div className="cs-role-item"><span className="cs-role-label">Why Reddit</span>Tested whether the same loop (research → act → learn → improve) transfers beyond design into community growth.</div>
          </div>
        </Reveal>
        <div className="cs-meta-row">
          <div className="cs-meta"><span className="cs-mn">1,245</span><span className="cs-ml">Account karma</span></div>
          <div className="cs-meta"><span className="cs-mn">95</span><span className="cs-ml">Comments posted</span></div>
          <div className="cs-meta"><span className="cs-mn">200</span><span className="cs-ml">Lessons learned</span></div>
          <div className="cs-meta"><span className="cs-mn">0</span><span className="cs-ml">Bans or removals</span></div>
        </div>
      </header>

      {/* PROFILE PROOF */}
      <div className="cs-screenshots-single" style={{ maxWidth: 800, margin: '0 auto', padding: '0 20px 40px' }}>
        <img src="/cs/reddit-profile.png" alt="Reddit profile showing karma growth" className="cs-screenshot" />
        <span className="cs-screen-label" style={{ textAlign: 'center', display: 'block', marginTop: 8 }}>Live Reddit profile — 1,100+ karma, every comment organic</span>
      </div>

      {/* THE PROBLEM */}
      <section className="cs-sec" ref={probR}>
        <div className="cs-sec-head"><span className="stag">01 / THE QUESTION</span></div>
        <h2 className="cs-h2">Can the same agent loop work <em>outside</em> design?</h2>
        <p className="cs-p">The <Link to="/designer-agent" style={{ color: "var(--blue)" }}>Designer Agent</Link> proved a research → act → learn → improve loop could scale design judgment. The question here: was that a design trick, or does the same loop work somewhere completely different?<Reveal mode="pop" cue="why Reddit">Reddit was the test. Earning real community presence takes research, context, and constant learning — the same loop, different content. The bet was that an agent loop with genuine safety controls could earn karma the way a thoughtful person does, in a place where bots and generic replies get banned fast.</Reveal></p>
      </section>

      {/* HOW IT WORKS */}
      <section className="cs-sec" ref={howR}>
        <div className="cs-sec-head"><span className="stag">02 / HOW IT WORKS</span></div>
        <h2 className="cs-h2">Five steps, one <em>loop</em></h2>
        <div className="cs-steps">
          {STEPS.map((s, i) => (
            <div key={i} className="cs-step">
              <div className="cs-step-n">{s.n}</div>
              <h3 className="cs-step-h">{s.h}<Reveal mode="pop" cue="how">{s.p}</Reveal></h3>
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
        <p className="cs-p" style={{ marginTop: 24 }}>Long-form, specific replies citing real details consistently outperform short generic ones — in r/pcgaming, the agent's comments average roughly +86 karma each.</p>
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
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>If the output isn't genuinely useful to the community, it shouldn't exist. Eight guardrails enforce that.</p>
        <div className="chips" style={{ marginTop: 14 }}>
          {SAFETY_SHORT.map((s, i) => <span key={i} className="chip">{s}</span>)}
        </div>
        <Reveal cue="all eight, in full" tone="dark">
          <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>Automated posting is ethically charged. My stance: if the output isn't genuinely useful to the community, it shouldn't exist. Every guardrail enforces value-first behavior — not evasion, but contribution.</p>
          <div className="cs-safety-list">
            {SAFETY.map((s, i) => (
              <div key={i} className="cs-safety-item">
                <span className="cs-safety-check">✓</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* TAKEAWAY */}
      <section className="cs-sec" ref={takeR}>
        <div className="cs-sec-head"><span className="stag">06 / TAKEAWAY</span></div>
        <h2 className="cs-h2">What this <em>proved</em></h2>
        <div className="cs-result-grid">
          <div className="cs-result"><div className="cs-result-n">Transferable</div><div className="cs-result-l">The research → act → learn → improve loop works beyond design — same loop, different domain</div></div>
          <div className="cs-result"><div className="cs-result-n">200</div><div className="cs-result-l">Lessons the agent extracted from its own posting and wrote back to itself — no manual tuning</div></div>
          <div className="cs-result"><div className="cs-result-n">0 bans</div><div className="cs-result-l">Zero removals across 95 comments — every one cleared the safety gates first</div></div>
          <div className="cs-result"><div className="cs-result-n">Multi-platform</div><div className="cs-result-l">One shared safety + learning core; Reddit live, Discord scaffolded, more to follow</div></div>
        </div>
        <div className="cs-reflection">
          <h3 className="cs-reflection-h">What I'd do differently</h3>
          <p className="cs-p">A/B test comment styles, and measure quality beyond karma.<Reveal mode="pop" cue="both, unpacked">Add A/B testing between comment styles before scaling — the agent learned what works through trial and error, but a structured experiment would have gotten there faster with less noise. I'd also build a sentiment analysis layer to measure comment quality beyond karma.</Reveal></p>
        </div>
      </section>

      {/* CTA */}
      <div className="cs-cta">
        <Link to="/designer-agent" className="bgh">← Designer Agent</Link>
        <Link to="/content-studio" className="bdk">Next: Content Studio →</Link>
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
