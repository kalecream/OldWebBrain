import Page from "../containers/layout/page";
import Books from "../data/books";
import styled from "@emotion/styled";

const BookContainer = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	perspective: 600px;
	margin: 2.5rem 0;
`;

const Book = styled.div`
	width: 200px;
	height: 300px;
	position: relative;
	transform-style: preserve-3d;
	transform: rotateY(-30deg);
	transition: 1s ease;
	animation: 1s ease 0s 1 initAnimation;

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
		background-color: #5e5c64;
		border-radius: 0 2px 2px 0;
		box-shadow: 5px 5px 20px #666;
	}

	&::before {
		position: absolute;
		content: " ";
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
		content: " ";
		width: 200px;
		height: 300px;
		transform: translateZ(-25px);
		background-color: #5e5c64;
		border-radius: 0 2px 2px 0;
		box-shadow: -10px 0 50px 10px #666;
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

const ReadingContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	jusify-content: center;
	margin: 2.5rem;

	& > * {
		margin: 3rem 1rem;
	}
`;

export default function ReadBooks() {
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
		<Page>
			<section>
				<h1>Books</h1>
				<p>
					I generally try to read one fiction, one non-fiction and one
					recommended book at a time.
					<br />
					<br />I started out porting my Goodreads data then I realised I don't
					even remember some of these books nor do I still have the same taste
					as my teens. So I'm going to start afresh.
                    <br/>
                    <br/>
                    Once I have 24 read books here again, I'll add charts.
				</p>
				<h2 style={{ textAlign: "center", margin: "2rem" }}>Reading <span style={{fontSize:'1rem', }}>{ReadingFilter.length}</span></h2>
				<ReadingContainer>
					{Books.map((book) => {
						if (book.status === "reading") {
							return (
								<BookContainer
									href={""}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Book>
										<img src={book.cover} alt={book.title} />
									</Book>
								</BookContainer>
							);
						}
					})}
				</ReadingContainer>
				<h2 style={{ textAlign: "center", margin: "2rem" }}>Want to Read <span style={{fontSize:'1rem', }}>{WantReadFilter.length}</span></h2>
				{Books.map((book) => {
					if (book.status === "Want to Read") {
						return (
							<p>
								{book.title} by {
								book.author.length == 1 ? book.author: book.author.toString().replace(/,/g, ' & ')
								}
							</p>
						);
					}
				})}
				<h2 style={{ textAlign: "center", margin: "2rem" }}>
					Read <span style={{fontSize:'1rem', }}>{ReadFilter.length}</span>
				</h2>
				{Books.map((book) => {
					if (book.status === "read") {
						return (
							<p>
								<small>{book.finished?.split("-", 1)}</small> {book.title} by{" "}
								{book.author}{" "}
								{book.rating && book.rating >= 3 ? (
									<span style={{ color: "red" }}>♡</span>
								) : (
									""
								)}
							</p>
						);
					}
				})}
			</section>
		</Page>
	);
}
