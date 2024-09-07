/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	jsx: true,
	options: {
		remarkPlugins: [[]],
		recmaPlugins: [],
	},
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure pageExtensions to include md and mdx
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	// Optionally, add any other Next.js config below
	reactStrictMode: true,
	swcMinify: true,
	images: {
		// path: '/img/',
		formats: ['image/webp'],
		remotePatterns: [
			{ hostname: 'cdn.sanity.io' },
			{ hostname: 'source.unsplash.com' },
			{ hostname: 'i.imgur.com' },
			{ hostname: 'imgur.com' },
		],
	},
	sassOptions: {
		includePaths: ['src/app/styles'],
	},
	typescript: {
		// Set this to false if you want production builds to abort if there's type errors
		ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
	},
	eslint: {
		/// Set this to false if you want production builds to abort if there's lint errors
		ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
	},
};

// Merge MDX config with Next.js config
module.exports = withBundleAnalyzer(withMDX(nextConfig));
