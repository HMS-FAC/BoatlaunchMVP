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
    path: '/ajax-loader.gif',
    handler: { file: "./views/ajax-loader.gif"}
  });

  server.route({
     method: 'GET',
     path: '/filterSlipways.js',
     handler: { file: "./views/filterSlipways.js"}
  });

  return next();
};

exports.register.attributes = {
  name: 'Home'
};
