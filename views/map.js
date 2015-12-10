function initAutocomplete() {

     var markers = [];
     var mapProp = {
         zoom: 6,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };

     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
     utils.setupInitialLocation(map);

     var infowindow = null;

     utils.fetchJSONFile('/data', function(data) {
         data = JSON.parse(data);

         Object.keys(data).forEach(function(key) {
             var marker = new google.maps.Marker({
                 position: new google.maps.LatLng(Number(data[key].latitude), Number(data[key].longitude))
             });
             markers.push(marker);
             marker.setMap(map);
             marker.addListener('click', function() {
               if (infowindow) {
                 infowindow.close();
               }
              
               infowindow = new google.maps.InfoWindow({
                 content : utils.renderInfoContent(data, key)
               });

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
