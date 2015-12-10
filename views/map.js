 function initAutocomplete() {

     var markers = [];
     var mapProp = {
         zoom: 6,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };

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

     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

     fetchJSONFile('/data', function(data) {
         data = JSON.parse(data);

         Object.keys(data).forEach(function(key) {
             var marker = new google.maps.Marker({
                 position: new google.maps.LatLng(Number(data[key].latitude), Number(data[key].longitude))
             });
             markers.push(marker);
             marker.setMap(map);

             var infowindow = new google.maps.InfoWindow({
                 content: data[key].Name
             });

             marker.addListener('click', function() {
                 infowindow.open(map, marker);
             });
         });
         var mc = new MarkerClusterer(map, markers);
     });

     var input = document.getElementById('pac-input');
     var searchBox = new google.maps.places.SearchBox(input);
     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

     map.addListener('bounds_changed', function() {
         searchBox.setBounds(map.getBounds());
     });

     searchBox.addListener('places_changed', function() {
         var places = searchBox.getPlaces();

         if (places.length === 0) {
             return;
         }

         markers.forEach(function(marker) {
             marker.setMap(null);
         });
         markers = [];

         var bounds = new google.maps.LatLngBounds();
         places.forEach(function(place) {
             var icon = {
                 url: place.icon,
                 size: new google.maps.Size(71, 71),
                 origin: new google.maps.Point(0, 0),
                 anchor: new google.maps.Point(17, 34),
                 scaledSize: new google.maps.Size(25, 25)
             };

             markers.push(new google.maps.Marker({
                 map: map,
                 icon: icon,
                 title: place.name,
                 position: place.geometry.location
             }));

         });
         map.fitBounds(bounds);
     });
 }

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
