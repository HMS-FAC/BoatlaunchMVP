console.log('hello testing');

var iframe = document.getElementById('iframe');
var target = iframe.contentDocument || iframe.contentWindow.document;
//var done = assert.async();



test('is searchBox there',function(assert){
	var searchBox = target.getElementById('pac-input');

	assert.ok(searchBox,true);
});
