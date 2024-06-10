import { getBlogPosts } from '@app/db/blog';

export async function GET() {
  const posts = await getBlogPosts();

  return new Response(
    JSON.stringify(posts),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }
  );
}
