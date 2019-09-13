"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chance = _interopRequireDefault(require("chance"));

var chance = new _chance["default"]();
var random = {
  uuid: function uuid() {
    return chance.guid();
  }
};
var _default = random;
exports["default"] = _default;