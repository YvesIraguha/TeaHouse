import express from "express";
import LoginController from "../controllers/auth";
import handleAsync from "../middlewarres/handlAsync";
import { validateLogin } from '../middlewarres/validator'

const router = express.Router();

router.post("/login", validateLogin, handleAsync(LoginController.login));

export default router;
