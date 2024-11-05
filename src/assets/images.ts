import Chess from "./images/3D/chess__alternate_view__by_kalecream.jpg";
import Park from "./images/3D/park_by_kalecream.jpg";
import UnderConstruction from "./images/Under_Construction_by_kalecream.webp";

const ThreeD = [Chess, Park, UnderConstruction];

export { ThreeD };

// interface GalleryData {
//   id: number;
//   src: StaticImageData | string;
//   name: string;
//   desc: string;
//   tags: string[];}

const GPhotos: GalleryData[] = [
  {
    year: '2023',
    month: '05',
    id: 0,
    src: "https://i.imgur.com/jCQIISQ.jpeg",
    name: "Punisher",
    desc: "A stray cat who occasionally visits me. She has a kitten and when she was named, I was unaware of her sex. Still, Punisher fits her.",
    tags: ["banana", "sunset"],
  },
  {
    id: 1,
    year: '2024',
    month: '06',
    src: "https://i.imgur.com/nD4m8JX.jpeg",
    name: "Books",
    desc: "Trees in black and white",
    tags: ["trees", "black and white"],
  },
  {
    id: 2,
    year: '2024',
    month: '06',
    src: "https://imgur.com/Sd2DuQz.jpeg",
    name: "Earring",
    desc: "A close-up of an earring",
    tags: ["earring", "jewelry"],
  },
  {
    id: 4,
    year: '2024',
    month: '08',
    src: "https://i.imgur.com/p3ApPPh.jpeg",
    name: "Lunch Trio",
    desc: "Three lunch dishes",
    tags: ["lunch", "food"],
  },
  {
    id: 5,
    year: '2024',
    month: '08',
    src: "https://i.imgur.com/nIkVHY9.jpeg",
    name: "Flamingo",
    desc: "I went to the Zoo and finally got to see a Flamingo with my own two eyes.",
    tags: ["okra", "vegetable"],
  },
  {
    id: 6,
    year: '2024',
    month: '08',
    src: "https://i.imgur.com/YvnWlaW.jpeg",
    name: "Wire-Wrapping",
    desc: "A pineapple on a table",
    tags: ["pineapple", "fruit"],
  },
  {
    id: 10,
    year: '2024',
    month: '06',
    src: "https://i.imgur.com/Z4rJL6X.jpeg",
    name: "Sunset",
    desc: "A sunset over the ocean",
    tags: ["sunset", "ocean"],
  },
];

export { GPhotos };

import BiteSizedBingePoster from "./images/bitesizedbinge.webp";
import { GalleryData } from "@app/about/Gallery";

const OtherMultimediaProjectPictures = [BiteSizedBingePoster];

export { OtherMultimediaProjectPictures };
