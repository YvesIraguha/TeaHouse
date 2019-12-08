"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _individualPieces = _interopRequireDefault(require("./routes/individualPieces"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _collections = _interopRequireDefault(require("./routes/collections"));

var _users = _interopRequireDefault(require("./routes/users"));

var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use("/api/v1/individual-pieces", _individualPieces["default"]);
app.use("/api/v1/auth", _auth["default"]);
app.use("/api/v1/collections", _collections["default"]);
app.use("/api/v1/users", _users["default"]); // eslint-disable-next-line no-unused-vars

app.use(function (req, res, next) {
  res.status(404).send({
    error: "Page not found"
  });
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map