"use client";
import Link from "next/link";
import Image from "next/image";
import BehindImage from "@public/img/album/plants.gif";
import WinterImage from "@assets/images/winter.webp";
import SummerImage from "@assets/images/summer.webp";
import Fall2024 from "@assets/images/fall2024.webp";
import MusicPlayer from "@components/MusicPlayer/MusicPlayer";

const NowPage = () => {
  return (
    <>
      <section>
        <MusicPlayer
          audioSrc={"/audio/icarian.m4a"}
          songTitle={"I, Carrion // Hozier"}
          audioLink={"https://www.youtube.com/watch?v=rag_buWyB_A&pp=ygUJaSBjYXJyaW9u"}
        />
        <h1>Now.</h1>

        <div className="prose">
          <p className="blur">
            The idea of a now page came from <Link href={"https://sive.rs/now3"}>Derek Sivers</Link>. A page I stumbled
            on while trying to see which webrings were still active. These aren't exactly goals, but a collection of
            experiences I would like to complete. My actual goals can be seen at{" "}
            <Link href="/trying" className="internal-link">
              trying
            </Link>{" "}.
          </p>
          <p className="blur">
            I am fine delaying and rolling over to the next quarter if I don't have enough time to complete it. Either I
            am well enough to continue working on the tasks, too busy trying to keep myself afloat or dead with the
            tasks being no longer my problem.
          </p>
        </div>
      </section>
      <section>
        <div className={`prose `}>
          <div className="img-grid">
            <Image src={Fall2024} alt="" width={100} height={100} style={{ margin: "0 auto" }} />
          </div>
          <h1 style={{ margin: "0" }}>2024-Fall</h1>
          <p className="blur">
            The focus of this season is introspection, a backlog that I've neglected and previous goals which were not
            completed. Recently, I've been made aware of some negative traits of mine. With cursory thoughts, I see it
            affects my relationship with myself. Working on this will have a positive effect on my relationship with
            everyone else.
          </p>
        </div>
      </section>
      <section>
        <div className={`prose `}>
          <div className="img-grid">
            <Image src={SummerImage} alt="" width={74} height={100} style={{ margin: "0 auto" }} />
          </div>
          <h1 style={{ margin: "0" }}>2024-Summer</h1>
          <p className="blur">
            I'm still working on last season's goals + want to focus on repairing, low-tech and continued sustainability
            tasks this season.
          </p>
          <hr />
          <ul>
            <li> Getting an Amateur Radio licence.</li>
            <li>
              <s>Calisthenics foundations</s>
            </li>
            <li>
              Learning sewing to
              <Link href="https://www.houseofsew.com/sewing-level/"> proficiency</Link>
            </li>
            <li>
              <s>Learning beginner Jamaican Sign Language.</s>
            </li>
            {/* <li>Finishing a neglected online course - FullStackOpen</li> */}
          </ul>
        </div>
      </section>

      <section>
        <div className={`prose `}>
          <div className="img-grid">
            <Image src={BehindImage} alt="" width={160} height={100} style={{ margin: "0 auto" }} />
          </div>
          <h1 style={{ margin: "0" }}>2024-Spring</h1>
          <p className="blur">
            This spring is a busy time. I am trying to re-orient myself to handle the rest of the year. The quarter
            started strong, then was blown off track by the stings of poverty and burnout.
          </p>
          <p className="blur">
            For a few months, I've also had my head in the clouds using romance as a distraction. I've been better about
            returning to my goals at the end of this season becoming more focused on refining my personal productivity
            systems to prevent stalling again rather than powering through to complete my goals while neglecting my real
            responsibilities. I had the wins of diving into reading again, loving, strengthening community ties and a
            stronger sense of self.
          </p>
          <hr />
          <ul>
            <li>
              Continuing my guide on the{" "}
              <Link href={"/relationships"} className="internal-link">
                relationships
              </Link>{" "}
              I have with myself, family, friends, romantic interests and others.
            </li>
            <li>
              Starting{" "}
              <Link href="/c25k" className="internal-link">
                C25K
              </Link>
              .
            </li>
            <li>
              Creating a <Link href="https://www.gbstudio.dev/">GBStudio</Link> game as a love letter to a former muse.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className={`prose `}>
          <div className="img-grid">
            <Image src={WinterImage} alt="" width={200} height={51.56} style={{ margin: "0 auto" }} />
          </div>
          <h1 style={{ margin: "0" }}>2023-Winter</h1>
          <p>
            This is when I started this page. At the time, I was exploring individuallism vs caring for myself as a
            member of a community. This might re-appear as a goal-point after I read Frantz Fanon's{" "}
            <i>Wretched of the Earth</i>.
          </p>
          <div className="flex my-1">
            <div className="flex">
              <Link href="https://decolonizepalestine.com/" style={{ color: "--var(--secondary)" }}>
                From the river to the sea, Palestine will be the free.
              </Link>
            </div>
          </div>
          <p>
            This is also when I had some awakenings about everyday life and lost most of my heroes. It ended with my
            giving up religion. I have oscillated between being a Christian revert & apostate for many years. The
            bombing of Bethlehem on Christmas Day with little out-cry from Western Church leaders was the final straw
            for me. It does not make sense for me to practice a religion that is so far removed from its roots / holy
            sites. This was not the first time I noticed that what is generally practiced is an abstract version of
            Christianity, but it was the occasion that disgusted me the most. The other Abrahamic religions do not
            appeal to me.
          </p>
        </div>
      </section>
    </>
  );
};

export default NowPage;
