import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: {
    default: {
      stale: 60 * 60,
      revalidate: 3 * 60 * 60,
    },
  },
};

export default nextConfig;
