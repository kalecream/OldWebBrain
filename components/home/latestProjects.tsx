import * as React from "react";
import { Button, CapsTitle, Container, Section } from "../global";
import Projects from "../../data/projectsData";
import styled from "@emotion/styled";

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
  height: 300px;

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
                        style={{ paddingBottom: "20px" }}
                      >
                        {" "}
                        {project.created}
                      </small>
                      <p style={{ textAlign: "start" }}>
                        {project.description}
                      </p>
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
                          <Button
                            href={`/projects/${project.id}`}
                            style={{
                              color: "var(--body)",
                              border: "1px solid var(--body)",
                            }}
                          >
                            View
                          </Button>
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
