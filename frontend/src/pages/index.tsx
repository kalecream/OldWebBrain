import Page from '@containers/layout/page';
import Hero from '@components/hero/hero';
import { SiteBackground } from '@components/threeJS/scene';
import ProjectList from '@components/projects/projectsList';

export const Home = (): JSX.Element => {
	return (
		<Page>
			<SiteBackground />
			<Hero />
			{/* TODO: move blog posts to Sanity} */}
			{/* <BlogList posts={posts}  /> */}
			<ProjectList />
		</Page>
	);
};

export default Home;
