import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";

import { MetaProps } from "../types/layout";

import "../styles/globals.css";

config.autoAddCss = false;
export const WEBSITE_HOST_URL = "https://www.sabrinamedwinter.com";

export const App = (
	{ Component, pageProps }: AppProps,
	{ customMeta }: { customMeta?: MetaProps }
): JSX.Element => {
	const router = useRouter();
	const meta: MetaProps = {
		title: "SM",
		description: "Unlocking the digital realm with a fusion of Jamaican web development prowess and captivating 3D artistry.",
		image: `${WEBSITE_HOST_URL}/img/favicon.svg`,
		type: "website",
		...customMeta,
	};

	return (
		<>
		<ThemeProvider
			storageKey="theme"
			attribute="class"
			enableSystem={true}
			// If enableSystem is false, the default theme is light
			defaultTheme="system"
			themes={["light", "dark"]}
		>
			
			<Component {...pageProps} />
		</ThemeProvider>
		</>
	);
};

export default App;
