exports.register = function(server, options, next) {

  server.route({
     method: 'GET',
     path: '/map.js',
     handler: { file: "./views/map.js"}
  });

 // static content should start with a url like /static/script.js
 //should instead serve static js files from a static folder using the
 //directory config

 /*
 see this: http://hapijs.com/tutorials/serving-files#directory-handler

 server.route({
    method: 'GET',
    path: '/static/{param*}',
    handler: {
        directory: {
            path: 'this is the path on the disk, can be relative'
        }
    }
});

 */

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



  return next();
};

exports.register.attributes = {
  name: 'Map'
};
