"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../../models"));

var _individualPiece = require("../helpers/individualPiece");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Piece = _models["default"].Piece;

var IndividualPieceController =
/*#__PURE__*/
function () {
  function IndividualPieceController() {
    (0, _classCallCheck2["default"])(this, IndividualPieceController);
  }

  (0, _createClass2["default"])(IndividualPieceController, null, [{
    key: "create",
    value: async function create(req, res) {
      var body = req.body;
      var userId = req.user.id;
      var slug = (0, _individualPiece.generateSlug)(body.title);
      var createdPiece = await Piece.create(_objectSpread({}, body, {
        userId: userId,
        slug: slug
      }));
      res.status(201).send({
        message: "Resource created successfully",
        individualPiece: createdPiece
      });
    }
  }, {
    key: "fetchOnePiece",
    value: async function fetchOnePiece(req, res) {
      var id = req.params.id;
      var piece = await Piece.findOne({
        where: {
          id: id
        }
      });

      if (piece) {
        res.status(200).send({
          message: "Resource retrieved successfully",
          individualPiece: piece
        });
      } else {
        res.status(404).send({
          error: "Resource does not exist"
        });
      }
    }
  }, {
    key: "deleteOnePiece",
    value: async function deleteOnePiece(req, res) {
      var id = req.params.id;
      var deletedPiece = await Piece.destroy({
        where: {
          id: id
        }
      });

      if (deletedPiece) {
        res.status(200).send({
          message: "Resource deleted successfully"
        });
      } else {
        res.status(404).send({
          error: "Resource does not exist"
        });
      }
    }
  }, {
    key: "updateOnePiece",
    value: async function updateOnePiece(req, res) {
      var id = req.params.id;
      var body = req.body;
      var updatedPiece = await Piece.update(_objectSpread({}, body), {
        where: {
          id: id
        },
        returning: true
      });

      if (updatedPiece[0]) {
        res.status(200).send({
          message: "Resource updated successfully",
          individualPiece: updatedPiece[1][0]
        });
      } else {
        res.status(404).send({
          error: "Resource does not exist"
        });
      }
    }
  }, {
    key: "getAll",
    value: async function getAll(req, res) {
      var _req$query = req.query,
          page = _req$query.page,
          type = _req$query.type;
      var individualPieces = await Piece.findAll({
        where: {
          type: type
        },
        offset: (page - 1) * 6,
        limit: 6
      });

      if (individualPieces.length) {
        return res.status(200).send({
          message: "Data retrieved successfully",
          individualPieces: individualPieces
        });
      }

      res.status(404).send({
        error: "Data not found"
      });
    }
  }]);
  return IndividualPieceController;
}();

var _default = IndividualPieceController;
exports["default"] = _default;
//# sourceMappingURL=individualPieces.js.map