module.exports = function (express) {  //returns router
	var router = express.Router();

	router.get('/', function(req, res){
		res.json({ hello: "World"});
	});

	router.get('/status', function(req, res){
		res.json({ healthy: true});
	});

	router.get('/user/:id', function(req, res){
		res.json({ user: { id: req.params.id }});
	});

	// shortner routes

	router.post('/api/v1/url', function(req, res){
		//create and return shortURL
	});

	router.get('/:encoded_id', function(req, res){

	});


	return router;
}

//module.exports.encode = encode;
//module.exports.decode = decode;