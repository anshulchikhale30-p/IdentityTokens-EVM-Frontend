const isGithubPages = process.env.DEPLOY_TARGET === "GITHUB";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  ...(isGithubPages && {
    output: "export",
    basePath: process.env.BASE_PATH || "",
    images: {
      unoptimized: true,
    },
  }),
};

module.exports = nextConfig;

