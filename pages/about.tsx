import * as React from "react";
import Page from "../containers/layout/page";
import { ExampleAlbum } from "../assets";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Books from "../data/books";
import { Colors } from "../styles/colors";

const PhotoGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	gap: 0.25rem;
	margin-top: 2rem;
	margin-bottom: 1rem;
	overflow: hidden;
`;

const CustomImage = styled(Image)`
	border-radius: 5px;
	filter: grayscale(100%);
	transition: filter 0.5s ease-in-out;

	&:hover {
		filter: grayscale(0%);
	}

	@media screen and (max-width: 1000px) {
		width: 200px;
		height: 200px;
	}

	@media screen and (max-width: 768px) {
		width: 100px;
		height: 100px;
	}
`;

const DemographicTable = styled.table`
	font-size: 0.8rem;
	font-family: Monospace;
	border-collapse: collapse;
	width: 100%;
	margin-top: 1rem;
	margin-bottom: 1rem;
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
	text-align: left;
	min-width: 200px;
	text-indent: 2rem;

	@media screen and (max-width: 500px) {
		text-indent: 0;
		min-width: 50px;
	}
`;

const TableData = styled.td`
	text-align: left;
	padding: 1rem 0;
`;

export const LightTablePage = () => {
	return (
		<Page title="About">
			<section>
				<DemographicTable>
					<TableRow>
						<TableHeader>Age / Sex / Location </TableHeader>
						<TableData>Late 20s / F / Jamaica </TableData>
					</TableRow>
					<TableRow>
						<TableHeader>Hobbies</TableHeader>
						<TableData>Blender3D, Annoying my cats.</TableData>
					</TableRow>
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

				<PhotoGrid>
					{ExampleAlbum.map((image: StaticImageData, index: number) => (
						<CustomImage
							key={index}
							src={image}
							alt="Example Album"
							width={300}
							height={300}
							style={{ objectFit: "cover" }}
							placeholder="blur"
						/>
					))}
				</PhotoGrid>
			</section>
		</Page>
	);
};

export default LightTablePage;
