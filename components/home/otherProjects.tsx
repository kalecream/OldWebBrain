import React from "react";
import { Container, HalfColumn } from "../global";
import Image from "next/image";
import "animate.css";
import { OtherMultimediaProjectPictures } from "../../assets";
import styled from "@emotion/styled";
import Link from "next/link";

const ProjectSection = styled.div`
  width: 100%;
  padding: 0 4rem;
  margin-top: 200px;
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
  font-size: 3rem;
  color: var(--primary);
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const ImageText = styled.div`
  display: flex;
  margin: 1rem 2rem;

  & > div {
    margin: 3rem 1rem;
    display: grid;
    place-items: center;
  }

  & img {
    object-fit: contain;
  }

  & p {
    font-size: 0.9rem;
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
            <Link
              href={
                "https://anchor.fm/sabrina-medwinter/episodes/Test-Episode--Bite-Sized-Binge-e1tresd"
              }
            >
              <PodcastName>Bite-Sized Binge</PodcastName>
            </Link>
            <p>
              A 15 minute podcast where I talk about the media I've been
              consuming around a specific theme each week. <br />
              <br /> I'm checking out audiodramas, one-shot manga, short stories
              and music to help explore my own tastes and to keep discovering
              great stuff I would have otherwise missed.
            </p>
          </HalfColumn>
          <HalfColumn>
            <Link
              href={
                "https://anchor.fm/sabrina-medwinter/episodes/Test-Episode--Bite-Sized-Binge-e1tresd"
              }
            >
              <Image
                alt="Bite Sized Binge Podcast Poster. It is the cartoonized version of a microphone between hamburger buns."
                src={OtherMultimediaProjectPictures[0]}
                width={300}
                height={300}
              />
            </Link>
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
