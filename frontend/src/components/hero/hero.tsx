'use client';
// import Link from 'next/link';
import Image from 'next/image';
// import { HeroModel } from '@components/threeJS/HeroModel';
import HeroName from '@components/hero/heroName/heroName';
import { ScrollDown } from '@components/scrollDown';
import hero from '@styles/modules/Index.module.scss';
import button from '@styles/modules/Button.module.scss';
import HeroImage from '@assets/images/bop.webp';
import Link from 'next/link';

const Hero = () => {
	return (
		<section style={{minHeight: '100vh'}}>
			<div className={hero.container}>
				<div className={hero.cta}>
					<HeroName name={'Sabrina'} />
					<div className={` ` + hero.text}>
						<center>
							<h3 style={{ color: " var(--primary)" }} >
								Web Developer based in 🇯🇲
							</h3>
							<p className="p-note" style={{lineHeight: '1.2',fontSize:'1.2rem' }}>
								I intended this site to be a professional portfolio, but it has evolved into a personal showcase as I
								explore the indie web.
							</p>
						</center>
					</div>

					<div className={button.container}>
						<Link title="What I'm up to!" className={button.primary} href="/now" rel="me">
							Now?
						</Link>
						<Link title="Blog Posts" className={button.secondary + ` glassmorphic`} href="/blog">
							Check out the blog
						</Link>
					</div>
				</div>

				<div className={hero.model}>
					{/* <HeroModel /> */}
					<Image
						src={HeroImage}
						loader={({ src, width }) => `${src}?w=${width}`}
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: 'auto', height: 'clamp(100px, 35vw,1000px)' }}
						alt=""
						className="u-photo"
					/>
				</div>
			</div>
			<ScrollDown />
		</section>
	);
};

export default Hero;
