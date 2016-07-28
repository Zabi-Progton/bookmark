import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import Home from './components/layout/Home'
import Page from './components/layout/Page'
import Account from './components/layout/Account'
import Entries from './components/containers/Entries'
import { Provider } from 'react-redux'
import store from './stores/store'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const initialState = window.__PRELOADED_STATE__

const router = (
	<Provider store={store.configureStore(initialState)}>
		<Router history={browserHistory}>
			<Route path="/" component={Main}>

				<IndexRoute component={Home}></IndexRoute>
				<Route path="/account" component={Account}></Route>
				<Route path="/page/:username" component={Page}></Route>

			</Route>
		</Router>
	</Provider>
)

ReactDOM.render(router, document.getElementById('app'))











