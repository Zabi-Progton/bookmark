"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var EntryPreview = (function (Component) {
	function EntryPreview() {
		_classCallCheck(this, EntryPreview);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(EntryPreview, Component);

	_prototypeProperties(EntryPreview, null, {
		render: {
			value: function render() {
				return React.createElement(
					"div",
					{ style: { background: "#f9f9f9", border: "1px solid #ddd", padding: 16, marginBottom: 12 } },
					React.createElement(
						"h3",
						null,
						this.props.entry.title
					),
					React.createElement(
						"a",
						{ style: { textDecoration: "none" }, target: "_blank", href: this.props.entry.url },
						this.props.entry.url
					),
					React.createElement(
						"p",
						null,
						this.props.entry.description
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return EntryPreview;
})(Component);

module.exports = EntryPreview;