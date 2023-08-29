import * as React from "react";
import styled from "@emotion/styled";
import Page from "../containers/layout/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox, faLanguage } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import { Section, CardTitle, Button } from "@components/_basics/Basics";
import Projects from "../data/projectsData";

const RigidContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const ProjectDataPoint = styled.ul`
  color: var(--grey);
  font-size: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0.15rem 0;

  & li {
    display: flex;
    margin-top: 0.15rem;
    margin-right: 0.15rem;
  }

  & li a:hover {
    color: var(--body);
    color: var(--primary);
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
  color: var(--primary);
`;

const ArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  gap: 0.25rem;
  min-width: 200px;
  max-width: 400px;

  & h2 {
    padding: 0;
    text-align: start;
    color: var(--primary);
  }

  & p {
    margin: 1rem 0;
    color: var(--grey);
    font-size: 0.85rem;
  }

  &:hover {
    background-color: var(--faint);
    cursor: pointer;
  }
`;

export const Directory: any = () => {
  return (
    <Page title="Projects">
      <Section>
        <RigidContainer>
          {Projects.map((project, index) => (
            <ArticleCard
              key={index}
              className="animate__animated animate__fadeInUp"
            >
              <div>
                <CardTitle>{project.title}</CardTitle>
                <p>{project.description}</p>

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
                {project.link ? (
                  <Button href={project.link} target={"_blank"}>
                    View on Github
                  </Button>
                ) : null}
              </div>
            </ArticleCard>
          ))}
        </RigidContainer>
      </Section>
    </Page>
  );
};

export default Directory;
