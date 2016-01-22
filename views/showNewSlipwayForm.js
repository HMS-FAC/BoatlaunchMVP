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
    '<div class="form-group">'+
        '<label for:"Name">Name:</label>'+
            '<input type="name" class="form-control" id="Name" placeholder="name">'+
        '<label for:"latitude">Latitude:</label>'+
             '<input type="text" class="form-control" id="Latitude" placeholder="latitude">'+
        '<label for:"longitude">Longitude:</label>'+
            '<input type="text" class="form-control" id="Longitude" placeholder="Longitude">'+
    '</div>'+

    '<h3>Contact Details</h3>'+
    '<div class="form-group">'+
        '<label for:"Website">Website:</label>'+
            '<input type="text" class="form-control" id="website" placeholder="website">'+
        '<label for:"Contact Name">Contact Name:</label>'+
            '<input type="name" class="form-control" id="PersonName" placeholder="contact name">'+
        '<label for:"Contact Phone">Phone Numer:</label>'+
            '<input type="name" class="form-control" id="PhoneNumber" placeholder="phone number">'+
        '<label for:"Contact Mobile">Contact Mobile:</label>'+
            '<input type="name" class="form-control" id="MobilePhoneNumber" placeholder="mobile number">'+
        '<label for:"Email">Email:</label>'+
            '<input type="email" class="form-control" id="Email" placeholder="email">'+
    '</div>'+
     
    '<h3>Slipway Details</h3>'+
    '<div class="form-group">'+
        '<label for:"Ramp Description">Ramp Description:</label>'+
            '<textarea class="form-control" id=RampDescription row="3"></textarea>'+
        '<label for:"Ramp Type">Ramp Type:</label>'+
            '<input type="Ramp Type" class="form-control" id="RampType" placeholder="Ramp Type">'+
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
            '<input type="Facilities" class="form-control" id="Facilities" placeholder="Facilities">'+                            
        '<label for:"Navigational Hazards">Navigational Hazards:</label>'+
            '<input type="Navigational Haxards" class="form-control" id="NavigationalHazards" placeholder="Navigational Hazards">'+
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
            '<input type="Charges" class="form-control" id="Charges" placeholder="Charges">'+
        '<button class="btn btn-default btn-md submitButton" onclick="submitNewSlipwayDetails()" type="button">Submit</button>' +
  '</form>';
}
