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

const SITE = "https://shift-mate.xboostapp.io";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Shiftmate — Wake up for every shift",
    template: "%s · Shiftmate",
  },
  description:
    "Snap a photo of your work rota and Shiftmate reads your shifts, sets a reliable wake-up alarm for each one, and tells you when to sleep. Built for shift workers. For iPhone.",
  applicationName: "Shiftmate",
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
    siteName: "Shiftmate",
    title: "Shiftmate — Wake up for every shift",
    description:
      "Snap your rota. Shiftmate reads your shifts, sets reliable alarms, and protects your sleep. For iPhone.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiftmate — Wake up for every shift",
    description:
      "Snap your rota. Shiftmate reads your shifts, sets reliable alarms, and protects your sleep.",
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
