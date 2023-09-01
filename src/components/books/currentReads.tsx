import * as React from 'react';
import Books from '../../data/books';
import styled from '@emotion/styled';
import 'animate.css';
import Link from 'next/link';

// TODO:  change to color theme
// TODO: add to top page

export const ReadingContainer = styled.section`
	& > * {
		margin: 1rem 0;
	}

	@media (min-width: 1024px) {
		max-width: 1000px;
	}

	@media (max-width: 768px) {
		& > * {
			margin: 1rem 0.5rem;
		}
	}
`;

export const BookContainer = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	perspective: 600px;
	margin: 0;
`;

export const Book = styled.div`
	margin: 0rem -1.5rem;
	width: 200px;
	height: 300px;
	position: relative;
	transform-style: preserve-3d;
	transform: rotateY(-30deg);
	transition: 1s ease;
	animation: 1s ease 0s 1 initAnimation;
	scale: 0.7;

	&:hover {
		transform: rotateY(0deg);
	}

	& > :first-child {
		position: absolute;
		top: 0;
		left: 0;
		background-color: red;
		width: 200px;
		height: 300px;
		transform: translateZ(25px);
		background-color: var(--primary);
		border-radius: 0 2px 2px 0;
		box-shadow: 5px 5px 20px var(--faint);
	}

	&::before {
		position: absolute;
		content: ' ';
		background-color: blue;
		left: 0;
		top: 3px;
		width: 48px;
		height: 294px;
		transform: translateX(172px) rotateY(90deg);
		background: linear-gradient(
			90deg,
			#fff 0%,
			#f9f9f9 5%,
			#fff 10%,
			#f9f9f9 15%,
			#fff 20%,
			#f9f9f9 25%,
			#fff 30%,
			#f9f9f9 35%,
			#fff 40%,
			#f9f9f9 45%,
			#fff 50%,
			#f9f9f9 55%,
			#fff 60%,
			#f9f9f9 65%,
			#fff 70%,
			#f9f9f9 75%,
			#fff 80%,
			#f9f9f9 85%,
			#fff 90%,
			#f9f9f9 95%,
			#fff 100%
		);
	}

	&::after {
		position: absolute;
		top: 0;
		left: 0;
		content: ' ';
		width: 200px;
		height: 300px;
		transform: translateZ(-25px);
		background-color: #5e5c64;
		border-radius: 0 2px 2px 0;
		box-shadow: -10px 0 20px 8px var(--faint);
	}

	@keyframes initAnimation {
		0% {
			transform: rotateY(0deg);
		}
		100% {
			transform: rotateY(-30deg);
		}
	}
`;

const CurrentReads = () => {
	const ReadingFilter = Object.entries(Books).filter(([key, value]) => value.status === 'reading' && key);

	return (
		<section>
			<ReadingContainer>
				{Books.map((book) => {
					if (book.status === 'Reading') {
						let searchURL = `https://www.you.com/search?q=${book.title}+${book.author}`;
						return (
							<BookContainer href={searchURL} target="_blank" rel="noopener noreferrer">
								<Book className="animate__animated animate__slideInUp">
									<img src={book.cover} alt={book.title} />
								</Book>
							</BookContainer>
						);
					} else {
						return null;
					}
				})}
			</ReadingContainer>
		</section>
	);
};

export default CurrentReads;
