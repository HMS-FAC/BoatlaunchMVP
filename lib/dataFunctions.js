var fs = require('fs');

var dataFWrapper = {};

dataFWrapper.WrapperFunc = function(firebase, callback){

  var DBObj = {};
  FirebSlipwayArray = firebase;

  FirebSlipwayArray.on('value', function(snapshot){
    console.log("FirebSlipwayArray");
    // creates an obj where the
    snapshot = snapshot.val();
    //
    //fs.writeFile(__dirname+"/data/freezedata.json", JSON.stringify(snapshot));
    //we only needed this ^ once to have the data we will use to create our fake
    // firebase
    //
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
            console.log(err);
        }
        console.log("The file was saved!");
        callback();
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
      'latitude': slipwayArray[3],
      'NearestPlace': slipwayArray[4],
      'Country': slipwayArray[5],
      'Region': slipwayArray[6],
      'Website': slipwayArray[7],
      'PersonName': slipwayArray[8],
      'PhoneNumber': slipwayArray[9],
      'MobilePhoneNumber': slipwayArray[10],
      'FaxNumber': slipwayArray[11],
      'Email': slipwayArray[12],
      'RampDescription': slipwayArray[13],
      'Directions': slipwayArray[14],
      'RampType': slipwayArray[15],
      'UpperArea': slipwayArray[16],
      'LowerArea': slipwayArray[17],
      'Suitability': slipwayArray[18],
      'RampLength': slipwayArray[19],
      'Facilities': slipwayArray[20],
      'Charges': slipwayArray[21],
      'CruisingArea': slipwayArray[22],
      'NavigationalHazards': slipwayArray[23],
      'images': slipwayArray[24]
    };
  }

};

module.exports = dataFWrapper;
