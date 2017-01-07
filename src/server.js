
const express = require('express');
const body_parser = require('body-parser');
const app = express();


//config

var port = 3000; //port server is running

app.use('/api/', require('../routes/api.js')(express));

var server = app.listen(port, function(){
	console.log('Server Active on', port); //console log to show server active
});

module.exports = server;