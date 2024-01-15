import { useEffect, useState } from 'react';
import { Footer } from '@components/navigation';
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';
import { BackToTop } from '@components/_basics/BackToTop';
import ThemeSwitch from '@components/navigation/theme-toggle';
import headerStyle from '@styles/modules/BlogHeader.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Author from '@public/author.webp';

export const Page = ({ children }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1800);
	}, []);

	return (
		<>
			<header id="header" className={headerStyle.header}>
				<Link className={headerStyle['site-name']} href="/">
					<span className={headerStyle['header-author']}>by</span> <Image src={Author} width={50} height={50} alt="" loader={({ src }) => src} priority/>
				</Link>

				<div className={`${headerStyle.settings}`}>
					<ThemeSwitch />
				</div>
			</header>
			<main style={{backgroundColor: "var(--background)"}}>{children}</main>
			<Footer />
			<Analytics />
			<BackToTop />
		</>
	);
};

export default Page;
