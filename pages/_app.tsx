import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import React from "react";

config.autoAddCss = false;

export const App = ({ Component, pageProps }: AppProps):JSX.Element => {
	return (
		<ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
			<Head>
				<link rel="shortcut icon" href="/images/favicon.svg" />
				<meta lang="en" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					href="https://fonts.googleapis.com/css?family=Epilogue"
					rel="stylesheet"
				/>
				
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;