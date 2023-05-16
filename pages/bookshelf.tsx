import { Page } from "containers/layout";
import { BookShelf } from "@components/about/backlogGraph";
import Link from "next/link";

import styled from "styled-components";

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
                <Link href="/about">Back to About</Link>
                <Link href="#PageTitle">Top of Page</Link>
                <Link href="/">Back to Home</Link>
            </FlexLinks>
            
        </Page>
    );
};

export default BookCase;
