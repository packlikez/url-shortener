"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _url = _interopRequireDefault(require("./models/url"));

var _path = _interopRequireDefault(require("./utils/path"));

var db = 'mongodb://mongo/test';

_mongoose["default"].connect(db).then(function () {
  return console.log("Connected to ".concat(db, "..."));
});

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.get('/url',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var urls;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _url["default"].count();

          case 3:
            urls = _context.sent;
            return _context.abrupt("return", res.json({
              count: urls
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.sendStatus(500));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post('/',
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var original, url;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            original = req.body.original;
            url = new _url["default"]({
              original: _path["default"].get(original)
            });
            _context2.next = 5;
            return url.save();

          case 5:
            return _context2.abrupt("return", res.sendStatus(200));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.sendStatus(500));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.get('/:code',
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res) {
    var code, url;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            code = req.params.code;
            _context3.next = 4;
            return _url["default"].findOne({
              "short": code
            });

          case 4:
            url = _context3.sent;

            if (url) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.sendStatus(404));

          case 7:
            res.redirect("https://".concat(url.original));
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            res.sendStatus(500);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var port = process.env.PORT || 3000;

var callback = function callback() {
  return console.log("Listening on port ".concat(port, "..."));
};

var server = app.listen(port, callback);
var _default = server;
exports["default"] = _default;