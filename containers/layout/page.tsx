import * as React from 'react';
import Head from "next/head";
import { Navigation, Footer } from '../../components/global';
import styles from '../../styles/Home.module.css';
import { Icons } from '../../assets';

export default function Page({ children }:{children: React.ReactNode}) {
  return (
    <div className={styles.container}>
        <Head>
        <title>KaleCream</title>
        <meta name="description" content="Web Developer" />
        <link href=
        'https://fonts.googleapis.com/css?family=Epilogue' rel='stylesheet'/>
      </Head>
        <Navigation />
          <main className={styles.main}>
            {children}
          </main>
        <Footer />
    </div>
  );
}