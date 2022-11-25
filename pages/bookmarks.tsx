import styles from "../styles/Home.module.css";
import Page from "../containers/layout/page";
import HeroImage from "../assets/images/Under_Construction.webp";
import styled from "@emotion/styled";
import { Colors } from "../styles/colors";
import RolodexLinks from "../data/rolodex_list";

const RolodexItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin: 1rem;
	padding: 1rem;
	border: 1px solid #eaeaea;
	border-radius: 10px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	background-color: #fff;
	width: 100%;
	max-width: 800px;
	min-height: 100px;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export default function Bookmarks() {
	return (
		<Page title="Bookmarks">
			{RolodexLinks.map((item) => (
				<RolodexItem>
					<ol>
						<li>
							<a href={item.links} target='_blank'>{item.name}</a>
							<p>{item.description}</p>
						</li>
					</ol>
				</RolodexItem>
			))}
		</Page>
	);
}
