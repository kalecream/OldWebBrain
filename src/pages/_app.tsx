import React  from 'react';
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "@styles/global.scss";

export const WEBSITE_HOST_URL = "https://www.yunghigue.com";

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <ThemeProvider
        storageKey="theme"
        attribute="class"
        enableSystem={false}
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
