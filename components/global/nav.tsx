import React from "react";
import styles from "../../styles/nav.module.css";
import styled from "@emotion/styled";
import Directory from "../../data/directory";
import ThemeSwitch from "./ThemeSwitch";

const StyledNavigation = styled.nav`
	top: 0;
	justify-content: space-around;
	display: flex;
	align-items: center;
	z-index: 1;

	@media screen and (max-width: 450px) {
		margin: 1rem 0;
	}

	@media screen and (max-width: 768px) {
		margin: 1rem 3rem;
		flex-wrap: wrap;
		flex-direction: column;
	}

	@media screen and (max-width: 1024px) {
		margin: 2rem 5rem;
	}

	@media screen and (min-width: 1024px) {
		margin: 3rem 5rem;
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
	color: var(--text);
	text-transform: capitalize;
	opacity: 0.7;

	&:hover {
		color: var(--primary);
	}
`;

const SiteName = styled.a`
	height: 100%;
	display: flex;
	justify-content: center;
	padding: 0.5rem 1rem;
	color: var(--primary);
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

export const Navigation: React.FunctionComponent = () => {
	return (
		<StyledNavigation className={styles.nav}>
			<SiteName href="/">
				<h1>KaleCream</h1>
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
			<ThemeSwitch />
		</StyledNavigation>
	);
};
