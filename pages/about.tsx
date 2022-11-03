import styles from "../styles/Home.module.css";
import Page from "../containers/layout/page";

export default function About() {
  return (
    <Page>
    <section>
        <div className={styles.LeftCenter}>
            <h1 className={styles.title}>About</h1>
            <p>
                Late 20s Jamaican woman learning web development through experimentation and needed personal solutions.
            </p>
        </div>
    </section>
    </Page>
  );
}
