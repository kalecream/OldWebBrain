import { getBlogPosts } from '@app/db/blog';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://sabrinamedwinter.com/blog/${post.slug}`,
    lastModified: post.metadata.date,
  }));

  let routes = ['', '/blog', '/changelog', '/work'].map((route) => ({
    url: `https://sabrinamedwinter.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
