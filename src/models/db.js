/*Joey Fuller*/

/*Depends*/

const Sequelize = require('sequelize');
require("dotenv").config();

/*Sequelize to DB*/
const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASS, {
		host:process.env.DB_HOST,
		dialect:process.env.DB_SCHEMA,
		port:process.env.DB_PORT,
		pool: {
			max: 5,
			min: 0,
			idle: 10000,
		},
	logging: false,
});

/*Table Create*/
const url = sequelize.define('url', {
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
exports.url = url;