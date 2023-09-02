import { useTheme } from 'next-themes';
import React from 'react';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { FaMoon, FaSun, FaCircleHalfStroke } from 'react-icons/fa6';

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
				display: 'flex',
				placeItems: 'center'
			}}
		>
			<button
				name="theme-switch"
				aria-label="theme-switch"
				style={{
					display: 'grid',
					placeItems: 'center',
					outline: 'none',
					border: 'none',
					fontSize: '1rem',
					cursor: 'pointer',
					justifyContent: 'center',
					backgroundColor: 'transparent',
					color: '#c1c1c1'
				}}
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'dark' ? <FaCircleHalfStroke /> : <FaCircleHalfStroke style={{ transform: 'rotateY(180deg)'}} />}
			</button>
		</div>
	);
};

export default ThemeSwitch;
