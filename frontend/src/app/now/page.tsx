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
					while trying to see which web-rings were still active. These aren't exactly goals, but a collection of
					things/experiences I'm trying to complete. I'll likely update the points with a blog post to show progress.
				</p>

				<div className="prose">
					<h3 className={style.heading}>2024-Spring</h3>

					<ul className={style.spring}>
						<li>Completing my guide on my relationship with myself and others.</li>
						<li>
							Advancing in the <Link href="https://c25k.com/c25k_plan/">C25K program</Link>.
						</li>
						<li>Creating a GBStudio game as a love letter to a muse.</li>
					</ul>
					<p>
						This spring is a busy time. I am trying to reorient myself to handle the rest of the year. The quarter
						started strong, then was blown off track by the stings of poverty and burnout. For a few months, I also had
						my head in the clouds using romance as a distraction. I've been better about returning to my goals at the
						end of this season. I'm more focused on refining my personal productivity systems to prevent stalling again
						rather than powering through to complete my goals while neglecting my real responsibilities.{' '}
					</p>
					<p>wins: diving into reading again, love, strengthening community ties and a stronger sense of self. </p>
					<p></p>

					<details className={style.behind}>
						<summary>Behind Me.</summary>

						<details className={style.behind}>
							<summary>
								<h3>2023-Winter</h3>
							</summary>

							<ul className={style.winter}>
								<li>Had the idea for this page.</li>
								<li>Started exploring individualism vs caring for self as a member of a community.</li>
							</ul>
						</details>
					</details>
				</div>
			</div>
		</section>
	);
};

export default NowPage;
