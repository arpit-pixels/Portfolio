import { useEffect, useRef, useState } from "react";
import { SESSION_DATA } from "./designer-agent-data";

/* ─── Chart + code snippet for the Designer Agent case study
       (extracted for the 300-line rule) ─────────────────────────────────── */

export function CorrectionChart() {
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

export function CodeSnippet() {
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
