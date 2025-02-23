/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    // Add this to ensure proper asset handling
    poweredByHeader: false,
    reactStrictMode: true,
}

export default nextConfig;
