import * as React from "react";
import styled from "@emotion/styled";
import { Colors } from "../styles/colors";
import Page from "../containers/layout/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faToolbox,
	faLanguage
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { create } from "domain";
import "animate.css";
import { Section, Container, Card, CardTitle, Button } from "../components/global";
import Projects from "../data/projectsData";

const ProjectDescription = styled.p`
	color: ${Colors.neutral[200]};
	font-size: 0.85rem;
`;

const RigidContainer = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
`;

const ProjectDataPoint= styled.ul`
	color: ${Colors.neutral[300]};
	font-size: 0.85rem;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 0.25rem 0;

	& li {
		display: grid;
		place-items: center;
		margin-top: 0.5rem;
		margin-right: 0.5rem;
	}

	& li a:hover {
		background-color: ${Colors.primary};
		color: ${Colors.lightShade};
	}

	& li a {
		background-color: ${Colors.lightShade};
		padding: 0.1rem 0.4rem;
		border-radius: 3px;
		color: ${Colors.primary};
	}
`;

const Emoji = styled.span`
	margin-right: 0.5rem;
	margin-top: 1rem;
`;

export const Directory: any = () => {
	return (
		<Page title="Projects">
			<Section>
				<Container>
					{Projects.map((project, index) => (
						<Card key={index} className="animate__animated animate__fadeInUp">
							<CardTitle>{project.title}</CardTitle>
							<ProjectDescription>{project.description}</ProjectDescription>
							<RigidContainer>
							{project.technology ? (
								<ProjectDataPoint title="Technologies">
									<Emoji>
										<FontAwesomeIcon icon={faToolbox} />
									</Emoji>
									{project.technology?.map((tech, index) => (
										<li key={index}>{tech}</li>
									))}
								</ProjectDataPoint>
							) : null}
							{project.language ? (
								<ProjectDataPoint>
									<Emoji>
										<FontAwesomeIcon icon={faLanguage} title="Languages" />
									</Emoji>
									{project.language?.map((lang, index) => (
										<li key={index}>
											<a title="Clicking this does nothing right now. Sorry.">
												{lang}
											</a>
										</li>
									))}
								</ProjectDataPoint>
							) : null}
							
							</RigidContainer>
							{project.link ? (
								<Button href={project.link} target={"_blank"}>
									View on Github
								</Button>
							) : null}
						</Card>
					))}
				</Container>
			</Section>
		</Page>
	);
};

export default Directory;
