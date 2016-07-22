"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Header = _interopRequire(require("../../components/Header"));

var connect = require("react-redux").connect;
var Account = (function (Component) {
	function Account(props, context) {
		_classCallCheck(this, Account);

		_get(Object.getPrototypeOf(Account.prototype), "constructor", this).call(this, props, context);
		this.updateUser = this.updateUser.bind(this);
		this.state = {
			user: {
				username: "" }

		};
	}

	_inherits(Account, Component);

	_prototypeProperties(Account, null, {
		componentDidMount: {
			value: function componentDidMount() {
				var userCopy = Object.assign({}, this.props.currentUser);
				console.log("componentDidMount: " + JSON.stringify(userCopy));

				this.setState({
					user: userCopy
				});
			},
			writable: true,
			configurable: true
		},
		updateUser: {
			value: function updateUser(event) {
				event.preventDefault();
				console.log("updateUser: ");
				var updated = Object.assign({}, this.state.user);
				updated[event.target.id] = event.target.value;

				this.setState({
					user: updated
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
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
										"Welcome ",
										this.props.currentUser.username
									),
									React.createElement("input", { onChange: this.updateUser, value: this.state.user.username, type: "text", id: "username", name: "login-form-username", placeholder: "Username", className: "form-control" }),
									React.createElement("div", { id: "posts", className: "events small-thumbs" })
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

	return Account;
})(Component);

var stateToProps = function (state) {
	return {
		//		profiles: state.profilesReducer.profilesArray
		currentUser: state.accountReducer.currentUser

	};
};

module.exports = connect(stateToProps)(Account);