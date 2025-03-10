"use client";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
// import Link from 'next/link';
import { format, parseISO } from "date-fns";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "@styles/modules/changelog.module.scss";
import Link from "next/link";

interface MarkdownRendererProps {
  markdown: string;
}

const MarkdownRender: React.FC<MarkdownRendererProps> = ({ markdown }) => {
  return (
    <div className={styles.release__markdown}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

const GitHubReleaseInfo = () => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    const owner = "kalecream";
    const repo = "OldWebBrain";

    axios
      .get(`https://api.github.com/repos/${owner}/${repo}/releases`)
      .then((response) => {
        setReleases(response.data);
      })
      .catch((error) => {
        console.error("Error fetching GitHub releases:", error);
      });
  }, []);

  return (
    <>
      <section>
        <h1>Website Changes!</h1>
        <p className="prose">
          — To see more on how this website was made, read{" "}
          <Link href="/colophon" className="internal-link">
            colophon
          </Link>
          .
          <br />— To see all pages, visit{" "}
          <Link className="internal-link" href={"/sitemap"}>
            sitemap
          </Link>
          .
        </p>
      </section>
      <section>
        <div className={styles.release__container}>
          <Suspense fallback={<p className="h-6" />}>
            <ul className={styles.release}>
              {releases.map((release) => (
                <li key={release.id} className={styles.release__content}>
                  <div className={styles.release__timeline}>
                    <svg
                      className="octicon octicon-commit position-absolute left-0 color-bg-default color-fg-muted"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className={styles.release__details}>
                    <div className={styles.release__left}>
                      <h1>{release.name}</h1>
                      <p>{format(parseISO(release.published_at), "MMMM dd, yyyy")}</p>
                    </div>

                    <div className={styles.release__right}>
                      <MarkdownRender markdown={release.body} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default GitHubReleaseInfo;
