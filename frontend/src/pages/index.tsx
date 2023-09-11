
import Page from '@containers/layout/page';
import Image from 'next/image';
// import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@utils/api';
import { PostType } from './blog';
import Hero from '@components/hero/hero';
import { SiteBackground } from '@components/threeJS/scene';
// import { ImageLoader } from '@utils/ImageLoader';
import ProjectList from '@components/projects/projectsList';
import Head from 'next/head';

type IndexProps = {
	posts: PostType[];
};

export const Home = ({ posts }: IndexProps): JSX.Element => {
	return (
		<Page>
		<Head>
		<title>Sabrina Medwinter</title>
				<meta property="og:title" content="Sabrina Medwinter" />
		<meta name="description" content="Unlocking the digital realm with a fusion of Jamaican web development prowess and captivating 3D artistry." />
		<meta property="og:description" content="Unlocking the digital realm with a fusion of Jamaican web development prowess and captivating 3D artistry." />
		<meta property="og:url" content="https://www.sabrinamedwinter.com"/>
				<meta name="og:site_name" content="Sabrina Medwinter" />
		<meta name="og:image" content={'@assets/opengraph/thumbnail.png'} />
		<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SabMedwinter" />
		<meta
					name="keywords"
					content="Software Engineer, Web Developer, Frontend Developer, Creative Developer, React Developer, Filipino Developer, 3D Develper"
				/>
					<meta name="robots" content="index,follow" />
		</Head>
			<SiteBackground />
			<Hero />
	
			{posts.length > 0 && (
				<section id="blog" className="fadeIn--below index-section">
					<h2 className="section-title">Blog</h2>
					<div className="pancake section-content">
						{posts.slice(0, 8).map((post) => (
							<div key={post.slug} className="blog__article pancake-child  glassmorphic">
								{post.coverImage && (
									<div className="image-wrapper">
										<Image
											height={0}
											width={0}
											loader={({ src }) => src}
											sizes="100vw"
											style={{ width: 'auto', height: '100px' }}
											src={post.coverImage}
											alt={post.alt ? post.alt : ''}
											className="blog--article__image"
										/>
									</div>
								)}
								<div className="blog--article__section">
									{/* {post.date && (
										<span className="blog--article__date">{format(parseISO(post.date), 'MMMM dd, yyyy')}</span>
									)} */}
									<Link as={`/posts/${post.slug}`} key={post.slug} href={`/posts/[slug]`}>
										<h2 className="article__title">{post.title}</h2>
									</Link>

									<p className="article__description">{post.description}</p>

									{/* {post.tags && (
										<div className="article__tags">
											{post.tags.slice(0, 2).map((tag) => (
												<Link className="tag" key={tag} href={'/tags/' + tag.replace(/\s+/g, '+')}>
													{tag}
												</Link>
											))}
										</div>
									)} */}
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
