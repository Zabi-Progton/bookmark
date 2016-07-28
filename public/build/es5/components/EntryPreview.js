"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var DateUtils = _interopRequire(require("../utils/DateUtils"));

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
                var username = null;
                if (this.props.entry.profile.username == null) {
                    username = "Anonymous";
                } else {
                    username = this.props.entry.profile.username;
                }

                var imageUrl = this.props.entry.image.length == 0 ? "/images/events/thumbs/1.jpg" : this.props.entry.image;
                return React.createElement(
                    "div",
                    { className: "entry clearfix" },
                    React.createElement(
                        "div",
                        { className: "entry-image hidden-sm" },
                        React.createElement(
                            "a",
                            { target: "_blank", href: this.props.entry.url },
                            React.createElement("img", { src: imageUrl, alt: "Bookmark" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "entry-c" },
                        React.createElement(
                            "div",
                            { className: "entry-title" },
                            React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: this.props.entry.url },
                                    this.props.entry.title
                                )
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            this.props.entry.description
                        ),
                        React.createElement(
                            "ul",
                            { className: "entry-meta clearfix" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("i", { className: "icon-time" }),
                                    " ",
                                    DateUtils.formattedDate(this.props.entry.timestamp)
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("i", { className: "icon-user" }),
                                    " ",
                                    username
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "entry-content" },
                            React.createElement(
                                "a",
                                { target: "_blank", href: this.props.entry.url, className: "btn btn-danger" },
                                "Read More"
                            )
                        )
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