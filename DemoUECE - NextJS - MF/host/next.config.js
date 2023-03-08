const NextFederationPlugin = require('@module-federation/nextjs-mf');

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    remote1: `remote1@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    remote2: `remote2@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    remote3: `remote3@http://localhost:3003/remoteEntry.js`,
  };
};
module.exports = {
  webpack5: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions:{
          automaticAsyncBoundary: true
        }
      }),
    );

    return config;
  },
};
