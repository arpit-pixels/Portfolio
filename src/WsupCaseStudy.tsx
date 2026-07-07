import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BRIEF, ROLE, STATS } from "./wsup-case-study-data";
import WsupCSStory from "./WsupCSStory";
import WsupCSDesign from "./WsupCSDesign";
import WsupCSScreens from "./WsupCSScreens";
import WsupCSOutcomes from "./WsupCSOutcomes";
import { InterviewModeProvider, Pill } from "./InterviewMode";
import ProcessFlow, { type FlowData } from "./ProcessFlow";
import Reveal from "./Reveal";

const WSUP_FLOW: FlowData = {
  stages: [
    { icon: "users", label: "Listen", sub: "Discord + real usage" },
    { icon: "target", label: "Prioritize", sub: "signals, not guesses" },
    { icon: "bulb", label: "Design", sub: "2–3 options per surface" },
    { icon: "ship", label: "Ship", sub: "fast, additive, safe" },
    { icon: "layout", label: "Systematize", sub: "name the design system" },
    { icon: "bolt", label: "Automate", sub: "the agent ships from it" },
  ],
  loop: { from: 5, to: 0, label: "↻ continuous — listen, design, ship, repeat" },
};

export function useR(d = 0) {
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

export default function WsupCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const heroR = useR();

  return (
    <InterviewModeProvider>
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
        <h1 className="cs-h1">Growing wsup.ai<br />into a <em>1.79M-visit AI platform</em></h1>
        <p className="cs-sub">Launched November 2024 as a simple chat app. Eighteen months later — a full AI platform at 1.79M monthly visits.<Reveal mode="pop" cue="the full picture">{BRIEF.context}</Reveal></p>
        <div className="chips" style={{ margin: "18px 0 6px" }}>
          <span className="chip">Lead Product Designer · Founding designer</span>
          <span className="chip">Nov 2024 – present</span>
          <span className="chip">Figma + Agentic AI</span>
          <span className="chip">PM · APM · Engineering</span>
        </div>
        <Reveal cue="role in full">
          <div className="cs-role-row">
            <div className="cs-role-item"><span className="cs-role-label">My role</span>{ROLE.title} — {ROLE.responsibilities}</div>
            <div className="cs-role-item"><span className="cs-role-label">Tools</span>{ROLE.tools}</div>
            <div className="cs-role-item"><span className="cs-role-label">Timeline</span>{ROLE.timeline}</div>
            <div className="cs-role-item"><span className="cs-role-label">Team</span>{ROLE.team}</div>
          </div>
        </Reveal>
        <div className="cs-meta-row">
          {STATS.map((s, i) => <div key={i} className="cs-meta"><span className="cs-mn">{s.n}</span><span className="cs-ml">{s.label}</span><span className="cs-src">via {s.src}</span></div>)}
        </div>
      </header>

      {/* Product screenshot */}
      <div className="cs-screenshots-single" style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 20px' }}>
        <img src="/cs/wsup-home-loggedin.png" alt="wsup.ai homepage with character grid, sidebar of recent chats, and category tabs" className="cs-screenshot" />
        <span className="cs-screen-label" style={{ textAlign: 'center', display: 'block', marginTop: 8 }}><a href="https://wsup.ai" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)' }}>wsup.ai</a> — Home page · Web, iOS, Android · 1.79M monthly visits</span>
      </div>

      {/* THE CHALLENGE — full-bleed block */}
      <section className="wsup-challenge-block">
        <div className="wsup-challenge-inner">
          <span className="wsup-challenge-label">THE CHALLENGE</span>
          <p className="wsup-challenge-body">
            {BRIEF.challenge}
            <Pill
              q="What did 'breaking trust' actually look like? What were you protecting?"
              a="Three concrete things. (1) The chat experience — every existing user had a relationship with at least one character. We couldn't change message rendering, model behavior, or chat layout in ways that would feel like 'their character changed.' (2) The 50 free daily credits — power users had built workflows around it. Pulling that would feel like a betrayal. (3) The Discord — users felt heard there. If features started shipping that didn't trace back to Discord conversations, they'd notice and disengage. Trust wasn't abstract; it was these specific things."
              followups={[
                { q: "Did you actually break trust at any point?", a: "Yes — the reference-image removal was a real trust break. Our most invested creators were vocal about it for weeks in Discord. We restored a workaround within two months, but we lost some users in that window. The lesson stuck: any feature touching creator identity (character images, persistent memory, creator earnings) gets a 24-hour heads-up in Discord before shipping. We don't surprise users on identity-level features anymore." },
                { q: "How do you balance that protective stance with shipping new things?", a: "By splitting the surface. Anything that touches existing user relationships (chat, memory, character images, credits) is high-care, slow rollout, advance notice. Anything genuinely new (a Stories tab, a Leaderboard, an AI image tool) is low-care — we can ship fast because users haven't built attachments to it yet. The gate is: 'does this touch what users already love or is it expanding into new territory?' Different speeds for different surfaces." },
              ]}
            />
          </p>
        </div>
      </section>

      <ProcessFlow data={WSUP_FLOW} />

      <WsupCSStory />
      <WsupCSDesign />
      <WsupCSScreens />
      <WsupCSOutcomes />

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
    </InterviewModeProvider>
  );
}
