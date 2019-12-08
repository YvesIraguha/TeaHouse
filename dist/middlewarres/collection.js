"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkCollectionPresence = void 0;

var _models = require("../../models");

var checkCollectionPresence = async function checkCollectionPresence(req, res, next) {
  var id = req.params.id;
  var collection = await _models.Collection.findOne({
    where: {
      id: id
    }
  });

  if (!collection) {
    res.status(404).send({
      error: "Collection does not exist"
    });
  } else {
    req.collection = collection;
    next();
  }
};

exports.checkCollectionPresence = checkCollectionPresence;
//# sourceMappingURL=collection.js.map