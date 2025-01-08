import { BlogPosts } from "@app/components/BlogPosts";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts and logs",
};

export default function BlogPage() {
  return (
    <>
      <BlogPosts />
    </>
  );
}
