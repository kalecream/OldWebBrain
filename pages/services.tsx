import Page from "../containers/layout/page";
// import Services from "../data/serviceData";
import styled from "@emotion/styled";
import "animate.css";
import { Section } from "../components/global";
import Link from "next/link";

const Sections = [
  {
    name: "Illustration",
    description:
      "Accurate and visually appealing models simple 3D model for visualization or design purposes",
    cost: "$20/hour",
    link: "/services/illustration",
  },
  {
    name: "Website Development",
    description:
      "Creation of custom websites that are visually appealing, user-friendly, and optimized for search engines to meet your business needs or for personal use.",
    cost: "$20/hour",
    link: "/services/website-development",
  },
  {
    name: "Automation",
    description: "Create custom automation for your business or personal use.",
    cost: "$20/hour",
    link: "/services/automation",
  },
  {
    name: "Administration",
    description:
      "Create custom administration for your business or personal use.",
    cost: "$20/hour",
    link: "/services/administration",
  },
  {
    name: "Content Creation",
    description: "Create custom content for your business or personal use.",
    cost: "$20/hour",
    link: "/services/content-creation",
  },
];

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-end;

  * {
    flex: 1 1 1rem;
  }
  
  @media (min-width: 1024px) {
    margin: 0 4rem; 
  }
`;

const ProjectCard = styled(Link)`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  padding: var(--padding);
  flex-direction: column;
  border: var(--border);
  border-radius: var(--border-radius-small);

  // TODO: Fix section hover
  &:hover,
  &:active {
    background: var(--faint);
    border-radius: var(--border-radius);
  }

  @media (max-width: 750px) {
    width: 100%;
    height: max-content;
    padding: 1rem;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    height: 500px;
    margin: 0 1rem;
  }

  & > h2 {
    color: var(--primary);
    font-size: 2rem;
    font-weight: 600;
    padding: 0;
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 550px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 1200px) {
      max-width: 25rem;
      line-height: 1.1;
    }
  }

  & > p {
    max-width: 25rem;
    line-height: 1.5;
    font-size: 0.9rem;
    color: var(--caption);

    @media (max-width: 550px) {
      width: 100%;
    }
  }

  & img {
    padding: 0.5rem;

    @media screen and (max-width: 1024px) {
      display: none;
    }

    @media screen and (min-width: 1024px) {
      width: 100%;
      height: 100%;
    }
  }
`;

const ServicesTerms = styled.div`
  margin: 3rem auto;

  & > p {
    max-width: 55rem;
    text-align: justify;

    @media (max-width: 750px) {
      margin: 1.5rem 1rem;
    }
  }
`;

export default function Services() {
  return (
    <Page title="Let's Work Together">
      <Section>
        <CardContainer>
          {Sections.map((section) => (
            <ProjectCard
              href={section.link}
              className="animate__animated animate__fadeInUp"
            >
              <h2>{section.name}</h2>
              <p>{section.description}</p>
              <img
                width={100}
                height={100}
                alt={""}
                src={`/img/Services/${section.name}.svg`}
              />
            </ProjectCard>
          ))}
        </CardContainer>

        <ServicesTerms>
          <p className="animate__animated animate__fadeInUp">
            I understand that budget can be a major concern for my clients.
            That's why I offer flexible pricing options to ensure that I can
            meet the budget of every client.
          </p>
          <p className="animate__animated animate__fadeInUp">
            I offer a range of services at various price points, so you can
            choose the level of support that fits your budget. I am also open to
            negotiating rates for larger projects or longer-term engagements. I
            believe that everyone should have access to high-quality services,
            regardless of budget. That's why I am committed to finding solutions
            that work for you and your financial needs.
          </p>
          <p className="animate__animated animate__fadeInUp">
            Please don't hesitate to contact me to discuss your budget and how I
            can help you achieve your goals within your means. I look forward to
            working with you! I am always open to discussing new project ideas
            and finding ways to meet the unique needs of my clients. Please do
            not hesitate to contact me to learn more about how I can help you
            achieve your goals. I currently accept payment for projects through{" "}
            <a href="https://paypal.me/SabrinaMedwinter?locale.x=en_US">
              Paypal
            </a>{" "}
            or Payoneer.
          </p>
        </ServicesTerms>
      </Section>
    </Page>
  );
}
