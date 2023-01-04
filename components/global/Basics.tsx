import * as React from 'react';
import 'animate.css';
import styled from '@emotion/styled';
import { Colors } from '../../styles/colors';
import Image from 'next/image';
import Link from 'next/link';

const Section = styled.section`
    width: 100vw;
    height: 60vh;
    display:grid;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5rem;
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

export {Container, Caption, HalfColumn, Section}