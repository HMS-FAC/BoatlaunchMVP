exports.register = function(server, options, next) {

  server.route({
     method: 'GET',
     path: '/',
     handler: { file: "./views/index.html"}
  });

  return next();
}

exports.register.attributes = {
  name: 'Home'
}
