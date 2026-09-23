import { Space_Grotesk, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const SITE = "https://rota.xboostapp.io";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "ShiftKal — Wake up for every shift",
    template: "%s · ShiftKal",
  },
  description:
    "ShiftKal keeps your whole shift rotation in one place, sets a reliable wake-up alarm for every shift, and protects your sleep in between. Add shifts by tapping, or scan your rota. Built for shift workers. For iPhone.",
  applicationName: "ShiftKal",
  keywords: [
    "shift work alarm",
    "rota scanner",
    "nurse alarm",
    "night shift",
    "rotating shifts",
    "wake up on time",
    "sleep for shift workers",
  ],
  authors: [{ name: "Xboost" }],
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "ShiftKal",
    title: "ShiftKal — Wake up for every shift",
    description:
      "Your whole rotation in one place, a reliable alarm for every shift, and protected sleep in between. For iPhone.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShiftKal — Wake up for every shift",
    description:
      "Your whole rotation in one place, a reliable alarm for every shift, and protected sleep in between.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#fdfcf9",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
