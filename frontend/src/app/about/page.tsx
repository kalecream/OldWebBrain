'use client';
import { useEffect, useState } from 'react';
import Books from '@data/books';
import Pods from '@data/pod';
import Reads from '@components/books/Reads';
import { BacklogGraph, RandomBooks } from '@components/books/backlogGraph';
// import PhotoGalley from '@components/books/gallery';
import styles from '@components/books/books.module.scss';
import button from '@styles/modules/Button.module.scss';
// import { CodersrankSummary } from '@components/books/CodersRank';
import Link from 'next/link';
import Image from 'next/image';
import pic from '@public/img/album/river.jpg';
import { ScrollDown } from '@components/scrollDown';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

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

	const wantToReadBooks = Books.filter((book) => book.status === 'Want').sort(
		(a, b) => new Date(b.added).getTime() - new Date(a.added).getTime(),
	);

	const readBooks = Books.filter((book) => book.status === 'Read').sort(
		(a, b) => new Date(b.finished).getTime() - new Date(a.finished).getTime(),
	);

	return (
		<section>
			<section style={{ marginBottom: '3rem', marginTop: 0, paddingTop: 0 }}>
				{/* <PhotoGalley /> */}
				{/* TODO: Fix photogallery on about */}
				<div className="flex column center" style={{ marginTop: '2rem' }}>
					<div className="frame">
						<Image src={pic} alt="" height={200} width={350} style={{ margin: 'auto', borderRadius: 0 }} />
					</div>
					<p className="prose ">
						I made this about page because showing you my personality through the things I enjoy is personally
						preferable to making a biography. I've always disliked being asked "tell me a bit about yourself" in
						personal environments.
					</p>
					{/* <div className={`flex row`}>
						<Link href={'#books'}>
							<h1>Books</h1>
						</Link>
						<Link href={'#games'}>
							<h1>Games</h1>
						</Link>
						<Link href={'#podcasts'}>
							<h1>Podcasts</h1>
						</Link>
					</div> */}
					<ScrollDown />
				</div>
			</section>

			{/* <h1>Coding</h1>

					<p>
						I have been coding from 2009 back when high-schools were teaching Pascal and C. I was more interested in
						making pretty pages online then. I'm learning and experimenting every day to hone my craft. You can view the <Link href="/changelog">changelog for this website</Link>! I also really like learning through the blogging of others. 
						
						Here are the
						rankings for proficiency in the languages I have used in my Github amongst other persons who signed up for{' '}
						<Link href="https://profile.codersrank.io/user/kalecream#">Codersrank.</Link> 
					</p>

					<CodersrankSummary /> */}

			<section id="books">
				<div className={styles.paragraph}>
					<h1 className="text-center">Books</h1>
					<p className="prose ">
						I like to read to learn about the world around me or get laughs. I have{' '}
						<b>{Books.filter((book) => book.status != 'Want').length} books in my library</b>, and I'm always looking
						for more. I prefer {Percentage[0] > Percentage[1] ? 'Fiction' : 'Non-Fiction'}, so I read about{' '}
						<b>
							{Percentage[0].toFixed(1)}% fiction and {Percentage[1].toFixed(1)}% non-fiction
						</b>
						.
					</p>
					<div className="flex row align-items">
						<Link className="prose  text-center" href="/read#read">
							<FaArrowLeftLong /> Last ({readBooks.length})
						</Link>
						{
							<Link
								title={readBooks[0].title}
								className={styles.books}
								href={`https://www.duckduckgo.com/?q=${readBooks[0].title}+${readBooks[0].author}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className={styles.book}>
									<img src={readBooks[0].cover} alt={readBooks[0].title} />
								</div>
							</Link>
						}
						<Reads status="Want" limit={1} />
						<Link className="prose text-center" href="/read#want">
							Next ({wantToReadBooks.length}) <FaArrowRightLong />
						</Link>
					</div>
				</div>
				<p className="prose ">
					I'm currently reading {Books.filter((book) => book.status === 'Reading').length} books, which you can see
					below.My 10 most frequently read book tags are: <b>{topGenres}.</b>
				</p>
				<Reads status="Reading" />
				<p className="prose ">
					This graph below is my book status backlog for the past rolling year. This ignores books from before then to
					ensure that I'm keeping up my desired reading pace of 24 books for every 12 months with 70/30 Fiction to
					Non-Fiction. I have books in my backlog to-read.
				</p>
				<BacklogGraph />
				<RandomBooks />
			</section>

			<section className={styles.paragraph} id="games">
				<div>
					<h1 className="text-center">Games</h1>

					<p className={` prose`}>
						My preference is playing indie games and games I physically own. I still play my Gameboy Advance and I own 3
						different DSes. Not featured below: several untouched games from{' '}
						<Link className="link" href="https://steamcommunity.com/id/SabMedwinter">
							Steam
						</Link>{' '}
						and <Link href="https://sabmedwinter.itch.io/">Itch.io</Link>. These are the main games in my rotation
						nowadays.
					</p>
					<div className="flex row">
						<div className="">
							<Link href="https://www.legendsofidleon.com/">
								<Image
									width={300}
									height={150}
									src={'https://imgur.com/APzegNB.png'}
									alt="IdleOn"
									className={`outerglow`}
								/>
							</Link>
						</div>
						<div className="">
							<Link href="https://shatteredpixel.com/shatteredpd/">
								<Image
									width={300}
									height={150}
									src="https://i.imgur.com/J6ExEz6.gif"
									alt="Shattered Pixel Dungeon"
									className={`outerglow`}
								/>
							</Link>
						</div>
						<div className="">
							<Link href="https://en.wikipedia.org/wiki/Etrian_Odyssey_II">
								<Image
									width={150}
									height={150}
									src="https://i.imgur.com/JbZW1N3.jpg"
									alt="Etrian Odyssey II: Heroes of Lagaard"
									className={`outerglow`}
								/>
							</Link>
						</div>
						<div className="">
							<Link href="https://en.wikipedia.org/wiki/The_World_Ends_with_You">
								<Image
									width={150}
									height={150}
									src="https://i.imgur.com/j6DsuvT.jpeg"
									alt="World Ends With You"
									className={`outerglow`}
								/>
							</Link>
						</div>
						<div className="">
							<Link href="https://en.wikipedia.org/wiki/Advance_Wars">
								<Image
									width={150}
									height={150}
									src="https://i.imgur.com/ofu3y5f.jpeg"
									alt="Advanded Wars"
									className={`outerglow`}
								/>
							</Link>
						</div>

						<div className="">
							<Link href="https://en.wikipedia.org/wiki/Professor_Layton_and_the_Curious_Village">
								<Image
									width={150}
									height={150}
									src="https://i.imgur.com/NsBAPjW.jpeg"
									alt="Professor LAyton and The Curious Village"
									className={`outerglow`}
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.paragraph} id="podcasts">
				<div>
					<h1 className="text-center">Podcasts</h1>
					<p className="prose ">
						I mainly listen to audiodramas and horror podcasts, but tend to listen to Non-Fiction or Media Podcasts when
						I'm doing work. These have been my favourite listens so far.
					</p>
					<div className="flex row">
						{Pods.sort((a, b) => a.title.localeCompare(b.title)).map((p) => (
							<div className="">
								{p.url ? (
									<Link href={p.url}>
										<Image
											width={125}
											height={125}
											src={p.cover}
											alt={p.title}
											title={p.title}
											className={`outerglow`}
										/>
									</Link>
								) : (
									<small>{p.title}</small>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</section>
	);
};

export default About;
