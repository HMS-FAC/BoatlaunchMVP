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
    'Name: '                 + detailsArray[0]  +'<br><br>'+
    'Website: '              + detailsArray[1]  +'<br><br>'+
    'Charges: '              + detailsArray[2]  +'<br><br>'+
    'Contact Name: '         + detailsArray[3]  +'<br><br>'+
    'Contact Phone: '        + detailsArray[4]  +'<br><br>'+
    'Contact Mobile: '       + detailsArray[5]  +'<br><br>'+
    'Email: '                + detailsArray[6]  +'<br><br>'+
    'Ramp Description: '     + detailsArray[7]  +'<br><br>'+
    'Ramp Type: '            + detailsArray[8]  +'<br><br>'+
    'Suitability: '          + detailsArray[9]  +'<br><br>'+
    'Ramp Length: '          + detailsArray[10] +'<br><br>'+
    'Facilities: '           + detailsArray[11] +'<br><br>'+
    'Navigational Hazards: ' + detailsArray[12] +'<br><br>'+
    'Upper Area Material: '  + detailsArray[13] +'<br><br>'+
    'Lower Area Material: '  + detailsArray[14] +'<br><br>'+
  '</div>';
   }
};
