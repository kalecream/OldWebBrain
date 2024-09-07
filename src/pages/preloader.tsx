import { useEffect, useState } from 'react';
import Image from 'next/image';
import LoadingIcon from '@public/loading.webp';
import styles from './preloader.module.scss';
import { useRouter } from 'next/router'

export const Loader = () => {
	const loadingScreenTexts = [
		'Simulating a world of possibilities',
		'Building a virtual reality, one line of code at a time',
		'Designing a life in the digital realm',
		'Constructing moments in the digital tapestry',
		'Crafting stories in bits and bytes',
		'Rendering experiences, pixel by pixel',
		'Compiling dreams into lines of code',
		'Translating ideas into digital reality',
		'Debugging the path to innovation',
		'Constructing digital bridges between imagination and reality',
		'Creating virtual worlds through keystrokes',
		'Crafting pixels into elegant solutions',
		'Sculpting visions into 3D wonders',
		'Bringing imagination to life',
		'Animating dreams in the realm of Blender 3D',
		'Shaping virtual realities',
		'Crafting immersive worlds through 3D artistry',
		'Crafting digital experiences with a Jamaican heartbeat',
		'Weaving the warmth of Jamaica into every line of code',
		'Coding with a dash of Jamaican rhythm',
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
		<section className={styles.loading} style={{minHeight: '100%' }}>
			<Image src={LoadingIcon} width={150} height={250} alt="" unoptimized priority />
			<h1 className={styles['loading-text']}>{loadingScreenTexts[currentTextIndex]}</h1>
		</section>
	);
};

export default function RouteLoader() {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const handleStart = (url: string) => setLoading(true);
        const handleComplete = (url: string) => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    return loading ? <Loader /> : null;
}
