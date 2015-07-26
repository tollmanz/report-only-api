module.exports = [
  {
    method: 'GET',
    path: '/reports',
    config: require('../handlers/reports')
  }
  //,
  //{
  //  method: 'GET',
  //  path: '/products/{id}',
  //  config: {
  //      handler: getProduct
  //  }
  //}
];
