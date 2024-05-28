"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
// import Link from 'next/link';
import { format, parseISO } from 'date-fns';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from '@styles/modules/changelog.module.scss'

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
    const owner = 'kalecream';
    const repo = 'OldWebBrain';

    axios
      .get(`https://api.github.com/repos/${owner}/${repo}/releases`)
      .then((response) => {
        setReleases(response.data);
      })
      .catch((error) => {
        console.error('Error fetching GitHub releases:', error);
      });
  }, []);

  return (
    <section>
      <h1 className='section-title'>Website Changes!</h1>
      <div className={styles.release__container}>
        
        <ul className={styles.release}>
          {releases.map((release) => (
            <li key={release.id} className={styles.release__content}>
              <div className={styles.release__timeline}>
                <svg className="octicon octicon-commit position-absolute left-0 color-bg-default color-fg-muted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill-rule="evenodd" d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z" fill="currentColor"></path></svg>
              </div>
              <div className={styles.release__details}>
                <div className={styles.release__left}>
                  <h2>{release.name} </h2>
                  <small>{format(parseISO(release.published_at), 'MMMM dd, yyyy')}</small>
                </div>

                <div className={styles.release__right}>
                  <MarkdownRender markdown={release.body} />
                </div>

              
              </div>
            </li>

          ))}
          </ul>
          </div>
      </section>
  );
};

export default GitHubReleaseInfo;
