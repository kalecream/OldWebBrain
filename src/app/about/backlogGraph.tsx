"use client";
import { FC, useEffect, useState } from "react";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
import Link from "next/link";
import Books from "@data/books";
import { WindowWidth } from "@utils/windowDimmensions";
import { GetMonthName } from "@utils/GetMonthName";
import styles from "./books.module.scss";

export interface BooksProps {
  title: string;
  author: string[] | string;
  published?: number | string;
  format?: string;
  genre: string | string[];
  rating?: number;
  status: string;
  review?: string;
  added?: string;
  started?: string;
  finished?: string;
  summary: string;
  cover?: string;
  pages?: number;
  minutes?: number;
}

export interface BookData {
  month: string;
  Started: number;
  Finished: number;
}

export const BacklogGraph: FC = () => {
  const [Data, setData] = useState<BookData[]>([]);

  useEffect(() => {
    const bookData: Record<string, { Started: number; Finished: number }> = {};
    let today = new Date();
    let RelativeLastYearAgo = new Date(today.getFullYear() - 1, today.getMonth() + 1, today.getDate());

    Books.forEach((book) => {
      let startMonth = null;
      let finishMonth = null;

      if (book.started && new Date(book.started) > RelativeLastYearAgo) {
        startMonth = new Date(book.started).getMonth();
      }

      if (book.finished && new Date(book.finished) > RelativeLastYearAgo) {
        finishMonth = new Date(book.finished).getMonth();
        if (finishMonth === startMonth) {
          startMonth = null;
        }
      }

      if (startMonth !== null) {
        bookData[startMonth] = bookData[startMonth] || {
          Started: 0,
          Finished: 0,
        };
        bookData[startMonth].Started += 1;
      }

      if (finishMonth !== null) {
        bookData[finishMonth] = bookData[finishMonth] || {
          Started: 0,
          Finished: 0,
        };
        bookData[finishMonth].Finished += 1;
        if (startMonth !== null) {
          bookData[finishMonth].Started -= 1;
        }
      }
    });

    // Prepare for the snowball effect!
    const cumulativeData: BookData[] = [];
    let cumulative = { Started: 0, Finished: 0 };

    let monthIndex = RelativeLastYearAgo.getMonth();

    for (let month = 0; month < 12; month++) {
      if (bookData[monthIndex]) {
        cumulative = {
          Started: bookData[monthIndex]?.Started + cumulative.Started || cumulative.Started,
          Finished: bookData[monthIndex]?.Finished + cumulative.Finished || cumulative.Finished,
        };
      }
      cumulativeData.push({
        month: new Date(RelativeLastYearAgo.getFullYear(), RelativeLastYearAgo.getMonth() + month).toLocaleString(
          "default",
          { month: "long" },
        ),
        ...cumulative,
      });

      monthIndex = (monthIndex + 1) % 12;
    }

    setData(cumulativeData);
  }, [Books]);

  const width = WindowWidth();

  return (
    <BarChart width={width > 1200 ? width - 400 : width - 100} height={300} data={Data} className={styles.backlogChart}>
      <XAxis dataKey="month" />
      {/* <YAxis domain={[0, 'dataMax + 3']} /> */}
      <Tooltip />
      <Bar dataKey="Started" stackId="a" fill="var(--primary)" />
      <Bar dataKey="Finished" stackId="a" fill="var(--secondary)" label={<CustomerBarLabel />} />
    </BarChart>
  );
};

const CustomerBarLabel: FC<any> = (props) => {
  const { x, y, width, height, value } = props;

  if (value <= 0) {
    return null;
  }

  return (
    <text x={x + width / 2} y={y} fill="var(--secondary)" fontSize="2rem" fontWeight={700} textAnchor="middle" dy={-6}>
      {value}
    </text>
  );
};

export const RandomBooks: FC = () => {
  const randomBooks = Books.filter((book) => book.status === "Read" && book.review).sort(
    () => Math.random() - Math.random(),
  );

  return (
    <div className={styles.random}>
      {randomBooks
        .filter((book) => book.review)
        .slice(0, 1)
        .map((book) => (
          <div key={book.title} className={`${styles.books__random}`}>
            <div className={styles.book__info}>
              <h3>
                <Link className={styles.book__title} href={`https://www.google.com/search?q=${book.title}`}>
                  {book.title}
                </Link>
                {book.rating && book.rating >= 4 ? (
                  book.rating >= 5 ? (
                    <span className={`${styles.book__review__indicator} ${styles.book_loved}`}>♥</span>
                  ) : (
                    <span className={`${styles.book__review__indicator}`}>♥</span>
                  )
                ) : book.rating <= 2.5 && book.rating != 0 ? (
                  <span className={`${styles.book__review__indicator}`}>×</span>
                ) : (
                  ""
                )}
                <br />
                <span className={styles.book__author}>by {book.author}</span>
              </h3>
              <p className={styles.book__finished}>
                Read{" "}
                {GetMonthName(book.started) == GetMonthName(book.finished)
                  ? GetMonthName(book.started)
                  : GetMonthName(book.started) + "to " + GetMonthName(book.finished)}{" "}
                {book.finished.split("-", 1)}
              </p>
              {book.review && <p className={styles.book__review}>{book.review}</p>}
              {book.quotes && (
                <q className={styles.book__quote}>{book.quotes[Math.floor(Math.random() * book.quotes.length)]}</q>
              )}
            </div>
            <div>
              <Link
                title={book.title}
                key={book.title}
                className={styles.books}
                href={`https://www.duckduckgo.com/?q=${book.title}+${book.author}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.book}>
                  <img src={book.cover} alt={""} />
                </div>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};
