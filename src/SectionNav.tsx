import { useEffect, useRef, useState } from "react";

/* Auto-discovering section index for the long case-study / agent pages.
   Reads the existing `.stag` labels (e.g. "01 / THE BRIEF") from every
   section.cs-sec at runtime — no per-page section list to maintain.
   Desktop: a fixed left rail (ticks that expand to labels on hover) with
   scroll-spy. Mobile/tablet: a floating "you-are-here" pill that opens a
   bottom sheet of all sections. */
type Sec = { id: string; num: string; name: string };

export default function SectionNav() {
  const [secs, setSecs] = useState<Sec[]>([]);
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const els = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>("section.cs-sec")].filter(s => s.querySelector(".stag"));
    const list: Sec[] = [];
    const found: HTMLElement[] = [];
    nodes.forEach((s, i) => {
      const raw = (s.querySelector(".stag")?.textContent || "").trim();
      if (!raw) return;
      if (!s.id) s.id = `sec-${i}`;
      const m = raw.match(/^(\S+)\s*[/·]\s*(.+)$/);
      list.push(m ? { id: s.id, num: m[1], name: m[2] } : { id: s.id, num: "", name: raw });
      found.push(s);
    });
    els.current = found;
    setSecs(list);

    let raf = 0;
    const spy = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const line = window.innerHeight * 0.28;
        let idx = 0;
        els.current.forEach((el, i) => { if (el.getBoundingClientRect().top <= line) idx = i; });
        setActive(idx);
      });
    };
    window.addEventListener("scroll", spy, { passive: true });
    window.addEventListener("resize", spy);
    spy();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", spy); window.removeEventListener("resize", spy); };
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  if (secs.length < 3) return null;
  const cur = secs[active] || secs[0];

  return (
    <>
      <div className="secnav" role="navigation" aria-label="On this page">
        {secs.map((s, i) => (
          <button key={s.id} className={`secnav-i${i === active ? " on" : ""}`} onClick={() => go(s.id)} aria-current={i === active}>
            <span className="secnav-tick" aria-hidden="true" />
            <span className="secnav-txt">{s.num && <b>{s.num}</b>}{s.name}</span>
          </button>
        ))}
      </div>

      <div className={`secnav-m${open ? " open" : ""}`}>
        {open && <button className="secnav-m-scrim" aria-label="Close section list" onClick={() => setOpen(false)} />}
        <div className="secnav-m-sheet" role="menu">
          {secs.map((s, i) => (
            <button key={s.id} role="menuitem" className={`secnav-m-i${i === active ? " on" : ""}`} onClick={() => go(s.id)}>
              {s.num && <span className="secnav-m-num">{s.num}</span>}{s.name}
            </button>
          ))}
        </div>
        <div className="secnav-m-pillwrap">
          <button className="secnav-m-pill" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-label="Jump to section">
            <span className="secnav-m-dots" aria-hidden="true"><i /><i /><i /></span>
            <span className="secnav-m-cur">{cur.num && <b>{cur.num}</b>}{cur.name}</span>
            <span className="secnav-m-chev" aria-hidden="true" style={{ transform: open ? "rotate(180deg)" : "none" }}>▾</span>
          </button>
        </div>
      </div>
    </>
  );
}
