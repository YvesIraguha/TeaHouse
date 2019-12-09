"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateSlug = void 0;

var _slug = _interopRequireDefault(require("slug"));

var generateSlug = function generateSlug(title) {
  return (0, _slug["default"])(title).toLowerCase();
};

exports.generateSlug = generateSlug;
//# sourceMappingURL=individualPiece.js.map