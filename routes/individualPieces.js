import express from "express";
import IndividualPieceController from "../controllers/individualPieces";
import asyncHandler from "../middlewarres/handleAsync";
import checkAllowedMethod from "../middlewarres/allowedMethod";
import { checkAdmin } from "../middlewarres/checkAuth";
import {
  validateIndividualPiece,
  validatePieceUpdate,
  validatePages,
  validatePieceType,
  validateParamsId
} from "../middlewarres/validator";

const router = express.Router();

router
  .route("/")
  .post(
    validateIndividualPiece,
    checkAdmin,
    asyncHandler(IndividualPieceController.create)
  )
  .get(
    validatePages,
    validatePieceType,
    asyncHandler(IndividualPieceController.getAll)
  )
  .all(checkAllowedMethod);

router
  .route("/:id")
  .get(validateParamsId, asyncHandler(IndividualPieceController.fetchOnePiece))
  .put(
    validateParamsId,
    validatePieceUpdate,
    checkAdmin,
    asyncHandler(IndividualPieceController.updateOnePiece)
  )
  .delete(
    validateParamsId,
    checkAdmin,
    asyncHandler(IndividualPieceController.deleteOnePiece)
  )
  .all(checkAllowedMethod);

export default router;
