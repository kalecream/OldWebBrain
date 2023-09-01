import styled from '@emotion/styled';

import HeroName from '@components/hero/heroName/heroName';
import { Button } from '@components/_basics/Basics';

import { ScrollDown } from '@components/scrollDown';
import styles from './hero.module.scss';

import { SceneViewer, HeroModel } from '@components/threeJS/scene';

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

const Hero = () => {
	return (
		<section className={` ${styles.wrapper} parallax}`}>
			<SceneViewer scale={90 } modelPath={"/lost_robot/scene.gltf"} />
			<div className={styles.container}>
				<HeroSection>
					<HeroName name={'Sabrina'} />
					<div className={`${styles['text-container']} ${styles.glassmorphic} `}>
						<p>
							<b>Web developer  based in Kingston, Jamaica.</b>
						</p>
						<p>
							 An ongoing journey of exploration drives me to constantly embrace novel technologies and refine my skillset.
						</p>
					</div>

					<div className={styles['button-container']}>
						<Button primary="true" href="/services">
							Need a service?
						</Button>
						<Button href="/blog" className="glassmorphic">
							Check out the blog
						</Button>
					</div>
				</HeroSection>
				<HeroSection>
					<HeroModel />
				</HeroSection>
			</div>
			<ScrollDown />
		</section>
	);
};

export default Hero;
