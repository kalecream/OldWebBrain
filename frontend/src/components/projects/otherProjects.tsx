import React from 'react';
import { Container, HalfColumn } from 'frontend/src/components/_basics/Basics';
import 'animate.css';
import styled from '@emotion/styled';
import Link from 'next/link';

const ProjectSection = styled.div`
	width: 100%;
	padding: 0 4rem;
	display: flex;
	flex-direction: row;
	place-content: center;

	@media screen and (max-width: 768px) {
		padding: 0;
	}
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
	font-size: 2rem;
	color: var(--primary);
	font-weight: 600;
	line-height: 1.2;
	text-align: center;
	text-transform: capitalize;
	margin-bottom: 1rem;

	&:hover {
		cursor: pointer;
		color: var(--accent);
	}

	@media screen and (max-width: 768px) {
		font-size: 3rem;
	}

	@media screen and (min-width: 768px) {
		font-size: 4rem;
	}
`;

const ImageText = styled.div`
	display: flex;
	place-content: center;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
		width: 100%;
	}

	& > div {
		margin: 2rem 1rem;
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

	@media screen and (max-width: 425px) {
		iframe {
			display: none;
		}
	}

	@media screen and (max-width: 768px) {
		& p {
			width: 100%;
		}
		iframe {
			border-radius: 1rem;
			max-width: 500px;
		}
	}

	@media screen and (min-width: 1024px) {
		iframe {
			border-radius: 1rem;
			max-width: 450px;
		}
	}
`;

const OtherProjects = () => {
	return (
		<Container>
			<SectionTitle className="animate__animated animate__fadeInUp">I started...</SectionTitle>
			<ProjectSection>
				<ImageText>
					<HalfColumn>
						<Link href={'https://open.spotify.com/show/3TEYSulKavQrhebkPLHkth'}>
							<PodcastName>Bite-Sized Binge</PodcastName>
						</Link>
						<p>
							I'm checking out audiodramas, movies, manga, short stories, music and etc to help explore my own tastes
							and to keep discovering great stuff!
						</p>
					</HalfColumn>
					<HalfColumn>
						<iframe
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
			</ProjectSection>
		</Container>
	);
};

export default OtherProjects;