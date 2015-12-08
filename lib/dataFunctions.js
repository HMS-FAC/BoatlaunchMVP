var Firebase = require("firebase");
var fs = require('fs');

var dataFWrapper = {};

dataFWrapper.WrapperFunc = function(callbcak){

  var DBObj = {};

  var FirebSlipwayArray = new Firebase('https://crackling-inferno-1794.firebaseio.com/');

  FirebSlipwayArray.on('value', function(snapshot){
    console.log("FirebSlipwayArray");
    // creates an obj where the
    snapshot = snapshot.val();
    //console.log("snapshot", snapshot);
    for (var slipwayKey in snapshot){
       //console.log("test2");
       if (snapshot.hasOwnProperty(slipwayKey)){
         DBObj[slipwayKey] = transformSlipway(snapshot[slipwayKey]);
       }
    }
    DBJson = JSON.stringify(DBObj);
      fs.writeFile(__dirname+"/data/data.json",DBJson, function(err) {
        if(err) {
            return console.log(err);
        }
        return console.log("The file was saved!");
      });
  });


   function transformSlipway (slipwayArray) {
    if (typeof slipwayArray[2] === 'number') {
      slipwayArray[2] = slipwayArray[2].toString();
    }

    if (typeof slipwayArray[3] === 'number') {
      slipwayArray[3] = slipwayArray[3].toString();
    }

    return {
      idKey: slipwayArray[0] || Math.random().toString(),
      Name: slipwayArray[1],
      'longitude': slipwayArray[2],
      'latitude': slipwayArray[3]
    };
  }

};
dataFWrapper.WrapperFunc();
module.exports = dataFWrapper;
