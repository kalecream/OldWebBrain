import withMDX from "@next/mdx";
import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const mdxConfig = withMDX({
  extension: /\.mdx?$/,
  jsx: true,
  options: {
    remarkPlugins: [[]],
    recmaPlugins: [[]],
    jsx: true,
  },
});

/** @type {import('next').NextConfig} */
const bundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "false",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/webp"],
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
  },
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL_ENV === "production",
  },
};

// Merge MDX config with Next.js config
const config = bundleAnalyzerConfig(mdxConfig(nextConfig));

export default config;
