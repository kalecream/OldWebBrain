"use client";
import Link from "next/link";
import Image from "next/image";
// import { GPhotos } from "@assets/images";
// import Books from "@data/books";
import Pods from "@data/pod";
import styles from "./books.module.scss";
// import button from "@styles/modules/Button.module.scss";
// import NineGridGallery from "./Gallery";
// import { CodersrankSummary } from "./CodersRank";
import TextScrambleComponent from "@app/components/TextScramble";
import AboutBooksSection from "./AboutBooks";
// import { CodersrankSummary } from "./CodersRank";
// import { ScrollDown } from "@components/scrollDown";
import MiniPlayer from "@components/MusicPlayer/MusicPlayer";

export const About = () => {
  return (
    <>
      <MiniPlayer
        audioSrc={"/audio/song.m4a"}
        songTitle={"Francesca // Hozier"}
        audioLink={"https://www.youtube.com/watch?v=UOUXV6-_DyY&pp=ygUQZnJhbmNlc2NhIGhvemllcg%3D%3D"}
      />
      <section className="stars" style={{ minHeight: "100vh" }}>
        <div className="frame">
          <Image
            src={"https://i.imgur.com/sRfXe3l.jpeg"}
            alt=""
            height={200}
            width={350}
            style={{ margin: "auto", borderRadius: 0 }}
          />
        </div>
        <p className="prose" style={{ maxWidth: "50rem" }}>
          For the longest time, I struggled to figure out who I was.
        </p>
        <TextScrambleComponent />
      </section>

      {/* <section
        className="stars"
        style={{ margin: 0, padding: 0, minHeight: "100vh", paddingBottom: "6rem", marginBottom: "6rem" }}
      >
        <div className="flex center mx-1">
          <NineGridGallery images={GPhotos} />
        </div>
      </section> */}
      <AboutBooksSection />
      <section className={styles.paragraph} id="podcasts" style={{ minHeight: "100vh" }}>
        <h1 className="text-center">& I'm always listening to a podcast!</h1>
        <p className="prose blur ">
          Mainly horror, sci-fi or comedy audiodramas, but I tend to listen to Non-Fiction or media-related Podcasts
          when I'm doing work. These have been my favourite listens so far:
        </p>
        <div className="flex row m-1 p-1">
          {Pods.sort((a, b) => a.title.localeCompare(b.title)).map((p) => (
            <div key={p.url}>
              {p.url ? (
                <Link href={p.url}>
                  <Image width={150} height={150} src={p.cover} alt={p.title} title={p.title} className={`outerglow`} />
                </Link>
              ) : (
                <small>{p.title}</small>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className={styles.paragraph} id="games" style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Rarely, I play Games!</h1>

        <p className={`blur prose`}>
          My preference is playing short indie games or any game I physically own. I still play my Gameboy Advance, DS
          and an NES emulator. <br />
          <br />
          Not featured in the game gallery below is several untouched games from{" "}
          <Link className="link" href="https://steamcommunity.com/id/SabMedwinter">
            Steam
          </Link>{" "}
          and <Link href="https://sabmedwinter.itch.io/">Itch.io</Link>. These are the main games in my rotation
          nowadays:
        </p>
        <div className="flex row m-1 p-1">
          <div className="">
            <Link href="https://www.legendsofidleon.com/">
              <Image
                width={300}
                height={150}
                src={"https://imgur.com/APzegNB.png"}
                alt="IdleOn"
                className={`outerglow`}
              />
            </Link>
          </div>
          <div className="">
            <Link href="https://shatteredpixel.com/shatteredpd/">
              <Image
                width={300}
                height={150}
                src="https://i.imgur.com/J6ExEz6.gif"
                alt="Shattered Pixel Dungeon"
                className={`outerglow`}
              />
            </Link>
          </div>
          <div className="">
            <Link href="https://en.wikipedia.org/wiki/Etrian_Odyssey_II">
              <Image
                width={150}
                height={150}
                src="https://i.imgur.com/JbZW1N3.jpg"
                alt="Etrian Odyssey II: Heroes of Lagaard"
                className={`outerglow`}
              />
            </Link>
          </div>
          <div className="">
            <Link href="https://en.wikipedia.org/wiki/The_World_Ends_with_You">
              <Image
                width={150}
                height={150}
                src="https://i.imgur.com/j6DsuvT.jpeg"
                alt="World Ends With You"
                className={`outerglow`}
              />
            </Link>
          </div>
          <div className="">
            <Link href="https://en.wikipedia.org/wiki/Advance_Wars">
              <Image
                width={150}
                height={150}
                src="https://i.imgur.com/ofu3y5f.jpeg"
                alt="Advanded Wars"
                className={`outerglow`}
              />
            </Link>
          </div>

          <div className="">
            <Link href="https://en.wikipedia.org/wiki/Professor_Layton_and_the_Curious_Village">
              <Image
                width={150}
                height={150}
                src="https://i.imgur.com/NsBAPjW.jpeg"
                alt="Professor LAyton and The Curious Village"
                className={`outerglow`}
              />
            </Link>
          </div>
        </div>
      </section>
      {/* <section
        className={styles.paragraph}
        id="code"
        style={{ minHeight: "100vh", marginBottom: "6rem" }}
      >
        <h1 className="text-center">And, I code...</h1>
        <CodersrankSummary />
        <p className="prose">
          Data from <Link href="https://profile.codersrank.io/user/kalecream">CodersRank.io</Link>{" "}
        </p>
      </section> */}
    </>
  );
};

export default About;
