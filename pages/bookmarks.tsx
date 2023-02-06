import Page from "../containers/layout/page";
import styled from "@emotion/styled";
import RolodexLinks from "../data/rolodex_list";

const Bookmark = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	min-height: 100px;

	& a {
		font-weight: 600;
	}

	& li {
		margin: 0.5rem;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export default function Bookmarks() {
	return (
		<Page title="Bookmarks">
			<Bookmark>
				{RolodexLinks.map((item) => (
					<ul>
						<li>
							<a href={item.links} target="_blank">
								{item.name}
							</a>
							<p>{item.description}</p>
						</li>
					</ul>
				))}
			</Bookmark>
		</Page>
	);
}
