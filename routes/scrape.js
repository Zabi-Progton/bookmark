var express = require('express')
var router = express.Router()
var cheerio = require('cheerio')
var superagent = require('superagent')


router.get('/:url', function(req, res, next) {

//	var url = req.params.url

	superagent
	.get('http://m.imgur.com/4hTpUKZ')
	.query(null)
	.set('Accept', 'text/html')
	.end(function(err, response){
		if (err){
			return
		}

//		res.send(response.text)
		var props = ['og:title', 'og:description', 'og:image']
		var metaData = {}
		$ = cheerio.load(response.text)
	    $('meta').each(function(i, meta) {
	    	if (meta.attribs != null){
	    		var attribs = meta.attribs
		    	if (attribs.property != null){
			    	var prop = attribs.property
			    	if (props.indexOf(prop) != -1){
//				    	console.log('META: '+i, prop)
						var key = prop.replace('og:', '')
				    	metaData[key] = attribs.content
			    	}
		    	}
	    	}
	    })

	    console.log(JSON.stringify(metaData))
	    res.json(metaData)
	})


})

module.exports = router
