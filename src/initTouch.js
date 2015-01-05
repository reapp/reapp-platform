// this won't be necessary after React 1.0

var React = require('react');
var TapEventPlugin = require('react-tap-event-plugin');

module.exports = function initTouch() {
  var isTouchDevice = 'ontouchstart' in document.documentElement;

  React.initializeTouchEvents(true);

  if (isTouchDevice)
    TapEventPlugin();
};