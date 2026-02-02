"use client";
import Link from "next/link";
import Image from "next/image";
import MusicPlayer from "@components/MusicPlayer/MusicPlayer";

const WithRomance = () => {
  return (
    <>
      <section id="romance" style={{ minHeight: "100vh" }}>
        <MusicPlayer audioSrc={"/audio/yth.mp3"} songTitle={"Yes To Heaven // Lana Del Rey"} audioLink={""} />
        <h1>With Romantic Interests</h1>
        <p className="prose">
          The sense of excitement and physical attraction to a new flame is always wonderful. It feels like I have
          greater motivation to do anything when I get a crush. My crushes tend to be superficial. I like that my
          fleeting crushes highlight small romantic things about persons that I can remember them by. I hope that I
          never age out of crushes and that I continue to be considerate of any partners when having crushes.
        </p>
        <p className="prose">
          I want it particularly noted that I do not believe in “right person, wrong time.” Life sucks. There's never
          going to be a right time, there's no guarantee that the person you knew this year is the same as they will be
          next year. Traumatic events are always happening. They force us to reconsider who we are and what we are
          willing to do. This is also why we should go slowly. A rushed relationship with no foundation will leave
          questions on where we stand where a strong relationship with have defined protocols for emergency events and
          how to deal with them will be more likely to survive.
        </p>
        <p className="prose">
          I want to go on a lot more dates: self-dates, friend-dates, and romantic dates.{" "}
          <b>Important to remember in this stage:</b>{" "}
        </p>

        <ol>
          <li>Draw up my own boundaries, get and respect their boundaries.</li>
          <li>Take it slow.</li>
          <li>Maintain my independence.</li>
          <li>Be mindful of existing commitments.</li>
          <li>Be mindful of any power dynamics at play.</li>
          <li>Accept/Give rejection gracefully.</li>
        </ol>
      </section>
      <section style={{ minHeight: "100vh" }}>
        <h2>Non Escalator Relationships</h2>
        <p className="prose">
          My understanding of the relationship escalator is that the process outline is what most couples expect in a
          relationship with time being what progresses the relationship. After learning about the non-escalator
          relationship, I realized this model is much better to detail conversations off the bat would be off the table
          to figure out incompatibilities that cannot be overlooked from early.
        </p>
        <p className="prose">
          In a relationship intake stage, I would go over the form on the following form. I think I have made mistakes by
          not doing something similar to set expenctations and express desires. This is a form I got from Reddit,
          clicking on it will bring you to the original thread.
        </p>
        <div>
          <Link href="https://www.reddit.com/r/polyamory/comments/pwkdxp/v3_relationship_components_menu_last_update_for/">
            <Image src="https://i.imgur.com/85cBfSQ.png" alt="Relationship Intake Form" width={1080} height={1398} />
          </Link>
        </div>
        {/* <div>
        <h3>Dating</h3>
        <p className="prose"></p>
        <p className="prose"></p>
        <p className="prose"></p>
      </div> */}
      </section>
      <section style={{ minHeight: "100vh" }}>
        <div>
          <h3>Partnership</h3>
          <p className="prose">
            Commitment is a dynamic and evolving aspect of a relationship. It requires ongoing effort, communication,
            and a shared understanding of each other's needs and expectations. The level and nature of commitment can
            vary among individuals and relationships. Not everyone may prioritize commitment in the same way. Open
            communication about expectations and a mutual agreement on the nature of commitment are key elements in a
            successful and fulfilling relationship. Also, it is important to stress that this section is useful for more
            than just romantic relationships. It involves a investment of feelings, trust, and mutual support. An
            enduring connection and dedication to one another.
          </p>
          <p className="prose">
            In a romantic relationship, it is about more than staying together; it’s about actively choosing each other
            every day, growing together, and nurturing the bond that connects us. It’s a dynamic process that evolves as
            we navigate life.
          </p>
          <p className="prose">
            Commitment (or decision) “refers, in the short-term, to the decision that one loves a certain other, and in
            the long-term, to one’s commitment to maintain that love” (Sternberg, 1997, p. 315).
          </p>
        </div>
        <div className="prose">
          <ol>
            <li>
              offering unwavering support during challenges, personal growth, and ambitions: providing encouragement
              during setbacks, and celebrating achievements.
            </li>
            <li>
              allowing them to feel secure enough to share deepest fears, desires, and secrets, knowing they will be met
              with understanding and acceptance.
            </li>
            <li>respecting the other's individuality and boundaries.</li>
            <li>valuing your opinions, feelings, and needs as much as your own.</li>
            <li>open and honest communication.</li>
            <li>a willingness to compromise, forgive, and grow from experiences.</li>
            <li>maintaining a close physical connection and being attuned to each other’s emotional needs.</li>
          </ol>
        </div>
        <p className="prose">
          <i>
            A partner is someone who truly shares my life. We can have fun together every day even doing the most
            mundane chores. We see each other through the good days and the bad, and in doing so, we foster huge amounts
            of trust and understanding. And when you have someone who you really trust who just gets you in the bedroom?
            Oh man, it’s insane. [^5]
          </i>
        </p>
        <div className="prose">
          <h4>Commitment to Self in Partnerships</h4>
          <ol>
            <li>
              To understand my own needs and desires. It signals an understanding of what I want out of life,
              independent of the relationship.
            </li>
            <li>To communicate my limits and boundaries.</li>
            <li>To maintain my physical & mental health.</li>
            <li>
              To maintain independence: my own hobbies, friendships, finances, time alone, and continuing my personal
              development as an individual.
            </li>
            <li>To maintain a strong network of support outside the relationship.</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default WithRomance;
