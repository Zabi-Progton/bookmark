"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Register = (function (Component) {
    function Register() {
        _classCallCheck(this, Register);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Register, Component);

    _prototypeProperties(Register, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "well well-lg nobottommargin" },
                    React.createElement(
                        "h3",
                        null,
                        "Sign Up"
                    ),
                    React.createElement("hr", { style: { borderTop: "1px solid #777" } }),
                    React.createElement(
                        "div",
                        { className: "col_full" },
                        React.createElement("input", { type: "text", id: "login-form-username", name: "login-form-username", value: "", placeholder: "Username", className: "form-control" }),
                        React.createElement("br", null),
                        React.createElement("input", { type: "text", id: "login-form-phone", name: "login-form-phone", value: "", placeholder: "Phone", className: "form-control" }),
                        React.createElement("br", null),
                        React.createElement("input", { type: "password", id: "login-form-password", name: "login-form-password", value: "", placeholder: "password", className: "form-control" })
                    ),
                    React.createElement(
                        "button",
                        { className: "button button-xlarge button-border button-rounded tright" },
                        "JOIN"
                    ),
                    React.createElement("br", null),
                    "Already a member? Login ",
                    React.createElement(
                        "a",
                        { href: "#" },
                        "HERE"
                    ),
                    ".",
                    React.createElement("br", null)
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Register;
})(Component);

module.exports = Register;