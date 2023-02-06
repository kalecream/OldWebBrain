import "animate.css";
import styled from "@emotion/styled";
import Link from "next/link";

// Layout
export const Section = styled.section`
	width: 100vw;
	display: grid;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const HalfColumn = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	place-items: center;
	gap: 0.5rem;
	text-align: center;

	@media (max-width: 750px) {
		width: 100%;
	}
`;

// TYprography
export const Caption = styled.p`
	font-size: 0.8rem;
	color: grey;
	text-align: center;
`;

export const CustomLink = styled(Link)`
	color: green;
	text-decoration: none;
	transition: color 0.15s;

	&:hover {
		color: lightgreen;
		transform: scale(1.05);
		transform-origin: center;
		transition: color ease-in-out 0.15s;
	}
`;

// Components

export const Button = styled(Link)`
	align-items: center;
	background-image: radial-gradient(
		100% 100% at 100% 0,
		lightgreen 0,
		darkgreen 100%
	);
	border-radius: 10px;
	box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
		rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
	box-sizing: border-box;
	color: white;
	cursor: pointer;
	display: inline-flex;
	justify-content: center;
	line-height: 1;
	overflow: hidden;
	padding: 1rem 2rem;
	position: relative;
	text-align: left;
	text-decoration: none;
	transition: box-shadow 0.15s, transform 0.15s;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	white-space: nowrap;
	will-change: box-shadow, transform;
	opacity: 0.7;

	& :hover {
		opacity: 1;
		transform: translateY(-2px);
		background-image: radial-gradient(
			100% 100% at 100% 0,
			darkgreen 0,
			lightgreen 100%
		);
	}
`;

export const PrimaryButton = styled(Button)`
	color: white;
	border: none;
	width: 100%;

	@media (prefers-color-scheme: dark) {
		a {
			color: black;
		}

		& a:hover {
			color: black;
		}
	}

	@media (prefers-color-scheme: light) {
		& a:hover {
			color: white;
		}

		a {
			color: white;
		}
	}
`;

export const SecondaryButton = styled(Button)`
	background-image: radial-gradient(100% 100% at 100% 0, white 0, lightgreen 100%);
	width: 45%;

	@prefers-color-scheme: dark {

		a {
			color: white;
		}

		& a:hover {
			color: white;
		}
	}

	@media (prefers-color-scheme: light) {

		a {
			color: black;
		}

		& a:hover {
			color: black;
		}
	} {
`;

export const Card = styled.div`
	width: 33%;
	min-width: 375px;
	max-width: 500px;
	min-height: 450px;
	display: grid;
	justify-content: center;
	align-self:auto;
	gap: 0.2rem;
	padding: 2rem;
	border: 3px solid #fff;
	border-radius: 1rem;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.5s ease-in-out;
	background-color: green;
    background-image: 
	linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.45) )
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	&:hover {
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
	}

	& p {
		padding: 1rem;
		font-size: 0.8rem;
		font-weight: 600;
		text-align: start;
		color: white;
	}

	& a {
		width: 100%;
	}
`;

export const CardTitle = styled.h2`
	font-size: 3.6rem;
	font-weight: 900;
	font-family: "Playfair Display", serif;
	text-align: center;
	color: white;
	word-spacing: 100vw;
	line-height: 1.2;
	text-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.5);
`;
