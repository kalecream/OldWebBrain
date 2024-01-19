import Link from 'next/link';
import { HeroModel } from '@components/threeJS/HeroModel';
import { HeroName } from '@components/home';
import { ScrollDown } from '@components/atoms';
import styles from '@styles/modules/Hero.module.scss';
import button from '@styles/modules/Button.module.scss';

export const Hero = () => {
	return (
		<section>
			<div className={styles.container}>
				<div className={styles.heroSection}>
					<HeroName name={'sabrina'} />
					<div className={`${styles['text-container']} `}>
							<p>
								<b>Web developer</b>
								<br /> based in Kingston, Jamaica.
							</p>
					</div>

					<div className={styles['button-container']}>
						<Link title="Email me at sabrinamedwinter@gmail.com" className={button.primary} href="/services">
							Need a service?
						</Link>
						<Link className={button.secondary + ` glassmorphic`} href="/blog">
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
