import HeroName from 'frontend/src/components/hero/heroName/heroName';
import { ScrollDown } from 'frontend/src/components/scrollDown';
import styles from './hero.module.scss';
import button from '@components/_basics/button.module.scss';
import { SceneViewer, HeroModel } from 'frontend/src/components/threeJS/scene';
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
						<Link className={button.primary} href="mailto:sabrinamedwinter@gmail.com?bcc=mail@kalecream.com&subject=Project%20Proposal&body=Hi%20Sabrina%2C%0D%0A%0D%0AProject%20Description%3A%0D%0A%0D%0ABudget%3A%0D%0A%0D%0AWhat%20goals%20are%20you%20looking%20to%20achieve%20with%20this%20project%3F%0D%0A%0D%0AHave%20you%20ever%20worked%20with%20a%20freelancer%20before%3F%0D%0A%0D%0AWhen%20do%20you%20need%20this%20project%20completed%20by%3F%0D%0A%0D%0AIs%20there%20anything%20else%20I%20should%20know%3F%0D%0A%0D%0A%0D%0ABest%2C">
							Need a service?
						</Link>
						<Link className={button.secondary} href="#blog" >
							Check out the blog
						</Link>
					</div>
				</div>
				{/* <div className={styles.heroSection}>
					<HeroModel />
				</div> */}
			</div>
			<ScrollDown />
		</section>
	);
};

export default Hero;