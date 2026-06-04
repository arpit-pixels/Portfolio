import { useState, useEffect } from "react";

/* ─── HERO TERMINAL — animated designer-agent run ─────────────────────── */
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

export default function Terminal() {
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
