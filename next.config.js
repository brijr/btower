/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true
};

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: []
	}
});
module.exports = withMDX({
	// Append the default value with md extensions
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
});
module.exports = nextConfig;
