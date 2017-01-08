/*Joey Fuller*/

/*Depends*/
const db = require('');

/*Create Crud*/
exports.create = (payload, err, success){
	db.url.create(payload).then(success).catch(err);
};

/*Read cRud*/
exports.findAll = (err, success){
	db.url.findAll().then(success).catch(err);
};

/*Update crUd*/
exports.findId =(payload, err, success){
	db.url.find({
		where: {
			id: payload.id,
		},
		include: ({
			all: true,
			nested: true,
		})
	}).then(success).catch(err);
};

exports.find

/*Delete cruD*/