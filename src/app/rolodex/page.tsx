import { InteractiveCard } from "@components/InteractiveCard";
import { YT } from "@data/youtube";
import Link from "next/link";

interface BookmarkProps {
  url: string;
  title: string;
  description?: string;
  tags?: string[];
  type: string;
}

const Bookmarks: BookmarkProps[] = [
  {
    url: "https://grimgrains.com/site/home.html",
    title: "Grim Grains",
    description: "A vegan cooking blog with cute illustrations.",
    tags: ["cooking", "food"],
    type: "website",
  },
  {
    title: "Kill the Newsletter",
    url: "https://kill-the-newsletter.com/",
    description: "Convert email newsletters into RSS.",
    type: "website",
  },
  {
    url: "https://jzhao.xyz/posts/a-failure-resume",
    title: "Failure Resume",
    tags: [""],
    description: 'A  document of the ways you’ve worked hard towards your goals and accomplishments."',
    type: "article",
  },
  {
    url: "https://memo.barrucadu.co.uk/personal-finance.html",
    title: "Personal Finance",
    tags: [""],
    description: "A paradigm shift on how I was viewing my personal finances and a cool new blog to follow..",
    type: "webpage",
  },
  {
    url: "https://www.wilsonquarterly.com/quarterly/_/whats-the-best-way-to-die",
    title: "What's the best way to die?",
    description: "An article I found on physician-assisted suicide.",
    tags: ["death", "suicide"],
    type: "article",
  },
  {
    url: "https://www.tasteatlas.com/",
    type: "website",
    title: "Taste Atlas",
    tags: ["cooking", "food"],
    description: "A map of recipes from all over the world",
  },
  {
    title: "Hourly Rate Calculator",
    url: "https://clockify.me/hourly-rate-calculator",
    type: "website",
  },
  {
    title: "Dither Me This!",
    url: "https://doodad.dev/dither-me-this/",
    description: "",
    type: "website",
  },
];

const Rolodex = () => {
  return (
    <>
      <section id="rolodex">
        <h1>Rolodex</h1>
        <p className="prose">These are some bookmarks for pages & media I've enjoyed on the net.</p>
      </section>
      <section>
        <ol className="prose">
          {Bookmarks.map((bookmark) => (
            <Link href={bookmark.url} key={bookmark.url}>
              <li>
                <b>{bookmark.title}</b> {bookmark.description}
              </li>
            </Link>
          ))}
        </ol>
      </section>
      <section>
        <h2>Youtube</h2>
        <ol className="prose">
          {YT.map((bookmark) => (
            <Link href={bookmark.url} key={bookmark.url}>
              <li>
                <b>{bookmark.title}</b> {bookmark.description}
              </li>
            </Link>
          ))}
        </ol>
      </section>
    </>
  );
};

export default Rolodex;
