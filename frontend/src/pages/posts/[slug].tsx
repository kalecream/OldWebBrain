import Page from '@containers/layout/BlogPage';
import Head from 'next/head';
import { Key, useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { remarkCodeHike } from '@code-hike/mdx';

import path from 'path';
import { PostType } from '@pages/blog';
import { postFilePaths, POSTS_PATH } from '@utils/mdxUtils';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { useHeadsObserver } from '@hooks/useObserver';
import getReadTime from '@utils/read-time';
import { ReactNode } from '@mdx-js/react/lib';
import { DisqusComments, CustomComponents } from '@components/blog';
import article from '@components/blog/articles.module.scss';

type PostPageProps = {
	source: MDXRemoteSerializeResult;
	frontMatter: PostType;
};

type HeadingProps = {
	id: Key | any;
	text: ReactNode;
	level: string;
};

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
	const [headings, setHeadings] = useState<HeadingProps[]>([]);
	// Above should be heading props
	const { activeId } = useHeadsObserver();

	useEffect(() => {
		const headings = document.querySelectorAll('h2, h3');
		const headingList = Array.from(headings).map((heading) => ({
			id: heading.id,
			text: heading.textContent,
			level: heading.tagName,
		}));
		setHeadings(headingList);
	}, []);

	return (
		<Page>
			<article>
				<Head>
					<meta name="twitter:title" content={`SM | ${frontMatter.title}`} />
					<meta name="twitter:description" content={frontMatter.description} />
					<meta name="og:description" content={frontMatter.description} />
					<meta name="twitter:image" content={frontMatter.image} />
					<meta name="og:image" content={frontMatter.image} />
					<meta name="og:type" content="article" />
					<meta name="twitter:site" content="@SabMedwinter" />
					<meta name="og:site_name" content="Sabrina Medwinter" />
				</Head>
				<div className="article--header">
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

				<aside className={article['table-of-contents']}>
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
											behavior: 'smooth',
										});
									}}
									style={{
										fontWeight: activeId === heading.id ? 'bold' : 'normal',
									}}
								>
									{heading.text}
								</li>
							);
						})}
					</ul>
				</aside>
				<div className="prose">
					<MDXRemote {...source} components={CustomComponents} />
				</div>
				<div className={article.comments}>
					<DisqusComments postId={frontMatter.id} title={frontMatter.title} slug={frontMatter.slug} />
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
			remarkPlugins: [
				[
					remarkCodeHike,
					{
						autoImport: false,
						// @todo make a custom theme
						theme: 'github-dark-dimmed',
						lineNumbers: true,
						showCopyButton: true,
						autoLink: true,
						staticMediaQuery: 'not screen, (max-width: 768px)',
					},
				],
			],
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						properties: {
							className: ['anchor'],
						},
					},
				],
			],
			format: 'mdx',
			useDynamicImport: true,
		},
		// made available to the arguments of any custom mdx component
		scope: data,
	});
	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
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
		fallback: false,
	};
};

export default PostPage;
