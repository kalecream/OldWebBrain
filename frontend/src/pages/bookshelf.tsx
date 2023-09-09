import { Page } from '@containers/layout';
import { BookShelf } from '@components/books/backlogGraph';
import Link from 'next/link';

import styled from 'styled-components';

const FlexLinks = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 50%;
	margin: 0 auto;
`;

const BookCase = () => {
	return (
		<Page>
			<h1 id="pageTitle">Bookcase</h1>
			<BookShelf />
			<FlexLinks>
				<Link href="/about">&#129120; About</Link>
				<Link href="#pageTitle">&#129121; Top of Page</Link>
			</FlexLinks>
		</Page>
	);
};

export default BookCase;
