import { useState } from "react";
import { createPortal } from "react-dom";

const EDU = [
  {
    title: "Master of Computer Application",
    inst: "BITs, Noida",
    note: "Computer science foundation — shapes how I collaborate with engineering and architect design systems.",
  },
  {
    title: "Bachelor of Science, Computer Science",
    inst: "SGGS, University of Delhi",
    note: "Co-founded Invictus, a creative society that won filmmaking awards at IIT Delhi and elsewhere — early experience in storytelling and visual craft.",
  },
];

const CERTS = [
  {
    img: "/cs/certs/iitd-design-thinking.png",
    label: "IIT Delhi · 2021",
    course: "Design Thinking and Innovation",
    meta: "Design thinking applied to social-impact problems",
  },
  {
    img: "/cs/certs/ixdf-design-thinking.png",
    label: "IxDF · 2019",
    course: "Design Thinking: The Beginner's Guide",
    meta: "Distinction — Top 10% in class",
  },
  {
    img: "/cs/certs/ixdf-mobile-ux.png",
    label: "IxDF · 2017",
    course: "Mobile User Experience (UX) Design",
    meta: "Where the iOS-to-UX pivot started",
  },
];

export default function EducationCerts() {
  const [zoom, setZoom] = useState<number | null>(null);

  const close = () => setZoom(null);
  const prev = () =>
    setZoom((z) => (z === null ? null : (z - 1 + CERTS.length) % CERTS.length));
  const next = () =>
    setZoom((z) => (z === null ? null : (z + 1) % CERTS.length));

  return (
    <section id="education" className="sec">
      <div className="shead">
        <h2 className="sh2" style={{ opacity: 1, transform: "none" }}>
          Education & <em>certifications</em>
        </h2>
        <span className="stag">04 / EDUCATION</span>
      </div>

      <div className="edu-grid">
        {EDU.map((e, i) => (
          <div key={i} className="edu-card">
            <div className="edu-title">{e.title}</div>
            <div className="edu-inst">{e.inst}</div>
            <p className="edu-note">{e.note}</p>
          </div>
        ))}
      </div>

      <div className="cert-h">Certifications</div>
      <div className="cert-grid">
        {CERTS.map((c, i) => (
          <div key={i} className="cert-card">
            <button
              type="button"
              className="cert-thumb"
              onClick={() => setZoom(i)}
              aria-label={`Open ${c.course} certificate`}
            >
              <img src={c.img} alt={`${c.course} certificate`} />
            </button>
            <div className="cert-body">
              <div className="cert-label">{c.label}</div>
              <div className="cert-course">{c.course}</div>
              <div className="cert-meta">{c.meta}</div>
            </div>
          </div>
        ))}
      </div>

      {zoom !== null && createPortal(
        <div className="cert-lightbox" onClick={close}>
          <button
            type="button"
            className="cert-lightbox-close"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>
          <button
            type="button"
            className="cert-lightbox-nav cert-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous certificate"
          >
            ‹
          </button>
          <button
            type="button"
            className="cert-lightbox-nav cert-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next certificate"
          >
            ›
          </button>
          <div className="cert-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={CERTS[zoom].img} alt={CERTS[zoom].course} />
            <div className="cert-lightbox-caption">
              <div className="cert-lightbox-label">{CERTS[zoom].label}</div>
              <div className="cert-lightbox-course">{CERTS[zoom].course}</div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
