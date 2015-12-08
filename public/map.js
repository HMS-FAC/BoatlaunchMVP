 function initAutocomplete() {

     var London = new google.maps.LatLng(51.508742, -0.120850);

     var mapProp = {
         zoom: 11,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };

     // Get current location 
     if (navigator.geolocation) {
         browserSupportFlag = true;
         navigator.geolocation.getCurrentPosition(function(position) {
             initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
             map.setCenter(initialLocation);
         }, function() {
             handleNoGeolocation(browserSupportFlag);
         });
     }

     // Browser doesn't support Geolocation
     else {
         browserSupportFlag = false;
         handleNoGeolocation(browserSupportFlag);
     }

     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

     function handleNoGeolocation(errorFlag) {
         if (errorFlag === true) {
             alert("Geolocation service failed.");
             initialLocation = London;
         } else {
             alert("Your browser doesn't support geolocation. We've placed you in London.");
             initialLocation = London;
         }
         map.setCenter(initialLocation);
     }


     // fetch JSON

     function fetchJSONFile(path, callback) {
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
     }

    fetchJSONFile('/data.js', function(data){
    // do something with your data
    console.log(data);
    });



     // Adding Markers
     var marker = new google.maps.Marker({
         position: new google.maps.LatLng(51.508742, -0.120850),
     });
     marker.setMap(map);

     // Add Infowindow 
     var infowindow = new google.maps.InfoWindow({
         content: "Hello World!",
     });

     marker.addListener('click', function() {
         infowindow.open(map, marker);
     });

     // Search Box
     var input = document.getElementById('pac-input');
     var searchBox = new google.maps.places.SearchBox(input);
     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

     map.addListener('bounds_changed', function() {
         searchBox.setBounds(map.getBounds());
     });

     var markers = [];

     searchBox.addListener('places_changed', function() {
         var places = searchBox.getPlaces();

         if (places.length === 0) {
             return;
         }

         // Clear out the old markers.
         markers.forEach(function(marker) {
             marker.setMap(null);
         });
         markers = [];

         // For each place, get the icon, name and location.
         var bounds = new google.maps.LatLngBounds();
         places.forEach(function(place) {
             var icon = {
                 url: place.icon,
                 size: new google.maps.Size(71, 71),
                 origin: new google.maps.Point(0, 0),
                 anchor: new google.maps.Point(17, 34),
                 scaledSize: new google.maps.Size(25, 25)
             };

             // Create a marker for each place.
             markers.push(new google.maps.Marker({
                 map: map,
                 icon: icon,
                 title: place.name,
                 position: place.geometry.location
             }));

             if (place.geometry.viewport) {
                 // Only geocodes have viewport.
                 bounds.union(place.geometry.viewport);
             } else {
                 bounds.extend(place.geometry.location);
             }
         });
         map.fitBounds(bounds);
     });
 }
