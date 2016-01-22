function showEditSlipwayForm(){
  document.getElementById("slipwayInfo").innerHTML =
  '<form role="form>'+

  '<div id=info>'+
    '<div class="smooth" id="upDownButton" >'+
                '<a href="#navigation">'+
                    '<span class="glyphicon glyphicon-menu-up"></span>'+
                '</a>'+
                '<a href="#info">'+
                    '<span class="glyphicon glyphicon-menu-down"></span>'+
                '</a>'+
    '</div>'+
   '</div>'+
    '<br>'+
    '<label for:"Name">Name:</label>'+
            '<input type="name" class="form-control" id="Name" placeholder="name" value="'+Name+'">'+

    '<h3>Contact Details</h3>'+
    '<div class="form-group">'+
        '<label for:"Website">Website:</label>'+
            '<input type="text" class="form-control" id="website" placeholder="website" value="'+Website+'">'+
        '<label for:"Contact Name">Contact Name:</label>'+
            '<input type="name" class="form-control" id="PersonName" placeholder="contact name" value="'+PersonName+'">'+
        '<label for:"Contact Phone">Phone Numer:</label>'+
            '<input type="name" class="form-control" id="PhoneNumber" placeholder="phone number" value="'+PhoneNumber+'">'+
        '<label for:"Contact Mobile">Contact Mobile:</label>'+
            '<input type="name" class="form-control" id="MobilePhoneNumber"  value="'+MobilePhoneNumber+'">'+
        '<label for:"Email">Email:</label>'+
            '<input type="email" class="form-control" id="Email" placeholder="email" value="'+Email+'">'+
    '</div>'+

  '<h3>Slipway Details</h3>'+
    '<div class="form-group">'+
        '<label for:"latitude">Latitude:</label>'+
             '<input type="text" class="form-control" id="Latitude"  value="'+Latitude+'">'+
        '<label for:"longitude">Longitude:</label>'+
            '<input type="text" class="form-control" id="Longitude"  value="'+Longitude+'">'+
        '<label for:"Ramp Description">Ramp Description:</label>'+
            '<textarea class="form-control" id=RampDescription row="3" value="'+RampDescription+'"></textarea>'+
        '<label for:"Ramp Type">Ramp Type:</label>'+
            '<input type="Ramp Type" class="form-control" id="RampType" placeholder="Ramp Type" value="'+RampType+'">'+
        '<label for:"Suitability">Suitability:</label>'+
            '<select class="form-control" id ="Suitability">'+
                                        '<option value="Unknown">Unknown</option>'+
                                        '<option value="Portable Only">Portable Only</option>'+
                                        '<option value="Small trailer can be pushed">Small trailer can be pushed</option>'+
                                        '<option value="Large trailer needs a car">Large trailer needs a car</option>'+
            '</select>'+     
        '<label for:"Ramp Length">Ramp Length:</label>'+   
            '<select class="form-control" id="RampLength">'+
                                        '<option value="Unknown">Unknown</option>'+
                                        '<option value="No Ramp">No Ramp</option>'+
                                        '<option value="1/4 tidal">1/4 tidal</option>'+
                                        '<option value="1/2 tidal">1/2 tidal</option>'+
                                        '<option value="3/4 tidal">3/4 tidal</option>'+
                                        '<option value="Whole of tidal range">Whole of tidal range</option>'+
                                        '<option value="1/4 tidal">1/4 tidal</option>'+
                                        '<option value="Non-tidal">Non-tidal</option>'+
            '</select>'+          
        '<label for:"Facilities">Facilities</label>'+
            '<input type="Facilities" class="form-control" id="Facilities" placeholder="Facilities" value="'+Facilities+'">'+                            
        '<label for:"Navigational Hazards">Navigational Hazards:</label>'+
            '<input type="Navigational Hazards" class="form-control" id="NavigationalHazards" placeholder="Navigational Hazards" value="'+NavigationalHazards+'">'+
        '<label for:"Upper Area Material">Upper Area Material:</label>'+
          ' <select class="form-control" id="upperAreaMaterial">'+
                                        '<option value="Unknown">Unknown</option>'+
                                        '<option value="Sand">Sand</option>'+
                                        '<option value="Shingle">Shingle</option>'+
                                        '<option value="Rock">Rock</option>'+
                                        '<option value="Harbour">Harbour</option>'+
                                        '<option value="Concrete">Concrete</option>'+
            '</select>'+ 
        '<label for:"Lower Area Material"> Lower Area Material: </label>'+
            '<select class="form-control" id="LowerAreaMaterial">'+
                                        '<option value="Unknown">Unknown</option>'+
                                        '<option value="Sand">Sand</option>'+
                                        '<option value="Shingle">Shingle</option>'+
                                        '<option value="Rock">Rock</option>'+
                                        '<option value="Harbour">Harbour</option>'+
                                        '<option value="Concrete">Concrete</option>'+
            '</select>'+   
        '<label for:"Charges">Charges:</label>'+
            '<input type="Charges" class="form-control" id="Charges" placeholder="Charges" value="'+Charges+'">'+
        '<button class="btn btn-default btn-md" onclick="submitSlipwayDetails()" type="button">Submit Slipway Details</button>' +
  '</form>';
}
