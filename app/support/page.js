import Link from "next/link";
import { Nav, Footer } from "../components/chrome";

export const metadata = {
  title: "Support",
  description:
    "Get help with ShiftKal — alarms, scanning, sync, sharing, subscriptions, and data requests.",
};

export default function Support() {
  return (
    <>
      <Nav />
      <main className="wrap legal">
        <Link href="/" className="back-link">
          ← Back to ShiftKal
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
          <p>Please check the following, then re-open ShiftKal so it can refresh:</p>
          <ul>
            <li>Notifications and alarm permission are granted (iOS Settings → ShiftKal).</li>
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
            AI scanning uses your plan’s monthly allowance. You can add shifts
            manually any time at no cost, or buy an extra scan pack in the app.
          </p>

          <h2>Sync &amp; new phones</h2>
          <h3>Move my shifts to a new iPhone</h3>
          <p>
            Sign in with Apple in ShiftKal (Settings → Account) on your current
            phone, then sign in with the same Apple Account on the new one — your
            schedule comes straight back. If you never signed in, your shifts
            live only on the old phone.
          </p>
          <h3>My other device isn’t updating</h3>
          <p>
            Make sure both devices are signed in with the same Apple Account and
            are online, then open ShiftKal on each. Settings → Account shows when
            it last synced.
          </p>

          <h2>Sharing your schedule</h2>
          <h3>Share with family or friends</h3>
          <p>
            Sign in with Apple, then create a share link in the app and send it by
            Messages, email, AirDrop, or QR code. The person you invite installs
            ShiftKal, opens the link, and signs in with Apple to see your shifts
            read-only. Notes and pay are never shared.
          </p>
          <h3>The link says it’s closed, full, or no longer accepting people</h3>
          <p>
            The owner may have closed the link, reached the viewer limit, or the
            invite period has ended. Ask them to reopen the invite or send a new
            link.
          </p>
          <h3>Stop sharing with someone</h3>
          <p>
            In the app’s sharing screen you can remove a person or close the link
            entirely — they lose access straight away. Viewers can also unfollow
            a calendar or mute its notifications.
          </p>

          <h2>Subscriptions &amp; billing</h2>
          <h3>Manage or cancel</h3>
          <p>
            Subscriptions are billed through Apple. To view, change, or cancel:
            open the iOS <strong>Settings</strong> app → tap your name →{" "}
            <strong>Subscriptions</strong> → <strong>ShiftKal</strong>. Deleting
            the app does not cancel a subscription.
          </p>
          <h3>Restore purchases</h3>
          <p>
            On a new device, open ShiftKal and use “Restore purchases” so your
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
          <h3>Delete my account and data</h3>
          <p>
            If you signed in with Apple, open ShiftKal → Settings → Account →{" "}
            <strong>Delete account</strong>. This permanently erases your schedule,
            shares, and account from our servers and from that iPhone. Just
            deleting the app does <em>not</em> remove data synced to your account.
          </p>
          <p>
            If you never signed in, your shifts live only on your device —
            deleting the app removes them. To delete the anonymous records tied
            to your installation (subscription/entitlement and any analytics),
            email{" "}
            <a href="mailto:andrew@xboostapp.io?subject=Data%20deletion%20request">
              andrew@xboostapp.io
            </a>{" "}
            with the subject “Data deletion request”. Include the app identifier
            from Settings so we can find your records. See the full{" "}
            <Link href="/privacy/">Privacy Policy</Link>.
          </p>
          <h3>Turn off analytics</h3>
          <p>
            Open ShiftKal → Settings → About, and switch off anonymous analytics.
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
