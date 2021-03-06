function submitSlipwayDetails() {

    var idKey = key;
    var keyRoute = new Firebase('https://crackling-inferno-1794.firebaseio.com/' + idKey);
    var nameInput = document.getElementById('Name').value,
        websiteInput = document.getElementById('Website').value,
        personInput = document.getElementById('PersonName').value,
        phoneNumberInput = document.getElementById('PhoneNumber').value,
        mobilePhoneInput = document.getElementById('MobilePhoneNumber').value,
        emailInput = document.getElementById('Email').value,
        rampDescInput = document.getElementById('RampDescription').value,
        rampTypeInput = document.getElementById('RampType').value,
        suitabilityInput = document.getElementById('Suitability').value, // select
        rampLengthInput = document.getElementById('RampLength').value, // select
        facilitiesInput = document.getElementById('Facilities').value,
        navHazInput = document.getElementById('NavigationalHazards').value,
        upperAreaMaterialInput = document.getElementById('UpperAreaMaterial').value, // select
        lowerAreaMaterialInput = document.getElementById('LowerAreaMaterial').value, //select
        chargesInput = document.getElementById('Charges').value;



    var onComplete = function(error) {
        if (error) {

            alert('Failure, unfortunately there was an error');
        } else {
            slipwayInfo.innerHTML ='';
            slipwayInfo.innerHTML = '<div> <h3>Success! your slipway has been added to the datbase</h3></div>';

            console.log('Success, your slipway has been added to the database');
        }
    };


    keyRoute.set([
       // empty array elements are necessary for Database format
        idKey,
        nameInput,
        localSlipwayObj[key].longitude,
        localSlipwayObj[key].latitude,
                , // Nearest place
                , // Country
                , // Region
        websiteInput,
        personInput,
        phoneNumberInput,
        mobilePhoneInput,
                  , // Fax
        emailInput,
        rampDescInput,
                    , // Directions
        rampTypeInput,
        upperAreaMaterialInput,
        lowerAreaMaterialInput,
        suitabilityInput,
        rampLengthInput,
        facilitiesInput,
        chargesInput,
                    , // CruisingArea
        navHazInput,
                      // Images
    ],onComplete);
}
