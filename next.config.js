/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/du-prd/books/images/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
