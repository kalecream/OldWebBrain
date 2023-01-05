import * as React from "react";
import Page from "../containers/layout/page";
import { ExampleAlbum } from "../assets";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Books from "../data/books";
import { Colors } from "../styles/colors";
import 'animate.css';
import { Section, HalfColumn } from "../components/global";

const PhotoGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 0.25rem;
	width: 100%;

	@media screen and (max-width: 700px) {
		margin: 2rem auto;
		width: 80%;
	}
`;

const CustomImage = styled(Image)`
	border-radius: 5px;
	filter: grayscale(65%);
	transition: filter 0.5s ease-in-out;

	&:hover {
		filter: grayscale(0%);
	}

	@media screen and (max-width: 1000px) {
		max-width: 200px;
		max-height: 200px;
	}

	@media screen and (max-width: 768px) {
		max-width: 100px;
		max-height: 100px;
	}
`;

const DemographicTable = styled.table`
	font-size: 0.75rem;
	width: 100%;
	margin-bottom: 1rem;
	justify-self: center;
	border-radius: 5px;
	padding: 0.5rem;

	@media screen and (max-width: 700px) {
		width: 80%;
	}
`;

const TableRow = styled.tr`
	&:nth-child(even) {
		background-color: #f2f2f2;
	}

	@media (prefers-color-scheme: dark) {
		&:nth-child(even) {
			background-color: transparent;
		}
	}
`;

const TableHeader = styled.th`
	min-width: 200px;
	text-indent: 1rem;

border-radius: 5px;

	@media screen and (max-width: 500px) {
		text-indent: 0;
		min-width: 50px;
	}
`;

const TableData = styled.td`
border-radius: 5px;
	text-align: left;
	padding: 0.5rem 1.5rem;
`;

export const LightTablePage = () => {
	return (
		<Page title="About">
			<Section>
				<DemographicTable className="animate__animated animate__slideInUp">
					<TableRow>
						<TableHeader>Reading</TableHeader>
						<TableData>
							{Books.map((book) => {
								if (book.status === "reading") {
									return (
										<p key={book.title}>
											{book.title} by {book.author}
										</p>
									);
								}
							})}
							<a href="/read">-- Read History --</a>
						</TableData>
					</TableRow>
					<TableRow>
						<TableHeader>Watching</TableHeader>
						<TableData>
							You’re not the same person once the film has finished [
							<a href="https://letterboxd.com/andredenervaux/list/youre-not-the-same-person-once-the-film-has/">
								Link
							</a>
							]
							<br />
							<a href="https://letterboxd.com/kalecream/stats/">
								-- Watch History (Letterboxd) --
							</a>
						</TableData>
					</TableRow>
				</DemographicTable>
			</Section>
		</Page>
	);
};

export default LightTablePage;
