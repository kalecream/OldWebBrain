import { GetStaticProps } from 'next';
import { getAllPosts } from '@utils/api';
import { PostType } from './blog';

import Page from '@containers/layout/page';

import Hero from '@components/hero/hero';
import { SiteBackground } from '@components/threeJS/scene';
import ProjectList from '@components/projects/projectsList';
import BlogList from './blog';

export const Home = ({ posts }: PostType ): JSX.Element => {
	return (
		<Page>
			<SiteBackground />
			<Hero />
			<BlogList posts={posts}  />
			<ProjectList />
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
