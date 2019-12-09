"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _individualPieces = _interopRequireDefault(require("../controllers/individualPieces"));

var _handleAsync = _interopRequireDefault(require("../middlewarres/handleAsync"));

var _allowedMethod = _interopRequireDefault(require("../middlewarres/allowedMethod"));

var _checkAuth = require("../middlewarres/checkAuth");

var _validator = require("../middlewarres/validator");

var router = _express["default"].Router();

router.route("/").post(_validator.validateIndividualPiece, _checkAuth.checkAdmin, (0, _handleAsync["default"])(_individualPieces["default"].create)).get(_validator.validatePages, _validator.validatePieceType, (0, _handleAsync["default"])(_individualPieces["default"].getAll)).all(_allowedMethod["default"]);
router.route("/:id").get(_validator.validateParamsId, (0, _handleAsync["default"])(_individualPieces["default"].fetchOnePiece)).put(_validator.validateParamsId, _validator.validatePieceUpdate, _checkAuth.checkAdmin, (0, _handleAsync["default"])(_individualPieces["default"].updateOnePiece))["delete"](_validator.validateParamsId, _checkAuth.checkAdmin, (0, _handleAsync["default"])(_individualPieces["default"].deleteOnePiece)).all(_allowedMethod["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=individualPieces.js.map