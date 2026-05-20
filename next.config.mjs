/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "night-club-z4oy.onrender.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
