import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Model } from '@assets/models/ball';
import { Preload, Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export const HeroModel = (): JSX.Element => {
	return (
		<Canvas
			flat
			shadows
			camera={{ fov: 60 }}
			style={{
				width: 'clamp(500px,40vw,650px)',
				height: '400px',
				margin: 'auto',
			}}
		>
			<Preload all />
			<Suspense fallback={<Html center>Loading..</Html>}>
				<ambientLight />
				<Model />
			</Suspense>
			<EffectComposer>
				<Bloom luminanceThreshold={0} luminanceSmoothing={0.8} height={300} />
			</EffectComposer>
		</Canvas>
	);
};
