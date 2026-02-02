import Link from "next/link";

const ShibariPage = () => {
  return (
    <section>
      <h1>Shibari</h1>
      <p className="prose">
        I've thought of separating this section into rope bondage, shibari and kinbaku, but I'll keep it simple for now.
        Rope bonage is simply the act of tying someone up with rope. Shibari is a Japanese style of rope bondage that is
        focused on the aesthetics of the ties and the experience of the person being tied. Kinbaku is a more specific
        style of shibari that is focused on the connection between the person tying and the person being tied. I'll be
        using the terms interchangeably.
      </p>

      <div className="prose">
        <h2>Basic Safety</h2>

        <ul>
          <li>
            {" "}
            Basic Safety — <Link href="https://crash-restraint.com/ties/1">Text</Link> or{" "}
            <Link href="https://www.youtube.com/watch?v=xu3QjwaLoVA">Video</Link>
          </li>
          <li>
            <Link href="https://crash-restraint.com/ties/272">Negotiation & Consent Text</Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/watch?v=ce7YnNFc_AA">
              {" "}
              Discussion & Negotiation of a Rope Scene (Video)
            </Link>
          </li>
          <li>
            <Link href="https://crash-restraint.com/ties/3">Choosing Rope </Link>
          </li>
          <li>
            Handling rope while tying — <Link href="https://www.youtube.com/watch?v=Wd0iceLRt8s">Part 1</Link> &{" "}
            <Link href="https://www.youtube.com/watch?v=rDSBwp9xxHk">Part 2</Link>
          </li>
          <li>
            <Link href="https://www.theduchy.com/nerves-and-circulation/">Vulnerable Areas on the body</Link>
          </li>
          <li>
            <Link href="https://www.sensualartistry.com/blog/rope-safety-tips">Check-ins</Link>
          </li>
          <li>
            <Link href="https://www.theduchy.com/aftercare/">Aftercare</Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/watch?v=a01l6XiR1xE">Practicing without a model</Link>
          </li>
        </ul>
        <h2>Knots</h2>
        <ul>
          <li>
            <Link href="https://crash-restraint.com/ties/121">Knots</Link> or{" "}
            <Link href="https://youtube.com/playlist?list=PLrTZSS3AIIpQfyIRxjdQD2EMUNcb7wC-Y&si=wVhVaqwnsNs14HSD">
              YouTube playlist
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@BeRoped/videos">Basic Knots — Reposts from Two Knotty Boys</Link>
          </li>
          <li>
            <Link href="https://youtube.com/playlist?list=PLwVgIGt40K446aVrcwB66VQh_H0tASWJJ&si=c9eaSwar2D2uoMM8">
              Other Tutorials or Creative Ties
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ShibariPage;
