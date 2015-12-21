utils = {
  fetchRemoteSlipways: function(callback) {

    firebaseSlipwayArray = new Firebase(
      'https://crackling-inferno-1794.firebaseio.com/'
    );
    firebaseSlipwayArray.on('value', function(snapshot) {
      return callback(snapshot.val());
    });

  },
  transformSlipways: function(remoteSlipways) {

    localSlipwayObj = {};
    var slipwayKey;
    for (slipwayKey in remoteSlipways) {
      if (remoteSlipways.hasOwnProperty(slipwayKey)) {
        localSlipwayObj[slipwayKey] = utils.transformSingleSlipway(remoteSlipways[slipwayKey]);
      }
    }
    return localSlipwayObj;

  },
  transformSingleSlipway: function(slipwayArray) {

    if (typeof slipwayArray[2] === 'number') {
      slipwayArray[2] = slipwayArray[2].toString();
    }

    if (typeof slipwayArray[3] === 'number') {
      slipwayArray[3] = slipwayArray[3].toString();
    }

    return {
      idKey:                slipwayArray[0] || Math.random().toString(),
      Name:                 slipwayArray[1],
      'longitude':          slipwayArray[2],
      'latitude':           slipwayArray[3],
      'NearestPlace':       slipwayArray[4],
      'Country':            slipwayArray[5],
      'Region':             slipwayArray[6],
      'Website':            slipwayArray[7],
      'PersonName':         slipwayArray[8],
      'PhoneNumber':        slipwayArray[9],
      'MobilePhoneNumber':  slipwayArray[10],
      'FaxNumber':          slipwayArray[11],
      'Email':              slipwayArray[12],
      'RampDescription':    slipwayArray[13],
      'Directions':         slipwayArray[14],
      'RampType':           slipwayArray[15],
      'UpperArea':          slipwayArray[16],
      'LowerArea':          slipwayArray[17],
      'Suitability':        slipwayArray[18],
      'RampLength':         slipwayArray[19],
      'Facilities':         slipwayArray[20],
      'Charges':            slipwayArray[21],
      'CruisingArea':       slipwayArray[22],
      'NavigationalHazards':slipwayArray[23],
      'images':             slipwayArray[24]

    };
  },

  setupInitialLocation: function(map) {

    if (navigator.geolocation) {
      browserSupportFlag = true;
      navigator.geolocation.getCurrentPosition(function(position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(initialLocation);
      }, function() {
        initialLocation = new google.maps.LatLng(51.508742, -0.120850);
      });
    } else {
      initialLocation = new google.maps.LatLng(51.508742, -0.120850);
    }
  },

  getLocation: function(map){

    if (navigator.geolocation) {
      browserSupportFlag = true;
      navigator.geolocation.getCurrentPosition(function(position) {
  
        currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(currentLocation);
        map.setZoom(18);
        console.log('PPPP',position.coords.latitude, position.coords.longitude);
        var slipwayInfo= document.getElementById('slipwayInfo');
        slipwayInfo.innerHTML = '';
        slipwayInfo.innerHTML += '<h4 id="latLong">Latitude:'+position.coords.latitude.toFixed(3)+', Longitude:'+position.coords.longitude.toFixed(3)+'</h5>';


      }, function() {
        initialLocation = new google.maps.LatLng(51.508742, -0.120850);
      });
    } else {
        initialLocation = new google.maps.LatLng(51.508742, -0.120850);
    }



  },

  renderInfoContent: function(data, key) {

    return '<div id="name">' +
      '<h3>' + data[key].Name + '</h3>' +
      '</div>' +
      '<p hidden id="key">'+key+'</p hidden>'+

      '<a href="#upDownButton"><button class="btn btn-default btn-md " onclick="showSlipwayDetails()" type="button">More Info</button></a>' +
      '</div>';
  }


};
