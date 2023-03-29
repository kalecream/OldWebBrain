import * as React from "react";
import Books from "../../data/books";
import { Container, Section } from "../global";
import styled from "@emotion/styled";
import "animate.css";

// TODO:  change to color theme
// TODO: add to top page

const ReadingContainer = styled(Container)`
	margin: 2.5rem;

	& > * {
		margin: 3rem 1rem;
	}

	@media (min-width: 1200px) {
		float: left;
		max-width: 800px;
	}

	@media (max-width: 768px) {
		& > * {
			margin: 1rem 0;
		}
	}
`;

// const BookContainer = styled(Link)`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	perspective: 600px;
// 	margin: 2.5rem 0;
// `;

// const Book = styled.div`
// 	margin: 0 1rem;
// 	width: 200px;
// 	height: 300px;
// 	position: relative;
// 	transform-style: preserve-3d;
// 	transform: rotateY(-30deg);
// 	transition: 1s ease;
// 	animation: 1s ease 0s 1 initAnimation;

// 	&:hover {
// 		transform: rotateY(0deg);
// 	}

// 	& > :first-child {
// 		position: absolute;
// 		top: 0;
// 		left: 0;
// 		background-color: red;
// 		width: 200px;
// 		height: 300px;
// 		transform: translateZ(25px);
// 		background-color: #5e5c64;
// 		border-radius: 0 2px 2px 0;
// 		box-shadow: 5px 5px 20px #999;
// 	}

// 	&::before {
// 		position: absolute;
// 		content: " ";
// 		background-color: blue;
// 		left: 0;
// 		top: 3px;
// 		width: 48px;
// 		height: 294px;
// 		transform: translateX(172px) rotateY(90deg);
// 		background: linear-gradient(
// 			90deg,
// 			#fff 0%,
// 			#f9f9f9 5%,
// 			#fff 10%,
// 			#f9f9f9 15%,
// 			#fff 20%,
// 			#f9f9f9 25%,
// 			#fff 30%,
// 			#f9f9f9 35%,
// 			#fff 40%,
// 			#f9f9f9 45%,
// 			#fff 50%,
// 			#f9f9f9 55%,
// 			#fff 60%,
// 			#f9f9f9 65%,
// 			#fff 70%,
// 			#f9f9f9 75%,
// 			#fff 80%,
// 			#f9f9f9 85%,
// 			#fff 90%,
// 			#f9f9f9 95%,
// 			#fff 100%
// 		);
// 	}

// 	&::after {
// 		position: absolute;
// 		top: 0;
// 		left: 0;
// 		content: " ";
// 		width: 200px;
// 		height: 300px;
// 		transform: translateZ(-25px);
// 		background-color: #5e5c64;
// 		border-radius: 0 2px 2px 0;
// 		box-shadow: -10px 0 50px 10px #666;
// 	}

// 	@keyframes initAnimation {
// 		0% {
// 			transform: rotateY(0deg);
// 		}
// 		100% {
// 			transform: rotateY(-30deg);
// 		}
// 	}
// `;

const CurrentReads = () => {
	const ReadingFilter = Object.entries(Books).filter(
		([key, value]) => value.status === "reading"
	);

	return (
		<Section>
			<h2
				className="animate__animated animate__slideInUp"
				style={{ textAlign: "center" }}
			>
				Reading {ReadingFilter.length} Books
			</h2>
			<ReadingContainer>
				{/* {Books.map((book) => {
						if (book.status === "reading") {
							let searchURL = `https://www.you.com/search?q=${book.title}+${book.author}`;
							return (
								<BookContainer
									href={searchURL}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Book className="animate__animated animate__slideInUp">
										<img src={book.cover} alt={book.title} />
									</Book>
								</BookContainer>
							);
						}
					})} */}
			</ReadingContainer>
		</Section>
	);
};

export default CurrentReads;
