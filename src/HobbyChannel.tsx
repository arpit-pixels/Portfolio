/* Off the clock — the gaming YouTube channel. Deliberately low in the page
   hierarchy: domain credibility + personality right before the contact CTA,
   never competing with the agents/work sections. */
export default function HobbyChannel() {
  return (
    <section id="hobby" className="sec">
      <div className="shead">
        <h2 className="sh2" style={{ opacity: 1, transform: "none" }}>Off the <em>clock</em></h2>
        <span className="stag">06 / HOBBY</span>
      </div>
      <a
        href="https://youtube.com/@gamerappy"
        target="_blank"
        rel="noopener noreferrer"
        className="yt-card"
        aria-label="Gamer Appy — my gaming YouTube channel"
      >
        <div className="yt-banner"><img src="/yt-banner.jpg" alt="Gamer Appy channel banner" loading="lazy" /></div>
        <div className="yt-body">
          <img src="/yt-avatar.jpg" alt="" className="yt-avatar" loading="lazy" />
          <div className="yt-info">
            <div className="yt-name">Gamer Appy <span className="yt-handle">@gamerappy</span></div>
            <div className="yt-stats">18.8K subscribers · 1.4K videos</div>
            <p className="yt-p">
              PC gameplay, Hindi commentary, hand-made thumbnails. The same audience I design
              for at BlueStacks and now.gg — I just spend evenings on their side of the screen.
            </p>
          </div>
          <span className="yt-cta wk-visit">Visit channel →</span>
        </div>
      </a>
    </section>
  );
}
