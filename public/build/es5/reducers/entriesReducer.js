"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	entries: {},
	entriesArray: []
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	switch (action.type) {

		case constants.ENTRIES_RECEIVED:
			var entries = action.entries;
			console.log("ENTRIES_RECEIVED: " + JSON.stringify(entries));
			var newState = Object.assign({}, state);
			newState.entriesArray = entries;


			var entriesMap = Object.assign({}, newState.entries);
			for (var i = 0; i < entries.length; i++) {
				var entry = entries[i];
				var username = entry.profile.username;
				if (username == null) continue;

				var array = entriesMap[username];
				if (array == null) array = [];

				array.push(entry);
				entriesMap[username] = array;
			}

			newState.entries = entriesMap;
			return newState;

		default:
			return state;
	}
};