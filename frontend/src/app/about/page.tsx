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
import style from '@styles/modules/Rolodex.module.scss';
import pic from '@public/img/album/river.jpg';
import { ScrollDown } from '@components/scrollDown';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

interface BookmarkProps {
	url: string;
	title: string;
	description?: string;
	tags?: string[];
	type: string;
}

const Bookmarks: BookmarkProps[] = [
	{
		url: 'https://grimgrains.com/site/home.html',
		title: 'Grim Grains',
		description:
			"A vegan cooking blog with cute illustrations. I've been thinking about blogging about exploring cooking and exploring making a fallback cookbook for myself in a similar format, but I don't want to be a copycat.",
		tags: ['cooking', 'food'],
		type: 'website',
	},
	{
		title: 'Kill the Newsletter',
		url: 'https://kill-the-newsletter.com/',
		description: 'Convert email newsletters into RSS feeds',
		type: 'website',
	},
	{
		url: 'https://jzhao.xyz/posts/a-failure-resume',
		title: 'Failure Resume',
		tags: [''],
		description:
			'"A failure resume isn’t just a showcase of failure in and of itself, but also a document of all the spectacular ways you’ve worked hard towards your own goals and accomplishments. In many ways, it validates your struggle and your effort."',
		type: 'article',
	},
	{
		url: 'https://memo.barrucadu.co.uk/personal-finance.html',
		title: 'Personal Finance',
		tags: [''],
		description:
			'I had been looking up ways persons were using Ledger. Instead I got a paradigm shift on how I was viewing my personal finances and a cool new blog to follow. I now use beancount, but I come back to this post every now and again. The calculations for short and long runaway (i.e. when we run out of money) are very helpful to consider .',
		type: 'webpage',
	},
	{
		url: 'https://themeasureofaplan.com/budget-tracking-tool/',
		title: 'The Measure of A Plan',
		tags: ['money'],
		description: 'A spreadsheet budgeting tool for people who need budgeting analytics, but not too much',
		type: 'tool',
	},
	{
		url: 'https://www.wilsonquarterly.com/quarterly/_/whats-the-best-way-to-die',
		title: "What's the best way to die?",
		description: 'An article I found on physician-assisted suicide.',
		tags: ['death', 'suicide'],
		type: 'article',
	},
	{
		url: 'https://www.tasteatlas.com/',
		type: 'website',
		title: 'Taste Atlas',
		tags: ['cooking', 'food'],
		description: 'A map of recipes from all over the world',
	},
	{
		title: 'Hourly Rate Calculator',
		url: 'https://clockify.me/hourly-rate-calculator',
		type: 'website',
	},
	{
		title: 'Dither Me This!',
		url: 'https://doodad.dev/dither-me-this/',
		description: 'Tool to reduce image sizes',
		type: 'website',
	},
];

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
			<h1 className="text-center">About</h1>
			{/* <PhotoGalley /> */}
			{/* TODO: Fix photogallery on about */}
				<div className="flex column center" style={{marginBottom: "2rem"}}>
					<div className="frame">
						<Image src={pic} alt="" height={200} width={350} style={{margin:"auto", borderRadius:0}} />
					</div>
					<p className="prose glassmorphic">
						I made this about page because showing you my personality through the things I enjoy is personally
						preferable to making a biography. I've always disliked that "tell me a bit about yourself" in personal
						environments. <b>This page is still under construction.</b>
					</p>
					<div className={`flex`}>
						<Link
							className={button.border + ` glassmorphic`}
							href={'#books'}
							style={{ width: '100px', height: '100px' }}
						>
							Books
						</Link>
						<Link
							className={button.border + ` glassmorphic`}
							href={'#games'}
							style={{ width: '100px', height: '100px' }}
						>
							Games
						</Link>
						<Link
							className={button.border + ` glassmorphic`}
							href={'#podcasts'}
							style={{ width: '100px', height: '100px' }}
						>
							Podcasts
						</Link>
						<Link
							className={button.border + ` glassmorphic`}
							href={'#rolodex'}
							style={{ width: '100px', height: '100px' }}
						>
							Rolodex
						</Link>
					</div>
					<ScrollDown />
				</div>

			{/* <h2>Coding</h2>

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
					<h2 className="text-center">Books</h2>
					<p className="prose glassmorphic">
						I like to read to learn about the world around me or get laughs. I have{' '}
						<b>{Books.filter((book) => book.status != 'Want').length} books in my library</b>, and I'm always looking
						for more. I prefer {Percentage[0] > Percentage[1] ? 'Fiction' : 'Non-Fiction'}, so I read about{' '}
						<b>
							{Percentage[0].toFixed(1)}% fiction and {Percentage[1].toFixed(1)}% non-fiction
						</b>
						.
					</p>
					<div className="flex row align-items">
						<Link className="prose glassmorphic text-center" href="/read#read">
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
						*
						<Reads status="Want" limit={1} />
						<Link className="prose glassmorphic text-center" href="/read#want">
							Next ({wantToReadBooks.length}) <FaArrowRightLong />
						</Link>
					</div>
				</div>
				<p className="prose glassmorphic">
					I'm currently reading {Books.filter((book) => book.status === 'Reading').length} books, which you can see
					below. <b>My 10 most frequently read book tags are: {topGenres}.</b>
				</p>
				<Reads status="Reading" />
				<p className="prose glassmorphic">
					This graph below is my book status backlog for the past rolling year. This ignores books from before then to
					ensure that I'm keeping up my desired reading pace of 24 books for every 12 months with 70/30 Fiction to
					Non-Fiction. I have books in my backlog to-read.
				</p>
				<BacklogGraph />
				<h3 className="text-center">Random Review</h3>
				<RandomBooks />
			</section>

			<section className={styles.paragraph} id="games">
				<div>
					<h2 className="text-center">Games</h2>

					<p className={`glassmorphic prose`}>
						My preference is playing indie games and games I physically own. I still play my Gameboy Advance and I own 3
						different DSes. Not featured below: several untouched games from{' '}
						<Link href="https://steamcommunity.com/id/SabMedwinter">Steam</Link> and{' '}
						<Link href="https://sabmedwinter.itch.io/">Itch.io</Link>. These are the main games in my rotation nowadays.
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
					<h2 className="text-center">Podcasts</h2>
					<p className="prose glassmorphic">
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

			<section className={styles.paragraph} id="rolodex">
				<div>
					<h2 className="text-center">Rolodex</h2>
					<p className="prose glassmorphic">
						These are some bookmarks for pages & media I've enjoyed on the net. In the future when I have areas for this
						site similar to how I map out my life, the links will be moved to respective sectors.
					</p>
					<div className={style.container + ` flex`}>
						{Bookmarks.map((bookmark) => (
							<div className={style.link + ` glassmorphic`}>
								<Link href={bookmark.url} target="_blank" key={bookmark.url} className={style.link + `pancake-child `}>
									<h4 style={{ fontWeight: 'semibold' }}>{bookmark.title}</h4>
									<p>{bookmark.description}</p>
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>
		</section>
	);
};

export default About;
