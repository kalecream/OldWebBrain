'use client';
import Link from 'next/link';
import style from '@styles/modules/nav.module.scss';
import { usePathname } from 'next/navigation';
import Directory from '@data/directory';
// import ThemeSwitch from '@components/navigation/theme-toggle';

export function Navbar() {
	const path = usePathname();

	return (
		<header id="header" className={path && path == '/' ? `` : `glassmorphic`}>
			<nav id="nav">
				{path && path !== '/' && (
					<>
						<Link className={style['site-name']} href="/">
							sab
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
				</div>
				{/* <div className={`${style.settings}  ${style['directory-section']}`}>
				<ThemeSwitch />
			</div> */}
			</nav>
		</header>
	);
}
