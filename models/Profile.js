var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({

	firstName:{type:String, trim:true, lowercase:true, default:''},
	lastName:{type:String, trim:true, lowercase:true, default:''},
	username:{type:String, trim:true, default:''},
	email:{type:String, trim:true, lowercase:true, default:''},
	password:{type:String, trim:true, default:''},
	phone:{type:String, trim:true, default:''},
	timestamp:{type:Date, default: Date.now}
})

ProfileSchema.methods.summary = function(){
	var summary = {
		username: this.username,
		phone: this.phone,
		timestamp: this.timestamp,
		_id: this._id,
	}

	return summary
}

module.exports = mongoose.model('ProfileSchema', ProfileSchema)