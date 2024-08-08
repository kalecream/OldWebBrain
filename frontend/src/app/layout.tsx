import '@styles/global.scss';
import type { Metadata } from 'next';
import { Navbar } from './components/nav';
import { Footer } from './components/footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SandpackCSS } from './blog/[slug]/sandpack';
import { BackToTop } from '@components/_basics/BackToTop';

export const metadata: Metadata = {
	metadataBase: new URL('https://sabrinamedwinter.com'),
	title: {
		default: 'Sabrina Medwinter',
		template: '%s | Sabrina Medwinter',
	},
	description:
		'Unlocking the digital realm with a fusion of Jamaican web development prowess and captivating 3D artistry.',
	keywords:
		'Software Engineer, Web Developer, Frontend Developer, Creative Developer, React Developer, Filipino Developer, 3D Develper',
	openGraph: {
		title: 'Sabrina Medwinter',
		description:
			'Unlocking the digital realm with a fusion of Jamaican web development prowess and captivating 3D artistry.',
		url: 'https://sabrinamedwinter.com',
		siteName: 'Sabrina Medwinter',
		locale: 'en_JM',
		type: 'website',
	},
	alternates: {
		types: { 'application/rss+xml': 'https://sabrinamedwinter.com/feed.xml' },
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
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Sabrina Medwinter',
		card: 'summary_large_image',
		site: '@SabMedwinter',
	},
	// verification: {
	//   google: '',
	//   yandex: '',
	// },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<SandpackCSS />
			</head>
			<body>
				<main>
					<Navbar />
					{children}
					<Analytics />
					<SpeedInsights />
					<BackToTop />
					<Footer />
				</main>
			</body>
		</html>
	);
}
