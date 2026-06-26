import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

/* ─── DATA ────────────────────────────────────────────────────────────── */
const DECKS = [
  { slug: "chatgpt-1b-users", title: "ChatGPT hit 1 billion users", n: 6, video: "studio-short" },
  { slug: "microsoft-mai", title: "Microsoft launched 6 AI models at once", n: 6 },
  { slug: "china-295b-ai", title: "China bet $295 billion on AI", n: 6 },
  { slug: "qwen-37-max", title: "Alibaba's Qwen caught Claude at half the cost", n: 5 },
  { slug: "openai-dreaming-v3", title: "ChatGPT got its biggest memory upgrade", n: 5 },
  { slug: "great-american-ai-act", title: "Congress dropped a 269-page AI bill", n: 5 },
  { slug: "shazeer-openai", title: "The Transformer's creator rejoined OpenAI", n: 5 },
];

const slide = (slug: string, i: number) => `/cs/studio/decks/${slug}/${String(i + 1).padStart(2, "0")}.jpg`;

type Open = { d: number; i: number } | null;

/* ─── COMPONENT ───────────────────────────────────────────────────────── */
export default function CarouselDecks() {
  const [open, setOpen] = useState<Open>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const deck = open ? DECKS[open.d] : null;

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((dir: number) => {
    setOpen(o => (o ? { ...o, i: (o.i + dir + DECKS[o.d].n) % DECKS[o.d].n } : o));
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open, close, step]);

  const featured = DECKS[0];
  const rest = DECKS.slice(1);

  return (
    <>
      {/* FEATURED — big cover + slide thumbs, video on the right */}
      <div className="cd-featured">
        <div>
          <button className="cd-feat-cover" onClick={() => setOpen({ d: 0, i: 0 })} aria-label={`Open ${featured.title} carousel`}>
            <img src={slide(featured.slug, 0)} alt={featured.title} />
            <span className="cd-open-pill">Open carousel · {featured.n} slides</span>
          </button>
          <div className="cd-thumbs">
            {Array.from({ length: featured.n - 1 }, (_, k) => (
              <button key={k} className="cd-thumb" onClick={() => setOpen({ d: 0, i: k + 1 })} aria-label={`Slide ${k + 2}`}>
                <img src={slide(featured.slug, k + 1)} alt={`Slide ${k + 2}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
        <div className="cd-feat-video">
          <video className="cs-video" src={`/cs/studio/${featured.video}.mp4`} poster="/cs/studio/poster-short.png" autoPlay={!reduceMotion} muted loop playsInline controls />
          <div className="cs-video-cap"><strong style={{ color: "var(--ink)" }}>Same topic, as a video</strong><br />narrated 9:16 Short — captioned, scored</div>
        </div>
      </div>

      {/* GRID — click any to open its full deck */}
      <div className="cd-grid">
        {rest.map((d, idx) => (
          <button key={d.slug} className="cd-card" onClick={() => setOpen({ d: idx + 1, i: 0 })} aria-label={`Open ${d.title} carousel`}>
            <img src={slide(d.slug, 0)} alt={d.title} loading="lazy" />
            <span className="cd-card-pill">{d.n} slides</span>
          </button>
        ))}
      </div>
      <p className="cs-p" style={{ textAlign: "center", marginTop: 16, fontSize: "var(--fs-sm)", color: "var(--muted)", maxWidth: "none" }}>Click any carousel to open the full deck.</p>

      {/* LIGHTBOX — portaled to body so position:fixed escapes the transformed section */}
      {open && deck && createPortal(
        <div className="cd-lb" onClick={close}>
          <button className="cd-lb-close" onClick={close} aria-label="Close">✕</button>
          <button className="cd-lb-arrow cd-lb-prev" onClick={e => { e.stopPropagation(); step(-1); }} aria-label="Previous slide">‹</button>
          <div className="cd-lb-stage" onClick={e => e.stopPropagation()}>
            <img className="cd-lb-img" src={slide(deck.slug, open.i)} alt={`${deck.title} — slide ${open.i + 1}`} />
            <div className="cd-lb-count">{open.i + 1} / {deck.n} · {deck.title}</div>
            <div className="cd-lb-thumbs">
              {Array.from({ length: deck.n }, (_, k) => (
                <button key={k} className={"cd-lb-t" + (k === open.i ? " on" : "")} onClick={() => setOpen({ d: open.d, i: k })} aria-label={`Go to slide ${k + 1}`}>
                  <img src={slide(deck.slug, k)} alt={`Slide ${k + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
          <button className="cd-lb-arrow cd-lb-next" onClick={e => { e.stopPropagation(); step(1); }} aria-label="Next slide">›</button>
        </div>,
        document.body
      )}
    </>
  );
}
