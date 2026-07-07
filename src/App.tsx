import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import EducationCerts from "./EducationCerts";
import HeroShowcase from "./HeroShowcase";
import Terminal from "./HeroTerminal";
import HobbyChannel from "./HobbyChannel";
import Reveal from "./Reveal";

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
const STACK = [
  ["◈", "Figma", "Design systems, components, tokens — my primary design tool"],
  ["⬡", "Claude Code", "Build and ship autonomous AI agents for design and growth workflows"],
  ["❋", "React", "Production UI for wsup.ai — 132 custom components"],
  ["⊞", "Next.js", "App Router, SSR, Vercel deployments for wsup.ai"],
  ["⟐", "Tailwind", "Token-first config — 80+ semantic color tokens, custom spacing scale"],
  ["◉", "TypeScript", "Full type safety across all components and hooks"],
  ["▦", "Storybook", "Component documentation and isolated development"],
  ["⟁", "MagicPath", "AI-powered design exploration and rapid prototyping"],
  ["◎", "Notion", "Case studies, design documentation, project knowledge bases"],
  ["⬡", "Figma MCP", "Wired Claude Code to Figma — AI reads and writes design files"],
];
const WORKS = [
  { n: "BlueStacks", a: "B", yr: "2019–24", role: "Product Designer", p1: "World's #1 Android emulator — 300M+ users.", p2: "I owned the redesign of bluestacks.com, modernizing the homepage and the game landing-page template that runs across thousands of SEO pages.", url: "https://bluestacks.com", cs: "/bluestacks", img: "/cs/bluestacks-home.png" },
  { n: "now.gg", a: "n", yr: "2019–24", role: "Lead Product Designer", p1: "Cloud gaming platform — 100M+ users, ~10M monthly visits.", p2: "Led UX across game discovery, detail pages, and instant browser play.", url: "https://now.gg", cs: "/nowgg", img: "/cs/nowgg-home.png" },
];

