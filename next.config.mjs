/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        pathname: "/**",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        pathname: "/**",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        pathname: "/**",
        hostname: "tmpfiles.nohat.cc" ,
      },
    ],
  },
};

export default nextConfig;
