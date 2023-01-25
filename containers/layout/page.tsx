import { useEffect } from "react";
import { Navigation, Footer } from "../../components/global";
import styles from "../../styles/Home.module.css";
import styled from "@emotion/styled";
import TagManager from "react-gtm-module";
import { Colors } from "../../styles/colors";

import { MetaProps } from "../../types/layout";
import Head from "../../components/global/Head";

const PageTitle = styled.h1`
	font-size: 3rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: ${Colors.primary};
`;

type LayoutProps = {
	children: React.ReactNode;
	customMeta?: MetaProps;
	title?: string;
	description?: string;
};

export const WEBSITE_HOST_URL = "https://www.kalecream.com";

export const Page = ({
	children,
	title,
	description,
	customMeta,
}: LayoutProps) => {
	useEffect(() => {
		TagManager.initialize({ gtmId: "UA-148483444-1" });
	}, []);
	return (
		<>
			<header>
					<title>KaleCream {title ? "| " + title : null}</title>
					<Navigation />
			</header>
			
			<main className={styles.main}>
				<>
				{title ? <PageTitle>{title}</PageTitle> : null}
				{children}
				</>
			</main>
			<Footer />
		</>
	);
};

export default Page;
