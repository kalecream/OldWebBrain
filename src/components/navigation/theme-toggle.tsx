import { useTheme } from "../../app/context/Theme";
import { FaMoon, FaSun } from "react-icons/fa6";

/**
 * Based off of gatsby-theme-novela
 * https://github.com/narative/gatsby-theme-novela/blob/master/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx
 *
 * https://github.com/ChangoMan/nextjs-typescript-mdx-blog/blob/main/components/ThemeSwitch.tsx
 */

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        placeItems: "center",
        marginTop: "-0.25rem",
      }}
    >
      <button
        name="theme-switch"
        aria-label="theme-switch"
        title="theme switch"
        style={{
          display: "grid",
          placeItems: "center",
          outline: "none",
          border: "none",
          fontSize: "1rem",
          cursor: "pointer",
          justifyContent: "center",
          backgroundColor: "transparent",
          color: "var(--primary)",
        }}
        onClick={toggleTheme}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
