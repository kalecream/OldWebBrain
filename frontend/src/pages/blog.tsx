import { getAllPosts } from '@utils/api';
import { GetStaticProps } from 'next';
import { Page } from '@containers/layout';
import Link from 'next/link';
import styles from '@components/blog/articles.module.scss';
import { useMemo } from 'react';
import { LatestProject } from '@components/projects';

export type PostType = {
	[x: string]: any;
	date?: string;
	description?: string;
	image?: string;
	slug?: string;
	title?: string;
};

type Year = {
	date: string;
	months: Month[];
};

type Month = {
	date: string;
	name: string;
	posts: PostType[];
};

let years: Year[] = [];
const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const BlogPage = ({ posts }: PostType): JSX.Element => {
	useMemo(() => {
		const removeDupicates = (data) => {
			return data.filter((value, i) => data.indexOf(value) === i);
		};

		posts.forEach((post) => {
			const [yearDate, monthDate, dayDate] = post.date.split(' ')[0].split('-');

			let year: Year | undefined = years.find((year) => year.date === yearDate);
			if (!year) {
				year = {
					date: yearDate,
					months: [],
				};
				years.push(year);
			}

			let month = year.months.find((month) => month.date === monthDate);
			if (!month) {
				const monthIndex = parseInt(monthDate) - 1;
				const monthName = monthNames[monthIndex];
				month = {
					date: monthDate,
					name: monthName,
					posts: [],
				};
				year.months.push(month);
			}

			month.posts.push({
				...post,
				date: dayDate,
			});
		});

		years
			.sort((a, b) => parseInt(b.date) - parseInt(a.date))
			.forEach((year) => {
				year.months
					.sort((a, b) => parseInt(b.date) - parseInt(a.date))
					.forEach((month) => {
						month.posts.sort((a, b) => parseInt(b.date) - parseInt(a.date));
					});
			});

		years.forEach((year) => {
			year.months.forEach((month) => {
				year.months.forEach((month) => {
					removeDupicates(month.posts);
				});
			});
		});
	}, [posts]);

	return (
		<Page>
			<section className={styles.section}>
				<h2 className="section-title">Blog</h2>
				
				{years.map((year) => (
						<ul key={year.date}>
						<li className={styles.nolist} key={year.date}>
							{year.months.map((month, i) => (
								<ul key={i}>
									<li className={styles.nolist}>
										<h2 className={styles.month}>
											<span>{month.name}</span> <span>{i === 0 && year.date}</span>
										</h2>
									</li>
									{month.posts.map((post,i) => (
										<Link className={styles.link} href={`/posts/${post.slug}`} key={i}>
											<div className={styles.list__section}>
												<div>
													<span className={styles.list__date}>{post.date}</span>
													<h3 className={styles.list__title}>{post.title}</h3>
												</div>
												<p className={styles.list__description}>{post.description}</p>
											</div>
										</Link>
									))}
								</ul>
							))}
						</li>
						</ul>
					))}
			</section>
		</Page>
	);
};

export const BlogList = ({ posts }: PostType): JSX.Element => {
	return (
		<>
			{posts.length > 0 && (
				<section id="blog">
					<div className="pancake">
						<h2 className="section-title">Latest Posts</h2>
						<div className="pancake section-content">
							{posts.slice(0, 4).map(
								(post) =>
									!post.tags.includes('log') && (
										<Link
											as={`/posts/${post.slug}`}
											key={post.slug}
											href={`/posts/[slug]`}
											className={`${styles.article} pancake-child`}
										>
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
												<h2 className={styles.article__title}>{post.title}</h2>

												<p className={styles.article__description}>{post.description}</p>

												{/* {post.tags && (
										<div className={styles.article__tags}>
											{post.tags.slice(0, 2).map((tag) => (
												<Link className={styles.article__tag} key={tag} href={'/tags/' + tag.replace(/\s+/g, '+')}>
													{tag}
												</Link>
											))}
										</div>
									)} */}
											</div>
										</Link>
									),
							)}
						</div>
						{posts.length > 4 && <Link href={`/blog`}>More Posts ⟶</Link>}
					</div>
					<div>
						<h2 className="section-title">Latest Creation</h2>
						<LatestProject />
					</div>
				</section>
			)}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts(['date', 'description', 'slug', 'title', 'coverImage', 'tags']);

	return {
		props: { posts },
	};
};

export default BlogPage;
