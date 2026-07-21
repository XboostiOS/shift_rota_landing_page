import Link from "next/link";
import { Nav, Footer } from "../components/chrome";

export const metadata = {
  title: "Terms of Use",
  description:
    "The terms for using ShiftKal, including subscription and billing terms and important alarm-reliability disclaimers.",
};

export default function Terms() {
  return (
    <>
      <Nav />
      <main className="wrap legal">
        <Link href="/" className="back-link">
          ← Back to ShiftKal
        </Link>
        <div className="legal-head">
          <h1>Terms of Use</h1>
          <div className="meta">Last updated: 10 July 2026</div>
        </div>

        <div className="prose">
          <p>
            These Terms of Use (“Terms”) govern your use of the ShiftKal iOS app
            and this website (together, “ShiftKal”), provided by{" "}
            <strong>Xboost</strong> (“we”, “us”). By downloading or using
            ShiftKal, you agree to these Terms. If you don’t agree, please don’t
            use the app.
          </p>

          <div className="callout-box">
            <p>
              <strong>Important — alarms are a helper, not a guarantee.</strong>{" "}
              ShiftKal helps you plan wake-up alarms, but it depends on your
              device, its settings, battery, volume, Focus/Do-Not-Disturb, and
              iOS itself. <strong>Do not rely on ShiftKal alone</strong> for
              waking when missing a shift would cause you or others harm. Keep a
              backup alarm for safety-critical situations.
            </p>
          </div>

          <h2>1. Who can use ShiftKal</h2>
          <p>
            You must be at least 16 years old and able to form a binding contract
            to use ShiftKal. The app is intended for personal use in managing
            your own work schedule.
          </p>

          <h2>2. What ShiftKal does</h2>
          <p>
            ShiftKal reads a rota you provide (by photo, file, or text), lets you
            review and edit the resulting shifts, and schedules alarms and
            reminders on your device. AI parsing is an aid; you are responsible
            for reviewing and confirming every shift before it is scheduled.
          </p>

          <h2>3. Your responsibilities</h2>
          <ul>
            <li>
              Review parsed shifts for accuracy before creating alarms, and keep
              your prep, commute, and time settings up to date.
            </li>
            <li>
              Keep your device charged, with sound enabled and permissions granted,
              so alarms can fire.
            </li>
            <li>
              Only scan rotas you are entitled to use. Don’t upload content that
              infringes others’ rights or that you’re not permitted to share.
            </li>
            <li>
              Don’t misuse the app: no reverse engineering except as permitted by
              law, no interfering with its operation, and no unlawful use.
            </li>
          </ul>

          <h2>4. Subscriptions and purchases</h2>
          <p>
            Your first rota scan is free. Continued AI scanning is offered through
            a paid auto-renewable subscription (monthly or yearly) or a one-time
            Lifetime purchase. Scan credit packs may be offered as one-time
            (consumable) purchases.
          </p>
          <ul>
            <li>
              <strong>Billing.</strong> Prices are shown in the app in your local
              currency. Payment is charged to your Apple Account at confirmation
              of purchase.
            </li>
            <li>
              <strong>Auto-renewal.</strong> A subscription automatically renews
              unless auto-renew is turned off at least 24 hours before the end of
              the current period. Your Apple Account is charged for renewal within
              24 hours before the period ends.
            </li>
            <li>
              <strong>Manage or cancel.</strong> You can manage or cancel your
              subscription any time in your Apple Account settings. Deleting the
              app does not cancel a subscription.
            </li>
            <li>
              <strong>Lifetime purchase.</strong> The Lifetime option is a
              one-time, non-consumable purchase that unlocks AI scanning without a
              recurring charge. It can be restored on your devices via your Apple
              Account.
            </li>
            <li>
              <strong>Consumables.</strong> Scan packs are consumable and are used
              up as you scan; they are generally non-refundable except as required
              by law or Apple’s policies.
            </li>
            <li>
              <strong>After a subscription ends.</strong> Alarms you already
              created keep working; you may lose the ability to scan new rotas
              with AI until you resubscribe. Manual entry remains free.
            </li>
          </ul>
          <p>
            Purchases are processed by Apple and are also subject to Apple’s terms.
            Refunds are handled by Apple in line with the App Store’s policies.
          </p>

          <h2>5. Apple App Store terms (standard EULA)</h2>
          <p>
            ShiftKal is licensed, not sold, to you for use only under Apple’s
            standard Licensed Application End User License Agreement (EULA), except
            to the extent these Terms expand on it. You can read Apple’s standard
            EULA here:{" "}
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
            >
              apple.com/legal/internet-services/itunes/dev/stdeula
            </a>
            . Apple is not responsible for the app or for any claims relating to
            it, and Apple is a third-party beneficiary of these Terms entitled to
            enforce them.
          </p>

          <h2>6. Intellectual property</h2>
          <p>
            ShiftKal, its name, design, and content are owned by Xboost and
            protected by law. We grant you a limited, personal, non-transferable
            licence to use the app under these Terms. Your rota content remains
            yours.
          </p>

          <h2>7. Third-party services</h2>
          <p>
            ShiftKal relies on third-party services (including Apple, and the
            providers listed in our{" "}
            <Link href="/privacy/">Privacy Policy</Link>). Their terms may also
            apply to your use of those services.
          </p>

          <h2>8. Disclaimers</h2>
          <p>
            ShiftKal is provided “as is” and “as available”. To the maximum
            extent permitted by law, we disclaim all warranties, express or
            implied, including fitness for a particular purpose. We do not warrant
            that alarms will always fire, that AI parsing will be error-free, or
            that the app will be uninterrupted. Nothing in these Terms excludes
            liability that cannot be excluded by law, including your statutory
            consumer rights.
          </p>

          <h2>9. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, we are not liable for indirect
            or consequential losses, or for losses arising from a missed alarm,
            oversleeping, incorrect shift parsing, or device or OS behaviour
            outside our control. This does not limit liability for death or
            personal injury caused by our negligence, for fraud, or for any
            liability that cannot be limited by law.
          </p>

          <h2>10. Changes</h2>
          <p>
            We may update the app and these Terms. Material changes to the Terms
            will be posted here with a new “last updated” date; continued use
            means you accept the updated Terms.
          </p>

          <h2>11. Termination</h2>
          <p>
            You may stop using ShiftKal at any time by deleting the app. We may
            suspend or end access if you materially breach these Terms.
          </p>

          <h2>12. Governing law</h2>
          <p>
            These Terms, and the relationship between you and Xboost, are governed
            by the laws applicable to your place of residence, without regard to
            conflict-of-laws principles. Nothing here affects the mandatory
            consumer-protection rights you have where you live.
          </p>

          <h2>13. Contact</h2>
          <p>
            Questions about these Terms? Email{" "}
            <a href="mailto:andrew@xboostapp.io">andrew@xboostapp.io</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
