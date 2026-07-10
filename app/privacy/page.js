import Link from "next/link";
import { Nav, Footer } from "../components/chrome";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Shiftmate handles your data: local-first, no personal rota details leave your device, no ad tracking, EU hosting.",
};

export default function Privacy() {
  return (
    <>
      <Nav />
      <main className="wrap legal">
        <Link href="/" className="back-link">
          ← Back to Shiftmate
        </Link>
        <div className="legal-head">
          <h1>Privacy Policy</h1>
          <div className="meta">Last updated: 10 July 2026</div>
        </div>

        <div className="prose">
          <div className="callout-box">
            <p>
              <strong>The short version.</strong> Your shifts and everything
              personal in them stay on your iPhone. Shiftmate needs no account.
              We don’t track you across other apps, we run no advertising, and
              what little we do process is hosted in the EU.
            </p>
          </div>

          <div className="toc">
            <a href="#who">Who we are</a>
            <a href="#device">On-device data</a>
            <a href="#collect">What we process</a>
            <a href="#never">What we never collect</a>
            <a href="#ai">Rota scanning &amp; AI</a>
            <a href="#processors">Sub-processors</a>
            <a href="#rights">Your rights</a>
            <a href="#contact">Contact</a>
          </div>

          <h2 id="who">1. Who we are</h2>
          <p>
            Shiftmate (“the app”, “we”, “us”) is provided by <strong>Xboost</strong>,
            the data controller for the limited personal data described below.
          </p>
          <ul>
            <li>Controller: Xboost</li>
            <li>
              Postal address: <strong>[POSTAL ADDRESS]</strong>
            </li>
            <li>
              Contact:{" "}
              <a href="mailto:andrew@xboostapp.io">andrew@xboostapp.io</a>
            </li>
          </ul>
          <p>
            This policy explains what data Shiftmate handles, why, and the choices
            you have. It applies to the Shiftmate iOS app and this website.
          </p>

          <h2 id="device">2. Data that stays on your device</h2>
          <p>
            Shiftmate is <strong>local-first</strong>. Your schedule lives on your
            iPhone, and the following are stored only on your device — we do not
            receive them, store them on our servers, or log them:
          </p>
          <ul>
            <li>Your shifts, shift templates, and rotations</li>
            <li>Shift titles, notes, and locations</li>
            <li>Colleague or display names you enter</li>
            <li>Your alarms, wake-up times, and sleep settings</li>
            <li>Your prep, commute, and buffer times</li>
          </ul>
          <p>
            Because this data never leaves your device, deleting the app removes
            it. We recommend keeping a device backup if you want to preserve it.
          </p>

          <h2 id="collect">3. Data we process</h2>
          <p>
            To provide accounts-free entitlements, billing, and product
            improvement, a small amount of data is processed by us and our
            service providers. None of it identifies you by name or email.
          </p>
          <h3>Anonymous app identifier</h3>
          <p>
            To keep track of your subscription, scan allowance, and settings
            without an account, the app uses an <strong>app-generated,
            anonymous identifier</strong>. It is not linked to your name, email,
            or Apple ID. Legal basis: performance of our agreement with you
            (Art.&nbsp;6(1)(b) GDPR).
          </p>
          <h3>Purchases and subscriptions</h3>
          <p>
            When you start a trial, subscribe, or buy a scan pack, purchase status
            is processed through Apple and our subscription provider so we can
            unlock and restore features. Apple handles your payment; we never see
            your card details. Legal basis: performance of a contract.
          </p>
          <h3>Anonymous product analytics</h3>
          <p>
            To understand how the app is used and fix problems, we collect
            <strong> non-identifying usage events</strong> (for example, “a rota
            was scanned” or “an alarm was created”) through an EU-hosted analytics
            provider. We never log the content of your rota, images, or personal
            shift details. Analytics are on by default and you can{" "}
            <strong>switch them off any time</strong> in Settings. Legal basis:
            your consent / our legitimate interest in improving the app
            (Art.&nbsp;6(1)(a)/(f) GDPR).
          </p>
          <h3>Feedback you send us</h3>
          <p>
            If you send feedback from within the app, we receive the message you
            wrote so we can respond and improve. Please don’t include sensitive
            personal data in feedback.
          </p>

          <h2 id="never">4. What we never collect</h2>
          <ul>
            <li>Your name, email address, phone number, or postal address</li>
            <li>Your precise or approximate location</li>
            <li>Health or fitness data (sleep suggestions are calculated on your device)</li>
            <li>Your contacts</li>
            <li>Advertising identifiers (no IDFA), and we run no ad tracking</li>
          </ul>
          <div className="callout-box">
            <p>
              <strong>No tracking.</strong> Shiftmate does not track you across
              other companies’ apps or websites and does not share data with data
              brokers. There is no App Tracking Transparency prompt because there
              is nothing to track.
            </p>
          </div>

          <h2 id="ai">5. Rota scanning and AI</h2>
          <p>
            When you scan a rota, the image or the text you provide is sent to a
            third-party AI provider <strong>solely to read your shifts</strong>.
            We have taken the following measures:
          </p>
          <ul>
            <li>
              A data-processing agreement is in place with the provider
              (<strong>[FILL: AI provider name]</strong>).
            </li>
            <li>
              The endpoint is configured for <strong>zero retention</strong> — the
              image/text is used to parse your shifts and then deleted, and is not
              used to train models.
            </li>
            <li>
              <strong>No identifying account information is attached</strong> to
              the request.
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

          <h2 id="processors">6. Service providers (sub-processors)</h2>
          <p>
            We use a small number of trusted providers to run the app. They
            process data only on our instructions:
          </p>
          <ul>
            <li>
              <strong>Apple</strong> — App Store distribution and payment
              processing.
            </li>
            <li>
              <strong>RevenueCat</strong> — subscription and purchase management
              (anonymous identifier).
            </li>
            <li>
              <strong>Superwall</strong> — presenting subscription offers.
            </li>
            <li>
              <strong>PostHog (EU Cloud)</strong> — anonymous product analytics,
              hosted in the EU.
            </li>
            <li>
              <strong>Supabase (EU)</strong> — anonymous account, entitlement, and
              feedback storage, hosted in the EU.
            </li>
            <li>
              <strong>[FILL: AI provider name]</strong> — one-off rota parsing, as
              described above.
            </li>
          </ul>

          <h2 id="location">7. Where your data is processed</h2>
          <p>
            Our analytics and backend are hosted in the <strong>European
            Union</strong>. Where a provider processes data outside the EU, we
            rely on appropriate safeguards such as the EU Standard Contractual
            Clauses.
          </p>

          <h2 id="retention">8. How long we keep data</h2>
          <p>
            On-device data remains until you delete it or remove the app.
            Anonymous account and entitlement records are kept while your
            installation is active and for as long as needed to honour purchases.
            Rota images sent for scanning are not retained after parsing.
          </p>

          <h2 id="rights">9. Your rights</h2>
          <p>
            Under the GDPR and similar laws you may have the right to access,
            correct, delete, or restrict processing of your personal data, and to
            object to processing or withdraw consent. Because we hold only
            anonymous data tied to your installation, we may ask for the app’s
            identifier (shown in Settings) to locate your records.
          </p>
          <p>
            To make a request — including deleting the data associated with your
            installation — email{" "}
            <a href="mailto:andrew@xboostapp.io">andrew@xboostapp.io</a> or see the{" "}
            <Link href="/support/">Support page</Link>. You also have the right to
            complain to your local data protection authority.
          </p>

          <h2 id="children">10. Children</h2>
          <p>
            Shiftmate is intended for adults in the workforce and is not directed
            at children. We do not knowingly collect data from children under 16.
          </p>

          <h2 id="permissions">11. Permissions</h2>
          <p>
            The app asks for Camera and Photo Library access only to read a rota
            you choose to scan, and for Notification/alarm permission so alarms
            can fire. You can change these any time in the iOS Settings app.
          </p>

          <h2 id="changes">12. Changes to this policy</h2>
          <p>
            We may update this policy as the app evolves. Material changes will be
            reflected here with a new “last updated” date.
          </p>

          <h2 id="contact">13. Contact</h2>
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
