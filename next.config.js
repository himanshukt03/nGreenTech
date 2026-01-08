const zlib = require("zlib");

// Patch zlib.bytesRead deprecation warning by aliasing it to bytesWritten
try {
  Object.defineProperty(zlib, "bytesRead", {
    get() {
      return zlib.bytesWritten;
    },
    configurable: true,
  });
} catch (e) {
  // ignore
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;
