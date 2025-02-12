import type { NextConfig } from "next";

const DOMAIN_DEV = "silver-train-rxrgrxxx6r92vpq-3000.app.github.dev"

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [DOMAIN_DEV, "localhost:3000"]
    }
  }
};

export default nextConfig;
