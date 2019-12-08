"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../controllers/auth"));

var _handleAsync = _interopRequireDefault(require("../middlewarres/handleAsync"));

var _allowedMethod = _interopRequireDefault(require("../middlewarres/allowedMethod"));

var _users = require("../middlewarres/users");

var router = _express["default"].Router();

router.route("/login").post(_users.validatePassword, _users.validateEmail, (0, _handleAsync["default"])(_auth["default"].login)).all(_allowedMethod["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=auth.js.map