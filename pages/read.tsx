import Page from "../containers/layout/page";
import Books from "../data/books";
import styled from "@emotion/styled";
import * as React from "react";

const StatusNumber = styled.span`
	color: #ff0000;
	vertical-align: top;
	font-size: 0.55em;
`;

// const BookContainer = styled.a`
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

const FlexContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`;

const ReadingContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	jusify-content: center;
	margin: 2.5rem;

	& > * {
		margin: 3rem 1rem;
	}

	@media (min-width: 1200px) {
		width: 45%;
		float: left;
	}

	@media (max-width: 768px) {
		& > * {
			margin: 1rem 0;
		}
	}
`;

const WantToReadContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	& > li {
		list-style-type: "🔖 ";
		margin-top: 1rem;
	}

	@media screen and (min-width: 1000px) {
		width: 45%;
	}

	@media (max-width: 768px) {
		& > * {
			margin: 1rem 0;
		}
	}

	@media (max-width: 400px) {
		flex-direction: column;
	}
`;

const ReadContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	& > li {
		list-style-type: "📖 ";
	}
`;

// const ReadPages = () => {
// 	const ReadFilter = Object.entries(Books).filter(
// 		([key, value]) => value.status === "read"
// 	);

// 	return (
// 		<ChartArea>
// 			<svg width="100%" height="100%">
// 				{ReadFilter.map((book, index) => {
// 					const bookName = book[0];
// 					let bookPages = 0;

// 					typeof book[1].pages === "number"
// 						? (bookPages = book[1].pages)
// 						: (bookPages = 0);

// 					const x = 50 + index * 100;
// 					const y = 250 - bookPages / 2;

// 					return (
// 						<g key={bookName.replace(/\s/g, "").replace(/:/g, "")}>
// 							<rect x={x} y={y} width="50" height={bookPages} fill="#ff0000" />
// 							<text x={x + 25} y={y - 10} textAnchor="middle" fill="#fff">
// 								{bookName}
// 							</text>
// 							<text
// 								x={x + 25}
// 								y={y + bookPages + 20}
// 								textAnchor="middle"
// 								fill="#fff"
// 							>
// 								{bookPages}
// 							</text>
// 						</g>
// 					);
// 				})}
// 			</svg>
// 		</ChartArea>
// 	);
// };

// const ReadPagesPerMonth = () => {
// 	const ReadFilter = Object.entries(Books).filter(
// 		([key, value]) => value.status === "read"
// 	);

// 	return (
// 		<ChartArea>
// 			<svg width="100%" height="100%">
// 				{ReadFilter.map((book, index) => {
// 					const bookName = book[0];
// 					let bookPages = 0;

// 					typeof book[1].pages === "number"
// 						? (bookPages = book[1].pages)
// 						: (bookPages = 0);

// 					const x = 50 + index * 100;
// 					const y = 250 - bookPages / 2;

// 					return (
// 						<g key={bookName.replace(/\s/g, "").replace(/:/g, "")}>
// 							<rect x={x} y={y} width="50" height={bookPages} fill="#ff0000" />
// 							<text x={x + 25} y={y - 10} textAnchor="middle" fill="#fff">
// 								{bookName}
// 							</text>
// 							<text
// 								x={x + 25}
// 								y={y + bookPages + 20}
// 								textAnchor="middle"
// 								fill="#fff"
// 							>
// 								{bookPages}
// 							</text>
// 						</g>
// 					);
// 				})}
// 			</svg>
// 		</ChartArea>
// 	);
// };

export const ReadBooks = () => {
	const ReadFilter = Object.entries(Books).filter(
		([key, value]) => value.status === "read"
	);
	const ReadingFilter = Object.entries(Books).filter(
		([key, value]) => value.status === "reading"
	);

	const WantReadFilter = Object.entries(Books).filter(
		([key, value]) => value.status === "Want to Read"
	);

	return (
		<Page title="Books">
			<section>
				<FlexContainer>
					<div>
						<h2 style={{ textAlign: "center", margin: "2rem" }}>
							Reading <StatusNumber>{ReadingFilter.length}</StatusNumber>
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
											<Book>
												<img src={book.cover} alt={book.title} />
											</Book>
										</BookContainer>
									);
								}
							})} */}
						</ReadingContainer>
					</div>

					<div>
						<h2 style={{ textAlign: "center", margin: "2rem" }}>
							Want to Read <StatusNumber>{WantReadFilter.length}</StatusNumber>
						</h2>
						<WantToReadContainer>
							{/* {Books.map((book) => {
								if (book.status === "Want to Read") {
									let searchURL = `https://www.you.com/search?q=${book.title}+${book.author}`;
									return (
										<li>
											<a href={searchURL} target="_blank">
												{book.title} by{" "}
												{book.author.length == 1
													? book.author
													: book.author.toString().replace(/,/g, " & ")}
											</a>
											<br />
											<BookSummary>{book.summary}</BookSummary>
										</li>
									);
								}
							})} */}
						</WantToReadContainer>
					</div>
				</FlexContainer>
				<h2 style={{ textAlign: "center", margin: "2rem" }}>
					Read <StatusNumber>{ReadFilter.length}</StatusNumber>
				</h2>
				<ReadContainer>
					{/* {Books.map((book) => {
						if (book.status === "read") {
							let searchURL = `https://www.you.com/search?q=${book.title}+${book.author}`;

							return (
								<li>
									<a href={searchURL} target="_blank">
										( {book.finished?.split("-", 1)} ) {book.title} by{" "}
										{book.author}{" "}
										{book.rating && book.rating >= 3 ? (
											<span style={{ color: "red" }}>★</span>
										) : (
											""
										)}
									</a>
									<br />
									<BookSummary>{book.summary}</BookSummary>
								</li>
							);
						}
					})} */}
				</ReadContainer>
			</section>
		</Page>
	);
};
