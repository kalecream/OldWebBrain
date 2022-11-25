import * as React from "react";
import Head from "next/head";
import { Navigation, Footer } from "../../components/global";
import styles from "../../styles/Home.module.css";
import { Icons } from "../../assets";

export default function Page({
	children,
	title,
	description,
}: {
	children: React.ReactNode;
	title?: string;
	description?: string;
}) {
	return (
		<div className={styles.container}>
			<Head>
				<title>KaleCream {title ? "| " + title : null}</title>
				<meta name="description" content={description} />
			</Head>
			<Navigation />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
}
