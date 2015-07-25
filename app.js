'use strict';

var Hapi = require('hapi');
var Glue = require('glue');

Glue.compose(require('./config/manifest.json'), function (err, server) {
  server.start(function (err) {});
});
