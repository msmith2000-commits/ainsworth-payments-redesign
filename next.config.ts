import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this project so Next doesn't walk up to a
  // parent lockfile (Mark's home directory has one for unrelated work).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
