/*Joey Fuller*/
/*Home Page*/
/*Use Router*/
module.exports = function (express) {
	/*Uses Router*/  
	const router = express.Router();

	/*Home Page GET*/
	router.get('/', function(req, res){
		res.json({ Hello: 'The URL shortner API by Joey Fuller'});
	});


	/*Endpoint USE*/
	router.use('/api/v1', require('./api/url.js')(express));

	/*Returns router*/
	return router;
};
