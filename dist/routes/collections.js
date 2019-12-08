"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _collection = _interopRequireDefault(require("../controllers/collection"));

var _handleAsync = _interopRequireDefault(require("../middlewarres/handleAsync"));

var _allowedMethod = _interopRequireDefault(require("../middlewarres/allowedMethod"));

var _checkAuth = require("../middlewarres/checkAuth");

var _validator = require("../middlewarres/validator");

var _collection2 = require("../middlewarres/collection");

var router = _express["default"].Router();

var upload = (0, _multer["default"])();
router.route("/").post(upload.fields([{
  name: "file"
}, {
  name: "previewImage"
}]), _validator.validateCollection, _checkAuth.checkAdmin, (0, _handleAsync["default"])(_collection["default"].create)).get(_validator.validatePages, _validator.validateCollectionType, (0, _handleAsync["default"])(_collection["default"].getAll)).all(_allowedMethod["default"]);
router.route("/:id").get(_validator.validateParamsId, (0, _handleAsync["default"])(_collection["default"].fetchOne))["delete"](_validator.validateParamsId, _checkAuth.checkAdmin, (0, _handleAsync["default"])(_collection2.checkCollectionPresence), (0, _handleAsync["default"])(_collection["default"].deleteOne)).put(_validator.validateParamsId, _validator.validateCollectionUpdate, _checkAuth.checkAdmin, (0, _handleAsync["default"])(_collection["default"].updateCollection)).all(_allowedMethod["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=collections.js.map