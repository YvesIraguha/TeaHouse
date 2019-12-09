"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _handleAsync = _interopRequireDefault(require("../middlewarres/handleAsync"));

var _users = _interopRequireDefault(require("../controllers/users"));

var _allowedMethod = _interopRequireDefault(require("../middlewarres/allowedMethod"));

var _users2 = require("../middlewarres/users");

var _checkAuth = require("../middlewarres/checkAuth");

var userRouter = _express["default"].Router();

userRouter.route("/reset-password").post(_users2.validateEmail, (0, _handleAsync["default"])(_users["default"].createToken)).all(_allowedMethod["default"]);
userRouter.route("/reset-password/:token").put(_users2.validatePassword, _checkAuth.checkToken, (0, _handleAsync["default"])(_users["default"].updatePassword)).all(_allowedMethod["default"]);
var _default = userRouter;
exports["default"] = _default;
//# sourceMappingURL=users.js.map