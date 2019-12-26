import Joi from "joi";

export const validateIndividualPiece = (req, res, next) => {
  const schema = Joi.object().keys({
    type: Joi.string()
      .valid("Short story", "Poem")
      .required(),
    title: Joi.string()
      .min(14)
      .trim()
      .required(),
    author: Joi.string()
      .min(4)
      .trim()
      .required(),
    body: Joi.string()
      .min(100)
      .trim()
      .required()
  });
  const { body } = req;
  const { error } = Joi.validate(body, schema);

  if (error) {
    return res.status(400).send({ error: error.message });
  }
  next();
};

export const validatePieceUpdate = (req, res, next) => {
  const schema = Joi.object().keys({
    title: Joi.string()
      .min(10)
      .trim(),
    author: Joi.string()
      .min(4)
      .trim(),
    body: Joi.string()
      .min(100)
      .trim(),
    type: Joi.string().valid("Short story", "Poem")
  });
  const { body } = req;
  const { error } = Joi.validate(body, schema);

  if (error) {
    return res.status(400).send({ error: error.message });
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
    return res.status(400).send({ error: error.message });
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
      .trim()
      .required(),
    author: Joi.string()
      .min(4)
      .trim()
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
    return res.status(400).send({ error: error.message });
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
    return res.status(400).send({ error: error.message });
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
    return res.status(400).send({ error: error.message });
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
    return res.status(400).send({ error: error.message });
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
    return res.status(400).send({ error: error.message });
  }
  next();
};

export const validateSubmission = (req, res, next) => {
  const schema = Joi.object().keys({
    type: Joi.string()
      .valid("Book series", "images", "Short story", "Poem")
      .required(),
    fullName: Joi.string()
      .min(4)
      .trim()
      .required(),
    email: Joi.string()
      .email()
      .required(),
    files: Joi.object({
      file: Joi.array().required()
    }).required()
  });
  const { body } = req;
  const { files } = req;
  const { error } = Joi.validate({ ...body, files }, schema);
  if (error) {
    return res.status(400).send({ error: error.message });
  }
  next();
};
