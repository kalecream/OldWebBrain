import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PresentationControls, PerspectiveCamera, Preload, Html } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Model } from '@assets/models/me';
import { Model as IndexScene } from '@assets/models/Scene';

import Image from 'next/image';
import Placeholder from '@assets/images/indexBackground.webp';
import styled from '@emotion/styled';

export const angletoRadian = (angle: number) => {
	return angle * (Math.PI / 180);
};

export const CustomOrbital = () => {
	const orbitControlsRef = useRef<any>(null);

	useFrame((state) => {
		// state.camera.position.x = Math.sin(state.clock.getElapsedTime()) * 5;
		// state.camera.position.z = Math.cos(state.clock.getElapsedTime()) * 5;
		state.camera.position.x = 15;
		state.camera.position.y = 24;
		state.camera.position.z = 20;
		//controls.update() must be called after any manual changes to the camera's transform
	});

	requestAnimationFrame(() => {
		document.getElementById('hero')?.scrollIntoView();
	});

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

	return <OrbitControls ref={orbitControlsRef} maxDistance={6} minDistance={6} />;
};

const SiteOrbital = () => {
	const orbitControlsRef = useRef<any>(null);

	useFrame((state) => {
		state.camera.position.y = 2.1403; // down <- --> up
		state.camera.position.z = -0.42659; // further away <<- -> closer
		state.camera.position.x = 0;// --> around <--
		// state.camera.position.x = Math.sin(state.clock.getElapsedTime()) * 5;
		// state.camera.position.z = Math.sin(state.clock.getElapsedTime()) * 5;
	});

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

	return <OrbitControls ref={orbitControlsRef} />;
};

export const Scene = ({ modelPath, scale = 40 }) => {
	const ref = useRef(null);
	const gltf = useLoader(GLTFLoader, modelPath);
	const [hovered, hover] = useState(false);

	useFrame((state, delta) => (ref.current.rotation.y += 0.003));

	return (
		<>
			<primitive
				ref={ref}
				object={gltf.scene}
				scale={hovered ? scale * 1.2 : scale}
				onPointerOver={(event) => hover(true)}
				onPointerOut={(event) => hover(false)}
			/>
		</>
	);
};

export const SceneViewer = ({ modelPath, scale = 40 }): JSX.Element => {
	return (
		<Canvas shadows camera={{ fov: 30, position: [0, 0, 0] }}>
			<ambientLight />
			<spotLight position={[10, 10, 10]} rotation={0.15} />
			<pointLight position={[-10, -10, -10]} />
			<Suspense fallback={null}>
				<Scene modelPath={modelPath} scale={scale} />
				<OrbitControls />
			</Suspense>
		</Canvas>
	);
};

export const SiteBackground = (): JSX.Element => {
	return (
		<Canvas
			shadows
			style={{
				width: '100vw',
				height: '100vh',
				position: 'fixed',
				filter: 'saturate(1.15) hue-rotate(345deg)',
				zIndex: -999,
			}}
		>
			<fog color="#161616" attach="fog" near={8} far={50} />
			<Suspense fallback={<Html center><Image height={0} width={0} loader={({src})=>src} sizes="100vw" style={{width: '100vw', height: 'auto', top: 0, left: 0}} src={Placeholder} alt=""/></Html>}>
				<ambientLight />
				<IndexScene />
				<directionalLight />
				<PresentationControls
					global
					rotation={[0, -Math.PI / 4, 0]}
					polar={[0, Math.PI / 2]}
					azimuth={[-Math.PI / 4, Math.PI / 4]}
				/>
				{/* <SiteOrbital /> */}
			</Suspense>
			<EffectComposer>
				<DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
				<Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
				<Noise opacity={0.015} />
				<Vignette eskil={false} offset={0.2} darkness={1} />
			</EffectComposer>
		</Canvas>
	);
};

const HeroCanvas = styled(Canvas)`
	@media (min-width: 768px) {
		width: fit-content;
		height: 100%;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const HeroModel = (): JSX.Element => {
	return (
		<HeroCanvas
			flat
			shadows
			camera={{ fov: 50 }}
			style={{
				width: '100%',
				height: '75vh'
			}}
		>
			<Preload all />
			<Suspense fallback={null}>
				<PresentationControls
					global
					rotation={[0, -Math.PI / 4, 0]}
					polar={[0, Math.PI / 4]}
					azimuth={[-Math.PI / 2, Math.PI / 2]}
				/>
				<ambientLight />
				<directionalLight />
				<CustomOrbital />
				<Model />
			</Suspense>
		</HeroCanvas>
	);
};
