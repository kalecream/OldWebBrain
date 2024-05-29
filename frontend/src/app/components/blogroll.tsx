import Link from 'next/link';
import { getBlogPosts } from '../db/blog';
import blog from '@styles/modules/BlogSummary.module.scss';
import { useEffect, useMemo } from 'react';
// import { Suspense } from 'react';
// import ViewCounter from './view-counter';
// import { getViewsCount } from '../db/queries';

type Year = {
	date: string;
	months: Month[];
};

type Month = {
	date: string;
	name: string;
	posts: any;
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

// async function Views({ slug }: { slug: string }) {
//     let views = await getViewsCount();

//     return <ViewCounter allViews={views} slug={slug} />;
//   }

export const BlogPosts = () => {
	let posts = getBlogPosts();

    useMemo(() => {
	posts &&
		posts.forEach((post) => {
			const [yearDate, monthDate, dayDate] = post.metadata.date.split(' ')[0].split('-');

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
        
    }, [posts])

	return (
		<section>
			<h2>Blog</h2>
			{years.map((year) => (
				<ul key={year.date}>
					<li className={blog.nolist} key={year.date}>
						<ul>
							{year.months.map((month, i) => (
								<li className={blog.nolist} key={i}>
									<h2 className={blog.month}>
										<span>{month.name}</span> <span>{i === 0 && year.date}</span>
									</h2>
									<ul>
										{month.posts.map((post) => (
											<li key={post.slug} className='no-marker'>
												<Link className={blog.link} href={`/blog/${post.slug}`}>
													<div className={blog.list__section}>
														<div>
															<span className={blog.list__date}>{post.metadata.date.slice(-2)}</span>
															<h3 className={blog.list__title}>{post.metadata.title}</h3>
														</div>
														<p className={blog.list__description}>{post.metadata.description}</p>
													</div>
												</Link>
											</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					</li>
				</ul>
			))}
		</section>
	);
};
