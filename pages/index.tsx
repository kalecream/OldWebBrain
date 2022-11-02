import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navigation, Footer } from "../components/global";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KaleCream</title>
        <meta name="description" content="Web Developer" />
        <link rel="icon" href="/favicon.ico" />
        <link href=
        'https://fonts.googleapis.com/css?family=Epilogue' rel='stylesheet'/>
      </Head>

      <Navigation />
      <main className={styles.main}>
        <section id="home">
          <div className={styles.hero}>
            <div className={styles.heroText}>
              <h1 className={styles.title}>Hi <span className={styles.bigEmoji}>👋🏽</span></h1>
              <p>
                I'm still in the process of porting over posts and experiments. Please free to check out <a href="https://github.com/kalecream"> my code experiments</a> or <a href="https://deviantart.com/kalecream">my art experiments</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
