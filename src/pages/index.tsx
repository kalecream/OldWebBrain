import Page from '@containers/layout/page';
import Hero from '@components/hero/hero';

import ProjectList from '@components/projects/projectsList';

import '../styles/animations.module.css';
import 'animate.css';

const imageLoader = ({ src, width, quality }) => {
	return `https://sabrinamedwinter.com/${src}?w=${width}&q=${quality || 75}`;
};

export const Home = (): JSX.Element => {
	return (
		<Page>
			<Hero />

			<section style={{ width: '100%' }}>
				<h2 className="section-title">Things I've Made</h2>
				<ProjectList />
			</section>
		</Page>
	);
};

export default Home;
