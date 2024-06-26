import * as React from 'react';
import Books from '../../data/books';
import Link from 'next/link';
import styles from './books.module.scss';

const CurrentReads = () => {
	return (
		<div className={styles.reading}>
			{Books.map((book) => {
				if (book.status === 'Reading') {
					let searchURL = `https://www.duckduckgo.com/?q=${book.title}+${book.author}`;
					return (
						<Link
							title={book.title}
							key={book.title}
							className={styles.books}
							href={searchURL}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className={styles.book}>
								<img src={book.cover} alt={book.title} />
							</div>
						</Link>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
};

export default CurrentReads;
