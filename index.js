require('reapp-object-assign');

module.exports = {
  component: require('reapp-component'),
  batching: require('reapp-raf-batching'),
  reducer: require('reapp-reducer'),
  request: require('reapp-request'),
  routes: require('reapp-routes'),
  server: require('reapp-server'),
  webpackServer: require('reapp-server/webpack/server'),
  ui: require('reapp-ui'),
  utils: require('reapp-utils')
};