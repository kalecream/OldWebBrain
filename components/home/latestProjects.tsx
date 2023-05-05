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
  gap: 1rem;
  margin: 1rem 0;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 1100px) {
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
  position: relative;
  width: 300px;
  height: 450px;

  border-radius: 0.5rem;
  background-color: var(--accent);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  object-fit: cover;
  // background-image: url(${(props: { image: string }) => props.image});
  // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
  //   url(${(props: { image: string }) => props.image});

  &:hover {
    animation: hover 0.3s ease-in-out forwards;
    transform: rotate(1.02deg) scale(0.95);
  }
`;

//TODO: Move to Basics.tsx
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  // background: linear-gradient(140deg, var(--primary), var(--secondary));
  position: absolute;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 1rem 2rem;
  color: var(--body;
`;
const ProjectTitle = styled.h5`
  align-content: flex-start;
  position: absolute;
  top: 2rem;
  left: 2rem;
`;

const ProjectDate = styled.small`
  position: absolute;
  top: 4.5rem;
  left: 2rem;
  opacity: 0.8;
`;

const ProjectDescription = styled.p`
  position: absolute;
  top: 8rem;
  left: 2rem;
  height: 150px;
  width: 80%;
  line-height: 1.4;
  overflow-y: scroll;
`;

const ProjectTechnologies = styled.div`
  position: absolute;
  top: 18rem;
  left: 2rem;
  display: flex;
  overflow-x: scroll;
  width: 80%;
`;

const ProjectLanguages = styled.div`
  position: absolute;
  top: 23rem;
  left: 2rem;
  display: flex;
  overflow-x: scroll;
  width: 80%;
`;

const ProjectDataPoint = styled.ul`
  color: var(--grey);
  font-size: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0.15rem 0;

  & li {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }

  & li a:hover {
    color: var(--background);
  }

  & li a {
    padding: 0.3rem 0.6rem;
    border: 1px solid var(--text);
    border-radius: 0.5rem;
    opacity: 0.8;
    color: var(--text);
    transition: all 0.3s ease-in-out;
  }
`;

const Emoji = styled.span`
  margin-right: 0.5rem;
  margin-top: 0.5rem;
`;

const ProjectButton = styled(Button)`
  color: var(--text);
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
                  <Overlay>
                    <div className="card-body">
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
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="btn-group"
                          style={{
                            position: "absolute",
                            left: "2rem",
                            bottom: "1rem",
                          }}
                        >
                          {project.link ? (
                            <ProjectButton
                              href={project.link}
                              target={"_blank"}
                            >
                              <FontAwesomeIcon icon={faLink} />
                            </ProjectButton>
                          ) : null}
                        </div>
                      </div>
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
