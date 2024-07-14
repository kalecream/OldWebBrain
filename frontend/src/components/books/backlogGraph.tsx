'use client';
import { FC, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import Books from '@data/books';
import { WindowWidth } from '@utils/windowDimmensions';
import { GetMonthName } from '@utils/GetMonthName';
import styles from './books.module.scss';
import Link from 'next/link';
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
					Finished: 0,
				};
				bookData[startMonth].Started += 1;
			}

			if (finishMonth !== null) {
				bookData[finishMonth] = bookData[finishMonth] || {
					Started: 0,
					Finished: 0,
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
					Finished: bookData[monthIndex]?.Finished + cumulative.Finished || cumulative.Finished,
				};
			}
			cumulativeData.push({
				month: new Date(RelativeLastYearAgo.getFullYear(), RelativeLastYearAgo.getMonth() + month).toLocaleString(
					'default',
					{ month: 'long' },
				),
				...cumulative,
			});

			monthIndex = (monthIndex + 1) % 12;
		}

		setData(cumulativeData);
	}, [Books]);

	const width = WindowWidth() - 100;

	return (
		<>
			<BarChart width={width > 1024 ? width * 0.6 : width} height={300} data={Data} className={styles.backlogChart}>
				<XAxis dataKey="month" />
				{/* <YAxis domain={[0, 'dataMax + 3']} /> */}
				{/* <Tooltip active={true} /> */}
				<Bar dataKey="Started" stackId="a" fill="var(--secondary)" />
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
		<text x={x + width / 2} y={y} fill="var(--primary)" fontSize="0.8rem" fontWeight={700} textAnchor="middle" dy={-6}>
			{value}
		</text>
	);
};

export const extractGenres = () => {
	const categoriesSet = new Set<string>();
	Books.filter((book) => book.status == 'Read').forEach((b) => {
		b.genre.map((g) => {
			categoriesSet.add(g);
		});
	});
	return Array.from(categoriesSet);
};

export const BookShelf: FC = () => {
	const [activeCategory, setActiveCategory] = useState<string>('All');

	const handleTabChange = (category: string) => {
		setActiveCategory(category);
	};

	const categories = extractGenres();

	const readBooks = Books.filter((book) => book.status === 'Read').sort(
		(a, b) => new Date(b.finished).getTime() - new Date(a.finished).getTime(),
	);
	const wantToReadBooks = Books.filter((book) => book.status === 'Want').sort(
		(a, b) => new Date(b.added).getTime() - new Date(a.added).getTime(),
	);

	const filteredBooks =
		activeCategory === 'All'
			? [...readBooks].sort((a, b) => new Date(b.finished).getTime() - new Date(a.finished).getTime())
			: readBooks
					.filter((project) => project.genre.includes(activeCategory))
					.sort((a, b) => new Date(b.finished).getTime() - new Date(a.finished).getTime());

	return (
		<div className="desktop flex">
			<details open className={styles.bookDetails} id='want'>
				<summary>
						<a>{wantToReadBooks.length} Books To Read</a>
				</summary>
				<div className="bookshelf flex">
					{wantToReadBooks.map((book) => (
						<Link
							href={`https://www.duckduckgo.com/search?q=${book.title}+${book.author}`}
							target="_blank"
							rel="noopener noreferrer"
							key={book.title}
							className={styles.books}
						>
							<div className={styles.book}>
								<img
									src={book.cover}
									alt={book.title}
									title={book.summary}
									style={{ width: '200px', height: '300px' }}
								/>
							</div>
						</Link>
					))}
				</div>
			</details>
			<details open className={styles.bookDetails} id='read'>
				<summary>
						<a className="read-books-title">{readBooks.length} Read Books</a>
				</summary>
				<div className={`flex items-center ` + styles['project-tabs']}>
					<button
						className={`${styles['project-tab'] + ` glassmorphic`} ${activeCategory === 'All' ? styles['active'] : ''}`}
						onClick={() => handleTabChange('All')}
					>
						All
					</button>
					{categories.map((category) => (
						<button
							key={category}
							className={`${styles['project-tab'] + ` glassmorphic`} ${
								activeCategory === category ? styles['active'] : ''
							}`}
							onClick={() => handleTabChange(category)}
						>
							{category}
						</button>
					))}
				</div>
				<div className="bookshelf pancake">
					{filteredBooks.map((book) => (
						<Link
							href={`https://www.duckduckgo.com/search?q=${book.title}+${book.author}`}
							target="_blank"
							rel="noopener noreferrer"
							key={book.title}
							className={styles.books}
						>
							<div className={styles.book} style={{ margin: '0', padding: '0' }}>
								<img
									src={book.cover}
									alt={book.title}
									title={book.summary}
									style={{ width: '200px', height: '300px' }}
								/>
							</div>
						</Link>
					))}
				</div>
			</details>
		</div>
	);
};

export const RandomBooks: FC = () => {
	const randomBooks = Books.filter((book) => book.status === 'Read' && book.review).sort(() => Math.random() - Math.random());

	return (
		<div className={styles.random}>
			{randomBooks
				.filter((book) => book.review)
				.slice(0, 1)
				.map((book) => (
					<div key={book.title} className={`${styles.books__random}`}>
						<div className={styles.book__info}>
							<p>
								<Link className={styles.book__title} href={`https://www.google.com/search?q=${book.title}`}>
									{book.title}
								</Link>
								{book.rating && book.rating >= 4 ? (
									book.rating >= 5 ? (
										<span className={`${styles.book__review__indicator} ${styles.book_loved}`}>♥</span>
									) : (
										<span className={`${styles.book__review__indicator}`}>♥</span>
									)
								) : book.rating <= 2.5 && book.rating != 0 ? (
									<span className={`${styles.book__review__indicator}`}>×</span>
								) : (
									''
								)}
								<br />
								<span className={styles.book__author}>by {book.author}</span>
							</p>
							<p className={styles.book__finished}>
								Read{' '}
								{GetMonthName(book.started) == GetMonthName(book.finished)
									? GetMonthName(book.started)
									: GetMonthName(book.started) + 'to ' + GetMonthName(book.finished)}{' '}
								{book.finished.split('-', 1)}
							</p>
							{book.review && <p className={styles.book__review}>{book.review}</p>}
							{book.quotes && (
								<q className={styles.book__quote}>{book.quotes[Math.floor(Math.random() * book.quotes.length)]}</q>
							)}
						</div>
						<div>
							<Link
								title={book.title}
								key={book.title}
								className={styles.books}
								href={`https://www.duckduckgo.com/?q=${book.title}+${book.author}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className={styles.book}>
									<img src={book.cover} alt={''} />
								</div>
							</Link>
						</div>
					</div>
				))}
		</div>
	);
};
