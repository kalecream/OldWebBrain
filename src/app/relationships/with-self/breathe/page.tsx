import Link from "next/link";
import { PageReadTime } from "@utils/PageReadTime";

const WithSelfPage = () => {
  return (
    <>
      <section>
        <h1>Breathe.</h1>
        <PageReadTime readingSpeedWPM={200} />
        <p className="prose">
          The breathing exercises I do are based in Pranayama which is the fourth of the eight limb of the Ashtanga Yoga
          philosophy.
        </p>
      </section>
    </>
  );
};

export default WithSelfPage;
