function showSlipwayDetails(DbObj) {
   key = document.getElementById("key").innerHTML;
   Name                = "Unknown";
   Website             = "Unknown";
   PersonName          = "Unknown";
   PhoneNumber         = "Unknown";
   MobilePhoneNumber   = "Unknown";
   Email               = "Unknown";
   RampDescription     = "Unknown";
   RampType            = "Unknown";
   Suitability         = "Unknown";
   RampLength          = "Unknown";
   Facilities          = "Unknown";
   NavigationalHazards = "Unknown";
   UpperArea           = "Unknown";
   LowerArea           = "Unknown";
   Charges             = "Unknown";

  if (typeof localSlipwayObj[key].Name !== "undefined"){
    Name = localSlipwayObj[key].Name;
  }
  if (typeof localSlipwayObj[key].Website !== "undefined"){
    Website = localSlipwayObj[key].Website;
  }
  if (typeof localSlipwayObj[key].PersonName !== "undefined"){
    PersonName = localSlipwayObj[key].PersonName;
  }
  if (typeof localSlipwayObj[key].PhoneNumber !== "undefined"){
    PhoneNumber = localSlipwayObj[key].PhoneNumber;
  }
  if (typeof localSlipwayObj[key].MobilePhoneNumber !== "undefined"){
    MobilePhoneNumber = localSlipwayObj[key].MobilePhoneNumber;
  }
  if (typeof localSlipwayObj[key].Email !== "undefined"){
    Email = localSlipwayObj[key].Email;
  }
  if (typeof localSlipwayObj[key].RampDescription !== "undefined"){
    RampDescription = localSlipwayObj[key].RampDescription;
  }
  if (typeof localSlipwayObj[key].RampType !== "undefined"){
    RampType = localSlipwayObj[key].RampType;
  }
  if (typeof localSlipwayObj[key].Suitability !== "undefined"){
    Suitability = localSlipwayObj[key].Suitability;
  }
  if (typeof localSlipwayObj[key].RampLength !== "undefined"){
    RampLength = localSlipwayObj[key].RampLength;
  }
  if (typeof localSlipwayObj[key].Facilities !== "undefined"){
    Facilities = localSlipwayObj[key].Facilities;
  }
  if (typeof localSlipwayObj[key].NavigationalHazards !== "undefined"){
    NavigationalHazards = localSlipwayObj[key].NavigationalHazards;
  }
  if (typeof localSlipwayObj[key].UpperArea !== "undefined"){
    UpperArea = localSlipwayObj[key].UpperArea;
  }
  if (typeof localSlipwayObj[key].LowerArea !== "undefined"){
    LowerArea = localSlipwayObj[key].LowerArea;
  }
  if (typeof localSlipwayObj[key].Charges !== "undefined"){
    Charges = localSlipwayObj[key].Charges;
  }


  document.getElementById("slipwayInfo").innerHTML =
  '<button onclick="editSlipwayDetails()" type="button">Edit Slipway Details</button>' +
  '<div id=info><br><br>'+
    '<h2>'+
                                      Name                +'<br>'+
    '</h2>'+
    '<h3>'+
    'Contact Details '                                    +'<br>'+
    '</h3>'+
    '<b>Website:</b> '              + Website             +'<br><br>'+
    '<b>Contact Name:</b> '         + PersonName          +'<br><br>'+
    '<b>Contact Phone:</b> '        + PhoneNumber         +'<br><br>'+
    '<b>Contact Mobile:</b> '       + MobilePhoneNumber   +'<br><br>'+
    '<b>Email:</b> '                + Email               +'<br><br>'+
    '<h3>'+
    'Slipway Details '                                    +'<br>'+
    '</h3>'+
    '<b>Ramp Description:</b> '     + RampDescription     +'<br><br>'+
    '<b>Ramp Type:</b> '            + RampType            +'<br><br>'+
    '<b>Suitable for:</b> '         + Suitability         +'<br><br>'+
    '<b>Ramp Length:</b> '          + RampLength          +'<br><br>'+
    '<b>Facilities:</b> '           + Facilities          +'<br><br>'+
    '<b>Navigational Hazards:</b> ' + NavigationalHazards +'<br><br>'+
    '<b>Upper Area Material:</b> '  + UpperArea           +'<br><br>'+
    '<b>Lower Area Material:</b> '  + LowerArea           +'<br><br>'+
    '<b>Charges:</b> '              + Charges             +'<br><br>'+
  '</div>';
}
