import { useMemo } from "react";
import Link from "next/link";
import { getBlogPosts } from "../db/blog";
import blog from "@styles/modules/BlogSummary.module.scss";
import NineGridGallery from "@app/about/Gallery";

type Year = {
  date: string;
  months: Month[];
};

type Month = {
  date: string;
  name: string;
  posts: any;
};

const BlogDateSplit = (posts) => {
  let years: Year[] = [];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  posts.forEach((post) => {
    const [yearDate, monthDate, dayDate] = post.metadata.date.split(" ")[0].split("-");

    let year: Year | undefined = years.find((year) => year.date === yearDate);
    if (!year) {
      year = {
        date: yearDate,
        months: [],
      };
      years.push(year);
    }

    let month = year.months.find((month) => month.date === monthDate);
    if (!month) {
      const monthIndex = parseInt(monthDate) - 1;
      const monthName = monthNames[monthIndex];
      month = {
        date: monthDate,
        name: monthName,
        posts: [],
      };
      year.months.push(month);
    }

    month.posts.push({
      ...post,
      date: dayDate,
    });
  });

  years
    .sort((a, b) => parseInt(b.date) - parseInt(a.date))
    .forEach((year) => {
      year.months
        .sort((a, b) => parseInt(b.date) - parseInt(a.date))
        .forEach((month) => {
          month.posts.sort((a, b) => parseInt(b.date) - parseInt(a.date));
        });
    });

  return years;
};

export const BlogPosts = () => {
  let posts = getBlogPosts();
  let years = useMemo(() => BlogDateSplit(posts), [posts]);

  return (
    <section style={{ marginTop: "3rem" }}>
      {years.map((year) => (
        <ul key={year.date} className={blog.container}>
          <li key={year.date}>
            <ul>
              {year.months.map((month, i) => (
                <div className={blog.month_lump} key={i}>
                  <li className={blog.nolist} key={i}>
                    <h1 className={blog.month}>
                      <span>{month.name}</span> <span>{i === 0 && year.date}</span>
                    </h1>
                    <ul>
                      {month.posts.map((post) => (
                        <li key={post.slug} className={blog.post + ` no-marker h-entry`}>
                          <Link className={blog.link + `  u-url`} href={`/blog/${post.slug}`}>
                            <div className={blog.list__section}>
                              <div>
                                <span className={blog.list__date + ` dt-published`}>
                                  {post.metadata.date.slice(-2)}
                                </span>
                                <h2 className={blog.list__title + ` p-name`}>{post.metadata.title}</h2>
                              </div>
                              {/* <p className={blog.list__tags}>
                              {post.metadata.tags.split(",").map((tag, i) => (
                                <span key={i} className={blog.list__tag}>
                                  {tag}
                                </span>
                              ))}
                            </p> */}

                              <p className={blog.list__description + ` e-content`}>{post.metadata.description}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <NineGridGallery year={year.date} month={month.date} />
                </div>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </section>
  );
};
