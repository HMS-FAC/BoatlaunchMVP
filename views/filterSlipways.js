$(document).ready(function(){

  $.fn.bootstrapSwitch.defaults.inverse = true;
  $.fn.bootstrapSwitch.defaults.size = 'mini';
  $.fn.bootstrapSwitch.defaults.onColor = 'warning';
  $("[name='unknown-slipways']").bootstrapSwitch();

  // $(".dropdown-menu li a").click(function(){
  //   $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  //   $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  // });


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
