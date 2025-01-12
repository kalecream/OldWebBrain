"use client";
import React, { useEffect } from "react";

const ClawWebringWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://the-claw-webring-widget.netlify.app/the-claw-webring-widget.mjs";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <the-claw-webring-widget>
      <div
        style={{
          color: "inherit",
          padding: "1rem",
          fontSize: "1rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "0.5rem 1rem",
            alignItems: "center",
            marginBottom: "1rem",
            justifyContent: "flex-start",
            gridTemplateAreas: "'image title' 'image view'",
          }}
        >
          <img
            src="https://the-claw-webring.netlify.app/img/theclaw.png"
            alt="The Claw Webring"
            style={{ gridArea: "image", height: "4rem", transform: "rotate(-8deg)" }}
          />
          <h2 style={{ gridArea: "title", fontSize: "1.4rem", margin: "0" }}>The Claw Webring</h2>
          <a
            href="https://github.com/whitep4nth3r/the-claw-webring"
            style={{ gridArea: "view", margin: "0", color: "inherit" }}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </the-claw-webring-widget>
  );
};

const WebringPage: React.FC = () => {
  return (
    <section>
      <h1>Webrings</h1>
      <p className="prose">
        A webring is a collection of websites linked together in a circular structure. Each site has a "next" and
        "previous" link that allows users to navigate through the ring. The webring is a recall to the early days of the
        internet when websites were more personal and interconnected. As popular search engines continue to degrade, topic-based web-rings could provide sources of truth.
      </p>
      <h2>Personal Website Rings</h2>
      <ClawWebringWidget />
      <div><a href='https://webring.dinhe.net/prev/www.yunghigue.com'>Previous</a>Retronaut Webring
<a href='https://webring.dinhe.net/next/www.yunghigue.com'>Next</a></div>
    </section>
  );
};

export default WebringPage;
