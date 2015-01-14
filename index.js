// this merges together the tiniest pieces of helpers

var Helpers = require('./src/helpers/Helpers');
var Mixins = require('./src/mixins/Mixins');
var Env = require('./src/Env');
var initTouch = require('./src/initTouch');

require('reapp-object-assign');
initTouch();

module.exports = Object.assign(
  Helpers,
  Mixins,
  {
    Env,
  }
);