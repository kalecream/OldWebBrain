import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { CustomMDX } from '../../components/mdx';
// import { getViewsCount } from '../../db/queries';
import { getBlogPosts } from '../../db/blog';
// import ViewCounter from '../view-counter';
// import { increment } from '../../db/actions';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
	let post = getBlogPosts().find((post) => post.slug === params.slug);
	// if (!post) {
	//   return;
	// }

	let { title, date: publishedTime, summary: description, image, tags } = post.metadata;
	let ogImage = image ? `https://sabrinamedwinter.com${image}` : `https://sabrinamedwinter.com/og?title=${title}`;

	return {
		title,
		description,
		keywords: tags,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://sabrinamedwinter.com/blog/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

const formatDate = (date: string) => {
	noStore();
	let currentDate = new Date().getTime();
	if (!date.includes('T')) {
		date = `${date}T00:00:00`;
	}
	let targetDate = new Date(date).getTime();
	let timeDifference = Math.abs(currentDate - targetDate);
	let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

	let fullDate = new Date(date).toLocaleString('en-us', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});

	if (daysAgo < 1) {
		return 'Today';
	} else if (daysAgo < 7) {
		return `${fullDate} (${daysAgo}d ago)`;
	} else if (daysAgo < 30) {
		const weeksAgo = Math.floor(daysAgo / 7);
		return `${fullDate} (${weeksAgo}w ago)`;
	} else if (daysAgo < 365) {
		const monthsAgo = Math.floor(daysAgo / 30);
		return `${fullDate} (${monthsAgo}mo ago)`;
	} else {
		const yearsAgo = Math.floor(daysAgo / 365);
		return `${fullDate} (${yearsAgo}y ago)`;
	}
};

export default function Blog({ params }) {
	let post = getBlogPosts().find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	return (
		<section>
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished: post.metadata.date,
						dateModified: post.metadata.update,
						description: post.metadata.description,
						image: post.metadata.image
							? `https://sabrinamedwinter.com${post.metadata.image}`
							: `https://sabrinamedwinter.com/og?title=${post.metadata.title}`,
						url: `https://sabrinamedwinter.com/blog/${post.slug}`,
						author: {
							'@type': 'Person',
							name: 'Sabrina Medwinter',
						},
					}),
				}}
			/>
			<div className="info">
				<h1 className="title">{post.metadata.title}</h1>
				{/* <h2 className='text-center'>
					<i >{post.metadata.description}</i>
				</h2> */}
				<Suspense fallback={<p className="h-5" />}>
					<p className='text-center'>{formatDate(post.metadata.date)}</p>
				</Suspense>
				<br/>
			</div>
			<article>
				<CustomMDX source={post.content} />
				<div className="flex my-1">
					<Link href={'/blog'}><p>Back to Blog</p></Link>
				</div>
			</article>
		</section>
	);
}

// let incrementViews = cache(increment);

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();
//   incrementViews(slug);
//   return <ViewCounter allViews={views} slug={slug} />;
// }
