/*Joey Fuller v1.0.0*/ 
/*Exports Express*/
module.exports = (express) => {

	/*Uses Router*/
	const router = express.Router();

	/*Makes SHORT url Crud*/
	router.post('/urls', (req, res) => {
		var urlGen = require('../src/urlGen');
		req.body.short_url = urlGen.urlGen();
		url.create(req.body, (err){
			res.status().json(err);
		}, (data) {

		});

	});

	/*Read URLS cRud*/
	router.get('/urls', (req, res){
		url.findAll((err){
			res.status().json(err);
		}, (data){
			res.status().json(data);
		})
	});

	/*Update URLS crUd*/
	router.post('/urls', req, res){
		url.update(req,body, (err){
			res.status().json(err);
		}, (data){
			res.status().json(data);
		})
	});

	/*Delete URLS cruD*/
	router.delete('/urls', (req, res){
		req.body = req.params;
		url.delete(req.body, (err){
			res.status().json(err);
		}, (data){

		})
	});

	/*Returns router*/
	return router;
};