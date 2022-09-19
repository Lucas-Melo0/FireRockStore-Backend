import { orderValidation } from "../validators.js";

const orderValidator = (req, res, next) => {
  const { error } = orderValidation(req.body);
  if (error) return res.sendStatus(400);
  next();
};

export { orderValidator };
