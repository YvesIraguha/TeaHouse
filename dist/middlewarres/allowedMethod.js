"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(req, res) {
  res.status(405).send({
    error: "Method not allowed"
  });
};

exports["default"] = _default;
//# sourceMappingURL=allowedMethod.js.map