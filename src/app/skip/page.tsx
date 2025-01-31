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
  }).slice(0, 11);

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
          The theme within this website is based on the Caribbean folklore of the{" "}
          <Link href={"https://www.wikiwand.com/en/Soucouyant"}>Soucouyant</Link> also known as the Ole Higue. She is
          the Caribbean's version of a Vampire, a Werewolf, and combined with some West African witch mythos. She's is typically presented as an old woman which I am not. I want our folktales to continue to evolve rather than being frozen in time.
          Throughout the site, I may mingle the theme with some folklore details from other femme mythological figures.
        </p>
        <p className="prose blur">
          Please sign my{" "}
          <Link className="internal-link" href="/guestbook">
            guestbook
          </Link>
          ! Or maybe you'd like to see some webrings I joined?
        </p>
        <p className="prose">
          A webring is a collection of websites linked together in a circular structure. Each site has a "next" and
          "previous" link that allows us to navigate through the ring.
          <br />
          <br /> The webring is a recall to the early days of the internet when websites were more personal and
          interconnected. As search engines continue to degrade, topic-based web-rings could provide us with sources of
          truth.
        </p>
        <div className="flex row">
          <ClawWebRing />
        </div>
        <p className="prose">
          The last 10 pages I've edited are: <br />
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
      <section style={{ minHeight: "100vh" }}>
        <h1>latest project</h1>
        <div className={styles.project__card}>
          <div className={styles.project__image}>
            <Image
              height={0}
              width={0}
              sizes="100vw"
              style={{
                width: "auto",
                height: "50vh",
                margin: "0 auto",
                display: "flex",
                borderRadius: "var(--sharpBorderRadius)",
              }}
              src={LatestProject.image}
              alt={LatestProject.title}
            />
          </div>
          <div className={styles["project-info"]}>
            <div className={styles.project__present}></div>
            <div className={styles.project__box}>
              <h1 className={styles.project__title}>
                {LatestProject.title}
                <span
                  className={`project__status ${LatestProject.status}`}
                  title={LatestProject.status}
                  aria-label={LatestProject.status}
                ></span>
              </h1>

              <div className={`flex ` + styles["project-lang"]}>
                {LatestProject.language && LatestProject.language.map((l, i) => <span key={i}>{l.toLowerCase()}</span>)}
                <br />
                {LatestProject.technology &&
                  LatestProject.technology.map((t, i) => (
                    <span className={styles.project__tech} key={i}>
                      {t.toLowerCase()}
                    </span>
                  ))}
              </div>

              <p className={styles.project__description}>
                <b>
                  {GetMonthName(LatestProject.created)}
                  {LatestProject.created.split("-", 1)}.
                </b>{" "}
                {LatestProject.description}
              </p>

              <div className={styles["project-lang"]}>
                {LatestProject.repoName && (
                  <Link
                    title="View Code"
                    className={styles.project__code}
                    href={`https://github.com/kalecream/${LatestProject.repoName}`}
                    target="_blank"
                  >
                    Code.
                  </Link>
                )}

                {LatestProject.link && (
                  <Link title="View Project" className={styles.project__code} href={LatestProject.link} target="_blank">
                    Demo.
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkipPage;
