"use client";
import { Suspense, useEffect, useState } from "react";
import { getMicroLogs } from "../../hooks/useMicroLog";
import LoadingSkeleton from "../Skeleton";

interface MicroLogProps {
  _id: string;
  title?: string;
  content: string;
  imageUrl?: string;
  video?: { asset: { url: string } };
  gif?: { asset: { url: string } };
  videoUrl?: string;
  publishedAt: string;
}

export default function MicroLogList() {
  const [posts, setPosts] = useState<MicroLogProps[]>([]);

  useEffect(() => {
    getMicroLogs().then(setPosts);
  }, []);

  return (
    <div className="microlog-container prose">
      <Suspense fallback={<LoadingSkeleton/>}>
        {posts.map((post) => (
          <div key={post._id} className="microlog-post">
            {post.imageUrl && <img src={post.imageUrl} alt={post.title || ""} />}
            {post.video?.asset?.url && (
              <video controls width="100%">
                <source src={post.video.asset.url} type="video/mp4" />
              </video>
            )}
            {post.videoUrl && (
              <video width="100%" controls>
                <source src={post.videoUrl} />
              </video>
            )}
            <div className="microlog-content">
              {post.title && <h3>{post.title}</h3>}
              <p>{post.content}</p>
              <small>{new Date(post.publishedAt).toLocaleDateString()}</small>
            </div>
          </div>
        ))}
      </Suspense>
    </div>
  );
}
