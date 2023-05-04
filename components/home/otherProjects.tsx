import React from "react";
import { Container, HalfColumn } from "../global";
import "animate.css";
import styled from "@emotion/styled";
import Link from "next/link";

const ProjectSection = styled.div`
  width: 100%;
  padding: 0 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const PodcastName = styled.h2`
  font-size: 3.5rem;
  color: var(--primary);
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

const ImageText = styled.div`
  display: flex;

  margin: 1rem 2rem;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: min-content;
  }

  & > div {
    margin: 3rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & img {
    object-fit: contain;
  }

  & p {
    width: 25rem;
  }
`;

const OtherProjects = () => {
  return (
    <ProjectSection>
      <SectionTitle className="animate__animated animate__fadeInUp">
        I started...
      </SectionTitle>
      <Container>
        <ImageText>
          <HalfColumn>
            <Link href={"https://open.spotify.com/show/3TEYSulKavQrhebkPLHkth"}>
              <PodcastName>Bite-Sized Binge</PodcastName>
            </Link>
            <p>
              I'm checking out audiodramas, movies, manga, short stories, music
              and etc to help explore my own tastes and to keep discovering
              great stuff!
            </p>
          </HalfColumn>
          <HalfColumn>
            <iframe
              style={{ borderRadius: "12" }}
              src="https://open.spotify.com/embed/show/3TEYSulKavQrhebkPLHkth?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </HalfColumn>
        </ImageText>

        {/* <ImageText>
					<HalfColumn>
						<Image
							src={ThreeD[3]}
							alt="Under Construction"
							width={500}
							height={500}
						/>
					</HalfColumn>
					<HalfColumn>
						<h1>KaleCream </h1> 
                        <p>I also have a YouTube channel where I vlog or live-stream my
						pomodoro and crafting sessions. <br/><br/> I do 45+15 and 25+5 sessions for ~12 hours a day.</p>
					</HalfColumn>
				</ImageText> */}
      </Container>
    </ProjectSection>
  );
};

export default OtherProjects;
