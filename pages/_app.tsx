import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { MetaProps } from "../types/layout";
import { useRouter } from "next/router";

config.autoAddCss = false;
export const WEBSITE_HOST_URL = "https://www.kalecream.com";

export const App = (
	{ Component, pageProps }: AppProps,
	{ customMeta }: { customMeta?: MetaProps }
	): JSX.Element => {
		const router = useRouter();
		const meta: MetaProps = {
			title: "KaleCream",
			description: "Web Developer.",
			image: `${WEBSITE_HOST_URL}/images/favicon.svg`,
			type: "website",
			...customMeta,
		};

	return (
		<ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
			<Head>
				<title>{meta.title}</title>
				<meta content={meta.description} name="description" />
				<link rel="shortcut icon" href="/images/favicon.svg" />
				<meta lang="en" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="KaleCream" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@kalecream" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta property="og:type" content={meta.type} />
				<meta name="twitter:image" content={meta.image} />
				<meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
				<link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
				{meta.date && (
					<meta property="article:published_time" content={meta.date} />
				)}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@100;200;300;400;500;600;700;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
