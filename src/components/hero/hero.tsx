import HeroName from '@components/hero/heroName/heroName';
import { ScrollDown } from '@components/scrollDown';
import styles from './hero.module.scss';
import button from '@components/_basics/button.module.scss';
import { SceneViewer, HeroModel } from '@components/threeJS/scene';
import Link from 'next/link';

const Hero = () => {
	return (
		<section>
			<SceneViewer scale={90} modelPath={"/lost_robot/scene.gltf"} />
			<div className={styles.container}>
				<div className={styles.heroSection}>
					<HeroName name={'sabrina'} />
					<div className={`${styles['text-container']} ${styles.glassmorphic}`}>
						<p>
							<b>Web developer  based in Kingston, Jamaica.</b>
						</p>
						<p>
							 An ongoing journey of exploration drives me to constantly embrace novel technologies and refine my skillset.
						</p>
					</div>

					<div className={styles['button-container']}>
						<Link className={button.primary} href="/services">
							Need a service?
						</Link>
						<Link className={button.secondary} href="#blog" >
							Check out the blog
						</Link>
					</div>
				</div>
				<div className={styles.heroSection}>
					<HeroModel />
				</div>
			</div>
			<ScrollDown />
		</section>
	);
};

export default Hero;
