"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './Footer.module.scss';
import { useEffect, useState } from "react";
// fun code found at https://codepen.io/z-/pen/zYxdRQy

const Footer: React.FC = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.screenY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      if (scrollPercent <= 0.5) {
        setOpacity(0);
      } else {
        const opacityValue = (scrollPercent - 0.5) * 2;
        setOpacity(Math.min(opacityValue, 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  if (usePathname() == "/") {
    return null;
  }

  const bubbles = Array.from({ length: 128 }, (_, i) => ({
    id: i,
    size: `${2 + Math.random() * 10}rem`,
    distance: `${2 + Math.random() * 1}rem`,
    position: `${-5 + Math.random() * 100}%`,
    time: `${2 + Math.random() * 2}s`,
    delay: `${-1 * (2 + Math.random() * 1)}s`,
  }));

  return (
    <>
      <footer className={styles.footer} style={{ opacity }}>
        <div className={styles.bubbles}>
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className={styles.bubble}
              style={{
                '--size': bubble.size,
                '--distance': bubble.distance,
                '--position': bubble.position,
                '--time': bubble.time,
                '--delay': bubble.delay,
              } as React.CSSProperties}
            />
          ))}
        </div>
        <div className={styles.content}>
          <div>
            {/* <div style={{ gap: "1rem" }}>
              <b>Personal</b>
              <a href="">About</a>
              <a href="#">Blog</a>
              <a href="#">Garden</a>
              <a href="#">Colophon</a>
              <a href="#">Rolodex</a>
            </div> */}
          </div>
          <div className="company">
            <a
              className={styles.image}
              href="https://codepen.io/z-"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundImage:
                  'url("http://localhost:3001/_next/static/media/ouroburos.73a6abf4.svg")',
              }}
            />
            <p>Yung Higue &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
      <svg style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Footer;