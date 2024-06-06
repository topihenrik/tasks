/** @type {import('next').NextConfig} */
const nextConfig = {
    // transpilePackages: ['lucide-react'],
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config;
    }
};

export default nextConfig;
