/* Ambient marquee — a slow, looping ribbon of the work. Pure visual hook;
   project details + case-study links live in the Work/Agents sections below. */
const SHOTS = [
  { name: "wsup.ai", img: "/cs/wsup-d-explore.png" },
  { name: "BlueStacks", img: "/cs/bluestacks-home.png" },
  { name: "now.gg", img: "/cs/nowgg-home.png" },
  { name: "Designer Agent", img: "/cs/wsup-d-anime.png" },
  { name: "Reddit Growth Agent", img: "/cs/reddit-top.png" },
];

export default function HeroShowcase() {
  const items = [...SHOTS, ...SHOTS]; // duplicate set for a seamless loop
  return (
    <div className="hmq">
      <div className="hmq-viewport">
        <div className="hmq-track">
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
