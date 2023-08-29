import styled from '@emotion/styled';
import Page from '../containers/layout/page';

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
// TODO: Fix colors
const Text = styled.h1`
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
	stroke: 1px var(--primary);
	-webkit-text-stroke: 1px grey;
	-webkit-text-fill-color: transparent;
	background: repeating-linear-gradient(45deg, darkgreen 25%, lightgreen 50%, darkgreen 50%, lightgreen 75%);
	background-size: 100px 100px;
	background-clip: text;
	-webkit-background-clip: text;
	animation: stripeBackgroundPosition 2s linear infinite;

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

const TextContainer = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	place-items: center;
	text-align: center;
	@media (max-width: 750px) {
		width: 100%;
	}
`;

const TextDescription = styled.p`
	margin-top: 0.2rem;
	color: grey;
`;

const TextDescriptionContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	place-items: center;
	text-align: center;
	@media (max-width: 750px) {
		width: 100%;
	}
`;

export const Error = ({ statusCode }) => {
	return (
		<Page>
			<Background>
				<TextContainer>
					<Text>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</Text>
					<TextDescriptionContainer>
						<TextDescription>The page you are looking for does not exist.</TextDescription>
						<TextDescription>Please check the URL and try again.</TextDescription>
					</TextDescriptionContainer>
				</TextContainer>
			</Background>
		</Page>
	);
};

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
