exports.register = function(server, options, next) {

  server.route({
     method: 'GET',
     path: '/map.js',
     handler: { file: "./views/map.js"}
  });

  return next();
};

exports.register.attributes = {
  name: 'Map'
};
