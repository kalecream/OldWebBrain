import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const mdxConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[]],
    recmaPlugins: [[]],
    jsx: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "source.unsplash.com" },
      { hostname: "i.imgur.com" },
      { hostname: "imgur.com" },
      { hostname: "media1.giphy.com" },
    ],
  },
  sassOptions: {
    includePaths: ["src/app/styles"],
  },
  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === "production",
  }
};

const config = mdxConfig(nextConfig);

export default config;
