
import styles from "../styles/Home.module.css";
import { Navigation, Footer } from "../components/global";
import Page from "../containers/layout/page";

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

export default function Home() {
  return (
    <Page>

        <section id="home">
          <div className={styles.hero}>
            <div className={styles.heroText}>
              <h1 className={styles.title}>Hi <span className={styles.bigEmoji}>👋🏽</span></h1>
              <p>
                I'm still in the process of porting over posts and experiments. Please free to check out <a href="https://github.com/kalecream"> my code experiments</a> or <a href="https://deviantart.com/kalecream">my art experiments while I continue setting up my website.</a>.
              </p>
              <p>
                If you're trying to find me on the web, I'm available on <a href="https://twitter.com/kalecream">Twitter</a> and I run my own mastodon instance at <a href="https://kalecream.com">kalecream.com</a>.
              </p>
            </div>
          </div>
        </section>
    </Page>
  );
}
