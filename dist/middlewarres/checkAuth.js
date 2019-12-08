"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkToken = exports.checkAdmin = void 0;

var _auth = require("../helpers/auth");

var checkAdmin = async function checkAdmin(req, res, next) {
  try {
    var authorization = req.headers.authorization;

    if (authorization) {
      var token = req.headers.authorization.split(" ")[1];
      var user = await (0, _auth.decodeToken)(token);
      var type = await (0, _auth.checkUserType)(user.email);

      if (type.role === "Admin") {
        req.user = user;
        next();
      } else {
        return res.status(403).send({
          error: "You have to be an admin to perform this action"
        });
      }
    } else {
      throw new Error("Provide a valid token to carry out this action");
    }
  } catch (error) {
    res.status(401).send({
      error: error.message,
      status: 401
    });
  }
};

exports.checkAdmin = checkAdmin;

var checkToken = async function checkToken(req, res, next) {
  try {
    var token = req.params.token;
    var decodedToken = await (0, _auth.decodeToken)(token);
    var user = await (0, _auth.checkUserType)(decodedToken.email);

    if (token === user.resetToken) {
      req.user = user;
      next();
    } else {
      res.status(403).send({
        error: "Access denied",
        status: 403
      });
    }
  } catch (error) {
    res.status(401).send({
      error: "Unable to updated password",
      status: 401
    });
  }
};

exports.checkToken = checkToken;
//# sourceMappingURL=checkAuth.js.map