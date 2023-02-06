import * as React from "react";
import styled from "@emotion/styled";
import Page from "../containers/layout/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox, faLanguage } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import {
	Section,
	Container,
	Card,
	CardTitle,
	Button,
} from "../components/global";
import Projects from "../data/projectsData";

const ProjectDescription = styled.p`
	color: var(--grey);
	font-size: 0.85rem;
`;

const RigidContainer = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
`;

const ProjectDataPoint = styled.ul`
	color: var(--grey);
	font-size: 0.85rem;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 0.25rem 0;

	& li {
		display: flex;
		margin-top: 0.5rem;
		margin-right: 0.5rem;
	}

	& li a:hover {
		color: var(--background);
	}

	& li a {
		background-color: var(--background);
		padding: 0.1rem 0.4rem;
		border-radius: 5px;
		border: 1px solid var(--secondary);
		color: var(--secondary);
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
