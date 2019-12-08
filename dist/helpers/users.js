"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPasswordToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var SECRET_KEY = process.env.SECRET_KEY;

var resetPasswordToken = async function resetPasswordToken(email) {
  try {
    var token = await _jsonwebtoken["default"].sign({
      email: email
    }, SECRET_KEY, {
      algorithm: "HS256",
      expiresIn: "1h"
    });
    return token;
  } catch (error) {
    throw new Error("Something went wrong while creating a token");
  }
};

exports.resetPasswordToken = resetPasswordToken;
//# sourceMappingURL=users.js.map