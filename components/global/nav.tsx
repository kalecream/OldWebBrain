import * as React from "react";
import styles from "../../styles/nav.module.css";
import styled from "@emotion/styled";
import { Colors } from '../../styles/colors';

interface NavProps {
  title: string;
  links: string;
}

const DirectoryListItem = styled.li`
  font-size: 0.85rem;
  margin: 0 1rem;
`;

const DirectoryLinks = styled.a`
  font-weight: 300;
  font-size: 0.85rem;
  opacity: 0.7;

  * hover {
    font-weight: 600;
    opacity: 1;
  }
`;

export const Navigation: React.FunctionComponent = () => {

  const directory = [
    {
      title: "About",
      links: "/about",
    },
    {
      title: "Contact",
      links: "/contact",
    },
    {
      title: "Blog",
      links: "/blog",
    },
    {
      title: "Directory",
      links: "/directory",
    },
  ];

  function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark");
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.siteName}>
        <a href="/">KaleCream</a>
      </div>
      <ul>
        {directory.map((directory, index) => (
          <DirectoryListItem key={index}>
            <DirectoryLinks href={directory.links}>{directory.title}</DirectoryLinks>
          </DirectoryListItem>
        ))}
      </ul>
      <div className={styles.settings}>
        <button id="theme-toggle" className={styles.themeToggle}></button>
      </div>
    </nav>
  );
};
