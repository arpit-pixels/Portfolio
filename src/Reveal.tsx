import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";

/* ─── REVEAL — the ONE primitive carrying all P2 (second-priority) content.

   mode="pop" — a tiny faded + marker at the END of the line it belongs to.
   Deliberately easy to miss: only readers who dig notice it. Hover opens a
   subtle popover card (desktop), tap toggles (touch), click-outside closes.
   Children must be phrasing content (text / spans / TextWithPills / Pill) —
   the card renders span-based blocks, never <p>, so it can live inside one.
   Use <span className="rv2-p"> for multi-block content.

   mode="expand" (default) — in-place expansion below a quiet text cue.
   For structural blocks a popover can't hold: role rows, rejected paths,
   origin maps, moat/safety walls, multi-paragraph stories. */
export default function Reveal({ cue = "more", children, tone, mode = "expand" }: {
  cue?: string; children: ReactNode; tone?: "dark"; mode?: "pop" | "expand";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open || mode !== "pop") return;
    const h = (e: globalThis.MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open, mode]);

  const toggle = (e: MouseEvent) => { e.preventDefault(); e.stopPropagation(); setOpen(o => !o); };

  if (mode === "pop") {
    return (
      <span className={`rv2${open ? " rv2-open" : ""}${tone === "dark" ? " rv2-dark" : ""}`} ref={ref}>
        <button type="button" className="rv2-mark" aria-label={cue} title={cue} aria-expanded={open} onClick={toggle}>+</button>
        <span className="rv2-card"><span className="rv2-body">{children}</span></span>
      </span>
    );
  }

  return (
    <div className={`rv${open ? " rv-pin" : ""}${tone === "dark" ? " rv-dark" : ""}`}>
      <button type="button" className="rv-cue" aria-expanded={open} onClick={toggle}>
        <span className="rv-ic" aria-hidden="true">+</span>
        {cue}
      </button>
      <div className="rv-body">
        <div className="rv-in">{children}</div>
      </div>
    </div>
  );
}
