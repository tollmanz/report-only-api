var Joi = require('joi');

module.exports = {
  handler: function(request, reply) {
    reply({
      data: [
        {
          date: "2015-07-17T09:31:56Z",
          tags: [
            "style"
          ],
          cspReport: {
            documentUri: "http://example.com/signup.html",
            referrer: "",
            blockedUri: "http://example.com/css/style.css",
            violatedDirective: "style-src cdn.example.com",
            originalPolicy: "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports"
          }
        },
        {
          date: "2015-07-17T09:31:56Z",
          tags: [
            "style"
          ],
          cspReport: {
            documentUri: "http://example.com/signup.html",
            referrer: "",
            blockedUri: "http://example.com/css/style.css",
            violatedDirective: "style-src cdn.example.com",
            originalPolicy: "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports"
          }
        }
      ],
      meta: {}
    });
  },
  validate: {
    query: {
      orderby: Joi.any().valid(['referer', 'referrer', 'date']).default('date'),
      order: Joi.any().valid(['asc', 'desc']).default('desc'),
      limit: Joi.number().integer().min(1).max(1000).default(10),
      offset: Joi.number().integer().min(0).default(0)
    }
  }
}
