import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/branding.html', destination: '/branding', permanent: true },
    ]
  },
};

export default nextConfig;
