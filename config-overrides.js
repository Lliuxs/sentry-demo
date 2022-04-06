const { override } = require('customize-cra');
// https://www.npmjs.com/package/@sentry/webpack-plugin
const SentryCliPlugin = require('@sentry/webpack-plugin');

// module.exports = override(

// )

const rewiredMap = () => (config) => {
  // config.devtool = config.mode === 'development' ? 'source-map' : false;
  // config.devtool = 'source-map';
  return config;
};

// https://github.com/getsentry/sentry-webpack-plugin
const addSentryPlugin = () => (config) => {
  config.plugins.push(
    new SentryCliPlugin({
      release: '1.0.0',
      authToken:
        '8a20897217734489852bc7330928cca3f52268cdf65448a88b67be76e7dc85f3',
      url: 'http://127.0.0.1:9000',
      org: 'shopee',
      project: 'react-demo',
      urlPrefix: '~/',
      include: './build',
      ignore: ['node_modules'],
    })
  );
  return config;
};

module.exports = {
  webpack: override(rewiredMap(), addSentryPlugin()),
  // devServer: {},
};
