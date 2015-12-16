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



  server.route({
     method: 'GET',
     path: '/static/bootstrap-switch.css',
     handler: { file: "./views/bootstrap-switch.css"}
  });

  server.route({
     method: 'GET',
     path: '/static/bootstrap-switch.js',
     handler: { file: "./views/bootstrap-switch.js"}
  });

  server.route({
     method: 'GET',
     path: '/static/markerclusterer.min.js',
     handler: { file: "./views/markerclusterer.min.js"}
  });



  return next();
};

exports.register.attributes = {
  name: 'Map'
};
