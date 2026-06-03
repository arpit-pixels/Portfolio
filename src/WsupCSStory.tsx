import { useR } from "./WsupCaseStudy";
import { PRINCIPLES, RESEARCH_METHODS, DISCORD_FINDINGS, COMPETITORS, ALSO_TRACKED, WSUP_MOATS, PERSONAS } from "./wsup-case-study-data";
import { TextWithPills, Pill, type PillSpec } from "./InterviewMode";

export default function WsupCSStory() {
  const briefR = useR(), researchR = useR(), personaR = useR();

  return (
    <>
      {/* 01 — THE BRIEF + PRINCIPLES */}
      <section className="cs-sec" ref={briefR}>
        <div className="cs-sec-head"><span className="stag">01 / THE BRIEF</span></div>
        <h2 className="cs-h2">Where we started —<br />and what we <em>listened to</em></h2>
        <p className="cs-p">
          We launched with the simplest thing that could work — chat, characters, and a Discord server we'd use as our listening post.
          <Pill
            q="How did you decide what was 'simple enough' to launch?"
            a="We boxed it as: 'what's the minimum surface a user needs to chat with one AI character?' That gave us four screens — onboarding, explore, character selection, chat. Anything beyond was deferred to V2. The PM and I had a written list of things we explicitly chose NOT to build for launch: image generation, group chat, stories, creator tools, accounts. The rule was 'if it's not blocking a user from chatting with one character, it's V2.'"
            followups={[
              { q: "Why those four screens specifically?", a: "Worked backward from the user's first goal: 'I want to chat with an AI character.' Onboarding, because we needed the minimum prefs to make a non-random first recommendation. Explore, because users needed to find characters. Character selection, because they needed to commit to one. Chat, because that's the actual use case. Anything we removed from this set would either break the flow or make it impersonal." },
            ]}
          />
          {' '}No roadmap. Within months the Discord was loud.
          <Pill
            q="What does 'loud' mean — how did you measure that?"
            a="Three signals: (1) Volume — the same complaint or request showing up multiple times in different channels in a single week. (2) Energy — frustration vocabulary in messages (CAPS, multiple exclamation points, escalation patterns). (3) Cross-pollination — different users explicitly agreeing with each other on a topic. When all three lined up, the Discord was 'loud' on that issue and it became a flag for the PM."
            followups={[
              { q: "Couldn't a vocal minority make Discord seem 'loud' on issues that didn't matter to most users?", a: "Yes, and it happened. Reference-image removal flagged loud, but our usage data showed only a small share of users used the feature. We underweighted the volume because of low usage — and we were wrong, because that small share were our highest-value creators. Lesson: 'loud' weighting needs to factor in WHO is loud, not just how many. Power users carry more signal weight than casual users for creator-facing decisions." },
            ]}
          />
          {' '}Users wanted more memory. They wanted to tune their characters deeper. They wanted to share what they made. They wanted premium chat LLMs we didn't have yet.
        </p>
        <p className="cs-p">
          By the end of 2025, every shipped feature traced back to something specific
          <Pill
            q="Did you ever get this wrong? Did anything ship that turned out to be the wrong feature?"
            a="Yes. The category dropdown is the clearest example (Section 09 covers it). Beyond that, we shipped a 'reactions' feature on chat early on — users could thumbs-up or thumbs-down AI messages. The hypothesis was that this would help us tune model quality. In practice, almost no one used it, and when they did, the data was too sparse and noisy to actually train against. So we sunset it."
            followups={[
              { q: "How did you decide to sunset rather than improve?", a: "Usage data plus a small Discord poll. Almost no one was ever using it, and the ones who did had a wide range of interpretations of what 'thumbs up' meant. We tried iterating on placement and copy, no movement. At that point sunsetting was cheaper than continuing — every UX surface costs maintenance, and dead surfaces slow everything else down." },
            ]}
          />
          {' '}— a Discord ask, a competitor pattern, or a behavior we'd watched users invent on their own.
        </p>
        <p className="cs-p">
          But moving fast had a cost. Within a year, the visual system had drifted
          <Pill
            q="Why didn't you build a design system from day 1?"
            a="Founding-team velocity. With a small team shipping V1 in a few months, building a robust token system would've slowed us down materially. The bet was: ship something real first, then formalize the system once we knew what the product wanted to be. That's a defensible early-stage trade — design systems built before product-market fit usually encode the wrong abstractions and have to be redone. The cost was the cleanup later, but the cleanup was cheaper than slow product validation."
            followups={[
              { q: "How do you know the design system you built later wasn't itself encoding the wrong abstractions?", a: "Because it was built from real shipped surfaces, not hypothetical ones. The token names match what users actually saw — chat-bubble-bg, credit-streak-active, story-card-radius. If we'd built tokens before shipping, we'd have generic primitives like surface-1, surface-2 — honest abstractions but useless for the team to use. The post-shipping system has names that match what the team thinks about, which is what makes it sticky." },
            ]}
          />
          {' '}— features shipping as one-offs, no consistent language. What follows is the cleanup that came next.
        </p>

        <h3 className="cs-h3" style={{ marginTop: 36 }}>The three principles I designed against</h3>
        <p className="cs-p">Before I drew a screen, I wrote down what wsup was trying to be. Every feature we ship still has to pass these three.</p>
        <div className="wsup-principles">
          {PRINCIPLES.map((p, i) => (
            <div key={i} className="wsup-principle-card">
              <div className="wsup-principle-n">{p.n}</div>
              <h4 className="wsup-principle-title">{p.title}</h4>
              <p className="wsup-principle-body">{p.body}</p>
              <div className="wsup-principle-proof"><strong>Proof in product:</strong> {p.proof}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 02 — RESEARCH */}
      <section className="cs-sec" ref={researchR}>
        <div className="cs-sec-head"><span className="stag">02 / RESEARCH</span></div>
        <h2 className="cs-h2">How research drove<br />what got <em>built</em></h2>
        <p className="cs-p">Four ways I kept learning from users: daily Discord check-ins, monthly competitor research, watching how shipped features got used, and user personas from a year of community data. All four ran every day for 18 months. What we learned went to Ashish (PM) for shipping decisions. My job: make sure users were heard.</p>

        <div className="wsup-research-list">
          {RESEARCH_METHODS.map((m, i) => {
            const mx = m as { image?: string; imageCaption?: string; descPills?: PillSpec[]; outputPills?: PillSpec[]; doc?: { href: string; label: string } };
            return (
              <div key={i} className="wsup-research-card">
                <div className="wsup-research-head">
                  <span className="wsup-research-n">{m.n}</span>
                  <h4 className="wsup-research-name">{m.name}</h4>
                </div>
                <p className="wsup-research-desc"><TextWithPills text={m.desc} pills={mx.descPills} /></p>
                {mx.image && (
                  <div className="wsup-research-image">
                    <img src={mx.image} alt={m.name} />
                    {mx.imageCaption && <span className="wsup-research-image-cap">{mx.imageCaption}</span>}
                  </div>
                )}
                <div className="wsup-research-output"><strong>Output:</strong> <TextWithPills text={m.output} pills={mx.outputPills} /></div>
                {mx.doc && (
                  <a className="wsup-research-doc" href={mx.doc.href} target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
                    {mx.doc.label}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <h3 className="cs-h3" style={{ marginTop: 36 }}>Three things we found that shaped the design</h3>
        <div className="wsup-findings">
          {DISCORD_FINDINGS.map((f, i) => {
            const fx = f as { decisionPills?: PillSpec[]; evidencePills?: PillSpec[] };
            return (
              <div key={i} className="wsup-finding-card">
                <div className="wsup-finding-n">{f.n}</div>
                <h4 className="wsup-finding-title">{f.finding}</h4>
                <p className="wsup-finding-evidence"><strong>Evidence:</strong> <TextWithPills text={f.evidence} pills={fx.evidencePills} /></p>
                <p className="wsup-finding-decision"><strong>Design decision:</strong> <TextWithPills text={f.decision} pills={fx.decisionPills} /></p>
              </div>
            );
          })}
        </div>

        <h3 className="cs-h3" style={{ marginTop: 36 }}>Competitor research — four deep, five tracked</h3>
        <p className="cs-p">Not screenshots from blog posts. We signed up, made characters, joined their Discord servers, and read what their users complained about. Four got deep teardowns; five got tracked for trend signal.</p>

        <div className="wsup-comp-grid">
          {COMPETITORS.map((c, i) => {
            const cx = c as { gapPills?: PillSpec[]; image?: string };
            return (
              <div key={i} className="wsup-comp-card">
                {cx.image && (
                  <div className="wsup-comp-thumb">
                    <img src={cx.image} alt={`${c.name} homepage`} loading="lazy" />
                  </div>
                )}
                <div className="wsup-comp-group">{c.name}</div>
                <p className="wsup-comp-examples"><strong style={{ color: 'var(--ink)' }}>Strength:</strong> {c.strength}</p>
                <p className="wsup-comp-examples" style={{ marginTop: 6 }}><strong style={{ color: 'var(--blue)' }}>Gap:</strong> <TextWithPills text={c.gap} pills={cx.gapPills} /></p>
              </div>
            );
          })}
        </div>

        <h4 className="wsup-also-h">Also tracked</h4>
        <div className="wsup-also-tracked">
          {ALSO_TRACKED.map((a, i) => (
            <div key={i} className="wsup-also-card">
              <img src={a.image} alt={`${a.name} homepage`} loading="lazy" />
              <div className="wsup-also-body">
                <div className="wsup-also-name">{a.name}</div>
                <p className="wsup-also-takeaway">{a.takeaway}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="cs-h3" style={{ marginTop: 40 }}>What wsup has that they don't</h3>
        <p className="cs-p">A pattern across the teardowns: every competitor was missing at least one of these. wsup tries to hold all seven.</p>
        <div className="wsup-moats">
          {WSUP_MOATS.map((m, i) => (
            <div key={i} className="wsup-moat">
              <div className="wsup-moat-n">{String(i + 1).padStart(2, '0')}</div>
              <div className="wsup-moat-name">{m.name}</div>
              <p className="wsup-moat-what">{m.what}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — PERSONAS */}
      <section className="cs-sec" ref={personaR}>
        <div className="cs-sec-head"><span className="stag">03 / WHO IT'S FOR</span></div>
        <h2 className="cs-h2">Five real users,<br />pulled from <em>1,812 real Discord messages</em></h2>
        <p className="cs-p">
          After a year of community feedback, I grouped the 78 active Discord users by how they actually used wsup — not by age or location. Each persona is a made-up character, but every quote and behavior is real, taken from real Discord users. These five personas now drive what we build next.
          <Pill
            q="Why exclude the 30% Drifters?"
            a="Drifters were users who said hi once, never engaged with characters, and disappeared. They left no usage pattern to design for — designing for them means guessing what might have made them stay, which is product-led speculation, not user-led design. The other 70% gave us real signals; Drifters gave us silence. We don't design for silence."
            followups={[
              { q: "But isn't churn the most important problem? Shouldn't you optimize for them?", a: "We do — but separately. Drifter retention is a first-impression problem (the first 30 seconds), not a long-term-roadmap problem. The fix for Drifters is in onboarding, the first character recommendation, the 'what is this' moment. That's a different tool than personas. Personas drive ongoing roadmap; Drifters need first-session analytics + funnel work, which is tracked through a different lens." },
              { q: "How do you justify spending design time on power users when they're a smaller share?", a: "Power creators (28% combined) are the loudest voices in Discord, the strongest creators, and the source of most public characters in Explore. They drive content the casual majority consumes. Designing for them produces second-order benefits — a stronger creator economy means more characters, more discovery, more reasons for casuals to come back. Optimizing only for the casual majority would shrink the creator base that feeds them." },
            ]}
          />
          When deciding on a new feature, the question is "who does this help?" If the answer is "none of them," it's the wrong feature.
        </p>

        <div className="wsup-personas">
          {PERSONAS.map((p, i) => (
            <div key={i} className="wsup-persona-card">
              <div className="wsup-persona-head">
                <span className="wsup-persona-n">{p.n}</span>
                <span className="wsup-persona-share">{p.share}</span>
              </div>
              <h4 className="wsup-persona-name">{p.name}</h4>
              <div className="wsup-persona-arch">{p.archetype}</div>
              <blockquote className="wsup-persona-quote">"{p.quote}"</blockquote>
              <div className="wsup-persona-stats">
                <div className="wsup-persona-stat"><span className="wsup-persona-stat-label">Age</span><span className="wsup-persona-stat-value">{p.age}</span></div>
                <div className="wsup-persona-stat"><span className="wsup-persona-stat-label">Location</span><span className="wsup-persona-stat-value">{p.location}</span></div>
                <div className="wsup-persona-stat"><span className="wsup-persona-stat-label">Usage</span><span className="wsup-persona-stat-value">{p.usage}</span></div>
              </div>
              <div className="wsup-persona-trait"><span className="wsup-persona-label">Behavior</span> {p.behavior}</div>
              <div className="wsup-persona-impl"><span className="wsup-persona-label">Design for</span> <TextWithPills text={p.designsFor} pills={(p as { designsForPills?: PillSpec[] }).designsForPills} /></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
