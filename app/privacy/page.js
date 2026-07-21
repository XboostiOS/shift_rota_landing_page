import Link from "next/link";
import { Nav, Footer } from "../components/chrome";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How ShiftKal handles your data: local-first, your rota never leaves your device to advertisers, EU-hosted analytics, and ad attribution only with your App Tracking Transparency consent.",
};

export default function Privacy() {
  return (
    <>
      <Nav />
      <main className="wrap legal">
        <Link href="/" className="back-link">
          ← Back to ShiftKal
        </Link>
        <div className="legal-head">
          <h1>Privacy Policy</h1>
          <div className="meta">Last updated: 21 July 2026</div>
        </div>

        <div className="prose">
          <div className="callout-box">
            <p>
              <strong>The short version.</strong> Your shifts and everything
              personal in them stay on your iPhone. ShiftKal needs no account.
              We do use one advertising-measurement tool to understand which ad
              brought you here — but it only reads your device’s advertising
              identifier <em>if you agree</em> to the Apple tracking prompt, and
              it never receives your rota, photos, files, name, or email.
              Everything we host ourselves is in the EU.
            </p>
          </div>

          <div className="toc">
            <a href="#who">Who we are</a>
            <a href="#device">On-device data</a>
            <a href="#collect">What we process</a>
            <a href="#attribution">Advertising &amp; ATT</a>
            <a href="#never">What we never collect</a>
            <a href="#ai">Rota scanning &amp; AI</a>
            <a href="#processors">Third-party services</a>
            <a href="#location">Where data is processed</a>
            <a href="#rights">Your rights</a>
            <a href="#contact">Contact</a>
          </div>

          <h2 id="who">1. Who we are</h2>
          <p>
            ShiftKal (“the app”, “we”, “us”) is provided by <strong>Xboost</strong>,
            the data controller for the limited personal data described below.
          </p>
          <ul>
            <li>Controller: Xboost (based in Vietnam)</li>
            <li>
              Contact:{" "}
              <a href="mailto:andrew@xboostapp.io">andrew@xboostapp.io</a>
            </li>
          </ul>
          <p>
            This policy explains what data ShiftKal handles, why, and the choices
            you have. It applies to the ShiftKal iOS app and this website, and is
            written for users in the EU/EEA (GDPR) and North America.
          </p>

          <h2 id="device">2. Data that stays on your device</h2>
          <p>
            ShiftKal is <strong>local-first</strong>. Your schedule lives on your
            iPhone, and the following are stored only on your device — we do not
            receive them, store them on our servers, log them, or share them with
            our analytics or advertising-measurement providers:
          </p>
          <ul>
            <li>Your shifts, shift templates, and rotations</li>
            <li>Shift titles, notes, and locations</li>
            <li>Colleague or display names you enter</li>
            <li>The rota photos you take and the CSV files you import</li>
            <li>Your alarms, wake-up times, and sleep settings</li>
            <li>Your prep, commute, and buffer times</li>
          </ul>
          <p>
            Because this data never leaves your device, deleting the app removes
            it. We recommend keeping a device backup if you want to preserve it.
            (When you choose to scan a photo, the image alone is sent to an AI
            service purely to read the shifts and is then deleted — see{" "}
            <a href="#ai">section 6</a>. It is never sent to any advertising or
            analytics provider.)
          </p>

          <h2 id="collect">3. Data we process</h2>
          <p>
            To provide account-free entitlements, billing, product improvement,
            and to measure our advertising, a small amount of data is processed
            by us and our service providers. None of it identifies you by name or
            email.
          </p>
          <h3>Anonymous app identifier</h3>
          <p>
            To keep track of your subscription, scan allowance, and settings
            without an account, the app uses an <strong>app-generated, anonymous
            identifier</strong> (a random Supabase account UUID). It is not linked
            to your name, email, or Apple ID. Legal basis: performance of our
            agreement with you (Art.&nbsp;6(1)(b) GDPR).
          </p>
          <h3>Purchases and subscriptions</h3>
          <p>
            When you subscribe or buy a scan pack, purchase status is processed
            through Apple and our subscription provider (<strong>RevenueCat</strong>)
            so we can unlock and restore features. Apple handles your payment; we
            never see your card details. Legal basis: performance of a contract
            (Art.&nbsp;6(1)(b) GDPR).
          </p>
          <h3>Anonymous product analytics</h3>
          <p>
            To understand how the app is used and fix problems, we collect{" "}
            <strong>non-identifying usage events</strong> (for example, “a rota
            was scanned” or “an alarm was created”) through <strong>PostHog</strong>,
            an EU-hosted analytics provider. This in-app analytics is separate
            from our advertising measurement — the events are <em>not</em> sent to
            our attribution provider. We never log the content of your rota,
            images, files, or personal shift details. Analytics are on by default
            and you can <strong>switch them off any time</strong> in Settings.
            Legal basis: your consent / our legitimate interest in improving the
            app (Art.&nbsp;6(1)(a)/(f) GDPR).
          </p>
          <h3>Feedback you send us</h3>
          <p>
            If you send feedback from within the app, we receive the message you
            wrote so we can respond and improve. Please don’t include sensitive
            personal data in feedback.
          </p>

          <h2 id="attribution">4. Advertising, attribution &amp; App Tracking Transparency</h2>
          <p>
            Like most apps, we run ads to reach new shift workers. To learn which
            campaign led you to install ShiftKal — and nothing more — we use{" "}
            <strong>AppsFlyer</strong> as our mobile measurement partner.
          </p>
          <div className="callout-box">
            <p>
              <strong>Attribution only, not analytics.</strong> AppsFlyer is used
              <em> solely</em> to attribute installs to their ad source. The app
              sends <strong>no custom events, no purchase events, and no
              in-app behaviour</strong> to AppsFlyer. How you use the app is
              measured only by PostHog (see <a href="#collect">section 3</a>), not
              by AppsFlyer.
            </p>
          </div>
          <h3>What AppsFlyer processes</h3>
          <ul>
            <li>
              <strong>AppsFlyer ID</strong> — an anonymous install identifier the
              SDK generates on your device. Always used. It is not your name or
              email.
            </li>
            <li>
              <strong>Advertising Identifier (IDFA)</strong> — collected{" "}
              <strong>only if you tap “Allow”</strong> on Apple’s App Tracking
              Transparency (ATT) prompt. If you decline, no IDFA is collected.
            </li>
            <li>
              <strong>Apple SKAdNetwork</strong> — Apple’s privacy-preserving,
              aggregate way of measuring installs without the IDFA. When you
              decline ATT, we rely on this plus probabilistic modelling instead.
            </li>
            <li>
              <strong>Attribution &amp; deep-link data</strong> — non-identifying
              campaign, ad, and click information used to match your install to an
              ad, and general device/network signals AppsFlyer needs to do so.
            </li>
            <li>
              <strong>A pseudonymous user identifier</strong> — your anonymous
              Supabase account UUID, passed to AppsFlyer as the “customer user
              ID”. This is a random identifier, <strong>not</strong> your real
              name, email, or other personal details.
            </li>
          </ul>
          <p>
            <strong>What we never send to AppsFlyer:</strong> your rota content,
            photos, imported CSV files, shift titles, notes, names, email, or any
            other personal data. None of that ever reaches AppsFlyer’s servers or
            logs.
          </p>
          <h3>Linking install to purchase</h3>
          <p>
            So we can tell whether an ad campaign actually led to a subscription,
            the <strong>AppsFlyer ID is shared with RevenueCat</strong>, which
            joins your (anonymous) purchase revenue to the install on a
            server-to-server basis. This lets us measure return on ad spend using
            only anonymous identifiers — no personal purchase details are exposed.
          </p>
          <h3>The App Tracking Transparency prompt</h3>
          <p>
            ShiftKal shows Apple’s ATT prompt <strong>once</strong>, after the
            onboarding “value moment” and before the paywall. You can{" "}
            <strong>decline and the app still works normally</strong> — only the
            IDFA is withheld. Whatever you choose, you can change your mind at any
            time in <strong>iOS Settings → Privacy &amp; Security → Tracking</strong>{" "}
            (or under Settings → ShiftKal), where you can turn tracking off to
            withdraw consent or on to grant it.
          </p>
          <p>
            <strong>Legal bases (GDPR):</strong> collection of the IDFA and any
            cross-app tracking relies on <strong>your consent</strong>
            (Art.&nbsp;6(1)(a) GDPR), given through the ATT prompt. The anonymous
            AppsFlyer ID, SKAdNetwork measurement, and non-identifying attribution
            data are processed on the basis of our{" "}
            <strong>legitimate interest</strong> in understanding and improving
            the effectiveness of our advertising (Art.&nbsp;6(1)(f) GDPR). You can
            object to processing based on legitimate interest at any time (see{" "}
            <a href="#rights">section 9</a>).
          </p>

          <h2 id="never">5. What we never collect</h2>
          <ul>
            <li>Your name, email address, phone number, or postal address</li>
            <li>Your precise or approximate location</li>
            <li>Health or fitness data (sleep suggestions are calculated on your device)</li>
            <li>Your contacts</li>
            <li>The content of your rota, photos, or imported files — for advertising or analytics</li>
          </ul>
          <div className="callout-box">
            <p>
              <strong>Tracking is your choice.</strong> The only cross-app
              tracking ShiftKal performs is advertising attribution, and it uses
              your advertising identifier <em>only</em> with your ATT consent. We
              do not sell your data and we do not share data with data brokers. If
              you decline the tracking prompt, we measure ads only with Apple’s
              privacy-preserving SKAdNetwork.
            </p>
          </div>

          <h2 id="ai">6. Rota scanning and AI</h2>
          <p>
            When you scan a rota, the image or the text you provide is sent to a
            third-party AI provider <strong>solely to read your shifts</strong>.
            We have taken the following measures:
          </p>
          <ul>
            <li>
              A data-processing agreement is in place with the provider
              (<strong>OpenAI</strong>).
            </li>
            <li>
              The endpoint is configured for <strong>zero retention</strong> — the
              image/text is used to parse your shifts and then deleted, and is not
              used to train models.
            </li>
            <li>
              <strong>No identifying account information is attached</strong> to
              the request, and nothing is sent to our advertising or analytics
              providers.
            </li>
            <li>
              We do not store the rota image ourselves; the parsed result is
              returned to your device for you to review.
            </li>
          </ul>
          <p>
            You are always shown the parsed shifts and must confirm them before
            anything is scheduled. If you prefer not to use AI scanning, you can
            enter shifts manually — no image or text leaves your device in that
            case.
          </p>

          <h2 id="processors">7. Third-party services</h2>
          <p>
            We use a small number of trusted providers to run the app. Each has a
            distinct role and processes data only on our instructions (or, where
            they act as an independent controller, under their own policy linked
            below):
          </p>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Role</th>
                  <th>Data</th>
                  <th>Purpose</th>
                  <th>Region</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>AppsFlyer</strong>
                    <br />
                    <a
                      href="https://www.appsflyer.com/legal/services-privacy-policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy policy
                    </a>
                  </td>
                  <td>Install / ad attribution (not in-app analytics)</td>
                  <td>
                    AppsFlyer ID, IDFA (only with ATT consent), SKAdNetwork,
                    non-identifying attribution/deep-link data, anonymous Supabase
                    UUID as customer user ID
                  </td>
                  <td>Attribute installs to the ad that drove them</td>
                  <td>US / global (SCCs)</td>
                </tr>
                <tr>
                  <td>
                    <strong>PostHog</strong>
                    <br />
                    <a
                      href="https://posthog.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy policy
                    </a>
                  </td>
                  <td>In-app product analytics (anonymised)</td>
                  <td>Non-identifying usage events, anonymous identifier</td>
                  <td>Understand usage and fix problems</td>
                  <td>EU</td>
                </tr>
                <tr>
                  <td>
                    <strong>RevenueCat</strong>
                    <br />
                    <a
                      href="https://www.revenuecat.com/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy policy
                    </a>
                  </td>
                  <td>Payments / subscriptions</td>
                  <td>
                    Anonymous purchase &amp; entitlement status, AppsFlyer ID (for
                    revenue attribution)
                  </td>
                  <td>Manage and restore purchases; measure ad ROI</td>
                  <td>US / global (SCCs)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Supabase</strong>
                    <br />
                    <a
                      href="https://supabase.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy policy
                    </a>
                  </td>
                  <td>Anonymous account + quota</td>
                  <td>Anonymous account UUID, entitlement/scan quota, feedback</td>
                  <td>Account-free entitlements and scan allowance</td>
                  <td>EU</td>
                </tr>
                <tr>
                  <td>
                    <strong>Apple</strong>
                    <br />
                    <a
                      href="https://www.apple.com/legal/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy policy
                    </a>
                  </td>
                  <td>App distribution &amp; payments</td>
                  <td>Payment processing, SKAdNetwork, ATT framework</td>
                  <td>Distribute the app and process purchases</td>
                  <td>Global</td>
                </tr>
                <tr>
                  <td>
                    <strong>OpenAI</strong>
                    <br />
                    <a
                      href="https://openai.com/policies/privacy-policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy policy
                    </a>
                  </td>
                  <td>One-off rota parsing (AI)</td>
                  <td>The rota image/text you choose to scan (zero retention)</td>
                  <td>Read your shifts, then delete</td>
                  <td>US (SCCs)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="location">8. Where your data is processed</h2>
          <p>
            Our analytics and backend (PostHog and Supabase) are hosted in the{" "}
            <strong>European Union</strong>. Some providers — including AppsFlyer,
            RevenueCat, Apple, and OpenAI — process data outside the EU, mainly in
            the United States. Where that happens we rely on appropriate
            safeguards such as the EU Standard Contractual Clauses.
          </p>

          <h2 id="retention">9. How long we keep data</h2>
          <p>
            On-device data remains until you delete it or remove the app.
            Anonymous account and entitlement records are kept while your
            installation is active and for as long as needed to honour purchases.
            Attribution data held by AppsFlyer is retained for the limited period
            needed to measure and validate a campaign, in line with AppsFlyer’s
            own retention practices. Rota images sent for scanning are not
            retained after parsing.
          </p>

          <h2 id="rights">10. Your rights</h2>
          <p>
            Under the GDPR and similar North American laws you may have the right
            to access, correct, delete, or restrict processing of your personal
            data, to object to processing based on legitimate interest (including
            advertising attribution), to data portability, and to withdraw
            consent at any time. Because we hold only anonymous data tied to your
            installation, we may ask for the app’s identifier (shown in Settings)
            to locate your records.
          </p>
          <p>
            <strong>Withdrawing tracking consent:</strong> you can turn off ad
            tracking at any time in <strong>iOS Settings → Privacy &amp; Security
            → Tracking</strong> (or Settings → ShiftKal). This stops any further
            use of your IDFA. You can turn off in-app analytics in the app’s own
            Settings.
          </p>
          <p>
            To make a request — including deleting the data associated with your
            installation — email{" "}
            <a href="mailto:andrew@xboostapp.io">andrew@xboostapp.io</a> or see the{" "}
            <Link href="/support/">Support page</Link>. You also have the right to
            complain to your local data protection authority.
          </p>

          <h2 id="children">11. Children</h2>
          <p>
            ShiftKal is intended for adults in the workforce and is not directed
            at children. We do not knowingly collect data from children under 16.
          </p>

          <h2 id="permissions">12. Permissions</h2>
          <p>
            The app asks for Camera and Photo Library access only to read a rota
            you choose to scan, for Notification/alarm permission so alarms can
            fire, and — through Apple’s ATT prompt — for optional permission to
            use your advertising identifier for attribution. You can change all of
            these any time in the iOS Settings app.
          </p>

          <h2 id="changes">13. Changes to this policy</h2>
          <p>
            We may update this policy as the app evolves. Material changes will be
            reflected here with a new “last updated” date.
          </p>

          <h2 id="contact">14. Contact</h2>
          <p>
            Questions about privacy? Email{" "}
            <a href="mailto:andrew@xboostapp.io">andrew@xboostapp.io</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
