"use client";

// Share landing + generic 404 (share_calendar §3.4 / §6.7, A10).
//
// This site is a STATIC Next export on GitHub Pages, so it can't pre-render the dynamic
// /s/<id> paths. GitHub Pages serves 404.html (this component) for any unknown path, so we
// read the path at runtime here: a /s/<id> link renders the "who shared it" install page
// (from the anon-callable share_meta RPC — NEVER decrypting, never reading #k=, D#33); any
// other unknown path renders a normal 404. The universal-link association (AASA) opens the
// app directly when it's installed — this page is only for browser users without the app.
//
// UI mirrors the landing design system (globals.css): warm ground, Space Grotesk display,
// the dark "cream" CTA, and an inviter-initials avatar header (supr.sh-style).

import { useEffect, useState } from "react";
import Link from "next/link";
import { Nav, Footer, AppStoreBadge, APP_STORE_URL } from "./components/chrome";
import { bp } from "./lib/base-path";

// DEV project (publishable key is public by design). SWAP for PROD Supabase.
const SUPABASE_URL = "https://dtpzzcwtjalxpzwaxzrm.supabase.co";
const SUPABASE_ANON = "sb_publishable_YZJjetTxkyapqPETx6Xkbg_LSbi9dVT";

const STR = {
  en: {
    live: "Live shared calendar",
    shared: (n) => (
      <>
        <span className="owner">{n}</span> invited you to a ShiftKal calendar
      </>
    ),
    join: "Join calendar",
    why: "Install ShiftKal to see the schedule — it updates whenever they change a shift, and only invited people can view it.",
    installTitle: "ShiftKal isn't installed",
    installBody: "Install ShiftKal, then open this link again to view the shared calendar.",
    tryAgain: "Try opening again",
    close: "Close",
    revoked: "This link is no longer valid.",
    revokedEye: "Link closed",
    expired: (n) => `This link has stopped accepting new people. Ask ${n || "them"} for a new one.`,
    expiredEye: "Invite closed",
    full: "This link is full.",
    fullEye: "Invite full",
    notfound: "Page not found.",
    notfoundEye: "404",
    back: "Go to ShiftKal",
  },
  de: {
    live: "Live geteilter Kalender",
    shared: (n) => (
      <>
        <span className="owner">{n}</span> hat dich zu einem ShiftKal-Kalender eingeladen
      </>
    ),
    join: "Kalender beitreten",
    installTitle: "ShiftKal ist nicht installiert",
    installBody: "Installiere ShiftKal und öffne diesen Link erneut, um den geteilten Kalender zu sehen.",
    tryAgain: "Erneut öffnen",
    close: "Schließen",
    why: "Installiere ShiftKal, um den Plan zu sehen — er aktualisiert sich bei jeder Schichtänderung, und nur eingeladene Personen sehen ihn.",
    revoked: "Dieser Link ist nicht mehr gültig.",
    revokedEye: "Link geschlossen",
    expired: (n) => `Dieser Link nimmt keine neuen Personen mehr auf. Bitte ${n || "sie"} um einen neuen.`,
    expiredEye: "Einladung zu",
    full: "Dieser Link ist voll.",
    fullEye: "Einladung voll",
    notfound: "Seite nicht gefunden.",
    notfoundEye: "404",
    back: "Zu ShiftKal",
  },
};

// Initials of the inviter for the header avatar (e.g. "Andrew Le" → "AL").
function initials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] || "";
  const b = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return ((a + b).toUpperCase()) || "?";
}

function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <span className="tick" />
      {children}
    </span>
  );
}

