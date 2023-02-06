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
		// Storing theme in localstorage
		<ThemeProvider
			storageKey="theme"
			attribute="class"
			enableSystem={true}
			// If enableSystem is false, the default theme is light
			defaultTheme="system"
			themes={["light", "dark"]}
		>
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
				<meta
					property="og:url"
					content={`${WEBSITE_HOST_URL}${router.asPath}`}
				/>
				<link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
				{meta.date && (
					<meta property="article:published_time" content={meta.date} />
				)}
				
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
