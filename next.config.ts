import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/branding.html', destination: '/branding', permanent: true },
    ]
  },
  async rewrites() {
    return [
      { source: '/portal/olive-winter', destination: '/portal/olive-winter/Homepage.dc.html' },
    ]
  },
};

export default nextConfig;
