"use client";
import Link from "next/link";
import Image from "next/image";
import { GPhotos } from "@assets/images";
import Books from "@data/books";
import Pods from "@data/pod";
import styles from "./books.module.scss";
import button from "@styles/modules/Button.module.scss";
import NineGridGallery from "./Gallery";
// import { CodersrankSummary } from "./CodersRank";
import TextScrambleComponent from "@app/components/TextScramble";
import AboutBooksSection from "./AboutBooks";

export const About = () => {
  return (
    <>
      <section style={{ marginTop: 0, paddingTop: 0, minHeight: "90vh" }}>
        <div className="flex column center">
          <div className="frame">
            <Image
              src={"https://i.imgur.com/sRfXe3l.jpeg"}
              alt=""
              height={200}
              width={350}
              style={{ margin: "auto", borderRadius: 0 }}
            />
          </div>
          <p className="prose">
        — To see more on how this website was made, read{" "}
          <Link href="/colophon" className="internal-link">
            colophon
          </Link>.
          <br />
          — To see all pages, visit <Link className="internal-link" href={"/sitemap"}>sitemap</Link>
          .
        </p>
          <p className="prose" style={{ maxWidth: "40rem" }}>
            I've always disliked being asked "tell me a bit about yourself" in personal environments. For the longest time, I struggled to figure out who I
            was.
          </p>
          <Link href="/about#who" rel="me">
            <button className={button.vamp} role="button">
              <span className={button.text}>Who Are You?</span>
              <span className={button["vamp-background"]}></span>
              <span className={button["vamp-border"]}></span>

              {/* <!-- mask-border fallback --> */}
              <svg style={{ position: "absolute", width: "0", height: "0" }}>
                <filter id="remove-black-vamp" colorInterpolationFilters="sRGB">
                  <feColorMatrix
                    type="matrix"
                    values="1 0 0 0 0
                 0 1 0 0 0
                 0 0 1 0 0
                 -1 -1 -1 0 1"
                    result="black-pixels"
                  ></feColorMatrix>
                  <feComposite in="SourceGraphic" in2="black-pixels" operator="out"></feComposite>
                </filter>
              </svg>
            </button>
          </Link>
        </div>
      </section>
      <section id="who" className="stars" style={{ margin: 0, padding: 0, minHeight: "100vh" }}>
        <TextScrambleComponent />
      </section>
      <section
        className="stars"
        style={{ margin: 0, padding: 0, minHeight: "100vh", paddingBottom: "6rem", marginBottom: "6rem" }}
      >
        <div className="flex center mx-1">
          <NineGridGallery images={GPhotos} />
        </div>
      </section>
      <AboutBooksSection />
      <section
        className={styles.paragraph}
        id="podcasts"
        style={{ margin: 0, padding: 0, minHeight: "100vh", marginBottom: "6rem" }}
      >
        <div>
          <h1 className="text-center">& I'm always listening to a podcast!</h1>
          <p className="prose ">
            Mainly horror, sci-fi or comedy audiodramas, but I tend to listen to Non-Fiction or media-related Podcasts
            when I'm doing work. These have been my favourite listens so far:
          </p>
          <div className="flex row mx-1">
            {Pods.sort((a, b) => a.title.localeCompare(b.title)).map((p) => (
              <div key={p.url}>
                {p.url ? (
                  <Link href={p.url}>
                    <Image
                      width={150}
                      height={150}
                      src={p.cover}
                      alt={p.title}
                      title={p.title}
                      className={`outerglow`}
                    />
                  </Link>
                ) : (
                  <small>{p.title}</small>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className={styles.paragraph}
        id="games"
        style={{ margin: 0, padding: 0, minHeight: "100vh", marginBottom: "6rem" }}
      >
        <div>
          <h1 className="text-center">Occasionally, I play Games...</h1>

          <p className={` prose`}>
            My preference is playing short indie games or any games I physically own. I still play my physical Gameboy
            Advance, DS and an NES emulator. Not featured in the game gallery below is several untouched games from{" "}
            <Link className="link" href="https://steamcommunity.com/id/SabMedwinter">
              Steam
            </Link>{" "}
            and <Link href="https://sabmedwinter.itch.io/">Itch.io</Link>. These are the main games in my rotation
            nowadays:
          </p>
          <div className="flex row mx-1">
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
        </div>
      </section>
      {/* <section
        className={styles.paragraph}
        id="code"
        style={{ margin: 0, padding: 0, minHeight: "100vh", marginBottom: "6rem" }}
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
