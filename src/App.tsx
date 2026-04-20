import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ─── GRAIN TEXTURE ───────────────────────────────────────────────────── */

/* ─── TERMINAL ────────────────────────────────────────────────────────── */
const TLINES = [
  { t: "p", a: "❯ ", b: "run designer-agent" },
  { t: "cm", v: "// loading wsup design system" },
  { t: "ok", v: "✓ tokens        142 loaded" },
  { t: "ok", v: "✓ components     38 ready" },
  { t: "ok", v: "✓ constraints    CLAUDE.md" },
  { t: "_" },
  { t: "o", v: "→ brief: 'onboarding flow'" },
  { t: "hi", v: "  welcome.tsx        ✓" },
  { t: "hi", v: "  profile.tsx        ✓" },
  { t: "hi", v: "  dashboard.tsx      ✓" },
  { t: "_" },
  { t: "ok", v: "✓ 3 screens · on-brand · 2m 48s" },
];

function Terminal() {
  const [n, setN] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (n < TLINES.length) {
      const t = setTimeout(() => setN(s => s + 1), n === 0 ? 700 : 280);
      return () => clearTimeout(t);
    }
    const t1 = setTimeout(() => setFading(true), 4000);
    const t2 = setTimeout(() => { setN(0); setFading(false); }, 4600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [n]);

  return (
    <div className="tcard">
      <div className="tbar">
        <div className="tdots">
          {["#FFBDBE", "#FFE3A8", "#B4EAC8"].map(c => <div key={c} className="tdot" style={{ background: c }} />)}
        </div>
        <div className="ttitle">designer-agent · wsup.ai</div>
      </div>
      <div className="tbody" style={{ opacity: fading ? 0 : 1, transition: "opacity .5s ease" }}>
        {TLINES.slice(0, n).map((l, i) => (
          <span key={i} className="tl">
            {l.t === "p" && <><span className="tp">{l.a}</span><span className="tc">{l.b}</span></>}
            {l.t === "cm" && <span className="tcm">{l.v}</span>}
            {l.t === "ok" && <span className="tok">{l.v}</span>}
            {l.t === "o" && <span className="to">{l.v}</span>}
            {l.t === "hi" && <span className="thi">{l.v}</span>}
            {l.t === "_" && <span>&nbsp;</span>}
          </span>
        ))}
        {n <= TLINES.length && <span className="tcur" />}
      </div>
    </div>
  );
}

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


/* ─── DATA ────────────────────────────────────────────────────────────── */
const STACK = [
  ["◈", "Figma", "Design systems, components, tokens — my primary design tool"],
  ["⬡", "Claude Code", "Build and ship autonomous AI agents for design and growth workflows"],
  ["❋", "React", "Production UI for wsup.ai — 62 custom components"],
  ["⊞", "Next.js", "App Router, SSR, Vercel deployments for wsup.ai"],
  ["⟐", "Tailwind", "Token-first config — 90+ semantic color tokens, custom spacing scale"],
  ["◉", "TypeScript", "Full type safety across all components and hooks"],
  ["▦", "Storybook", "Component documentation and isolated development"],
  ["⟁", "MagicPath", "AI-powered design exploration and rapid prototyping"],
  ["◎", "Notion", "Case studies, design documentation, project knowledge bases"],
  ["⬡", "Figma MCP", "Wired Claude Code to Figma — AI reads and writes design files"],
];
const WORKS = [
  { n: "now.gg", a: "n", yr: "2019–24", role: "Lead Product Designer", p: "Cloud gaming platform — 100M+ users, ~10M monthly visits. Led UX across game discovery, detail pages, and instant browser play.", url: "https://now.gg", cs: "/nowgg", img: "/cs/nowgg-home.png" },
  { n: "BlueStacks", a: "B", yr: "2019–24", role: "Lead Product Designer", p: "World's #1 Android emulator — 500M+ users, 1B+ downloads. Led UX across desktop app, web platform, and cloud gaming.", url: "https://bluestacks.com", cs: "/bluestacks", img: "/cs/bluestacks-home.png" },
  { n: "game.tv", a: "g", yr: "2019–22", role: "Product Designer", p: "#1 mobile esports platform — 11M+ registrations, 5M+ downloads, 190K+ guilds across 17+ countries. Designed creator tools and monetization.", url: "https://game.tv", cs: "/gametv", img: "/cs/gametv-home.png" },
];

