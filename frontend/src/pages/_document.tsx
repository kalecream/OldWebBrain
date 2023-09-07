import { Head, Html, Main, NextScript } from 'next/document';
import Document, { DocumentContext } from 'next/document';
import { WEBSITE_HOST_URL } from './_app';

class CustomDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="robots" content="index, follow" />
					<link rel="shortcut icon" href="/img/favicon.svg" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CustomDocument;
