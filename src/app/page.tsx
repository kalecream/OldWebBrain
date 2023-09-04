'use client';

import Hero from '@components/hero/hero';
import { SiteBackground } from '@components/threeJS/scene';
import ProjectList from '@components/projects/projectsList';

export const Home = (): JSX.Element => {
	return (
		<>
			<SiteBackground />
			<Hero />

			<section style={{ width: '100%' }}>
				<h2 className="section-title">Things I've Made</h2>
				<ProjectList />
			</section>
		</>
	);
};

export default Home;
