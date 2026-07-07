import { type ReactNode } from "react";

export interface Stage { icon: string; label: string; sub?: string; }
/* loop: which stages the iteration cycle spans — the arc runs from stages[from]
   back to stages[to] (from > to). Omit for a purely linear process. */
export interface FlowData { stages: Stage[]; loop?: { from: number; to: number; label?: string } }

const INK = "#0C0C0C";
const BLUE = "#0057FF";
const SANS = "Inter, -apple-system, system-ui, sans-serif";

/* simple line icons drawn in a 24×24 box (stroke inherits; blue accents inline) */
const ICONS: Record<string, ReactNode> = {
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><line x1="15.5" y1="15.5" x2="21" y2="21" stroke={BLUE} /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.6" /><circle cx="12" cy="12" r="1.7" fill={BLUE} stroke="none" /></>,
  bulb: <><path d="M9.5 18.5h5" /><path d="M10.5 21.5h3" /><path d="M12 2.6a6.2 6.2 0 0 0-3.6 11.2c.6.45 1 1.15 1.05 1.9h5.1c.05-.75.45-1.45 1.05-1.9A6.2 6.2 0 0 0 12 2.6Z" /><path d="M12 .4v1.3" stroke={BLUE} /><path d="m3.6 6.3 1 .7" stroke={BLUE} /><path d="m20.4 6.3-1 .7" stroke={BLUE} /></>,
  layout: <><rect x="3" y="4" width="18" height="16" rx="2" /><line x1="3" y1="8.5" x2="21" y2="8.5" /><line x1="9.5" y1="8.5" x2="9.5" y2="20" /><rect x="5" y="11" width="3" height="2" fill={BLUE} stroke="none" /><rect x="11.5" y="11" width="7" height="2" fill={BLUE} stroke="none" /></>,
  ship: <><path d="M21.5 2.5 14.5 21.5 11 13 2.5 9.5 21.5 2.5Z" /><path d="M21.5 2.5 11 13" stroke={BLUE} /></>,
  users: <><circle cx="9" cy="8" r="3.4" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0" /><path d="M16 5.2a3.4 3.4 0 0 1 0 6.4" stroke={BLUE} /><path d="M18 20a5.5 5.5 0 0 0-3-4.9" stroke={BLUE} /></>,
  grid: <><rect x="3" y="3" width="7.5" height="7.5" rx="1.5" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" stroke={BLUE} /><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" /></>,
  chat: <><path d="M4 5h16v11H8l-4 4Z" /><line x1="8" y1="9.5" x2="16" y2="9.5" stroke={BLUE} /><line x1="8" y1="12.5" x2="13" y2="12.5" stroke={BLUE} /></>,
  bolt: <><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /><path d="M11 14h-1" stroke={BLUE} /></>,
  loop: <><path d="M3 12a9 9 0 0 1 15.5-6.2" /><path d="M21 12a9 9 0 0 1-15.5 6.2" stroke={BLUE} /><path d="M18 2v4h-4" /><path d="M6 22v-4h4" stroke={BLUE} /></>,
};

export default function ProcessFlow({ data }: { data: FlowData }) {
  const n = data.stages.length;
  const VW = 1300, pad = n >= 6 ? 70 : 95;
  const step = (VW - 2 * pad) / n;
  const xs = data.stages.map((_, i) => pad + step * (i + 0.5));
  const iconY = 140, labelY = 252, subY = 280;

  return (
    <div className="pflow">
      <div className="pflow-title">UX Process</div>
      <svg className="pflow-svg pflow-desktop" viewBox="0 42 1300 318" role="img" aria-label="UX process">
        <defs>
          <marker id="pf-arr" markerWidth="9" markerHeight="9" refX="5.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L6,3 L0,6" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* forward arcs across the top */}
        {xs.slice(0, -1).map((xa, i) => {
          const xb = xs[i + 1];
          return <path key={i} d={`M ${xa + 24},104 C ${xa + (xb - xa) * 0.3},52 ${xb - (xb - xa) * 0.3},52 ${xb - 24},104`} fill="none" stroke={BLUE} strokeWidth="1.7" strokeDasharray="4 5" markerEnd="url(#pf-arr)" />;
        })}

        {/* iteration loop — spans only the stages that actually iterate */}
        {data.loop && (
          <path d={`M ${xs[data.loop.from]},306 C ${xs[data.loop.from]},348 ${xs[data.loop.to]},348 ${xs[data.loop.to]},306`} fill="none" stroke={BLUE} strokeWidth="1.7" strokeDasharray="4 5" opacity="0.5" markerEnd="url(#pf-arr)" />
        )}

        {/* stages: icon + label + sub */}
        {data.stages.map((s, i) => (
          <g key={i}>
            <g transform={`translate(${xs[i] - 31} ${iconY - 31}) scale(2.58)`} stroke={INK} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {ICONS[s.icon]}
            </g>
            <text x={xs[i]} y={labelY} textAnchor="middle" fill={INK} fontSize="27" fontWeight="700" fontFamily={SANS}>{s.label}</text>
            {s.sub && <text x={xs[i]} y={subY} textAnchor="middle" fill="#6b7280" fontSize="16.5" fontFamily={SANS}>{s.sub}</text>}
          </g>
        ))}
      </svg>

      <div className="pflow-mobile">
        {data.stages.map((s, i) => (
          <div className="pflow-m-step" key={i}>
            <svg className="pflow-m-icon" viewBox="0 0 24 24" stroke={INK} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">{ICONS[s.icon]}</svg>
            <div className="pflow-m-text">
              <div className="pflow-m-label">{s.label}</div>
              {s.sub && <div className="pflow-m-sub">{s.sub}</div>}
            </div>
          </div>
        ))}
        {data.loop && <div className="pflow-m-loop">{data.loop.label ?? "↻ iterate"}</div>}
      </div>
    </div>
  );
}
