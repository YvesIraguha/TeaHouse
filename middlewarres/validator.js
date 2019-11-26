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
    type: Joi.string()
      .valid("Short story", "Poem")
      .required(),
    title: Joi.string()
      .min(14)
      .required(),
    author: Joi.string()
      .min(4)
      .required(),
    body: Joi.string()
      .min(100)
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

export const validateCollection = (req, res, next) => {
  const schema = Joi.object().keys({
    type: Joi.string()
      .valid("Book series", "images")
      .required(),
    title: Joi.string()
      .min(5)
      .required(),
    author: Joi.string()
      .min(4)
      .required(),
    files: Joi.object({
      file: Joi.array().required(),
      previewImage: Joi.array().required()
    }).required()
  });
  const { body } = req;
  const { files } = req;
  const { error } = Joi.validate({ ...body, files }, schema);
  if (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};

export const validateCollectionUpdate = (req, res, next) => {
  const schema = Joi.object().keys({
    title: Joi.string().min(10),
    author: Joi.string().min(4),
    files: Joi.object({
      file: Joi.array(),
      previewImage: Joi.array()
    }),
    type: Joi.string().valid("Book series", "images")
  });
  const { body } = req;
  const { files } = req;
  const { error } = Joi.validate({ ...body, files }, schema);
  if (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};

export const validatePages = (req, res, next) => {
  const schema = Joi.object().keys({
    page: Joi.number()
      .integer()
      .positive()
      .min(1)
      .required()
  });
  const { page } = req.query;
  const { error } = Joi.validate({ page }, schema);
  if (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};

export const validatePieceType = (req, res, next) => {
  const schema = Joi.object().keys({
    type: Joi.string()
      .valid("Short story", "Poem")
      .required()
  });
  const { type } = req.query;
  const { error } = Joi.validate({ type }, schema);
  if (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};

export const validateCollectionType = (req, res, next) => {
  const schema = Joi.object().keys({
    type: Joi.string()
      .valid("Book series", "images")
      .required()
  });
  const { type } = req.query;
  const { error } = Joi.validate({ type }, schema);
  if (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};
