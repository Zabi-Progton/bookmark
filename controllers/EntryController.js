var Entry = require('../models/Entry')
var Scraper = require('../utils/Scraper')
var Promise = require('bluebird')

var createEntry = function(entryParams){
	return new Promise(function (resolve, reject){
		Entry.create(entryParams, function(err, entry){
			if (err){
				reject(err)
				return
			}

			resolve(entry)
		})
	})
}


module.exports = {

	get: function(params, isRaw, callback){
		Entry.find(params, function(err, entries){
			if (err){
				if (callback != null)
					callback(err, null)

				return
			}

			if (callback != null){
				// if (isRaw == true){
				// 	callback(null, entries)
				// 	return
				// }

				// var summaries = []
				// for (var i=0; i<entries.length; i++){
				// 	var entry = entries[i]
				// 	summaries.push(place.summary())
				// }

				callback(null, entries)
			}
		})
	},

	getById: function(id, isRaw, callback){
		Entry.findById(id, function(err, entry){
			if (err){
				if (callback != null)
					callback({message:'Entry Not Found'}, null)

				return
			}

			if (callback != null)
				callback(null, Entry)
		})
	},

	post: function(params, callback){
		var entryParams = {}
		var phone = params['From'] // Twilio phone number inludes +1, get rid of it
		entryParams['phone'] = phone.replace('+1', '')


		var body = params['Body']

		var parts = body.split(' ')
		var url = ''
		for (var i=0; i<parts.length; i++){
			var word = parts[i]
			if (word.indexOf('http') != -1){
				url = word
				break
			}
		}

		entryParams['url'] = url
		var props = ['og:title', 'og:image', 'og:description']
		Scraper.scrape(url, props)
		.then(function(result){
			var keys = Object.keys(result)
			for (var i=0; i<keys.length; i++){
				var key = keys[i]
				entryParams[key] = result[key]
			}
			return createEntry(entryParams)
		})
		.then(function(entry){
			callback(null, entry)
			return
		})
		.catch(function(err){
			callback(err, null)
			return
		})
	},

	// put: function(id, params, callback){
	// 	Place.findByIdAndUpdate(id, params, {new:true}, function(err, place){
	// 		if (err){
	// 			if (callback != null)
	// 				callback(err, null)

	// 			return
	// 		}

	// 		if (callback != null)
	// 			callback(null, place.summary())
	// 	})
	// }



}