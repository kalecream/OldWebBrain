import { useEffect} from "react";
import Head from "next/head";
import { Navigation, Footer } from "../../components/global";
import styles from "../../styles/Home.module.css";
import styled from "@emotion/styled";
import TagManager from "react-gtm-module";
import { Colors } from "../../styles/colors";

const PageTitle = styled.h1`
	font-size: 3rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: ${Colors.primary};
`;

export default function Page({
	children,
	title,
	description,
}: {
	children: React.ReactNode;
	title?: string;
	description?: string;
}) {

	useEffect(() => {
		TagManager.initialize({ gtmId: "UA-148483444-1"});
	}, []);
	return (
		<div className={styles.container}>
			<Head>
				<title>KaleCream {title ? "| " + title : null}</title>
				<meta name="description" content={description} />
			</Head>
			<Navigation />
			<main className={styles.main}>
				{title ? <PageTitle>{title}</PageTitle> : null}
				{children}
			</main>
			<Footer />
		</div>
	);
}
