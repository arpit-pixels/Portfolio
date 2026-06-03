import { useR } from "./WsupCaseStudy";
import { Pill } from "./InterviewMode";

/* Paced by theme. Surfaces in one section, process flows in another. Append to extend. */
const CREATION = [
  { src: "/cs/wsup-screens/imagegen-desktop.png", alt: "Image Generator", cap: "Image generator" },
  { src: "/cs/wsup-screens/create-desktop.png", alt: "Create Character", cap: "Create character" },
];
const CREATION_M = [
  { src: "/cs/wsup-screens/m-create.png", alt: "Create — character or story", cap: "Create" },
  { src: "/cs/wsup-screens/m-create-character.png", alt: "Create Character mobile", cap: "Create character" },
  { src: "/cs/wsup-screens/m-create-post.png", alt: "Create a Post", cap: "Create a post" },
];
const GIFT_FLOW = [
  { src: "/cs/wsup-screens/gifts-mobile.png", alt: "Pick a gift", cap: "Pick a gift" },
  { src: "/cs/wsup-screens/gift-confirm.png", alt: "Confirm and add a note", cap: "Confirm + note" },
  { src: "/cs/wsup-screens/gift-chat.png", alt: "Gift lands in the chat", cap: "Lands in chat" },
  { src: "/cs/wsup-screens/apply-skin.png", alt: "Unlock a character skin", cap: "Unlock a skin" },
];

