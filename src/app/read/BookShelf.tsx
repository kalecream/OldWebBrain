"use client";
import { FC, useState } from "react";
import Link from "next/link";
import Books from "@data/books";
import styles from "./bookshelf.module.scss";
import bookStyle from "../about/books.module.scss";

export const extractGenres = () => {
  const categoriesSet = new Set<string>();
  Books.filter((book) => book.status == "Read").forEach((b) => {
    b.genre.map((g) => {
      categoriesSet.add(g);
    });
  });
  return Array.from(categoriesSet);
};

export const BookShelf: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleTabChange = (category: string) => {
    setActiveCategory(category);
  };

  const categories = extractGenres();

  const readBooks = Books.filter((book) => book.status === "Read").sort(
    (a, b) => new Date(b.finished).getTime() - new Date(a.finished).getTime(),
  );
  const wantToReadBooks = Books.filter((book) => book.status === "Want").sort(
    (a, b) => new Date(b.added).getTime() - new Date(a.added).getTime(),
  );

  const filteredBooks =
    activeCategory === "All"
      ? [...readBooks].sort((a, b) => new Date(b.finished).getTime() - new Date(a.finished).getTime())
      : readBooks
          .filter((project) => project.genre.includes(activeCategory))
          .sort((a, b) => new Date(b.finished).getTime() - new Date(a.finished).getTime());

  return (
    <section>
      <details className={styles.bookDetails} id="want">
        <summary>
          <h1>{wantToReadBooks.length} Books To Read</h1>
        </summary>
        <div className="bookshelf flex">
          {wantToReadBooks.map((book) => (
            <Link
              href={`https://www.duckduckgo.com/search?q=${book.title}+${book.author}`}
              target="_blank"
              rel="noopener noreferrer"
              key={book.title}
              className={bookStyle.books}
            >
              <div className={bookStyle.book}>
                <img
                  src={book.cover}
                  alt={book.title}
                  title={book.summary}
                  style={{ width: "200px", height: "300px" }}
                />
              </div>
            </Link>
          ))}
        </div>
      </details>
      <details open className={styles.bookDetails} id="read">
        <summary>
          <h1>{readBooks.length} Read Books</h1>
        </summary>
        <div className={`flex items-center ` + styles["book-tabs"]}>
          <button
            className={`${styles["book-tab"] + ` glassmorphic`} ${activeCategory === "All" ? styles["active"] : ""}`}
            onClick={() => handleTabChange("All")}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles["book-tab"] + ` glassmorphic`} ${
                activeCategory === category ? styles["active"] : ""
              }`}
              onClick={() => handleTabChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="bookshelf pancake">
          {filteredBooks.map((book) => (
            <Link
              href={`https://www.duckduckgo.com/search?q=${book.title}+${book.author}`}
              target="_blank"
              rel="noopener noreferrer"
              key={book.title}
              className={bookStyle.books}
            >
              <div className={bookStyle.book} style={{ margin: "0", padding: "0" }}>
                <img
                  src={book.cover}
                  alt={book.title}
                  title={book.summary}
                  style={{ width: "200px", height: "300px" }}
                />
              </div>
            </Link>
          ))}
        </div>
      </details>
    </section>
  );
};
