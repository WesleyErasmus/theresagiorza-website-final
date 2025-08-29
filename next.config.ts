import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.africanstorybook.org",
      },
      {
        protocol: "https",
        hostname: "dlala602468932.wordpress.com",
      },
    ],
  },
};

export default nextConfig;
