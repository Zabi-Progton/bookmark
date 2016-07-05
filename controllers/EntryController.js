var Entry = require('../models/Entry')
var Scraper = require('../utils/Scraper')

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
		entryParams['phone'] = params['From']
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
		Scraper.scrape(url, props, function(err, result){
			if (err){
				callback(err, null)
				return
			}

			var keys = Object.keys(result)
			for (var i=0; i<keys.length; i++){
				var key = keys[i]
				entryParams[key] = result[key]
			}

			Entry.create(entryParams, function(err, entry){
				if (err){
					if (callback != null)
						callback(err, null)

					return
				}

				if (callback != null)
					callback(null, entry)
			})
		})


		// Entry.create(entryParams, function(err, entry){
		// 	if (err){
		// 		if (callback != null)
		// 			callback(err, null)

		// 		return
		// 	}

		// 	if (callback != null)
		// 		callback(null, entry)
		// })
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