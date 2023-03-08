const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote1',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './title': './components/exposedTitle.js',
          './remote1': './pages/index.js',
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
