const Joi = require('joi')

module.exports = {
  add: Joi.object({
    slug: Joi.string().required().max(50).uri(),
    title: Joi.string().required().max(50),
    thumbnail: Joi.string().uri().max(50).default('thumbnail.default.png'),
    description: Joi.string().max(300)
  })
}

/*module.exports = {
  signUpSchema: {
    username: Joi.string().required().alphanum(),
    password: Joi.string().required().regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,30}/),
    email: Joi.string().required().email()
  },

  signInSchema: Joi.object().keys({
    password: Joi.string().required(),
    username: Joi.string().alphanum(),
    email: Joi.string().email()
  }).or('username', 'email'),

  updateProfile: Joi.object().keys({
    password: Joi.string().required(),
    username: Joi.string().alphanum(),
    email: Joi.string().email(),
    avatar: Joi.string().uri()
  })
}*/