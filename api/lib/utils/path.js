"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _url = _interopRequireDefault(require("url"));

var path = {
  get: function get(str) {
    var _ref = new _url["default"](str),
        host = _ref.host,
        path = _ref.path;

    return host + path;
  }
};
var _default = path;
exports["default"] = _default;