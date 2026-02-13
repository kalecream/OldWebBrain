"use client";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Projects as ProjectsData } from "@components/Projects/projectsData";
import { LatestProject } from "@components/Projects/projectsList";
import MusicPlayer from "@components/MusicPlayer/MusicPlayer";
import { ClawWebRing } from "./ClawWebRing";

const WordGraph = dynamic(() => import("./WordGraph"), { ssr: false });

const SkipPage = () => {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    fetch("/api/notes/graph")
      .then((res) => res.json())
      .then((data) => setGraphData(data));
  }, []);

  return (
    <>
      <MusicPlayer
        audioSrc={"/audio/sink.mp3"}
        songTitle={"Feng Sauve - Sink into the Floor"}
        audioLink={"https://www.youtube.com/watch?v=kc6Y1Bjxfk8&pp=ygUeZmVuZyBzdWF2ZSBzaW5rIGludG8gdGhlIGZsb29y"}
      />
      <section style={{ minHeight: "100vh", gap: "2rem" }}>
        <p>This page is under construction!!!</p>
        <img src="https://hitscounter.dev/api/hit?url=https%3A%2F%2Fyunghigue.com%2F&label=Visits&icon=fire&color=%23842029&message=&style=flat&tz=Jamaica"></img>
        <p className="prose blur">
          My website theme is based on the folklore around the{" "}
          <Link href={"https://www.wikiwand.com/en/Soucouyant"}>Ole Higue</Link>. She is the Caribbean's version of
          a Vampire, and a Werewolf combined with West African witch mythos. She's typically presented as an old woman who sheds her skin at night, turns into a fireball and sucks the blood of babies. She can be stopped with salt.
          As a young Higue, I've often wonder why our folklore is frozen in time. I would like our stories to continue to evolve.
        </p>
        <p className="prose blur">I have a 88x31 website button!</p>
        <span className="center" style={{ margin: "0 auto" }}>
          <Image
            unoptimized
            width={88}
            height={31}
            alt=""
            src="https://i.imgur.com/jOZv4jt.gif"
            style={{ borderRadius: "0" }}
          />
        </span>
        <p className="prose blur">
          A webring is a collection of websites linked together in a circular structure. As search engines continue to
          degrade, topic-based webrings could provide us with sources of truth.
        </p>
          <ClawWebRing />
          <iframe
            id="bucket-webring"
            style={{ width: "25rem", height: "3rem", border: "none" }}
            src="https://webring.bucketfish.me/embed.html?name=yung+higue"
          />
      </section>
    </>
  );
};

export default SkipPage;
