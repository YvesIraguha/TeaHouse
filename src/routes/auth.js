import express from "express";
import LoginController from "../controllers/auth";
import handleAsync from "../middlewarres/handleAsync";
import checkAllowedMethod from "../middlewarres/allowedMethod";
import { validateEmail, validatePassword } from "../middlewarres/users";

const router = express.Router();

router
  .route("/login")
  .post(validatePassword, validateEmail, handleAsync(LoginController.login))
  .all(checkAllowedMethod);

export default router;
