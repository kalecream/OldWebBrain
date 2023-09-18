import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LoadingIcon } from '@assets/images';
import styles from './preloader.module.scss';

interface LoaderProps {
	onComplete: () => void;
}

const imageLoader = ({ src, width, quality }) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};

const LoadingScene = () => {
	const loadingScreenTexts = [
		'Simulating a world of possibilities',
		'Building a virtual reality, one line of code at a time',
		'Designing a life in the digital realm',
		'Constructing moments in the digital tapestry',
		'Crafting stories in bits and bytes',
		'Rendering experiences, pixel by pixel',
		// Coding
		'Compiling dreams into lines of code',
		'Translating ideas into digital reality',
		'Debugging the path to innovation',
		'Constructing digital bridges between imagination and reality',
		'Creating virtual worlds through keystrokes',
		'Turning logic into digital artistry',
		'Weaving the fabric of innovation through code',
		'Crafting pixels into elegant solutions',
		// 3D Modeling with Blender 3D
		'Sculpting visions into 3D wonders',
		'Molding polygons to bring imagination to life',
		'Animating dreams in the realm of Blender 3D',
		'Shaping virtual realities with vertices and textures',
		'Crafting immersive worlds through 3D artistry',
		'Blending creativity with pixels and polygons',
		'Designing with depth and dimension in Blender 3D',
		'Turning abstract concepts into tangible 3D forms',
		'Bringing imagination to life through 3D modeling',
		// Being Jamaican
		'Infusing a touch of Jamaica into every digital creation',
		'Bringing the spirit of Jamaica to the virtual stage',
		'Crafting digital experiences with a Jamaican heartbeat',
		'Weaving the warmth of Jamaica into every line of code',
		'Coding with a dash of Jamaican rhythm',
		'Blending the vibrant culture of Jamaica into the digital canvas',
		'Transforming pixels into a digital tapestry'
	];

	const [currentTextIndex, setCurrentTextIndex] = useState(Math.floor(Math.random() * loadingScreenTexts.length));

	useEffect(() => {

		let header = document.getElementById('header');
		header.style.display = 'none';

		const timer = setTimeout(() => {
			setCurrentTextIndex(Math.floor(Math.random() * loadingScreenTexts.length));
		}, 3000);

		return () => clearTimeout(timer);
	}, [currentTextIndex]);

	return (
		<div className={styles.loading}>
			<Image loader={({ src }) => src} src={LoadingIcon} width={150} height={250} alt="" unoptimized priority />
			<p className={styles['loading-text']}>{loadingScreenTexts[currentTextIndex]}</p>
		</div>
	);
};

const LoadingEnvironment: React.FC<LoaderProps> = ({ onComplete }) => {
	return (
		<>
			<LoadingScene />
		</>
	);
};

export default LoadingEnvironment;
