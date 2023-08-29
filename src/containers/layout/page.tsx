import React, { useEffect, useMemo, useState } from 'react';
import { Header, Footer } from '@components/navigation';
import { MetaProps } from '../../types/layout';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';

type LayoutProps = {
	children: React.ReactNode;
	customMeta?: MetaProps;
	title?: string;
	description?: string;
};

export const WEBSITE_HOST_URL = 'https://www.sabrinamedwinter.com';

const Preloader = dynamic(() => import('../../components/preloader/preloader'), {
	ssr: false
});

export const Page = ({ children, title, description, customMeta }: LayoutProps) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3500);

		return () => {
			// Clean up any resources if needed
		};
	}, []);

	return (
		<>
			{loading ? (
				<Preloader onComplete={() => setLoading(false)} />
			) : (
				<>
					<Head>
						<title>{title ? `SM | ${title}` : 'SM'}</title>
						<meta property="og:title" content={title ? `SM | ${title}` : 'SM'} key="title" />

						{description ? (
							<meta name="description" content={description} />
						) : (
							<meta
								name="description"
								content="Unlocking the digital realm with a fusion of Jamaican web development prowess and captivating 3D artistry."
							/>
						)}
					</Head>
						<Header />
						<main>{children}</main>
						<Footer />
						<Analytics />
				</>
			)}
		</>
	);
};

export default Page;
