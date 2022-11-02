import * as React from 'react';
import styled from "@emotion/styled";
import { Colors } from '../styles/colors';

const HomeLink = styled.a`
    display: block;
    margin: 1rem auto;
`;

const ProjectContainer = styled.div`
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`;

const Project = styled.div`
    border-radius: 5px;
    min-width: 400px;
    border: 1px solid ${Colors.lightAccent};
    padding: 2rem;
    flex-direction: column;
    gap: 0.5rem;
`;

const ProjectNumber = styled.span`
    color: ${Colors.lightAccent};
    margin-right: 0.5rem;
`;

const ProjectTitle = styled.h3`
    font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
    color: ${Colors.lightAccent};
    font-size: 0.8rem;
`;

const ProjectLink = styled.a`
    color: ${Colors.lightAccent};
    font-size: 0.8rem;
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

const Projects = [
    {
        title: 'Outside',
        description: 'A critter-filled garden to practice dom manipulation.',
        link: '/project/01_outside',
    },
    {
        title: 'Outside Sky',
        description: 'Duplicate of 001 Outside with a star theme.',
        link: '/project/02_skygen_v1',
    }
]

export default function Directory() {
  return (
    <section>
        <HomeLink href="/">← Home</HomeLink>
        <ProjectContainer>
            {Projects.map((project, index) => (
                <Project key={index}>
                    <ProjectTitle>
                    <ProjectNumber>{index + 1}</ProjectNumber>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectLink href={project.link}>View Project</ProjectLink>
                </Project>
            ))}
        </ProjectContainer>
    </section>
  );
}
