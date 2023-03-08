const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote2',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './remote2': './pages/index.js',
        },
        shared: {},
        extraOptions:{
          automaticAsyncBoundary: true
        }
      }),
    );

    return config;
  },
};
