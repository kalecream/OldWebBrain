import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@components/navigation';
import { Header as MetaHead } from '@components/navigation';
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';

const Preloader = dynamic(() => import('@components/preloader/preloader'), {
	ssr: false
});

export const Page = ({
	children
}) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1800);
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
