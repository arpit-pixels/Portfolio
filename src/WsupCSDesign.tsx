import { useR } from "./WsupCaseStudy";
import { IDEATION_BOARDS, FEATURE_MAP, TOKENS, TEXT_HIERARCHY } from "./wsup-case-study-data";
import { TextWithPills, Pill, type PillSpec } from "./InterviewMode";

export default function WsupCSDesign() {
  const ideationR = useR(), implR = useR(), systemR = useR();

  return (
    <>
      {/* 04 — IDEATION */}
      <section className="cs-sec" ref={ideationR}>
        <div className="cs-sec-head"><span className="stag">04 / IDEATION</span></div>
        <h2 className="cs-h2">Every shipped decision<br />had a <em>rejected path</em></h2>
        <p className="cs-p">Ashish (PM) handed me tasks — "design the credit popup," "redesign Explore," "figure out signup." I'd make 2–3 options each. We'd A/B test or pick based on established UX patterns. The boards below show what shipped, what got rejected, and why.</p>

        <div className="wsup-ideation-list">
          {IDEATION_BOARDS.map((b, i) => {
            const bx = b as { chosenWhyPills?: PillSpec[]; img?: string; imgCaption?: string };
            return (
              <div key={i} className="wsup-ideation-board">
                <div className="wsup-ideation-head">
                  <span className="wsup-ideation-n">{b.n}</span>
                  <h4 className="wsup-ideation-surface">{b.surface}</h4>
                </div>
                <p className="wsup-ideation-problem"><strong>Problem:</strong> {b.problem}</p>
                <div className="wsup-ideation-chosen">
                  <span className="wsup-ideation-tag wsup-ideation-tag-chosen">SHIPPED</span>
                  <p className="wsup-ideation-chosen-what">{b.chosen}</p>
                  <p className="wsup-ideation-chosen-why"><TextWithPills text={b.chosenWhy} pills={bx.chosenWhyPills} /></p>
                </div>
                {bx.img && (
                  <div className="cs-screen-item" style={{ maxWidth: 720, margin: "18px auto 22px" }}>
                    <img src={bx.img} alt={b.surface} className="cs-screenshot" />
                    {bx.imgCaption && <span className="cs-screen-label" style={{ textAlign: "center", display: "block" }}>{bx.imgCaption}</span>}
                  </div>
                )}
                <div className="wsup-ideation-alts">
                  <div className="wsup-ideation-alts-h">Considered and rejected</div>
                  {b.alternatives.map((a, j) => {
                    const ax = a as { rejectedPills?: PillSpec[] };
                    return (
                      <div key={j} className="wsup-ideation-alt">
                        <div className="wsup-ideation-alt-path">{a.path}</div>
                        <div className="wsup-ideation-alt-why"><strong>Why considered:</strong> {a.why}</div>
                        <div className="wsup-ideation-alt-rej"><strong>Why rejected:</strong> <TextWithPills text={a.rejected} pills={ax.rejectedPills} /></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="cs-h3" style={{ marginTop: 36 }}>Where every shipped feature came from</h3>
        <p className="cs-p">No features shipped without a real reason. Each one traces back to a research signal, a competitor parallel, or real-usage learning.</p>
        <div className="wsup-feature-map">
          <div className="wsup-feature-row wsup-feature-head">
            <div>Domain</div><div>Features</div><div>Origin</div>
          </div>
          {FEATURE_MAP.map((f, i) => (
            <div key={i} className="wsup-feature-row">
              <div className="wsup-feature-domain">{f.domain}</div>
              <div className="wsup-feature-features">{f.features}</div>
              <div className="wsup-feature-origin">{f.origin}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 05 — IMPLEMENTATION */}
      <section className="cs-sec cs-sec-dark" ref={implR}>
        <div className="cs-sec-head"><span className="stag" style={{ color: "rgba(255,255,255,.4)" }}>05 / IMPLEMENTATION</span></div>
        <h2 className="cs-h2" style={{ color: "white" }}>Every screen solves<br />a <em>specific</em> problem</h2>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 32 }}>Chat — where users live</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>
          90% of session time happens here. Every other screen in the product either feeds it or supports it.
          <Pill
            q="How do you design the surface where 90% of time is spent — without overdesigning it?"
            a="By making it as transparent as possible. The chat itself shouldn't be visually loud — the AI character is the content, not the chrome around it. Three-column layout (recent chats / conversation / character profile) gives users orientation without crowding the conversation. The constraint was: every UI element on this screen has to either help the conversation or get out of the way. Most of the design work was about restraint, not addition."
            followups={[
              { q: "Were there features you wanted to add to chat but held back on?", a: "Yes. Inline character emotion indicators, conversation summary side panels, mood-based theming. All proposed at various points; all rejected because they'd compete with the conversation for attention. Features that feel cool in a design review can hurt the surface they're on. Chat specifically rewards subtraction." },
            ]}
          />
        </p>
        <div className="cs-screenshots-single" style={{ marginTop: 16 }}>
          <img src="/cs/wsup-screens/chat-desktop.png" alt="Chat desktop — three-column layout" className="cs-screenshot" />
          <span className="cs-cap">Chat — three columns</span>
        </div>

        <h3 className="cs-h3" style={{ color: 'white', marginTop: 40 }}>Mobile — designed separately, not stretched</h3>
        <p className="cs-p" style={{ color: "rgba(255,255,255,.55)" }}>
          Sidebar becomes bottom nav, the grid compresses, conversations go full-bleed. Opposite directions from desktop, both intentional.
          <Pill
            q="Why design separately for mobile and desktop instead of using responsive design?"
            a="Because the use cases are genuinely different. Desktop users are often in lean-in mode — multitasking, full keyboard, longer sessions. They want lots of screen real estate used (three-column chat). Mobile users are often in lean-back mode — shorter sessions, thumb interactions, single-task focus. They want one thing on screen at a time. Responsive design forces a compromise — one of the two contexts always feels stretched or compressed. Designing separately means each context gets the layout it deserves."
            followups={[
              { q: "Doesn't designing twice cost more than designing once?", a: "Short-term yes — more screens to maintain. Long-term, no. Each platform's design degrades less over time because it wasn't built around constraints from the other platform. We invested upfront in two design systems that share tokens but have separate layout primitives. Maintenance is roughly the same as responsive, but the experience is sharper on each platform." },
            ]}
          />
        </p>
        <div className="wsup-mobile-gallery" style={{ flexWrap: "wrap" }}>
          <div className="cs-screen-item" style={{ maxWidth: 178 }}>
            <img src="/cs/wsup-screens/m-explore.png" alt="Mobile explore — ranked grid, bottom nav" className="cs-screenshot" />
            <span className="cs-cap">Explore</span>
          </div>
          <div className="cs-screen-item" style={{ maxWidth: 178 }}>
            <img src="/cs/wsup-screens/m-stories.png" alt="Mobile stories — full-bleed feed" className="cs-screenshot" />
            <span className="cs-cap">Stories</span>
          </div>
          <div className="cs-screen-item" style={{ maxWidth: 178 }}>
            <img src="/cs/wsup-screens/m-chat.png" alt="Mobile chat — full-screen over art" className="cs-screenshot" />
            <span className="cs-cap">Chat</span>
          </div>
          <div className="cs-screen-item" style={{ maxWidth: 178 }}>
            <img src="/cs/wsup-screens/m-chats.png" alt="Mobile chats list — recent conversations" className="cs-screenshot" />
            <span className="cs-cap">Chats list</span>
          </div>
        </div>
      </section>

      {/* 06 — DESIGN SYSTEM */}
      <section className="cs-sec" ref={systemR}>
        <div className="cs-sec-head"><span className="stag">06 / DESIGN SYSTEM</span></div>
        <h2 className="cs-h2">The hidden layer<br />that keeps everything <em>consistent</em></h2>
        <p className="cs-p">
          Dark themes amplify every inconsistency. After a year of patchwork shipping, I named every value and rebuilt every screen on the named system. Engineers stopped relitigating which blue. Features started landing on the system, not on the mess.
          <Pill
            q="Why so many color tokens — couldn't you use fewer?"
            a="It looks like a lot until you list the categories. Text hierarchy alone needs several opacity steps. Surface tokens cover chat, popups, cards, modals, ads, errors, success — each a distinct value because they appear in different contexts. Status colors (credits, errors, warnings, success) for both fills and text are another set. Then accents: blue for actions, orange for premium AI, green for free actions, plus specifics like the SPICY toggle and streak counter. For a product this surface-rich, the set is lean, not bloated. Unused tokens get pruned at every quarterly review."
            followups={[
              { q: "How do you stop the token system from sprawling further?", a: "The rule is: a new token only gets added if it has a justification that an existing token doesn't already cover. Every PR that introduces a token gets a one-line answer to 'why not <existing-token>?' — and if no answer, the existing token wins. It's not a hard cap on count; it's a hard requirement on additions. Token sprawl happens when teams add without that gate." },
            ]}
          />
          {' '}Every value named, every value used on purpose, every value documented.
        </p>
        <div className="cs-token-grid">
          {TOKENS.map((t, i) => <div key={i} className="cs-token-card"><div className="cs-token-n">{t.count}</div><div className="cs-token-l">{t.category}</div></div>)}
        </div>

        <h3 className="cs-h3" style={{ marginTop: 32 }}>How light text needs to be on dark backgrounds</h3>
        <p className="cs-p">
          70% white is the minimum for readable text — not 60% (the industry default).
          <Pill
            q="How did you measure that 70% was the right number?"
            a="Side-by-side comparison with real chat content. I built a Figma file with the same conversation rendered at 60%, 65%, 70%, and 75% white opacity. Engineering looked at it on a 14&quot; laptop in normal office lighting and on a phone in dim room lighting. 60% was readable in office light but disappeared in dim. 65% was readable in dim but felt aggressive in bright light. 70% held up in both. 75% added no readability gain but flattened visual hierarchy. 70% was the floor."
            followups={[
              { q: "Why not just use a contrast ratio standard like WCAG?", a: "We did check WCAG — 70% white on the wsup dark surface passes AA easily. But WCAG is a floor for accessibility compliance, not a guarantee of comfortable reading at scale. A WCAG-passing color can still feel cramped depending on font weight and content density. Visual testing with real content was needed on top of WCAG compliance, not instead of it." },
              { q: "Did you test with users who have vision impairments?", a: "We didn't formally — that's an honest gap. WCAG compliance gives us a baseline, but a lived test with users who need higher contrast would tell us if 70% is right or too low in real-world conditions. It's on the next-quarter roadmap." },
            ]}
          />
          {' '}I tested with real chat messages. This one decision affected every screen.
        </p>
        <div className="wsup-text-hierarchy" style={{ background: '#171717', borderRadius: 12, padding: 20, marginTop: 16 }}>
          {TEXT_HIERARCHY.map((t, i) => (
            <div key={i} className="wsup-th-row">
              <span className="wsup-th-sample" style={{ color: t.color }}>Aa</span>
              <span className="wsup-th-level" style={{ color: 'rgba(255,255,255,.4)' }}>{t.level}</span>
              <span className="wsup-th-opacity" style={{ color: 'rgba(255,255,255,.3)' }}>{t.opacity}</span>
              <span className="wsup-th-use" style={{ color: 'rgba(255,255,255,.5)' }}>{t.use}</span>
            </div>
          ))}
        </div>

        <h3 className="cs-h3" style={{ marginTop: 40 }}>Type scale, benchmarked against the field</h3>
        <p className="cs-p">I set the chat type scale by putting real messages side by side with c.ai, Chai, and Talkie — landing on sizes that stay readable without the oversized look some competitors ship.</p>
        <div className="cs-screenshots-single" style={{ marginTop: 16 }}>
          <img src="/cs/wsup-screens/comp-font-size.png" alt="Chat font size compared to c.ai, Chai, and Talkie" className="cs-screenshot" />
          <span className="cs-cap">Type scale vs. competitors</span>
        </div>

        <h3 className="cs-h3" style={{ marginTop: 40 }}>The whole system, browseable</h3>
        <p className="cs-p">A living style guide inside the app — tokens, components, patterns, icons. Updated every session. This is the page engineers and designers open when they need a value.</p>

        <div className="cs-screenshots-single" style={{ marginTop: 20 }}>
          <img src="/cs/style-guide.png" alt="wsup.ai Style Guide — Colors tab with categorized swatches." className="cs-screenshot" />
          <span className="cs-cap">Style guide — Colors</span>
        </div>

        <div className="cs-screenshots-single" style={{ marginTop: 24 }}>
          <img src="/cs/style-guide-typography.png" alt="wsup.ai Style Guide — Typography tab." className="cs-screenshot" />
          <span className="cs-cap">Typography</span>
        </div>

        <div className="cs-screenshots-single" style={{ marginTop: 24 }}>
          <img src="/cs/style-guide-components.png" alt="wsup.ai Style Guide — Buttons component variants." className="cs-screenshot" />
          <span className="cs-cap">Components</span>
        </div>

        <div className="cs-screenshots-single" style={{ marginTop: 24 }}>
          <img src="/cs/style-guide-icons.png" alt="wsup.ai Style Guide — Icons categorized by use." className="cs-screenshot" />
          <span className="cs-cap">Icons</span>
        </div>

      </section>
    </>
  );
}
