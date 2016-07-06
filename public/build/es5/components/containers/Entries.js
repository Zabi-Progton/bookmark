"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var EntryPreview = _interopRequire(require("../../components/EntryPreview"));

var APIManager = _interopRequire(require("../../utils/APIManager"));

var store = _interopRequire(require("../../stores/store"));

var actions = _interopRequire(require("../../actions/actions"));

var connect = require("react-redux").connect;
var Entries = (function (Component) {
	function Entries(props, context) {
		_classCallCheck(this, Entries);

		_get(Object.getPrototypeOf(Entries.prototype), "constructor", this).call(this, props, context);
		this.state = {};
	}

	_inherits(Entries, Component);

	_prototypeProperties(Entries, null, {
		componentDidMount: {
			value: function componentDidMount() {
				console.log("Component Did Mount: " + JSON.stringify(this.props.params.phone));
				var _this = this;
				APIManager.handleGet("/api/entry", null, function (err, response) {
					if (err) {
						alert(err);
						return;
					}

					store.dispatch(actions.entriesReceived(response.results));
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var entryList = this.props.entries.map(function (entry, i) {
					return React.createElement(EntryPreview, { key: entry._id, entry: entry });
				});

				return React.createElement(
					"div",
					null,
					entryList
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Entries;
})(Component);

var stateToProps = function (state) {
	return {
		entries: state.entriesReducer.entriesArray
	};
};

module.exports = connect(stateToProps)(Entries);
//			entries: []