import * as React from "react";
import Page from "../containers/layout/page";
import "animate.css";
import { Section, Container, ScrollDown } from "../components/global";
import CurrentReads from "../components/currentReads";

export const AboutPage = () => {
	return (
		<Page title="About">
			<Section>
				<Container> I am a late 20s woman from Kingston Jamaica.</Container>
				<ScrollDown />
			</Section>

			<CurrentReads />
		</Page>
	);
};

export default AboutPage;
