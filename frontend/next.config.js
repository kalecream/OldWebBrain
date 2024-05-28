// const {
// 	remarkCodeHike,
//   } = require("@code-hike/mdx")

/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [
			[
				// remarkCodeHike,
				// {
				// 	autoImport: false,
				// 	// @todo make a custom theme
				// 	theme: 'github-dark-dimmed',
				// 	lineNumbers: true,
				// 	showCopyButton: true,
				// 	autoLink: true,
				// 	staticMediaQuery: 'not screen, (max-width: 768px)',
				// },
			],
		],
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
		path: '/img/',
		formats: ['image/webp'],
		remotePatterns: [{ hostname: 'cdn.sanity.io' }, { hostname: 'source.unsplash.com' }],
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
