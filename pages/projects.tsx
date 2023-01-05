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
				the keyboard to navigate leading to me switching to i3wm I have a mouse
				that works now, but for how long? ¯\_(ツ)_/¯
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
		updated: "",
	},
	{
		title: "Morning Messages",
		image:
			"https://images.unsplash.com/photo-1523145667259-072b00e52735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
		description: (
			<span>
				A simple python script to automate the process of sending my boyfriend
				current news articles and cute kaomoji-filled messages in the morning
				via Whatsapp Web.
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
		created: "2021-11-15",
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
		created: "2022-11-07",
	},
];

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
