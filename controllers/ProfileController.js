var Profile = require('../models/Profile')
var Promise = require('bluebird')

module.exports = {

	find: function(params){
		return new Promise(function(resolve, reject){

			Profile.find(params, function(err, profiles){
				if (err){
					reject(err)
					return
				}

				resolve(profiles)
			})
		})
	},

	get: function(params, isRaw, callback){
		Profile.find(params, function(err, profiles){
			if (err){
				if (callback != null)
					callback(err, null)

				return
			}

			if (callback != null){
				if (isRaw == true){
					callback(null, profiles)
					return
				}

				// var summaries = []
				// for (var i=0; i<profiles.length; i++){
				// 	var profile = profiles[i]
				// 	summaries.push(profile.summary())
				// }

				callback(null, profiles)

			}
		})
	},

	getById: function(id, isRaw, callback){
		Profile.findById(id, function(err, profile){
			if (err){
				if (callback != null)
					callback({message:'Profile Not Found'}, null)

				return
			}

			if (callback != null)
				callback(null, profile)
		})
	},

	post: function(params, callback){
		Profile.create(params, function(err, profile){
			if (err){
				if (callback != null)
					callback(err, null)

				return
			}

			if (callback != null)
				callback(null, profile.summary())
		})
	}


}