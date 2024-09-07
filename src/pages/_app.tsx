import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import RouteLoader from '@pages/preloader';
import '@styles/global.scss';

export const WEBSITE_HOST_URL = 'https://www.sabrinamedwinter.com';

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<RouteLoader />
			<ThemeProvider
				storageKey="theme"
				attribute="class"
				enableSystem={false}
				// If enableSystem is false, the default theme is light
				defaultTheme="system"
				themes={['light', 'dark']}
			>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default App;
