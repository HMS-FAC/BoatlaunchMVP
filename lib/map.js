exports.register = function(server, options, next) {

  server.route({
     method: 'GET',
     path: '/map.js',
     handler: { file: "./views/map.js"}
  });

  server.route({
     method: 'GET',
     path: '/util.js',
     handler: { file: "./views/util.js"}
  });

  return next();
};

exports.register.attributes = {
  name: 'Map'
};
