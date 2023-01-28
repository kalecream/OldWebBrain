const Projects = [
	{
		title: "Blue Orange",
		image:
			"https://github.com/kalecream/dotfiles/blob/main/images/wallpaper.png?raw=true",
		description: (
			<span>
				This is a duotone i3wm theme. I installed i3wm because
				for a while, my mouse wasn't working properly, so I had to use the keyboard to navigate. 
			</span>
		),
		link: "https://github.com/kalecream/dotfiles",
		repoName: "dotfiles",
		technology: [
			<a href="https://i3wm.org/">i3wm</a>,
			<a href="https://manpages.ubuntu.com/manpages/bionic/en/man1/rofi.1.html">
				Rofi
			</a>,
			<a href="https://sw.kovidgoyal.net/kitty/kitty">Kitty</a>,
			<a href="https://feh.finalrewind.org/">Feh</a>,
		],
		language: ["Bash", "Python"],
		created: "2022-07-07",
		updated: "",
	},
	{
		title: "Morning Messages",
		image:
			"https://images.unsplash.com/photo-1523145667259-072b00e52735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
		description: (
			<span>
				A simple python script to automate the process of sending my boyfriend
				current news articles and cute kaomoji-filled messages in the morning
				via Whatsapp Web.
			</span>
		),
		link: "https://github.com/kalecream/morning-messages",
		repoName: "morning-messages",
		technology: [
			<a href="https://pywhatkit.herokuapp.com/">PyWhatKit</a>,
			<a href="https://geopy.readthedocs.io/en/stable/">GeoPy</a>,
			<a href="https://openweathermap.org/">OpenWeatherMap API</a>,
		],
		language: ["Python"],
		created: "2021-11-15",
	},
	{
		title: "Trality Bots",
		image:
			"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
		description: (
			<span>
				I'm almost completely new to trading, but I've been floundering in
				making crypto trading bots for the last year or so. I decided to take my
				attempts public.
			</span>
		),
		link: "https://github.com/kalecream/TralityTestBots_v2",
		repoName: "TralityTestBots_v2",
		technology: [<a href="https://www.trality.com/">Trality</a>],
		language: ["Python"],
		created: "2022-11-07",
	},
    {
        title: "Kalecream Website",
        description: (<span>I've rebuilt this website many different times in plain Html/Css/Js, Wordpress and now in Typescript.</span>),
        link: "/",
        technology: [ <a href="https://nextjs.org/">Next.js</a>, <a href="https://threejs.org/">Three.js</a>, <a href="https://greensock.com/gsap/">GSAP</a>], 
        language: ["TypeScript", "MDX"],
    }
];

export default Projects;