import { ReactNode } from 'react';

export interface ProjectStructure {
	id: string;
	display: boolean;
	category?: string;
	type: string | string[];
	title: string;
	image?: string;
	description: ReactNode;
	link?: string;
	repoName?: string;
	sourceLink?: string;
	technology: ReactNode[];
	language?: string[];
	created: string;
	updated?: string;
	status?: string;
}

export const Projects: ProjectStructure[] = [
	{
		id: '001',
		display: true,
		title: 'Blue Orange',
		image: '/img/project/001.webp',
		category: 'code',
		type: 'customisation',
		status: 'ongoing',
		description: (
			<span>
				This is a duotone i3wm theme. I installed i3wm because for a while, my mouse wasn't working properly, so I had
				to use the keyboard to navigate. Nowadays, I like it because it's fast, minimal and my mice still keep dying on
				me.
			</span>
		),
		repoName: 'dotfiles',
		technology: [
			<a key="i3wm" href="https://i3wm.org/">
				i3wm{' '}
			</a>,
			<a key="rofi" href="https://manpages.ubuntu.com/manpages/bionic/en/man1/rofi.1.html">
				Rofi{' '}
			</a>,
			<a key="kitty" href="https://sw.kovidgoyal.net/kitty/kitty">
				Kitty{' '}
			</a>,
			<a key="feh" href="https://feh.finalrewind.org/">
				Feh{' '}
			</a>,
			<a key="pb" href="https://github.com/polybar/polybar">
				Polybar
			</a>,
		],
		language: ['Bash', 'Python'],
		created: '2022-07-07',
		updated: '2023-08-13',
	},
	{
		id: '002',
		display: true,
		title: 'Morning Messages',
		category: 'code',
		type: 'automation',
		status: 'completed',
		description: (
			<span>
				A simple python script to automate the process of sending current news articles and cute kaomoji-filled messages
				in the morning via Whatsapp Web to a past partner.
			</span>
		),
		repoName: 'morning-messages',
		technology: [
			<a key="pw" href="https://pywhatkit.herokuapp.com/">
				PyWhatKit{' '}
			</a>,
			<a key="gp" href="https://geopy.readthedocs.io/en/stable/">
				GeoPy{' '}
			</a>,
			<a key="owm" href="https://openweathermap.org/">
				OpenWeatherMap API{' '}
			</a>,
		],
		language: ['Python'],
		created: '2021-11-15',
	},
	{
		id: '003',
		display: true,
		title: 'Kalecream Website',
		category: 'code',
		type: 'website',
		image: '/img/project/003.webp',
		status: 'ongoing',
		description: (
			<span>
				I've rebuilt the website many different times in; plain HTML, Javascript and CSS combination, Wordpress, and now
				in React Typescript on NextJS. You're on it right now.
			</span>
		),
		repoName: 'OldWebBrain',
		link: 'https://www.sabrinamedwinter.com/',
		technology: [
			<a key="next" href="https://nextjs.org/">
				Next.js{' '}
			</a>,
			<a key="three" href="https://threejs.org/">
				React-Three-Fiber{' '}
			</a>,
			<a key="0033" href="https://greensock.com/gsap/">
				GSAP{' '}
			</a>,
			<a key="0034" href={'https://sanity.io/'}>
				Sanity
			</a>,
			<a key="0035" href={'https://prisma.io'}>
				Prisma
			</a>,
		],
		created: '2022-08',
		language: ['React', 'TypeScript', 'MDX', 'ProsgreSQL'],
	},
	{
		id: '004',
		display: true,
		title: 'GPT-4 Record',
		category: 'code',
		type: ['automation', 'AI'],
		status: 'archived',
		description: (
			<span>
				A one-hour paid project to accept a 800 word prompt, perform a specfic action with the prompt and use that
				output as a second prompt. Both prompts were then saved to an ordinary text file. The source is not available
				because it was released by the client.
			</span>
		),
		technology: [
			<a key="00401" href="https://openai.com/blog/openai-api/">
				OpenAI API{' '}
			</a>,
		],
		language: ['Python'],
		created: '2023-05-30',
	},
	{
		id: '005',
		display: true,
		title: 'Swagger Login Test',
		category: 'code',
		status: 'completed',
		type: 'test',
		link: 'https://sphenery.vercel.app/login',
		image: '/img/project/005.webp',
		description: <span>A form done for a test of a Swagger API.</span>,
		technology: [
			<a key="00501" href="https://sphenery.com/swagger/index.html">
				Swagger SMTest{' '}
			</a>,
		],
		repoName: 'Sphenery',
		language: ['React', 'Typescript'],
		created: '2023-07-23',
	},
	{
		id: '006',
		display: true,
		title: 'Park',
		category: 'illustration',
		type: 'practice',
		image: '/img/project/006.webp',
		status: 'completed',
		description: (
			<span>A test of the sapling plug-in in Blender3D. This model is set as the background of this website.</span>
		),
		technology: [<a key="00601">Blender3D</a>],
		language: [],
		created: '2019-01-01',
	},
	{
		id: '007',
		display: true,
		title: 'Bite-Sized Binge Logo',
		category: 'illustration',
		type: 'practice',
		image: '/img/project/007.webp',
		status: 'completed',
		description: (
			<span>
				A 3D logo I made for a podcast idea to talk about the media I consume each week. The podcast has been put on
				hiatus for now.
			</span>
		),
		technology: [<a key="00701">Blender3D</a>],
		language: [],
		created: '2023-01-01',
	},
	{
		id: '008',
		display: true,
		title: 'Under Construction',
		category: 'illustration',
		type: 'production',
		image: '/img/project/008.webp',
		status: 'completed',
		description: (
			<span>
				A placeholder image I made for when my website was under construction. It still is Under Construction.
			</span>
		),
		technology: [<a key="00801">Blender3D</a>],
		language: [],
		created: '2022-11-03',
	},
	{
		id: '009',
		display: true,
		title: 'Strawberry Milkshake',
		category: 'illustration',
		type: 'practice',
		image: '/img/project/009.webp',
		status: 'completed',
		description: <span>A 3D render of a strawberry milkshake I made after for a dailySketch</span>,
		technology: ['Blender3D'],
		language: [],
		created: '2022-11-12',
	},
	{
		id: '010',
		display: true,
		title: 'Concrete Kiln',
		category: 'illustration',
		type: 'plan',
		image: '/img/project/010.webp',
		status: 'completed',
		description: (
			<span>
				A mockup of a concrete kiln I planned to make to experiment with making pottery at home. This illustration is to
				scale.
			</span>
		),
		language: [],
		technology: [<a key="01001">Blender3D</a>],
		created: '2022-11-12',
	},
	{
		id: '011',
		display: true,
		title: 'Kinder Blocks',
		category: 'illustration',
		type: 'art-fight',
		image: '/img/project/011.webp',
		status: 'completed',
		description: (
			<span>This render was done as a late entry for a competition on Twitter to create a brand for baby toys.</span>
		),
		technology: [<a key="01101">Blender3D</a>],
		language: [],
		created: '2022-11-12',
	},
	{
		id: '012',
		display: true,
		title: 'Queen',
		category: 'illustration',
		type: 'practice',
		image: '/img/project/012.webp',
		status: 'completed',
		description: <span>A practice render I made for the idea of a new queen coming onto a chess board.</span>,
		technology: [<a key="01101">Blender3D</a>],
		language: [],
		created: '2022-11-12',
	},
	{
		id: '013',
		display: true,
		title: 'Cake',
		category: 'illustration',
		type: 'practice',
		image: '/img/project/013.webp',
		status: 'ongoing',
		description: (
			<span>
				I wanted to make more little cakes. I made one cake as an icon and never made any more cakes. I should make some
				more cakes.
			</span>
		),
		technology: [<a key="01301">Blender3D</a>],
		language: [],
		created: '2022-11-12',
	},
	{
		id: '014',
		display: true,
		title: 'Donut',
		category: 'illustration',
		type: 'practice',
		image: '/img/project/014.webp',
		status: 'completed',
		description: (
			<span>I wanted to do the infamous beginner donut again, but ended up doing a breakfast scene again.</span>
		),
		technology: [<a key="01401">Blender3D</a>],
		created: '2022-11-12',
	},
];

export default Projects;
