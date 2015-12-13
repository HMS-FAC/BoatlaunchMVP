utils.fetchRemoteSlipways(function(remoteSlipways){
  var slipways = utils.transformSlipways(remoteSlipways);

  createMapWithSlipways(slipways);

});
