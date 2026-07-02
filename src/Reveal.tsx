import { useState, type ReactNode } from "react";

/* ─── REVEAL — the ONE primitive carrying all P2 (second-priority) content.
   Pointer devices: opens while hovered (CSS @media hover:hover); click pins it.
   Touch: tap toggles. Keyboard: the cue is a real button — focus-within opens.
   Purely structural: content brings its own typography classes, so reveals
   match whatever section they live in (light or dark via tone="dark"). */
export default function Reveal({ cue = "more", children, tone }: { cue?: string; children: ReactNode; tone?: "dark" }) {
  const [pin, setPin] = useState(false);
  return (
    <div className={`rv${pin ? " rv-pin" : ""}${tone === "dark" ? " rv-dark" : ""}`}>
      <button
        type="button"
        className="rv-cue"
        aria-expanded={pin}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setPin(p => !p); }}
      >
        <span className="rv-ic" aria-hidden="true">+</span>
        {cue}
      </button>
      <div className="rv-body">
        <div className="rv-in">{children}</div>
      </div>
    </div>
  );
}
