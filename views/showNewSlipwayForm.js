function showNewSlipwayForm(){
  document.getElementById("slipwayInfo").innerHTML =

  '<form role="form">'+
 
  '<div id=info>'+
    '<div class="smooth" id="upDownButton" >'+
                '<a href="#navigation">'+
                    '<span class="glyphicon glyphicon-menu-up"></span>'+
                '</a>'+
                '<a href="#info">'+
                    '<span class="glyphicon glyphicon-menu-down"></span>'+
                '</a>'+
    '</div>'+
    '<h3>Location:</h3>'+
    '<h4>'+
    '<b>Name:</b> '                 +'<input type="text" id="Name"                                           ><br><br>'+
    '</h4>'+
    '<b>Longitude:</b> '            +'<input type="Longitude" id="Longitude">                                 <br><br>'+
    '<b>Latitude:</b> '             +'<input type="Latitude" id="Latitude">                                   <br><br>'+

    '<h3>'+
    'Contact Details '                     +'<br>'+
    '</h3>'+
    '<b>Website:</b> '              +'<input type="text" id="Website"                                          ><br><br>'+
    '<b>Contact Name:</b> '         +'<input type="text" id="PersonName"                                       ><br><br>'+
    '<b>Contact Phone:</b> '        +'<input type="text" id="PhoneNumber"                                      ><br><br>'+
    '<b>Contact Mobile:</b> '       +'<input type="text" id="MobilePhoneNumber"                                ><br><br>'+
    '<b>Email:</b> '                +'<input type="text" id="Email"                                            ><br><br>'+
    '<h3>'+
    'Slipway Details '                     +'<br>'+
    '</h3>'+
    '<b>Ramp Description:</b> '     +'<input type="text" id="RampDescription"                                  ><br><br>'+
    '<b>Ramp Type:</b> '            +'<input type="text" id="RampType"                                         ><br><br>'+
    '<b>Suitable for:</b> '         +'<select id ="Suitability">'+
                                        '<option value="Unknown">Unknown</option>'+
                                        '<option value="Portable Only">Portable Only</option>'+
                                        '<option value="Small trailer can be pushed">Small trailer can be pushed</option>'+
                                        '<option value="Large trailer needs a car">Large trailer needs a car</option>'+
                                     '</select>'+                                                               '<br><br>'+
    '<b>Ramp Length:</b> '          +'<select id="RampLength">'+
                                        '<option value="Unknown">Unknown</option>'+
                                        '<option value="No Ramp">No Ramp</option>'+
                                        '<option value="1/4 tidal">1/4 tidal</option>'+
                                        '<option value="1/2 tidal">1/2 tidal</option>'+
                                        '<option value="3/4 tidal">3/4 tidal</option>'+
                                        '<option value="Whole of tidal range">Whole of tidal range</option>'+
                                        '<option value="1/4 tidal">1/4 tidal</option>'+
                                        '<option value="Non-tidal">Non-tidal</option>'+
                                      '</select>'+                                                              '<br><br>'+
    '<b>Facilities:</b> '           +'<input type="text" id="Facilities" ><br><br>'+
    '<b>Navigational Hazards:</b> ' +'<input type="text" id="NavigationalHazards"                              ><br><br>'+
    '<b>Upper Area Material:</b> '  +'<select id="UpperAreaMaterial">'+
                                        '<option value="Unknown">Unknown</option>'+
                                        '<option value="Sand">Sand</option>'+
                                        '<option value="Shingle">Shingle</option>'+
                                        '<option value="Rock">Rock</option>'+
                                        '<option value="Harbour">Harbour</option>'+
                                        '<option value="Concrete">Concrete</option>'+
                                     '</select>'+                                                               '<br><br>'+
    '<b>Lower Area Material:</b> '  +'<select id="LowerAreaMaterial">'+
                                        '<option value="Unknown">Unknown</option>'+
                                        '<option value="Sand">Sand</option>'+
                                        '<option value="Shingle">Shingle</option>'+
                                        '<option value="Rock">Rock</option>'+
                                        '<option value="Harbour">Harbour</option>'+
                                        '<option value="Concrete">Concrete</option>'+
                                     '</select>'+                                                               '<br><br>'+
    '<b>Charges:</b>'               +'<input type="text" id="Charges"                                          ><br><br>'+
  '</div>'+
  '<button class="btn btn-default btn-md submitButton" onclick="submitNewSlipwayDetails()" type="button">Submit</button>' +
  '</form>';
}
