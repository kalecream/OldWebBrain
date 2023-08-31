
import Page from '@containers/layout/page';
import Image from 'next/image';

import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../utils/api';
import { PostType } from '../types/post';
import Hero from '@components/hero/hero';
import { SiteBackground } from '@components/threeJS/scene';
import ImageLoader from '@utils/ImageLoader';

import ProjectList from '@components/projects/projectsList';

import '../styles/animations.module.css';
import 'animate.css';

type IndexProps = {
	posts: PostType[];
};

export const Home = ({ posts }: IndexProps): JSX.Element => {
	return (
		<Page>
			<SiteBackground />
			<Hero />
			

			{posts.length > 0 && (
				<section id="blog-posts" className="fadeIn--below index-section">
					<h2 className="section-title">Blog</h2>
					<div className="pancake section-content">
						{posts.slice(0, 3).map((post) => (
							<div key={post.slug} className="blog--article pancake-child">
								{post.coverImage && (
									<div className="image-wrapper">
										<Image
											height={0}
											width={0}
											loader={({ src }) => src}
											sizes="100vw"
											style={{ width: 'auto', height: '200px' }}
											src={post.coverImage}
											alt={post.alt ? post.alt : ''}
											className="blog--article__image"
										/>
									</div>
								)}
								<div className="blog--article__section">
									{post.date && (
										<span className="blog--article__date">{format(parseISO(post.date), 'MMMM dd, yyyy')}</span>
									)}
									<Link as={`/posts/${post.slug}`} key={post.slug} href={`/posts/[slug]`}>
										<h2 className="article__title">{post.title}</h2>
									</Link>

									<p className="blog--article__description">{post.description}</p>

									{post.tags && (
										<div className="blog--article__tags">
											{post.tags.slice(0, 2).map((tag) => (
												<Link className="tag" key={tag} href={'/tags/' + tag.replace(/\s+/g, '+')}>
													{tag}
												</Link>
											))}
											{/* create tag pages */}
										</div>
									)}
								</div>
							</div>
						))}
					</div>
					{/* TODO: Add weeklogs and tutorials */}
					{/* <CustomLink href={`/blog`}>More Posts ⟶</CustomLink> */}
				</section>
			)}

			<section style={{ width: '100%' }}>
				<h2 className="section-title">Things I've Made</h2>
				<ProjectList />
			</section>
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
