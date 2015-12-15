exports.register = function(server, options, next) {

  server.route({
      method: '*',
      path: '/{p*}', // catch-all path
      handler: { file: "./views/404.html"}
  });

  return next();
};

exports.register.attributes = {
  name: 'NotFound'
};
