utils.fetchRemoteSlipways(function(remoteSlipways){
  var slipways = utils.transformSlipways(remoteSlipways);
  console.log(slipways);

  createMapWithSlipways(slipways );

});
