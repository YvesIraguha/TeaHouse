import Joi from "joi";

export const validateEmail = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string()
      .email()
      .required()
  });
  const { email } = req.body;
  const { error } = Joi.validate({ email }, schema);
  if (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};

export const validatePassword = (req, res, next) => {
  const schema = Joi.object().keys({
    password: Joi.string()
      .regex(/^[a-zA-Z0-9!@#$%^&*()]{3,30}$/)
      .required()
  });
  const { password } = req.body;
  const { error } = Joi.validate({ password }, schema);
  if (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};
