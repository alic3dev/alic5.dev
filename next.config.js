/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    qualities: [60, 10],
    remotePatterns: [new URL("https://content.alic5.dev/**")],
  },
  sassOptions: { silenceDeprecations: ["legacy-js-api"] },
  webpack(config) {
    config.module.rules.push({ test: /motd\/alic5/u, type: "asset/source" });

    return config;
  },
};
