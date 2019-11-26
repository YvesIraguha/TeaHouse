import express from "express";
import IndividualPieceController from "../controllers/individualPieces";
import asyncHandler from "../middlewarres/handleAsync";
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
  .post(
    "/",
    validateIndividualPiece,
    checkAdmin,
    asyncHandler(IndividualPieceController.create)
  )
  .get(
    "/:id",
    validateParamsId,
    asyncHandler(IndividualPieceController.fetchOnePiece)
  )
  .put(
    "/:id",
    validateParamsId,
    validatePieceUpdate,
    checkAdmin,
    asyncHandler(IndividualPieceController.updateOnePiece)
  )
  .delete(
    "/:id",
    validateParamsId,
    checkAdmin,
    asyncHandler(IndividualPieceController.deleteOnePiece)
  )
  .get(
    "/",
    validatePages,
    validatePieceType,
    asyncHandler(IndividualPieceController.getAll)
  );

export default router;
