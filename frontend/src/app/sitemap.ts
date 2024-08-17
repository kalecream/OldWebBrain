import { getBlogPosts } from '@app/db/blog';

export const sitemap = async () => {
	let blogs = getBlogPosts().map((post) => ({
		url: `https://sabrinamedwinter.com/blog/${post.slug}`,
		lastModified: post.metadata.update || post.metadata.date,
	}));

	let routes = ['/', '/blog', '/changelog', '/colophon', '/c25k','/now','/read','/rolodex','/services'].map((route) => ({
		url: `https://sabrinamedwinter.com${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes, ...blogs];
};

export default sitemap;
