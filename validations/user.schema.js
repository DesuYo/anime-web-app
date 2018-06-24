const Joi = require('joi')

module.exports = {
  signUp: Joi.object({
    username: Joi.string().required().max(15).alphanum(),
    email: Joi.string().required().email(),
    password: Joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,30}$/)
  })
}