import Link from 'next/link';
import { HeroModel } from '@components/threeJS/HeroModel';
import HeroName from '@components/hero/heroName/heroName';
import { ScrollDown } from '@components/scrollDown';
import styles from './hero.module.scss';
import button from '@styles/modules/button.module.scss';

const Hero = () => {
	return (
		<section>
			<div className={styles.container}>
				<div className={styles.heroSection}>
					<HeroName name={'sabrina'} />
					<div className={`${styles['text-container']} `}>
						<center>
							<p>
								<b>Web developer</b><br/> based in Kingston, Jamaica.
							</p>
						</center>

						{/* <p>
							An ongoing journey of exploration drives me to constantly embrace novel technologies and refine my
							skillset.
						</p> */}
						{/* TODO: rewrite cringe paragraph */}
					</div>

					<div className={styles['button-container']}>
						<Link
							title="Email me at sabrinamedwinter@gmail.com"
							className={button.primary}
							href="/services"
						>
							Need a service?
						</Link>
						<Link
							className={button.secondary + ` glassmorphic`}
							href="#blog"
						>
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
