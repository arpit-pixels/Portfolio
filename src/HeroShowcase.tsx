import { useEffect, useRef } from "react";

/* Ambient marquee — a slow, looping ribbon of the work. Pure visual hook;
   project details + case-study links live in the Work/Agents sections below.
   Desktop: pure-CSS animation, pauses on hover.
   Touch: finger-swipeable (native scroll, seamless wrap) + JS auto-drift that
   pauses while interacting and resumes 2s after the finger leaves. */
const SHOTS = [
  { name: "wsup.ai", img: "/cs/wsup-d-explore.png" },
  { name: "BlueStacks", img: "/cs/bluestacks-home.png" },
  { name: "now.gg", img: "/cs/nowgg-home.png" },
  { name: "Designer Agent", img: "/cs/wsup-d-anime.png" },
  { name: "Reddit Growth Agent", img: "/cs/reddit-top.png" },
  { name: "Content Studio", img: "/cs/studio/studio-1b.png" },
  { name: "Content Studio — anime", img: "/cs/studio/poster-anime.png" },
];

const LOOP_MS = 42000; // one full loop — mirrors the CSS animation pace

export default function HeroShowcase() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Touch-primary devices only — desktop keeps the CSS marquee
    if (!window.matchMedia("(hover: none)").matches) return;
    const viewport = viewportRef.current, track = trackRef.current;
    if (!viewport || !track) return;
    const autoDrift = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0, idleTimer = 0, last = 0, pos = 0;
    let interacting = false;
    const half = () => track.scrollWidth / 2; // content is duplicated once

    const step = (t: number) => {
      const h = half();
      if (last && !interacting && h > 0) {
        pos += (h / LOOP_MS) * (t - last);
        if (pos >= h) pos -= h;
        viewport.scrollLeft = pos;
      }
      last = t;
      raf = requestAnimationFrame(step);
    };

    const pause = () => { interacting = true; clearTimeout(idleTimer); };
    const scheduleResume = () => {
      clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        pos = viewport.scrollLeft;
        interacting = false;
      }, 2000);
    };
    const onScroll = () => {
      if (!interacting) return; // ignore our own auto-drift writes
      const h = half();
      if (h > 0) {
        // seamless wrap while the finger drags or momentum runs
        if (viewport.scrollLeft >= h) viewport.scrollLeft -= h;
        else if (viewport.scrollLeft <= 0) viewport.scrollLeft += h;
      }
      scheduleResume(); // momentum keeps firing scroll — resume only after it settles
    };

    viewport.addEventListener("touchstart", pause, { passive: true });
    viewport.addEventListener("touchend", scheduleResume, { passive: true });
    viewport.addEventListener("touchcancel", scheduleResume, { passive: true });
    viewport.addEventListener("scroll", onScroll, { passive: true });
    if (autoDrift) raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idleTimer);
      viewport.removeEventListener("touchstart", pause);
      viewport.removeEventListener("touchend", scheduleResume);
      viewport.removeEventListener("touchcancel", scheduleResume);
      viewport.removeEventListener("scroll", onScroll);
    };
  }, []);

  const items = [...SHOTS, ...SHOTS]; // duplicate set for a seamless loop
  return (
    <div className="hmq">
      <div className="hmq-viewport" ref={viewportRef}>
        <div className="hmq-track" ref={trackRef}>
          {items.map((s, i) => (
            <div className="hmq-card" key={i} aria-hidden={i >= SHOTS.length}>
              <img src={s.img} alt={s.name} draggable={false} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
