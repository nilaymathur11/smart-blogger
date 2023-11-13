/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['tecdn.b-cdn.net'],
    },
}

module.exports = nextConfig
