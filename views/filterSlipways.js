$(document).ready(function(){

  $('.dropdown-menu input, .dropdown-menu label').click(function(e) {
        e.stopPropagation();
    });

  $.fn.bootstrapSwitch.defaults.inverse = false;
  $.fn.bootstrapSwitch.defaults.state = true;
  $.fn.bootstrapSwitch.defaults.size = 'mini';
  $.fn.bootstrapSwitch.defaults.onColor = 'warning';
  $("[name='unknown-slipways']").bootstrapSwitch();


  $("#submit-filter").click(function(){
    //show unknown slipways too
    if($('#unknown-slipways').is(':checked')) {
      //every slipway
      if($('#portable').is(':checked')) {
        markers.forEach(function(e) {
            e.setVisible(true);
        });
        mc.repaint();
        }
      // small, large and unknown
      if($('#small').is(':checked')) {
        markers.forEach(function(e) {
          e.setVisible(true);
          if(e.__filtervalue.Suitability !== 'Small trailer can be pushed' &&
            e.__filtervalue.Suitability !== 'Large trailer needs a car' &&
            e.__filtervalue.Suitability !== 'Unknown'){
              e.setVisible(false);
          }
        });
        mc.repaint();
      }
      //large and unknown
      if($('#large').is(':checked')) {
        markers.forEach(function(e) {
          e.setVisible(true);
          if(e.__filtervalue.Suitability !== 'Large trailer needs a car' &&
            e.__filtervalue.Suitability !== 'Unknown'){
              e.setVisible(false);
          }
        });
        mc.repaint();
      }
    }
    //doesn't show unknown slipways
    else {
      //every slipway except unknown
      if($('#portable').is(':checked')) {
        markers.forEach(function(e) {
          e.setVisible(true);
          if(e.__filtervalue.Suitability === 'Unknown') {
            e.setVisible(false);
          }
        });
        mc.repaint();
        }
      //only small and large
      if($('#small').is(':checked')) {
        markers.forEach(function(e) {
          e.setVisible(true);
          if(e.__filtervalue.Suitability !== 'Small trailer can be pushed' &&
            e.__filtervalue.Suitability !== 'Large trailer needs a car'){
              e.setVisible(false);
          }
        });
        mc.repaint();
      }
      //only large
      if($('#large').is(':checked')) {
        markers.forEach(function(e) {
          e.setVisible(true);
          if(e.__filtervalue.Suitability !== 'Large trailer needs a car') {
            e.setVisible(false);
          }
        });
        mc.repaint();
      }
    }

  });
});
