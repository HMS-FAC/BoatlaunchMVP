var myFunc = function(){
  var name =                     document.getElementById("name").children[0].innerHTML,
      website =                  document.getElementById("website").children[0].innerHTML,
      charges =                  document.getElementById("charges").children[0].innerHTML,
      contactName =              document.getElementById("contactName").children[0].innerHTML,
      contactPhoneNumber =       document.getElementById("contactPhoneNumber").children[0].innerHTML,
      contactMobilePhoneNumber = document.getElementById("contactMobilePhoneNumber").children[0].innerHTML,
      email =                    document.getElementById("email").children[0].innerHTML,
      rampDes =                  document.getElementById("rampDes").children[0].innerHTML,
      rampType =                 document.getElementById("rampType").children[0].innerHTML,
      suitability =              document.getElementById("suitability").children[0].innerHTML,
      rampLength =               document.getElementById("rampLength").children[0].innerHTML,
      facilities =               document.getElementById("facilities").children[0].innerHTML,
      navigationalHazards =      document.getElementById("navigationalHazards").children[0].innerHTML,
      upperArea =                document.getElementById("upperArea").children[0].innerHTML,
      lowerArea =                document.getElementById("lowerArea").children[0].innerHTML;

  var detailsArray = [name,website,charges,contactName,contactPhoneNumber,contactMobilePhoneNumber,email,rampDes,rampType,suitability,rampLength,facilities,navigationalHazards,upperArea,lowerArea];

  for(i=0 ; i<detailsArray.length ; i++ ){
    if (detailsArray[i] === "undefined"){
      detailsArray[i] = "Unknown";
    }
     if (i === detailsArray.length -1){
       HTMLtoPage();
     }
  }
   function HTMLtoPage() {

  document.getElementById("slipwayInfo").innerHTML =
  '<div id=info>'+'<br><br>'+
    '<h2>'+
                               detailsArray[0]  +'<br>'+
    '</h2>'+
    '<h3>'+
    'Contact Details '                          +'<br>'+
    '</h3>'+
    '<b>Website:</b> '              + detailsArray[1]  +'<br><br>'+
    '<b>Contact Name:</b> '         + detailsArray[3]  +'<br><br>'+
    '<b>Contact Phone:</b> '        + detailsArray[4]  +'<br><br>'+
    '<b>Contact Mobile:</b> '       + detailsArray[5]  +'<br><br>'+
    '<b>Email:</b> '                + detailsArray[6]  +'<br><br>'+
    '<h3>'+
    'Slipway Details '                          +'<br>'+
    '</h3>'+
    '<b>Ramp Description:</b> '     + detailsArray[7]  +'<br><br>'+
    '<b>Ramp Type:</b> '            + detailsArray[8]  +'<br><br>'+
    '<b>Suitability:</b> '          + detailsArray[9]  +'<br><br>'+
    '<b>Ramp Length:</b> '          + detailsArray[10] +'<br><br>'+
    '<b>Facilities:</b> '           + detailsArray[11] +'<br><br>'+
    '<b>Navigational Hazards:</b> ' + detailsArray[12] +'<br><br>'+
    '<b>Upper Area Material:</b> '  + detailsArray[13] +'<br><br>'+
    '<b>Lower Area Material:</b> '  + detailsArray[14] +'<br><br>'+
    '<b>Charges:</b> '              + detailsArray[2]  +'<br><br>'+

  '</div>';
   }

};
