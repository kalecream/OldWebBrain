"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Reads from "@app/about/Reads";
import { BacklogGraph } from "./backlogGraph";
import Books from "@data/books";
import styles from "./books.module.scss";

const AboutBooksSection = () => {
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
    );
};
    
export default AboutBooksSection;
