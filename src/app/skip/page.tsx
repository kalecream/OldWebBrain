import Link from 'next/link';

const SkipPage = () => {
	return (
		<>
			<section>
				<h1>Hi, Friend!</h1>
				<p className='prose'>
					This is the personal side of my website for my musings and projects that might not jive with the service-seeking crowd. To this, I'll be adding personal notes, musings and rough drafts of projects that are not polished enough to go in my portfolio.
				</p>
				<p className='prose'>Right now, I'm doing <Link href="practice/swordtember">Swordtember</Link> and, then <Link href="practice/inktober">Inktober</Link> challenges to get back into 3D practice and flesh out my portfolio.</p>
			</section>
		</>
	);
};

export default SkipPage;
