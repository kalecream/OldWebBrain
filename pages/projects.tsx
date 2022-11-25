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

const PageTitle = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	color: ${Colors.primary};
	margin-bottom: 1rem;
`;

const ProjectContainer = styled.div`
	justify-content: space-between;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;

const Project = styled.div`
	border-radius: 5px;
	width: 25%;
	min-width: 400px;
	background-color: ${Colors.darkShade};
    background-image: 
	linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.45) )
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: grid;
	padding: 2rem;
	gap: 0.15rem;
`;

const ProjectNumber = styled.span`
	color: ${Colors.lightAccent};
	margin-right: 0.5rem;
`;

const ProjectTitle = styled.h2`
	font-size: 1.5rem;
	color: ${Colors.lightShade};
`;

const ProjectDescription = styled.p`
	margin-top: 1rem;
	margin-bottom: 1rem;
	color: ${Colors.neutral[300]};
	font-size: 0.8rem;
`;

const ProjectTechnologies = styled.ul`
	color: ${Colors.neutral[300]};
	font-size: 0.8rem;
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
		background-color: ${Colors.darkAccent};
	}

	& li a {
		background-color: ${Colors.lightAccent};
		padding: 0.1rem 0.4rem;
		border-radius: 3px;
		color: ${Colors.lightShade};
	}
`;

const ProjectLanguage = styled.ul`
	color: ${Colors.neutral[300]};
	font-size: 0.8rem;
	flex-wrap: wrap;
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
		background-color: ${Colors.darkAccent};
	}

	& li a {
		background-color: ${Colors.lightAccent};
		padding: 0.1rem 0.4rem;
		border-radius: 3px;
		color: ${Colors.lightShade};
`;

const ProjectLink = styled.a`
	color: ${Colors.neutral[300]};
	font-size: 0.65rem;
	float: right;
	margin: 1.5rem 0 0 0;
	padding: 1rem;
	max-height: 3rem;
	width: 45%;
	text-align: center;
	border-radius: 5px;
	border: 1px solid ${Colors.neutral[300]};

	&:hover {
		font-weight: bold;
		border-radius: 5px;
		text-decoration: none;
		background-color: ${Colors.primary};
		color: ${Colors.lightShade};
	}
`;

const ProjectItem = styled.div`
	color: ${Colors.neutral[300]};
	font-size: 0.8rem;
	margin: 0.5rem 0 0 0;
`;

const Emoji = styled.span`
	margin-right: 0.5rem;
	margin-top: 1rem;
`;

const PageDescription = styled.p`
	color: ${Colors.neutral[700]};
	font-size: 0.8rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	padding: 0 0.5rem;
`;

const Projects = [
	{
		title: "Blue Orange",
		image:
			"https://github.com/kalecream/dotfiles/blob/main/images/wallpaper.png?raw=true",
		description: (
			<span>
				This is a duotone i3wm rice.
				<br />
				<br /> For a while, my mouse wasn't working properly, so I had to use
				the keyboard to navigate. I switch from Budgie to i3wm and I'm loving
				it. I have a mouse that works now, but for how long? ¯\_(ツ)_/¯
			</span>
		),
		link: "https://github.com/kalecream/dotfiles",
		repoName: "dotfiles",
		technology: [
			<a href="https://i3wm.org/">i3wm</a>,
			<a href="https://manpages.ubuntu.com/manpages/bionic/en/man1/rofi.1.html">
				Rofi
			</a>,
			<a href="https://sw.kovidgoyal.net/kitty/kitty">Kitty</a>,
			<a href="https://feh.finalrewind.org/">Feh</a>,
		],
		language: ["Bash"],
		created: "2022-07-07",
		updated: ""
	},
	{
		title: "Morning Messages",
		image:
			"https://images.unsplash.com/photo-1523145667259-072b00e52735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
		description: (
			<span>
				A simple python script to automate the process of sending my boyfriend
				current news articles and cute kaomoji-filled messages in the morning
				via Whatsapp Web. <br />
				<br /> Who cares about being corny if you enjoyed what you're doing?
			</span>
		),
		link: "https://github.com/kalecream/morning-messages",
		repoName: "morning-messages",
		technology: [
			<a href="https://pywhatkit.herokuapp.com/">PyWhatKit</a>,
			<a href="https://geopy.readthedocs.io/en/stable/">GeoPy</a>,
			<a href="https://openweathermap.org/">OpenWeatherMap API</a>,
		],
		language: ["Python"],
		created: "2021-11-15"
	},
	{
		title: "Trality Bots",
		image:
			"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
		description: (
			<span>
				I'm almost completely new to trading, but I've been floundering in
				making crypto trading bots for the last year or so. I decided to take my
				attempts public.
			</span>
		),
		link: "https://github.com/kalecream/TralityTestBots_v2",
		repoName: "TralityTestBots_v2",
		technology: [<a href="https://www.trality.com/">Trality</a>],
		language: ["Python"],
		created: "2022-11-07"
	},
];

export const Directory: any = () => {
	return (
		<Page title="Projects">
			<section>
				<ProjectContainer>
					{Projects.map((project, index) => (

						<Project key={index}>
							<ProjectTitle>
								<ProjectNumber>{index + 1}</ProjectNumber>
								{project.title}
							</ProjectTitle>

							<ProjectDescription>{project.description}</ProjectDescription>
							{project.repoName ? (
								<>
									<ProjectItem>
										<Emoji>
											<FontAwesomeIcon icon={faClockFour} />
										</Emoji>
										{project.created}
									</ProjectItem>
									{/* <ProjectItem>
										<Emoji>
											<FontAwesomeIcon icon={faCodeCommit} />
										</Emoji>
										{project.updated}
									</ProjectItem> */}
									{/* <ProjectItem>
                                    <Emoji><FontAwesomeIcon icon={faStar}/></Emoji>
                                    {FetchGithubAPIProjects(project.repoName)[2]}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Emoji><FontAwesomeIcon icon={faBinoculars}/></Emoji>
                                    {FetchGithubAPIProjects(project.repoName)[3]}
                                    <Emoji><FontAwesomeIcon icon={faCodeFork}/></Emoji>
                                    {FetchGithubAPIProjects(project.repoName)[3]}
                                </ProjectItem> */}
								</>
							) : null}
							{project.technology ? (
								<ProjectTechnologies title="Technologies">
									<Emoji>
										<FontAwesomeIcon icon={faToolbox} />
									</Emoji>
									{project.technology?.map((tech, index) => (
										<li key={index}>{tech}</li>
									))}
								</ProjectTechnologies>
							) : null}
							{project.language ? (
								<ProjectLanguage>
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
								</ProjectLanguage>
							) : null}
							{project.link ? (
								<ProjectLink href={project.link} target={"_blank"}>
									<Emoji>
										<FontAwesomeIcon icon={faLink} />
									</Emoji>
									Github
								</ProjectLink>
							) : null}
						</Project>
					))}
				</ProjectContainer>
			</section>
		</Page>
	);
}

export default Directory;
