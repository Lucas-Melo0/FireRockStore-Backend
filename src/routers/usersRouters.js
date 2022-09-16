import express from "express";
import { userLogin, userSignup } from "../controllers/usersControllers.js";
import { signupValidator } from "../middlewares/signupValidationMiddleware.js";
import { loginValidator } from "../middlewares/loginValidationMiddleWare.js";

const router = express.Router();

router.post("/signup", signupValidator, userSignup);
router.post("/login", loginValidator, userLogin);

export default router;
