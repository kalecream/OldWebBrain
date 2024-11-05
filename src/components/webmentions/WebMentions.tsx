"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type WebMention = {
  author: {
    name: string;
    url: string;
    photo: string;
  };
  content: {
    html: string;
    text: string;
  };
  published: string;
  url: string;
  "wm-id": number;
  "wm-source": string;
  "wm-target": string;
  "wm-property": string;
  "wm-received": string;
  "wm-private": boolean;
};

type WebMentionsProps = {
  targetUrl: string;
};

const WebMentions: React.FC<WebMentionsProps> = ({ targetUrl }) => {
  const [webMentions, setWebMentions] = useState<WebMention[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWebMentions = async () => {
      try {
        const response = await fetch(
          `https://webmention.io/api/mentions.jf2?token=TMnh232DKvTeXEHFalVuig&target=${encodeURIComponent(targetUrl)}`,
        );
        if (!response.ok) {
          throw new Error(`Error fetching web mentions: ${response.statusText}`);
        }
        const data = await response.json();
        setWebMentions(data.children || []);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWebMentions();
  }, [targetUrl]);

  if (error) {
    return <p>Error loading web mentions: {error}</p>;
  }

  if (webMentions.length === 0) {
    return (
      <p style={{ margin: "3rem auto", justifyContent: "center", display: "flex", flexDirection: "column" }}>
        <b>No web mentions found.</b>
        <br />
        <Link className="text-center" href="https://webmention.io/www.sabrinamedwinter.com/webmention">
          Mention this post
        </Link>
      </p>
    );
  }

  const mentionCount = webMentions.length;

  return (
    <div>
      <Link href="https://webmention.io/www.sabrinamedwinter.com/webmention">Mention this post</Link>

      <h2>({mentionCount}) Web Mentions</h2>
      <ul>
        {webMentions.map((mention) => (
          <li key={mention["wm-id"]}>
            <Link href={mention.author.url} target="_blank" rel="noopener noreferrer">
              <img src={mention.author.photo} alt={mention.author.name} width="24" height="24" />
              <b>{mention.author.name}</b>
            </Link>
            <p dangerouslySetInnerHTML={{ __html: mention.content.html }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebMentions;
