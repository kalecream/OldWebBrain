"use client";
import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { PageRoutes } from "@data/routes";
import { Projects as ProjectsData } from "@data/projectsData";
import styles from "@styles/modules/projects.module.scss";
import { GetMonthName } from "@utils/GetMonthName";
import MusicPlayer from "@components/MusicPlayer/MusicPlayer";
import { ClawWebRing } from "./ClawWebRing";

const SkipPage = () => {
  let pages = PageRoutes.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  }).slice(0, 6);

  const LatestProject = ProjectsData.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())[0];

  return (
    <>
      <MusicPlayer
        audioSrc={"/audio/sink.mp3"}
        songTitle={"Feng Sauve - Sink into the Floor"}
        audioLink={"https://www.youtube.com/watch?v=kc6Y1Bjxfk8&pp=ygUeZmVuZyBzdWF2ZSBzaW5rIGludG8gdGhlIGZsb29y"}
      />
      <section style={{ minHeight: "100vh" }}>
        <h1>Hi, Friend!</h1>
        <p className="prose blur">
          My website theme is based on the folklore around the{" "}
          <Link href={"https://www.wikiwand.com/en/Soucouyant"}>Ole Higue</Link>. She is like the Caribbean's version of
          a Vampire, and a Werewolf combined with West African witch mythos. She's typically presented as an old woman.
          As a Yung Higue, I want our folktales to continue to evolve rather than being frozen in time.
        </p>
        <hr />
        <p className="prose blur">
          Please sign my{" "}
          <Link className="internal-link" href="/guestbook">
            guestbook
          </Link>
          !
        </p>
        <p className="prose blur">
          Would you like to see some webrings I joined? A webring is a collection of websites linked together in a
          circular structure. Each site has a "next" and "previous" link that allows us to navigate through the ring. As
          search engines continue to degrade, topic-based webrings could provide us with sources of truth.
        </p>
        <div className="flex row">
          <ClawWebRing />
        </div>
        <hr/>
        <p className="prose blur">
          The last 5 pages I edited are: <br />
          <br />
          {pages.map((r) => (
            <div key={r.route}>
              <Link href={r.route} target="_blank" style={{ fontWeight: 600 }}>
                {r.route}
              </Link>{" "}
              → {formatDistanceToNow(new Date(r.date))} ago <br />
            </div>
          ))}
        </p>
      </section>
    </>
  );
};

export default SkipPage;
