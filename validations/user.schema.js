const Joi = require('joi');

module.exports = {
  addUser: Joi.object({
    username: Joi.string().required().max(15).alphanum(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(4).max(30)
  })
}