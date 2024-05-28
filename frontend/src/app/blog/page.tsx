import { BlogPosts } from "@app/components/blogroll";

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {

  return (
    <section>
      <BlogPosts/>
    </section>
  );
}
