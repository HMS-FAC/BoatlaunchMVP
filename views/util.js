utils = {
  fetchJSONFile: function (path, callback) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function() {
          if (httpRequest.readyState === 4) {
              if (httpRequest.status === 200) {
                  var data = httpRequest.responseText;
                  if (callback) callback(data);
              }
          }
      };
      httpRequest.open('GET', path);
      httpRequest.send();
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

  renderInfoContent: function(data, key){
    console.log('hello test');
    return '<div id="name">'+
              '<h3>'+data[key].Name+'</h3>'+
              '</div>'+
              '<div id="website">'+
              '<p hidden>'+data[key].Website+'</p>'+
              '</div>'+
              '<div id="rampDes">'+
              '<p hidden>'+data[key].RampDescription+'</p>'+
              '</div>'+
              '<div id="charges">'+
              '<p hidden>'+data[key].Charges+'</p>'+
              '</div>'+
              '<button onclick="myFunc()" type="button">More Info</button>'+
              '</div>';
  },

  googleMapVersion : function(){
    console.log(google.maps.version);
    return google.maps.version;
  }

};
