import { useState } from "react";

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
    inst: "Indian Institute of Technology Delhi",
    course: "Design Thinking and Innovation",
    year: "2021",
    meta: "Continuing Education Programme · Centre for Rural Development & Technology",
    verify: null,
  },
  {
    img: "/cs/certs/ixdf-design-thinking.png",
    inst: "Interaction Design Foundation",
    course: "Design Thinking: The Beginner's Guide",
    year: "2019",
    meta: "Distinction — Top 10% in class",
    verify: "https://www.ixdf.org/members/arpit-yadav",
  },
  {
    img: "/cs/certs/ixdf-mobile-ux.png",
    inst: "Interaction Design Foundation",
    course: "Mobile User Experience (UX) Design",
    year: "2017",
    meta: "Early UX foundations — picked up alongside iOS work at Altran",
    verify: "https://www.ixdf.org/members/arpit-yadav",
  },
];

export default function EducationCerts() {
  const [zoom, setZoom] = useState<string | null>(null);

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
              onClick={() => setZoom(c.img)}
              aria-label={`Open ${c.course} certificate`}
            >
              <img src={c.img} alt={`${c.course} certificate`} />
            </button>
            <div className="cert-body">
              <div className="cert-inst">{c.inst}</div>
              <div className="cert-course">{c.course}</div>
              <div className="cert-year">{c.year}</div>
              <div className="cert-meta">{c.meta}</div>
              {c.verify && (
                <a
                  href={c.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify"
                >
                  Verify →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {zoom && (
        <div className="cert-lightbox" onClick={() => setZoom(null)}>
          <button
            type="button"
            className="cert-lightbox-close"
            onClick={() => setZoom(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img src={zoom} alt="Certificate" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
