setTimeout(function() {
		var iframe_select = document.getElementById('iframe');
		var iframe_content = iframe_select.contentDocument || iframe_select.contentWindow.document;
		var frontScript = iframe_select.contentWindow.autocomplete;

	test('Testing search box exists', function(assert){
		var searchBox = iframe_content.getElementById('pc-input');
		assert.ok(!!searchBox, true);
	});

	test('fetchJSONFile() returns json file',function(){

		stop(1000);
        utils.fetchJSONFile('/data',function(data){
        	data = JSON.parse(data);
        	console.log(data);
        });
	});


    
	


 }, 500);