// The browser only calls preview_share for the owner name + status; the actual schedule opens in the
// app (never shown on the web).
export default function NotFound() {
  const [state, setState] = useState({ kind: "loading" });
  const [showInstall, setShowInstall] = useState(false);

  // Open the app via the CUSTOM SCHEME (shiftkal://s/<code>). A universal (https) link does NOT hand
  // off to the app when Safari is already on this same domain — tapping just reloads the page — which
  // is exactly the "Join does nothing but reload" bug. The custom scheme launches the app when it's
  // installed; if nothing opens within ~1.5s (not installed → the scheme fails silently), we surface
  // the install modal. No sessionStorage/navigation round-trip: the page stays put and detects the
  // hand-off via the tab going hidden.
  const attemptJoin = (code) => {
    if (!code) return;
    let opened = false;
    const onHide = () => { opened = true; };   // app took over → tab hidden → cancel the fallback
    document.addEventListener("visibilitychange", () => { if (document.hidden) onHide(); }, { once: true });
    window.addEventListener("pagehide", onHide, { once: true });
    window.location.href = `shiftkal://s/${code}`;
    window.setTimeout(() => { if (!opened && !document.hidden) setShowInstall(true); }, 1500);
  };

  useEffect(() => {
    const t = STR[(navigator.language || "en").slice(0, 2)] || STR.en;
    // Share v2: /s/<code> — a 6–8 char Crockford base32 code (server-authoritative, no key in the URL).
    const m = window.location.pathname.match(/\/s\/([A-Za-z0-9]{4,12})/);
    if (!m) { setState({ kind: "notfound", t }); return; }
    const code = m[1].toUpperCase();
    const shareURL = window.location.href;
    fetch(`${SUPABASE_URL}/rest/v1/rpc/preview_share`, {
      method: "POST",
      headers: { apikey: SUPABASE_ANON, Authorization: "Bearer " + SUPABASE_ANON, "Content-Type": "application/json" },
      body: JSON.stringify({ p_code: code }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (!d || d.found === false || d.revoked) return setState({ kind: "status", msg: t.revoked, eye: t.revokedEye, t });
        if (d.full) return setState({ kind: "status", msg: t.full, eye: t.fullEye, t });
        if (d.invite_expired) return setState({ kind: "status", msg: t.expired(d.owner_display_name), eye: t.expiredEye, t });
        setState({ kind: "invite", owner: d.owner_display_name || "Someone", code, shareURL, t });
      })
      .catch(() => setState({ kind: "invite", owner: null, code, shareURL, t }));
  }, []);

  const t = state.t || STR.en;

  return (
    <>
      <Nav />
      <main className="invite-main">
        <div className="invite-card">
          {/* Header: an initials avatar of the person who invited you (supr.sh-style), else the app icon. */}
          {state.kind === "invite" ? (
            <div className="invite-avatar" aria-hidden="true">{initials(state.owner)}</div>
          ) : (
            <img className="invite-icon" src={`${bp}/AppIcon-1024.png`} alt="ShiftKal" width="62" height="62" />
          )}

          {state.kind === "loading" && (
            <>
              <div className="invite-skeleton" style={{ width: "55%" }} />
              <div className="invite-skeleton" style={{ width: "80%" }} />
              <div className="invite-skeleton" style={{ width: "40%" }} />
            </>
          )}

          {state.kind === "invite" && (
            <>
              <Eyebrow>{t.live}</Eyebrow>
              <h1 className="invite-title">{t.shared(state.owner)}</h1>
              <div className="invite-actions">
                {/* One button: it opens the app if installed; only a failed open reveals Install. */}
                <button className="btn btn-primary" onClick={() => attemptJoin(state.code)}>{t.join}</button>
              </div>
              <p className="invite-why">{t.why}</p>
            </>
          )}

          {state.kind === "status" && (
            <>
              <Eyebrow>{state.eye}</Eyebrow>
              <h1 className="invite-title">{state.msg}</h1>
              <div className="invite-actions">
                <AppStoreBadge />
              </div>
            </>
          )}

          {state.kind === "notfound" && (
            <>
              <Eyebrow>{t.notfoundEye}</Eyebrow>
              <h1 className="invite-title">{t.notfound}</h1>
              <div className="invite-actions">
                <Link className="btn btn-ghost" href="/">{t.back}</Link>
              </div>
            </>
          )}
        </div>

        {showInstall && (
          <div className="modal-scrim" onClick={() => setShowInstall(false)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <h2 className="modal-title">{t.installTitle}</h2>
              <p className="modal-body">{t.installBody}</p>
              <div className="invite-actions">
                <AppStoreBadge />
                {state.kind === "invite" && (
                  <button className="btn btn-ghost" onClick={() => { setShowInstall(false); attemptJoin(state.code); }}>
                    {t.tryAgain}
                  </button>
                )}
              </div>
              <button className="modal-close" onClick={() => setShowInstall(false)}>{t.close}</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
