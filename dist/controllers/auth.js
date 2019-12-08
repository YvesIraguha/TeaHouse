"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../../models"));

var _auth = require("../helpers/auth");

var User = _models["default"].User;

var LoginController =
/*#__PURE__*/
function () {
  function LoginController() {
    (0, _classCallCheck2["default"])(this, LoginController);
  }

  (0, _createClass2["default"])(LoginController, null, [{
    key: "login",
    value: async function login(req, res) {
      var _req$body = req.body,
          email = _req$body.email,
          password = _req$body.password;
      var user = await User.findOne({
        where: {
          email: email
        }
      });

      if (user) {
        var comparedPassword = await (0, _auth.comparePasswords)(password, user.password);

        if (comparedPassword) {
          var token = await (0, _auth.createJwtToken)(user);
          res.status(200).send({
            message: "Logged in successfully",
            token: token
          });
        } else {
          res.status(400).send({
            error: "Invalid credentials"
          });
        }
      } else {
        res.status(404).send({
          error: "Invalid credentials"
        });
      }
    }
  }]);
  return LoginController;
}();

var _default = LoginController;
exports["default"] = _default;
//# sourceMappingURL=auth.js.map