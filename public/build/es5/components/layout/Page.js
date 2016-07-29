"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var store = _interopRequire(require("../../stores/store"));

var actions = _interopRequire(require("../../actions/actions"));

var connect = require("react-redux").connect;
var EntryPreview = _interopRequire(require("../../components/EntryPreview"));

var Header = _interopRequire(require("../../components/Header"));

var Page = (function (Component) {
	function Page(props, context) {
		_classCallCheck(this, Page);

		_get(Object.getPrototypeOf(Page.prototype), "constructor", this).call(this, props, context);
		this.state = {};
	}

	_inherits(Page, Component);

	_prototypeProperties(Page, null, {
		componentDidMount: {
			value: function componentDidMount() {
				console.log("componentDidMount: " + this.props.params.username);
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var entriesList = null;
				var entryArray = this.props.entries[this.props.params.username];
				if (entryArray != null) {
					entriesList = entryArray.map(function (entry, i) {
						return React.createElement(EntryPreview, { key: entry._id, entry: entry });
					});
				}



				return React.createElement(
					"div",
					null,
					React.createElement(Header, null),
					React.createElement(
						"section",
						{ id: "content" },
						React.createElement(
							"div",
							{ className: "content-wrap" },
							React.createElement(
								"div",
								{ className: "container clearfix" },
								React.createElement(
									"div",
									{ className: "col_two_third nobottommargin" },
									React.createElement(
										"h3",
										null,
										"Welcome To Bookmark!"
									),
									React.createElement(
										"div",
										{ id: "posts", className: "events small-thumbs" },
										entriesList
									)
								)
							)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Page;
})(Component);

var stateToProps = function (state) {
	console.log("ENTRIES: " + JSON.stringify(state.entriesReducer.entries));
	return {
		entries: state.entriesReducer.entries,
		currentUser: state.accountReducer.currentUser
	};
};

module.exports = connect(stateToProps)(Page);