import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ReferenceLine,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  PieChart,
  Pie,
} from "recharts";
import { ReadingContainer, BookContainer, Book } from "./currentReads";

const CumulativeBookContainer = styled.div`
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

interface BooksProps {
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

interface BookData {
  Started: number;
  Finished: number;
  Added: number;
}

interface BookDataArray {
  books: BooksProps[];
}

export const BacklogGraph: FC<BookDataArray> = ({ books }) => {
  const [bookData, setBookData] = useState<BookData[]>([]);

  useEffect(() => {
    const bookData: Record<
      string,
      Record<string, { Started: number; Finished: number; Added: number }[]>
    > = {};

    const today = new Date();
    const oneYearAgo = new Date();

    oneYearAgo.setFullYear(today.getFullYear() - 1);
    oneYearAgo.setMonth(today.getMonth() + 1);

    books.forEach((book) => {
      if (book.started) {
        const date = new Date(book.started);
        if (date >= oneYearAgo && date <= today) {
          const year = date.getFullYear();
          const month = date.getMonth();

          if (!bookData[year]) {
            bookData[year] = Array.from({ length: 12 }).map(() => ({
              Started: 0,
              Finished: 0,
              Added: 0,
            }));
          }

          bookData[year][month]["Started"]++;
          if (bookData[year][month]["Added"] > 0) {
            bookData[year][month]["Added"]--;
          }

          for (let i = month + 1; i < 12; i++) {
            bookData[year][i]["Started"] = bookData[year][i - 1]["Started"];
          }
        }
      }

      if (book.added) {
        const date = new Date(book.added);
        if (date >= oneYearAgo && date <= today) {
          const year = date.getFullYear();
          const month = date.getMonth();

          if (!bookData[year]) {
            bookData[year] = Array.from({ length: 12 }).map(() => ({
              Started: 0,
              Finished: 0,
              Added: 0,
            }));
          }

          if (book.added === book.started) {
            null;
          } else {
            bookData[year][month]["Added"]++;
          }

          for (let i = month + 1; i < 12; i++) {
            bookData[year][i]["Added"] = bookData[year][i - 1]["Added"];
          }
        }
      }

      if (book.finished) {
        const date = new Date(book.finished);
        if (date >= oneYearAgo && date <= today) {
          const year = date.getFullYear();
          const month = date.getMonth();

          if (!bookData[year]) {
            bookData[year] = Array.from({ length: 12 }).map(() => ({
              Started: 0,
              Finished: 0,
              Added: 0,
            }));
          }

          bookData[year][month]["Finished"]++;
          bookData[year][month]["Started"]--;

          for (let i = month + 1; i < 12; i++) {
            bookData[year][i]["Finished"] = bookData[year][i - 1]["Finished"];
            bookData[year][i]["Started"] = bookData[year][i - 1]["Started"];
            bookData[year][i]["Started"] = bookData[year][i - 1]["Started"];
            bookData[year][i]["Added"] = bookData[year][i - 1]["Added"];
          }
        }
      }
    });

    const chartData = Object.entries(bookData).flatMap(([year, months]) =>
      months.map((monthData, index) => ({
        month: `${new Date(+year, index).toLocaleString("default", {
          month: "long",
        })} ${year}`,
        ...monthData,
      }))
    );

    setBookData(chartData);
  }, [books]);

  return (
    <CumulativeBookContainer>
      <h3>Book Backlog</h3>
      <BarChart width={900} height={300} data={bookData}>
        <CartesianGrid strokeDasharray="3 6" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip active={false} />
        <Legend />
        <ReferenceLine y={48} stroke="red" label="Goal" strokeDasharray="3 3" />
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

interface GenreData {
  genre: string;
  count: number;
}

export const GenreRadarChart: FC<BookDataArray> = ({ books }) => {
  const [data, setData] = useState<GenreData[]>([]);
  const [fictionBooks, setFiction] = useState<BooksProps[]>([]);
  const [nonFictionBooks, setNonFiction] = useState<BooksProps[]>([]);

  useEffect(() => {
    const genreData: Record<string, number> = {};

    const filteredGenreBooks = books.filter(
      (book) =>
        !(book.genre.includes("Fiction") && book.genre.includes("Non-Fiction"))
    );

    const Fiction = books.filter(
      (book) =>
        book.genre.includes("Fiction") && !book.genre.includes("Non-Fiction")
    );
    setFiction(Fiction);
    const NonFiction = books.filter((book) =>
      book.genre.includes("Non-Fiction")
    );
    setNonFiction(NonFiction);

    filteredGenreBooks.forEach((book) => {
      (book.genre as string[])
        .filter((genre) => genre !== "Fiction" && genre !== "Non-Fiction")
        .forEach((genres) => {
          if (!genreData[genres]) {
            genreData[genres] = 0;
          }

          genreData[genres]++;
        });
    });

    const chartData = Object.entries(genreData).map(([genre, count]) => ({
      genre,
      count,
    }));

    setData(chartData);
  }, [books]);

  return (
    <CumulativeBookContainer style={{ display: "flex", flexWrap: "wrap" }}>
      <CumulativeBookContainer style={{ width: "50%" }}>
        {fictionBooks.length > 0 && nonFictionBooks.length > 0 ? (
          <PieChart width={600} height={400} 
          style={{ scale: "0.9" }}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={[
                {
                  name: "Fiction",
                  value: fictionBooks.length,
                  fill: "var(--secondary)",
                },
                {
                  name: "Non-Fiction",
                  value: nonFictionBooks.length,
                  fill: "var(--primary)",
                },
              ]}
              cx={200}
              cy={200}
              outerRadius={125}
              fill="var(--accent)"
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                name
                
              }) => {
                const RADIAN = Math.PI / 180;
                // eslint-disable-next-line
                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                // eslint-disable-next-line
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                // eslint-disable-next-line
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill="var(--primary)"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {`${((value / books.length) * 100).toFixed(0)}% ${name}`}
                  </text>
                );
              }}
            />
          </PieChart>
        ) : (
          <p>No data</p>
        )}
      </CumulativeBookContainer>
      <CumulativeBookContainer style={{ width: "50%" }}>
        <h3>Tag Breakdown</h3>
        <RadarChart
          cx={300}
          cy={250}
          outerRadius={150}
          width={600}
          height={500}
          data={data}
          style={{ scale: "0.9" }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="genre" />
          <PolarRadiusAxis />
          <Radar
            name="Books"
            dataKey="count"
            stroke="var(--secondary)"
            fill="var(--primary)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </CumulativeBookContainer>
    </CumulativeBookContainer>
  );
};

const Shelf = styled.div`
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
