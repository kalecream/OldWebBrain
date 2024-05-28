"use client"
import { useEffect, useState } from 'react';
import Books from '@data/books';
import CurrentReads from '@components/books/currentReads';
import { BacklogGraph, RandomBooks } from '@components/books/backlogGraph';
// import PhotoGalley from '@components/books/gallery';
import styles from '@components/books/books.module.scss';
// import { CodersrankSummary } from '@components/books/CodersRank';
import Link from 'next/link';


export const About = () => {
	const [Percentage, setPercentage] = useState([0, 0]);

	useEffect(() => {
		const Fiction = Books.filter((book) => book.genre.includes('Fiction') && !book.genre.includes('Non-Fiction'));

		const NonFiction = Books.filter((book) => book.genre.includes('Non-Fiction') && !book.genre.includes('Fiction'));

		const FictionPercentage = (Fiction.length / Books.length) * 100;
		const NonFictionPercentage = (NonFiction.length / Books.length) * 100;

		setPercentage([FictionPercentage, NonFictionPercentage]);
	}, []);

	let genreCount: { [genre: string]: number } = {};

	Books.forEach((book) => {
		if (book.genre) {
			book.genre.forEach((genre: string) => {
				if (genre !== 'Fiction' && genre !== 'Non-Fiction') {
					if (!genreCount[genre]) {
						genreCount[genre] = 1;
					} else {
						genreCount[genre]++;
					}
				}
			});
		}
	});

	let topGenres = Object.entries(genreCount)
		.sort(([, a], [, b]) => b - a)
		.slice(0, 10)
		.map(([genre]) => genre)
		.join(', ');

	const wantToReadBooks = Books.filter((book) => book.status === 'Want to Read').sort(
		(a, b) => new Date(b.added).getTime() - new Date(a.added).getTime(),
	);

	const ReadBooks = Books.filter((book) => book.status === 'Read').sort(
		(a, b) => new Date(b.finished).getTime() - new Date(a.finished).getTime(),
	);

	return (
			<section>
				<h1 className='text-center'>About</h1>
				<div className={styles.paragraph}>
					{/* <PhotoGalley /> */}
					{/* TODO: Fix photogallery on about */}

					<p>
						I made this about page because showing you my personality through the things I like is personally preferable
						to describing it. I've always disliked that "tell me a bit about yourself" in personal environments.
					</p>
					<p>
						What's my personality like, you ask? Dive into the treasure trove of media
						below. It's like a mixtape of my soul. I have a <Link href="/rolodex">Rolodex</Link> dedicated to the most
						interesting persons, websites and articles I've come across on the internet. Most of these are places I
						frequent so this page also doubles as my bookmarks.
					</p>

					{/* <h2>Coding</h2>

					<p>
						I have been coding from 2009 back when high-schools were teaching Pascal and C. I was more interested in
						making pretty pages online then. I'm learning and experimenting every day to hone my craft. You can view the <Link href="/changelog">changelog for this website</Link>! I also really like learning through the blogging of others. 
						
						Here are the
						rankings for proficiency in the languages I have used in my Github amongst other persons who signed up for{' '}
						<Link href="https://profile.codersrank.io/user/kalecream#">Codersrank.</Link> 
					</p>

					<CodersrankSummary /> */}

					<h2 className='text-center'>Books</h2>

					<p>
						I like to read to learn about the world around me or get laughs. I have{' '}
						<b>{Books.length} books in my library</b> (digital and non-digital), and I'm always looking for more. I
						prefer {Percentage[0] > Percentage[1] ? 'Fiction' : 'Non-Fiction'}, so I read about{' '}
						<b>
							{Percentage[0].toFixed(0)}% fiction and {Percentage[1].toFixed(0)}% non-fiction
						</b>
						.
					</p>

					<p>
						I'm currently reading {Books.filter((book) => book.status === 'Reading').length} books, which you can see
						below. My 10 most frequently read book tags are: {topGenres}.
					</p>

					<p>
						The last book I read was <b>{ReadBooks[0].title}</b>.
					</p>

					<CurrentReads />
					<p>
						This graph below is my book status backlog for the past rolling year. This ignores books from before then to
						ensure that I'm keeping up my desired reading pace of 24 books for every 12 months with 70/30 Fiction to
						Non-Fiction. I have {wantToReadBooks.length} books in my backlog.
					</p>
					<BacklogGraph />
					<p>
						I used to show all my read books, but I would now prefer to show you a short and random list of books I've
						read. A small heart means that I have it rated highly, while a cross means that I pretty much hated the
						book.
					</p>
					<RandomBooks />

					<h2 className='text-center'>Games</h2>

					<p>In my free time, I sleep. In my free-er times, I play one of these:</p>

					<p>
						<Link href="https://www.legendsofidleon.com/">IdleOn</Link> : An MMORPG that I can leave and get more
						rewards the longer I stay away, but also has a ton of little interactive things I can do when I feel like
						being active.
					</p>
					<p>
						<Link href="https://www.wolvesville.com/?ref=landing">Wolvesville</Link> : Another MMO that is a quick round
						game based on the party game, Mafia.
					</p>
					<p>
						<Link href="https://shatteredpixel.com/shatteredpd/">Shattered Pixel Dungeon</Link> : Loooooong rogue-like
						offline game I can play on my phone. I've been playing this game for more than a a decade. It took me years
						to beat it the first time. It's cute fun and open-source!
					</p>
					<p>
						<Link href={'https://en.wikipedia.org/wiki/Etrian_Odyssey_II'}>Etrian Odyssey II: Heroes of Lagaard</Link> :
						A dungeon crawler made for the DS where I have never in my life seen the end. It's tedious, but passes the
						time when I'm stuck in a long queue.
					</p>
				</div>
			</section>
	);
};

export default About;
