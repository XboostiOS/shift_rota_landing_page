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
// the dark "cream" CTA, and the shift-chip rail as the signature motif.

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
        <span className="owner">{n}</span> shared their work schedule with you.
      </>
    ),
    open: "Open in ShiftKal",
    why: "Install ShiftKal to see the schedule — it updates whenever they change a shift, and only invited people can view it.",
    revoked: "This link is no longer valid.",
    revokedEye: "Link closed",
    expired: (n) => `This link has stopped accepting new people. Ask ${n || "them"} for a new one.`,
    expiredEye: "Invite closed",
    full: "This link is full.",
    fullEye: "Invite full",
    notfound: "Page not found.",
    notfoundEye: "404",
    back: "Go to ShiftKal",
    days: ["Mon", "Wed", "Sat"],
    early: "Early",
    late: "Late",
    night: "Night",
  },
  de: {
    live: "Live geteilter Kalender",
    shared: (n) => (
      <>
        <span className="owner">{n}</span> hat den Arbeitsplan mit dir geteilt.
      </>
    ),
    open: "In ShiftKal öffnen",
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
    days: ["Mo", "Mi", "Sa"],
    early: "Früh",
    late: "Spät",
    night: "Nacht",
  },
};

function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <span className="tick" />
      {children}
    </span>
  );
}

// Illustrative rota preview — the landing's signature rail, shrunk. NOT the real schedule
// (the browser only calls preview_share for the owner name + status; the schedule opens in the app).
function ChipPreview({ t }) {
  return (
    <div className="invite-chips" aria-hidden="true">
      <div className="chip early">
        <span className="day">{t.days[0]}</span>
        <span className="name">{t.early}</span>
        <span className="time">06–14</span>
      </div>
      <div className="chip late">
        <span className="day">{t.days[1]}</span>
        <span className="name">{t.late}</span>
        <span className="time">14–22</span>
      </div>
      <div className="chip night">
        <span className="day">{t.days[2]}</span>
        <span className="name">{t.night}</span>
        <span className="time">22–06</span>
      </div>
    </div>
  );
}

export default function NotFound() {
  const [state, setState] = useState({ kind: "loading" });

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
        setState({ kind: "invite", owner: d.owner_display_name || "Someone", shareURL, t });
      })
      .catch(() => setState({ kind: "invite", owner: null, shareURL, t }));
  }, []);

  const t = state.t || STR.en;

  return (
    <>
      <Nav />
      <main className="invite-main">
        <div className="invite-card">
          <img className="invite-icon" src={`${bp}/AppIcon-1024.png`} alt="ShiftKal" width="62" height="62" />

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
              <ChipPreview t={t} />
              <div className="invite-actions">
                <a className="btn btn-primary" href={state.shareURL}>{t.open}</a>
                <AppStoreBadge />
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
      </main>
      <Footer />
    </>
  );
}
