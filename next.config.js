/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "https://wyjee.github.io/my-zine";

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: !debug ? `/${repository}/` : "",
    trailingSlash: true,
    output: 'export',
    distDir: 'build',
};

module.exports = nextConfig;