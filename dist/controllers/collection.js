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

var _uploadFileCloudinary = require("../helpers/uploadFileCloudinary");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Collection = _models["default"].Collection;

var CollectionController =
/*#__PURE__*/
function () {
  function CollectionController() {
    (0, _classCallCheck2["default"])(this, CollectionController);
  }

  (0, _createClass2["default"])(CollectionController, null, [{
    key: "create",
    value: async function create(req, res) {
      var _req$body = req.body,
          type = _req$body.type,
          title = _req$body.title,
          author = _req$body.author;
      var userId = req.user.id;
      var files = req.files;
      var file = files.file,
          previewImage = files.previewImage;
      var result = await Promise.all([await (0, _uploadFileCloudinary.uploadFile)(file[0]), await (0, _uploadFileCloudinary.uploadFile)(previewImage[0])]);
      var cloudinaryOutput = (0, _uploadFileCloudinary.extractCloudinaryOutput)(result);
      var createdCollection = await Collection.create(_objectSpread({
        type: type,
        title: title,
        author: author
      }, cloudinaryOutput, {
        userId: userId
      }));
      res.status(201).send({
        message: "Collection uploaded successfully",
        createdCollection: createdCollection
      });
    }
  }, {
    key: "fetchOne",
    value: async function fetchOne(req, res) {
      var id = req.params.id;
      var collection = await Collection.findOne({
        where: {
          id: id
        }
      });

      if (collection) {
        res.status(200).send({
          message: "Resource retrieved successfully",
          collection: collection
        });
      } else {
        res.status(404).send({
          error: "Collection not found"
        });
      }
    }
  }, {
    key: "deleteOne",
    value: async function deleteOne(req, res) {
      var id = req.params.id;
      var _req$collection = req.collection,
          previewPublicId = _req$collection.previewPublicId,
          collectionPublicId = _req$collection.collectionPublicId;
      var result = await Promise.all([await (0, _uploadFileCloudinary.deleteFile)(previewPublicId), await (0, _uploadFileCloudinary.deleteFile)(collectionPublicId)]);

      if (result) {
        var deletedCollection = await Collection.destroy({
          where: {
            id: id
          }
        });

        if (deletedCollection) {
          res.status(200).send({
            message: "Collection deleted successfully"
          });
        } else {
          res.status(404).send({
            error: "Collection does not exist",
            result: result
          });
        }
      } else {
        res.status(404).send({
          error: "Collection does not exist"
        });
      }
    }
  }, {
    key: "updateCollection",
    value: async function updateCollection(req, res) {
      var id = req.params.id;
      var body = req.body;
      var updatedCollection = await Collection.update(_objectSpread({}, body), {
        where: {
          id: id
        },
        returning: true
      });

      if (updatedCollection[0]) {
        res.status(200).send({
          message: "Collection updated successfully",
          collection: updatedCollection[1][0]
        });
      } else {
        res.status(404).send({
          error: "Collection does not exist"
        });
      }
    }
  }, {
    key: "getAll",
    value: async function getAll(req, res) {
      var _req$query = req.query,
          page = _req$query.page,
          type = _req$query.type;
      var collections = await Collection.findAll({
        where: {
          type: type
        },
        offset: (page - 1) * 10,
        limit: 10
      });

      if (collections.length) {
        res.status(200).send({
          message: "Data retrieved successfully",
          collections: collections
        });
      } else {
        res.status(404).send({
          error: "Data not found"
        });
      }
    }
  }]);
  return CollectionController;
}();

var _default = CollectionController;
exports["default"] = _default;
//# sourceMappingURL=collection.js.map