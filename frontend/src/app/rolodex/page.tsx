import style from '@styles/modules/Rolodex.module.scss';
import styles from '@components/books/books.module.scss';
import Link from 'next/link';

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

const Rolodex = () => {
	return (
		<>
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
		</>
	);
};

export default Rolodex;
