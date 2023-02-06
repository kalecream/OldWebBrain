import styled from "@emotion/styled";
import Directory from "../../data/directory";
import ThemeSwitch from "./ThemeSwitch";
import { useEffect, useState } from "react";
import { MediaProfiles } from "@components/socialmedia";
import { CustomLink } from "./Basics";
import { ContactForm } from "./contactForm";

// TODO: Desktop navigation
// TODO: Mobile navigation

interface navProps {
	display?: boolean;
}

const StyledNavigation = styled.nav<navProps>`
	top: 0;
	width: 100vw;
	height: 100vh;
	justify-content: space-around;
	background-color: var(--background);
	z-index: 9999;
	display: ${(props) => (props.display ? "flex" : "none")};
	align-items: center;

	@media screen and (max-width: 450px) {
		padding: 1rem 0;
	}

	@media screen and (max-width: 768px) {
		padding: 1rem 3rem;
		flex-wrap: wrap;
		flex-direction: column;
	}

	@media screen and (max-width: 1024px) {
		padding: 2rem 5rem;
	}

	@media screen and (min-width: 1024px) {
		padding: 3rem 5rem;
		flex-direction: row;

		& > div {
			width: 50%;
		}
	}
`;

// const StyledNavigation = styled.nav <navProps>`
// 	top: 0;
// 	justify-content: space-around;
// 	display: ${props => props.display ? "flex" : "none"  };
// 	align-items: center;
// 	z-index: 1;

// 	@media screen and (max-width: 450px) {
// 		margin: 1rem 0;
// 	}

// 	@media screen and (max-width: 768px) {
// 		margin: 1rem 3rem;
// 		flex-wrap: wrap;
// 		flex-direction: column;
// 	}

// 	@media screen and (max-width: 1024px) {
// 		margin: 2rem 5rem;
// 	}

// 	@media screen and (min-width: 1024px) {
// 		margin: 3rem 5rem;
// 	}
// `;

const DirectoryListItem = styled.li`
	list-style: none;

	& > * {
		margin: 2.5rem 0;
	}
`;

const DirectoryLinks = styled(CustomLink)`
	font-weight: 700;
	color: var(--text);
	text-transform: capitalize;
	opacity: 0.7;

	&:hover {
		color: var(--primary);
	}

	@media screen and (min-width: 1024px) {
		font-size: 5rem;
	}

	@media screen and (max-width: 1024px) {
		font-size: 4rem;
	}

	@media screen and (max-width: 768px) {
		font-size: 3rem;
	}

	@media screen and (max-width: 450px) {
		font-size: 1.5rem;
	}
`;

export const SiteName = styled(CustomLink)`
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

const CloseButton = styled.button`
	position: absolute;
	top: 1rem;
	right: 1rem;
	background-color: transparent;
	border: none;
	cursor: pointer;
	z-index: 9999;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	border-radius: 50%;
	transition: all 0.3s ease-in-out;
	opacity: 0.3;

	&:hover {
		background-color: var(--primary);
		color: var(--background);
	}
`;

export const DesktopNavigation: React.FunctionComponent = () => {
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		display === false ? setDisplay(true) : setDisplay(false);
	}, []);

	const onClose = () => {
		setDisplay(false);
	};

	return (
		<>
			<StyledNavigation>
				<div id="contact-form">
					<h1>Get in touch</h1>
					<ContactForm />
				</div>
				<div id="DirectoryList">
					<div>
						<ThemeSwitch />
					</div>
					{Directory.map((item) => (
						<DirectoryListItem key={item.title}>
							<DirectoryLinks href={item.links}>{item.title}</DirectoryLinks>
						</DirectoryListItem>
					))}
					<div>
						{MediaProfiles.map((item) => (
							<DirectoryListItem key={item.name}>
								<DirectoryLinks href={item.url}>{item.name}</DirectoryLinks>
							</DirectoryListItem>
						))}
					</div>
				</div>
			</StyledNavigation>
			<CloseButton onClick={onClose}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</CloseButton>
		</>
	);
};

//
// 	/* export const MobileNavigation: React.FunctionComponent = () => {
// 	return <></>;
// ; */
