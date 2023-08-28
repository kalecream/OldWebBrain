import React from 'react';
import styled from '@emotion/styled';
import Directory from '../../data/directory';
import ThemeSwitch from './theme-toggle';
import { useRouter } from 'next/router';
// import AvailableForWork from "@components/navigation/looking-work";
import Link from 'next/link';
import style from './header.module.scss';

import { FaBars } from 'react-icons/fa6';

const Hamburger = styled(FaBars)`
	display: none;
	color: var(--muted);
	@media screen and (max-width: 768px) {
		display: block;
		font-size: 1.5rem;
		top: 0;
		right: 0;
		position: absolute;
		cursor: pointer;
		transform: translate(-100%, 75%);
	}
`;

export const Header: React.FunctionComponent = () => {
	const router = useRouter();

	return (
		<nav>
			<div
				className={`${style['directory-list']} ${style['directory-section']}`}
			>
				{router?.pathname !== '/' && (
					<Link className={style['site-name']} href="/">
						Sabrina
					</Link>
				)}
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
				<ThemeSwitch />
				{/* <AvailableForWork /> */}
			</div>
		</nav>
	);
};

export default Header;
