var Firebase = require("firebase");
var fs = require('fs');


var FirebSlipwayArray = new Firebase('https://crackling-inferno-1794.firebaseio.com/');

var DBObj = {};

console.log("test");

FirebSlipwayArray.on('value', function(snapshot){
  // creates an obj where the
  snapshot = snapshot.val();
  console.log("test1");
  //console.log("snapshot", snapshot);
  for (var slipwayKey in snapshot){
     //console.log("test2");
     if (snapshot.hasOwnProperty(slipwayKey)){
       DBObj[slipwayKey] = transformSlipway(snapshot[slipwayKey]);
     }
  }
  console.log("DBObj",DBObj);
  // fs.writeFile(__dirname + './lib', js, function(err){
  //   console.log("err",err);
  // });

});


var transformSlipway = function (slipwayArray) {

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
    'latitude': slipwayArray[3],
    'Nearest Place': slipwayArray[4],
    'Country': slipwayArray[5],
    'Region': slipwayArray[6],
    'Website': slipwayArray[7],
    'Person Name': slipwayArray[8],
    'Phone Number': slipwayArray[9],
    'Mobile Phone Number': slipwayArray[10],
    'Fax Number': slipwayArray[11],
    'Email': slipwayArray[12],
    'Ramp Description': slipwayArray[13],
    'Directions': slipwayArray[14],
    'Ramp Type': slipwayArray[15],
    'Upper Area': slipwayArray[16],
    'Lower Area': slipwayArray[17],
    'Suitability': slipwayArray[18],
    'Ramp Length': slipwayArray[19],
    'Facilities': slipwayArray[20],
    'Charges': slipwayArray[21],
    'Cruising Area': slipwayArray[22],
    'Navigational Hazards': slipwayArray[23],
    'images': slipwayArray[24]
  };
};
