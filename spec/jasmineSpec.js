describe('Checking utils.renderInfoContent', function(){
  var data = {
    123: {
      Name: "Huw"
    }
  };
  var key = 123;

  it('returns HTML string', function(){
    var htmlString = utils.renderInfoContent(data, key);
    var type = typeof htmlString;

    expect(type).toEqual('string');
  });

  it('returns expected template', function (){
    var expected = '<div id="name">' +
      '<h3>' + data[key].Name + '</h3>' +
      '</div>' +
      '<p hidden id="key">'+key+'</p hidden>'+

      '<button onclick="showSlipwayDetails()" type="button">More Info</button>' +
      '</div>';
    var result = utils.renderInfoContent(data, key);

    expect(result).toEqual(expected);
  });
});
