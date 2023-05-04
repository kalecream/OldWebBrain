import * as React from "react";
import { Button, CapsTitle, Container, Section } from "../global";
import Projects from "../../data/projectsData";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox, faLanguage } from "@fortawesome/free-solid-svg-icons";
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
  height: 400px;

  border-radius: 0.5rem;
  background-color: var(--accent);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  object-fit: cover;
  overflow-y: scroll;
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
                      <h5
                        className="card-title"
                        style={{ alignContent: "flex-start" }}
                      >
                        {project.title}
                      </h5>
                      <small
                        className="text-muted"
                        style={{
                          paddingBottom: "1rem",
                          color: "var(--muted)",
                        }}
                      >
                        {project.created}
                      </small>
                      <p style={{ textAlign: "start" }}>
                        {project.description}
                      </p>
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
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="btn-group"
                          style={{ alignContent: "flex-end" }}
                        >
                          {project.link ? (
                            <Button secondary href={project.link} target={"_blank"}>
                              View on Github
                            </Button>
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
