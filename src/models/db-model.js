/*Joey Fuller*/

/*Depends*/
const Sequelize = require('sequelize');
require('dotenv').config();

/*Sequelize to DB*/
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
	host:process.env.DBHOST,
	dialect:process.env.DBSCHEMA
	port:process.env.DBPORT,
	pool: {
		max: 4,
		min: 0,
		idle: 10000,
	},
	logging: true,
});

/*Table Create*/
const url-model = sequelize.defind('url-model', {
	longURL:{
		type: Sequelize.STRING,
	},
	shortURL:{
		type: Sequelize.STRING,
	}
});

sequelize.sync();

/*Exports*/
exports.sequelize = sequelize;
exports.url-model = url-model;