/*Joey Fuller v1.0.0*/ 
/*Rangen function*/
function urlgen(){
	/*Base for random URL*/
	const base = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXY23456789';
	/*Makes ranGen URl text = 5 characters*/
	var urlgen_text_length = 5;
	var urlgen_text = '';

	for(var i = 0; i < urlgen_text_length; i++) {
		urlgen_text += base.charAt((Math.random()) * base.length);
	};
	/*Return function results to export*/
	return urlgen_text;
}

/*Export function results*/
exports.urlgen = urlgen;