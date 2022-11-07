import * as React from "react";
import styled from "@emotion/styled";
import { Colors } from "../styles/colors";
import Page from "../containers/layout/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox, faLanguage, faLink, faClockFour, faCodeCommit, faStar, faBinoculars, faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const HomeLink = styled.a`
	display: block;
	margin: 1rem auto;
`;

const ProjectContainer = styled.div`
	justify-content: space-around;
	display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(400px, 1fr));
	gap: 0.5rem;
`;

const Project = styled.div`
	border-radius: 5px;
	width: 20%;
	min-width: 400px;
    background-image: url(${(props) => props.image});
    object-fit: cover;
	border: 1px solid ${Colors.lightAccent};
	padding: 2rem;
	flex-direction: column;
	gap: 0.5rem;
`;

const ProjectNumber = styled.span`
	color: ${Colors.lightAccent};
	margin-right: 0.5rem;
`;

const ProjectTitle = styled.h2`
	font-size: 1.5rem;
`;

const ProjectImage = styled.img`
	height: 250px;
	width: 100%;
	border-radius: 5px;
`;

const ProjectDescription = styled.p`
	margin-top: 1rem;
    margin-bottom: 2rem;
	color: ${Colors.lightAccent};
	font-size: 0.8rem;
`;

const ProjectTechnologies = styled.ul`
	color: ${Colors.lightAccent};
	margin-top: 1rem;
	font-size: 0.8rem;
	display: flex;
	flex-wrap: wrap;
	list-style: none;

	& li {
		margin-right: 0.5rem;
		color: ${Colors.lightShade};
		background-color: ${Colors.lightAccent};
		border-radius: 15px;
		padding: 0.2rem 0.5rem;
	}
`;

const ProjectLanguage = styled.ul`
	color: ${Colors.lightAccent};
	margin-top: 1rem;
	font-size: 0.8rem;
	flex-wrap: wrap;
	display: flex;
	flex-wrap: wrap;
	list-style: none;

	& li {
		margin-right: 0.5rem;
		color: ${Colors.lightShade};
		background-color: ${Colors.darkShade};
		border-radius: 15px;
		padding: 0.2rem 0.5rem;
	}
`;

const ProjectLink = styled.a`
	color: ${Colors.lightAccent};
	font-size: 0.65rem;
	float: right;
	margin: 1rem 0 0 0;
	padding: 1rem;

	&:hover {
		font-weight: bold;
		border-radius: 50px;
		text-decoration: none;
		background-color: ${Colors.primary};
		color: ${Colors.lightShade};
	}
`;

const ProjectItem = styled.div`
    color: ${Colors.lightAccent};
    font-size: 0.8rem;
    margin: 1rem 0 0 0;
`;

const Emoji = styled.span`
	margin-right: 0.5rem;
    margin-top: 0.25rem;
`;

const Projects = [
	{
		title: "Blue Orange",
		image:
			"https://github.com/kalecream/dotfiles/blob/main/images/wallpaper.png?raw=true",
		description: (
			<p>
				This is a duotone{" "}
				<a href="https://i3wm.org/" target={"_blank"}>
					i3wm
				</a>{" "}
				Rice.
				<br />
				<br /> For a while, my mouse wasn't working properly, so I had to use
				the keyboard to navigate. I switch from Budgie to i3wm and I'm loving
				it. I have a mouse that works now, but for how long? ¯\_(ツ)_/¯
			</p>
		),
		link: "https://github.com/kalecream/dotfiles",
        repoName: 'dotfiles',
		technology: ["i3wm", "rofi", "kitty", "feh"],
		language: ["bash"],
	},
    {
        title: "Morning Messages",
        image: "https://images.unsplash.com/photo-1523145667259-072b00e52735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
        description: (
            <p>
                A simple python script to automate the process of sending my boyfriend current news articles and cute kaomoji-filled messages in the morning via Whatsapp Web. <br/><br/> I now think this project was cringy, but who cares about being corny if you enjoyed what you're doing?
            </p>
        ),
        link: "https://github.com/kalecream/morning-messages",
        repoName: "morning-messages",
        technology: [ "selenium", "beautifulsoup"],
        language: ["python"],
    },
];

const FetchGithubAPIProjects = (repoName:string) => {
    const [projects, setProjects] = useState([]);
    const GitURL = `https://api.github.com/repos/kalecream/${repoName}/commits`;
    let today = new Date();

    useEffect(() => {
        fetch(GitURL)
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
            });
    }, []);

    let options: Intl.DateTimeFormatOptions = {
        localeMatcher: "best fit", month: "short",
        day: "2-digit", year: "numeric",
        hour: "2-digit", minute: "2-digit", hour12: false
    };

    let createdDate = new Date(projects[-1]?.commit?.author?.date).toLocaleDateString("en-US", options).replace(/,/g, "");
    let updatedDate = new Date(projects[0]?.commit?.author?.date).toLocaleDateString("en-US", options).replace(/,/g, "");
    let updatedDaysAgo = Math.floor((today.getTime() - new Date(projects[0]?.commit?.author?.date).getTime()) / (1000 * 3600 * 24));
    let createdDaysAgo = Math.floor((today.getTime() - new Date(projects[-1]?.commit?.author?.date).getTime()) / (1000 * 3600 * 24));
    let updated = `${updatedDate} ︲ ${updatedDaysAgo} Days ago`;
    let created = `${createdDate} ︲ ${createdDaysAgo} Days ago`;
    return [created, updated];
};

export default function Directory() {
    

	return (
		<Page>
			<section>
				<ProjectContainer>
					{Projects.map((project, index) => (
						<Project key={index} props={project.image}>
                            {/* <ProjectImage src={project.image} /> */}
							<ProjectTitle>
								<ProjectNumber>{index + 1}</ProjectNumber>
								{project.title}
							</ProjectTitle>
                            
							<ProjectDescription>{project.description}</ProjectDescription>
                            { project.repoName ? (
                                <>
                                    <ProjectItem>
                                    <Emoji>
                                        <FontAwesomeIcon icon={faClockFour} />
                                    </Emoji>
                                    {FetchGithubAPIProjects(project.repoName)[0]   }
                                </ProjectItem>
                                <ProjectItem>
                                    <Emoji>
                                        <FontAwesomeIcon icon={faCodeCommit} />
                                    </Emoji>
                                    {FetchGithubAPIProjects(project.repoName)[1]}
                                </ProjectItem>
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
                                
                                ) : null
                            }
							{project.technology ? (
								<ProjectTechnologies>
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
										<FontAwesomeIcon icon={faLanguage} />
									</Emoji>
									{project.language?.map((lang, index) => (
										<li key={index}>{lang}</li>
									))}
								</ProjectLanguage>
							) : null}
                            { project.link ? (
                                <ProjectLink href={project.link} target={"_blank"}>
                                    <Emoji>
                                        <FontAwesomeIcon icon={faLink} />
                                    </Emoji>
                                    Github
                                </ProjectLink>
                                ) : null
                            }
						</Project>
					))}
				</ProjectContainer>
			</section>
		</Page>
	);
}
