import { ReactNode } from "react";

export type PortfolioCategory = 'development' | 'design';

export type DevSubCategory =
    | 'all'
    | 'full-stack'
    | 'frontend'
    | 'backend'
    | 'customisation'
    | 'automation'
    | 'scripts';

export type IllustrationSubCategory =
    | 'all'
    | 'web-design'
    | 'branding'
    | 'poster'
    | 'asset'
    | 'mock-up'
    ;

export type SubCategory =
    | DevSubCategory
    | IllustrationSubCategory;

export const SUB_CATEGORIES: Record<string, { value: string; label: string }[]> = {
    'development': [
        { value: 'all', label: 'All' },
        { value: 'full-stack', label: 'Full-Stack' },
        { value: 'frontend', label: 'Frontend' },
        { value: 'backend', label: 'Backend' },
        { value: 'customisation', label: 'Customisation' },
        { value: 'automation', label: 'Automation' },
        { value: 'scripts', label: 'Script' }
    ],
    design: [
        { value: 'all', label: 'All' },
        { value: 'web-design', label: 'Web Design' },
        { value: 'poster', label: 'Poster' },
        { value: 'branding', label: 'Branding' },
        { value: 'asset', label: 'Assets' },
        { value: 'mock-up', label: 'Mock-Up' },
    ],
};

export interface StarFormat {
    situation: string;
    task: string;
    action: string;
    result: string;
}

export interface Project {
    id: string;
    title: string;
    date: string;
    created: string;
    updated?: string;
    category: PortfolioCategory;
    subCategory: SubCategory[];
    brief: string;
    image?: string;
    imageAlt: string;
    technologies?: string[];
    languages?: string[];
    star?: StarFormat;
    description?: string;
    liveUrl?: string;
    repoUrl?: string;
    hasDetailPage?: boolean;
    galleryImages?: {
        src: string;
        alt: string;
        caption?: string;
        orientation?: 'landscape' | 'portrait' | 'square';
    }[];
    extendedDescription?: ReactNode;
}

