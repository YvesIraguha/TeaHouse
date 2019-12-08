"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _app = _interopRequireDefault(require("./app"));

_dotenv["default"].config();

var PORT = process.env.PORT || 3000; // eslint-disable-next-line no-console

_app["default"].listen(PORT, function () {
  return console.log("App listening on 3000");
});
//# sourceMappingURL=index.js.map