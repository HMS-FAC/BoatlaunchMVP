console.log('hello testing');

var iframe = document.getElementById('iframe');
var target = iframe.contentDocument || iframe.contentWindow.document;
//var done = assert.async();

var searchBox = target.getElementById('pac-input');
var map = target.getElementById('googleMap');
var slipwayInfo = target.getElementById('slipwayInfo');


test('is searchBox,map div and slipInfo div there', function(assert) {
	assert.ok(searchBox,'it exists');
	assert.ok(map,'it exists');
 	assert.ok(slipwayInfo,'it exists');
});
