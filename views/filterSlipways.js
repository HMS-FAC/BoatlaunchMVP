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
    var name = '';
    if ($("#Portable").is(":checked")) {
      console.log('inside');
    }
    console.log('name');
  });

});
