import express from "express";
import {
  listHomePageProducts,
  productInsertion,
  showProductList,
} from "../controllers/productsControllers.js";
import {
  orderDetails,
  userLogin,
  userSignup,
} from "../controllers/usersControllers.js";
import { signupValidator } from "../middlewares/signupValidationMiddleware.js";
import { loginValidator } from "../middlewares/loginValidationMiddleWare.js";
import { orderValidator } from "../middlewares/orderValidatorMiddleware.js";

const router = express.Router();

router.post("/signup", signupValidator, userSignup);
router.post("/login", loginValidator, userLogin);
router.post("/", productInsertion);
router.get("/", listHomePageProducts);
router.get("/productlist", showProductList);
router.post("/order", orderValidator, orderDetails);

export default router;
