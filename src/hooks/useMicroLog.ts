import { groq } from 'next-sanity'; // Install `npm install groq`
import { client } from '../sanity/lib/client';

const query = groq`
  *[_type == "microlog"] | order(publishedAt desc) {
    _id,
    title,
    content,
    "imageUrl": image.asset->url,
    "videoUrl": video.asset->url,
    videoUrl,
    publishedAt
  }
`;

export async function getMicroLogs() {
  return await client.fetch(query);
}
