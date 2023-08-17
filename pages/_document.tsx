import { Head, Html, Main, NextScript } from "next/document";
import Document, { DocumentContext } from "next/document";
import { WEBSITE_HOST_URL } from "./_app";



class CustomDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
	render() {
		
	return (
		<Html lang="en">
			<Head>
				<meta name="robots" content="index, follow"/>
				<link rel="shortcut icon" href="/img/favicon.svg" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@100;200;300;400;500;600;700;900&family=Caveat&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
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
