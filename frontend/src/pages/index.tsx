import Page from '@containers/layout/page';
import Hero from '@components/hero/hero';
// import { SiteBackground } from '@components/threeJS/scene';
import ProjectList from '@components/projects/projectsList';
import { BlogList, PostType } from './blog';
import { getAllPosts } from '@utils/api';
import { GetStaticProps } from 'next/types';
// import { ProjectSlider } from '@components/projects/ProjectSlider';

export const Home = ({posts}: PostType): JSX.Element => {
	return (
		<Page>
			{/* <SiteBackground /> */}
			<Hero />
			{/* TODO: move blog posts to Sanity} */}
			<BlogList posts={posts} />
			<ProjectList />
			{/* <ProjectSlider /> */}
		</Page>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts(['date', 'description', 'slug', 'title', 'coverImage', 'tags']);

	return {
		props: { posts }
	};
};


export default Home;
