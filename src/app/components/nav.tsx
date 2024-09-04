'use client';
import Link from 'next/link';
import style from '@styles/modules/nav.module.scss';
import { usePathname } from 'next/navigation';
import Directory from '@data/directory';
import { FaRss } from 'react-icons/fa6';

export function Navbar() {
	const path = usePathname();

	return (
		<header id="header" className={path && path == '/' ? `` : `glassmorphic`}>
			<nav id="nav">
				{path && path !== '/' && (
					<>
						<Link href="/">
							<span className={style['site-name']}></span>
						</Link>
					</>
				)}
				<div className={`${style['directory-list']} ${style['directory-section']}`}>
					{Directory.length > 0 &&
						Directory.map((directory, index) => (
							<div className={style['directory-list']} key={index}>
								<Link className={style['directory-link']} href={directory.links}>
									{directory.title}
								</Link>
							</div>
						))}
					<div>
					<Link
						href={'/feed.xml'}
						aria-label="social media link"
						className={style['social-media'] + ` `}
						target="_blank"
						rel="me"
					>
						<FaRss />
					</Link>
					</div>
				</div>
			</nav>
		</header>
	);
}
