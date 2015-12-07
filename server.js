var Hapi = require('hapi');
var port = process.env.PORT || 3000;

var server = new Hapi.Server();

server.connection({
    port: port
});

server.register(require('inert'), function(err) {
    if (err) {
        throw err;
    }

    server.route([

    	{ method: 'GET', path: '/', handler: { file: "public/index.html"} },
        { method: 'GET', path: '/map.js', handler: { file: 'public/map.js'} }

    ]);
});

server.start(function() {
    console.log('Server running at:', server.info.uri);
});
