import styles from "../styles/Home.module.css";
import Page from "../containers/layout/page";
import HeroImage from "../assets/images/Under_Construction.webp";
import styled from "@emotion/styled";
import { Colors } from "../styles/colors";
import Image from "next/image";

const directory = [
	{
		title: "About",
		links: "/about",
	},
	{
		title: "Contact",
		links: "/contact",
	},
	{
		title: "Blog",
		links: "/blog",
	},
	{
		title: "Directory",
		links: "/directory",
	},
];

export default function Home() {
	return (
		<Page title="Rolodex">
			<section>

			</section>
		</Page>
	);
}
