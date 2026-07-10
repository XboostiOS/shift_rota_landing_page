import Link from "next/link";
import { Nav, Footer } from "../components/chrome";

export const metadata = {
  title: "Support",
  description:
    "Get help with Shiftmate — alarms, scanning, subscriptions, and data requests.",
};

export default function Support() {
  return (
    <>
      <Nav />
      <main className="wrap legal">
        <Link href="/" className="back-link">
          ← Back to Shiftmate
        </Link>
        <div className="legal-head">
          <h1>Support</h1>
          <div className="meta">We usually reply within 2 business days</div>
        </div>

        <div className="prose">
          <div className="callout-box">
            <p>
              <strong>Need a hand?</strong> Email{" "}
              <a href="mailto:andrew@xboostapp.io">andrew@xboostapp.io</a> and tell
              us your iPhone model and iOS version — it helps us help you faster.
              You don’t need an account to get support.
            </p>
          </div>

          <h2>Alarms &amp; reliability</h2>
          <h3>My alarm didn’t go off</h3>
          <p>Please check the following, then re-open Shiftmate so it can refresh:</p>
          <ul>
            <li>Notifications and alarm permission are granted (iOS Settings → Shiftmate).</li>
            <li>Your phone’s sound is on and the volume is up.</li>
            <li>A Focus or Do-Not-Disturb mode isn’t silencing alarms.</li>
            <li>The phone is charged and Low Power Mode isn’t blocking background refresh.</li>
            <li>The shift and its alarm are shown in the app for the day you expected.</li>
          </ul>
          <p>
            For safety-critical wake-ups, always keep a backup alarm — see our{" "}
            <Link href="/terms/">Terms of Use</Link>.
          </p>

          <h2>Scanning a rota</h2>
          <h3>The scan misread a shift</h3>
          <p>
            You can edit any shift on the review screen before creating alarms, and
            tap a day to fix just that shift. If a rota is hard to read, a clear,
            well-lit photo with your row or name visible helps a lot. Manual entry
            is always available and free.
          </p>
          <h3>I’ve used up my scans</h3>
          <p>
            Your first scan is free; further AI scanning uses your subscription’s
            monthly allowance. You can add shifts manually any time at no cost, or
            buy an extra scan pack in the app.
          </p>

          <h2>Subscriptions &amp; billing</h2>
          <h3>Manage or cancel</h3>
          <p>
            Subscriptions are billed through Apple. To view, change, or cancel:
            open the iOS <strong>Settings</strong> app → tap your name →{" "}
            <strong>Subscriptions</strong> → <strong>Shiftmate</strong>. Deleting
            the app does not cancel a subscription.
          </p>
          <h3>Restore purchases</h3>
          <p>
            On a new device, open Shiftmate and use “Restore purchases” so your
            subscription and any scan packs are recognised.
          </p>
          <h3>Refunds</h3>
          <p>
            Refunds for App Store purchases are handled by Apple at{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              reportaproblem.apple.com
            </a>
            .
          </p>

          <h2>Privacy &amp; your data</h2>
          <h3>Delete my data</h3>
          <p>
            Your shifts and personal details live on your device — deleting the app
            removes them. To delete the anonymous records tied to your installation
            (subscription/entitlement and any analytics), email{" "}
            <a href="mailto:andrew@xboostapp.io?subject=Data%20deletion%20request">
              andrew@xboostapp.io
            </a>{" "}
            with the subject “Data deletion request”. Include the app identifier
            from Settings so we can find your records. See the full{" "}
            <Link href="/privacy/">Privacy Policy</Link>.
          </p>
          <h3>Turn off analytics</h3>
          <p>
            Open Shiftmate → Settings → About, and switch off anonymous analytics.
          </p>

          <h2>Still stuck?</h2>
          <p>
            Email{" "}
            <a href="mailto:andrew@xboostapp.io">andrew@xboostapp.io</a> with a
            short description and, if you can, a screenshot. We read every message.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
