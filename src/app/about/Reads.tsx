import Books from "@data/books";
import Link from "next/link";
import styles from "./books.module.scss";

const Reads = ({ status, limit }: { status: string; limit?: number }) => {
  const sorting =
    status == "Read"
      ? (a, b) => new Date(b.finished).getTime() - new Date(a.finished).getTime()
      : status == "Want"
        ? (a, b) => new Date(b.started).getTime() - new Date(a.started).getTime()
        : (a, b) => new Date(a.started).getTime() - new Date(b.started).getTime();
  return (
    <div className={styles.reading}>
      {limit
        ? Books.sort(sorting)
            .filter((book) => book.status == status)
            .slice(0, limit)
            .map((book) => {
              let searchURL = `https://www.duckduckgo.com/?hps=1&q=${book.title}+${book.author}`;
              return (
                <Link
                  title={book.title}
                  key={book.title}
                  className={styles.books}
                  href={searchURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.book}>
                    <img src={book.cover} alt={book.title} />
                  </div>
                </Link>
              );
            })
        : Books.sort(sorting)
            .filter((book) => book.status === status)
            .map((book) => {
              let searchURL = `https://www.duckduckgo.com/?q=${book.title}+${book.author}`;
              return (
                <Link
                  title={book.title}
                  key={book.title}
                  className={styles.books}
                  href={searchURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.book}>
                    <img src={book.cover} alt={book.title} />
                  </div>
                </Link>
              );
            })}
    </div>
  );
};

export default Reads;