/* ─── PORTFOLIO ───────────────────────────────────────────────────────── */
export default function Portfolio() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const s1 = useR(0), s2 = useR(120), s3 = useR(240), s4 = useR(360);
  const sh2a = useR(), ag1 = useR(0), ag2 = useR(130), ag3 = useR(260);
  const sh2w = useR(), wh = useR();
  const wk1 = useR(0), wk2 = useR(110);
  const sh2s = useR();
  const skR = Array.from({ length: 10 }, (_, i) => useR(i * 40));
  const ctR = useR();

  return (
    <>
      <nav>
        <div className="nlogo"><span className="navpic" role="img" aria-label="Arpit Yadav" /> Arpit Yadav</div>
        <div className="npills">
          {[["agents","Agents"],["work","Work"],["testimonials","Referrals"]].map(([id,label]) => <button key={id} className="np" onClick={() => go(id)}>{label}</button>)}
        </div>
        <div className="nav-actions">
          <a href="mailto:arpit.uxdesign@gmail.com" className="nav-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Email</a>
          <a href="https://www.linkedin.com/in/arpit-yadav-1185ba135/" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
          <a href="https://github.com/arpityadav-bst/wsup-screen-library" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
          <a href="/arpit-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg> Resume</a>
          <button className="ncta" onClick={() => go("contact")}>Get in touch →</button>
        </div>
      </nav>

      <div className="hero">
        <div>
          <div className="hname">Arpit Yadav</div>
          <h1 className="hh1"><strong>Product designer</strong><br />who builds <em>agents,</em><br />not just screens</h1>
          <p className="hsub">9 years shipping consumer products at scale — BlueStacks, now.gg, wsup.ai.<Reveal mode="pop" cue="what I build today">I design the system AND the AI agent that ships from it. The Designer Agent is live inside wsup.ai right now, built with Claude Code + Figma MCP.</Reveal></p>
          <div className="hbtns">
            <button className="bdk" onClick={() => go("agents")}>See the agents</button>
            <button className="bgh" onClick={() => go("work")}>View work</button>
            <a href="/arpit-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="bgh hresume-btn">Resume ↓</a>
          </div>
          <a href="/arpit-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="hresume-link">Download resume ↓</a>
          <div className="hprev">
            <span className="plbl">Built for</span>
            <div className="plogos">{[["wsup.ai","https://wsup.ai"],["BlueStacks","https://bluestacks.com"],["now.gg","https://now.gg"]].map(([l,u]) => <a key={l} href={u} target="_blank" rel="noopener noreferrer" className="plogo">{l}</a>)}</div>
          </div>
        </div>
        <div className="hero-terminal"><Terminal /></div>
      </div>

      {/* VISUAL SHOWCASE — slider across all 5 projects */}
      <HeroShowcase />

      <div className="content">
        <div className="srow">
          {[
            [s1, "9", "", "Years shipping\nat consumer scale"],
            [s2, "500", "M+", "Users at\nBlueStacks scale"],
            [s3, "3", "", "Products at scale —\nwsup, BlueStacks, now.gg"],
            [s4, "Live", " agent", "Ships production screens\nautonomously"],
          ].map(([r, n, u, l], i) => (
            <div key={i} ref={r as React.RefObject<HTMLDivElement>} className="sc" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="sn">{n as string}<span>{u as string}</span></div>
              <div className="sl" style={{ whiteSpace: "pre-line" }}>{l as string}</div>
            </div>
          ))}
        </div>

        <section id="agents" className="sec">
          <div className="shead">
            <h2 className="sh2" ref={sh2a}>Agents I've <em>built</em></h2>
            <span className="stag">01 / AGENTS</span>
          </div>
          <div className="agrid">
            <div className="ag" ref={ag1}>
              <div className="ag-preview"><img src="/cs/wsup-d-anime.png" alt="Screen designed by the agent" /></div>
              <div className="ag-kind ag-kind-live">Shipped in wsup.ai</div>
              <h3 className="ah3">Designer Agent</h3>
              <p className="ap">A brief in — on-brand production screens out. Autonomously.<Reveal mode="pop" cue="how it works">Takes a product brief, reads the wsup.ai design system — 80+ tokens, 132 components — and ships on-brand screens autonomously. Lives in the production codebase and writes corrections back to its own knowledge after every session.</Reveal></p>
              <div className="amet"><div className="mn">4h → 20m</div><div className="ml">Screen design time — manual vs. agent</div></div>
              <Link to="/designer-agent" className="alink">View case study →</Link>
            </div>
            <div className="ag grn" ref={ag2} style={{ transitionDelay: "130ms" }}>
              <div className="ag-preview"><img src="/cs/reddit-top.png" alt="Reddit comments with high karma" /></div>
              <div className="ag-kind">Lab experiment</div>
              <h3 className="ah3">Reddit Growth Agent</h3>
              <p className="ap">Earns real karma with genuinely useful comments — same loop, second domain.<Reveal mode="pop" cue="how it works">Finds high-value threads, researches context, and posts genuinely useful comments. Same agentic loop as the Designer Agent — proves the architecture is domain-agnostic, not a design trick.</Reveal></p>
              <div className="amet"><div className="mn">1 → 1.1K</div><div className="ml">Organic karma — value-first commenting</div></div>
              <Link to="/reddit-agent" className="alink">View case study →</Link>
            </div>
            <div className="ag vlt" ref={ag3} style={{ transitionDelay: "260ms" }}>
              <div className="ag-preview"><img src="/cs/studio/studio-1b.png" alt="A finished Black Box carousel cover" /></div>
              <div className="ag-kind">Lab experiment</div>
              <h3 className="ah3">Content Studio</h3>
              <p className="ap">One topic → carousel + narrated Short. On-brand, local, $0.<Reveal mode="pop" cue="how it works">Takes a topic and ships an on-brand carousel plus a narrated 9:16 video — fully local, $0 per post. Reads a written brand system (palette, type, an 18-cover layout library) and runs a QA gate before anything publishes. Same loop, third domain: creative production.</Reveal></p>
              <div className="amet"><div className="mn">1 topic → 2 formats</div><div className="ml">Carousel + narrated Short, on-brand</div></div>
              <Link to="/content-studio" className="alink">View case study →</Link>
            </div>
          </div>
        </section>

        <section id="work" className="sec">
          <div className="shead">
            <h2 className="sh2" ref={sh2w}>Products I've <em>shipped</em></h2>
            <span className="stag">02 / WORK</span>
          </div>
          <div className="who" ref={wh}>
            <div className="whl">
              <div className="whtop">
                <div className="whey">2024–26</div>
                {/* mobile-only — mirrors the wktop "Visit site →" placement of the sibling cards */}
                <a href="https://wsup.ai" target="_blank" rel="noopener noreferrer" className="wk-site whvisit-m">Visit site →</a>
              </div>
              <h3 className="whh3">wsup.ai</h3>
              <p className="whp">AI character platform with 1M+ monthly visits.<Reveal mode="pop" cue="my role">I codified the design language (80+ tokens, 132 components), shipped every screen across mobile and desktop, and now ship faster through the Designer Agent that reads from this system.</Reveal></p>
              <div className="chips"><span className="chip">Lead Designer</span><span className="chip">Design System</span><span className="chip">Dark Theme</span><span className="chip">AI Chat UX</span></div>
              <Link to="/wsup-design" className="wk-visit">View case study →</Link>
            </div>
            <div className="whr" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/cs/wsup-d-explore.png" alt="wsup.ai" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="whr-overlay" />
              <a href="https://wsup.ai" target="_blank" rel="noopener noreferrer" className="whpill" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 1 }}>Visit site →</a>
            </div>
          </div>
          <div style={{ height: 12 }} />
          <div className="wgrid">
            {WORKS.map((w, i) => (
              <div key={i} className="wk" ref={[wk1, wk2][i]} style={{ transitionDelay: `${i * 110}ms` }}>
                <div className="ag-preview"><img src={w.img} alt={w.n} /></div>
                <div className="wktop"><div className="wkyr">{w.yr}</div><a href={w.url} target="_blank" rel="noopener noreferrer" className="wk-site" onClick={e => e.stopPropagation()}>Visit site →</a></div>
                <div className="wkname">{w.n}</div>
                <div className="wkrole">{w.role}</div>
                <p className="wkp">{w.p1}<Reveal mode="pop" cue="what I owned">{w.p2}</Reveal></p>
                <div className="wk-actions">
                  <Link to={w.cs} className="wk-visit">View case study →</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="sec">
          <div className="shead">
            <h2 className="sh2" style={{ opacity: 1, transform: 'none' }}>What people <em>say</em></h2>
            <span className="stag">03 / TESTIMONIALS</span>
          </div>
          <div className="tgrid">
            {[
              { highlight: "Architects agentic workflows that actually ship.", q: "Built our designer agent from scratch, wired it into our token system — it now generates production-ready screens autonomously.", name: "Ashish Pathak", role: "Product Manager, wsup.ai", rel: "Project owner" },
              { highlight: "One of the most creative minds I've encountered.", q: "Consistently brings out-of-the-box ideas, challenging the status quo and inspiring the team to think differently.", name: "Taroon Tyagi", role: "Principal Product Designer", rel: "Managed Arpit directly" },
              { highlight: "Bridges design and engineering like no one else.", q: "Data-backed, opinionated, and always pushing for better. The systems thinking behind his work impressed everyone.", name: "Arastu Kumar", role: "Associate Product Manager, wsup.ai", rel: "Managed Arpit directly" },
              { highlight: "A knack for understanding user behavior.", q: "His passion for user-centered design, attention to detail, and collaborative spirit was invaluable to our team.", name: "Rishi Kumar", role: "Lead Product Designer, Airtap.ai", rel: "Senior colleague" },
              { highlight: "A rare mix of creativity and character.", q: "His unique ability to blend humor, energy, and deep thinking — whether in a brainstorming session or lifting team spirit during a tough sprint.", name: "Rohan Arneja", role: "AI x Product Design Leader", rel: "Senior colleague" },
            ].map((t, i) => (
              <div key={i} className="tcard-t">
                <p className="tquote"><strong className="thighlight">{t.highlight}<Reveal mode="pop" cue="full quote">{t.q}</Reveal></strong></p>
                <div className="tauthor">
                  <div className="trel">{t.rel}</div>
                  <div className="tname">{t.name}</div>
                  <div className="trole">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <EducationCerts />

        <section id="stack" className="sec">
          <div className="shead">
            <h2 className="sh2" ref={sh2s}>Tools & <em>stack</em></h2>
            <span className="stag">05 / STACK</span>
          </div>
          <div className="skgrid">
            {STACK.map(([ic, nm, desc], i) => (
              <div key={i} className="sk" ref={skR[i]} style={{ transitionDelay: `${i * 40}ms` }}>
                <div className="ski">{ic}</div>
                <div className="skn">{nm}</div>
                <div className="sk-tip">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        <HobbyChannel />

        <div id="contact">
          <div className="cbox" ref={ctR}>
            <div className="cbox-top">
              <div className="cpic-wrap">
                <img src="/arpit.jpg" alt="Arpit Yadav" className="cpic" />
              </div>
              <div className="cbox-top-right">
                <h2 className="ch2">Let's build something <em>real</em></h2>
                <p className="cp">9 years in product design. Looking for AI-native design roles, design system architecture, or agentic workflow consulting.</p>
                <p className="cp cloc">Open to US, Canada, Dubai and global remote.</p>
              </div>
            </div>
            <div className="cbox-bot">
              <div className="cemail-row">
                <button className="ccopy" onClick={(e) => { navigator.clipboard.writeText("arpit.uxdesign@gmail.com"); const btn = e.currentTarget; btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'; setTimeout(() => { btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'; }, 1500); }} title="Copy email" dangerouslySetInnerHTML={{ __html: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>' }} />
                <a href="mailto:arpit.uxdesign@gmail.com" className="cemail">arpit.uxdesign@gmail.com →</a>
              </div>
              <div className="clinks">
                <a href="https://www.linkedin.com/in/arpit-yadav-1185ba135/" target="_blank" rel="noopener noreferrer" className="clnk">LinkedIn</a>
                <a href="https://github.com/arpityadav-bst/wsup-screen-library" target="_blank" rel="noopener noreferrer" className="clnk">GitHub</a>
                <a href="/arpit-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="clnk"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg> Resume</a>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="fl">Arpit Yadav — AI-Native Designer</div>
          <div className="fr">
            <a href="mailto:arpit.uxdesign@gmail.com" className="foot-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Email</a>
            <a href="https://www.linkedin.com/in/arpit-yadav-1185ba135/" target="_blank" rel="noopener noreferrer" className="foot-link">LinkedIn</a>
            <a href="https://github.com/arpityadav-bst/wsup-screen-library" target="_blank" rel="noopener noreferrer" className="foot-link">GitHub</a>
            <a href="/arpit-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="foot-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg> Resume</a>
            <span>© 2026</span>
          </div>
        </footer>
      </div>
    </>
  );
}
