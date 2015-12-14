exports.register = function(server, options, next) {

  server.route({
     method: 'GET',
     path: '/tests',
     handler: { file: "./tests/frontEndTest.html"}
  });

  server.route({
     method: 'GET',
     path: '/index.html',
     handler: { file: "./views/index.html"}
  });

  return next();
};

exports.register.attributes = {
  name: 'Tests'
};
