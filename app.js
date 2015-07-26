'use strict';

var Hapi = require('hapi');
var Glue = require('glue');
var reportsRoute = require('./lib/routes/reports');
var reportsIdRoute = require('./lib/routes/reports-id');

Glue.compose(require('./config/manifest.json'), function (err, server) {
  server.route(reportsRoute);
  server.route(reportsIdRoute);

  // Don't start the server when testing
  if (!module.parent) {
    server.start(function (err) {});
  }

  module.exports = server;
});
