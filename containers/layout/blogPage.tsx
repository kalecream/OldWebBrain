import { useEffect } from "react";
import Head from "next/head";
import { Navigation, Footer } from "../../components/global";
import styles from "../../styles/Home.module.css";
import styled from "@emotion/styled";
import TagManager from "react-gtm-module";
import { Colors } from "../../styles/colors";
import { MDXProvider } from "@mdx-js/react";

const PageTitle = styled.h1`
	font-size: 3rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: ${Colors.primary};
`;

const Container = styled.div`
	max-width: 1500px;
	margin: 0 auto;
`;

const BlogLayout = styled.div`
	display: flex;

	& > *:first-of-type {
		flex: 0.5;
	}

	& > *:nth-of-type(2) {
		flex-grow: 1;
	}

	padding: 0 0.5rem;
`;

const BlogPostNavigation = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
	padding: 5rem 0;
`;

export default function BlogPage({
	children,
	title,
	description,
}: {
	children: React.ReactNode;
	title?: string;
	description?: string;
}) {
	useEffect(() => {
		TagManager.initialize({ gtmId: "UA-148483444-1" });
	}, []);
	return (
		<div className={styles.container}>
			<Head>
				<title>KaleCream {title ? "| " + title : null}</title>
				<meta name="description" content={description} />
			</Head>
			<Navigation />
			{title ? <PageTitle>{title}</PageTitle> : null}
			<BlogLayout>
				<Container>
					<BlogPostNavigation />
				<MDXProvider>
					<main>{children}</main>
				</MDXProvider>
				</Container>
			</BlogLayout>
			<Footer />
		</div>
	);
}
