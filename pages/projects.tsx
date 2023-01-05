import * as React from "react";
import styled from "@emotion/styled";
import { Colors } from "../styles/colors";
import Page from "../containers/layout/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faToolbox,
	faLanguage,
	faLink,
	faClockFour,
	faCodeCommit,
	faStar,
	faBinoculars,
	faCodeFork,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { create } from "domain";
import "animate.css";
import { Section, Container, Card, Button } from "../components/global";
import Projects from "../data/projectsData";

const ProjectTitle = styled.h3`
	position: absolute;
	top: 3rem;
	text-align: center;
	color: ${Colors.lightShade};
`;

const ProjectDescription = styled.p`
	color: ${Colors.neutral[200]};
	font-size: 0.85rem;
	padding: 0 2rem;
`;

const RigidContainer = styled.div`
width: 85%;
	display: flex;
	flex-direction: column;
`;

const ProjectDataPoint= styled.ul`
	color: ${Colors.neutral[300]};
	font-size: 0.85rem;
	display: flex;
	flex-wrap: wrap;
	list-style: none;

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

const ProjectLink = styled.a`
position: absolute;
	bottom: 2rem;
	color: ${Colors.neutral[300]};
	font-size: 0.8rem;
	padding: 1rem;
	width: 80%;
	text-align: center;
	border-radius: 1rem;
	font-weight: 600;
	border: 1px solid ${Colors.neutral[300]};

	&:hover {
		border-radius: 5px;
		text-decoration: none;
		color: ${Colors.lightShade};
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
				<Container style={{ margin: 0 }}>
					{Projects.map((project, index) => (
						<Card key={index} className="animate__animated animate__fadeInUp">
							<ProjectTitle>{project.title}</ProjectTitle>
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
								<ProjectLink href={project.link} target={"_blank"}>
									View on Github
								</ProjectLink>
							) : null}
						</Card>
					))}
				</Container>
			</Section>
		</Page>
	);
};

export default Directory;
