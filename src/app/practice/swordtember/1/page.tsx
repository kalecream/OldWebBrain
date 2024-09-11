'use client';
import { Suspense, useRef, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Preload, PresentationControls } from '@react-three/drei';
import { EffectComposer, ChromaticAberration, Noise, Bloom } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Model } from '@assets/models/WingedSword';

export const SceneViewer = () => {
	return (
		<Canvas
			shadows
			dpr={[1, 2]}
			style={{
				margin: 'auto',
				width: '75vh',
				height: '75vh',
			}}
		>
			<Preload all />
			<Suspense fallback={<Html center>Loading</Html>}>
				<Model />
				<OrbitControls autoRotate autoRotateSpeed={0.5} />
				<PresentationControls
					global
					rotation={[-Math.PI / 2, -Math.PI / 4, -Math.PI / 4]}
					polar={[0, Math.PI / 2]}
					azimuth={[-Math.PI / 4, Math.PI / 4]}
				/>
			</Suspense>
			<EffectComposer>
				<ChromaticAberration
					blendFunction={BlendFunction.NORMAL} // blend mode
					offset={[0.0002, 0.000005]} // color offset
				/>
				<Noise premultiply />
				<Bloom luminanceThreshold={0} luminanceSmoothing={0.8} height={0.1} />
			</EffectComposer>
		</Canvas>
	);
};

const Swordtempber2024_Wings = () => {
	return (
		<section>
			<div className="item-container">
				<SceneViewer />
				<div className="stat-block wide">
					<hr />
					<div className="section-left">
						<div className="creature-heading">
							<h1>Bee Dagger</h1>
							<h2>Weapon (dagger), uncommon</h2>
						</div>
						<hr/>
						<div className="top-stats">
							<div className="property-line first">
								<h4>Armor Class</h4>
								<p>18 (natural armor)</p>
							</div>
							<div className="property-line">
								<h4>Damage</h4>
								<p>1d4 piercing</p>
							</div>
							<div className="property-line last">
								<h4>Speed</h4>
								<p>25ft.</p>
							</div>
							<hr/>
							<div className="abilities">
								<div className="ability-strength">
									<h4>STR</h4>
									<p>14 (+2)</p>
								</div>
								<div className="ability-dexterity">
									<h4>DEX</h4>
									<p>11 (+0)</p>
								</div>
								<div className="ability-constitution">
									<h4>CON</h4>
									<p>13 (+1)</p>
								</div>
								<div className="ability-intelligence">
									<h4>INT</h4>
									<p>1 (-5)</p>
								</div>
								<div className="ability-wisdom">
									<h4>WIS</h4>
									<p>3 (-4)</p>
								</div>
								<div className="ability-charisma">
									<h4>CHA</h4>
									<p>1 (-5)</p>
								</div>
							</div>
							<hr/>
							<div className="property-line first">
								<h4>Damage Immunities</h4>
								<p>poison, psychic</p>
							</div>
							<div className="property-line">
								<h4>Condition Immunities</h4>
								<p>blinded, charmed, deafened, exhaustion, frightened, petrified, poisoned</p>
							</div>
							<div className="property-line">
								<h4>Senses</h4>
								<p>blindsight 60ft. (blind beyond this radius), passive Perception 6</p>
							</div>
							<div className="property-line">
								<h4>Languages</h4>
								<p>&mdash;</p>
							</div>
							<div className="property-line last">
								<h4>Challenge</h4>
								<p>1 (200 XP)</p>
							</div>
						</div>
                        <hr/>
						<div className="property-block">
							<h4>Weather Control. </h4>
							<p>
							This item can control the local weather or climate.
							</p>
						</div>
						<div className="property-block">
							<h4>Lunar/Solar.</h4>
							<p>In the sunlight or moonlight, this gains a boost to its abilities. A lunar item might instead gain powers under the full moon.</p>
						</div>
					</div>
					<div className="section-right">
						<div className="actions">
							<h3>Actions</h3>
							<div className="property-block">
								<h4>Multiattack.</h4>
								<p>The armor makes two melee attacks.</p>
							</div>
							<div className="property-block">
								<h4>Slam.</h4>
								<p>
									<i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft., one target.
									<i>Hit:</i> 5 (1d6 + 2) bludgeoning damage.
								</p>
							</div>
						</div>
						<div className="actions">
							<h3>Legendary Actions</h3>
							<div className="property-block">
								<h4>Multiattack.</h4>
								<p>The armor makes two melee attacks.</p>
							</div>
							<div className="property-block">
								<h4>Slam.</h4>
								<p>
									<i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft., one target.
									<i>Hit:</i> 5 (1d6 + 2) bludgeoning damage.
								</p>
							</div>
						</div>
					</div>
					<hr className="bottom" />
				</div>
			</div>
		</section>
	);
};

export default Swordtempber2024_Wings;
