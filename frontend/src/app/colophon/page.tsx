import Link from 'next/link';

const ColophonPage = () => {
	return (
		<section className="paragraph">
			<h1>Colophon</h1>
			<div className="prose">
				<p>A colophon is a publishing term that describes how a book was made. This is that, but for a website. </p>
				<p>
					This website is made using React Typescript on the Next.js 14 framework, stored on Github and deployed using
					Vercel.
				</p>
			</div>

			<div className="prose">
				<h2>Acknowledgement</h2>
				<p className="prose">
					The theme within this website is based on the Caribbean folklore of the{' '}
					<Link href={'https://www.wikiwand.com/en/Soucouyant'}>Soucouyant</Link> or Ole Higue. She is the Caribbean's
					version of a Vampire, a werewolf and is combined with West African witch mythos.
				</p>
			</div>

			<div className="prose">
				<h2>Credits</h2>
				<p>
					I don't think I could have made my vision come to life without standing on the shoulders of the coders who
					came before me. For individuals, I will attempt to find their donation links to post alongside their credit.
				</p>
				<ul>
					<li>
						<Link
							href={'https://www.rpnation.com/threads/fifteen-years-later-the-vampire-diaries-the-originals-rp.240860/'}
							target="_blank"
						>
							Vampire Post Divider
						</Link>{' '}
						found on a roleplaying forum discussing The Vampire Diaries/The Originals.
					</li>
					<li>
						<Link href={'https://codepen.io/sosuke/pen/Pjoqqp'} target="_blank">
							CSS Filter Generator
						</Link>{' '}
						to change colors from Black to a specific Hex. This is used to change the blog title when hovering (on
						non-index pages.)
					</li>
					<li>
						<Link href="https://giphy.com/stickers/cat-halloween-this-is-peLhJa1fluELs1WCx9">
							(Temp) Vampire GIF Sticker
						</Link>{' '}
						to complement the hero section.
					</li>
					<li>
						Cool 3D <Link href="https://csspro.com/css-3d-buttons/">Button 13</Link> for the Index Hero. Taken from
						CSSPro.com and apparently inspired by Balder's Gate 3.
					</li>
					<li><Link href="https://www.svgrepo.com/svg/133672/blood-drop">Blood Drop SVG</Link> as list markers from SVGRepo.com</li>
				</ul>
			</div>
		</section>
	);
};

export default ColophonPage;
