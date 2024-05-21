import Link from 'next/link';
import Image from 'next/image';
// import { HeroModel } from '@components/threeJS/HeroModel';
import HeroName from '@components/hero/heroName/heroName';
import { ScrollDown } from '@components/scrollDown';
import hero from '@styles/modules/Hero.module.scss';
import button from '@styles/modules/Button.module.scss';
import Valentine from '@assets/images/valentine.webp';

const Hero = () => {
	return (
		<section>
			<div className={hero.container}>
				<div className={hero.cta}>
					<HeroName name={'sabrina'} />
					<div className={hero.text}>
						<center>
							<p>
								<b>Web developer</b><br/> based in Kingston, Jamaica.
							</p>
						</center>
					</div>

					<div className={button.container}>
						{/* <Link
							title="Professional Services"
							className={button.primary}
							href="/services"
						>
							Need a service?
						</Link> */}
						{/* <Link
							title="Blog Posts"
							className={button.secondary + ` glassmorphic`}
							href="/blog"
						>
							Check out the blog
						</Link> */}
					</div>
				</div>
				<div className={hero.model}>
					{/* <HeroModel /> */}
					<Image unoptimized loader={({ src }) => src} src={Valentine} width={0} height={0} sizes='100vw' style={{width:'auto', height: 'clamp(200px, 40vw,1000px)'}} alt="A picture of a 3D rendered Valentine's day cupcake with be mine written above it" />
				</div>
			</div>
			<ScrollDown />
		</section>
	);
};

export default Hero;
