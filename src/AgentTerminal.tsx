import { useState, useEffect, useRef } from "react";

/* The Designer-Agent loop on wsup.ai. Streams like a real terminal: fixed
   window, latest line pinned to the bottom, varied per-line timing so it reads
   as work happening — then stops when the run finishes (no loop). `d` = ms to
   wait before that line appears. */
const LINES: { t: string; b?: string; v?: string; d: number }[] = [
  { t: "p",  b: "run designer-agent --project wsup.ai", d: 400 },
  { t: "cm", v: "// loading the wsup.ai design system", d: 320 },
  { t: "ok", v: "✓ tokens            142 loaded", d: 120 },
  { t: "ok", v: "✓ components         90 ready", d: 120 },
  { t: "ok", v: "✓ taste rules        60 parsed", d: 120 },
  { t: "ok", v: "✓ constraints        CLAUDE.md", d: 120 },
  { t: "ok", v: "✓ knowledge   taste · decisions · reasonings · logs", d: 170 },
  { t: "_",  d: 90 },
  { t: "o",  v: "→ brief: \"design the onboarding flow\"", d: 560 },
  { t: "cm", v: "// designing from tokens — no screenshots", d: 380 },
  { t: "hi", v: "  welcome.tsx      ✓  body 70% · pad 64px", d: 540 },
  { t: "hi", v: "  profile.tsx      ✓  reused 6 components", d: 540 },
  { t: "hi", v: "  dashboard.tsx    ✓  0 hardcoded hex", d: 540 },
  { t: "_",  d: 110 },
  { t: "cm", v: "// self-audit", d: 400 },
  { t: "ok", v: "✓ token compliance       pass", d: 160 },
  { t: "ok", v: "✓ icon consistency       pass", d: 140 },
  { t: "ok", v: "✓ style-guide sync       pass", d: 140 },
  { t: "_",  d: 120 },
  { t: "ok", v: "✓ 3 screens · on-brand · 2m 48s", d: 440 },
  { t: "o",  v: "→ writing corrections back to knowledge…", d: 520 },
];

export default function AgentTerminal() {
  const [n, setN] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  // reveal lines one at a time with their own delay; hold 5s at the end, then replay
  useEffect(() => {
    if (n >= LINES.length) {
      const t = setTimeout(() => setN(0), 5000);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setN((s) => s + 1), LINES[n].d);
    return () => clearTimeout(t);
  }, [n]);

  // keep the newest line pinned to the bottom (scroll up, don't expand)
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [n]);

  return (
    <div className="agterm-card">
      <div className="agterm-bar">
        <div className="agterm-dots">
          {["#FFBDBE", "#FFE3A8", "#B4EAC8"].map((c) => <span key={c} className="agterm-dot" style={{ background: c }} />)}
        </div>
        <span className="agterm-title">designer-agent · wsup.ai · production</span>
      </div>
      <div className="agterm-body" ref={bodyRef}>
        {LINES.slice(0, n).map((l, i) => (
          <span key={i} className="agterm-line">
            {l.t === "p" && <><span className="agt-p">❯ </span><span className="agt-c">{l.b}</span></>}
            {l.t === "cm" && <span className="agt-cm">{l.v}</span>}
            {l.t === "ok" && <span className="agt-ok">{l.v}</span>}
            {l.t === "o" && <span className="agt-o">{l.v}</span>}
            {l.t === "hi" && <span className="agt-hi">{l.v}</span>}
            {l.t === "_" && <span>&nbsp;</span>}
          </span>
        ))}
        <span className="agt-cur" />
      </div>
    </div>
  );
}
