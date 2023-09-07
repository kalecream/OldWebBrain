import { Page } from 'frontend/src/containers/layout';
import { FullSection } from 'frontend/src/components/_basics/Basics';
import { PostType } from 'frontend/src/types/post';
import { getAllPosts } from 'frontend/src/utils/api';
import { GetStaticProps } from 'next';
import '../styles/articles.module.css';
import styled from '@emotion/styled';

type BlogProps = {
	posts: PostType[];
};

const BlogContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: center;
`;

const FormerFeaturedArticle = styled.button`
	display: flex;
	width: 500px;
	padding: 0.5rem;
	border: var(--border);
	background-color: var(--background);
	border-radius: var(--border-radius-small);

	&:hover {
		cursor: pointer;
		background-color: var(--accent);
		color: var(--background);
		border: var(--border);
	}

	& > img {
		margin: auto 5px;
		width: 100px;
		object-fit: cover;
		border-radius: var(--border-radius);
	}

	& > .former-featured-article-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;

		& > .post-date {
			font-size: 0.8rem;
			font-weight: 600;
			margin: 0.5rem 0;
			color: var(--muted);
		}

		& > h2 {
			font-size: 1.3rem;
			font-weight: 600;
			margin: 0.5rem 0;
			text-align: center;
		}

		& > p {
			font-size: 1rem;
			text-align: justify;
			opacity: 0.8;
		}
	}

	@media (max-width: 768px) {
		width: 300px;
		& > img {
			display: none;
		}
	}
`;

export const BlogPage = ({ posts }: BlogProps): JSX.Element => {
	const GoToArticle = (slug: string) => {
		console.log(slug);
	};

	return (
		<Page>
			<FullSection>
				<h2 className="section-title">Blog</h2>
				<BlogContainer className="blog-container">
					{posts.map((post) => {
						return (
							<FormerFeaturedArticle onClick={() => GoToArticle} className="former-featured-article">
								<img src={post.coverImage} />
								<div className="former-featured-article-content">
									<p className="post-date">{post.date}</p>
									<h2>{post.title}</h2>
									<p>{post.description}</p>
								</div>
							</FormerFeaturedArticle>
						);
					})}
				</BlogContainer>
			</FullSection>
		</Page>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts(['date', 'description', 'slug', 'title', 'coverImage', 'tags']);

	return {
		props: { posts }
	};
};

export default BlogPage;
