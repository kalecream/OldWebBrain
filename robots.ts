import { MetadataRoute } from "next";

export const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: "/private/",
      },
      {
        userAgent: [
          "AdsBot-Google",
          "Amazonbot",
          "Applebot",
          "CCBot",
          "GPTBot",
          "ChatGPT-User",
          "Anthropic-ai",
          "ClaudeBot",
          "Claude-Web",
          "cohere-ai",
          "DataForSeoBot",
          "Omgilibot",
          "Omgili",
          "FacebookBot",
          "FriendlyCrawler",
          " Diffbot",
          " Bytespider",
          "PerplexityBot",
          "ImagesiftBot",
          "cohere-ai",
          "img2dataset",
          "ImagesiftBot",
          "YouBot",
          "Seekr",
          "scoop.it",
        ],
        disallow: ["/"],
      },
    ],
    sitemap: "https://yunghigue.com/sitemap.xml",
    host: "https://yunghigue.com",
  };
};

export default robots;
