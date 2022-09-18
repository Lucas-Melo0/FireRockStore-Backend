import express from "express";
import {
  listHomePageProducts,
  productInsertion,
  showProductList,
} from "../controllers/productsControllers.js";
import { userLogin, userSignup } from "../controllers/usersControllers.js";
import { signupValidator } from "../middlewares/signupValidationMiddleware.js";
import { loginValidator } from "../middlewares/loginValidationMiddleWare.js";
import { productValidator } from "../middlewares/productsValidationMiddleware.js";

const router = express.Router();

router.post("/signup", signupValidator, userSignup);
router.post("/login", loginValidator, userLogin);
router.post("/", productValidator, productInsertion);
router.get("/", listHomePageProducts);
router.get("/productlist", showProductList);

export default router;
