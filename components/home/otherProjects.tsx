import React from "react";
import { Container, HalfColumn, Section } from "../global";
import Image from "next/image";
import "animate.css";
import { OtherMultimediaProjectPictures } from "../../assets";
import styled from "@emotion/styled";
import Link from "next/link";

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
`;

const OtherProjects = () => {
	return (
		<Section>
			<Container>
				<h2 className="animate__animated animate__fadeInUp">I started...</h2>
				<ImageText>
					<HalfColumn>
						<Link
							href={
								"https://anchor.fm/sabrina-medwinter/episodes/Test-Episode--Bite-Sized-Binge-e1tresd"
							}
						>
							<h1>Bite-Sized Binge</h1>
						</Link>
						<p>
							A 5 minute podcast where I talk about the audiodramas, one-shot
							manga, short stories etc that I read and enjoy during my pomodoro
							breaks with the occasional 10 minute episode where I talk about
							books and movies.
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
		</Section>
	);
};

export default OtherProjects;
