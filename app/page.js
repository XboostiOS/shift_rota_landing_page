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
                Snap a photo of your rota. Shiftmate reads your shifts, sets a
                reliable wake-up alarm for each one, and tells you when to go to
                bed. No more dreading a 6&nbsp;a.m. start.
              </p>
              <div className="cta-row">
                <AppStoreBadge />
                <a href="#how" className="btn btn-ghost">
                  See how it works
                </a>
              </div>
              <div className="reassure">
                <span>
                  <span className="dot">✓</span> First rota scan free
                </span>
                <span>
                  <span className="dot">✓</span> No account needed
                </span>
              </div>
            </div>

            <div className="hero-phone">
              <div className="phone">
                <img
                  src={`${bp}/shots/01-today-home.png`}
                  alt="Shiftmate Today screen showing the next shift, readiness, and a sleep-by time"
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
                From photo to <span className="time">05:10</span> alarm
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
                  STEP 01 · Snap
                </div>
                <h3>Snap or paste your rota</h3>
                <p>
                  Take a photo, add a screenshot or PDF, or just describe your
                  rotation in plain words. Whatever your workplace hands you.
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
                  The AI reads your shifts onto a calendar. You confirm or fix
                  each one before a single alarm is set — a wrong night shift
                  never slips through.
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
                Built for the night shift
              </span>
              <h2 className="head">Everything a rotating week needs</h2>
            </div>

            <div className="features">
              <div className="feat wide">
                <div>
                  <div className="ic">{ICONS.bell}</div>
                  <h3>Alarms that actually wake you</h3>
                  <p>
                    A full-screen alarm shows your shift and start time, with
                    volume that rises until you’re up. On iOS&nbsp;26 it uses
                    Apple’s AlarmKit; older iPhones fall back to notifications.
                    Everything runs offline.
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

              <div className="feat azure">
                <div className="ic">{ICONS.calendar}</div>
                <h3>Your whole rotation</h3>
                <p>
                  Every shift, colour-coded early to night, on a calendar and a
                  home-screen widget.
                </p>
              </div>

              <div className="feat">
                <div className="ic">{ICONS.layers}</div>
                <h3>Your shift types</h3>
                <p>
                  Early, late, or night — or whatever you call them — kept as
                  reusable templates.
                </p>
              </div>

              <div className="feat ready">
                <div className="ic">{ICONS.hand}</div>
                <h3>Always a free way in</h3>
                <p>
                  Prefer to type it? Manual entry is always available and never
                  costs a scan.
                </p>
              </div>

              <div className="feat wide">
                <div>
                  <div className="ic">{ICONS.sliders}</div>
                  <h3>Made to fit your life</h3>
                  <p>
                    Full German and English. 24-hour or 12-hour time to match
                    your region, week starting Monday. Light, dark, and a set of
                    colour palettes.
                  </p>
                </div>
                <div className="mini-phone">
                  <img
                    src={`${bp}/shots/05-settings.png`}
                    alt="Settings screen with language, theme, and colour palette options"
                    width="240"
                    height="521"
                  />
                </div>
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
                Your rota stays on your phone
              </h2>
              <p className="lead" style={{ marginTop: "18px" }}>
                Rotas hold names, places, and colleagues. Shiftmate treats them
                like they’re yours — because they are.
              </p>
              <a href={`${bp}/privacy/`} className="btn btn-ghost" style={{ marginTop: "26px" }}>
                Read the privacy policy
              </a>
            </div>
            <div className="privacy-list">
              <PV title="Shifts live on-device">
                Your shifts, notes, locations, and colleague names never leave
                your iPhone and are never sent to a server or a log.
              </PV>
              <PV title="Rota photos are deleted after reading">
                A scanned photo is used only to read your shifts, then removed —
                the parsing service keeps nothing and never trains on it.
              </PV>
              <PV title="No account, no tracking">
                Use the app anonymously — no email or sign-in. No ad tracking, no
                IDFA. Anonymous analytics can be switched off in one tap.
              </PV>
              <PV title="Hosted in the EU">
                What little the app needs — your plan and settings — is kept on
                EU infrastructure, GDPR-friendly by default.
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
                Try it before you pay
              </span>
              <h2 className="head">Simple, honest pricing</h2>
              <p>
                Your first rota scan is free. Keep scanning with a subscription —
                or unlock it once with Lifetime. Either way, your alarms keep
                ringing.
              </p>
            </div>

            <div className="pricing">
              <div className="price">
                <span className="tag">Free</span>
                <div className="amt">
                  €0 <small>to get started</small>
                </div>
                <ul>
                  <li><span className="ck">✓</span> Your first rota scan, on us</li>
                  <li><span className="ck">✓</span> Unlimited manual shift entry</li>
                  <li><span className="ck">✓</span> Reliable alarms &amp; sleep-by times</li>
                  <li><span className="ck">✓</span> Calendar &amp; home-screen widget</li>
                </ul>
              </div>

              <div className="price feature">
                <span className="tag">Subscription</span>
                <div className="amt">
                  Monthly <small>or yearly</small>
                </div>
                <ul>
                  <li><span className="ck">✓</span> AI scanning of every new rota</li>
                  <li><span className="ck">✓</span> A monthly scan allowance</li>
                  <li><span className="ck">✓</span> Cancel anytime, no lock-in</li>
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
              Manual entry is always free, and alarms you’ve created keep ringing
              even if a subscription ends.
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
              <Faq q="Do the alarms work without internet?">
                Yes. Your shifts and alarms are stored on your iPhone, so alarms
                fire even in airplane mode or with no signal. An internet
                connection is only needed to scan a new rota.
              </Faq>
              <Faq q="Do I need to create an account?">
                No. Shiftmate works fully anonymously — no email, password, or
                sign-in. You can start adding shifts the moment you open it.
              </Faq>
              <Faq q="Which iPhones does it support?">
                Shiftmate is built for current iPhones. On iOS&nbsp;26 and later,
                alarms use Apple’s AlarmKit for a dedicated alarm experience; on
                earlier versions they fall back to local notifications.
              </Faq>
              <Faq q="What happens to a photo of my rota?">
                It’s sent once to an AI service to read your shifts, then deleted
                right away. The service is zero-retention and never trains on your
                image, and no identifying account is attached. Your shift details
                stay on your device.
              </Faq>
              <Faq q="What if the AI reads a shift wrong?">
                You review every shift on a confirmation screen before anything is
                scheduled, and you can fix any of them. And manual entry is always
                there as a free, exact fallback.
              </Faq>
              <Faq q="What does it cost?">
                Your first rota scan is free. After that, AI scanning continues
                with a paid subscription — monthly or yearly, each with a monthly
                scan allowance — or a one-time Lifetime purchase. Need extra scans?
                Add scan-credit packs any time. Manual entry is always free.
              </Faq>
            </div>
          </div>
        </section>

        {/* ============================ FINAL CTA ============================ */}
        <section className="section-pad final" id="get">
          <div className="wrap">
            <h2 className="head">Stop dreading the early start</h2>
            <p className="lead">
              Let Shiftmate carry the rota, the maths, and the wake-up — so you
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
  layers: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 2 9l10 6 10-6-10-6z" />
      <path d="M2 15l10 6 10-6" />
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
