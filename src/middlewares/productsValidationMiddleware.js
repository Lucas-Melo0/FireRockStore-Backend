import { productValidation } from "../validators.js";

const productValidator = (req, res, next) => {
  const { error } = productValidation(req.body);
  if (error) return res.sendStatus(400);
  next();
};

export { productValidator };
