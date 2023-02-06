import styled from "@emotion/styled";
import { CustomLink } from "./Basics";

const StyledFooter = styled.footer`
	bottom: 0;
	font-size: 0.65rem;
	display: flex;
	justify-content: space-between;
	padding: 1rem 0;
	opacity: 0.7;

	@media screen and (max-width: 450px) {
		margin: 0.5rem 0;
	}

	@media screen and (max-width: 768px) {
		margin: 0.05rem 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	@media screen and (max-width: 1024px) {
		margin: 0.05rem 3rem;
	}

	@media screen and (min-width: 1024px) {
		margin: 0.05rem 5rem;
	}
`;

export const Footer: React.FunctionComponent = () => {
	const lastWebsiteUpdate = new Date(document.lastModified).toDateString();

	return (
		<StyledFooter>
			KaleCream Limited &copy; {new Date().getFullYear()} . Last Updated:{" "}
			{lastWebsiteUpdate} .&nbsp;
			<CustomLink href="/legal/terms"> Terms of Service</CustomLink>
		</StyledFooter>
	);
};
