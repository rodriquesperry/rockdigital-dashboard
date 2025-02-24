/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'rockdigital.agency',
				pathname: '/**',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				pathname: '/**',
			},
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'rockdigital-v2.vercel.app',
				pathname: '/**',
			},
		],
	},
	eslint: {
		// Disables ESLint during builds
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
