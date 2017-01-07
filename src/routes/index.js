module.exports = function (express) {  //uses router
	const router = express.Router();

	/*Home Page*/
	router.get('/', function(req, res){
		res.json({ Hello: 'The URL shortner API by Joey Fuller'});
	});


	/*Endpoint*/
	router.use('/api/v1', require('./API/smallURL.js')(express));


	return router;
};
