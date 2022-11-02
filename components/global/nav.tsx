import * as React from "react";
import styles from "../../styles/nav.module.css";

interface NavProps {
  title: string;
  links: string;
}

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
          <li key={index}>
            <a href={directory.links}>{directory.title}</a>
          </li>
        ))}
      </ul>
      <div className={styles.settings}>
        <button id="theme-toggle" className={styles.themeToggle}></button>
      </div>
    </nav>
  );
};
