var Firebase = require("firebase");
var dataFunctions = require('../lib/dataFunctions.js');
var test = require('tape');
var fs = require('fs');
var path = require('path');

 var REAL_FIREBASE = true;
//Set up real and fake firebase
// You only need the real firebase to run this once and get the data that you
// want the fake firebase to return, without actually calling the firebase server
if (REAL_FIREBASE) {
    var FirebSlipwayArray = new Firebase(
        'https://crackling-inferno-1794.firebaseio.com/'
    );
}
else {
  var FirebSlipwayArray = {
    on: function(arg, callback) {

        fs.readFile(
            path.resolve('lib/data/freezedata.json'), function(err, data){
            if(err) {
                console.log(err);
            }

            snapshot = {val: function(){
                return JSON.parse(data);
            }};
            console.log("FAKE FIREBASE");
            callback(snapshot);
        });
    }
  };
}
//End firebase

test ('test the test: 1+1=2', function(t){
  t.equal(1+1, 2);
  t.end();
});

test ('test DBObj is an object which is not empty', function(t){
  newJSON = false;
  dataFunctions.createDbObj(FirebSlipwayArray, function(){


      fs.readFile(path.resolve('lib/data/data.json'), function(err){ if(err) {
        console.log(err);
      }
      else {
        console.log('I\'m hereeeeee');
        newJSON = true;
      }
      t.equal(newJSON, true);
      t.end();
    });

  });
});
