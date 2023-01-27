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
	align-items: center;
	background-image: radial-gradient(100% 100% at 100% 0, ${Colors.primary} 0, ${Colors.secondary} 100%);
	border-radius: 25px;
	box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
	box-sizing: border-box;
	color: ${Colors.lightShade};
	cursor: pointer;
	display: inline-flex;
	justify-content: center;
	line-height: 1;
	overflow: hidden;
	padding: 1rem 2rem;
	position: relative;
	text-align: left;
	text-decoration: none;
	transition: box-shadow .15s,transform .15s;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	white-space: nowrap;
	will-change: box-shadow,transform;
	opacity: 0.7;

	& :hover {
		opacity: 1;
	transform: translateY(-2px);
	}
`;

const PrimaryButton = styled(Button)`
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
	background-image: radial-gradient(100% 100% at 100% 0, ${Colors.lightShade} 0, ${Colors.lightAccent} 100%);
	width: 45%;

	@prefers-color-scheme: dark {

		a {
			color: ${Colors.lightShade};
		}

		& a:hover {
			color: ${Colors.lightShade};
		}
	}

	@media (prefers-color-scheme: light) {

		a {
			color: ${Colors.darkShade};
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