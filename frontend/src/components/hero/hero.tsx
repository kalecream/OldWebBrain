'use client';
import Link from 'next/link';
import Image from 'next/image';
import { HeroModel } from '@components/threeJS/HeroModel';
import HeroName from '@components/hero/heroName/heroName';
import { ScrollDown } from '@components/scrollDown';
import hero from '@styles/modules/Index.module.scss';
import button from '@styles/modules/Button.module.scss';
import HeroImage from '@assets/images/vamp.webp';

const Hero = () => {
	return (
		<section style={{ minHeight: '90vh' }}>
			<div className={hero.container}>
				<div className={hero.cta}>
					<HeroName name={'Sabrina'} />
					<div className={` ` + hero.text}>
						<center>
							<h2>the <span>Web Developer</span></h2>
							<p className="p-note">
								I intended this site to be a professional portfolio, but it has evolved into a personal showcase as I
								explore the indie web.
							</p>
						</center>
					</div>

					<div className={button.container}>
						<Link href="/professional" rel="me">
							<button className={button.vamp} role="button">
								<span className={button.text}>The Professional Route</span>
								<span className={button["vamp-background"]}></span>
								<span className={button["vamp-border"]}></span>

								{/* <!-- mask-border fallback --> */}
								<svg style={{ position: 'absolute', width: '0', height: '0' }}>
									<filter id="remove-black-vamp" color-interpolation-filters="sRGB">
										<feColorMatrix
											type="matrix"
											values="1 0 0 0 0
                 0 1 0 0 0
                 0 0 1 0 0
                 -1 -1 -1 0 1"
											result="black-pixels"
										></feColorMatrix>
										<feComposite in="SourceGraphic" in2="black-pixels" operator="out"></feComposite>
									</filter>
								</svg>
							</button>
						</Link>
						<Link  className={''} href="/skip" style={{scale: '0.8'}}>
							Skip
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
						style={{ width: 'auto', height: 'clamp(100px, 40vw,1000px)', alignSelf: 'center' }}
						alt=""
						className="u-photo"
					/>
				</div>
			</div>
			{/* <ScrollDown /> */}
		</section>
	);
};

export default Hero;
