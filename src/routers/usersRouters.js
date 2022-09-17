import express from "express";
import {
  listHomePageProducts,
  productInsertion,
} from "../controllers/productsControllers.js";
import { userLogin, userSignup } from "../controllers/usersControllers.js";
import { signupValidator } from "../middlewares/signupValidationMiddleware.js";
import { loginValidator } from "../middlewares/loginValidationMiddleWare.js";
import { productValidator } from "../middlewares/productsValidationMiddleware.js";

const router = express.Router();

router.post("/signup", signupValidator, userSignup);
router.post("/login", loginValidator, userLogin);
router.get("/", listHomePageProducts);
router.post("/", productValidator, productInsertion);

export default router;
