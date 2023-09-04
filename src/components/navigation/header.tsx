'use client';
import React, { useState, useEffect } from 'react';
import Directory from '../../data/directory';
// import ThemeSwitch from './theme-toggle';
import { useRouter, usePathname } from 'next/navigation';
// import AvailableForWork from "@components/navigation/looking-work";
import Link from 'next/link';
import style from './header.module.scss';
// import { FaBars } from 'react-icons/fa6';

// const Hamburger = styled(FaBars)`
// 	display: none;
// 	color: var(--muted);
// 	@media screen and (max-width: 768px) {
// 		display: block;
// 		font-size: 1.5rem;
// 		top: 0;
// 		right: 0;
// 		position: absolute;
// 		cursor: pointer;
// 		transform: translate(-100%, 75%);
// 	}
// `;

const SiteContact = () => {
	 const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);
}

export const Header: React.FunctionComponent = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header>
			{pathname !== '/' && (
				<Link className={style['site-name']} href="/">
					Sabrina
				</Link>
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
			<div className={`${style.settings}  ${style['directory-section']}`}>
				{/* <ThemeSwitch /> */}
				{/* <AvailableForWork /> */}
			</div>
		</header>
	);
};

export default Header;
