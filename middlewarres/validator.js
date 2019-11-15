import Joi from "joi";

export const validateLogin = (req, res, next) => {
  const schema = Joi.object().keys({
    password: Joi.string()
      .regex(/^[a-zA-Z0-9!@#$%^&*()]{3,30}$/)
      .required(),
    email: Joi.string()
      .email()
      .required()
  });

  const {
    body: { email, password }
  } = req;
  const { error } = Joi.validate({ password, email }, schema);

  if (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};

export const validateIndividualPiece = (req, res, next) => {
  const schema = Joi.object().keys({
    title: Joi.string()
      .min(14)
      .required(),
    author: Joi.string()
      .min(4)
      .required(),
    body: Joi.string()
      .min(100)
      .required(),
    type: Joi.string()
      .valid("Short story", "Poem")
      .required()
  });
  const { body } = req;
  const { error } = Joi.validate(body, schema);

  if (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};

export const validatePieceUpdate = (req, res, next) => {
  const schema = Joi.object().keys({
    title: Joi.string().min(10),
    author: Joi.string().min(4),
    body: Joi.string().min(100),
    type: Joi.string().valid("Short story", "Poem")
  });
  const { body } = req;
  const { error } = Joi.validate(body, schema);

  if (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};

export const validateParamsId = (req, res, next) => {
  const schema = Joi.object().keys({
    id: Joi.string().uuid()
  });
  const { id } = req.params;
  const { error } = Joi.validate({ id }, schema);

  if (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};
