import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts";
import { BookContainer, Book } from "./currentReads";
import Books from "@data/books";

export const CumulativeBookContainer = styled.div`
  margin: 0 auto;
  place-items: center;
  justify-content: center;

  & > h3 {
    margin-bottom: 1rem;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 90%;
  }
`;

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
  Added: number;
}

export interface BookDataArray {
  books: BooksProps[];
}

export const BacklogGraph: FC<BookDataArray> = () => {
  const [Data, setData] = useState<BookData[]>([]);

  useEffect(() => {
    const bookData: Record<string, { Started: number, Finished: number, Added: number }> = {};

    Books.forEach((book) => {
      const addMonth = new Date(book.added).getMonth();
      const startMonth = book.started ? new Date(book.started).getMonth() : null;
      const finishMonth = book.finished ? new Date(book.finished).getMonth() : null;

      bookData[addMonth] = bookData[addMonth] || { Started: 0, Finished: 0, Added: 0 };
      bookData[addMonth].Added += 1;

      if (startMonth !== null) {
        bookData[startMonth] = bookData[startMonth] || { Started: 0, Finished: 0, Added: 0 };
        bookData[startMonth].Started += 1;
      }

      if (finishMonth !== null) {
        bookData[finishMonth] = bookData[finishMonth] || { Started: 0, Finished: 0, Added: 0 };
        bookData[finishMonth].Finished += 1;
      }
    });

    // Prepare for the snowball effect!
    const cumulativeData: BookData[] = [];
    let cumulative = { Started: 0, Finished: 0, Added: 0 };

    for (let month = 0; month < 12; month++) {
      cumulative = {
        Started: (cumulative.Started || 0) + ((bookData[month] && bookData[month].Started) || 0),
        Finished: (cumulative.Finished || 0) + ((bookData[month] && bookData[month].Finished) || 0),
        Added: (cumulative.Added || 0) + ((bookData[month] && bookData[month].Added) || 0),
      };
      cumulativeData.push({
        month: new Date(2023, month).toLocaleString('default', { month: 'long' }),
        ...cumulative,
      });
    }

    setData(cumulativeData);
  }, [Books]);

  return (
    <CumulativeBookContainer>
      <BarChart width={900} height={300} data={Data}>
        <CartesianGrid strokeDasharray="3 6" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip active={false} />
        <Legend />
        <Bar dataKey="Started" stackId="a" fill="var(--accent)" />
        <Bar
          dataKey="Finished"
          stackId="a"
          fill="var(--primary)"
          label={{ fontSize: 15, position: "top", fill: "var(--primary)" }}
        />
        <Bar dataKey="Added" stackId="a" fill="var(--faint)" />
      </BarChart>
    </CumulativeBookContainer>
  );
};

export const Shelf = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;
  margin: 0;
`;

export const BookShelf: FC<BookDataArray> = ({ books }) => {
  const readBooks = books.filter((book) => book.status === "read");
  const wantToReadBooks = books.filter(
    (book) => book.status === "Want to Read"
  );

  return (
    <CumulativeBookContainer>
      <div style={{ justifyContent: "space-between" }}>
        <h3>Next Reads ({wantToReadBooks.length})</h3>
        <Shelf>
          {wantToReadBooks.map((book) => (
            <BookContainer
              href={`https://www.you.com/search?q=${book.title}+${book.author}`}
              target="_blank"
              rel="noopener noreferrer"
              key={book.title}
            >
              <Book className="animate__animated animate__slideInUp">
                <img
                  src={book.cover}
                  alt={book.title}
                  title={book.summary}
                  style={{ width: "200px", height: "300px" }}
                />
              </Book>
            </BookContainer>
          ))}
        </Shelf>
        <h3>Read ({readBooks.length})</h3>
        <Shelf>
          {readBooks.map((book) => (
            <BookContainer
              href={`https://www.you.com/search?q=${book.title}+${book.author}`}
              target="_blank"
              rel="noopener noreferrer"
              key={book.title}
            >
              <Book>
                <img
                  src={book.cover}
                  alt={book.title}
                  title={book.summary}
                  style={{ width: "200px", height: "300px" }}
                />
              </Book>
            </BookContainer>
          ))}
        </Shelf>
      </div>
    </CumulativeBookContainer>
  );
};
