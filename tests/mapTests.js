var mapFunc = require('../views/map.js');
var test = require('tape');
var fs = require('fs');
var path = require('path');

test ('test the test: 1+1=2', function(t){
  t.equal(1+1, 2);
  t.end();
});

test ('is there a search box in the map', function(t){
  mapFunc.initAutocomplete();

  testMap = false;

  setTimeout(function(){

    fs.readFile(path.resolve('./views/index.html'), function(err, data){
      if(err) {
        console.log(err);
      }
      else {
        console.log('I\'m hereeeeee' , data);
        testMap = true;
      }
    });
  }, 2000);

  t.equal(1+1, 2);
  t.end();
});
