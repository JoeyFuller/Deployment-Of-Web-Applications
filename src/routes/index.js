/*Joey Fuller v1.0.0*/ 
/*Home Page*/

/*Depends*/
const url =require('../models/url');

/*Use Router*/
module.exports = function (express) {
	/*Uses Router*/  
	const router = express.Router();

	/*Home Page GET*/
	router.get('/', function(req, res){
		res.json({ Hello: 'The URL shortner API by Joey Fuller'});
	});

	/*URL ReDirect*/

	router.get((req,res) {

	}


	/*API USE*/
	router.use('/api/v1', require('./api/url.js')(express));

	/*Returns router*/
	return router;
};
