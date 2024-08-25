import { MediaProfiles } from '@components/navigation/socialmedia';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '@assets/images/valentine.webp';
import PalestineGraphic from '@assets/images/palestine.gif';
import style from '@styles/modules/footer.module.scss';

export const SocialMediaList = () => {
	return (
		<div className={style['social-media-list'] + ` flex space-between`}>
			{MediaProfiles.map((media) => {
				const Icon = media.icon;

				return (
					<Link
						href={media.url}
						aria-label="social media link"
						className={style['social-media'] + ` ` + media.className ? media.className : null}
						target="_blank"
						key={media.name}
						rel="me"
					>
						<Icon name={media.name} />
					</Link>
				);
			})}
		</div>
	);
};

export const Footer: React.FunctionComponent = () => {
	return (
		<footer>
			<div className="flex" style={{alignItems: 'center'}}>
				<Image src={LogoImage} width={40} height={40} alt={''} style={{margin: 0, padding: 0}} />
				<small>sabrina medwinter &copy; {new Date().getFullYear()}</small>
			</div>
			<div>
				<div className="flex my-1">
					<div className="flex">
						<Link href="https://decolonizepalestine.com/">
							<Image
								src={PalestineGraphic}
								alt="From the river to the sea, Palestine will be the free."
								width={88}
								height={44}
								style={{ borderRadius: 0, scale: '0.9' }}
							/>
						</Link>
					</div>
				</div>
			</div>

			<div className="flex row" style={{flexWrap: 'wrap'}}>
				<Link href={'/about'}>About</Link>
				<Link href={'/sitemap.xml'}>Sitemap</Link>
				<Link href={'/colophon'}>Colophon</Link>
				<Link href={'https://github.com/kalecream/OldWebBrain'}>Source</Link>
				<Link href={'/rolodex'}>Rolodex</Link>
			</div>
		</footer>
	);
};
