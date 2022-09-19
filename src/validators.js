import Joi from "joi";
const validator = (schema) => (payload) => schema.validate(payload);

const signUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  confirmation: Joi.ref("password"),
});

const signInSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

// const productSchema = Joi.object({
//   name: Joi.string().required(),
//   price: Joi.number().required(),
//   image: Joi.string().required(),
//   id: Joi.string().required(),
//   category: Joi.string().required(),
// });

const signupValidation = validator(signUpSchema);
const signinValidation = validator(signInSchema);
//const productValidation = validator(productSchema);

export { signupValidation, signinValidation };
