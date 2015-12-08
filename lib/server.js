var Hapi = require('hapi');
var server = new Hapi.Server();
var port = process.env.PORT || 3000;

var Inert = require('inert');
var Home  = require('./home.js');
var Map   = require('./map.js');
var Data  = require('./data.js');

var Plugins = [Inert, Home, Map, Data];

server.connection({
    port: port
});

server.register(Plugins, function(err) {
    if (err) {
        throw err;
    }

    server.start(function() {
        console.log('Server running at:', server.info.uri);
    });
});
