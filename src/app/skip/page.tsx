import Link from 'next/link';

const SkipPage = () => {
	return (
		<>
			<section>
				<p className='prose'>
					Hi, friend! This is the personal side of my website for my musings and projects that might not jive with the service seeking crowd.
				</p>
				<p className='prose'>Right now, I'm doing <Link href="practice/swordtember">Swordtember</Link> and, then <Link href="practice/inktober">Inktober</Link> challenges.</p>
			</section>
		</>
	);
};

export default SkipPage;
