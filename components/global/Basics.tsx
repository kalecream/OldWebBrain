import * as React from 'react';
import 'animate.css';
import styled from '@emotion/styled';
import { Colors } from '../../styles/colors';
import Image from 'next/image';
import Link from 'next/link';

// Layout
const Section = styled.section`
    width: 100vw;
	display: block;
    justify-content: center;
    align-items: center;
	margin-bottom: 2rem;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
	flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 5rem;
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

const Button = styled.button`
	width: 100%;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem;
	border: none;
	border-radius: 0.5rem;
	background-color: ${Colors.primary};
	color: ${Colors.lightShade};
	font-size: 0.8rem;
	font-weight: 600;
	transition: background-color 0.5s ease-in-out;

	&:hover {
		background-color: ${Colors.darkAccent};
	}
`;

const PrimaryButton = styled(Button)`
	background-color: ${Colors.primary};
	color: ${Colors.lightShade};

	&:hover {
		background-color: ${Colors.darkAccent};
	}
`;

const SecondaryButton = styled(Button)`
	background-color: ${Colors.darkAccent};
	color: ${Colors.lightShade};

	&:hover {
		background-color: ${Colors.primary};
	}
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
	overflow-y: scroll;

	&:hover {
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
	}
`;

export {Button, Card, Container, Caption, HalfColumn,
		Section}