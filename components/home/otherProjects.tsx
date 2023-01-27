import React from "react";
import { HalfColumn, Section } from "../global";
import Image from "next/image";
import "animate.css";
import { OtherMultimediarojectPictures } from "../../assets";

const OtherProjects = () => {
	return (
		<Section>
            <h2 className="animate__animated animate__fadeInUp">
            Outside of work, I started...
            </h2>
            <div>
                <HalfColumn>
                A small podcast where I talk about the audiodramas, one-shot manga and short stories that I read and enjoy during my pomodoro breaks. I also have a small YouTube channel where I talk about the books I read and the anime I watch. I also have a small YouTube channel where I talk about the books I read and the anime I watch.
            </HalfColumn>
            <HalfColumn>
                {/* <Image alt="Bite Sized Binge Podcast Poster. It is the cartoonized version of a microphone between hamburger buns." src={OtherMultimediarojectPictures} width={500} height={500} /> */}
            </HalfColumn>
            </div>

            <div>
            <HalfColumn>
                <Image alt="Bite Sized Binge Podcast Poster. It is the cartoonized version of a microphone between hamburger buns." src="/public/images/bitesizedbinge.webp" width={500} height={500} />
            </HalfColumn>
                <HalfColumn>
                A small podcast where I talk about the audiodramas that keep me entertained throughout the day plus the one-shot manga and short stories that I enjoy during my pomodoro breaks.
            </HalfColumn>
            </div>

            <div>
                <HalfColumn> I also have a small YouTube channel where I vlog my pomodoro sessions and my crafting sessions.
            </HalfColumn>
            <HalfColumn>
                <Image alt="Bite Sized Binge Podcast Poster. It is the cartoonized version of a microphone between hamburger buns." src="/public/images/bitesizedbinge.webp" width={500} height={500} />
            </HalfColumn>
            </div>
            
		</Section>
	);
};

export default OtherProjects;
