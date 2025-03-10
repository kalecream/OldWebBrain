"use client";
import { useEffect } from "react";

export const ClawWebRing: React.FC = () => {
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
