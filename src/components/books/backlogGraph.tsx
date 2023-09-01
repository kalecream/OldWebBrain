import { FC, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import Books from 'src/data/books';
import { WindowWidth } from '@utils/windowDimmensions';
import { GetMonthName } from '@utils/GetMonthName';

export interface BooksProps {
	title: string;
	author: string[] | string;
	published?: number | string;
	format?: string;
	genre: string | string[];
	rating?: number;
	status: string;
	review?: string;
	added?: string;
	started?: string;
	finished?: string;
	summary: string;
	cover?: string;
	pages?: number;
	minutes?: number;
}

export interface BookData {
	month: string;
	Started: number;
	Finished: number;
}

export const BacklogGraph: FC = () => {
	const [Data, setData] = useState<BookData[]>([]);

	useEffect(() => {
		const bookData: Record<string, { Started: number; Finished: number }> = {};
		let today = new Date();
		let RelativeLastYearAgo = new Date(today.getFullYear() - 1, today.getMonth() + 1, today.getDate());

		Books.forEach((book) => {
			let startMonth = null;
			let finishMonth = null;

			if (book.started && new Date(book.started) > RelativeLastYearAgo) {
				startMonth = new Date(book.started).getMonth();
			}

			if (book.finished && new Date(book.finished) > RelativeLastYearAgo) {
				finishMonth = new Date(book.finished).getMonth();
				if (finishMonth === startMonth) {
					startMonth = null;
				}
			}

			if (startMonth !== null) {
				bookData[startMonth] = bookData[startMonth] || {
					Started: 0,
					Finished: 0
				};
				bookData[startMonth].Started += 1;
			}

			if (finishMonth !== null) {
				bookData[finishMonth] = bookData[finishMonth] || {
					Started: 0,
					Finished: 0
				};
				bookData[finishMonth].Finished += 1;
				if (startMonth !== null) {
					bookData[finishMonth].Started -= 1;
				}
			}
		});

		// Prepare for the snowball effect!
		const cumulativeData: BookData[] = [];
		let cumulative = { Started: 0, Finished: 0 };

		let monthIndex = RelativeLastYearAgo.getMonth();

		for (let month = 0; month < 12; month++) {
			if (bookData[monthIndex]) {
				cumulative = {
					Started: bookData[monthIndex]?.Started + cumulative.Started || cumulative.Started,
					Finished: bookData[monthIndex]?.Finished + cumulative.Finished || cumulative.Finished
				};
			}
			cumulativeData.push({
				month: new Date(RelativeLastYearAgo.getFullYear(), RelativeLastYearAgo.getMonth() + month).toLocaleString(
					'default',
					{ month: 'long' }
				),
				...cumulative
			});

			monthIndex = (monthIndex + 1) % 12;
		}

		setData(cumulativeData);
	}, [Books]);

	const width = WindowWidth() - 150;

	return (
		<>
			<BarChart width={width > 1000 ? 950 : width} height={350} data={Data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="month" />
				<YAxis domain={[0, 'dataMax + 2']} />
				<Tooltip active={false} />
				<Bar dataKey="Started" stackId="a" fill="var(--accent)" />
				<Bar dataKey="Finished" stackId="a" fill="var(--primary)" label={<CustomerBarLabel />} />
			</BarChart>
		</>
	);
};

const CustomerBarLabel: FC<any> = (props) => {
	const { x, y, width, height, value } = props;

	if (value <= 0) {
		return null;
	}

	return (
		<text x={x + width / 2} y={y} fill="var(--muted)" fontSize="0.8rem" fontWeight={700} textAnchor="middle" dy={-6}>
			{value}
		</text>
	);
};

// TODO: Combine books and add filters through a form.

export const BookShelf: FC = () => {
	const readBooks = Books.filter((book) => book.status === 'Read').sort(
		(a, b) => new Date(b.finished).getTime() - new Date(a.finished).getTime()
	);
	const wantToReadBooks = Books.filter((book) => book.status === 'Want to Read').sort(
		(a, b) => new Date(b.added).getTime() - new Date(a.added).getTime()
	);

	return (
		<>
			<details>
				<summary>
					<a>{wantToReadBooks.length} Books I'm excited to read next</a>
				</summary>
				<div className="bookshelf pancake">
					{wantToReadBooks.map((book) => (
						// <BookContainer
						//   href={`https://www.you.com/search?q=${book.title}+${book.author}`}
						//   target="_blank"
						//   rel="noopener noreferrer"
						//   key={book.title}
						// >
						//   <Book className="animate__animated animate__slideInUp">
						//     <img
						//       src={book.cover}
						//       alt={book.title}
						//       title={book.summary}
						//       style={{ width: "200px", height: "300px" }}
						//     />
						//   </Book>
						// </BookContainer>
						<p className="book-list pancake-child">
							{' '}
							<a href={`https://www.google.com/search?q=${book.title}`}>{book.title}</a> <br />
							<span>by {book.author}</span>{' '}
						</p>
					))}
				</div>
			</details>
			<details open>
				<summary>
					<a className="read-books-title">{readBooks.length} Read Books</a>
				</summary>
				<div className="bookshelf pancake">
					{readBooks.map((book) => (
						// <BookContainer
						//   href={`https://www.you.com/search?q=${book.title}+${book.author}`}
						//   target="_blank"
						//   rel="noopener noreferrer"
						//   key={book.title}
						// >
						//   <Book>
						//     {book.cover ? (
						//       <img
						//         src={book.cover}
						//         alt={book.title}
						//         title={book.summary}
						//         style={{ width: "200px", height: "300px" }}
						//       />
						//     ) : (
						//       // <Image
						//       //   src={book.cover}
						//       //   alt={book.title}
						//       //   title={book.summary}
						//       //   placeholder="blur"
						//       //   blurDataURL={book.cover}
						//       //   width={200}
						//       //   height={300}
						//       //   />
						//       <div
						//         style={{
						//           width: "200px",
						//           height: "300px",
						//           display: "flex",
						//           justifyContent: "center",
						//           alignItems: "center",
						//           padding: "1rem",
						//           fontSize: "1.2rem",
						//           color: "var(--muted)",
						//         }}
						//       >
						//         {" "}
						//         {book.title}
						//       </div>
						//     )}
						//   </Book>
						// </BookContainer>
						<div className="book-list pancake-child">
							<a href={`https://www.google.com/search?q=${book.title}`}>{book.title}</a>{' '}
							{book.rating && book.rating >= 4 ? (
								book.rating >= 5 ? (
									<span style={{ color: 'red' }}>♥</span>
								) : (
									'♥'
								)
							) : book.rating <= 2.5 && book.rating != 0 ? (
								'×'
							) : (
								''
							)}{' '}
							<p className="book-author">by {book.author}</p>
							<p className="book-finished">
								{GetMonthName(book.finished)} {book.finished.split('-', 1)}
							</p>
							{book.review && <p className="book-review">{book.review}</p>}
							{book.quotes && (
								<q className="book-quote">{book.quotes[Math.floor(Math.random() * book.quotes.length)]}</q>
							)}
						</div>
					))}
				</div>
			</details>
		</>
	);
};
