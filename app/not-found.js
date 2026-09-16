"use client";

// Share landing + generic 404 (share_calendar §3.4 / §6.7, A10).
//
// This site is a STATIC Next export on GitHub Pages, so it can't pre-render the dynamic
// /s/<id> paths. GitHub Pages serves 404.html (this component) for any unknown path, so we
// read the path at runtime here: a /s/<id> link renders the "who shared it" install page
// (from the anon-callable share_meta RPC — NEVER decrypting, never reading #k=, D#33); any
// other unknown path renders a normal 404. The universal-link association (AASA) opens the
// app directly when it's installed — this page is only for browser users without the app.

import { useEffect, useState } from "react";
import Link from "next/link";

// DEV project (publishable key is public by design). SWAP for PROD Supabase + real App Store URL.
const SUPABASE_URL = "https://dtpzzcwtjalxpzwaxzrm.supabase.co";
const SUPABASE_ANON = "sb_publishable_YZJjetTxkyapqPETx6Xkbg_LSbi9dVT";
const APP_STORE_URL = "https://apps.apple.com/app/shiftkal";

const STR = {
  en: {
    shared: (n) => `${n} shared their work schedule with you.`,
    open: "Open in ShiftKal", get: "Download ShiftKal",
    why: "Install the app to see the schedule — it updates whenever they change a shift, and only invited people can view it.",
    revoked: "This link is no longer valid.",
    expired: (n) => `This link has stopped accepting new people. Ask ${n || "them"} for a new one.`,
    full: "This link is full.", notfound: "Page not found.", back: "Go to ShiftKal",
  },
  de: {
    shared: (n) => `${n} hat den Arbeitsplan mit dir geteilt.`,
    open: "In ShiftKal öffnen", get: "ShiftKal laden",
    why: "Installiere die App, um den Plan zu sehen — er aktualisiert sich bei jeder Schichtänderung, und nur eingeladene Personen sehen ihn.",
    revoked: "Dieser Link ist nicht mehr gültig.",
    expired: (n) => `Dieser Link nimmt keine neuen Personen mehr auf. Bitte ${n || "sie"} um einen neuen.`,
    full: "Dieser Link ist voll.", notfound: "Seite nicht gefunden.", back: "Zu ShiftKal",
  },
};

function b64urlToUuid(s) {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  let bin;
  try { bin = atob(s); } catch (e) { return null; }
  if (bin.length !== 16) return null;
  let h = "";
  for (let i = 0; i < 16; i++) h += bin.charCodeAt(i).toString(16).padStart(2, "0");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

export default function NotFound() {
  const [state, setState] = useState({ kind: "loading" });

  useEffect(() => {
    const t = STR[(navigator.language || "en").slice(0, 2)] || STR.en;
    const m = window.location.pathname.match(/\/s\/([A-Za-z0-9_-]{22})/);
    if (!m) { setState({ kind: "notfound", t }); return; }
    const id = b64urlToUuid(m[1]);
    if (!id) { setState({ kind: "status", msg: t.revoked, t }); return; }
    const shareURL = window.location.href; // keeps #k= for the app
    fetch(`${SUPABASE_URL}/rest/v1/rpc/share_meta`, {
      method: "POST",
      headers: { apikey: SUPABASE_ANON, Authorization: "Bearer " + SUPABASE_ANON, "Content-Type": "application/json" },
      body: JSON.stringify({ p_id: id }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (!d || d.found === false) return setState({ kind: "status", msg: t.revoked, t });
        if (d.revoked) return setState({ kind: "status", msg: t.revoked, t });
        if (d.full) return setState({ kind: "status", msg: t.full, t });
        if (d.invite_expired) return setState({ kind: "status", msg: t.expired(d.owner_display_name), t });
        setState({ kind: "invite", owner: d.owner_display_name || "Someone", shareURL, t });
      })
      .catch(() => setState({ kind: "invite", owner: null, shareURL, t }));
  }, []);

  const t = state.t || STR.en;
  const card = {
    background: "var(--card, #fff)", border: "1px solid var(--line, #E6E7EB)", borderRadius: 20,
    maxWidth: 420, width: "100%", padding: "28px 24px", textAlign: "center",
  };
  const wrap = { minHeight: "70dvh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 };
  const primary = { display: "block", textDecoration: "none", fontWeight: 600, borderRadius: 12, padding: "14px 16px", margin: "10px 0", background: "var(--accent, #1677F0)", color: "#fff" };
  const secondary = { ...primary, background: "transparent", color: "var(--accent, #1677F0)", border: "1px solid var(--line, #E6E7EB)" };

  return (
    <main style={wrap}>
      <div style={card}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>📅</div>
        {state.kind === "loading" && <p>…</p>}
        {state.kind === "invite" && (
          <>
            <h1 style={{ fontSize: 20, lineHeight: 1.35 }}>{t.shared(state.owner)}</h1>
            <a style={primary} href={state.shareURL}>{t.open}</a>
            <a style={secondary} href={APP_STORE_URL}>{t.get}</a>
            <p style={{ color: "var(--sub, #6B6E76)", fontSize: 13, marginTop: 16 }}>{t.why}</p>
          </>
        )}
        {state.kind === "status" && (
          <>
            <h1 style={{ fontSize: 20 }}>{state.msg}</h1>
            <a style={secondary} href={APP_STORE_URL}>{t.get}</a>
          </>
        )}
        {state.kind === "notfound" && (
          <>
            <h1 style={{ fontSize: 20 }}>{t.notfound}</h1>
            <Link style={secondary} href="/">{t.back}</Link>
          </>
        )}
      </div>
    </main>
  );
}
