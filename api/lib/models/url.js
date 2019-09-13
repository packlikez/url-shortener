"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _random = _interopRequireDefault(require("../utils/random"));

var _shortid = _interopRequireDefault(require("shortid"));

var schema = new _mongoose["default"].Schema({
  original: {
    type: String,
    required: true
  },
  "short": {
    type: String,
    unique: true,
    "default": _shortid["default"].generate
  },
  expiredAt: {
    type: Date,
    "default": null
  }
});

var Url = _mongoose["default"].model('url', schema);

var _default = Url;
exports["default"] = _default;