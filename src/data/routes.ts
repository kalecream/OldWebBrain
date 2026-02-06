export interface PageRoutesProps {
  route: string;
  date: Date;
  description?: string;
  priority: number;
  category?: string;
  subcategory?: string;
}

export const PageRoutes: PageRoutesProps[] = [
  {
    route: "/",
    date: new Date(2024, 7, 31),
    description: "Index",
    priority: 1.0,
    category: "main",
  },
  {
    route: "/about",
    date: new Date(2024, 10, 3, 12, 22),
    priority: 0.4,
    category: "personal",
  },
  {
    route: "/amateur-radio",
    date: new Date(2024, 7, 31),
    priority: 0.3,
    category: "notes",
    subcategory: "hobbies",
  },
  {
    route: "/blog",
    date: new Date(2024, 7, 31),
    priority: 0.5,
    category: "personal",
  },
  {
    route: "/fitness",
    date: new Date(2026, 1, 17, 0, 11),
    priority: 0.2,
    category: "personal",
  },
  {
    route: "/changelog",
    date: new Date(2024, 7, 31),
    priority: 0.8,
  },
  {
    route: "/colophon",
    date: new Date(2024, 10, 4, 12, 22),
    priority: 0.3,
  },
  {
    route: "/contact",
    date: new Date(2024, 7, 31),
    priority: 0.8,
    category: "personal",
  },
  {
    route: "/now",
    date: new Date(2024, 7, 31),
    priority: 0.4,
    category: "personal",
  },
  {
    route: "/privacy",
    date: new Date(2024, 8, 17, 11, 7),
    priority: 0.3,
  },
  {
    route: "/professional",
    date: new Date(2024, 8, 17, 9, 13),
    priority: 0.9,
  },
  {
    route: "/projects",
    date: new Date(2024, 7, 31),
    priority: 0.8,
  },
  {
    route: "/read",
    date: new Date(2024, 7, 31),
    priority: 0.2,
    category: "personal",
  },
  {
    route: "/relationships",
    date: new Date(2024, 10, 4, 19, 2),
    priority: 0.4,
  },
  {
    route: "/relationships/with-family",
    date: new Date(2024, 7, 31),
    priority: 0.4,
  },
  {
    route: "/relationships/with-friends",
    date: new Date(2024, 7, 31),
    priority: 0.4,
  },
  {
    route: "/relationships/with-romance",
    date: new Date(2024, 10, 4, 19, 2),
    priority: 0.4,
  },
  {
    route: "/relationships/with-self",
    date: new Date(2024, 8, 14, 4, 49),
    priority: 0.4,
  },
  {
    route: "/relationships/with-self/breathe",
    date: new Date(2024, 8, 14, 4, 49),
    priority: 0.5,
  },
  {
    route: "/skip",
    date: new Date(2024, 8, 4, 8, 13),
    priority: 0.4,
    category: "personal",
  },
  {
    route: "/human-sitemap",
    date: new Date(2024, 10, 11, 20, 7),
    priority: 0.4,
  },
  {
    route: "/swordtember",
    date: new Date(2024, 8, 1, 2, 7),
    priority: 0.4,
  },
];
