import express from "express";
import asyncHandler from "../middlewarres/handleAsync";
import ResetPassword from "../controllers/users";
import { validateEmail, validatePassword } from "../middlewarres/users";
import { checkToken } from "../middlewarres/checkAuth";

const userRouter = express.Router();

userRouter
  .post("/reset-password", validateEmail, asyncHandler(ResetPassword.createToken))
  .put(
    "/reset-password/:token",
    validatePassword,
    checkToken,
    asyncHandler(ResetPassword.updatePassword)
  );

export default userRouter;
