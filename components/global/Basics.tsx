import * as React from 'react';
import 'animate.css';
import styled from '@emotion/styled';
import { Colors } from '../../styles/colors';
import Image from 'next/image';
import Link from 'next/link';

// Layout
const Section = styled.section`
    width: 100vw;
	display: grid;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
	flex-wrap: wrap;
    justify-content: center;
    align-items: center;
	gap: 1rem;
`;

const HalfColumn = styled.div`
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
const Caption = styled.p`
	font-size: 0.8rem;
	color: ${Colors.darkAccent};
	text-align: center;
`;

// Components

const Button = styled.a`
	width: 100%;
	margin: 0.25rem auto;
	padding: 1em 3em;
	cursor: pointer;
	opacity: 0.7;

	display: grid;
	place-items: center;

	border: none;
	border-radius: 1rem;

	background-color: ${Colors.primary};
	color: ${Colors.neutral[300]};

	text-transform: capitalize;
	font-size: 0.75rem;
	font-weight: 300;
	transition: background-color 0.5s ease-in-out;

	&:hover {
		opacity: 1;
		border-radius: 5px;
		background-color: ${Colors.darkShade};
		transition: ease-in-out 0.2s;

		a {
			font-weight: 600;
		}
	}


	@media (prefers-color-scheme: light) {
		border: 2px solid ${Colors.lightShade};

		&:hover {
			background-color: ${Colors.primary};
		}
	}

	@media (prefers-color-scheme: dark) {
		border: 1px solid ${Colors.darkShade};

		&:hover {
			background-color: ${Colors.primary};
		}

		
	}

`;

const PrimaryButton = styled(Button)`
	background-color: ${Colors.primary};
	color: ${Colors.lightShade};
	border: none;
	width: 100%;

	@media (prefers-color-scheme: dark) {

		a {
			color: ${Colors.darkShade};
		}

		& a:hover {
			color: ${Colors.darkShade};
		}
	}

	@media (prefers-color-scheme: light) {
		& a:hover {
			color: ${Colors.lightShade};
		}

		a{
			color: ${Colors.lightShade};
		}
	}
`;

const SecondaryButton = styled(Button)`
	background-color: transparent;
	border: 2px solid ${Colors.primary};
	width: 40%;

	&:hover {
		background-color: transparent;
	}

	& a {
		color: ${Colors.primary};
	}

	@prefers-color-scheme: dark {
		& hover {
			border: 2px solid ${Colors.lightShade};
		}
		& a:hover {
			color: ${Colors.lightShade};
		}
	}

	@media (prefers-color-scheme: light) {
		&:hover {
			border: 2px solid ${Colors.darkShade};
		}

		& a:hover {
			color: ${Colors.darkShade};
		}
	} {
`;

const Card = styled.div`
	width: 33%;
	min-width: 325px;
	max-width: 500px;
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: center;
	gap: 0.5rem;
	padding: 2rem;
	border: 3px solid #fff;
	border-radius: 1rem;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.5s ease-in-out;
	background-color: ${Colors.primary};
    background-image: 
	linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.45) )
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	&:hover {
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
	}
`;

const CardTitle = styled.h2`
	font-size: 1.5rem;
	text-align: center;
	color: ${Colors.lightShade};
	letter-spacing: 2px;
	word-spacing: 100vw;
	line-height: 1.2;
`;

export {Button, PrimaryButton, SecondaryButton, Card, CardTitle, Container, Caption, HalfColumn,
		Section}