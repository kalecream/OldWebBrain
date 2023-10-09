import { getAllPosts } from '@utils/api';
import { GetStaticProps } from 'next';
import { Page } from '@containers/layout';
import Link from 'next/link';
import Image from 'next/image';
// import { ImageLoader } from '@utils/ImageLoader';
// import { format, parseISO } from 'date-fns';
import styles from '@components/blog/articles.module.scss';
import { format, parseISO } from 'date-fns';

export type PostType = {
	[x: string]: any;
	date?: string;
	description?: string;
	image?: string;
	slug?: string;
	title?: string;
};

export const BlogPage = ({ posts }: PostType): JSX.Element => {

	return (
		<Page>
			<section>
				<h2 className='section-title'>Blog</h2>
				<div className={ styles.container}>
					{posts.map((post) => {
						return (
							<Link className={styles.article__featured} href={post.slug} >
								<img src={post.coverImage} />
								<div className='former-featured-article-content'>
									<p className='post-date'>{post.date}</p>
									<h2>{post.title}</h2>
									<p>{post.description}</p>
								</div>
							</Link>
						);
					})}
				</div>
			</section>
		</Page>
	);
};

export const BlogList = ({ posts }: PostType ): JSX.Element => {
	return (
		<>
			{posts.length > 0 && (
				<section id='blog' className='fadeIn__below'>
					<h2 className='section-title'>Blog</h2>
					<div className='pancake section-content'>
						{posts.slice(0, 8).map((post) => (
							<Link as={`/posts/${post.slug}`} key={post.slug} href={`/posts/[slug]`} className={`${styles.article} pancake-child`}>
								{/* {post.coverImage && (
									<div className={'image__wrapper'}>
										<Image
											height={0}
											width={0}
											loader={({ src }) => src}
											sizes='100vw'
											style={{ width: 'auto', height: '100px' }}
											src={post.coverImage}
											alt={post.alt ? post.alt : ''}
											className={styles.article__image}
										/>
									</div>
								)} */}
								<div className={styles.article__section}>
									{post.date && (
										<span className={styles.article__date}>{format(parseISO(post.date), 'MMMM dd, yyyy')}</span>
									)}
									<h2 className={styles.article__title}>{post.title}</h2>

									<p className={styles.article__description}>{post.description}</p>

									{post.tags && (
										<div className={styles.article__tags}>
											{post.tags.slice(0, 2).map((tag) => (
												<Link className={styles.article__tag} key={tag} href={'/tags/' + tag.replace(/\s+/g, '+')}>
													{tag}
												</Link>
											))}
										</div>
									)}
								</div>
							</Link>
						))}
					</div>
					{/* TODO: Add weeklogs and tutorials */}
					{/* <CustomLink href={`/blog`}>More Posts ⟶</CustomLink> */}
				</section>
			)}
		</>
	)
};

export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts(['date', 'description', 'slug', 'title', 'coverImage', 'tags']);

	return {
		props: { posts }
	};
};

export default BlogPage;
