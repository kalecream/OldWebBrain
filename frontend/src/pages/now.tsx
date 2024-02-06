import { Page } from '@containers/layout';
import Link from 'next/link';

const NowPage = () => {
	return (
		<Page>
			<section>
				<h2>Now</h2>
				

                <div className='prose'>
                <p>
					{' '}
					The idea of a now page came from <Link href={"https://sive.rs/now3"}>Derek Sivers</Link>. A page I stumbled on while trying to see which web-rings were still active.
				</p>
					<h3>2024-Q1</h3>
                    <p>There aren't exactly goals, but a bunch of things/experiences I'm trying to work on. I'll likely update the points with pictures and links to show progress.</p>
                    <ul>
                        <li>Studying how to communicate effectively, consideration and love.</li>
                        <li>Studying and exploring combatting individualism vs caring for self as a member of a community.</li>
                        <li>Expressing myself through cooking, baking, 3D modelling, and painting with acrylics and possibly moving to a graphic journal instead of a just a text journal.</li>
                        <li>A v1.0.0 version of this website.</li>
                    </ul>
                </div>
                {/* TODO: style past */}
				{/* <div>
                    <details>
                        <summary><h3 style={{margin: 0}}>In The Past</h3></summary>
                        <p>I just started this page</p>
                    </details>
                </div> */}
			</section>
		</Page>
	);
};

export default NowPage;
