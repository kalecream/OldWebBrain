import { SocialMediaList } from '@components/navigation';
import Link from 'next/link';

const ContactPage = () => {
	return (
		<>
			<section style={{ minHeight: '65vh', textAlign: 'center', gap: '3rem' }}>
				<div>
					<p>The best way to get me is to e-mail me at</p>
					<h1 style={{ lineHeight: '1.2', margin: 0 }}>
						<Link href="mailto://sabrinamedwinter@gmail.com">sabrinamedwinter<wbr/>@gmail.com</Link>
					</h1>
				</div>
				<div>
					<p>If I'm currently de-activated on social media,<br/> don't worry, I'll be back!</p>
					<SocialMediaList />
				</div>
			</section>
		</>
	);
};

export default ContactPage;