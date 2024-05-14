import type { Metadata } from 'next';
import { Header, Footer } from '@components/navigation';
import { BackToTop } from '@components/_basics/BackToTop';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
    metadataBase: new URL('https://sabrinamedwinter.com'),
    title: {
      default: 'Sabrina Medwinter',
      template: '%s | Sabrina Medwinter',
    },
    description: 'Developer, writer, and creator.',
    openGraph: {
      title: 'Sabrina Medwinter',
      description: 'Developer, writer, and creator.',
      url: 'https://sabrinamedwinter.com',
      siteName: 'Sabrina Medwinter',
      locale: 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      title: 'Sabrina Medwinter',
      card: 'summary_large_image',
    },
    verification: {
    //   google: '',
    //   yandex: '',
    },
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html
        lang="en"
      >
        <body>
          <main>
            <Header/>
            {children}
            <Analytics />
                    <Footer />
                    <BackToTop />
          </main>
        </body>
      </html>
    );
  }
  