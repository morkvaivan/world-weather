require('babel-polyfill');
var context = require.context('./test/components', true, /\.spec\.js$/);
context.keys().forEach(context);