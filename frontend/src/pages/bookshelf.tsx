import { Page } from 'frontend/src/containers/layout';
import { BookShelf } from 'frontend/src/components/books/backlogGraph';
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
		<Page title="Bookshelf">
			<h1 id="PageTitle">Bookcase</h1>
			<BookShelf />
			<FlexLinks>
				<Link href="/about">&#129120; About</Link>
				<Link href="#PageTitle">&#129121; Top of Page</Link>
			</FlexLinks>
		</Page>
	);
};

export default BookCase;
