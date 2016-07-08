"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Link = require("react-router").Link;
var APIManager = _interopRequire(require("../../utils/APIManager"));

var Home = (function (Component) {
	function Home(props, context) {
		_classCallCheck(this, Home);

		_get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this, props, context);
		this.state = {
			profiles: []
		};
	}

	_inherits(Home, Component);

	_prototypeProperties(Home, null, {
		componentDidMount: {
			value: function componentDidMount() {
				console.log("componentDidMount: ");
				var _this = this;
				APIManager.handleGet("/api/profile", null, function (err, response) {
					if (err) {
						alert(err);
						return;
					}

					console.log(JSON.stringify(response));
					_this.setState({
						profiles: response.results
					});
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var links = this.state.profiles.map(function (profile, i) {
					return React.createElement(
						"div",
						{ key: profile._id },
						React.createElement(
							Link,
							{ to: "/entries/" + profile.phone },
							profile.phone
						)
					);
				});
				return React.createElement(
					"div",
					null,
					"This is the Home Page",
					React.createElement("br", null),
					links
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Home;
})(Component);

module.exports = Home;
//			store.dispatch(actions.entriesReceived(response.results))