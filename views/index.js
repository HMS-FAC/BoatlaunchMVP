var myFunc = function(){
  console.log("Hello World");
  var name = document.getElementById("name").children[0].innerHTML;
  var website = document.getElementById("website").children[0].innerHTML;
  var rampDes = document.getElementById("rampDes").children[0].innerHTML;
  var charges = document.getElementById("charges").children[0].innerHTML;

  //console.log(data.child);
  document.getElementById("slipwayInfo").innerHTML =
  '<div id=info>'+'<br><br>'+
    'Name: '+name+'<br><br>'+
    'Website: '+website+'<br><br>'+
    'Ramp Description: '+rampDes+'<br><br>'+
    'Charges: '+charges+'<br><br>'+

  '</div>';
};
