import express from "express";
import { userSignup } from "../controllers/usersControllers.js";
import { signupValidator } from "../middlewares/signupValidationMiddleware.js";

const router = express.Router();

router.post("/signup", signupValidator, userSignup);

export default router;
