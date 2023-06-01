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
import { WindowWidth } from "..";

export const CumulativeBookContainer = styled.div`
  margin: 0 auto;
  place-items: center;
  justify-content: center;

  & > * > h3 {
    margin-bottom: 1rem;
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    display: flex;
  }

  @media (min-width: 768px) {
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

export const BacklogGraph: FC = () => {
  const [Data, setData] = useState<BookData[]>([]);

  useEffect(() => {
    const bookData: Record<string, { Started: number, Finished: number, Added: number }> = {};
    let today = new Date();
    let RelativeLastYearAgo = new Date(today.getFullYear() - 1, today.getMonth() + 1, today.getDate());

    Books.forEach((book) => {
      let addMonth = null;
      let startMonth = null;
      let finishMonth = null;

      if (book.added && new Date(book.added) > RelativeLastYearAgo) {
        addMonth = new Date(book.added).getMonth();
      }

      if (book.started && new Date(book.started) > RelativeLastYearAgo) {
        startMonth = new Date(book.started).getMonth();
        if (startMonth = addMonth) {
          addMonth = null;
        }
      }

      if (book.finished && new Date(book.finished) > RelativeLastYearAgo) {
        finishMonth = new Date(book.finished).getMonth();
        if (finishMonth = startMonth) {
          startMonth = null;
        }
      }
      
      if (addMonth !== null) {
        bookData[addMonth] = bookData[addMonth] || { Started: 0, Finished: 0, Added: 0 };
        bookData[addMonth].Added += 1;
      }

      if (startMonth !== null) {
        bookData[startMonth] = bookData[startMonth] || { Started: 0, Finished: 0, Added: 0 };
        bookData[startMonth].Started += 1;

        if (addMonth !== null) {
          bookData[startMonth].Added -= 1;
        }
      }

      if (finishMonth !== null) {
        bookData[finishMonth] = bookData[finishMonth] || { Started: 0, Finished: 0, Added: 0 };
        bookData[finishMonth].Finished += 1;
        if (startMonth !== null) {
          bookData[finishMonth].Started -= 1;
        }
      }
    });

    // Prepare for the snowball effect!
    const cumulativeData: BookData[] = [];
    let cumulative = { Started: 0, Finished: 0, Added: 0 };

    let monthIndex = RelativeLastYearAgo.getMonth();

    for (let month = 0; month < 12; month++) {
      if (bookData[monthIndex]) {

        cumulative = {
          Started: bookData[monthIndex]?.Started + cumulative.Started || cumulative.Started,
          Finished: bookData[monthIndex]?.Finished + cumulative.Finished || cumulative.Finished,
          Added: bookData[monthIndex]?.Added + cumulative.Added || cumulative.Added,
        };
      }
      cumulativeData.push({
        month: new Date(RelativeLastYearAgo.getFullYear(), RelativeLastYearAgo.getMonth() + month).toLocaleString('default', { month: 'long' }),
        ...cumulative,
      });

      monthIndex = (monthIndex + 1) % 12;
    }

    setData(cumulativeData);
  }, [Books]);

  const width = WindowWidth() - 150;

  return (
    <CumulativeBookContainer>
      <BarChart width={width} height={200} data={Data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip active={false} />
        <Bar dataKey="Started" stackId="a" fill="var(--muted)" />
        <Bar
          dataKey="Finished"
          stackId="a"
          fill="var(--primary)"
          label={<CustomerBarLabel />}
        />
        <Bar dataKey="Added" stackId="a" fill="var(--faint)" />
      </BarChart>
    </CumulativeBookContainer>
  );
};

const CustomerBarLabel: FC<any> = (props) => {
  const { x, y, width, height, value } = props;

  if (value <= 0) {
    return null;
  }

  return (
    <text
      x={x + width / 2}
      y={y}
      fill="var(--muted)"
      fontSize="0.8rem"
      fontWeight={700}
      textAnchor="middle"
      dy={-6}
    >
      {value}
    </text>
  );
};

// TODO: Combine books and add filters through a form.

export const Shelf = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

export const BookShelf: FC = () => {
  const readBooks = Books.filter((book) => book.status === "Read");
  const wantToReadBooks = Books.filter(
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
                {book.cover ? (
                  <img
                    src={book.cover}
                    alt={book.title}
                    title={book.summary}
                    style={{ width: "200px", height: "300px" }}
                  />
                  // <Image
                  //   src={book.cover}
                  //   alt={book.title}
                  //   title={book.summary}
                  //   placeholder="blur"
                  //   blurDataURL={book.cover}
                  //   width={200}
                  //   height={300}
                  //   />
                ) : (
                  <div
                    style={{
                      width: "200px",
                      height: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "1rem",
                        fontSize: "1.2rem",
                        color: "var(--muted)",
                      }}
                    > {book.title}
                      </div>
                ) }
              </Book>
            </BookContainer>
          ))}
        </Shelf>
      </div>
    </CumulativeBookContainer>
  );
};
