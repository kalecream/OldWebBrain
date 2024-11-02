"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GPhotos } from "@assets/images";
import Books from "@data/books";
import Pods from "@data/pod";
import Reads from "@app/about/Reads";
import { BacklogGraph } from "./backlogGraph";
import styles from "./books.module.scss";
import button from "@styles/modules/Button.module.scss";
import NineGridGallery from "./Gallery";
import { CodersrankSummary } from "./CodersRank";
import TextScrambleComponent from "@app/components/TextScramble";

export const About = () => {

  const [Percentage, setPercentage] = useState([0, 0]);

  useEffect(() => {
    const Fiction = Books.filter((book) => book.genre.includes("Fiction") && !book.genre.includes("Non-Fiction"));

    const NonFiction = Books.filter((book) => book.genre.includes("Non-Fiction") && !book.genre.includes("Fiction"));

    const FictionPercentage = (Fiction.length / Books.length) * 100;
    const NonFictionPercentage = (NonFiction.length / Books.length) * 100;

    setPercentage([FictionPercentage, NonFictionPercentage]);
  }, []);

  let genreCount: { [genre: string]: number } = {};

  Books.forEach((book) => {
    if (book.genre) {
      book.genre.forEach((genre: string) => {
        if (genre !== "Fiction" && genre !== "Non-Fiction") {
          if (!genreCount[genre]) {
            genreCount[genre] = 1;
          } else {
            genreCount[genre]++;
          }
        }
      });
    }
  });

  let topGenres = Object.entries(genreCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([genre]) => genre)
    .join(", ");

  const wantToReadBooks = Books.filter((book) => book.status === "Want").sort(
    (a, b) => new Date(b.added).getTime() - new Date(a.added).getTime(),
  );

  const readBooks = Books.filter((book) => book.status === "Read").sort(
    (a, b) => new Date(b.finished).getTime() - new Date(a.finished).getTime(),
  );

  return (
    <section>
      <section style={{ marginTop: "auto", paddingTop: "auto", minHeight: "90vh" }}>
        <div className="flex column center">
          <div className="frame">
            <Image src={"https://i.imgur.com/sRfXe3l.jpeg"} alt="" height={200} width={350} style={{ margin: "auto", borderRadius: 0 }} />
          </div>
          <p className="prose" style={{ maxWidth: "35rem" }}>
            (Under construction) I've always disliked being asked "tell me a bit about yourself" in personal
            environments.I have the standard set of outputs from personality tests, but for the longest time, I
            struggled to figure out who I was.  The mundane truth turned out to be...
          </p>
          <Link href="/about#who" rel="me">
            <button className={button.vamp} role="button">
              <span className={button.text}>Who Are You?</span>
              <span className={button["vamp-background"]}></span>
              <span className={button["vamp-border"]}></span>

              {/* <!-- mask-border fallback --> */}
              <svg style={{ position: "absolute", width: "0", height: "0" }}>
                <filter id="remove-black-vamp" colorInterpolationFilters="sRGB">
                  <feColorMatrix
                    type="matrix"
                    values="1 0 0 0 0
                 0 1 0 0 0
                 0 0 1 0 0
                 -1 -1 -1 0 1"
                    result="black-pixels"
                  ></feColorMatrix>
                  <feComposite in="SourceGraphic" in2="black-pixels" operator="out"></feComposite>
                </filter>
              </svg>
            </button>
          </Link>
        </div>
      </section>
      <section id="who" className="stars" style={{ margin: 0, padding: 0, minHeight: "100vh" }}>
        <TextScrambleComponent />
      
      </section>
      <section className="stars" style={{ margin: 0, paddingTop: 0, minHeight: "90vh", paddingBottom: "6rem", marginBottom: "6rem" }}>
        <div className="flex center">
          <div>
            <NineGridGallery images={GPhotos} />
          </div>
        </div>
      </section>
      <section id="books" style={{ margin: 0, padding: 0, minHeight: "100vh", marginBottom: "6rem" }}>
        <div className={styles.paragraph}>
          <h1 className="text-center">Mostly, I read...</h1>
          <p className="prose ">
            I like to read to learn about the world around me or get laughs. I have{" "}
            <b>{Books.filter((book) => book.status != "Want").length}</b> books in my library, and I'm always looking
            for more. I prefer {Percentage[0] > Percentage[1] ? "Fiction" : "Non-Fiction"}, and read in a{" "}
            <b>
              {Percentage[0].toFixed(1)}% fiction + {Percentage[1].toFixed(1)}% non-fiction
            </b>{" "}
            split.
          </p>
          <div className="flex row align-items">
            <Link className="prose text-center" href="/read#read">
              <p>&#8592; Last ({readBooks.length})</p>
            </Link>
            {
              <Link
                title={readBooks[0].title}
                className={styles.books}
                href={`https://www.duckduckgo.com/?q=${readBooks[0].title}+${readBooks[0].author}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.book}>
                  <img src={readBooks[0].cover} alt={readBooks[0].title} />
                </div>
              </Link>
            }
            <Reads status="Want" limit={1} />
            <Link className="prose text-center" href="/read#want">
              <p>Next ({wantToReadBooks.length}) &#8594;</p>
            </Link>
          </div>
        </div>
        <p className="prose ">
          I'm currently reading <b>{Books.filter((book) => book.status === "Reading").length}</b> books, which you can
          see below. My 10 most frequently read book tags are: <b>{topGenres}.</b>
        </p>
        <Reads status="Reading" />
        <p className="prose ">
          The graph below is my book status backlog for the past rolling year. This graph ignores books from before then
          to ensure that I'm keeping up my desired reading pace of 24 books for every 12 months with 70/30 Fiction to
          Non-Fiction. I frequently fail my reading pace because the goal isn't the most important thing to me, the
          system is. I want to ensure I continue reading throughout the year to learn new things and expand my
          imagination.
        </p>
        <BacklogGraph />
      </section>

      <section
        className={styles.paragraph}
        id="podcasts"
        style={{ margin: 0, padding: 0, minHeight: "100vh", marginBottom: "6rem" }}
      >
        <div>
          <h1 className="text-center">& I'm always listening to a podcast!</h1>
          <p className="prose ">
            Mainly horror, sci-fi or comedy audiodramas, but I tend to listen to Non-Fiction or media-related Podcasts
            when I'm doing work. These have been my favourite listens so far:
          </p>
          <div className="flex row mx-1">
            {Pods.sort((a, b) => a.title.localeCompare(b.title)).map((p) => (
              <div key={p.url}>
                {p.url ? (
                  <Link href={p.url}>
                    <Image
                      width={150}
                      height={150}
                      src={p.cover}
                      alt={p.title}
                      title={p.title}
                      className={`outerglow`}
                    />
                  </Link>
                ) : (
                  <small>{p.title}</small>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className={styles.paragraph}
        id="games"
        style={{ margin: 0, padding: 0, minHeight: "100vh", marginBottom: "6rem" }}
      >
        <div>
          <h1 className="text-center">Occasionally, I play Games...</h1>

          <p className={` prose`}>
            My preference is playing short indie games or any games I physically own. I still play my physical Gameboy
            Advance, DS and an NES emulator. Not featured in the game gallery below is several untouched games from{" "}
            <Link className="link" href="https://steamcommunity.com/id/SabMedwinter">
              Steam
            </Link>{" "}
            and <Link href="https://sabmedwinter.itch.io/">Itch.io</Link>. These are the main games in my rotation
            nowadays:
          </p>
          <div className="flex row mx-1">
            <div className="">
              <Link href="https://www.legendsofidleon.com/">
                <Image
                  width={300}
                  height={150}
                  src={"https://imgur.com/APzegNB.png"}
                  alt="IdleOn"
                  className={`outerglow`}
                />
              </Link>
            </div>
            <div className="">
              <Link href="https://shatteredpixel.com/shatteredpd/">
                <Image
                  width={300}
                  height={150}
                  src="https://i.imgur.com/J6ExEz6.gif"
                  alt="Shattered Pixel Dungeon"
                  className={`outerglow`}
                />
              </Link>
            </div>
            <div className="">
              <Link href="https://en.wikipedia.org/wiki/Etrian_Odyssey_II">
                <Image
                  width={150}
                  height={150}
                  src="https://i.imgur.com/JbZW1N3.jpg"
                  alt="Etrian Odyssey II: Heroes of Lagaard"
                  className={`outerglow`}
                />
              </Link>
            </div>
            <div className="">
              <Link href="https://en.wikipedia.org/wiki/The_World_Ends_with_You">
                <Image
                  width={150}
                  height={150}
                  src="https://i.imgur.com/j6DsuvT.jpeg"
                  alt="World Ends With You"
                  className={`outerglow`}
                />
              </Link>
            </div>
            <div className="">
              <Link href="https://en.wikipedia.org/wiki/Advance_Wars">
                <Image
                  width={150}
                  height={150}
                  src="https://i.imgur.com/ofu3y5f.jpeg"
                  alt="Advanded Wars"
                  className={`outerglow`}
                />
              </Link>
            </div>

            <div className="">
              <Link href="https://en.wikipedia.org/wiki/Professor_Layton_and_the_Curious_Village">
                <Image
                  width={150}
                  height={150}
                  src="https://i.imgur.com/NsBAPjW.jpeg"
                  alt="Professor LAyton and The Curious Village"
                  className={`outerglow`}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className={styles.paragraph}
        id="code"
        style={{ margin: 0, padding: 0, minHeight: "100vh", marginBottom: "6rem" }}
      >
        <h1 className="text-center">And, I code...</h1>
        <CodersrankSummary />
        <p className="prose">
          Data from <Link href="https://profile.codersrank.io/user/kalecream">CodersRank.io</Link>{" "}
        </p>
      </section>
    </section>
  );
};

export default About;
