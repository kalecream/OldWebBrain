import { Page } from '@containers/layout';
import style from '@styles/modules/Now.module.scss';
import Link from 'next/link';

const NowPage = () => {
	return (
		<Page>
			<section>
				<h2>Now.</h2>

				<div className="prose">
					<p>
						{' '}
						The idea of a now page came from <Link href={'https://sive.rs/now3'}>Derek Sivers</Link>. A page I stumbled
						on while trying to see which web-rings were still active.
                    </p>
                    <div className='prose'>
                        <h3 className={style.heading}>2024-Spring</h3>
                        <p>
						These aren't exactly goals, but a collection of things/experiences I'm trying to complete. I'll likely update the points with a blog post to show progress.
					</p>
					<p>
                            <ul className={style.spring}>
							
                           
                            <li>Completing my guide on my relationship with myself and others.</li>
                            <li>Advancing in the C25K program.</li>
                            <li>Creating a GBStudio game as a love letter to a muse.</li>
						</ul>
                        </p>
                        </div>
				</div>
				{/* TODO: style past */}
				<div>
                    <details className={style.behind}>
						<summary>Behind Me.</summary>
                        <div>
                            <h3 className={style.heading}>2023-Winter</h3>
                            <ul className={style.winter}>
                            <li>Started exploring individualism vs caring for self as a member of a community.</li>
                            </ul>
                        </div>
					</details>
				</div>
			</section>
		</Page>
	);
};

export default NowPage;
