"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

module.exports = {

	entriesReceived: function (entries) {
		return {
			type: constants.ENTRIES_RECEIVED,
			entries: entries
		};
	},

	profilesReceived: function (profiles) {
		return {
			type: constants.PROFILES_RECEIVED,
			profiles: profiles
		};
	},

	currentUserReceived: function (currentUser) {
		return {
			type: constants.CURRENT_USER_RECEIVED,
			currentUser: currentUser
		};
	}

};