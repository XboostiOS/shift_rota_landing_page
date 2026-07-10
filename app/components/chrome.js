"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// TODO: replace with the real App Store URL once the app is live.
export const APP_STORE_URL = "#get";

export function Mark({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="15" fill="#0E0E11" />
      <circle cx="32" cy="34" r="17" stroke="#33333A" strokeWidth="4" />
      <path
        d="M15 34 A17 17 0 0 1 49 34"
        stroke="#FFC24D"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M49 34 A17 17 0 0 1 15 34"
        stroke="#5FD0BC"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <line
        x1="32"
        y1="34"
        x2="24"
        y2="26"
        stroke="#E9DCC2"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="34" r="3.4" fill="#E9DCC2" />
      <rect x="28.5" y="9" width="7" height="6" rx="2" fill="#E9DCC2" />
    </svg>
  );
}

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 12.53c-.02-2.02 1.65-2.99 1.72-3.04-0.94-1.37-2.4-1.56-2.92-1.58-1.24-.13-2.42.73-3.05.73-.63 0-1.6-.71-2.63-.69-1.35.02-2.6.79-3.3 2-1.41 2.44-.36 6.05 1.01 8.03.67.97 1.47 2.05 2.51 2.01 1.01-.04 1.39-.65 2.61-.65 1.22 0 1.56.65 2.63.63 1.09-.02 1.78-.98 2.44-1.96.77-1.12 1.09-2.21 1.11-2.27-.02-.01-2.13-.82-2.15-3.25zM15.03 6.2c.56-.68.94-1.62.83-2.56-.81.03-1.79.54-2.37 1.21-.52.6-.98 1.56-.86 2.48.9.07 1.83-.46 2.4-1.13z" />
    </svg>
  );
}

export function AppStoreBadge({ soon = false }) {
  return (
    <a
      className={`appstore${soon ? " soon" : ""}`}
      href={APP_STORE_URL}
      aria-label="Download Shiftmate on the App Store"
    >
      <AppleGlyph />
      <span>
        <span className="small">{soon ? "Coming soon to the" : "Download on the"}</span>
        <span className="big">App Store</span>
      </span>
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <Mark className="mark" />
          Shiftmate
        </Link>
        <div className="nav-links">
          <a href="/#how">How it works</a>
          <a href="/#features">Features</a>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/support/">Support</Link>
          <a href={APP_STORE_URL} className="btn btn-primary nav-cta">
            Get the app
          </a>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="brand-col">
          <Link href="/" className="brand">
            <Mark className="mark" />
            Shiftmate
          </Link>
          <p className="small">
            The alarm that reads your rota. Wake up for every shift, and sleep
            enough between them.
          </p>
        </div>
        <div className="col">
          <h5>Product</h5>
          <a href="/#how">How it works</a>
          <a href="/#features">Features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#faq">FAQ</a>
        </div>
        <div className="col">
          <h5>Company</h5>
          <Link href="/privacy/">Privacy Policy</Link>
          <Link href="/terms/">Terms of Use</Link>
          <Link href="/support/">Support</Link>
          <a href="mailto:andrew@xboostapp.io">Contact</a>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© 2026 Xboost. All rights reserved.</span>
        <span>Made for shift workers · Data hosted in the EU</span>
      </div>
    </footer>
  );
}
