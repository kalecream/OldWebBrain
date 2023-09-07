import 'animate.css';
import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

// Layout
export const Section = styled.section`
	width: 100vw;
	display: grid;
	justify-content: center;
	align-items: center;

	@media (max-width: 750px) {
		padding: 0 1rem;
	}
`;

export const FullSection = styled(Section)`
	min-height: 60vh;
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
	color: var(--caption);
	text-align: center;
`;

export const CustomLink = styled(Link)`
	color: var(--primary);
	text-decoration: none;
	transition: color 0.15s;

	&:hover {
		color: var(--secondary);
		transform: scale(1.05);
		transform-origin: center;
		transition: color ease-in-out 0.15s;
	}
`;

const boxShadow = `rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset`;

export const Title = styled.h1`
	font-size: 3.6rem;
	font-weight: 900;
	font-family: 'Playfair Display', serif;
	text-align: center;
	color: var(--background);
	word-spacing: 100vw;
	line-height: 1.2;
	text-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.5);
`;

export const Subtitle = styled.h2`
	font-size: 2.4rem;
	font-weight: 900;
	font-family: 'Playfair Display', serif;
	text-align: center;
	color: var(--background);
	word-spacing: 100vw;
	line-height: 1.2;
	text-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.5);
`;

export const Paragraph = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
	font-family: 'Playfair Display', serif;
	word-spacing: 100vw;
	line-height: 1.2;
	text-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.5);
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
	box-shadow: ${boxShadow};
	transition: box-shadow 0.5s ease-in-out;
	background-color: var(--primary);
    background-image: 
	linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.45) )
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	&:hover {
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
	}

	& p {
		padding: 1rem;
		text-align: start;
		color: var(--background);
		color: var(--background);
		font-size: 0.8rem;
	}

	& a {
		width: 100%;
	}
`;

export const CardTitle = styled.h2`
	font-size: 3.6rem;
	font-weight: 900;
	font-family: 'Playfair Display', serif;
	text-align: center;
	color: var(--background);
	word-spacing: 100vw;
	line-height: 1.2;
	text-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.5);
`;

export const ComingSoon = () => {
	return (
		<div>
			<FullSection>
				<h1 style={{ fontSize: '10rem', fontStyle: 'italics' }}>Coming Soon</h1>
				<Link href={'/'} style={{ textAlign: 'center' }}>
					⟵ back
				</Link>
			</FullSection>
		</div>
	);
};
