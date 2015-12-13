exports.register = function(server, options, next) {

  server.route({
     method: 'GET',
     path: '/map.js',
     handler: { file: "./views/map.js"}
  });

  server.route({
     method: 'GET',
     path: '/main.js',
     handler: { file: "./views/main.js"}
  });

  server.route({
     method: 'GET',
     path: '/utils.js',
     handler: { file: "./views/utils.js"}
  });

  return next();
};

exports.register.attributes = {
  name: 'Map'
};
