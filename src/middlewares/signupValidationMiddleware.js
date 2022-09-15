import { signupValidation } from "../validators.js";

const signupValidator = (req, res, next) => {
  const { error } = signupValidation(req.body);
  if (error) {
    return res.sendStatus(400);
  }
  next();
};

export { signupValidator };
