import * as React from "react";
import Head from "next/head";
import { Navigation, Footer } from "../../components/global";
import styles from "../../styles/Home.module.css";

export default function BlogPage( pageTitle:string, {children}:{ children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>KaleCream</title>
        <meta name="description" content="Web Developer" />
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css?family=Epilogue"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.title}>{pageTitle}</div>
        {children}
        </main>
      <Footer />
    </div>
  );
}