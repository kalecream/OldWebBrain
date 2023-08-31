import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@components/navigation';
import { MetaProps } from '../../types/layout';
import { Header as MetaHead } from '@components/navigation';
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';

type LayoutProps = {
	children: React.ReactNode;
	title?: string;
	description?: string;
	url?: string;
	author?: string;
};


const Preloader = dynamic(() => import('../../components/preloader/preloader'), {
	ssr: false
});

export const Page = ({
	children
}: LayoutProps) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1800);

		return () => {
			// Clean up any resources if needed
		};
	}, []);

	return (
		<>
			<MetaHead />
			{loading ? (
				<Preloader onComplete={() => setLoading(false)} />
			) : (
				<>
					<Header />
					<main>{children}</main>
					<Footer />
				</>
			)}
			<Analytics />
		</>
	);
};

export default Page;
