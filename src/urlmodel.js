var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountSchema = Schema ({ //layout for counting
	_id: {type: String, required: true},
	seq: {type: Number, default: 0 }
});

var counting = mongoose.model('counter', CountSchema);

var urlSchema = new Schema({    //layout for db 
  _id: {type: Number, index: true},
  long_url: String,
  created: Date
});

urlSchema.pre('save', function(next){
	var store = this;
	counting.findByIdAndUpdate({_id: 'url_count'}, {$inc: {seq: 1}}, function(error, counting){
		if (error)
			return next(error);
		store._id - counting.seq;
		store.created = new Date();
		next();
	});
});

var Url = mongoose.model('Url', urlSchema);

module.exports = Url;




