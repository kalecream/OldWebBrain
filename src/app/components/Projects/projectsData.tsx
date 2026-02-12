import { ReactNode } from "react";

export interface ProjectStructure {
  id: string;
  display: boolean;
  category?: string;
  type: string;
  title: string;
  image?: string;
  description: ReactNode;
  link?: string;
  repoName?: string;
  sourceLink?: string;
  technology: string[];
  language?: string[];
  created: string;
  updated?: string;
  status?: string;
}

export const Projects: ProjectStructure[] = [
  {
    id: "001",
    display: true,
    title: "Blue Orange",
    image: "/img/project/001.webp",
    category: "code",
    type: "customisation",
    status: "ongoing",
    description: (
      <span>
        This is a duotone i3wm theme. I installed i3wm because for a while, my mouse was not working properly, so I had
        to use the keyboard to navigate. Nowadays, I like it because it is fast, minimal and my mice still keep dying on
        me.
      </span>
    ),
    repoName: "dotfiles",
    technology: ["i3wm", "rofi", "feh", "polybar"],
    language: ["Bash", "Python"],
    created: "2022-07-07",
    updated: "2023-08-13",
  },
  {
    id: "002",
    display: true,
    title: "Morning Messages",
    category: "code",
    type: "automation",
    status: "completed",
    description: (
      <span>
        A simple python script to automate the process of sending current news articles and cute kaomoji-filled messages
        in the morning via Whatsapp Web to a past partner.
      </span>
    ),
    repoName: "morning-messages",
    technology: ["PyWhatKit", "GeoPy", "OpenWeatherMap"],
    language: ["Python"],
    created: "2021-11-15",
  },
  {
    id: "003",
    display: true,
    title: "This Website",
    category: "code",
    type: "website",
    image: "/img/project/003.png",
    status: "ongoing",
    description: (
      <span>
        I have rebuilt the website many different times in; plain HTML, Javascript and CSS combination, Wordpress, and now
        in React Typescript on NextJS.
      </span>
    ),
    repoName: "OldWebBrain",
    link: "https://www.yunghigue.com/",
    technology: ["Next.js", "React-Three-Fiber", "GSAP"],
    created: "2022-08",
    language: ["React", "TypeScript", "MDX"],
  },
  {
    id: "005",
    display: true,
    title: "Swagger Login",
    category: "code",
    status: "completed",
    type: "test",
    link: "https://sphenery.vercel.app/login",
    image: "/img/project/005.png",
    description: (
      <span>
        A login/registration form with refresh token done for a test of a Swagger API for a Front-End take-home test.
      </span>
    ),
    technology: ["Swagger SMTest"],
    repoName: "Sphenery",
    language: ["React", "Typescript"],
    created: "2023-07-23",
  },
  {
    id: "007",
    display: true,
    title: "Bite-Sized Binge Logo",
    category: "illustration",
    type: "assets",
    image: "/img/project/007.webp",
    status: "completed",
    description: (
      <span>
        A 3D logo I made for a podcast idea to talk about the media I consume each week. The podcast has been put on
        hiatus for now.
      </span>
    ),
    technology: ["Blender3D"],
    language: null,
    created: "2023-01-01",
  },
  {
    id: "008",
    display: true,
    title: "Under Construction",
    category: "illustration",
    type: "assets",
    image: "/img/project/008.webp",
    status: "completed",
    description: <span>A placeholder image I made for when my website was first under construction.</span>,
    technology: ["Blender3D"],
    language: null,
    created: "2022-11-03",
  },
  {
    id: "009",
    display: true,
    title: "Strawberry Milkshake",
    category: "illustration",
    type: "practice",
    image: "/img/project/009.webp",
    status: "completed",
    description: <span>A 3D render of a strawberry milkshake I made after for a dailySketch prompt.</span>,
    technology: ["Blender3D"],
    language: null,
    created: "2022-11-12",
  },
  {
    id: "010",
    display: true,
    title: "Concrete Kiln",
    category: "illustration",
    type: "plan",
    image: "/img/project/010.webp",
    status: "completed",
    description: (
      <span>
        A mockup of a concrete kiln I planned to make to experiment with making pottery at home. This illustration is to
        scale.
      </span>
    ),
    language: null,
    technology: ["Blender3D"],
    created: "2022-11-12",
  },
  {
    id: "011",
    display: true,
    title: "Kinder Blocks",
    category: "illustration",
    type: "assets",
    image: "/img/project/011.webp",
    status: "completed",
    description: (
      <span>This render was done as a late entry for a competition on Twitter to create a brand for baby toys.</span>
    ),
    technology: ["Blender3D"],
    language: null,
    created: "2022-11-12",
  },
  {
    id: "012",
    display: true,
    title: "Queen",
    category: "illustration",
    type: "practice",
    image: "/img/project/012.webp",
    status: "completed",
    description: <span>A practice render I made for the idea of a new queen coming onto a chess board.</span>,
    technology: ["Blender3D"],
    language: null,
    created: "2022-11-12",
  },
  {
    id: "015",
    display: true,
    title: "Ceremonial Bee Sword",
    category: "illustration",
    type: "Swordtember",
    image: "/img/project/015.webp",
    status: "completed",
    description: (
      <span>
        A ceremonial bee sword with an obsidian blade and pearl wings made for Swordtember 2024. The prompt was
        Winged.
      </span>
    ),
    technology: ["Blender3D"],
    created: "2024-09-01",
    link: "/practice/swordtember/1",
  },
  {
    id: "016",
    display: true,
    title: "Eclipse Poster",
    category: "illustration",
    type: "poster",
    image: "https://i.imgur.com/DSbuF74.png",
    status: "completed",
    description: <span>Poster made for an astronomy event viewing the 2023 Annular Solar Eclipse.</span>,
    technology: ["Photopea"],
    created: "2023-10-10",
  },
  {
    id: "017",
    display: true,
    title: "Meteor Shower Poster",
    category: "illustration",
    type: "poster",
    image: "https://i.imgur.com/WC7RHhi.jpeg",
    status: "completed",
    description: <span>Poster made for an astronomy event viewing the 2019 Perseids Meteor Shower.</span>,
    technology: ["Photopea"],
    created: "2019-08-09",
  },
  {
    id: "018",
    display: true,
    title: "AAJ Guest Poster",
    category: "illustration",
    type: "poster",
    image: "https://i.imgur.com/c4DSQIp.jpeg",
    status: "completed",
    description: (
      <span>
        Poster for the Astronomical Association of Jamaica guest presentation on neutron stars and black holes.
      </span>
    ),
    technology: ["Photopea"],
    created: "2021-05-20",
  },
  {
    id:"019",
    display: true,
    title: "[Redacted] Rolling Papers",
    category: "code",
    type: "Web Design",
    image: "https://i.imgur.com/AkuiBtk.png",
    status: "completed",
    description: (
      <span></span>
    ),
    technology: ["Figma", "WordPress"],
    created: "2025-06-06",
  },
  {
    id: "020",
    display: true,
    title: "Habitica Eisenhower Matrix",
    category: "code",
    image: "https://i.imgur.com/WhD69pY.png",
    link: "https://github.com/Vilhelm-Ian/Eisenhower_matrix_habitica",
    type: "Web Design",
    status: "ongoing",
    description: (<span>I collaborated with someone extending Habitica to give a design lift to their to-do list.</span>),
    technology: ["Figma", "React", "Typescript"],
    created: "2022-10-06",
  },
  {
    id: "021",
    display: true,
    title: "Balkim Media Graduation Photoshoot",
    category: "illustration",
    type: "poster",
    status: "completed",
    image: "https://i.imgur.com/wc2UpMT.jpeg",
    description: (<span></span>),
    technology: ["Photopea"],
    created: "2025-10-18",
  }
];

export default Projects;
