import type { NextConfig } from 'next';

export const ALLOWED_DOMAINS = ['images.unsplash.com', 'img.icons8.com'];

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ALLOWED_DOMAINS,
    },
};

export default nextConfig;
