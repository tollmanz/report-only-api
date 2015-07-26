'use strict';

var Hapi = require('hapi');
var Glue = require('glue');
var reportsRoute = require('./lib/routes/reports');
var reportsIdRoute = require('./lib/routes/reports-id');

var manifest = require('./config/manifest.json');
var options = {
  relativeTo: __dirname
};

Glue.compose(manifest, options, function (err, server) {
  server.route(reportsRoute);
  server.route(reportsIdRoute);

  // Don't start the server when testing
  if (!module.parent) {
    server.start(function (err) {});
  }

  module.exports = server;
});
