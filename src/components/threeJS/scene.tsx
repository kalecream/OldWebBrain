import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import {
	Environment,
	OrbitControls,
	PresentationControls,
	PerspectiveCamera,
	CameraControls,
	OrthographicCamera,
	Preload
} from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

import { Model } from '@assets/models/me';
import { Model as IndexScene } from '@assets/models/Scene';

import styled from '@emotion/styled';


export const angletoRadian = (angle: number) => {
	return angle * (Math.PI / 180);
};

export const Rotate3DModel = () => {
	useFrame((state) => {
		// state.camera.position.x = Math.sin(state.clock.getElapsedTime()) * 5;
		// state.camera.position.z = Math.cos(state.clock.getElapsedTime()) * 5;
		// state.camera.lookAt(22, 10, 10);
	});

	// requestAnimationFrame(() => {
	// 	document.getElementById('hero')?.scrollIntoView();
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

	return <OrbitControls ref={orbitControlsRef} maxDistance={6} minDistance={6} enableZoom={true} />;
};

export const CameraCirleDolly = () => {
	// make camera circle
}

export const Scene = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
	const ref = useRef(null);
	const gltf = useLoader(GLTFLoader, modelPath);
	const [hovered, hover] = useState(false);

	useFrame((state, delta) => (ref.current.rotation.y += 0.003));

	return (
		<>
			<primitive
				ref={ref}
				object={gltf.scene}
				position={position}
				scale={hovered ? scale * 1.2 : scale}
				onPointerOver={(event) => hover(true)}
				onPointerOut={(event) => hover(false)}
			/>
		</>
	);
};

export const SceneViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }): JSX.Element => {
	return (
		<Canvas shadows dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
			<ambientLight />
			<spotLight position={[10, 10, 10]} rotation={0.15} />
			<pointLight position={[-10, -10, -10]} />
			<Suspense fallback={null}>
				<Scene modelPath={modelPath} scale={scale} position={position} />
				<OrbitControls />
			</Suspense>
		</Canvas>
	);
};

export const SiteBackground = (): JSX.Element => {


	return (
		<Canvas
			shadows
			camera={{
				position: [0, 0, -12],
				fov:50,
				near: 0.1,
				far: 1000,
				rotation: [0.707107, -0.707107, 0]
			}}
			style={{
				width: '100vw',
				height: '100vh',
				position: 'fixed',
				filter: 'saturate(1.15) hue-rotate(345deg)',
				zIndex: -999
			}}
		>
			<Preload all />
			<PerspectiveCamera makeDefault position={[4, -8, -15]} />
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Suspense fallback={null}>
				<PresentationControls
					global
					// rotation={[0, -Math.PI / 4, 0]}
					polar={[0, Math.PI / 4]}
					azimuth={[-Math.PI / 4, Math.PI / 4]}
				/>
				<IndexScene />
				<OrbitControls autoRotate />
			</Suspense>
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
			camera={{ position: [2, 0, 8], fov: 30 }}
			style={{
				width: '100%',
				height: '500px'
			}}
		>
			<Preload all />
			<ambientLight />
			<directionalLight />
			<Suspense fallback={null}>
				<PresentationControls
					global
					rotation={[0, -Math.PI / 4, 0]}
					polar={[0, Math.PI / 4]}
					azimuth={[-Math.PI / 4, Math.PI / 4]}
				/>
				<Rotate3DModel />
				<Model />
				<OrbitControls zoom={1}/>
			</Suspense>
		</HeroCanvas>
	);
};
