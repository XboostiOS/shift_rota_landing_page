import Link from "next/link";
import { Nav, Footer } from "../components/chrome";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How ShiftKal handles your data: on your device by default, optional EU cloud sync with Sign in with Apple, read-only sharing you control, EU-hosted analytics, and ad attribution only with your App Tracking Transparency consent.",
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
          <div className="meta">Last updated: 1 October 2026</div>
        </div>

        <div className="prose">
          <div className="callout-box">
            <p>
              <strong>The short version.</strong> You can use ShiftKal without an
              account, and then your shifts stay on your iPhone. If you choose
              to <strong>sign in with Apple</strong>, your schedule is stored on
              our EU servers so it syncs across your devices and can be shared
              with people you invite — only you, and the people you invite, can
              see it. We ask Apple only for your name, never your email. Our
              advertising-measurement tool reads your advertising identifier
              <em> only if you agree</em> to Apple’s tracking prompt, and never
              receives your schedule, photos, files, or name.
            </p>
          </div>

          <div className="toc">
            <a href="#who">Who we are</a>
            <a href="#device">Your schedule</a>
            <a href="#account">Sign in with Apple</a>
            <a href="#sharing">Sharing</a>
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

          <h2 id="device">2. Your schedule: on your device, or synced</h2>
          <p>
            Your schedule includes your shifts, shift templates, rotations,
            workplaces (jobs), shift titles, notes and locations, pay settings
            (pay rates, premiums and overtime rules — financial information),
            personal events, and your app settings (such as language, theme,
            and display name). Where it lives depends on whether you sign in:
          </p>
          <h3>If you don’t sign in</h3>
          <p>
            Your schedule is stored <strong>only on your iPhone</strong>. We do
            not receive it, store it on our servers, or log it. Deleting the app
            removes it, so we recommend a device backup if you want to keep it.
          </p>
          <h3>If you sign in with Apple</h3>
          <p>
            Your schedule is <strong>stored on our servers in the EU</strong>{" "}
            (Supabase) and synced to every device where you sign in with the
            same Apple Account, so it comes back after you reinstall the app or
            move to a new phone. It is protected by access rules that let only
            your account read or change it (plus the people you choose to share
            with — see <a href="#sharing">section 4</a>), and it travels over an
            encrypted connection. It is not end-to-end encrypted: our
            infrastructure stores it in readable form so it can sync and apply
            your sharing rules. We never use it for advertising and never send
            it to our analytics or advertising-measurement providers. Legal
            basis: performance of our agreement with you (Art.&nbsp;6(1)(b)
            GDPR).
          </p>
          <p>
            To let your other devices know something changed, the app also
            updates a single timestamp in your private iCloud database
            (Apple CloudKit). It contains no schedule data.
          </p>
          <h3>Always on your device only</h3>
          <ul>
            <li>Your scheduled alarms and reminder notifications</li>
            <li>The rota photos you take and the files you import (see <a href="#ai">section 8</a>)</li>
          </ul>
          <h3>Your iPhone calendar</h3>
          <p>
            If you connect your iPhone calendar, ShiftKal can add your shifts to
            a calendar on your device (which may sync through your own iCloud or
            calendar account) and show events from calendars you pick. Events
            you choose to show become part of your schedule in ShiftKal, so if
            you are signed in they sync like the rest of your schedule. You can
            disconnect at any time in Settings.
          </p>

          <h2 id="account">3. Sign in with Apple</h2>
          <p>
            Signing in is optional and only needed for sync and sharing. When
            you sign in, Apple shares with us a stable, app-specific user
            identifier and — the first time only — the name you allow. We do{" "}
            <strong>not</strong> request your email address. Your name is used as
            your display name, shown to people you share with (or, if you join
            someone else’s calendar, to its owner).
          </p>
          <p>
            <strong>Sign out</strong> keeps your schedule on the phone and pauses
            syncing. <strong>Delete account</strong> (Settings → Apple Account)
            permanently erases your account and all its data from our servers —
            schedule, shares and viewer access, settings, feedback, and scan
            allowance — removes your Apple sign-in from our system, and wipes
            the data on that device. Delete account does not cancel an App Store
            subscription; manage that in your Apple Account settings.
          </p>

          <h2 id="sharing">4. Sharing your schedule</h2>
          <p>
            If you are signed in, you can create a share link (a short code such
            as <code>rota.xboostapp.io/s/K7Q2M9X</code>) and send it to people
            you choose. To view it, they install ShiftKal and sign in with Apple,
            so you always see who has access. What they can see is enforced on
            our servers:
          </p>
          <ul>
            <li>They get a <strong>read-only</strong> view of the jobs and date range you pick.</li>
            <li>
              <strong>Never shared:</strong> notes, pay and earnings data,
              absence or sick status, and any shift you mark as hidden.
            </li>
            <li>Your workplace (its name and address) is shared only if you turn it on; personal events only if you choose to include them.</li>
            <li>
              You can change these settings per person, remove anyone, or close
              the link at any time; removed people lose access immediately.
            </li>
          </ul>
          <p>
            When you share, your display name is shown to people who open the
            link (including on our website’s invite page), and viewers’ display
            names are shown to you. To notify viewers of changes and owners of
            new viewers, we store a push-notification token for each signed-in
            device and send notifications through Apple’s push service. Legal
            basis: performance of our agreement with you (Art.&nbsp;6(1)(b)
            GDPR). Please share only with people you trust, and only schedule
            information you are entitled to share.
          </p>

          <h2 id="collect">5. Data we process</h2>
          <p>
            Beyond your schedule (sections 2–4), a small amount of data is
            processed by us and our service providers to provide entitlements,
            billing, product improvement, and to measure our advertising. None of
            it identifies you by email.
          </p>
          <h3>Anonymous app identifier</h3>
          <p>
            To keep track of your subscription and scan allowance, the app uses
            an <strong>app-generated identifier</strong> (a random Supabase
            account UUID), created automatically on first launch even if you
            never sign in. If you sign in with Apple, this same identifier
            becomes your account. Legal basis: performance of our
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
          <h3>Product analytics</h3>
          <p>
            To understand how the app is used and fix problems, we collect{" "}
            <strong>usage events</strong> (for example, “a rota was scanned” or
            “an alarm was created”) through <strong>PostHog</strong>, an
            EU-hosted analytics provider. Events are tied to your pseudonymous
            account identifier (the random UUID described above), never to your
            name or email, so they are linked to your account. This in-app analytics is separate
            from our advertising measurement — the events are <em>not</em> sent to
            our attribution provider. We never log the content of your rota,
            images, files, or personal shift details. Legal basis: our
            legitimate interest in understanding and improving the app
            (Art.&nbsp;6(1)(f) GDPR). You can object at any time by emailing us
            (see <a href="#rights">section 12</a>) and we will stop analytics for
            your installation.
          </p>
          <h3>Feedback you send us</h3>
          <p>
            If you send feedback from within the app, we receive the message you
            wrote so we can respond and improve. Please don’t include sensitive
            personal data in feedback.
          </p>

          <h2 id="attribution">6. Advertising, attribution &amp; App Tracking Transparency</h2>
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
              measured only by PostHog (see <a href="#collect">section 5</a>), not
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
            <a href="#rights">section 12</a>).
          </p>

          <h2 id="never">7. What we never collect</h2>
          <ul>
            <li>Your email address, phone number, or postal address</li>
            <li>Your name — unless you sign in with Apple and allow it, as your display name</li>
            <li>Your precise or approximate location</li>
            <li>Health or fitness data (sleep suggestions are calculated on your device)</li>
            <li>Your contacts</li>
            <li>The content of your schedule, photos, or imported files — for advertising or analytics</li>
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

          <h2 id="ai">8. Rota scanning and AI</h2>
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

          <h2 id="processors">9. Third-party services</h2>
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
                  <td>In-app product analytics (pseudonymous)</td>
                  <td>Usage events (no schedule content), pseudonymous account UUID</td>
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
                  <td>Backend: accounts, sync, sharing</td>
                  <td>
                    Account UUID, Apple sign-in identifier, display name, synced
                    schedule (if signed in), share settings and viewers, push
                    tokens, entitlement/scan quota, feedback
                  </td>
                  <td>Accounts, cross-device sync, sharing, scan allowance</td>
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
                  <td>App distribution, payments, sign-in, push</td>
                  <td>
                    Payment processing, Sign in with Apple, push notifications,
                    CloudKit sync signal (no schedule data), SKAdNetwork, ATT
                  </td>
                  <td>Distribute the app, sign you in, deliver notifications</td>
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

          <h2 id="location">10. Where your data is processed</h2>
          <p>
            Our analytics and backend (PostHog and Supabase) are hosted in the{" "}
            <strong>European Union</strong>. Some providers — including AppsFlyer,
            RevenueCat, Apple, and OpenAI — process data outside the EU, mainly in
            the United States. Where that happens we rely on appropriate
            safeguards such as the EU Standard Contractual Clauses.
          </p>

          <h2 id="retention">11. How long we keep data</h2>
          <p>
            On-device data remains until you delete it or remove the app.
            Removing the app does <strong>not</strong> delete data synced to your
            account — use Delete account in Settings for that. Synced schedule
            and account records are kept while your account exists and are
            erased when you delete it. Records tied to an installation that never
            signed in are kept as long as needed to honour purchases.
            Attribution data held by AppsFlyer is retained for the limited period
            needed to measure and validate a campaign, in line with AppsFlyer’s
            own retention practices. Rota images sent for scanning are not
            retained after parsing.
          </p>

          <h2 id="rights">12. Your rights</h2>
          <p>
            Under the GDPR and similar North American laws you may have the right
            to access, correct, delete, or restrict processing of your personal
            data, to object to processing based on legitimate interest (including
            advertising attribution), to data portability, and to withdraw
            consent at any time. If you are signed in, you can delete your
            account and all its data yourself in Settings → Apple Account. For other
            requests, sending them from the app (Settings → Feedback) lets us
            match them to your records.
          </p>
          <p>
            <strong>Withdrawing tracking consent:</strong> you can turn off ad
            tracking at any time in <strong>iOS Settings → Privacy &amp; Security
            → Tracking</strong> (or Settings → ShiftKal). This stops any further
            use of your IDFA. To object to in-app analytics, tell us from the
            app (Settings → Feedback) or by email.
          </p>
          <p>
            To make any other request — including deleting data for an
            installation that never signed in — email{" "}
            <a href="mailto:andrew@xboostapp.io">andrew@xboostapp.io</a> or see the{" "}
            <Link href="/support/">Support page</Link>. You also have the right to
            complain to your local data protection authority.
          </p>

          <h2 id="children">13. Children</h2>
          <p>
            ShiftKal is intended for adults in the workforce and is not directed
            at children. We do not knowingly collect data from children under 16.
          </p>

          <h2 id="permissions">14. Permissions</h2>
          <p>
            The app asks for Camera and Photo Library access only to read a rota
            you choose to scan, for Notification/alarm permission so alarms and
            sharing updates can reach you, for Calendar access only if you
            connect your iPhone calendar, and — through Apple’s ATT prompt — for optional permission to
            use your advertising identifier for attribution. You can change all of
            these any time in the iOS Settings app.
          </p>

          <h2 id="changes">15. Changes to this policy</h2>
          <p>
            We may update this policy as the app evolves. Material changes will be
            reflected here with a new “last updated” date.
          </p>

          <h2 id="contact">16. Contact</h2>
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
