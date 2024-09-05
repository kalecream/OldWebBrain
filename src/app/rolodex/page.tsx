import { InteractiveCard } from '@components/InteractiveCard';


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
			"A vegan cooking blog with cute illustrations.",
		tags: ['cooking', 'food'],
		type: 'website',
	},
	{
		title: 'Kill the Newsletter',
		url: 'https://kill-the-newsletter.com/',
		description: 'Convert email newsletters into RSS.',
		type: 'website',
	},
	{
		url: 'https://jzhao.xyz/posts/a-failure-resume',
		title: 'Failure Resume',
		tags: [''],
		description:
			'A  document of the ways you’ve worked hard towards your goals and accomplishments."',
		type: 'article',
	},
	{
		url: 'https://memo.barrucadu.co.uk/personal-finance.html',
		title: 'Personal Finance',
		tags: [''],
		description:
			'A paradigm shift on how I was viewing my personal finances and a cool new blog to follow..',
		type: 'webpage',
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
		description: '',
		type: 'website',
	},
];

const Rolodex = () => {
	return (
		<>
			<section id="rolodex">
				<h1>Rolodex</h1>
				<p className="prose">These are some bookmarks for pages & media I've enjoyed on the net.</p>
				<p className="prose">
					In the future when I have areas for this site similar to how I map out my life, the links will be moved to
					respective sectors.
				</p>
			</section>
			<section>
				<div className={` flex`}>
					{Bookmarks.map((bookmark) => (
						<InteractiveCard
							link={bookmark.url}
							heading={bookmark.title}
							text={bookmark.description}
							key={bookmark.url}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default Rolodex;
