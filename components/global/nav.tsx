import * as React from "react";
import styles from "../../styles/nav.module.css";
import styled from "@emotion/styled";
import { Colors } from "../../styles/colors";
import { Icons } from "../../assets";
import Image from "next/image";
import Directory from "../../data/directory";
import { useEffect } from "react";
import ThemeSwitch from "./ThemeSwitch";

const StyledNavigation = styled.nav`
	top: 0;
	margin: 2rem 0;
	justify-content: space-between;
	display: flex;
	align-items: center;
	z-index: 1;

	@media screen and (max-width: 768px) {
		margin: 0.05rem 1rem;
		flex-wrap: wrap;
		flex-direction: column;
	}
`;

const DirectoryList = styled.ul`
	right: 0;
	width: fit-content;
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
	font-weight: 500;
	color: ${Colors.darkShade};
	text-transform: capitalize;
	opacity: 0.7;

	&:hover {
		color: ${Colors.primary};
	}
`;

const SiteName = styled.a`
	height: 100%;
	display: flex;
	justify-content: center;
	padding: 0.5rem 1rem;
	color: ${Colors.primary};
	opacity: 0.7;

	& hover {
		opacity: 1;
	}

	@media screen and (max-width: 768px) {
		& a h1 {
			text-align: center;
		}
	}
`;

const CTAHeaderButton = styled.button`
	border: 1px solid ${Colors.primary};
	background-color: ${Colors.lightShade};
	color: ${Colors.darkAccent};
	text-transform: uppercase;
	font-family: 'Fira Mono', monospace;
	font-size: 0.8rem;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	margin: 0.5rem 1rem;
	padding: 0.5rem 1rem;

	&:hover {
		font-weight: 600;
		opacity: 1;
		border: 1px solid ${Colors.lightShade};
	}

	&:hover a {
		color: ${Colors.primary};
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

const NavigationSettings = () => {
	// https://github.com/iseizuu/personal-website/blob/main/pages/index.tsx
	// const selectTheme = (value: string) => {
	// 	localStorage.setItem("theme", value);
	// 	document.querySelector("html").classList.add(localStorage.getItem("theme"));

	// 	if (value === "dark")
	// 		document.querySelector("html").classList.remove("light");
	// 	else document.querySelector("html").classList.remove("dark");
	// };

	// useEffect(() => {
	// 	document.querySelector("html").classList.add(localStorage.getItem("theme"));
	// }, []);

	return (
		<div className={styles.settings}>
			<ThemeToggle id="theme-toggle" className={styles.themeToggle} />
		</div>
	);
};

export const Navigation: React.FunctionComponent = () => {
	function toggleTheme() {
		var body = document.body;
		body.classList.toggle("dark");
	}

	return (
		<StyledNavigation className={styles.nav}>
			<SiteName href="/">
				<h2>KaleCream</h2>
			</SiteName>
			<DirectoryList>
				{Directory.map((directory, index) => (
					<DirectoryListItem key={index}>
						<DirectoryLinks href={directory.links}>
							{directory.title}
						</DirectoryLinks>
					</DirectoryListItem>
				))}
			</DirectoryList>
			{/* <ThemeSwitch /> */}
			{/* <NavigationSettings /> */}
		</StyledNavigation>
	);
};
