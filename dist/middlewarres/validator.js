"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateCollectionType = exports.validatePieceType = exports.validatePages = exports.validateCollectionUpdate = exports.validateCollection = exports.validateParamsId = exports.validatePieceUpdate = exports.validateIndividualPiece = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _joi = _interopRequireDefault(require("joi"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var validateIndividualPiece = function validateIndividualPiece(req, res, next) {
  var schema = _joi["default"].object().keys({
    type: _joi["default"].string().valid("Short story", "Poem").required(),
    title: _joi["default"].string().min(14).required(),
    author: _joi["default"].string().min(4).required(),
    body: _joi["default"].string().min(100).required()
  });

  var body = req.body;

  var _Joi$validate = _joi["default"].validate(body, schema),
      error = _Joi$validate.error;

  if (error) {
    return res.status(400).send({
      error: error.message
    });
  }

  next();
};

exports.validateIndividualPiece = validateIndividualPiece;

var validatePieceUpdate = function validatePieceUpdate(req, res, next) {
  var schema = _joi["default"].object().keys({
    title: _joi["default"].string().min(10),
    author: _joi["default"].string().min(4),
    body: _joi["default"].string().min(100),
    type: _joi["default"].string().valid("Short story", "Poem")
  });

  var body = req.body;

  var _Joi$validate2 = _joi["default"].validate(body, schema),
      error = _Joi$validate2.error;

  if (error) {
    return res.status(400).send({
      error: error.message
    });
  }

  next();
};

exports.validatePieceUpdate = validatePieceUpdate;

var validateParamsId = function validateParamsId(req, res, next) {
  var schema = _joi["default"].object().keys({
    id: _joi["default"].string().uuid()
  });

  var id = req.params.id;

  var _Joi$validate3 = _joi["default"].validate({
    id: id
  }, schema),
      error = _Joi$validate3.error;

  if (error) {
    return res.status(400).send({
      error: error.message
    });
  }

  next();
};

exports.validateParamsId = validateParamsId;

var validateCollection = function validateCollection(req, res, next) {
  var schema = _joi["default"].object().keys({
    type: _joi["default"].string().valid("Book series", "images").required(),
    title: _joi["default"].string().min(5).required(),
    author: _joi["default"].string().min(4).required(),
    files: _joi["default"].object({
      file: _joi["default"].array().required(),
      previewImage: _joi["default"].array().required()
    }).required()
  });

  var body = req.body;
  var files = req.files;

  var _Joi$validate4 = _joi["default"].validate(_objectSpread({}, body, {
    files: files
  }), schema),
      error = _Joi$validate4.error;

  if (error) {
    return res.status(400).send({
      error: error.message
    });
  }

  next();
};

exports.validateCollection = validateCollection;

var validateCollectionUpdate = function validateCollectionUpdate(req, res, next) {
  var schema = _joi["default"].object().keys({
    title: _joi["default"].string().min(10),
    author: _joi["default"].string().min(4),
    files: _joi["default"].object({
      file: _joi["default"].array(),
      previewImage: _joi["default"].array()
    }),
    type: _joi["default"].string().valid("Book series", "images")
  });

  var body = req.body;
  var files = req.files;

  var _Joi$validate5 = _joi["default"].validate(_objectSpread({}, body, {
    files: files
  }), schema),
      error = _Joi$validate5.error;

  if (error) {
    return res.status(400).send({
      error: error.message
    });
  }

  next();
};

exports.validateCollectionUpdate = validateCollectionUpdate;

var validatePages = function validatePages(req, res, next) {
  var schema = _joi["default"].object().keys({
    page: _joi["default"].number().integer().positive().min(1).required()
  });

  var page = req.query.page;

  var _Joi$validate6 = _joi["default"].validate({
    page: page
  }, schema),
      error = _Joi$validate6.error;

  if (error) {
    return res.status(400).send({
      error: error.message
    });
  }

  next();
};

exports.validatePages = validatePages;

var validatePieceType = function validatePieceType(req, res, next) {
  var schema = _joi["default"].object().keys({
    type: _joi["default"].string().valid("Short story", "Poem").required()
  });

  var type = req.query.type;

  var _Joi$validate7 = _joi["default"].validate({
    type: type
  }, schema),
      error = _Joi$validate7.error;

  if (error) {
    return res.status(400).send({
      error: error.message
    });
  }

  next();
};

exports.validatePieceType = validatePieceType;

var validateCollectionType = function validateCollectionType(req, res, next) {
  var schema = _joi["default"].object().keys({
    type: _joi["default"].string().valid("Book series", "images").required()
  });

  var type = req.query.type;

  var _Joi$validate8 = _joi["default"].validate({
    type: type
  }, schema),
      error = _Joi$validate8.error;

  if (error) {
    return res.status(400).send({
      error: error.message
    });
  }

  next();
};

exports.validateCollectionType = validateCollectionType;
//# sourceMappingURL=validator.js.map