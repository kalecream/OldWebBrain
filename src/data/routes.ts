export interface PageRoutesProps {
    route: string;
    date: Date;
    description?: string;
    priority: number;
}

export const PageRoutes:PageRoutesProps[] = [
    {
        route: '/',
        date: new Date(2024, 7, 31),
        description: 'Index',
        priority: 1.0,

    },
    {
        route: '/about',
        date: new Date(2024, 7, 31),
        priority: 0.4,

    },
    {
        route: '/amateur-radio',
        date: new Date(2024, 7, 31),
        priority: 0.3,

    },
    {
        route: '/blog',
        date: new Date(2024, 7, 31),
        priority: 0.5,

    },
    {
        route: '/c25k',
        date: new Date(2024, 7, 31),
        priority: 0.1,

    },
    {
        route: '/changelog',
        date: new Date(2024, 7, 31),
        priority: 0.8,

    },
    {
        route: '/colophon',
        date: new Date(2024, 7, 31),
        priority: 0.3,

    },
    {
        route: '/contact',
        date: new Date(2024, 7, 31),
        priority: 0.8,

    },
    {
        route: '/now',
        date: new Date(2024, 7, 31),
        priority: 0.4,

    },
    {
        route: '/professional',
        date: new Date(2024, 7, 31),
        priority: 0.4,

    },
    {
        route: '/projects',
        date: new Date(2024, 7, 31),
        priority: 0.8,

    },
    {
        route: '/read',
        date: new Date(2024, 7, 31),
        priority: 0.2,

    },
    {
        route: '/relationships',
        date: new Date(2024, 7, 31),
        priority: 0.4,

    },
    {
        route: '/relationships/with-family',
        date: new Date(2024, 7, 31),
        priority: 0.4,

    },
    {
        route: '/relationships/with-friends',
        date: new Date(2024, 7, 31),
        priority: 0.4,

    },
    {
        route: '/relationships/with-romance',
        date: new Date(2024, 7, 31),
        priority: 0.4,

    },
    {
        route: '/relationships/with-self',
        date: new Date(2024, 7, 31),
        priority: 0.4,

    },
    {
        route: '/relationships/skip',
        date: new Date(2024, 7, 31),
        priority: 0.4,

    },
    {
        route: '/relationships/sitemap',
        date: new Date(2024, 8, 1, 2,7),
        priority: 0.4,

    },
    
];