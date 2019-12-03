import express from "express";
import asyncHandler from "../middlewarres/handleAsync";
import ResetPassword from "../controllers/users";
import checkAllowedMethod from "../middlewarres/allowedMethod";
import { validateEmail, validatePassword } from "../middlewarres/users";
import { checkToken } from "../middlewarres/checkAuth";

const userRouter = express.Router();

userRouter
  .route("/reset-password")
  .post(validateEmail, asyncHandler(ResetPassword.createToken))
  .all(checkAllowedMethod);
userRouter
  .route("/reset-password/:token")
  .put(validatePassword, checkToken, asyncHandler(ResetPassword.updatePassword))
  .all(checkAllowedMethod);

export default userRouter;
