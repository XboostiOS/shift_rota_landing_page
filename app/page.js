import { Nav, Footer, AppStoreBadge } from "./components/chrome";
import { bp } from "./lib/base-path";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ============================ HERO ============================ */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="tick" />
                For shift workers · <span className="time">iPhone</span>
              </span>
              <h1 className="display">
                Wake up for every shift.
                <br />
                <span className="spectrum">Sleep enough</span> between them.
              </h1>
              <p className="lead">
                See your whole rotation in one place, get a reliable wake-up
                alarm for every shift, and know exactly when to sleep. Add
                shifts in seconds — tap them in, or snap a photo of your rota.
                Share it with the people who plan around you. No more dreading
                a 6&nbsp;a.m. start.
              </p>
              <div className="cta-row">
                <AppStoreBadge />
                <a href="#how" className="btn btn-ghost">
                  See how it works
                </a>
              </div>
              <div className="reassure">
                <span>
                  <span className="dot">✓</span> Your whole rotation in one place
                </span>
                <span>
                  <span className="dot">✓</span> Share it with family, live
                </span>
                <span>
                  <span className="dot">✓</span> No sign-up to start
                </span>
              </div>
            </div>

            <div className="hero-phone">
              <div className="phone">
                <img
                  src={`${bp}/shots/01-today-home.png`}
                  alt="ShiftKal Today screen showing the next shift, readiness, and a sleep-by time"
                  width="322"
                  height="699"
                />
              </div>
              <div className="callout">
                <span className="bar" />
                <div>
                  <div className="k">Early shift · 06:00</div>
                  <div className="v">
                    Alarm <span className="arrow">→</span> 05:10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= SHIFT RAIL (signature) ======================= */}
        <section className="rail" aria-label="A rotating shift week">
          <div className="wrap rail-inner">
            <span className="rail-label">Your week, however it rotates →</span>
            <Chip day="Mon" cls="early" name="Early" time="06–14" />
            <Chip day="Tue" cls="early" name="Early" time="06–14" />
            <Chip day="Wed" cls="off" name="Off" time="—" />
            <Chip day="Thu" cls="late" name="Late" time="14–22" />
            <Chip day="Fri" cls="late" name="Late" time="14–22" />
            <Chip day="Sat" cls="night" name="Night" time="22–06" />
            <Chip day="Sun" cls="night" name="Night" time="22–06" />
          </div>
        </section>

        {/* ============================ HOW IT WORKS ============================ */}
        <section className="section-pad" id="how">
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow">
                <span className="tick" />
                From your shifts to a <span className="time">05:10</span> alarm
              </span>
              <h2 className="head">Three steps, then it runs itself</h2>
              <p>
                You stay in control the whole way. Nothing is scheduled until you
                say so.
              </p>
            </div>

            <div className="steps">
              <div className="step">
                <div className="clock">
                  <span className="tick" style={{ background: "var(--amber)" }} />
                  STEP 01 · Add
                </div>
                <h3>Add your shifts</h3>
                <p>
                  Tap shifts straight onto the calendar, or — if it’s a whole
                  rota at once — snap a photo, screenshot, or PDF and let AI fill
                  it in. Whatever your workplace hands you.
                </p>
                <div className="step-visual">
                  <div className="rota-mock" aria-hidden="true">
                    <i className="a" />
                    <i className="a" />
                    <i />
                    <i className="c" />
                    <i className="c" />
                    <i className="n" />
                    <i className="n" />
                    <i />
                    <i className="a" />
                    <i className="a" />
                    <i className="c" />
                    <i />
                    <i className="n" />
                    <i className="n" />
                    <i className="a" />
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="clock">
                  <span className="tick" style={{ background: "var(--ready)" }} />
                  STEP 02 · Review
                </div>
                <h3>Check every shift</h3>
                <p>
                  Your shifts land on a calendar. You confirm or fix each one
                  before a single alarm is set — a wrong night shift never slips
                  through.
                </p>
                <div className="step-visual">
                  <div className="shot-inline">
                    <img
                      src={`${bp}/shots/07-review-rota.png`}
                      alt="Review screen: eight shifts laid out on a calendar, ready to confirm"
                      width="640"
                      height="1390"
                    />
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="clock">
                  <span className="tick" style={{ background: "var(--azure)" }} />
                  STEP 03 · Wake
                </div>
                <h3>Wake on time, rested</h3>
                <p>
                  An alarm is set for each shift — timed to your own prep and
                  commute — plus a “sleep by” time so you actually get the rest.
                </p>
                <div className="step-visual">
                  <div className="shot-inline">
                    <img
                      src={`${bp}/shots/08-alarms-created.png`}
                      alt="Confirmation screen: shifts created and saved for the week"
                      width="640"
                      height="1390"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ FEATURES ============================ */}
        <section className="section-pad" id="features">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">
                <span className="tick" style={{ background: "var(--teal)" }} />
                Built around your rotation
              </span>
              <h2 className="head">What a shift worker actually needs</h2>
              <p>
                See your whole schedule, wake up for every shift, and protect
                the sleep in between — then let the people at home see it too.
                AI scanning is there when you want it — it just fills the
                calendar faster.
              </p>
            </div>

            <div className="features">
              <div className="feat wide azure">
                <div>
                  <div className="ic">{ICONS.calendar}</div>
                  <h3>Your whole rotation, in one place</h3>
                  <p>
                    Every shift on a calendar and a home-screen widget,
                    colour-coded early to night. See your work and off days weeks
                    ahead — so you can plan appointments, trips, and time with
                    family around them, and never double-book a day off.
                  </p>
                </div>
                <div className="mini-phone">
                  <img
                    src={`${bp}/shots/02-calendar-month.png`}
                    alt="Month calendar with each shift colour-coded from early to night"
                    width="240"
                    height="521"
                  />
                </div>
              </div>

              <div className="feat wide">
                <div>
                  <div className="ic">{ICONS.bell}</div>
                  <h3>An alarm for every shift, set for you</h3>
                  <p>
                    Add a shift and its wake-up alarm is created automatically —
                    timed to your own prep and commute. A full-screen alarm shows
                    the shift and start time, with volume that rises until you’re
                    up. Alarms use Apple’s AlarmKit on iOS&nbsp;26 and later;
                    on earlier versions you get shift reminders instead.
                  </p>
                </div>
                <div className="mini-phone">
                  <img
                    src={`${bp}/shots/01-today-home.png`}
                    alt="Today screen with the next shift and its alarm"
                    width="240"
                    height="521"
                  />
                </div>
              </div>

              <div className="feat wide coral">
                <div>
                  <div className="ic">{ICONS.share}</div>
                  <h3>Share your schedule with family</h3>
                  <p>
                    Send one link to a partner, parent, or friend. They see your
                    shifts in a read-only calendar that updates whenever you
                    change one — no more “are you working Saturday?” texts. Notes
                    and pay are never shared, and you can hide any shift or
                    remove anyone at any time.
                  </p>
                </div>
                <ShareMock />
              </div>

              <div className="feat wide teal">
                <div>
                  <div className="ic">{ICONS.moon}</div>
                  <h3>Protects your sleep</h3>
                  <p>
                    A “sleep by” time for every shift and a pre-sleep wind-down
                    that confirms your alarm is armed and your phone is set to
                    ring — before you doze off.
                  </p>
                </div>
                <div className="mini-phone">
                  <img
                    src={`${bp}/shots/09-wind-down.png`}
                    alt="Wind-down screen with a sleep target and a before-sleep checklist"
                    width="240"
                    height="521"
                  />
                </div>
              </div>

              <div className="feat ready">
                <div className="ic">{ICONS.hand}</div>
                <h3>Scan a rota, or type it</h3>
                <p>
                  Snap a photo, screenshot, or PDF and AI fills your shifts in.
                  Prefer to type? Manual entry never costs a scan.
                </p>
              </div>

              <div className="feat azure">
                <div className="ic">{ICONS.sync}</div>
                <h3>On every iPhone you use</h3>
                <p>
                  Sign in with Apple and your schedule syncs across your iPhones
                  and comes straight back on a new phone. Optional — skip it and
                  everything stays on this device.
                </p>
              </div>

              <div className="feat">
                <div className="ic">{ICONS.sliders}</div>
                <h3>Made to fit your life</h3>
                <p>
                  18 languages. 24-hour or 12-hour time to match your region.
                  Light, dark, and a set of colour palettes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ PRIVACY ============================ */}
        <section className="privacy-band section-pad">
          <div className="wrap privacy-grid">
            <div>
              <span className="eyebrow">
                <span className="tick" style={{ background: "var(--ready)" }} />
                Private by design
              </span>
              <h2 className="head" style={{ marginTop: "18px" }}>
                Your schedule, on your terms
              </h2>
              <p className="lead" style={{ marginTop: "18px" }}>
                Rotas hold names, places, and colleagues. ShiftKal treats them
                like they’re yours — because they are. You decide where your
                schedule lives and who gets to see it.
              </p>
              <a href={`${bp}/privacy/`} className="btn btn-ghost" style={{ marginTop: "26px" }}>
                Read the privacy policy
              </a>
            </div>
            <div className="privacy-list">
              <PV title="On your phone until you sign in">
                Without an account, your shifts, notes, and locations stay on
                your iPhone. Sign in with Apple only if you want sync and
                sharing — we ask Apple for your name, never your email.
              </PV>
              <PV title="Synced in the EU, visible only to you">
                When you sign in, your schedule is backed up on EU servers so it
                follows you to a new phone. Only your account can read it.
              </PV>
              <PV title="You choose what people see">
                People you share with get a read-only view. Notes and pay are
                never shared, your workplace address only if you turn it on, and
                any shift can be hidden.
              </PV>
              <PV title="Rota photos aren’t kept">
                A scanned photo is used only to read your shifts, then removed —
                the parsing service keeps nothing and never trains on it.
              </PV>
              <PV title="Delete everything in one tap">
                Delete your account in Settings and your data is erased from our
                servers and from your phone, and shared links stop working.
              </PV>
            </div>
          </div>
        </section>

        {/* ============================ PRICING ============================ */}
        <section className="section-pad" id="pricing">
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow">
                <span className="tick" />
                One app, three ways to pay
              </span>
              <h2 className="head">Simple, honest pricing</h2>
              <p>
                Go monthly, save with yearly, or unlock everything once with
                Lifetime. Every plan includes the full app — calendar, alarms,
                sleep planning, and sharing.
              </p>
            </div>

            <div className="pricing">
              <div className="price">
                <span className="tag">Monthly</span>
                <div className="amt">
                  Monthly <small>billed every month</small>
                </div>
                <ul>
                  <li><span className="ck">✓</span> AI scanning of every new rota</li>
                  <li><span className="ck">✓</span> A monthly scan allowance</li>
                  <li><span className="ck">✓</span> Reliable alarms &amp; sleep-by times</li>
                  <li><span className="ck">✓</span> Cancel anytime, no lock-in</li>
                </ul>
              </div>

              <div className="price feature">
                <span className="tag">Yearly</span>
                <div className="amt">
                  Yearly <small>best value</small>
                </div>
                <ul>
                  <li><span className="ck">✓</span> Everything in Monthly</li>
                  <li><span className="ck">✓</span> Save vs. paying monthly</li>
                  <li><span className="ck">✓</span> A monthly scan allowance</li>
                  <li><span className="ck">✓</span> Top up with scan packs any time</li>
                </ul>
              </div>

              <div className="price">
                <span className="tag">Lifetime</span>
                <div className="amt">
                  One-time <small>pay once, yours forever</small>
                </div>
                <ul>
                  <li><span className="ck">✓</span> Everything in the subscription</li>
                  <li><span className="ck">✓</span> AI scanning that never expires</li>
                  <li><span className="ck">✓</span> No recurring bill, ever</li>
                  <li><span className="ck">✓</span> Future updates included</li>
                </ul>
              </div>
            </div>

            <p className="pricing-note">
              Prices are shown in the app in your local currency. Need more than
              your allowance? Add scan-credit packs — 1, 5, or 10 — any time.
              Adding shifts by hand never uses a scan. If a subscription ends,
              the app pauses and alarms stop until you resubscribe — then
              everything is set up again automatically.
            </p>
          </div>
        </section>

        {/* ============================ FAQ ============================ */}
        <section className="section-pad" id="faq">
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow">
                <span className="tick" style={{ background: "var(--azure)" }} />
                Good to know
              </span>
              <h2 className="head">Questions, answered</h2>
            </div>
            <div className="faq">
              <Faq q="Do I need to create an account?">
                No. You can start adding shifts the moment you open ShiftKal —
                no email or password. Signing in with Apple is optional: it syncs
                your schedule across your iPhones, brings it back on a new phone,
                and lets you share it.
              </Faq>
              <Faq q="How does sharing my schedule work?">
                Create a link in the app and send it by Messages, email, or QR
                code. The other person installs ShiftKal, signs in with Apple, and
                sees your shifts read-only — updated whenever you change them.
                You choose which jobs and dates they see, notes and pay are never
                shared, and you can remove anyone or close the link at any time.
                Both of you need to sign in with Apple, so you always know who has
                access.
              </Faq>
              <Faq q="What happens if I get a new iPhone?">
                If you’ve signed in with Apple, just sign in again with the same
                Apple Account on the new phone and your shifts come straight back.
                If you never signed in, your schedule lives only on the old phone.
              </Faq>
              <Faq q="Which iPhones does it support?">
                ShiftKal runs on iOS&nbsp;18.6 and later. Wake-up alarms use
                Apple’s AlarmKit, which needs iOS&nbsp;26 or later; on earlier
                versions ShiftKal sends shift reminder notifications instead of
                alarms.
              </Faq>
              <Faq q="What happens to a photo of my rota?">
                It’s sent once to an AI service to read your shifts, then deleted
                right away. The service is zero-retention and never trains on your
                image, and no identifying account is attached. We never store
                the photo itself.
              </Faq>
              <Faq q="What if the AI reads a shift wrong?">
                You review every shift on a confirmation screen before anything is
                scheduled, and you can fix any of them. And you can always add or
                edit shifts by hand — that never uses a scan.
              </Faq>
              <Faq q="What does it cost?">
                AI scanning runs on a paid plan — monthly or yearly, each with a
                monthly scan allowance — or a one-time Lifetime purchase. Need
                extra scans? Add scan-credit packs any time. Adding shifts by hand
                never uses a scan. If a subscription ends, the app pauses and its
                alarms stop until you resubscribe.
              </Faq>
            </div>
          </div>
        </section>

        {/* ============================ FINAL CTA ============================ */}
        <section className="section-pad final" id="get">
          <div className="wrap">
            <h2 className="head">Stop dreading the early start</h2>
            <p className="lead">
              Let ShiftKal carry the rota, the maths, and the wake-up — so you
              can just show up rested.
            </p>
            <div className="cta-row">
              <AppStoreBadge />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* -------------------------------- helpers -------------------------------- */

