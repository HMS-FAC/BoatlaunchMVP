describe('Test Jasmine', function(){
  it('simple sum', function(){

    expect(1+1).toEqual(2);
  });

});

describe('Checking utils.renderInfoContent', function(){
  it('returns HTML string', function(){
    var data = {
      123: {
        Name: "Huw"
      }
    };
    var key = 123;
    var htmlString = utils.renderInfoContent(data, key);
    var type = typeof htmlString;

    expect(type).toEqual('string');

  });
});
