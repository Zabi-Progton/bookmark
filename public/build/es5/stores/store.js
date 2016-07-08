"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _redux = require("redux");

var createStore = _redux.createStore;
var applyMiddleware = _redux.applyMiddleware;
var combineReducers = _redux.combineReducers;
var thunk = _interopRequire(require("redux-thunk"));

var entriesReducer = _interopRequire(require("../reducers/entriesReducer"));

var profilesReducer = _interopRequire(require("../reducers/profilesReducer"));

// Combine Reducers
var reducers = combineReducers({
    entriesReducer: entriesReducer,
    profilesReducer: profilesReducer
});

// Create Store
var store = createStore(reducers, applyMiddleware(thunk) // Add middleware to createStore
);


module.exports = store;