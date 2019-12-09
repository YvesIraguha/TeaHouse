"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var asyncHandler = function asyncHandler(cb) {
  return async function (req, res, next) {
    try {
      await cb(req, res, next);
    } catch (error) {
      return res.status(500).send({
        error: "Something went wrong on the server"
      });
    }
  };
};

var _default = asyncHandler;
exports["default"] = _default;
//# sourceMappingURL=handleAsync.js.map