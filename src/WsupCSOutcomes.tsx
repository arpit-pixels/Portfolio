import { useR } from "./WsupCaseStudy";
import { FUNNEL_STAGES, BUSINESS_OUTCOMES, WHAT_FAILED, LEARNINGS, REFLECTION, PROCESS } from "./wsup-case-study-data";
import { TextWithPills, Pill, type PillSpec } from "./InterviewMode";

export default function WsupCSOutcomes() {
  const processR = useR(), funnelR = useR(), failR = useR(), outR = useR();

  return (
    <>
      {/* 07 — PROCESS */}
      <section className="cs-sec" ref={processR}>
        <div className="cs-sec-head"><span className="stag">07 / PROCESS</span></div>
        <h2 className="cs-h2">How I actually <em>worked</em></h2>
        <div className="wsup-process">
          {PROCESS.map((p, i) => {
            const px = p as { descPills?: PillSpec[]; collabPills?: PillSpec[] };
            return (
              <div key={i} className="wsup-phase">
                <div className="wsup-phase-left">
                  <div className="wsup-phase-n">{p.phase}</div>
                  <div className="wsup-phase-dur">{p.duration}</div>
                </div>
                <div className="wsup-phase-right">
                  <h3 className="wsup-phase-name">{p.name}</h3>
                  <p className="wsup-phase-desc"><TextWithPills text={p.desc} pills={px.descPills} /></p>
                  <p className="wsup-phase-collab"><strong>Collaboration:</strong> <TextWithPills text={p.collab} pills={px.collabPills} /></p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 08 — FUNNEL & BUSINESS */}
      <section className="cs-sec" ref={funnelR}>
        <div className="cs-sec-head"><span className="stag">08 / HOW WSUP MAKES MONEY</span></div>
        <h2 className="cs-h2">Two ways of making money,<br />designed as <em>one system</em></h2>
        <p className="cs-p">wsup makes money two ways at once. Banner ads on guests who haven't signed up; credits for premium AI work once they have. Signing up removes the ads — turning it into a benefit users want, not a wall to climb.<Pill
          q="Why credits-plus-ads instead of a flat subscription, which is simpler and more predictable revenue?"
          a="A subscription forces every user to predict their own usage before they've felt the product — and most can't, so they don't subscribe. Credits-as-fuel means you only pay in proportion to the AI work you actually trigger; the casual user runs on the free daily pool and never sees a wall, while the heavy user pays for the compute they're genuinely consuming. Ads cover the logged-out majority who'll never pay anything. It's two engines for two populations: ads monetize attention, credits monetize intensity. A flat sub would over-charge the casual user and under-charge the whale at the same time."
        /></p>

        <div className="wsup-funnel">
          {FUNNEL_STAGES.map((s, i) => {
            const sx = s as { designAnglePills?: PillSpec[] };
            return (
              <div key={i} className="wsup-funnel-stage">
                <div className="wsup-funnel-head">
                  <span className="wsup-funnel-stage-name">{s.stage}</span>
                </div>
                <p className="wsup-funnel-what">{s.what}</p>
                <p className="wsup-funnel-angle"><strong>Design angle:</strong> <TextWithPills text={s.designAngle} pills={sx.designAnglePills} /></p>
              </div>
            );
          })}
        </div>

        <h3 className="cs-h3" style={{ marginTop: 36 }}>Business outcomes</h3>
        <div className="wsup-outcomes">
          {BUSINESS_OUTCOMES.map((o, i) => (
            <div key={i} className="wsup-outcome">
              <div className="wsup-outcome-v">{o.value}</div>
              <div className="wsup-outcome-m">{o.metric}</div>
              <div className="wsup-outcome-n">{o.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 09 — WHAT FAILED */}
      <section className="cs-sec" ref={failR}>
        <div className="cs-sec-head"><span className="stag">09 / WHAT FAILED</span></div>
        <h2 className="cs-h2">Four calls<br />I'd <em>remake</em></h2>
        <p className="cs-p">A senior case study without failures is a bad senior case study. These are the four I learned the most from.</p>

        <div className="wsup-failures">
          {WHAT_FAILED.map((f, i) => {
            const fx = f as { storyPills?: PillSpec[]; resolutionPills?: PillSpec[] };
            return (
              <div key={i} className="wsup-failure">
                <h3 className="wsup-failure-h">FAILURE 0{i + 1}</h3>
                <h4 className="wsup-failure-title">{f.title}</h4>
                <p className="cs-p"><TextWithPills text={f.story} pills={fx.storyPills} /></p>
                <p className="cs-p" style={{ marginTop: 12 }}><strong style={{ color: 'var(--green)' }}>Resolution:</strong> <TextWithPills text={f.resolution} pills={fx.resolutionPills} /></p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10 — OUTCOMES + REFLECTION */}
      <section className="cs-sec" ref={outR}>
        <div className="cs-sec-head"><span className="stag">10 / OUTCOMES & REFLECTION</span></div>
        <h2 className="cs-h2">From a scattered product<br />to one that <em>holds together</em></h2>
        <h3 className="cs-h3" style={{ marginTop: 32 }}>What I learned</h3>
        <div className="wsup-learnings">
          {LEARNINGS.map((l, i) => {
            const lx = l as { text: string; pills?: PillSpec[] };
            return (
              <div key={i} className="wsup-learning">
                <span className="wsup-learning-n">{String(i + 1).padStart(2, '0')}</span>
                <p className="wsup-learning-text"><TextWithPills text={lx.text} pills={lx.pills} /></p>
              </div>
            );
          })}
        </div>
        <div className="cs-reflection">
          <h3 className="cs-reflection-h">{REFLECTION.title}</h3>
          <p className="cs-p">
            {REFLECTION.body}
            <Pill
              q="How would you measure if 6 categories is the right number for first-visit?"
              a="A/B test against 4 and 8 in production. Measure two things: first-character-click rate (does showing fewer categories get users to a character faster?) and 30-day return rate (does the smaller initial set affect long-term engagement?). 6 is my hypothesis based on the Hick's law sweet spot for visual menus, but it's a hypothesis, not a fact. The test would either validate it or push us toward a different number."
              followups={[
                { q: "Why not just ship 6 categories without testing?", a: "Because the cost of being wrong is asymmetric. If 6 turns out to be too few, niche-category users churn before they ever discover the depth — that's a permanent acquisition loss. If 6 turns out to be more than necessary, we left some onboarding speed on the table — recoverable. Test before shipping when the cost of being wrong is permanent." },
              ]}
            />
          </p>
        </div>
      </section>
    </>
  );
}
