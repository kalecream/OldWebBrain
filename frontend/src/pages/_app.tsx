import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '@styles/global.scss';
import '@code-hike/mdx/dist/index.css';

export const WEBSITE_HOST_URL = 'https://www.sabrinamedwinter.com';

export const App = ({ Component }: AppProps): JSX.Element => {
	return (
		<ThemeProvider
			storageKey="theme"
			attribute="class"
			enableSystem={true}
			// If enableSystem is false, the default theme is light
			defaultTheme="system"
			themes={['light', 'dark']}
		>
			<Component />
		</ThemeProvider>
	);
};

export default App;
