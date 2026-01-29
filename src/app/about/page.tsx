"use client"
import AboutMe from "./AboutMe";
import MiniPlayer from "@components/MusicPlayer/MusicPlayer";

const About = () => {
  return (
    <>
      <MiniPlayer
        audioSrc={"/audio/song.m4a"}
        songTitle={"Francesca // Hozier"}
        audioLink={"https://www.youtube.com/watch?v=UOUXV6-_DyY&pp=ygUQZnJhbmNlc2NhIGhvemllcg%3D%3D"}
      />
      <AboutMe />
    

    </>
  );
};

export default About;
