import RSS from "rss";
import { getBlogPosts } from "@app/db/blog";

export async function GET() {
  const site_url = process.env.NODE_ENV === "production" ? "https://yunghigue.com" : "http://localhost:3001";

  const feed = new RSS({
    title: "Sab Medwinter",
    description: "Sab's blog posts!",
    site_url: site_url,
    feed_url: `${site_url}/feed.xml`,
    image_url: `${site_url}/logo.jpeg`,
    pubDate: new Date(),
    language: "en",
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  });

  let posts = await getBlogPosts();

  posts.map((post) => {
    feed.item({
      title: post.metadata.title,
      guid: `https://yunghigue.com/blog/${post.slug}`,
      url: `https://yunghigue.com/blog/${post.slug}`,
      date: post.metadata.update || post.metadata.date,
      description: post.metadata.description,
      author: "Sabrina Medwinter",
      //   categories: post.metadata.tags || [],
      //   FIXME: Post tags in rss
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
