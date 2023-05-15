import { useTheme } from "next-themes";
import React from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

/**
 * Based off of gatsby-theme-novela
 * https://github.com/narative/gatsby-theme-novela/blob/master/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx
 *
 * https://github.com/ChangoMan/nextjs-typescript-mdx-blog/blob/main/components/ThemeSwitch.tsx
 */

const FAIcon = styled(FontAwesomeIcon)`
  color: var(--primary);
  scale: 0.8;

  &:hover {
    color: var(--accent);
    scale: 1.5;
  }
`;

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {}, [theme]);

  return (
    <div
      style={{
        display: "flex",
        placeItems: "center",
      }}
    >
      <button
        style={{
          display: "grid",
          placeItems: "center",
          borderRadius: "50%",
          outline: "none",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <FAIcon icon={faSun} /> : <FAIcon icon={faMoon} />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
