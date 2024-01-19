export interface WorkType {
    company: string,
    title: string,
    location: string,
    type: string,
    languages? :string[]
    technologies: string[],
    started: string,
    ended?: string | null,
    points : string[],
};

export interface OrgType {
    org: string,
    commitee: string,
    started?:string,
    ended?:string,
};

export const Organization:OrgType[] = [
    {
        org: "Astronomical Assosciation of Jamaica",
        commitee: "Public Relations",
        started: "2018-01-01",
        ended: "2019-01-01",
    },
];

export const PastJobs:WorkType[] = [
    {
        company: "Roger Irvine",
        title: "Personal Assistant",
        location: "Onsite",
        type: "Contractor",
        technologies: ["Google Suite"],
        started: "2018-01-02",
        ended: "2022-03-01",
        points: [
            "Responsibility for the preparation of personal and business documents; confidential filling & maintaining calendars and reminders for internal/external meetings, appointments, special events, and visitors.",
            "Handled all tech requests/troubleshooting: Outlook, Desktops, and Phones.",
            "Maintaining stock of office and tech supplies for the office.",
            "First point of contact with patients and doctor.",
            "Tracking office income via an Excel spreadsheet for tax purposes.",
            "Providing administrative support including management of mail, phone calls, filing, etc.",
            "Liaison between various offices and agencies regarding patients.",
            "Implementing an Electronic Medical Record system to eliminate paper usage. "
        ]
    },
    {
        company: "KaleCream LLC",
        title: "Front-End Web Developer",
        location: "Hybrid",
        type: "Owner",
        started: "2016-10-01",
        languages: ["Python", "TypeScript", "SCSS"],
        technologies: ["Reactjs", "WordPress", "Nextjs", "Squarespace", "Webpack", "DigitalOcean", "AWS"],
        points: ["Designing static webpages from scratch.", "Modifying WordPress themes for retail businesses and setting up their Google Analytics dashboards.", "Interviewing clients to create wireframes and a brand style guide then designing responsive layouts in Figma following UI/UX best practices. ","After client confirmation, creating the website using the React.js framework or HTML5, SCSS, and Javascript. " ," After project completion, providing documentation to the clients in the form of a knowledge management database or video tutorials."]
    },
    {
        company: "Trality GmbH",
        title: "Community & Support Specialist | Jr Front-End Web Developer",
        location: "Remote",
        type: "Contractor",
        started: "2021-09-01",
        ended: "2023-07-31",
        languages: ["TypeScript", "Python"],
        technologies: ["Discord", "Nodejs", "Reactjs"],
        points: [
            "Provided 1st and 2nd tier technical support to end-users, resolving issues related to the platform.",
            "Escalated unresolved issues to the appropriate internal teams.",
            "Collected and reported user feedback to improve the quality of our product and service.",
            "Created/changed responsive web pages and components using CSS and React Typescript."
        ]
    }
];
