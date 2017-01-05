var bodyParser = required('body-parser');

$('BUTTONWHEN FORM IS DONE').on('click', function(){
	$.ajax({
		url: '/api/v1/url',
		type: 'POST',
		dataType: 'JSON',
		data: {url: $('url-field').val()},
		success: function(data){
			var resultUrl = '<a class="result" href="' + dada.shortUrl + '">' + data.shortUrl + '</a>';
			$('#link').html(resultUrl);

		}
	});
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));