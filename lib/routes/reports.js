var reportsHandler = require('../handlers/reports');

module.exports = [{
  method: 'GET',
  path: '/reports',
  config: reportsHandler.get
},
{
  method: 'POST',
  path: '/reports',
  config: reportsHandler.post
}];
