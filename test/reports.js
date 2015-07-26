var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script()
var server = require('../app.js');

lab.experiment('Reports Endpoint', function() {
  lab.test('reports endpoints lists multiple reports', function(done) {
    var options = {
      method: 'GET',
      url: '/reports'
    };

    server.inject(options, function(response) {
      var result = response.result;

      Code.expect(response.statusCode).to.equal(200);
      Code.expect(result.data).to.be.instanceof(Array);
      Code.expect(result.data).to.have.length(2);

      Code.expect(result.meta).to.be.a.object();

      done();
    });
  });
});
