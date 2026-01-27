import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import { Footer } from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BackToTop } from "@components/_basics/BackToTop";
import { ThemeProvider } from "./context/Theme";
import "@styles/global.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://yunghigue.com"),
  title: {
    default: "Yung Higue",
    template: "%s | Yung Higue",
  },
  description: "Sisyphus escaping liminality.",
  keywords: "Web Developer, Frontend Developer, Creative Developer, React Developer, 3D Develper",
  openGraph: {
    title: "Yung Higue",
    description: "Gallivanting all night without skin, and eating blood in fat black pudding",
    url: "https://yunghigue.com",
    siteName: "Yung Higue",
    locale: "en_JM",
    type: "website",
  },
  alternates: {
    types: { "application/rss+xml": "https://yunghigue.com/feed.xml" },
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
    title: "Yung Higue",
    card: "summary_large_image",
    site: "@YungHigue",
  },
  // verification: {
  //   google: '',
  //   yandex: '',
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>
            {children}
            <Analytics />
            <SpeedInsights />
            <BackToTop />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
