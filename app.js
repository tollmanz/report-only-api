'use strict';

var Hapi = require('hapi');
var Glue = require('glue');
var reportsRoute = require('./lib/routes/reports');

Glue.compose(require('./config/manifest.json'), function (err, server) {
  server.route(reportsRoute);

  // Don't start the server when testing
  if (!module.parent) {
    server.start(function (err) {});
  }
});
