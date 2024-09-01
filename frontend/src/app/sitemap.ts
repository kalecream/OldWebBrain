import { getBlogPosts } from '@app/db/blog';
import { PageRoutes } from '@data/routes';

export const sitemap = async () => {
	let blogs = getBlogPosts().map((post) => ({
		url: `https://sabrinamedwinter.com/blog/${post.slug}`,
		lastModified: post.metadata.update || post.metadata.date,
		priority: 0.5,
	}));

	console.log(PageRoutes)

	let routes = PageRoutes.map((r) => ({
		url: `https://sabrinamedwinter.com${r.route}`,
		lastModified: r.date,
		priority: r.priority
		
	}));

	console.log(PageRoutes)

	return [...routes, ...blogs];
};

export default sitemap;
