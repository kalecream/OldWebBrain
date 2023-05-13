import * as React from "react";
import { Button, CapsTitle, Container, Section } from "../global";
import Projects from "../../data/projectsData";
import styled from "@emotion/styled";
import {
  faToolbox,
  faLink,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";

// interface Project {
// 	id: number;
// 	title: string;
// 	description: string;
// 	image: string;
// 	created_at: string;
// }

const Thirds = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 1rem 0;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    flex-direction: row;

    & nth-child(1) {
      width: 33%;
    }

    & nth-child(2) {
      width: 66%;
    }
  }
`;

const ProjectCard = styled.div`
  width: 300px;

  border-radius: 0.5rem;
  background-color: var(--primary);
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.3);
  // transition: all 0.3s ease-in-out;
  // // background-image: url(${(props: { image: string }) => props.image});
  // // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
  // //   url(${(props: { image: string }) => props.image});

  &:hover {
    animation: hover 0.3s ease-in-out forwards;
    transform: rotate(1.02deg) scale(0.95);
  }

  @keyframes hover {
    0% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: rotate(1.02deg) scale(0.95);
    }

  @media (max-width: 425px) {
    width: 325px;
  }

  @media (min-width: 768px) {
  
  }

  @media (min-width: 1024px) {
  }
`;

//TODO: Move to Basics.tsx
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  // background: linear-gradient(140deg, var(--primary), var(--secondary));
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0.5rem;
  color: var(--body);

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
const ProjectTitle = styled.h5`
  color: var(--body);
  align-content: flex-start;
`;

const ProjectDate = styled.small`
  opacity: 0.8;
`;

const ProjectDescription = styled.p`
  height: 150px;
  width: 80%;
  line-height: 1.4;
  opacity: 1;

  @media (max-width: 768px) {
    padding: 0;
    margin: 0.25rem 0;
  }
`;

const ProjectTechnologies = styled.div`
  width: 80%;
  color: var(--body);
  padding: 0.5rem 0;
`;

const ProjectLanguages = styled.div`
  width: 80%;
  color: var(--body);
  padding: 0.5rem 0;
`;

const ProjectDataPoint = styled.ul`
  color: var(--body);
  font-size: 0.7rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;
  gap: 0.2rem;

  & li a:hover {
    color: var(--background);
  }

  & li a {
    padding: 0.1rem 0.3rem;
    border: 1px solid var(--body);
    border-radius: 0.5rem;
    color: var(--body);
    transition: all 0.3s ease-in-out;
  }

  & li {
    margin: 0.1rem;
    padding: 0;
  }
`;

const Emoji = styled.span`
  margin-right: 0.5rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    margin: 0.15rem;
  }
`;

const ProjectButton = styled(Button)`
  color: var(--text);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 0.5rem;
  opacity: 0.2;
`;

const LatestProjects = () => {
  return (
    <Section>
      <Thirds>
        <Container style={{ textAlign: "center", margin: "1em 0" }}>
          <CapsTitle>My Latest Projects !</CapsTitle>
        </Container>
        <Container style={{ overflow: "hidden" }}>
          {Projects.map(
            (project) =>
              project.display && (
                <ProjectCard
                  image={
                    project.image
                      ? project.image.trim()
                      : "https://media.istockphoto.com/id/1288852672/photo/old-wall-pattern-texture-cement-blue-dark-abstract-blue-color-design-are-light-with-black.jpg"
                  }
                  key={project.id}
                  className="col-md-4"
                >
                  <ProjectImage src={project.image} alt="" />
                  <Overlay>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDate>{project.created}</ProjectDate>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                    <ProjectTechnologies>
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
                    </ProjectTechnologies>
                    <ProjectLanguages>
                      {project.language ? (
                        <ProjectDataPoint>
                          <Emoji>
                            <FontAwesomeIcon
                              icon={faLanguage}
                              title="Languages"
                            />
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
                    </ProjectLanguages>
                    <div
                      className="btn-group"
                      style={{
                        margin: "1rem 0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {project.link ? (
                        <ProjectButton href={project.link} target={"_blank"}>
                          <FontAwesomeIcon
                            icon={faLink}
                            style={{ color: "var(--body)" }}
                          />
                        </ProjectButton>
                      ) : null}
                    </div>
                  </Overlay>
                </ProjectCard>
              )
          )}
        </Container>
      </Thirds>
    </Section>
  );
};

export default LatestProjects;
