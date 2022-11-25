import * as React from "react";
import styles from "../../styles/nav.module.css";
import styled from "@emotion/styled";
import { Colors } from "../../styles/colors";
import { Icons } from "../../assets";
import Image from "next/image";
import  Directory from "../../data/directory";

const StyledNavigation = styled.nav`
	top: 0;
	margin-top: 0;
	margin-bottom: 1rem;
	margin-left: 3rem;
	margin-right: 3rem;
	border-bottom: 1px solid #eaeaea;
	justify-content: space-between;
	display: flex;
	align-items: center;
	z-index: 1;

	@media screen and (max-width: 768px) {
		margin: 0.05rem 1rem;
		flex-wrap: wrap;
	}
`;

const DirectoryList = styled.ul`
	right: 0;
	width: 66%;
	float: right;
	display: flex;
	list-style: none;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`;

const DirectoryListItem = styled.li`
	margin: 0 1rem;
`;

const DirectoryLinks = styled.a`
	font-weight: 400;
	font-size: 0.8rem;
	color: ${Colors.darkAccent};
	text-transform: uppercase;
	font-family: monospace;
	opacity: 0.7;

	* hover {
		font-weight: 600;
		opacity: 1;
	}
`;

const SiteName = styled.a`
	height: 100%;
	display: grid;
	place-items: center;
	align-items: center;
  padding: 0.5rem 1rem;
	opacity: 0.4;

	& hover {
		opacity: 1;
	}
`;

const ThemeToggle = styled.button`
	display: flex;
	cursor: pointer;
	height: 30px;
	width: 50px;
	border: 3px solid var(--color-black);
	margin-left: auto;
	position: relative;
	background-color: var(--color-primary);
	border-radius: 1rem;
	transform: rotate(-75deg);

	&:active {
		animation: switchColor 1s linear;
	}

	&:before {
		content: "☀️";
		z-index: 2;
		position: absolute;
		font-size: 0.8rem;
		top: 0.35rem;
		left: 1.65rem;
		transition-duration: 0.4s;
	}

	&:after {
		content: "";
		font-size: 0.9rem;
		position: absolute;
		height: 28px;
		width: 29px;
		top: -2px;
		left: 20px;
		background-color: var(--color-black);
		border-radius: 50%;
		border: none;
		transition-duration: 0.4s;
	}
`;

export const Navigation: React.FunctionComponent = () => {
	

	function toggleTheme() {
		var body = document.body;
		body.classList.toggle("dark");
	}

	return (
		<StyledNavigation className={styles.nav}>
			<DirectoryList>
				{Directory.map((directory, index) => (
					<DirectoryListItem key={index}>
						<DirectoryLinks href={directory.links}>
							{directory.title}
						</DirectoryLinks>
					</DirectoryListItem>
				))}
			</DirectoryList>
			<SiteName href="/">
				<Image src={Icons.logo} alt="KaleCream" width={24} height={24} />
			</SiteName>
			{/* <div className={styles.settings}>
        <ThemeToggle id="theme-toggle" className={styles.themeToggle}/>
      </div> */}
		</StyledNavigation>
	);
};
