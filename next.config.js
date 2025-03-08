// next.config.js
const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.module.rules.push({
        test: /__tests__\//,
        loader: 'ignore-loader',
      });
    }
    return config;
  },
};
