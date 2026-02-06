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
  experimental: {
    optimizePackageImports: ["react-icons/fa6","react", "next", "@react-three/fiber"],
  },
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
    // eslint-disable-next-line no-undef
    ignoreBuildErrors: process.env.VERCEL_ENV === "production",
  }
};

const config = mdxConfig(nextConfig);

export default config;