function Chip({ day, cls, name, time }) {
  return (
    <div className={`chip ${cls}`}>
      <span className="day">{day}</span>
      <span className="name">{name}</span>
      <span className="time">{time}</span>
    </div>
  );
}

function ShareMock() {
  return (
    <div className="share-mock" aria-hidden="true">
      <div className="sm-link">
        <span className="sm-k">Invite link</span>
        <span className="sm-v">rota.xboostapp.io/s/K7Q2M9X</span>
      </div>
      <div className="sm-head">Who can see it</div>
      <div className="sm-row">
        <span className="sm-av">MA</span>
        <span className="sm-name">Mum</span>
        <span className="sm-tag">View only</span>
      </div>
      <div className="sm-row">
        <span className="sm-av b">SA</span>
        <span className="sm-name">Sam</span>
        <span className="sm-tag">View only</span>
      </div>
      <div className="sm-hidden">
        <span>Never shared</span> notes · pay
      </div>
    </div>
  );
}

function PV({ title, children }) {
  return (
    <div className="pv">
      <span className="lock" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="10" width="16" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
      </span>
      <div>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}

function Faq({ q, children }) {
  return (
    <details>
      <summary>
        {q}
        <span className="pm" aria-hidden="true">+</span>
      </summary>
      <p>{children}</p>
    </details>
  );
}

const ICONS = {
  share: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18.5 14.5A6.5 6.5 0 0 1 21.5 20" />
    </svg>
  ),
  sync: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 0 1-15.4 6.4L3 16" />
      <path d="M3 12a9 9 0 0 1 15.4-6.4L21 8" />
      <path d="M21 3v5h-5M3 21v-5h5" />
    </svg>
  ),
  bell: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  ),
  moon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  ),
  calendar: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" />
    </svg>
  ),
  hand: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11V6a1.5 1.5 0 0 1 3 0v5m0 0V4.5a1.5 1.5 0 0 1 3 0V11m0 0V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1.5a5 5 0 0 1-4-2l-3-4a1.5 1.5 0 0 1 2.3-1.9L9 14" />
    </svg>
  ),
  sliders: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
    </svg>
  ),
};
