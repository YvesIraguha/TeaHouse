import express from "express";
import multer from "multer";
import asyncHandler from "../middlewarres/handleAsync";
import ResetPassword from "../controllers/users";
import checkAllowedMethod from "../middlewarres/allowedMethod";
import { validateEmail, validatePassword } from "../middlewarres/users";
import { checkToken } from "../middlewarres/checkAuth";
import Submission from "../controllers/submission";

const userRouter = express.Router();
const upload = multer();
userRouter
  .route("/reset-password")
  .post(validateEmail, asyncHandler(ResetPassword.createToken))
  .all(checkAllowedMethod);
userRouter
  .route("/reset-password/:token")
  .put(validatePassword, checkToken, asyncHandler(ResetPassword.updatePassword))
  .all(checkAllowedMethod);
userRouter
  .route("/submission")
  .post(upload.fields([{ name: "file" }]), asyncHandler(Submission.submitWork))
  .all(checkAllowedMethod);

export default userRouter;
