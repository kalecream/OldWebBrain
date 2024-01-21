import { useEffect, useState } from 'react';
import { Header, Footer, BackToTop } from '@components/atoms';
// import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';

// const Preloader = dynamic(() => import('@components/atoms/Preloader'), {
// 	ssr: false,
// });

export const Page = ({ children }) => {
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setLoading(false);
	// 	}, 1800);
	// }, []);

	return (
		<>
			{/* TODO: fix preloader for build */}
			{/* {loading ? (
				<Preloader onComplete={() => setLoading(false)} />
			) : (
				<> */}
					<Header />
					<main>{children}</main>
					<Footer />
				{/* </>
			)} */}
			<Analytics />
			<BackToTop />
		</>
	);
};

export default Page;
