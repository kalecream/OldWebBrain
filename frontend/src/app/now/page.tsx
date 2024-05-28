import style from '@styles/modules/Now.module.scss';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Now',
	description: 'Where I am currently focusing my efforts online and offline.',
};

const NowPage = () => {
	return (
		<section>
			<h2>Now.</h2>

			<div className="prose">
				<p>
					The idea of a now page came from <Link href={'https://sive.rs/now3'}>Derek Sivers</Link>. A page I stumbled on
					while trying to see which web-rings were still active.
					
					These aren't exactly goals, but a collection of things/experiences I'm trying to complete. I'll likely update
					the points with a blog post to show progress.
				</p>

				<div className="prose">
					<h3 className={style.heading}>2024-Spring</h3>
					<p>
						<ul className={style.spring}>
							<li>Completing my guide on my relationship with myself and others.</li>
							<li>
								Advancing in the <Link href="https://c25k.com/c25k_plan/">C25K program</Link>.
							</li>
							<li>Creating a GBStudio game as a love letter to a muse.</li>
						</ul>

						<details className={style.behind}>
							<summary>Behind Me.</summary>
							<div>
								<h3>2023-Winter</h3>
								<ul className={style.winter}>
									<li>Started exploring individualism vs caring for self as a member of a community.</li>
								</ul>
							</div>
						</details>
					</p>
				</div>
			</div>
		</section>
	);
};

export default NowPage;
