import * as React from 'react';
import styles from '../../styles/nav.module.css';

export const Navigation:React.FunctionComponent = () => {
    function toggleTheme() {
        var body = document.body;
        body.classList.toggle("dark");
    }

  return (
    <nav>
        <div id="site-name"><a href="./index.html">KaleCream</a></div>
        <ul>
            <li><a href="html/directory.html">Playground</a></li> ;
            <li>Rolodex</li> ;
            <li>Log</li> ;
            <li><a href="html/blog.html">Blog</a></li> ;
            <li>Contact</li> ;
        </ul>
        <div className={styles.settings}>
            <button id="theme-toggle" className={styles.themeToggle} onClick="toggleTheme">
            </button>
        </div>
    </nav>
  );
}
