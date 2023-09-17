import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PresentationControls, PerspectiveCamera, Preload, Html } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Model } from '@assets/models/me';
import { Model as IndexScene } from '@assets/models/Scene';

import Image from 'next/image';
import Placeholder from '@assets/images/indexBackground.webp';

export const angletoRadian = (angle: number) => {
	return angle * (Math.PI / 180);
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
			{/* <fog color="#161616" attach="fog" near={8} far={50} /> */}
			<Suspense
				fallback={
					<Html center>
						<div className="subtleBackground" />
					</Html>
				}
			>
				<ambientLight />
				<IndexScene />
				<directionalLight />
				<PresentationControls
					global
					rotation={[0, -Math.PI / 4, 0]}
					polar={[0, Math.PI / 2]}
					azimuth={[-Math.PI / 4, Math.PI / 4]}
				/>
			</Suspense>
			<EffectComposer>
				<DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
				<Bloom luminanceThreshold={0} luminanceSmoothing={0.8} height={300} />
				<Noise opacity={0.02} />
				<Vignette eskil={false} offset={0.1} darkness={1} />
			</EffectComposer>
		</Canvas>
	);
};

export const HeroModel = (): JSX.Element => {
	const orbitControlsRef = useRef<any>(null);

	// useFrame((state) => {
	// state.camera.position.x = Math.sin(state.clock.getElapsedTime()) * 5;
	// state.camera.position.z = Math.cos(state.clock.getElapsedTime()) * 5;
	// state.camera.position.x = 15;
	// state.camera.position.y = 24;
	// state.camera.position.z = 12;
	//controls.update() must be called after any manual changes to the camera's transform
	// });

	useEffect(() => {
		if (!!orbitControlsRef.current) {
			orbitControlsRef.current.setAzimuthalAngle(angletoRadian(0));
		}

		
	}, [orbitControlsRef.current]);
	return (
		<Canvas
			flat
			shadows
			camera={{ fov: 50 }}
			style={{
				width: '100%',
				height: '75vh',
				margin: 'auto',
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
				{/* <PerspectiveCamera makeDefault position={[0, 0, 12]} /> */}
				<OrbitControls ref={orbitControlsRef} maxDistance={4} minDistance={4} />
				<Model />
			</Suspense>
		</Canvas>
	);
};