export const PROJECTS: Project[] = [

    {
        id: 'wd-001',
        title: 'Blue Orange',
        date: 'July 2022',
        created: "2022-07-07",
        updated: "2023-08-13",
        category: 'development',
        subCategory: ['full-stack', 'customisation'],
        brief: "This is a duotone i3wm theme. I installed i3wm because for a while, my mouse was not working properly, so I had to use the keyboard to navigate. Nowadays, I like it because it is fast, minimal and my mice still keep dying on me.",
        image: '/img/project/001.webp',
        imageAlt: '',
        technologies: ["i3wm", "rofi", "feh", "polybar"],
        languages: ["Bash", "Python"],
        repoUrl: 'https://github.com/kalecream/dotfiles',
        hasDetailPage: false,
    },
    {
        id: 'wd-002',
        title: 'Morning Messages',
        date: 'November 2021',
        created: "2021-11-15",
        category: 'development',
        subCategory: ['scripts', 'automation'],
        brief: '  A simple python script to automate the process of sending current news articles and cute kaomoji-filled messages in the morning via Whatsapp Web to a past partner.',
        imageAlt: '',
        technologies: ["PyWhatKit", "GeoPy", "OpenWeatherMap"],
        languages: ["Python"],
        repoUrl: 'https://github.com/kalecream/morning-messages',
    },
    {
        id: 'wd-003',
        title: 'Yung Higue',
        date: 'August 2022',
        created: "2022-08-01",
        category: 'development',
        subCategory: ['backend', 'frontend', 'full-stack'],
        brief: ' I have rebuilt the website many different times in; plain HTML, Javascript and CSS combination, Wordpress, and now in React Typescript on NextJS.',
        image: '/img/project/003.png',
        imageAlt: '',
        technologies: ["Next.js", "React-Three-Fiber"],
        languages: ['TypeScript', 'React'],
        repoUrl: 'https://github.com/kalecream/OldWebBrain',
        liveUrl: "https://www.yunghigue.com/",
    },
    {
        id: 'wd-004',
        title: 'Login System',
        date: 'July 2023',
        created: "2023-07-23",
        category: 'development',
        subCategory: ['frontend'],
        brief: ' A login/registration form with refresh token done for a test of a Swagger API for a Front-End take-home test.',
        image: '/img/project/005.png',
        imageAlt: '',
        technologies: ["Swagger SMTest"],
        languages: ['TypeScript', 'React'],
        repoUrl: 'https://github.com/kalecream/Sphenery',
        liveUrl: "https://sphenery.vercel.app/login",
        hasDetailPage: true,
        extendedDescription:
            ' A login/registration form with refresh token done for a test of a Swagger API for a Front-End take-home test.',
    },
    {
        id: 'il-001',
        title: 'Bite-Sized Binge',
        date: 'January 2023',
        category: 'design',
        subCategory: ['branding'],
        brief: ' A 3D logo I made for a podcast idea to talk about the media I consume each week. The podcast has been put on hiatus for now.',
        image: '/img/project/007.webp',
        imageAlt: '',
        technologies: ["Blender3D"],
        created: "2023-01-01",
    },
    {
        id: 'il-002',
        title: 'Under Construction',
        date: 'November 2022',
        created: "2022-11-03",
        category: 'design',
        subCategory: ['asset'],
        brief: 'A placeholder image I made for when my website was first under construction.',
        image: "/img/project/008.webp",
        technologies: ["Blender3D"],
        imageAlt: '',
    },
    {
        id: 'li-003',
        title: "Strawberry Milkshake",
        date: 'November 2022',
        created: "2022-11-12",
        category: 'design',
        subCategory: ['asset'],
        brief: 'A 3D render of a strawberry milkshake I made after for a dailySketch prompt.',
        image: "/img/project/009.webp",
        imageAlt: '',
        technologies: ['Blender3D'],
    },
    {
        id: 'li-004',
        title: "Concrete Kiln",
        date: 'November 2022',
        created: "2022-11-12",
        category: 'design',
        subCategory: ['mock-up'],
        brief: ' A mockup of a concrete kiln I planned to make to experiment with making pottery at home. This illustration is to scale.',
        image: "/img/project/010.webp",
        imageAlt: '',
        technologies: ['Blender3D'],
    },
    {
        id: '011',
        title: 'Kinder Blocks',
        date: 'November 2022',
        created: "2022-11-12",
        category: 'design',
        subCategory: ['asset'],
        brief: 'A late entry for a Twitter competition to create a brand for baby toys, rendered in Blender.',
        image: '/img/project/011.webp',
        imageAlt: 'Kinder Blocks baby toy brand 3D render',
        technologies: ['Blender3D'],
    },
    {
        id: '012',
        title: 'Queen',
        date: 'November 2022',
        created: "2022-11-12",
        category: 'design',
        subCategory: ['asset'],
        brief: 'A practice render exploring the idea of a new queen arriving on a chess board.',
        image: '/img/project/012.webp',
        imageAlt: 'Queen chess piece 3D render',
        technologies: ['Blender3D'],
    },
    {
        id: '015',
        title: 'Ceremonial Bee Sword',
        date: 'September 2024',
        created: "2024-09-01",
        category: 'design',
        subCategory: ['asset'],
        brief: 'A ceremonial bee sword with an obsidian blade and pearl wings, made for Swordtember 2024. Prompt: Winged.',
        image: '/img/project/015.webp',
        imageAlt: 'Ceremonial bee sword with obsidian blade and pearl wings, 3D render',
        technologies: ['Blender3D'],
        liveUrl: '/practice/swordtember/1',
    },
    {
        id: '016',
        title: 'Eclipse Poster',
        date: 'October 2023',
        created: "2023-10-10",
        category: 'design',
        subCategory: ['poster'],
        brief: 'Event poster for an astronomy viewing of the 2023 Annular Solar Eclipse.',
        image: 'https://i.imgur.com/DSbuF74.png',
        imageAlt: '2023 Annular Solar Eclipse astronomy event poster',
        technologies: ['Photopea'],
    },
    {
        id: '017',
        title: 'Meteor Shower Poster',
        date: 'August 2019',
        created: "2019-08-01",
        category: 'design',
        subCategory: ['poster'],
        brief: 'Event poster for an astronomy viewing of the 2019 Perseids Meteor Shower.',
        image: 'https://i.imgur.com/WC7RHhi.jpeg',
        imageAlt: '2019 Perseids Meteor Shower astronomy event poster',
        technologies: ['Photopea'],
    },
    {
        id: '018',
        title: 'AAJ Guest Poster',
        date: 'May 2021',
        created: "2021-05-12",
        category: 'design',
        subCategory: ['poster'],
        brief: 'Poster for an Astronomical Association of Jamaica guest presentation on neutron stars and black holes.',
        image: 'https://i.imgur.com/c4DSQIp.jpeg',
        imageAlt: 'AAJ guest presentation poster — neutron stars and black holes',
        technologies: ['Photopea'],
    },
    {
        id: '019',
        title: 'Fr*ss Rolling Papers',
        date: 'June 2025',
        created: '2025-06-01',
        category: 'design',
        subCategory: ['web-design'],
        brief: 'Website design and build for a rolling papers brand.',
        image: 'https://i.imgur.com/AkuiBtk.png',
        imageAlt: 'Fr*ss Rolling Papers website design',
        technologies: ['Figma'],
    },
    {
        id: '020',
        title: 'Habitica Eisenhower Matrix',
        date: 'October 2022',
        created: "2022-10-12",
        category: 'development',
        subCategory: ['frontend'],
        brief: 'Collaborated on a design lift for an Eisenhower matrix extension built on top of Habitica.',
        image: 'https://i.imgur.com/WhD69pY.png',
        imageAlt: 'Habitica Eisenhower Matrix to-do list interface',
        technologies: ['Figma', 'React', 'TypeScript'],
        repoUrl: 'https://github.com/Vilhelm-Ian/Eisenhower_matrix_habitica',
    },
    {
        id: '021',
        title: 'Balkim Media Graduation Photoshoot',
        date: 'October 2025',
        created: '2025-10-01',
        category: 'design',
        subCategory: ['poster'],
        brief: 'Poster design for a Balkim Media graduation photoshoot.',
        image: 'https://i.imgur.com/wc2UpMT.jpeg',
        imageAlt: 'Balkim Media graduation photoshoot poster',
        technologies: ['Photopea'],
    },
];

