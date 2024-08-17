import Link from "next/link";

const ColophonPage = () => {
	return (
		<section className="paragraph">
			<h1>Colophon</h1>
			<div className="prose"><p>
				Colophon A colophon is a publishing term that describes how a book was made. This is that, but for a website.{' '}
			</p>
			<p>This website is made using Next.js, stored on Github and deployed using Vercel.</p></div>
			
			<div className="prose">
				<h2>Credits</h2>
				<p><Link href={"https://www.rpnation.com/threads/fifteen-years-later-the-vampire-diaries-the-originals-rp.240860/"}>Vampire Post Divider</Link> found on a  roleplaying forum discussing The Vampire Diaries/The Originals</p>
			</div>
		</section>
	);
};

export default ColophonPage;
