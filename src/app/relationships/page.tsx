import { PageReadTime } from "@utils/PageReadTime";
import Link from "next/link";

const RShipPage = () => {
  return (
    <>
      <section id="introduction">
        <h1>Relationships</h1>
        <PageReadTime readingSpeedWPM={200} />

        <p className="prose"></p>
        <p className="prose"></p>
        <p className="prose"></p>
        <hr />
        <p className="prose">
          I have outlined a bunch of things for future me to check in with herself and keep us grounded without being a
          yam-head or the abusive farmer. The most important thing to note is that:
        </p>
        <ol className="prose">
          <li> Relationships are unique and do not follow the same path.</li>
          <li>
            Adaptability, Consideration and Grace will be neccesary for when Life likes to just throw us off our paths.
          </li>
          <li>
            {" "}
            Communication is a must. Do not leave the other person's understanding to chance. Make sure they know where
            you are coming from and why it is so.
          </li>
          <li>Vulnerability should be encouraged.</li>
          <li>All relationships, including the one with self, require effort and intention to nurture them.</li>
        </ol>
        <hr />
        <p className="prose">
          The most important part of a relationship for me is Consideration. I hope to make myself proud by sticking to
          my values of being considerate and taking a stand, where necessary, to reduce harm in my circle of loved ones,
          then my wider community. It is very important to consider how actions taken will affect someone. I want to
          take time to consider my actions to:
        </p>
        <ol className="prose">
          <li>Reduce the chance of causing harm</li>
          <li>Never intentionally causing harm</li>
          <li>Consider myself to not lose a sense of self becoming codependent</li>
        </ol>
        <p className="prose">
          <Link href={"relationships/with-self"}>With Self</Link>
          <br />
          <Link href="relationships/with-family">With Family</Link>
          <br />
          <Link href="relationships/with-friends">With Friends</Link>
          <br />
          <Link href="relationships/with-romance">With Romantic Interests</Link>
        </p>
      </section>
    </>
  );
};
export default RShipPage;
