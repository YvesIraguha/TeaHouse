"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkUserType = exports.comparePasswords = exports.hashPassword = exports.decodeToken = exports.createJwtToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _models = _interopRequireDefault(require("../../models"));

var User = _models["default"].User;
var secretKey = process.env.SECRET_KEY;

var createJwtPayload = function createJwtPayload(_ref) {
  var email = _ref.email,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      id = _ref.id;
  return {
    email: email,
    firstName: firstName,
    lastName: lastName,
    id: id
  };
};

var createJwtToken = async function createJwtToken(user) {
  try {
    var payload = createJwtPayload(user);
    var token = await _jsonwebtoken["default"].sign(payload, secretKey, {
      algorithm: "HS256"
    });
    return token;
  } catch (error) {
    throw new Error("Something went wrong while creating a token");
  }
};

exports.createJwtToken = createJwtToken;

var decodeToken = async function decodeToken(token) {
  try {
    var payload = await _jsonwebtoken["default"].verify(token, secretKey);
    return payload;
  } catch (error) {
    throw new Error("Invalid token provided");
  }
};

exports.decodeToken = decodeToken;

var hashPassword = async function hashPassword(password) {
  try {
    var hashedPassword = await _bcrypt["default"].hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw new Error("Unable to create a hashed password");
  }
};

exports.hashPassword = hashPassword;

var comparePasswords = async function comparePasswords(password, hashedPassword) {
  try {
    var matchingPassword = await _bcrypt["default"].compare(password, hashedPassword);
    return matchingPassword;
  } catch (error) {
    throw new Error("Passwords comparison failed");
  }
};

exports.comparePasswords = comparePasswords;

var checkUserType = async function checkUserType(email) {
  try {
    var user = await User.findOne({
      where: {
        email: email
      }
    });
    return user;
  } catch (error) {
    throw new Error("Unable to retrieve a user");
  }
};

exports.checkUserType = checkUserType;
//# sourceMappingURL=auth.js.map