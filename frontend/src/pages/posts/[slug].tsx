import Page from '@containers/layout/page';
import { useEffect, useState } from 'react';
import { CustomComponents } from '@components/blog/customElements';

import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import Image from 'next/image';
import path from 'path';
import { PostType } from '@pages/blog';
import { postFilePaths, POSTS_PATH } from '@utils/mdxUtils';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import styled from '@emotion/styled';

import { useHeadsObserver } from '@hooks/useObserver';
import getReadTime from '@utils/read-time';

type PostPageProps = {
	source: MDXRemoteSerializeResult;
	frontMatter: PostType;
};

const TableOfContents = styled.aside`
	padding: 1rem;
	border-radius: 15px;

	align-self: flex-start;

	& ul li {
		margin-bottom: 0.5rem;
		font-weight: 300;
		padding: 0;
	}

	& ul li:hover {
		color: var(--primary);
	}

	& ul li::marker {
		color: var(--primary);
	}

	@media (max-width: 768px) {
		display: none;
	}

	@media (min-width: 1024px) {
		width: 360px;
		position: fixed;
		left: 0;
		top: 40%;
		padding: 0 2rem;
	}
`;

const getClassName = (level: string) => {
	switch (level) {
		case 'H2':
			return 'head2';
		case 'H3':
			return 'head3';
		default:
			return 'head2';
	}
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
	const [headings, setHeadings] = useState<any[]>([]);
	const { activeId } = useHeadsObserver();

	useEffect(() => {
		const headings = document.querySelectorAll('h2, h3');
		const headingList = Array.from(headings).map((heading) => ({
			id: heading.id,
			text: heading.textContent,
			level: heading.tagName
		}));
		setHeadings(headingList);
	}, []);

	return (
		<Page >
			<article>
				<div className="article--header">
					<div className="article--image">
						<Image
							height={0}
							width={0}
							loader={({ src }) => src}
							sizes="100vw"
							style={{ width: '400px', height: 'auto' }}
							src={frontMatter.coverImage}
							alt={frontMatter.alt ? frontMatter.alt : ''}
							className="blog--article__image"
						/>
						{/* <img src={frontMatter.coverImage} alt="" width={400} /> */}
					</div>

					<div className="article--information">
						<h1 className="article--heading">{frontMatter.title}</h1>

						<p className="article--description">{frontMatter.description}</p>

						<div className="article--details">
							{frontMatter.date && (
								<p className="article--created">
									{' '}
									{format(parseISO(frontMatter.date ? frontMatter.date : ''), 'MMMM dd, yyyy')}
								</p>
							)}
							<p className="article--readtime">{getReadTime(source.compiledSource)} min read</p>
						</div>
					</div>
				</div>

				<TableOfContents>
					<ul>
						{headings.map((heading) => {
							const activeHeader = document.querySelector(`#${heading.id}`) ?? headings[0].id;
							return (
								<li
									key={heading.id}
									className={getClassName(heading.level)}
									onClick={(e) => {
										e.preventDefault();
										activeHeader.scrollIntoView({
											behavior: 'smooth'
										});
									}}
									style={{
										fontWeight: activeId === heading.id ? 'bold' : 'normal'
									}}
								>
									{heading.text}
								</li>
							);
						})}
					</ul>
				</TableOfContents>
				<div className="prose dark:prose-dark">
					<MDXRemote {...source} components={CustomComponents} />
				</div>
			</article>
		</Page>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
	const source = fs.readFileSync(postFilePath);

	const { content, data } = matter(source);

	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						properties: {
							className: ['anchor']
						}
					}
				]
			],
			format: 'mdx'
		},
		scope: data
	});
	return {
		props: {
			source: mdxSource,
			frontMatter: data
		}
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = postFilePaths
		// Remove file extensions for page paths
		.map((path) => path.replace(/\.mdx?$/, ''))
		// Map the path into the static paths object required by Next.js
		.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false
	};
};

export default PostPage;
