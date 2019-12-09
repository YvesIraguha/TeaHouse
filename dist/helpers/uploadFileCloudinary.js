"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractCloudinaryOutput = exports.deleteFile = exports.uploadFile = void 0;

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _datauri = _interopRequireDefault(require("datauri"));

var _path = _interopRequireDefault(require("path"));

var dataUri = new _datauri["default"]();

_cloudinary["default"].v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});

var processFile = function processFile(file) {
  return dataUri.format(_path["default"].extname(file.originalname).toString(), file.buffer).content;
};

var uploadFile = async function uploadFile(file) {
  try {
    var processedFile = processFile(file);
    var result = await _cloudinary["default"].v2.uploader.upload(processedFile);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.uploadFile = uploadFile;

var deleteFile = async function deleteFile(publicId) {
  try {
    var result = await _cloudinary["default"].v2.uploader.destroy(publicId);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteFile = deleteFile;

var extractCloudinaryOutput = function extractCloudinaryOutput(result) {
  var previewPublicId, collectionPublicId, previewUrl, collectionUrl; // eslint-disable-next-line array-callback-return

  result.map(function (output) {
    if (output.format === "pdf") {
      collectionPublicId = output.public_id;
      collectionUrl = output.url;
    } else {
      previewPublicId = output.public_id;
      previewUrl = output.url;
    }
  });
  return {
    previewPublicId: previewPublicId,
    collectionPublicId: collectionPublicId,
    previewUrl: previewUrl,
    collectionUrl: collectionUrl
  };
};

exports.extractCloudinaryOutput = extractCloudinaryOutput;
//# sourceMappingURL=uploadFileCloudinary.js.map