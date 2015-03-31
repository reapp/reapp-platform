var Helpers = require('./src/helpers/Helpers');
var Mixins = require('./src/mixins/Mixins');
var Env = require('./src/Env');

// intall Object.assign
require('reapp-object-assign');

// export helpers, mixins, env
module.exports = Object.assign(
  Helpers,
  Mixins,
  { Env: Env }
);