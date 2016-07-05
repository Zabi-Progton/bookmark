var cheerio = require('cheerio')
var superagent = require('superagent')


module.export = {

	scrape: function(url, props, callback){
		superagent
		.get(url)
		.query(null)
		.set('Accept', 'text/html')
		.end(function(err, response){
			if (callback == null)
				return

			if (err){
				callback(err, null)
				return
			}

	//		res.send(response.text)
			var metaData = {}
			$ = cheerio.load(response.text)
		    $('meta').each(function(i, meta) {
		    	if (meta.attribs != null){
		    		var attribs = meta.attribs
			    	if (attribs.property != null){
				    	var prop = attribs.property
				    	if (props.indexOf(prop) != -1){
							var key = prop.replace('og:', '')
					    	metaData[key] = attribs.content
				    	}
			    	}
		    	}
		    })

		    console.log(JSON.stringify(metaData))
			callback(null, metaData)
		})
	}

}