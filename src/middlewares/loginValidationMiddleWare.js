import { signinValidation } from "../validators.js";

const loginValidator = (req, res, next) => {
  const { error } = signinValidation(req.body);
  if (error) {
    return res.sendStatus(400);
  }
  next();
};

export { loginValidator };
