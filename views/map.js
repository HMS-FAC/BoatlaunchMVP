function createMapWithSlipways(slipways) {

    //TODO remove global
     markers = [];
     var mapProp = {
         zoom: 6,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };

     //TODO remove global
     map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

     utils.setupInitialLocation(map);

     var infowindow = null;

         Object.keys(slipways).forEach(function(key) {
             var marker = new google.maps.Marker({
                 position: new google.maps.LatLng(Number(slipways[key].latitude), Number(slipways[key].longitude)),
                 __filtervalue: {Suitability: slipways[key].Suitability}
             });

             markers.push(marker);
             marker.setMap(map);
             marker.addListener('click', function() {
               if (infowindow) {
                 infowindow.close();
               }

               infowindow = new google.maps.InfoWindow({
                 content : utils.renderInfoContent(slipways, key)
               });

               infowindow.open(map, marker);

             });

         });

         mc = new MarkerClusterer(map, markers);
         mc.setIgnoreHidden(true);

     var input = document.getElementById('pac-input');
     var searchBox = new google.maps.places.SearchBox(input);

     map.addListener('bounds_changed', function() {
         searchBox.setBounds(map.getBounds());
     });

     searchBox.addListener('places_changed', function() {
         console.log("places_changed");
         var places = searchBox.getPlaces();

         if (places.length === 0) {
             return;
         }

         markers.forEach(function(marker) {
             marker.setMap(null);
         });
         markers = [];

         //  https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
         map.setCenter(places[0].geometry.location);

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
       });
 }
