// this merges together the tiniest pieces of helpers

var Helpers = require('./src/helpers/Helpers');
var Mixins = require('./src/mixins/Mixins');
var initTouch = require('./src/initTouch');
var Env = require('./src/Env');

require('reapp-object-assign');

module.exports = Object.assign(
  Helpers,
  Mixins,
  {
    initTouch,
    Env,
  }
);