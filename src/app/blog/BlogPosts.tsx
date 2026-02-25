import Link from "next/link";
import { getBlogPosts } from "../db/blog";
import b from "./BlogSummary.module.scss";
import NineGridGallery from "./Gallery";


type Year = {
  date: string;
  months: Month[];
};

type Month = {
  date: string;
  name: string;
  posts: any[];
};

const BlogDateSplit = (posts: any[]): Year[] => {
  let years: Year[] = [];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  posts.forEach((post) => {
    const [yearDate, monthDate, dayDate] = post.metadata.date.split(" ")[0].split("-");

    let year = years.find((y) => y.date === yearDate);
    if (!year) {
      year = { date: yearDate, months: [] };
      years.push(year);
    }

    let month = year.months.find((m) => m.date === monthDate);
    if (!month) {
      month = { date: monthDate, name: monthNames[parseInt(monthDate) - 1], posts: [] };
      year.months.push(month);
    }

    month.posts.push({ ...post, date: dayDate });
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

export default function BlogPosts() {
  const posts = getBlogPosts();
  const years = BlogDateSplit(posts);

  return (
    <>
      <section className={b["blog-root"]}>
        {years.map((year) => (
          <ul key={year.date} className={b["blog-year-block"]}>
            <li>
              <ul style={{ padding: 0, margin: 0 }}>
                {year.months.map((month, i) => (
                  <div className={b["blog-month-lump"]} key={`${year.date}-${month.date}`}>
                    <li className={b["blog-month-card"]}>
                      <h2 className={b["blog-month-heading"]}>
                        <span className={b["blog-month-name"]}>{month.name}</span>
                        {i === 0 && <span className={b["blog-year-label"]}>{year.date}</span>}
                      </h2>

                      <ul className={b["blog-post-list"]}>
                        {month.posts.map((post) => (
                          <li key={post.slug} className={b["blog-post-item"] + " no-marker h-entry"}>
                            <Link className={b["blog-post-link"] + " u-url"} href={`/blog/${post.slug}`}>
                              <div className={b["blog-post-row"]}>
                                <span className={b["blog-post-day"] + " dt-published"}>
                                  {post.metadata.date.slice(-2)}
                                </span>
                                <h3 className={b["blog-post-title"] + " p-name"}>
                                  {post.metadata.title}
                                </h3>
                              </div>
                              {post.metadata.description && (
                                <p className={b["blog-post-description"] + " e-content"}>
                                  {post.metadata.description}
                                </p>
                              )}
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
    </>
  );
}