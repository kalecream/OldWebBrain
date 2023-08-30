import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PresentationControls } from '@react-three/drei';
import styled from '@emotion/styled';

import HeroName from '@components/hero/heroName/heroName';
import { Button } from '@components/_basics/Basics';

import { ScrollDown } from '@components/scrollDown';

import { Model } from '@assets/models/me';

import { Suspense } from 'react';
import styles from './hero.module.scss';

const HeroSection = styled.div`
  height: auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  place-items: center;
  animation: fadeInFromBelow 1s ease-in-out;

  p {
    line-height: 1.6rem;
    text-align: justify;
    font-weight: 300;
    max-width: 25rem;
    padding: 0;
  }

  @keyframes fadeInFromBelow {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }

`;

const ButtonContainer = styled.div`
	display: flex;

	margin: 1rem auto;

	@media (max-width: 768px) {
		flex-direction: column;
		width: 80%;
		max-width: 30rem;
		margin: 0 auto;
		justify-content: center;
		font-size: 1.2rem;
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: flex-start;
		gap: 1rem;
	}
`;

const CustomCanvas = styled(Canvas)`
	@media (min-width: 768px) {
		width: fit-content;
		height: 100%;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const angletoRadian = (angle: number) => {
	return angle * (Math.PI / 180);
};

export const Rotate3DModel = () => {
	// useFrame((state) => {
	// 	state.camera.position.x = Math.sin(state.clock.getElapsedTime()) * 5;
	// 	state.camera.position.z = Math.cos(state.clock.getElapsedTime()) * 5;
	// 	state.camera.lookAt(0, 0, 0);
	// });

	// requestAnimationFrame(() => {
	// 	document.getElementById("hero")?.scrollIntoView();
	// });

	const orbitControlsRef = useRef<any>(null);

	useFrame((state) => {
		if (!!orbitControlsRef.current) {
			const { x } = state.mouse;
			orbitControlsRef.current.setAzimuthalAngle(angletoRadian(-x * 20));
			orbitControlsRef.current.update();
		}
	});

	useEffect(() => {
		if (!!orbitControlsRef.current) {
			orbitControlsRef.current.setAzimuthalAngle(angletoRadian(0));
		}
	}, [orbitControlsRef.current]);

	return <OrbitControls ref={orbitControlsRef} maxDistance={8} minDistance={8} enableZoom={false} />;
};

const Hero = () => {
	return (
		<section className={` ${styles.wrapper} parallax}`}>
			<div className={styles.container}>
				<HeroSection>
					{/* <HeroName name={'Sabrina'} /> */}
					<div className={`${styles['text-container']} ${styles.glassmorphic} `}>
						<p>
							<b>Web developer and 3D artist based in Kingston, Jamaica.</b>
						</p>
						<p>
							{' '}
							I strive to enhance my skills concurrently by creating functional resources to benefit the broader
							community. An ongoing journey of exploration drives me to constantly embrace novel technologies and refine
							my capabilities.
						</p>
					</div>

					<ButtonContainer>
						<Button primary="true" href="/services">
							Need a service?
						</Button>
						{/* <Button href="/blog" className="glassmorphic">
							Check out the blog
						</Button> */}
					</ButtonContainer>
				</HeroSection>
				<HeroSection>
					<CustomCanvas
						flat
						shadows
						dpr={[1, 2]}
						camera={{ position: [2, 0, 12], fov: 15 }}
						style={{
							width: '375px',
							height: '500px'
						}}
					>
						{/* <PerspectiveCamera makeDefault position={[0, 0, 12]} /> */}
						<ambientLight />
						<directionalLight />
						<Suspense fallback={null}>
							<PresentationControls
								global
								zoom={1}
								rotation={[0, -Math.PI / 4, 0]}
								polar={[0, Math.PI / 4]}
								azimuth={[-Math.PI / 4, Math.PI / 4]}
							></PresentationControls>
							<Rotate3DModel />
							<Model position={[0.025, -0.9, 0]} rotation={[0.1, -0.75, 0]} />
						</Suspense>
					</CustomCanvas>
				</HeroSection>
			</div>
			<ScrollDown />
		</section>
	);
};

export default Hero;
