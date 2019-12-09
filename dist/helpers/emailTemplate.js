"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var emailTemplate = function emailTemplate(firstName, resetLink) {
  return "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n    <title>Reset password</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        outline: 0;\n        font-size: 100%;\n        vertical-align: baseline;\n        background: transparent;\n      }\n      .row1 {\n        min-height: 80px;\n        background-color: hsl(19, 97%, 23%);\n        vertical-align: middle;\n      }\n      .row1 p {\n        line-height: 80px;\n        font-size: 25px;\n        font-weight: 400;\n        color: #ffffff;\n        margin-left: 10%;\n      }\n      .row2 {\n        width: 60%;\n        min-width: 400px;\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 10%;\n        margin-bottom: 5%;\n      }\n\n      .row2 p {\n        color: #707070;\n        font-size: larger;\n      }\n\n      .row4 {\n        background-color: rgb(67, 35, 209);\n        text-align: center;\n        width: 22%;\n        margin-top: 5%;\n        min-width: 200px;\n        height: 45px;\n        margin-left: auto;\n        margin-right: auto;\n        border-radius: 8px;\n      }\n      .row4 a {\n        line-height: 43px;\n        color: #ffffff;\n        text-decoration: none;\n        font-size: 20px;\n      }\n\n      #firstName{\n        margin-bottom:15px;\n      }\n    </style>\n  </head>\n  <body>\n    <header class=\"row1\">\n      <p>\n        TEAHOUSE\n      </p>\n    </header>\n    <div class=\"row2\">\n      <p id=\"firstName\">Hey ".concat(firstName, "</p>\n      <p>\n        You have requested to reset password, please click the button below to reset\n        password. If you did not request this action, let us know at\n        yves.iraguha@gmail.com\n      </p>\n    </div>\n    <div class=\"row4\">\n      <a href=\"").concat(resetLink, "\" target=\"_blank\">Reset password</a>\n    </div>\n  </body>\n</html>\n\n");
};

var _default = emailTemplate;
exports["default"] = _default;
//# sourceMappingURL=emailTemplate.js.map