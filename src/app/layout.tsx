import { Head, NextScript } from 'next/document';
import '../styles/global.scss';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { Header, Footer } from '@components/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
	openGraph: {
		images: '/icons/thumbnail.jpg',
		description:
			'Unlocking the digital realm with a fusion of Jamaican web development prowess and captivating 3D artistry.',
		siteName: 'Sabrina Medwinter'
	},
	title: {
		template: '%s | SM',
		default: 'Sabrina Medwinter'
	},
	creator: 'Sabrina Medwinter',
	category: 'technology',
	keywords: [
		'Web Developer',
		'Software Engineer',
		'JavaScript',
		'Jamaican',
		'3D Artist',
		'Creative Web Developer',
		'FrontEnd Developer',
		'Jamaican'
	],
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#FED100' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' }
	],
	robots: {
		index: false,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	twitter: {
    card: 'summary_large_image',
    title: 'Sabrina Medwinter',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@SabMedwinter',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['sabrinamedwinter@gmail.com'],
    },
  },
};

export const RootLayout = ({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children
}: {
	children: React.ReactNode;
}) => {
	return (
		<html lang="en">
			<Head>
				<meta name="robots" content="index, follow" />
				<link rel="shortcut icon" href="/img/favicon.svg" />
			</Head>
			<body>
				<ThemeProvider
					storageKey="theme"
					attribute="class"
					enableSystem={true}
					// If enableSystem is false, the default theme is light
					defaultTheme="system"
					themes={['light', 'dark']}
				>
					<Header />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
				<NextScript />
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
