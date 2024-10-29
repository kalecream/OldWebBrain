"use client";
import Image from "next/image";
import Link from "next/link";
import style from "@styles/modules/nav.module.scss";
import { usePathname } from "next/navigation";
import Directory from "@data/directory";
import { FaRss } from "react-icons/fa6";
// import SiteImage from "@public/og_logo.png";
import SiteImage from "@assets/images/ouroburos.svg";

export function Navbar() {
	const path = usePathname();
	return (
		<header id="header">
			<nav id="nav">
				{path && path !== '/' && (
					<>
						<Link href="/" className={style['site-name']}>
							{/* <span className={style['site-name']}></span> */}
							<Image src={SiteImage} alt="logo" width={120} height={120} style={{marginTop: '1rem'}} />
						</Link>
					</>
				)}
				<div className={`${style['directory-list']} ${style['directory-section']}`}>
					{Directory.length > 0 &&
						Directory.map((directory, index) => (
							<div className={style['directory-list']} key={index}>
								<Link
									className={style['directory-link']}
									href={directory.links}
									style={path === directory.title ? { textDecoration: 'underline' } : { textDecoration: 'none'  }}
								>
									{directory.title}
								</Link>
							</div>
						))}
				</div>
			</nav>
		</header>
	);
}
