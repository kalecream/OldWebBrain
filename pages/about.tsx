import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navigation, Footer } from "../components/global";

export default function About() {
  return (
    <section>
        <div className={styles.LeftCenter}>
            <h1 className={styles.title}>About</h1>
            <p>
                Late 20s Jamaican woman self- learning web development through experimentation and needed personal solutions.
            </p>
        </div>
    </section>
  );
}
