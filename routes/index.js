var express = require('express');
var router = express.Router();


require('node-jsx').install({ extension: ".js" })
var React = require('react')
var ReactRouter = require('react-router')
var ReactDOMServer = require('react-dom/server')

var store = require('../public/build/es5/stores/store')
var ServerApp = require('../public/build/es5/ServerApp')
var Main = require('../public/build/es5/components/Main')
var Home = require('../public/build/es5/components/layout/Home')
var Entries = require('../public/build/es5/components/containers/Entries')

// controllers:
var profileController = require('../controllers/ProfileController')
var entryController = require('../controllers/EntryController')

router.get('/', function(req, res, next) {
	profileController.get(null, false, function(err, results){
		if (err){
			return
		}

		var profilesReducer = {
			profiles:{},
			profilesArray: results
		}

		var initialStore = store.configureStore({
			profilesReducer: profilesReducer
		})

		var routes = {
			path: '/',
			component: ServerApp,
			initial: initialStore,
			indexRoute: {
				component: Home
			}
		}

		ReactRouter.match({ routes, location: req.url }, function(error, redirectLocation, renderProps){
			if (error){
				return
			}
			if (redirectLocation){
				return
			}

			var html = ReactDOMServer.renderToString(React.createElement(ReactRouter.RouterContext, renderProps))
		    res.render('index', {react: html, preloadedState:JSON.stringify(initialStore.getState())})
		})
	})
})

router.get('/:page/:slug', function(req, res, next) {
	if (req.params.page == 'api'){
		next()
		return
	}

	entryController.get({phone:req.params.slug}, false, function(err, results){
		if (err){
			return
		}

		var entriesMap = {}
		for (var i=0; i<results.length; i++){
			var entry = results[i]
			var array = entriesMap[entry.phone]
			if (array == null)
				array = []

			array.push(entry)
			entriesMap[entry.phone] = array
		}


		var entriesReducer = {
			entries: entriesMap,
			entriesArray: results
		}

		var initialStore = store.configureStore({
			entriesReducer: entriesReducer
		})

		var routes = {
			path: '/:page/:phone',
			component: ServerApp,
			initial: initialStore,
			indexRoute: {
				component: Entries
			}
		}

		ReactRouter.match({ routes, location: req.url }, function(error, redirectLocation, renderProps){
			if (error){
				return
			}
			if (redirectLocation){
				return
			}

			var html = ReactDOMServer.renderToString(React.createElement(ReactRouter.RouterContext, renderProps))
		    res.render('index', {react: html, preloadedState:JSON.stringify(initialStore.getState())})
		})


	})




})


// router.get('/:page/:slug', function(req, res, next) {
	// if (req.params.page == 'api'){
	// 	next()
	// 	return
	// }

	// var routes = {
	// 	path: '/:page/:slug',
	// 	component: ServerApp,
	// 	indexRoute: {
	// 		component: Entries
	// 	}
	// }
	
// 	ReactRouter.match({ routes, location: req.url }, function(error, redirectLocation, renderProps){
// 		if (error){
// 			console.log('ReactRouter - ERROR: '+error)
// 			return
// 		}
// 		if (redirectLocation){
// 			console.log('ReactRouter - redirectLocation: '+redirectLocation)
// 			return
// 		}

// 		console.log('ReactRouter - renderProps: '+JSON.stringify(renderProps))
// 		var html = ReactDOMServer.renderToString(React.createElement(ReactRouter.RouterContext, renderProps))
// 	    res.render('index', {react: html})
// 	})
// })

module.exports = router;
