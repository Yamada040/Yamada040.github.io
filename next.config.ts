import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

};
// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // ビルド中にESLintチェックを無効化
  },
};


export default nextConfig;