function Row({ items, max, cols }: { items: { src: string; alt: string; cap?: string }[]; max: number; cols?: number }) {
  if (cols) {
    return (
      <div className="wsup-mobile-gallery" style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 12, maxWidth: 760, marginTop: 16 }}>
        {items.map((s, i) => (
          <div key={i} className="cs-screen-item">
            <img src={s.src} alt={s.alt} className="cs-screenshot" />
            <span className="cs-cap">{s.cap ?? s.alt}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="wsup-mobile-gallery" style={{ flexWrap: "wrap", marginTop: 16 }}>
      {items.map((s, i) => (
        <div key={i} className="cs-screen-item" style={{ maxWidth: max }}>
          <img src={s.src} alt={s.alt} className="cs-screenshot" />
          <span className="cs-cap">{s.cap ?? s.alt}</span>
        </div>
      ))}
    </div>
  );
}

function Shot({ src, alt, cap }: { src: string; alt: string; cap?: string }) {
  return (
    <div className="cs-screenshots-single" style={{ marginTop: 16 }}>
      <img src={src} alt={alt} className="cs-screenshot" />
      <span className="cs-cap">{cap ?? alt}</span>
    </div>
  );
}

export default function WsupCSScreens() {
  const prodR = useR(), flowR = useR();
  const sub = { color: "rgba(255,255,255,.55)" };

  return (
    <>
      {/* THE PRODUCT — surface breadth */}
      <section className="cs-sec cs-sec-dark" ref={prodR}>
        <div className="cs-sec-head"><span className="stag" style={{ color: "rgba(255,255,255,.4)" }}>THE PRODUCT</span></div>
        <h2 className="cs-h2" style={{ color: "white" }}>Three more surfaces,<br /><em>end to end</em></h2>
        <p className="cs-p" style={sub}>Explore, Chat, and Stories are the core loop. The same design system also carries creation, monetization, and community — built on the shared tokens and components.<Pill
          q="Six surfaces — chat, stories, creation, image gen, gifting, leaderboard. Isn't that a focus problem? Why not do one thing extremely well?"
          a="Because the thing we do well IS the connection between them — that's the whole competitive thesis. Every competitor does one surface brilliantly and silos the rest; users were already stitching three apps together to get what wsup does in one. The breadth isn't unfocused, it's the product. What keeps it from sprawling is that nothing ships unless it earns its place against the design system and the credit economy — a surface that can't connect to those doesn't get built."
        /></p>

        <h3 className="cs-h3" style={{ color: "white", marginTop: 36 }}>Creation — the other half of the loop</h3>
        <p className="cs-p" style={sub}>Consuming characters is one half; making them is the other. The builder and image tools lower the barrier to create — on desktop and mobile.</p>
        <div className="cs-screen-gallery">
          {CREATION.map((s, i) => (
            <div key={i} className="cs-screen-item">
              <img src={s.src} alt={s.alt} className="cs-screenshot" />
              <span className="cs-cap">{s.cap ?? s.alt}</span>
            </div>
          ))}
        </div>
        <Row items={CREATION_M} max={210} />

        <h3 className="cs-h3" style={{ color: "white", marginTop: 44 }}>Monetization — engagement that pays for itself</h3>
        <p className="cs-p" style={sub}>Gifting turns a fun moment into credit spend, without ever blocking the conversation.</p>
        <Shot src="/cs/wsup-screens/gifts-desktop.png" alt="Send Gifts — in-chat gift store" cap="In-chat gift store" />

        <h3 className="cs-h3" style={{ color: "white", marginTop: 44 }}>Community — a home for creators</h3>
        <p className="cs-p" style={sub}>Creators get a profile, a leaderboard to compete on, and deferred sign-in so nothing blocks the first chat.</p>
        <Shot src="/cs/wsup-screens/profile-desktop.png" alt="Creator profile" cap="Creator profile" />
        <Shot src="/cs/wsup-screens/login.png" alt="Sign-in — deferred auth" cap="Deferred sign-in" />

        <h3 className="cs-h3" style={{ color: "white", marginTop: 44 }}>The front door — web to app</h3>
        <p className="cs-p" style={sub}>A download surface that converts web users to the app, with an FAQ that handles the Android sideload questions — desktop and mobile.</p>
        <Shot src="/cs/wsup-screens/download-app.png" alt="Download page" cap="Download page" />
      </section>

      {/* DESIGNED IN FIGMA — flows */}
      <section className="cs-sec" ref={flowR}>
        <div className="cs-sec-head"><span className="stag">DESIGNED IN FIGMA</span></div>
        <h2 className="cs-h2">Features ship as<br />complete <em>flows</em></h2>
        <p className="cs-p">Nothing ships as a single screen. Each feature is mapped end to end in Figma first — every state, every edge<Pill
          q="'Every state, every edge' is what every designer claims. Show me you mean it — what edge case did you catch in Figma that would've shipped broken?"
          a="The credits paywall is the clearest. The happy path is 'you have credits, you act.' The edge that mattered was the dead-end: user hits zero mid-action with no obvious recovery. In Figma I mapped the not-enough-credits state to always offer two exits — claim daily rewards or buy — so there's never a screen where the only option is to leave. If I'd designed only the screens and not the flow, engineering would've shipped the empty state as a dead stop, because that's the path of least resistance in code."
        /> — then built screen-for-screen.</p>

        <h3 className="cs-h3" style={{ marginTop: 32 }}>Gift → image</h3>
        <p className="cs-p">Send a character a gift, they react in chat, and a personalized "skin" unlocks. Artboard first, then the shipped screens.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 8 }}>
          <img src="/cs/wsup-screens/figma-gift-flow.png" alt="Figma artboard — the mobile gift to image flow" className="cs-screenshot" />
          <span className="cs-cap">Figma artboard — gift → image</span>
        </div>
        <Row items={GIFT_FLOW} max={195} cols={4} />

        <h3 className="cs-h3" style={{ marginTop: 40 }}>The credits paywall</h3>
        <p className="cs-p">Running low on credits is designed as a flow — always a top-up path (daily rewards or buy), never a dead end.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 8 }}>
          <img src="/cs/wsup-screens/flow-credits.png" alt="Not-enough-credits paywall flow" className="cs-screenshot" />
          <span className="cs-cap">Credits paywall flow</span>
        </div>

        <h3 className="cs-h3" style={{ marginTop: 40 }}>Voice calls</h3>
        <p className="cs-p">Calling a character, end to end — connect, talk, listen, time-over, then a quick feedback prompt and a transcript back in chat.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 8 }}>
          <img src="/cs/wsup-screens/flow-voice-call.png" alt="Voice call flow" className="cs-screenshot" />
          <span className="cs-cap">Voice call flow</span>
        </div>

        <h3 className="cs-h3" style={{ marginTop: 40 }}>Becoming a creator</h3>
        <p className="cs-p">A gamified unlock: complete a few tasks, unlock Creator Mode, and land in a creator dashboard with real analytics.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 8 }}>
          <img src="/cs/wsup-screens/flow-creator-mode.png" alt="Creator Mode unlock flow" className="cs-screenshot" />
          <span className="cs-cap">Creator Mode unlock</span>
        </div>

        <h3 className="cs-h3" style={{ marginTop: 40 }}>…and it all lives in one file</h3>
        <p className="cs-p">Every surface above — Feed, Chat, mobile + desktop, navigation, login, create-character, report — organized in a single working Figma file.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 8 }}>
          <img src="/cs/wsup-screens/figma-file.png" alt="The full wsup.ai Figma file" className="cs-screenshot" />
          <span className="cs-cap">One Figma file</span>
        </div>
      </section>
    </>
  );
}
