/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "https://wyjee.github.io/my-zine-trailer";

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: !debug ? `/${repository}/` : "",
    trailingSlash: true,
    output: 'export',
    assetPrefix: debug? undefined : "https://wyjee.github.io/my-zine-trailer",
    distDir: 'build',
};

module.exports = nextConfig;