exports.register = function(server, options, next) {

  server.route({
     method: 'GET',
     path: '/data',
     handler: { file: "./lib/data/data.json"}
  });

  return next();
}

exports.register.attributes = {
  name: 'Data'
}
