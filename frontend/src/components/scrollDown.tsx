import React from 'react';
import '@emotion/styled';

import { Container } from './_basics/Basics';
import styled from '@emotion/styled';

const Field = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	scale: 0.55;
`;

const Mouse = styled.div`
	opacity: 0.8;
	width: 50px;
	height: 85px;
	border: 3px solid var(--primary);
	border-radius: 60px;
	position: relative;
	&::before {
		content: '';
		width: 12px;
		height: 12px;
		position: absolute;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);
		background-color: var(--primary);
		border-radius: 50%;
		opacity: 1;
		animation: wheel 2s infinite;
		-webkit-animation: wheel 2s infinite;
	}

	@media (max-width: 768px) {
		display: none;
	}

	@keyframes wheel {
		to {
			opacity: 0;
			top: 60px;
		}
	}

	@-webkit-keyframes wheel {
		to {
			opacity: 0;
			top: 60px;
		}
	}
`;

export const ScrollDown = () => {
	return (
		<Container>
			<Field className="animate__animated animate__slideInDown">
				<Mouse />
			</Field>
		</Container>
	);
};