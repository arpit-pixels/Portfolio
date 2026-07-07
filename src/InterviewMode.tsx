import { createContext, useContext, useState, useEffect, useLayoutEffect, useRef, Fragment, type ReactNode } from "react";
import { createPortal } from "react-dom";

export type PillFollowup = { q: string; a: string };
export type PillSpec = { after: string; q: string; a: string; followups?: PillFollowup[] };

const InterviewModeContext = createContext(false);

export function InterviewModeProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  /* V2: interview mode force-opens every Reveal — pills must never hide
     behind a collapsed P2 layer when someone is actively digging. */
  useEffect(() => {
    document.documentElement.classList.toggle("imode-on", enabled);
    return () => document.documentElement.classList.remove("imode-on");
  }, [enabled]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;
      if (e.key === "v" || e.key === "V") {
        e.preventDefault();
        setEnabled(prev => !prev);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <InterviewModeContext.Provider value={enabled}>
      {children}
      {enabled && (
        <div className="imode-banner">
          <span>Interview mode</span>
          <span className="imode-key">V</span>
          <span className="imode-hint">Click the blue pills for likely questions + answers</span>
        </div>
      )}
    </InterviewModeContext.Provider>
  );
}

export function useInterviewMode() {
  return useContext(InterviewModeContext);
}

/**
 * Renders plain text with pills inserted after specific phrases.
 * Pills are visible only when interview mode is enabled (V key).
 */
export function TextWithPills({ text, pills }: { text: string; pills?: PillSpec[] }) {
  if (!pills || pills.length === 0) return <>{text}</>;

  const segments: ReactNode[] = [];
  let cursor = 0;

  // Sort pills by their position in text so we render in order
  const positioned = pills
    .map(p => ({ ...p, idx: text.indexOf(p.after, cursor) }))
    .filter(p => p.idx !== -1)
    .sort((a, b) => a.idx - b.idx);

  for (const p of positioned) {
    const idx = text.indexOf(p.after, cursor);
    if (idx === -1) continue;
    const end = idx + p.after.length;
    segments.push(<Fragment key={cursor}>{text.slice(cursor, end)}</Fragment>);
    segments.push(<Pill key={`pill-${p.q}`} q={p.q} a={p.a} followups={p.followups} />);
    cursor = end;
  }
  segments.push(<Fragment key={`tail-${cursor}`}>{text.slice(cursor)}</Fragment>);

  return <>{segments}</>;
}

export function Pill({ q, a, followups }: { q: string; a: string; followups?: PillFollowup[] }) {
  const enabled = useInterviewMode();
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLSpanElement>(null);

  // Portal-positioned like the Reveal popovers, so the card is never clipped by
  // a case-study container's overflow and never runs off the viewport edge.
  const position = () => {
    const b = btnRef.current, c = cardRef.current;
    if (!b || !c) return;
    const r = b.getBoundingClientRect();
    const vw = window.innerWidth, vh = window.innerHeight, pad = 12;
    const cw = c.offsetWidth, ch = c.offsetHeight;
    let left = r.left + r.width / 2 - cw / 2;
    left = Math.min(Math.max(left, pad), vw - cw - pad);
    let top = r.bottom + 8;
    if (top + ch > vh - pad) {
      const above = r.top - ch - 8;
      top = above >= pad ? above : vh - ch - pad;
    }
    top = Math.min(Math.max(top, pad), Math.max(pad, vh - ch - pad));
    c.style.left = `${left}px`;
    c.style.top = `${top}px`;
  };

  useLayoutEffect(() => {
    if (!open) return;
    position();
    const id = requestAnimationFrame(position);
    return () => cancelAnimationFrame(id);
  });

  useEffect(() => {
    if (!open) return;
    const reposition = () => position();
    const onDown = (e: globalThis.MouseEvent) => {
      const t = e.target as Node;
      if (btnRef.current?.contains(t) || cardRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
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
  }, [open]);

  if (!enabled) return null;

  return (
    <span className="ipill-wrap">
      <button
        ref={btnRef}
        type="button"
        className="ipill"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(prev => !prev); }}
        aria-label={`Likely question: ${q}`}
        aria-expanded={open}
      >
        ?
      </button>
      {open && createPortal(
        <span ref={cardRef} className="ipill-card" role="dialog" style={{ top: -9999, left: -9999 }}>
          <span className="ipill-q">Q: {q}</span>
          <span className="ipill-a">{a}</span>
          {followups && followups.map((f, i) => (
            <Fragment key={i}>
              <span className="ipill-fq">If they push further: {f.q}</span>
              <span className="ipill-fa">{f.a}</span>
            </Fragment>
          ))}
        </span>,
        document.body,
      )}
    </span>
  );
}
