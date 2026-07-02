import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CarouselDecks from "./CarouselDecks";
import HoverVideo from "./HoverVideo";
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

/* ─── BRAND-RULES SNIPPET ─────────────────────────────────────────────── */
function RulesSnippet() {
  return (
    <div className="cs-code">
      <div className="cs-code-header">
        <span className="cs-code-file">CAROUSEL-RULES.md</span>
        <span className="cs-code-tag">the brand system, enforced on every post</span>
      </div>
      <pre className="cs-code-body">{`## Hard rules (never broken)
- ALL text, logos, stats are template overlays — NEVER model-rendered
- Hero art is bright, lively, colourful — never moody or dark
- Expression matches the story — worried for losses, confident for wins
- Cover archetype picked from the 18-cover library, never freestyled

## Cover recipe
- Real person  → Qwen-Image-Edit on a real photo (keep exact face)
- Concept/idea → Z-Image generative hero + glowing props
- Stat never covers the face; number lives in the headline

## Self-audit (every cover, before ship)
- Compare against reference covers for creative "wow"
- Move/redesign to fix — never strip elements to make a problem go away`}</pre>
    </div>
  );
}

/* ─── DATA ────────────────────────────────────────────────────────────── */
const STEPS = [
  { n: "01", h: "Research", p: "Turns a topic into an angle, a hook, and the one stat that matters — then picks a cover layout from an 18-cover archetype library, so every post is on-brand before a pixel is drawn." },
  { n: "02", h: "Cover art", p: "Generates a bright, lively hero — Qwen-Image-Edit on a real photo (likeness locked) or Z-Image for concepts. Every headline, logo, and number is real type laid on top, never AI-rendered text." },
  { n: "03", h: "Script & voice", p: "Writes the slide copy plus a narrated hook and story for the Short, then voices it with a local text-to-speech model. Captions are authored, not auto-transcribed — no whisper errors." },
  { n: "04", h: "Motion", p: "Animates abstract shots with Wan image-to-video; Ken Burns on real faces and the branded opener. Word-pop captions sync to the voiceover. Non-speaking shots keep mouths closed." },
  { n: "05", h: "Music & assemble", p: "Generates a fitting track, adds a branded end card, and stitches everything with per-scene timing so the lip-sync and captions line up frame-accurate." },
  { n: "06", h: "QA gate", p: "An automated check blocks the export until timing, captions, and mouth-state all pass — correctness is enforced in code, not left to memory." },
];

const NEWS = [
  { f: "studio-china", poster: "poster-china", line: "Black Box AI-news Short", cap: "China's $295B AI bet" },
  { f: "studio-qwen", poster: "poster-qwen", line: "Black Box AI-news Short", cap: "Qwen at half the cost" },
  { f: "studio-mai", poster: "poster-mai", line: "Black Box AI-news Short", cap: "Microsoft's 6 models" },
];
const ANIME = [
  { f: "studio-anime", poster: "poster-anime", line: "Anime micro-drama", cap: "Voiced, lip-synced, authored captions" },
  { f: "studio-anime2", poster: "poster-anime2", line: "Anime micro-drama", cap: "Cinematic Ken Burns + synced VO" },
];

const ENFORCED_SHORT = [
  "Per-scene timing", "Authored captions", "Mouths closed", "No caption bleed",
  "On-brand palette", "Real type only", "Self-audit", "One assembler",
];
const ENFORCED = [
  "Per-scene timing so voice, captions, and motion stay frame-accurate",
  "Authored captions — written, never auto-transcribed (no transcription errors)",
  "Mouths closed on every non-speaking shot (no uncanny chatter)",
  "No caption bleed between scenes",
  "Bright, on-brand palette + story-matched expression on every cover",
  "Text, logos, and stats are always real type — never model-rendered",
  "Self-audit against reference covers before anything ships",
  "One assembler (build_drama.py) — hand-assembly that reintroduces bugs is impossible",
];

