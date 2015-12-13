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
              '<div id="contactName">'+
                '<p hidden>'+data[key].PersonName+'</p>'+
              '</div>'+
              '<div id="contactPhoneNumber">'+
                '<p hidden>'+data[key].PhoneNumber+'</p>'+
              '</div>'+
              '<div id="contactMobilePhoneNumber">'+
                '<p hidden>'+data[key].MobilePhoneNumber+'</p>'+
              '</div>'+
              '<div id="email">'+
                '<p hidden>'+data[key].Email+'</p>'+
              '</div>'+
              '<div id="rampDes">'+
                '<p hidden>'+data[key].RampDescription+'</p>'+
              '</div>'+
              '<div id="rampType">'+
                '<p hidden>'+data[key].RampType+'</p>'+
              '</div>'+
              '<div id="upperArea">'+
                '<p hidden>'+data[key].UpperArea+'</p>'+
              '</div>'+
              '<div id="lowerArea">'+
                 '<p hidden>'+data[key].LowerArea+'</p>'+
              '</div>'+
              '<div id="suitability">'+
                '<p hidden>'+data[key].Suitability+'</p>'+
              '</div>'+
              '<div id="rampLength">'+
                '<p hidden>'+data[key].RampLength+'</p>'+
              '</div>'+
              '<div id="facilities">'+
                '<p hidden>'+data[key].Facilities+'</p>'+
              '</div>'+
              '<div id="charges">'+
                '<p hidden>'+data[key].Charges+'</p>'+
              '</div>'+
              '<div id="navigationalHazards">'+
                '<p hidden>'+data[key].NavigationalHazards+'</p>'+
              '</div>'+
              '<button onclick="myFunc()" type="button">More Info</button>'+
<<<<<<< HEAD
              '</div>';
  },

  googleMapVersion : function(){
    console.log(google.maps.version);
    return google.maps.version;
=======
            '</div>';
>>>>>>> master
  }

};
