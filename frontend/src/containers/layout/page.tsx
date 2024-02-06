import { Header, Footer } from '@components/navigation';
import { Header as MetaHead } from '@components/navigation';
import { Analytics } from '@vercel/analytics/react';
import { BackToTop } from '@components/_basics/BackToTop';


export const Page = ({ children }) => {
	return (
		<>
			<MetaHead />
			<Header />
			<main>{children}</main>
			<Footer />
			<Analytics />
			<BackToTop />
		</>
	);
};

export default Page;
