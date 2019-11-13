import Joi from 'joi';

export const validateLogin = (req, res, next) => {

  const schema = Joi.object().keys({
    password: Joi.string().regex(/^[a-zA-Z0-9!@#$%^&*()]{3,30}$/).required(),
    email: Joi.string().email().required()
  })

  const { body: { email, password } } = req
  const { error } = Joi.validate({ password, email }, schema)

  if (error) {
    return res.status(400).send({ message: error.message })
  }
  next()

}
