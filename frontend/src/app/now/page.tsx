import style from '@styles/modules/Now.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ScrollDown } from '@components/scrollDown';

export const metadata: Metadata = {
	title: 'Now',
	description: 'Where I am currently focusing my efforts online and offline.',
};

const NowPage = () => {
	return (
		<section >
			<section className={style.paragraph}>
			<h2>Now.</h2>

			<div className="prose">
				<p className="glassmorphic">
					The idea of a now page came from <Link href={'https://sive.rs/now3'}>Derek Sivers</Link>. A page I stumbled on
					while trying to see which web-rings were still active. These aren't exactly goals, but a collection of
					things/experiences I'm trying to complete. I'll likely update the points with a blog post to show progress.
				</p>

				<div className={`prose ` + style.paragraph}>
					<h3 className={style.heading}>2024-Summer</h3>
					<p className="glassmorphic">
						I'm still working on last season's goals + want to focus on repairing, low-tech and continued sustainability
						tasks this season.
					</p>

					<ul className={style.summer + ` glassmorphic`}>
						<li >
							{' '}
							<progress max="100" value="17" /> Getting my amateur radio licence.
						</li>
						<li >
							{' '}
							<progress max="100" value="12" /> Calisthenics Foundations
						</li>
						<li >
							{' '}
							<progress max="100" value="5" /> Learning to sew to
							<Link href="https://www.houseofsew.com/sewing-level/"> Level 5: Proficiency</Link> (Currently L2)
						</li>
						<li>
							<progress max="100" value="5" /> Learning beginner Jamaican Sign Language.
						</li>
						<li >
								<progress max="100" value="0" /> Finishing a neglected online course (FullStackOpen).
						</li>
					</ul>
				</div>
				</div>
				<ScrollDown/>
			</section>
			<section>
			<h2 className={`section-title`}>Behind Me.</h2>
			</section>
			<section className={style.paragraph}>	
						<div className={`prose ` + style.paragraph}>
							<h3>2024-Spring</h3>
							<div className="img-grid desktop">
								<Image src="https://i.imgur.com/Z4rJL6X.jpeg" alt="" width={200} height={150} />
								<Image src="https://i.imgur.com/nD4m8JX.jpeg" alt="" width={200} height={150} />
								<Image src="https://i.imgur.com/ysYbJGt.jpeg" alt="" width={200} height={150} />
							</div>

							<p>
								This spring is a busy time. I am trying to reorient myself to handle the rest of the year. The quarter
								started strong, then was blown off track by the stings of poverty and burnout. For a few months, I've
								also had my head in the clouds using romance as a distraction. I've been better about returning to my
								goals at the end of this season becoming more focused on refining my personal productivity systems to
								prevent stalling again rather than powering through to complete my goals while neglecting my real
								responsibilities. I had the wins of diving into reading again, love, strengthening community ties and a stronger sense of self. 
							</p>

							<ul className={style.spring }>
								<li>
							<progress max="100" value="2" /> 
									Completing my{' '}
									<Link
										href={
											'https://docs.google.com/document/d/140xQK_9cy4ThBbSxBK3NANQqWoO4CxW0QUZ1HNBhAlU/edit?usp=sharing'
										}
									>
										guide on relationships
									</Link>{' '}
									I have with myself, family, friends and others.
								</li>
								<li>
							<progress max="100" value="2" /> 
									<Link href="https://docs.google.com/spreadsheets/d/1Ao_9w17kz0X82ZlpYiu4AoUsMOThUjBWkbDFai1bIsA/edit?usp=sharing">
										Advancing
									</Link>{' '}
									in the <Link href="https://c25k.com/c25k_plan/">C25K program</Link>.
								</li>
								<li>{' '}
							<progress max="100" value="2" /> 
									Creating a <Link href="https://www.gbstudio.dev/">GBStudio</Link> game as a love letter to a muse.
								</li>
							</ul>
						</div>

						
					</section>
					<section>
					<div className={`prose ` + style.paragraph}>
							<h3>2023-Winter</h3>

							<ul className={style.winter }>
								<li >Had the idea for this page.</li>
								<li >Started exploring individualism vs caring for self as a member of a community.</li>
							</ul>
						</div>
					</section>
		</section>
	);
};

export default NowPage;
