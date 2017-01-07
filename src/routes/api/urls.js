module.exports = function (express) {  //uses router
	const router = express.Router();

	router.post('/urls', (req, res) => {
		var urlGen = require('../src/urlGen');
		req.body.shorturl = urlGen.urlGen();
		res.json({shorturl: req.body.shorturl});

	});

	return router;
};