import { getBlogPosts } from "@app/db/blog";
import { PageRoutes } from "@data/routes";

export const sitemap = async () => {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://sabrinamedwinter.com/blog/${post.slug}`,
    lastModified: post.metadata.update || post.metadata.date,
    priority: 0.5,
  }));

  let routes = PageRoutes.map((r) => ({
    url: `https://sabrinamedwinter.com${r.route}`,
    lastModified: r.date.toISOString(),
    priority: r.priority,
  }));

  return [...routes, ...blogs];
};

export default sitemap;
