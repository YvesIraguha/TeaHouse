import express from "express";
import LoginController from "../controllers/auth";
import handleAsync from "../middlewarres/handleAsync";
import { validateEmail, validatePassword } from "../middlewarres/users";

const router = express.Router();

router.post(
  "/login",
  validatePassword,
  validateEmail,
  handleAsync(LoginController.login)
);

export default router;
