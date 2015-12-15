describe('Checking utils.renderInfoContent', function(){
  var data = {
    123: {
      Name: "Huw"
    }
  };
  var key = 123;

  it('returns HTML string', function(){
    var htmlString = utils.renderInfoContent(data, key);
    var type = typeof htmlString;

    expect(type).toEqual('string');
  });

  it('returns expected template', function (){
    var expected = '<div id="name">' +
      '<h3>' + data[key].Name + '</h3>' +
      '</div>' +
      '<p hidden id="key">'+key+'</p hidden>'+

      '<button onclick="showSlipwayDetails()" type="button">More Info</button>' +
      '</div>';
    var result = utils.renderInfoContent(data, key);

    expect(result).toEqual(expected);
  });
});

describe('Checking utils.transformSingleSlipway', function(){
  var data = [100, "Huw", 20, 30, "Mile End", "UK", "London", "huw.com", "HuwD", "999", "911", "101", "huw@gmail.com", "big", "turn right at palmers road", "rock", "concrete", "silt", "Portable", "10m", "toilets", "£10", "Thames", "SimplyFresh", "FAC.jpg"];
  var expected={idKey:100,Name:"Huw",longitude:'20',latitude:'30',NearestPlace:"Mile End",Country:"UK",Region:"London",Website:"huw.com",PersonName:"HuwD",PhoneNumber:"999",MobilePhoneNumber:"911",FaxNumber:"101",Email:"huw@gmail.com",RampDescription:"big",Directions:"turn right at palmers road",RampType:"rock",UpperArea:"concrete",LowerArea:"silt",Suitability:"Portable",RampLength:"10m",Facilities:"toilets",Charges:"£10",CruisingArea:"Thames",NavigationalHazards:"SimplyFresh",images:"FAC.jpg"};
  it('returns correctly formatted object', function(){

    var result = utils.transformSingleSlipway(data);

    expect(result).toEqual(expected);
  });

  it('converts numbers to strings', function() {
    data = [100, "Huw", 20, 30];
    var result = utils.transformSingleSlipway(data);
    var type = typeof result.longitude;

    expect(type).toEqual("string");
  });
});
