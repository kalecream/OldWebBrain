import { getAllPosts } from '@utils/api';
import { GetStaticProps } from 'next';
import { Page } from '@containers/layout';
import Link from 'next/link';
import { useEffect } from 'react';
// import { LatestProject } from '@components/projects';
import blog from '@styles/modules/BlogSummary.module.scss'

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
	useEffect(() => {

		posts && posts.forEach((post) => {
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

	}, [posts]);

	return (
		<Page>
			<section className={blog.section}>
				<h2 className="section-title">Blog</h2>
				
				{ years.map((year) => (
						<ul key={year.date}>
						<li className={blog.nolist} key={year.date}>
							{year.months.map((month, i) => (
								<ul key={i}>
									<li className={blog.nolist}>
										<h2 className={blog.month}>
											<span>{month.name}</span> <span>{i === 0 && year.date}</span>
										</h2>
									</li>
									{month.posts.map((post,i) => (
										<Link className={blog.link} href={`/posts/${post.slug}`} key={i}>
											<div className={blog.list__section}>
												<div>
													<span className={blog.list__date}>{post.date}</span>
													<h3 className={blog.list__title}>{post.title}</h3>
												</div>
												<p className={blog.list__description}>{post.description}</p>
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
											className={blog.article__image}
										/>
									</div>
								)} */}

								{/* {post.tags && (
										<div className={blog.article__tags}>
											{post.tags.slice(0, 2).map((tag) => (
												<Link className={blog.article__tag} key={tag} href={'/tags/' + tag.replace(/\s+/g, '+')}>
													{tag}
												</Link>
											))}
										</div>
									)} */}

export const BlogList = ({ posts }: PostType): JSX.Element => {
	useEffect(() => {
	
		posts && posts.forEach((post) => {
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


	}, [posts]);
	
	return (
		<>
			{posts && posts.length > 0 && (
				<section id="blog">
					<div className="pancake">
						<div className="pancake section-content">
						{years.map((year) => (
						<ul key={year.date}>
						<li className={blog.nolist} key={year.date}>
							{year.months.map((month, i) => (
								<ul key={i}>
									<li className={blog.nolist}>
										<h2 className={blog.month}>
											<span>{month.name}</span> <span>{i === 0 && year.date}</span>
										</h2>
									</li>
									{month.posts.map((post,i) => (
										<Link className={blog.link} href={`/posts/${post.slug}`} key={i}>
											<div className={blog.list__section}>
												<div>
													<span className={blog.list__date}>{post.date}</span>
													<h3 className={blog.list__title}>{post.title}</h3>
												</div>
												<p className={blog.list__description}>{post.description}</p>
											</div>
										</Link>
									))}
								</ul>
							))}
						</li>
						</ul>
					))}
						</div>
						{posts.length > 4 && <Link href={`/blog`}>More Posts ⟶</Link>}
					</div>
					{/* <div>
						<h2 className="section-title">Latest Creation</h2>
						<LatestProject />
					</div> */}
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
