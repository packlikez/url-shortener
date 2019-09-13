"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cryptoJs = _interopRequireDefault(require("crypto-js"));

var encryption = {
  encode: function encode(str) {
    return Buffer.from(str).toString('base64');
  },
  decode: function decode(str) {
    return Buffer.from(str, 'base64').toString('ascii');
  }
};
var _default = encryption;
exports["default"] = _default;