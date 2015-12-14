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

  server.route({
     method: 'GET',
     path: '/showSlipwayDetails.js',
     handler: { file: "./views/showSlipwayDetails.js"}
  });

  server.route({
     method: 'GET',
     path: '/addNewSlipway.js',
     handler: { file: "./views/addNewSlipway.js"}
  });

  server.route({
     method: 'GET',
     path: '/editSlipwayDetails.js',
     handler: { file: "./views/editSlipwayDetails.js"}
  });

  return next();
};

exports.register.attributes = {
  name: 'Home'
};
