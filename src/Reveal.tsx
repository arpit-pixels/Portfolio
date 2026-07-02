import { useEffect, useLayoutEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { useInterviewMode } from "./InterviewMode";

/* ─── REVEAL — the ONE primitive carrying all P2 (second-priority) content.

   mode="pop" — a tiny faded + marker at the END of the line it belongs to.
   Easy to miss by design; only readers who dig notice it. The popover is
   PORTALED to <body> with fixed positioning, so it can never be clipped by a
   card's overflow or painted over by a sibling button. Hover opens it on
   pointer devices (with close-intent delay + a card that keeps it open); click
   pins it; tap toggles on touch; outside-click / Escape / scroll close it.
   Children are phrasing content; wrap multi-block content in <span className="rv2-p">.

   mode="expand" (default) — in-place expansion below a quiet text cue, for
   structural blocks a popover can't hold (role rows, rejected-path lists,
   origin maps, moat/safety walls, multi-paragraph stories). */
export default function Reveal({ cue = "more", children, tone, mode = "expand" }: {
  cue?: string; children: ReactNode; tone?: "dark"; mode?: "pop" | "expand";
}) {
  const [open, setOpen] = useState(false);
  const imode = useInterviewMode();
  const markRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLSpanElement>(null);
  const closeT = useRef(0);
  const pinned = useRef(false);

  const position = () => {
    const m = markRef.current, c = cardRef.current;
    if (!m || !c) return;
    const r = m.getBoundingClientRect();
    const vw = window.innerWidth, vh = window.innerHeight, pad = 12;
    const cw = c.offsetWidth, ch = c.offsetHeight;
    let left = r.left + r.width / 2 - cw / 2;
    left = Math.min(Math.max(left, pad), vw - cw - pad);
    let top = r.bottom + 8;                              // prefer below the marker
    if (top + ch > vh - pad) {                           // doesn't fit below
      const above = r.top - ch - 8;
      top = above >= pad ? above : vh - ch - pad;        // flip above, else pin to bottom edge
    }
    top = Math.min(Math.max(top, pad), Math.max(pad, vh - ch - pad)); // final on-screen clamp
    c.style.left = `${left}px`;
    c.style.top = `${top}px`;
  };

  // position now (pre-paint) AND after paint via rAF, so card height is accurate
  useLayoutEffect(() => {
    if (!open || mode !== "pop") return;
    position();
    const id = requestAnimationFrame(position);
    return () => cancelAnimationFrame(id);
  });

  useEffect(() => {
    if (!open || mode !== "pop") return;
    const reposition = () => position();
    const onDown = (e: globalThis.MouseEvent) => {
      const t = e.target as Node;
      if (markRef.current?.contains(t) || cardRef.current?.contains(t)) return;
      pinned.current = false; setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { pinned.current = false; setOpen(false); } };
    window.addEventListener("scroll", reposition, true);
    window.addEventListener("resize", reposition);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", reposition, true);
      window.removeEventListener("resize", reposition);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, mode]);

  if (mode === "pop") {
    // Interview mode (V): expose content inline so nested Q&A pills render + stay
    // clickable. Pills render null when interview mode is off, so normal browsing
    // (marker + portal popover) is unaffected.
    if (imode) return <span className="rv2-imode">{children}</span>;

    const openNow = () => { clearTimeout(closeT.current); setOpen(true); };
    const closeSoon = () => { if (!pinned.current) closeT.current = window.setTimeout(() => setOpen(false), 130); };
    const onClick = (e: MouseEvent) => {
      e.preventDefault(); e.stopPropagation();
      // click PINS an open (hover- or tap-opened) card; clicking a pinned card closes it
      if (pinned.current) { pinned.current = false; setOpen(false); }
      else { pinned.current = true; clearTimeout(closeT.current); setOpen(true); }
    };
    return (
      <span className={`rv2${tone === "dark" ? " rv2-dark" : ""}`}>
        <button
          ref={markRef} type="button" className={`rv2-mark${open ? " rv2-mark-on" : ""}`}
          aria-label={cue} title={cue} aria-expanded={open}
          onClick={onClick} onMouseEnter={openNow} onMouseLeave={closeSoon}
          onFocus={openNow} onBlur={closeSoon}
        >+</button>
        {open && createPortal(
          <span ref={cardRef} className="rv2-pop" role="dialog" style={{ top: -9999, left: -9999 }}
            onMouseEnter={openNow} onMouseLeave={closeSoon}>
            <span className="rv2-body">{children}</span>
          </span>,
          document.body,
        )}
      </span>
    );
  }

  return (
    <div className={`rv${open ? " rv-pin" : ""}${tone === "dark" ? " rv-dark" : ""}`}>
      <button type="button" className="rv-cue" aria-expanded={open}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(o => !o); }}>
        <span className="rv-ic" aria-hidden="true">+</span>
        {cue}
      </button>
      <div className="rv-body">
        <div className="rv-in">{children}</div>
      </div>
    </div>
  );
}
