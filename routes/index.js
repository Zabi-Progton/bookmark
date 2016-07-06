var express = require('express');
var router = express.Router();


require('node-jsx').install({ extension: ".js" })
var React = require('react')
var ReactRouter = require('react-router')
var ReactDOMServer = require('react-dom/server')
var ServerApp = require('../public/build/es5/ServerApp')
var Main = require('../public/build/es5/components/Main')
var Home = require('../public/build/es5/components/layout/Home')
var Entries = require('../public/build/es5/components/containers/Entries')

var routes = {
	path: '/',
	component: ServerApp,
	indexRoute: {
		component: Home
	}
}

router.get('/', function(req, res, next) {
	ReactRouter.match({ routes, location: req.url }, function(error, redirectLocation, renderProps){
		if (error){
			console.log('ReactRouter - ERROR: '+error)
			return
		}
		if (redirectLocation){
			console.log('ReactRouter - redirectLocation: '+redirectLocation)
			return
		}

		console.log('ReactRouter - renderProps: '+JSON.stringify(renderProps))
		var html = ReactDOMServer.renderToString(React.createElement(ReactRouter.RouterContext, renderProps))
	    res.render('index', {react: html})
	})
})

module.exports = router;
