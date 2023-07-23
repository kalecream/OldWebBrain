const Projects = [
  {
    id: "001",
    display: true,
    title: "Blue Orange",
    image: "/img/01_BlueOrange.png",
    description: (
      <span>
        This is a duotone i3wm theme. I installed i3wm because for a while, my
        mouse wasn't working properly, so I had to use the keyboard to navigate.
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
    id: "002",
    display: true,
    title: "Morning Messages",
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
    id: "003",
    display: true,
    title: "Kalecream Website",
    description: (
      <span>
        I've rebuilt this website many different times in plain Html/Css/Js,
        Wordpress and now in Typescript.
      </span>
    ),
    technology: [
      <a href="https://nextjs.org/">Next.js</a>,
      <a href="https://threejs.org/">Three.js</a>,
      <a href="https://greensock.com/gsap/">GSAP</a>,
    ],
    language: ["TypeScript", "MDX"],
  },
  {
    id: "004",
    display: true,
    title: "GPT-4 Record",
    description: (
      <span>
        A one-hour paid project to accept a 800 word prompt, perform a specfic action with the prompt and use that output as a second prompt. Both prompts were then saved to an ordinary text file.
      </span>
    ),
    technology: [
      <a href="https://openai.com/blog/openai-api/">OpenAI API</a>,
    ],
    language: ["Python"],
    created: "2023-05-30",
  },
  {
    id: "005",
    display: true,
    title: "Swagger Login Test",
    description: (
      <span>
        A register/login form done for a test of the Swagger API.
      </span>
    ),
    technology: [
      <a href="https://sphenery.com/swagger/index.html">Swagger SMTest</a>
    ],
    language: ["React", "Typescript"],
    created: "2023-07-23"
  }
];

export default Projects;
