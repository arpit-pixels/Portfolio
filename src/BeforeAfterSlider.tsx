import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

/* Scrollable before/after comparison. The AFTER image sits in normal flow and
   defines the canvas height; the BEFORE side is a self-contained column (grey
   backdrop + old image pinned to top) clipped to the left of the divider — so
   where the shorter old page ends, the left side shows grey, not the new image.
   Drag the handle (or ← →) to wipe; scroll/wheel to move down the page. */
export default function BeforeAfterSlider({
  beforeSrc, afterSrc,
  beforeAlt = "", afterAlt = "",
  beforeLabel = "Before", afterLabel = "After",
}: Props) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const slider = useRef<HTMLDivElement>(null);

  const apply = useCallback((clientX: number) => {
    const el = slider.current; if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => { if (dragging.current) apply(e.clientX); };
    const up = () => { dragging.current = false; };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [apply]);

  const startDrag = (e: React.PointerEvent) => { e.preventDefault(); e.stopPropagation(); dragging.current = true; apply(e.clientX); };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); setPos(p => Math.max(0, p - 4)); }
    if (e.key === "ArrowRight") { e.preventDefault(); setPos(p => Math.min(100, p + 4)); }
  };

  const clip = `inset(0 ${100 - pos}% 0 0)`;

  return (
    <div
      className="ba-slider"
      ref={slider}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onKeyDown={onKey}
    >
      <div className="ba-scroll">
        <div className="ba-canvas">
          <img src={afterSrc} alt={afterAlt} className="ba-img" draggable={false} />
          <div className="ba-before" style={{ clipPath: clip }}>
            <img src={beforeSrc} alt={beforeAlt} className="ba-before-img" draggable={false} />
          </div>
        </div>
      </div>
      <span className="ba-tag ba-tag-before" style={{ opacity: pos > 12 ? 1 : 0 }}>{beforeLabel}</span>
      <span className="ba-tag ba-tag-after" style={{ opacity: pos < 88 ? 1 : 0 }}>{afterLabel}</span>
      <div className="ba-divider" style={{ left: `${pos}%` }}>
        <div className="ba-handle" onPointerDown={startDrag}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </div>
      </div>
    </div>
  );
}
