import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import BehindImage from '@public/img/album/plants.gif';
import PalestineGraphic from '@assets/images/palestine.gif';

export const metadata: Metadata = {
	title: 'Now',
	description: 'Where I am currently focusing my efforts online and offline.',
};

const NowPage = () => {
	return (
		<>
			<section>
				<h1>Now.</h1>

				<div className="prose">
					<p>
						The idea of a now page came from <Link href={'https://sive.rs/now3'}>Derek Sivers</Link>. A page I stumbled
						on while trying to see which web-rings were still active. These aren't exactly goals, but a collection of
						things/experiences I would like to complete. I have no qualms with them rolling over to the next quarter if I don't have enough time to complete it. I no longer stress about achieving goals. Either I am well enough to continue working on the tasks, too busy/sick trying to keep myself afloat or dead with the tasks being no longer my problem.
					</p>
				</div>
			</section>
			<section>
				<div className={`prose `}>
					<div className="img-grid">
						<Image src={BehindImage} alt="" width={200} height={120} style={{ margin: '0 auto' }} />
					</div>
					<h1>2024-Summer</h1>
					<p className="">
						I'm still working on last season's goals + want to focus on repairing, low-tech and continued sustainability
						tasks this season.
					</p>
					<hr />
					<ul>
						<li> Getting an Amateur Radio licence.</li>
						<li> Calisthenics foundations</li>
						<li>
							Learning sewing to
							<Link href="https://www.houseofsew.com/sewing-level/"> proficiency</Link>
						</li>
						<li>Learning beginner Jamaican Sign Language.</li>
						<li>Finishing a neglected online course - FullStackOpen.</li>
					</ul>
				</div>
			</section>

			<section>
				<div className={`prose `}>
				<div className="img-grid">
						<Image src={BehindImage} alt="" width={200} height={120} style={{ margin: '0 auto' }} />
					</div>
					<h1>2024-Spring</h1>
					<p>
						This spring is a busy time. I am trying to re-orient myself to handle the rest of the year. The quarter
						started strong, then was blown off track by the stings of poverty and burnout.</p><p> For a few months, I've also
						had my head in the clouds using romance as a distraction. I've been better about returning to my goals at
						the end of this season becoming more focused on refining my personal productivity systems to prevent
						stalling again rather than powering through to complete my goals while neglecting my real responsibilities.
						I had the wins of diving into reading again, love, strengthening community ties and a stronger sense of
						self.
					</p>
					<hr />
					<ul>
						<li>
							Continuing my {' '}
							<Link
								href={
									'/relationships'
								}
							>
								guide on the relationships I have
							</Link>{' '}
							 with myself, family, friends and others.
						</li>
						<li>
							<Link href="/c25k">Advancing</Link> in the <Link href="https://c25k.com/c25k_plan/">Couch to 5K challenge</Link>.
						</li>
						<li>
							Creating a <Link href="https://www.gbstudio.dev/">GBStudio</Link> game as a love letter to a muse.
						</li>
					</ul>
				</div>
			</section>
			<section>
				<div className={`prose `}>
				<div className="img-grid">
						<Image src={BehindImage} alt="" width={200} height={120} style={{ margin: '0 auto' }} />
					</div>
					<h1>2023-Winter</h1>
					<p>This is when I started this page. At the time, I was exploring individuallism vs caring for myself as a member of a community. This might re-appear as a goal-point after I read Frantz Fanon's <i>Wretched of the Earth</i>.</p>
					<div className="flex my-1">
					<div className="flex">
						<Link href="https://decolonizepalestine.com/">
							<Image
								src={PalestineGraphic}
								alt="From the river to the sea, Palestine will be the free."
								width={88}
								height={44}
								style={{ borderRadius: 0, scale: '0.9' }}
							/>
						</Link>
					</div>
				</div>
					<p>This is also when I had some awakenings about everyday life and lost most of my heroes. It ended with my giving up religion. I have oscillated between being a Christian revert or apostate for many years. The bombing of Bethlehem on Christmas Day with little out-cry from Western Church leaders was the final straw for me. It does not make sense for me to practice a religion that is so far removed from its roots / holy sites. This was not the first time I noticed that what is generally practiced is an abstract version of Christianity, but it was the occasion that disgusted me the most. The other Abrahamic religions do not appeal to me.</p>
					
				</div>
			</section>
		</>
	);
};

export default NowPage;