/* ─── PAGE ────────────────────────────────────────────────────────────── */
export default function ContentStudio() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const heroR = useR();
  const carR = useR();
  const probR = useR();
  const howR = useR();
  const resR = useR();
  const brandR = useR();
  const enfR = useR();
  const takeR = useR();

  return (
    <div className="cs">
      <nav>
        <Link to="/" className="nlogo">← Back</Link>
        <span className="nlogo" style={{ gap: 6 }}>Content Studio</span>
        <div className="nav-actions">
          <a href="mailto:arpit.uxdesign@gmail.com" className="nav-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Email</a>
          <a href="https://www.linkedin.com/in/arpit-yadav-1185ba135/" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
          <a href="/arpit-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg> Resume</a>
          <a href="mailto:arpit.uxdesign@gmail.com" className="ncta">Get in touch →</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="cs-hero" ref={heroR}>
        <div className="cs-badge abv">LAB PROJECT · AGENT_03</div>
        <p className="cs-lab-note">Lab projects take the same agent approach outside design — testing it in real systems.</p>
        <h1 className="cs-h1">A studio that turns one topic into a <em>carousel and a narrated video</em> — locally, for $0</h1>
        <p className="cs-sub">Type a topic. Get an on-brand carousel and a narrated 9:16 Short — researched, drawn, voiced, scored, and QA-gated on one home GPU.<Reveal mode="pop" cue="the full picture">Same agent loop as the Designer and Reddit agents, now pointed at creative production — where taste and brand consistency are the hard part. Type a topic; it researches, generates the hero art, writes and voices the script, animates it, scores it, and ships a branded carousel plus a 9:16 Short. Two product lines: a "Black Box" AI-news feed and cinematic anime micro-dramas.</Reveal></p>
        <div className="chips" style={{ margin: "18px 0 6px" }}>
          <span className="chip">Black Box brand system</span>
          <span className="chip">ComfyUI · local TTS · Python</span>
          <span className="chip">YouTube + Instagram</span>
          <span className="chip">$0 per post</span>
        </div>
        <Reveal cue="role in full">
          <div className="cs-role-row">
            <div className="cs-role-item"><span className="cs-role-label">My role</span>Designed the "Black Box" brand system and built the whole pipeline end to end.</div>
            <div className="cs-role-item"><span className="cs-role-label">Stack</span>Claude Code · ComfyUI (Z-Image, Qwen-Image-Edit, Wan 2.2 I2V) · local TTS + music · Python assembler — all on one home GPU</div>
            <div className="cs-role-item"><span className="cs-role-label">Timeline</span>Built 2026 · published to YouTube + Instagram (@blackbox.aifeed)</div>
            <div className="cs-role-item"><span className="cs-role-label">Why content</span>Tests whether the same research → make → check → learn loop works where the bar is taste, not just correctness.</div>
          </div>
        </Reveal>
        <div className="cs-meta-row">
          <div className="cs-meta"><span className="cs-mn">$0</span><span className="cs-ml">Cost per post — fully local</span></div>
          <div className="cs-meta"><span className="cs-mn">2</span><span className="cs-ml">Formats from one topic</span></div>
          <div className="cs-meta"><span className="cs-mn">18</span><span className="cs-ml">Cover archetypes in the library</span></div>
          <div className="cs-meta"><span className="cs-mn">1</span><span className="cs-ml">Assembler — no hand-editing</span></div>
        </div>
      </header>

      {/* THE CAROUSELS — featured deck + grid + lightbox */}
      <section className="cs-sec" ref={carR}>
        <div className="cs-sec-head"><span className="stag">THE CAROUSELS</span></div>
        <h2 className="cs-h2">Finished work, <em>full-size</em></h2>
        <p className="cs-p">On-brand "Black Box" decks — real-person likeness and concept art, every headline and stat laid on as real type. One topic becomes both a carousel and a video.</p>
        <CarouselDecks />
      </section>

      {/* THE QUESTION */}
      <section className="cs-sec" ref={probR}>
        <div className="cs-sec-head"><span className="stag">01 / THE QUESTION</span></div>
        <h2 className="cs-h2">Can the same loop handle <em>taste,</em> not just correctness?</h2>
        <p className="cs-p">The <Link to="/designer-agent" style={{ color: "var(--blue)" }}>Designer Agent</Link> proved the loop scales design judgment; the <Link to="/reddit-agent" style={{ color: "var(--blue)" }}>Reddit Agent</Link> proved it transfers to growth. Content was the hardest test: a video can be technically perfect and still look cheap.<Reveal mode="pop" cue="the bet">So I gave the agent a real brand — "Black Box" — with rules for palette, typography, cover layouts, and tone, plus a self-audit that compares its own output to reference work. The bet: codified taste plus a strict QA gate can make a machine produce content that actually looks made by a person.</Reveal></p>
      </section>

      {/* HOW IT WORKS */}
      <section className="cs-sec" ref={howR}>
        <div className="cs-sec-head"><span className="stag">02 / HOW IT WORKS</span></div>
        <h2 className="cs-h2">Topic in, two finished pieces <em>out</em></h2>
        <div className="cs-steps">
          {STEPS.map((s) => (
            <div key={s.n} className="cs-step">
              <div className="cs-step-n">{s.n}</div>
              <h3 className="cs-step-h">{s.h}<Reveal mode="pop" cue="how">{s.p}</Reveal></h3>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS — playing video */}
      <section className="cs-sec" ref={resR}>
        <div className="cs-sec-head"><span className="stag">03 / RESULTS</span></div>
        <h2 className="cs-h2">The output, <em>playing</em></h2>
        <p className="cs-p">Two product lines from one pipeline — a "Black Box" AI-news feed and cinematic anime micro-dramas. Every one made entirely on a home GPU.</p>
        <h3 className="cs-h3">Black Box AI-news</h3>
        <div className="cs-video-row">
          {NEWS.map((v) => (
            <div key={v.f}>
              <HoverVideo src={`/cs/studio/${v.f}.mp4`} poster={`/cs/studio/${v.poster}.png`} label={v.cap} />
              <div className="cs-video-cap"><strong style={{ color: "var(--ink)" }}>{v.line}</strong><br />{v.cap}</div>
            </div>
          ))}
        </div>
        <h3 className="cs-h3" style={{ marginTop: 40 }}>Anime micro-dramas</h3>
        <div className="cs-video-row cs-video-center">
          {ANIME.map((v) => (
            <div key={v.f}>
              <HoverVideo src={`/cs/studio/${v.f}.mp4`} poster={`/cs/studio/${v.poster}.png`} label={v.cap} />
              <div className="cs-video-cap"><strong style={{ color: "var(--ink)" }}>{v.line}</strong><br />{v.cap}</div>
            </div>
          ))}
        </div>
        <p className="cs-p" style={{ textAlign: "center", marginTop: 18, fontSize: "var(--fs-sm)", color: "var(--muted)", maxWidth: "none" }}>Hover to preview · click for sound & fullscreen</p>
      </section>

      {/* BRAND SYSTEM */}
      <section className="cs-sec" ref={brandR}>
        <div className="cs-sec-head"><span className="stag">04 / THE BRAND SYSTEM</span></div>
        <h2 className="cs-h2">Taste, written down as <em>rules</em></h2>
        <p className="cs-p">The look isn't luck. It's a documented system the agent reads before every post — the same way the Designer Agent reads a design system. This is what keeps a generative pipeline on-brand instead of generic.</p>
        <RulesSnippet />
      </section>

      {/* QUALITY ENFORCED */}
      <section className="cs-sec cs-sec-dark" ref={enfR}>
        <div className="cs-sec-head"><span className="stag" style={{ color: "rgba(255,255,255,.4)" }}>05 / QUALITY, ENFORCED IN CODE</span></div>
        <h2 className="cs-h2" style={{ color: "white" }}>Every bug I hit became a <em>rule the code enforces</em></h2>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>AI video breaks the same ways every time. The fixes live in one assembler — so they can't come back.</p>
        <div className="chips" style={{ marginTop: 14 }}>
          {ENFORCED_SHORT.map((s, i) => <span key={i} className="chip">{s}</span>)}
        </div>
        <Reveal cue="all eight, in full" tone="dark">
          <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>AI video breaks in the same ways every time — bad lip-sync, garbled captions, mouths flapping on silent shots. Instead of fixing those by hand each run, I baked the fixes into a single assembler so they can't come back.</p>
          <div className="cs-safety-list">
            {ENFORCED.map((s, i) => (
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
          <div className="cs-result"><div className="cs-result-n">Third domain</div><div className="cs-result-l">Same loop as the other two agents — now producing brand-consistent creative work</div></div>
          <div className="cs-result"><div className="cs-result-n">Taste → system</div><div className="cs-result-l">Palette, type, layout, and tone written as rules an agent can follow and self-audit against</div></div>
          <div className="cs-result"><div className="cs-result-n">$0</div><div className="cs-result-l">Studio-grade carousels and videos with zero per-post cost — runs on one home GPU</div></div>
          <div className="cs-result"><div className="cs-result-n">Enforced</div><div className="cs-result-l">Hard-won fixes live in code, not memory — quality holds run after run</div></div>
        </div>
        <div className="cs-reflection">
          <h3 className="cs-reflection-h">What I'd do differently</h3>
          <p className="cs-p">An engagement-feedback loop — taste sharpening on data, not just my eye.<Reveal mode="pop" cue="unpacked">Add an engagement-feedback loop — let real post performance feed back into which cover archetypes and hooks the agent reaches for, so taste keeps sharpening on data, not just my eye.</Reveal></p>
        </div>
      </section>

      {/* CTA */}
      <div className="cs-cta">
        <Link to="/reddit-agent" className="bgh">← Reddit Agent</Link>
        <Link to="/wsup-design" className="bdk">Next: wsup.ai →</Link>
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
