const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: [],
    path: '/_next/image',
    loader: 'default',
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(js|tsx)$/,
      use: [
        {
          loader: "linaria/loader",
          options: {
            sourceMap: process.env.NODE_ENV !== "production",
          },
        },
      ],
    });

    return config;
  },
});
