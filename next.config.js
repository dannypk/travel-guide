const withLess = require('@zeit/next-less');

module.exports = withLess({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  }
});