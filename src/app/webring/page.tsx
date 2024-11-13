import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const ClawWebringWidget = () => {
  return (
    <>
      <Head>
        <script src="https://the-claw-webring-widget.netlify.app/the-claw-webring-widget.mjs" type="module"></script>
      </Head>

      <the-claw-webring-widget>
        <div style={{ color: "inherit", fontFamily: "system-ui", padding: "1rem", fontSize: "1rem" }}>
          <div
            style={{
              display: "grid",
              gap: "0.5rem 1rem",
              alignItems: "center",
              marginBottom: "1rem",
              justifyContent: "flex-start",
              gridTemplateAreas: `'image title' 'image view'`,
            }}
          >
            <img
              src="https://the-claw-webring.netlify.app/img/theclaw.png"
              alt="The Claw Webring"
              style={{ gridArea: "image", height: "4rem", transform: "rotate(-8deg)" }}
            />
            <h2 style={{ gridArea: "title", fontSize: "1.4rem", margin: 0 }}>The Claw Webring</h2>
            <a
              href="https://github.com/whitep4nth3r/the-claw-webring"
              style={{ gridArea: "view", margin: 0, color: "inherit" }}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </the-claw-webring-widget>
    </>
  );
};

const WebringPage: React.FC = () => {
  return (
    <section>
      <h1>Webring</h1>
      <p className="prose">
        A webring is a collection of websites linked together in a circular structure. Each site has a "next" and
        "previous" link that allows users to navigate through the ring. The webring is a recall to the early days of the
        internet when websites were more personal and interconnected.
      </p>
      <ClawWebringWidget />
    </section>
  );
};

export default WebringPage;
