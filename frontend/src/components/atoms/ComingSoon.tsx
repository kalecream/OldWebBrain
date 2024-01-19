import Link from 'next/link';

export const ComingSoon = () => {
	return (
		<div>
			<section style={{ width: '100%' }}>
				<h1 style={{ fontSize: 'clamp(2rem, 10vw, 8rem)', fontStyle: 'italics' }}>Coming Soon</h1>
				<Link href={'/'} style={{ textAlign: 'center' }}>
					⟵ back
				</Link>
			</section>
		</div>
	);
};
