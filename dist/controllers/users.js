"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../../models"));

var _users = require("../helpers/users");

var _auth = require("../helpers/auth");

var _sendEmail = require("../helpers/sendEmail");

var User = _models["default"].User;

var ResetPassword =
/*#__PURE__*/
function () {
  function ResetPassword() {
    (0, _classCallCheck2["default"])(this, ResetPassword);
  }

  (0, _createClass2["default"])(ResetPassword, null, [{
    key: "createToken",
    value: async function createToken(req, res) {
      var email = req.body.email;
      var user = await User.findOne({
        where: {
          email: email
        }
      });

      if (user) {
        var token = await (0, _users.resetPasswordToken)(email);
        var userWithToken = await User.update({
          resetToken: token
        }, {
          where: {
            email: email
          },
          returning: true
        });
        var _userWithToken$1$ = userWithToken[1][0],
            id = _userWithToken$1$.id,
            resetToken = _userWithToken$1$.resetToken,
            firstName = _userWithToken$1$.firstName;
        var sendGridResponse = await (0, _sendEmail.sendResetPasswordLink)(firstName, email, resetToken);

        if (sendGridResponse.length && sendGridResponse[0].statusCode === 202) {
          res.status(201).send({
            message: "Check the email, for reset password link",
            data: {
              id: id,
              email: email,
              resetToken: resetToken
            }
          });
        } else {
          res.status(500).send({
            error: "Unable to send the email with sendgrid"
          });
        }
      } else {
        res.status(404).send({
          error: "Invalid credentials"
        });
      }
    }
  }, {
    key: "updatePassword",
    value: async function updatePassword(req, res) {
      var password = req.body.password;
      var email = req.user.email;
      var newPassword = await (0, _auth.hashPassword)(password);
      var updatedUser = await User.update({
        password: newPassword,
        resetToken: ""
      }, {
        where: {
          email: email
        },
        returning: true
      });

      if (updatedUser[0]) {
        var id = updatedUser[1][0].id;
        res.status(200).send({
          message: "Password updated successfully, please login",
          user: {
            email: email,
            id: id
          }
        });
      } else {
        res.status(404).send({
          error: "Unable to updated password"
        });
      }
    }
  }]);
  return ResetPassword;
}();

var _default = ResetPassword;
exports["default"] = _default;
//# sourceMappingURL=users.js.map