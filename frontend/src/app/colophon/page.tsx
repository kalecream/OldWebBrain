import Link from "next/link";

const ColophonPage = () => {
	return (
		<section className="paragraph">
			<h1>Colophon</h1>
			<div className="prose"><p>
				A colophon is a publishing term that describes how a book was made. This is that, but for a website.{' '}
			</p>
				<p>This website is made using Next.js 14, stored on Github and deployed using Vercel.</p></div>
			
				<h2>Acknowledgement</h2>
			<p className="prose">The theme within this website is based on the Caribbean folklore of the <Link href={'https://www.wikiwand.com/en/Soucouyant'}>Soucouyant</Link> or Ole Higue. She is the Caribbean's version of a Vampire, a werewolf and is combined with West African witch mythos.</p>
			
			<div className="prose">
				<h2>Credits</h2>
				<ul>
					<li><Link href={"https://www.rpnation.com/threads/fifteen-years-later-the-vampire-diaries-the-originals-rp.240860/"} target="_blank">Vampire Post Divider</Link> found on a  roleplaying forum discussing The Vampire Diaries/The Originals.</li>
					<li><Link href={"https://codepen.io/sosuke/pen/Pjoqqp"} target="_blank">CSS Filter Generator</Link> to change colors from Black to a specific Hex. This is used to change the blog title when hovering (on non-index pages.)</li>
				</ul>
			</div>
		</section>
	);
};

export default ColophonPage;
