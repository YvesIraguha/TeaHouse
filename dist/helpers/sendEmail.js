"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendResetPasswordLink = void 0;

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

var _emailTemplate = _interopRequireDefault(require("./emailTemplate"));

var baseApi = process.env.BASE_API;

var emailContent = function emailContent(firstName, email, resetToken) {
  return {
    to: email,
    from: "iraguhaivos@gmail.com",
    subject: "Reset Password Request",
    html: (0, _emailTemplate["default"])(firstName, "".concat(baseApi + resetToken))
  };
};

var sendResetPasswordLink = async function sendResetPasswordLink(firstName, email, resetToken) {
  try {
    _mail["default"].setApiKey(process.env.SENDGRID_API_KEY);

    var sendGridResponse = await _mail["default"].send(emailContent(firstName, email, resetToken));
    return sendGridResponse;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.sendResetPasswordLink = sendResetPasswordLink;
//# sourceMappingURL=sendEmail.js.map