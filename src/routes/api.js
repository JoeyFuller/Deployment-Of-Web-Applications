module.exports = function (express) {  //uses router
	const router = express.Router();

	router.get('/', function(req, res){
		res.json({ Hello: 'The URL shortner API by Joey Fuller'});
	});

	// shortner routes

	router.post('/api/v1/url', function(req, res){
		//create and return shortURL
	});



	return router;
};
