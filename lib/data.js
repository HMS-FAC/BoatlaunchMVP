var dataFunc = require('./dataFunctions.js');
var Firebase = require("firebase");

var firebase = new Firebase('https://crackling-inferno-1794.firebaseio.com/');

exports.register = function(server, options, next) {

  server.route({
     method: 'GET',
     path: '/data',
     handler: function (request, reply){
       dataFunc.WrapperFunc(firebase, function(){
         console.log("data.json should have loaded");
         reply.file("./lib/data/data.json");
       });
       //reply.file("./lib/data/data.json")
     }

  });

  return next();
};

exports.register.attributes = {
  name: 'Data'
};
