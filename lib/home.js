exports.register = function(server, options, next) {

  server.route({
     method: 'GET',
     path: '/',
     handler: { file: "./views/index.html"}
  });

  server.route({
     method: 'GET',
     path: '/index.js',
     handler: { file: "./views/index.js"}
  });

  return next();
};

exports.register.attributes = {
  name: 'Home'
};
