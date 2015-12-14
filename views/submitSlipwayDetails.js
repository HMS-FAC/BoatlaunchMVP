function submitSlipwayDetails(){
  console.log("KEYOBJ-------->>>>>>>>",localSlipwayObj[key].latitude);
  console.log("LONG-------->>>>>>>>",localSlipwayObj[key].longitude);

  var idKey = key;
  var keyRoute = new Firebase('https://crackling-inferno-1794.firebaseio.com/'+ idKey);
  var nameInput              = document.getElementById('Name').value,
      websiteInput           = document.getElementById('Website').value,
      personInput            = document.getElementById('PersonName').value,
      phoneNumberInput       = document.getElementById('PhoneNumber').value,
      mobilePhoneInput       = document.getElementById('MobilePhoneNumber').value,
      emailInput             = document.getElementById('Email').value,
      rampDescInput          = document.getElementById('RampDescription').value,
      rampTypeInput          = document.getElementById('RampType').value,
      suitabilityInput       = document.getElementById('Suitability').value, // select
      rampLengthInput        = document.getElementById('RampLength').value, // select
      facilitiesInput        = document.getElementById('Facilities').value,
      navHazInput            = document.getElementById('NavigationalHazards').value,
      upperAreaMaterialInput = document.getElementById('UpperAreaMaterial').value, // select
      lowerAreaMaterialInput = document.getElementById('LowerAreaMaterial').value, //select
      chargesInput           = document.getElementById('Charges').value;

  keyRoute.set([
    idKey,
    nameInput,
    localSlipwayObj[key].longitude,
    localSlipwayObj[key].latitude,
            , // NearestPlace
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
  ]);
}
