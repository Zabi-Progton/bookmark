"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Link = require("react-router").Link;
var ProfilePreview = (function (Component) {
  function ProfilePreview() {
    _classCallCheck(this, ProfilePreview);

    if (Component != null) {
      Component.apply(this, arguments);
    }
  }

  _inherits(ProfilePreview, Component);

  _prototypeProperties(ProfilePreview, null, {
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { className: "well well-lg nobottommargin" },
          React.createElement(
            "h3",
            null,
            "Welcome ",
            this.props.profile.username
          ),
          React.createElement("hr", { style: { borderTop: "1px solid #777" } }),
          React.createElement(
            Link,
            { to: "/account", className: "button button-xlarge button-border button-rounded tright" },
            "View Account"
          ),
          React.createElement("br", null),
          React.createElement("br", null)
        );
      },
      writable: true,
      configurable: true
    }
  });

  return ProfilePreview;
})(Component);

module.exports = ProfilePreview;