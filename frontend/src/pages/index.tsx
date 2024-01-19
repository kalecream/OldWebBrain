import Page from '@containers/Page';
import { Hero } from '@components/home';
// import { SiteBackground } from '@components/threeJS/scene';
import  { OtherProjects, ProjectList } from '@components/projects';
import { BlogList, PostType } from './blog';
import { getAllPosts } from '@utils/api';
import { GetStaticProps } from 'next/types';
// import { ProjectSlider } from '@components/projects/ProjectSlider';

export const Home = ({ posts }: PostType): JSX.Element => {
	return (
		<Page>
			{/* <SiteBackground /> */}
			<Hero />
			{/* TODO: move blog posts to Sanity} */}
			<BlogList posts={posts} />
			<OtherProjects />
			<ProjectList />
			{/* <ProjectSlider /> */}
		</Page>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts(['date', 'description', 'slug', 'title', 'coverImage', 'tags']);

	return {
		props: { posts },
	};
};

export default Home;
