import { Html, Head, Main, NextScript } from 'next/document';
import Document, { DocumentContext } from 'next/document';
import { WEBSITE_HOST_URL } from './_app';

const Document = () =>{
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
}

export default Document;
