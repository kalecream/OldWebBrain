import { useTheme } from "next-themes";
import React from "react";
import { useEffect } from "react";

/**
 * Based off of gatsby-theme-novela
 * https://github.com/narative/gatsby-theme-novela/blob/master/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx
 *
 * https://github.com/ChangoMan/nextjs-typescript-mdx-blog/blob/main/components/ThemeSwitch.tsx
 */

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
					padding: "0.5rem",
					cursor: "pointer",
					backgroundColor: "transparent",
				}}
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			>
				{theme === "dark" ? "🔅" : "🔆"}
			</button>
		</div>
	);
};

export default ThemeSwitch;