/* ─── PORTFOLIO ───────────────────────────────────────────────────────── */
export default function Portfolio() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const s1 = useR(0), s2 = useR(120), s3 = useR(240), s4 = useR(360);
  const sh2a = useR(), ag1 = useR(0), ag2 = useR(130);
  const sh2w = useR(), wh = useR();
  const wk1 = useR(0), wk2 = useR(110), wk3 = useR(220);
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
          <p className="hsub">8+ years designing products at scale — BlueStacks, now.gg, wsup.ai. I build the design system and the AI agent that runs it. Currently shipping a live designer agent inside wsup using Claude Code, Figma MCP, and a full token system.</p>
          <div className="hbtns">
            <button className="bdk" onClick={() => go("agents")}>See the agents →</button>
            <button className="bgh" onClick={() => go("work")}>View work</button>
            <a href="/arpit-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="bgh hresume-btn">Resume ↓</a>
          </div>
          <a href="/arpit-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="hresume-link">Download resume ↓</a>
          <div className="hprev">
            <span className="plbl">Built for</span>
            <div className="plogos">{[["wsup.ai","https://wsup.ai"],["BlueStacks","https://bluestacks.com"],["now.gg","https://now.gg"],["game.tv","https://game.tv"]].map(([l,u]) => <a key={l} href={u} target="_blank" rel="noopener noreferrer" className="plogo">{l}</a>)}</div>
          </div>
        </div>
        <div className="hero-terminal"><Terminal /></div>
      </div>

      {/* VISUAL SHOWCASE — show the work immediately */}
      <div className="hero-showcase">
        <div className="showcase-label">Currently designing</div>
        <div className="showcase-devices">
          <div className="showcase-desktop">
            <img src="/cs/wsup-d-explore.png" alt="wsup.ai desktop interface" />
          </div>
          <div className="showcase-mobile">
            <img src="/cs/wsup-m-home-clean.png" alt="wsup.ai mobile interface" />
          </div>
        </div>
        <Link to="/wsup-design" className="showcase-cta">wsup.ai — AI character platform · 1M+ monthly visits · <span style={{ color: 'var(--blue)' }}>View case study →</span></Link>
      </div>

      <div className="content">
        <div className="srow">
          {[
            [s1, "8", "+", "Years designing\nAI & consumer products"],
            [s2, "500", "M+", "Users across\nBlueStacks products"],
            [s3, "5", "", "Products shipped\nat scale"],
            [s4, "AI", "+UX", "Design systems meet\nautonomous agents"],
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
              <div className="abadge abb">AGENT_01 · DESIGN</div>
              <h3 className="ah3">Designer Agent</h3>
              <p className="ap">Takes a product brief, reads the wsup.ai design system — 142 tokens and 62 components — and generates on-brand screens autonomously. Lives inside the production project and self-improves with every session.</p>
              <div className="chips">{["Autonomous Design", "Design System", "Brand Consistency", "Self-Improving", "Zero Manual Work"].map(c => <span key={c} className="chip">{c}</span>)}</div>
              <div className="amet"><div className="mn">4h → 20m</div><div className="ml">Screen design time — manual vs. agent</div></div>
              <Link to="/designer-agent" className="alink">View case study →</Link>
            </div>
            <div className="ag grn" ref={ag2} style={{ transitionDelay: "130ms" }}>
              <div className="ag-preview"><img src="/cs/reddit-top.png" alt="Reddit comments with high karma" /></div>
              <div className="abadge abg">AGENT_02 · GROWTH</div>
              <h3 className="ah3">Reddit Growth Agent</h3>
              <p className="ap">Autonomously finds high-value threads, researches context, and posts genuinely useful comments to build organic community presence. Agentic thinking applied beyond design.</p>
              <div className="chips">{["Autonomous Posting", "Context Research", "Organic Growth", "Safety Controls"].map(c => <span key={c} className="chip">{c}</span>)}</div>
              <div className="amet"><div className="mn">1 → 1.1K</div><div className="ml">Organic karma — value-first commenting</div></div>
              <Link to="/reddit-agent" className="alink">View case study →</Link>
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
              <div className="whey">CURRENT · 2024–PRESENT</div>
              <h3 className="whh3">wsup.ai</h3>
              <p className="whp">AI character platform with 1M+ monthly visits. Built the complete design system (90+ tokens, 62 components), designed all screens across mobile and desktop, and established the dark-theme design language from scratch.</p>
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
              <div key={i} className="wk" ref={[wk1, wk2, wk3][i]} style={{ transitionDelay: `${i * 110}ms` }}>
                <div className="ag-preview"><img src={w.img} alt={w.n} /></div>
                <div className="wktop"><div className="wkyr">{w.yr}</div><a href={w.url} target="_blank" rel="noopener noreferrer" className="wk-site" onClick={e => e.stopPropagation()}>Visit site →</a></div>
                <div className="wkname">{w.n}</div>
                <div className="wkrole">{w.role}</div>
                <p className="wkp">{w.p}</p>
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
                <p className="tquote"><strong className="thighlight">{t.highlight}</strong> {t.q}</p>
                <div className="tauthor">
                  <div className="trel">{t.rel}</div>
                  <div className="tname">{t.name}</div>
                  <div className="trole">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="stack" className="sec">
          <div className="shead">
            <h2 className="sh2" ref={sh2s}>Tools & <em>stack</em></h2>
            <span className="stag">04 / STACK</span>
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

        <div id="contact" style={{ padding: "0 40px" }}>
          <div className="cbox" ref={ctR}>
            <div className="cbox-top">
              <div className="cpic-wrap">
                <img src="/arpit.jpg" alt="Arpit Yadav" className="cpic" />
              </div>
              <div className="cbox-top-right">
                <h2 className="ch2">Let's build something <em>real</em></h2>
                <p className="cp">8+ years in product design. Looking for AI-native design roles, design system architecture, or agentic workflow consulting.</p>
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
                <a href="/arpit-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="clnk">Resume</a>
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
