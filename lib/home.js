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
     path: '/showNewSlipwayForm.js',
     handler: { file: "./views/showNewSlipwayForm.js"}
  });

  server.route({
     method: 'GET',
     path: '/showEditSlipwayForm.js',
     handler: { file: "./views/showEditSlipwayForm.js"}
  });

  server.route({
     method: 'GET',
     path: '/submitNewSlipwayDetails.js',
     handler: { file: "./views/submitNewSlipwayDetails.js"}
  });

  server.route({
     method: 'GET',
     path: '/submitSlipwayDetails.js',
     handler: { file: "./views/submitSlipwayDetails.js"}
  });

  server.route({
    method: 'GET',
    path: '/110.GIF',
    handler: { file: "./views/110.GIF"}
  });

  server.route({
     method: 'GET',
     path: '/filterSlipways.js',
     handler: { file: "./views/filterSlipways.js"}
  });
  server.route({
      method:'GET',
      path: '/custom.css',
      handler: { file : "./views/custom.css"}

  });

  return next();
};

exports.register.attributes = {
  name: 'Home'
};
