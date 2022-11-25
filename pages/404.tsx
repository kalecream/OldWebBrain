import styled from "@emotion/styled";
import { Colors } from "../styles/colors";
import Page from "../containers/layout/page";

const Background = styled.div`
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 1100px) {
		flex-wrap: wrap;
	}
`;

const Text404 = styled.h1`
	@media (max-width: 400px) {
		font-size: 5rem;
	}
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	font-size: 20rem;
	font-weight: 900;
	letter-spacing: 1rem;
	text-align: center;
	color: transparent;
	stroke: 1px ${Colors.primary};
	-webkit-text-stroke: 1px ${Colors.neutral};
	-webkit-text-fill-color: transparent;
	background: repeating-linear-gradient(
		45deg,
		${Colors.darkShade} 25%,
		${Colors.darkAccent} 50%,
		${Colors.darkShade} 50%,
		${Colors.darkAccent} 75%
	);
	background-size: 100px 100px;
	background-clip: text;
	-webkit-background-clip: text;
	animation: stripeBackgroundPosition 2s linear infinite;

	@media (prefers-color-scheme: dark) {
		background: repeating-linear-gradient(
			45deg,
			${Colors.lightShade} 25%,
			${Colors.lightAccent} 50%,
			${Colors.lightShade} 50%,
			${Colors.lightAccent} 75%
		);
	}

	@keyframes stripeBackgroundPosition {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: calc(100px * -1) 0;
		}
	}
	@keyframes stripeBackgroundPosition {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: calc(100px * -1) 0;
		}
	}

	@keyframes stripeTransform {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(100px * -1));
		}
	}
`;

const Text404Container = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	place-items: center;
	text-align: center;
	@media (max-width: 750px) {
		width: 100%;
	}
`;

const Text404Description = styled.p`
	margin-top: 0.2rem;
	color: ${Colors.neutral[500]};
`;

const Text404DescriptionContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	place-items: center;
	text-align: center;
	@media (max-width: 750px) {
		width: 100%;
	}
`;

export const Lost = () => {
	return (
		<Page>
			<Background>
				<Text404Container>
					<Text404>404</Text404>
					<Text404DescriptionContainer>
						<Text404Description>
							The page you are looking for does not exist.
						</Text404Description>
						<Text404Description>
							Please check the URL and try again.
						</Text404Description>
					</Text404DescriptionContainer>
				</Text404Container>
			</Background>
		</Page>
	);
};

export default Lost;
