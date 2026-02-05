import type { Metadata } from "next";
import Head from "next/head";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "@styles/global.scss";
import { Navbar } from "@components/Navigation/NavBar";
import { Footer } from "@components/Navigation/Footer";
import { BackToTop } from "@components/BackToTop/BackToTop";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./context/Theme";

const FiraCode = localFont({
  src: 'local("@assets/fonts/FiraCode.ttf")',
  display: 'swap',
  variable: '--font-fira-code',
});

const RomansStory = localFont({
  src: '',
  display: 'swap',
  variable: '--font-romans-story',
});

const Cattedrale = localFont({
  src: '',
  display: 'swap',
  variable: '--font-cathedral',
});

const CattedraleOrnamental = localFont({
  src: '',
  display: 'swap',
  variable: '--font-cathedral-ornamental',
});

const CattedraleRough = localFont({
  src: '',
  display: 'swap',
  variable: '--font-cathedral-rough',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "800"],
  display: "swap",
  variable: "--font-poppins",
});

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
  //   TODO: Google verification
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="/assets/images/light-grey-terrazzo.webp" as="image" fetchPriority="high" />
        <link rel="preload" href="/assets/images/stars.gif" as="image" fetchPriority="high" />
      </Head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>
            {children}
            <Analytics />
            <BackToTop />
          </main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
