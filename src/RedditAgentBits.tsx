import { useEffect, useRef, useState } from "react";

/* ─── Karma chart + lessons snippet for the Reddit Agent case study
       (extracted for the 300-line rule) ─────────────────────────────────── */

const KARMA_DATA = [
  { day: "Day 1", v: 1 },
  { day: "Day 2", v: 29 },
  { day: "Day 3", v: 85 },
  { day: "Day 3 eve", v: 515 },
  { day: "Day 4", v: 1100 },
];

export function KarmaChart() {
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
      <div className="cs-chart-label">Account karma — the launch sprint (first 4 days)</div>
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

export function LessonsSnippet() {
  return (
    <div className="cs-code">
      <div className="cs-code-header">
        <span className="cs-code-file">lessons-learned.md</span>
        <span className="cs-code-tag">200 lessons extracted from live posting</span>
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
