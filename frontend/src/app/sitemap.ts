import { getBlogPosts } from '@app/db/blog';
import { PageRoutes } from '@data/routes';

export const sitemap = async () => {
	let blogs = getBlogPosts().map((post) => ({
		url: `https://sabrinamedwinter.com/blog/${post.slug}`,
		lastModified: post.metadata.update || post.metadata.date,
	}));

	PageRoutes.map((route) => ({
		url: `https://sabrinamedwinter.com${route.route}`,
		lastModified: route.date,
	}));

	return [...PageRoutes, ...blogs];
};

export default sitemap;
