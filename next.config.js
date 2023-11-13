/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['tecdn.b-cdn.net'],
    },
    env: {
        SERVER_URL: process.env.SERVER_URL,
    }
}

module.exports = nextConfig
