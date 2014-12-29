var React = require('react');

require('reapp-object-assign');

// this won't be necessary after React 1.0
function initTouch() {
  React.initializeTouchEvents(true);
  var InjectTapEventPlugin = require('react-tap-event-plugin');
  var isTouchDevice = 'ontouchstart' in document.documentElement;
  if (isTouchDevice)
    InjectTapEventPlugin();
}

module.exports = {
  initTouch,
  env: require('./src/env'),
  helpers: require('./src/helpers/helpers'),
  mixins: require('./src/mixins/mixins')
};