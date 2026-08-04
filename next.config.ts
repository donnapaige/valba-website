import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/branding.html', destination: '/branding', permanent: true },
      { source: '/portal/olive-winter', destination: '/portal/olive-winter/Homepage.dc.html', permanent: false },
    ]
  },
};

export default nextConfig;
