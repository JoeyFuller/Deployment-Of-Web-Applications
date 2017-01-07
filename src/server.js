/*Dependencies*/
const express = require('express');
const body_parser = require('body-parser');

/*Express*/
const app = express();

/*Body Parser*/
app.use(body_parser.json());


app.use('/', require('../src/routes/api.js')(express));

const port = 3000; //port server is running on
const server = app.listen(port, function(){
	console.log('Server active on', port, 'until I break it again..'); //console log to show server active
});

module.exports = server; //exporting the server