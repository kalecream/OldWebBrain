'use client';
// import Link from 'next/link';
import Image from 'next/image';
// import { HeroModel } from '@components/threeJS/HeroModel';
import HeroName from '@components/hero/heroName/heroName';
import { ScrollDown } from '@components/scrollDown';
import hero from '@styles/modules/Hero.module.scss';
import button from '@styles/modules/Button.module.scss';
import Valentine from '@assets/images/valentine.webp';
import Bop from '@assets/images/bop.webp';
import Link from 'next/link';

const Hero = () => {
	return (
		<section>
			<div className={hero.container}>
				<div className={hero.cta}>
					<HeroName name={'Sabrina'} />
					<div className={`glassmorphic ` + hero.text}>
						<center>
							<p>
								<b>Web developer</b>
								<br /> based in 🇯🇲.
							</p>
							<p>
								Hi, I'm{' '}
								<a href="https://www.sabrinamedwinter.com/" className="h-card" rel="me">
									Sab Medwinter
								</a>
								.
							</p>
							<p>
								{' '}
								I originally intended this site to be a professional portfolio, but it's evolved into more of a personal
								showcase as I explore the indie web.{' '}
							</p>
						</center>
					</div>

					<div className={button.container}>
						<Link
							title="Professional Services"
							className={button.primary}
							href="mailto:sabrinamedwinter@gmail.com"
							rel="me"
						>
							Need a service?
						</Link>
						<Link title="Blog Posts" className={button.secondary + ` glassmorphic`} href="/blog">
							Check out the blog
						</Link>
					</div>
				</div>

				<div className={hero.model}>
					{/* <HeroModel /> */}
					<Image
						src={Bop}
						loader={({ src, width }) => `${src}?w=${width}`}
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: 'auto', height: 'clamp(200px, 40vw,1000px)' }}
						alt=""
					/>
				</div>
			</div>
			<ScrollDown />
		</section>
	);
};

export default Hero;
