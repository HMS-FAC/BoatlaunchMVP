var dataFunctions = require('../lib/dataFunctions.js');
var test = require('tape');
var fs = require('fs');
var path = require('path');


test ('test the test: 1+1=2', function(t){
  t.equal(1+1, 2);
  t.end();
});

test ('test if dataFWrapper creates a JSON file', function(t){
  newJSON = false;
  dataFunctions.WrapperFunc(function(){
    console.log('--->>>>>JSON build done');
  });
  setTimeout(function(){
    fs.readFile(path.resolve('lib/data/data.json'), function(err){
      if(err) {
        console.log(err);
      }
      else {
        console.log('I\'m hereeeeee');
        newJSON = true;
      }
    });
  }, 6000);
  setTimeout(function(){
    //fs.unlinkSync(path.resolve('lib/data.json'));
    t.equal(newJSON, true);
    t.end();
  }, 6100);
});

//dataFunctions.getSlipwayArray();
