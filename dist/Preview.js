"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Homepage = require("./Homepage");

var _BannerLarge = require("./BannerLarge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Preview() {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/banner-large",
    exact: true
  }, /*#__PURE__*/_react["default"].createElement(_BannerLarge.BannerLarge, null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/"
  }, /*#__PURE__*/_react["default"].createElement(_Homepage.Homepage, null))));
}

var _default = Preview;
exports["default"] = _default;