import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

/* Grid video UX:
   - rest: poster + centered play icon
   - hover: muted preview, NO native bar — just a small unmute/volume toggle
   - click (anywhere): opens a fullscreen player with sound + full controls
   - only one preview plays at a time */
export default function HoverVideo({ src, poster, label }: { src: string; poster: string; label?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [modal, setModal] = useState(false);

  const startPreview = () => {
    const v = ref.current;
    if (!v) return;
    document.querySelectorAll<HTMLVideoElement>("video[data-hover]").forEach(o => { if (o !== v) o.pause(); });
    setPlaying(true);
    v.play().catch(() => {});
  };
  const stopPreview = () => {
    const v = ref.current;
    if (!v) return;
    setPlaying(false);
    setMuted(true);
    v.muted = true;
    v.pause();
    v.currentTime = 0;
    v.load();
  };
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };
  const openModal = () => {
    document.querySelectorAll<HTMLVideoElement>("video[data-hover]").forEach(o => o.pause());
    setModal(true);
  };

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModal(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [modal]);

  return (
    <div className="hv" onMouseEnter={startPreview} onMouseLeave={stopPreview} onClick={openModal}>
      <video
        ref={ref}
        data-hover
        className="cs-video"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
      />
      {playing ? (
        <button className="hv-vol" onClick={toggleMute} aria-label={muted ? "Unmute preview" : "Mute preview"}>
          {muted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z" opacity=".35" /><path d="M19 5 5 19" stroke="currentColor" strokeWidth="2" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z" /></svg>
          )}
        </button>
      ) : (
        <button className="hv-play" onClick={e => { e.stopPropagation(); openModal(); }} aria-label={`Play ${label || "video"}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
        </button>
      )}

      {modal && createPortal(
        <div className="vp" onClick={e => { e.stopPropagation(); setModal(false); }}>
          <button className="vp-close" onClick={e => { e.stopPropagation(); setModal(false); }} aria-label="Close player">✕</button>
          <video className="vp-video" src={src} poster={poster} autoPlay loop playsInline controls onClick={e => e.stopPropagation()} />
        </div>,
        document.body
      )}
    </div>
  );
}
