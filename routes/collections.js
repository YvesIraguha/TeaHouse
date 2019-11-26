import express from "express";
import multer from "multer";
import Collection from "../controllers/collection";
import asyncHandler from "../middlewarres/handleAsync";
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
  .post(
    "/",
    upload.fields([{ name: "file" }, { name: "previewImage" }]),
    validateCollection,
    checkAdmin,
    asyncHandler(Collection.create)
  )
  .get("/:id", validateParamsId, asyncHandler(Collection.fetchOne))
  .delete(
    "/:id",
    validateParamsId,
    checkAdmin,
    asyncHandler(checkCollectionPresence),
    asyncHandler(Collection.deleteOne)
  )
  .put(
    "/:id",
    validateParamsId,
    validateCollectionUpdate,
    checkAdmin,
    asyncHandler(Collection.updateCollection)
  )
  .get("/", validatePages, validateCollectionType, asyncHandler(Collection.getAll));

export default router;
