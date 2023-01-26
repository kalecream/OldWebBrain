import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import React from "react";

config.autoAddCss = false;

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
			<Head>
				<link rel="shortcut icon" href="/images/favicon.svg" />
				<meta lang="en" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@100;200;300;400;500;600;700;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Epilogue"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
