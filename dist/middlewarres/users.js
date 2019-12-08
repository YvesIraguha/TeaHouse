"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePassword = exports.validateEmail = void 0;

var _joi = _interopRequireDefault(require("joi"));

var validateEmail = function validateEmail(req, res, next) {
  var schema = _joi["default"].object().keys({
    email: _joi["default"].string().email().required()
  });

  var email = req.body.email;

  var _Joi$validate = _joi["default"].validate({
    email: email
  }, schema),
      error = _Joi$validate.error;

  if (error) {
    return res.status(400).send({
      error: error.message
    });
  }

  next();
};

exports.validateEmail = validateEmail;

var validatePassword = function validatePassword(req, res, next) {
  var schema = _joi["default"].object().keys({
    password: _joi["default"].string().regex(/^[a-zA-Z0-9!@#$%^&*()]{3,30}$/).required()
  });

  var password = req.body.password;

  var _Joi$validate2 = _joi["default"].validate({
    password: password
  }, schema),
      error = _Joi$validate2.error;

  if (error) {
    return res.status(400).send({
      error: error.message
    });
  }

  next();
};

exports.validatePassword = validatePassword;
//# sourceMappingURL=users.js.map