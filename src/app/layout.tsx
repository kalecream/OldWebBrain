import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import { Footer } from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BackToTop } from "@components/_basics/BackToTop";
import "@styles/global.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://sabrinamedwinter.com"),
  title: {
    default: "Sab Medwinter",
    template: "%s | Sab Medwinter",
  },
  description: "Sisyphus escaping liminality.",
  keywords: "Web Developer, Frontend Developer, Creative Developer, React Developer, 3D Develper",
  openGraph: {
    title: "Sab Medwinter",
    description: "Sisyphus escaping liminality.",
    url: "https://sabrinamedwinter.com",
    siteName: "Sab Medwinter",
    locale: "en_JM",
    type: "website",
  },
  alternates: {
    types: { "application/rss+xml": "https://sabrinamedwinter.com/feed.xml" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // noai: true,
      // noimageai: true
      // TODO: check when this becomes available in nextjs
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Sab Medwinter",
    card: "summary_large_image",
    site: "@Medwinters",
  },
  // verification: {
  //   google: '',
  //   yandex: '',
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
          <BackToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
