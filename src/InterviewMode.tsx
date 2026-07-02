import { createContext, useContext, useState, useEffect, useRef, Fragment, type ReactNode } from "react";

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
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  if (!enabled) return null;

  return (
    <span className="ipill-wrap" ref={ref}>
      <button
        type="button"
        className="ipill"
        onClick={(e) => { e.preventDefault(); setOpen(prev => !prev); }}
        title={q}
        aria-label={`Likely question: ${q}`}
      >
        ?
      </button>
      {open && (
        <span className="ipill-card" role="dialog">
          <span className="ipill-q">Q: {q}</span>
          <span className="ipill-a">{a}</span>
          {followups && followups.map((f, i) => (
            <Fragment key={i}>
              <span className="ipill-fq">If they push further: {f.q}</span>
              <span className="ipill-fa">{f.a}</span>
            </Fragment>
          ))}
        </span>
      )}
    </span>
  );
}
