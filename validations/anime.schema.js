const Joi = require('joi')

module.exports = {
  addAnime: Joi.object({
    title: Joi.string().required().max(30).alphanum(),
    rating: 0
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