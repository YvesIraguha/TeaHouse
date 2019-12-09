import express from "express";
import multer from "multer";
import Collection from "../controllers/collection";
import asyncHandler from "../middlewarres/handleAsync";
import checkAllowedMethod from "../middlewarres/allowedMethod";
import { checkAdmin } from "../middlewarres/checkAuth";
import {
  validateParamsId,
  validatePages,
  validateCollectionType,
  validateCollection,
  validateCollectionUpdate
} from "../middlewarres/validator";
import { checkCollectionPresence } from "../middlewarres/collection";

const router = express.Router();
const upload = multer();

router
  .route("/")
  .post(
    upload.fields([{ name: "file" }, { name: "previewImage" }]),
    validateCollection,
    checkAdmin,
    asyncHandler(Collection.create)
  )
  .get(validatePages, validateCollectionType, asyncHandler(Collection.getAll))
  .all(checkAllowedMethod);

router
  .route("/:id")
  .get(validateParamsId, asyncHandler(Collection.fetchOne))
  .delete(
    validateParamsId,
    checkAdmin,
    asyncHandler(checkCollectionPresence),
    asyncHandler(Collection.deleteOne)
  )
  .put(
    validateParamsId,
    validateCollectionUpdate,
    checkAdmin,
    asyncHandler(Collection.updateCollection)
  )

  .all(checkAllowedMethod);

export default router;
