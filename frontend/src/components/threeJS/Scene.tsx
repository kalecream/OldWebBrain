import { Suspense, useRef, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';
;
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

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
