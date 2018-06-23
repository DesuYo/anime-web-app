const Joi = require('joi')

module.exports = {
  addAnime: Joi.object({
<<<<<<< HEAD
    title: Joi.string().required().max(30),
    votes
    rating: Joi.number().min(1).max(10),
    thumbnail: Joi.string().uri().max(100).default('thumbnail.default.png'),
    description: Joi.string().max(300)
=======
    title: Joi.string().required().max(30).alphanum(),
    rating: 0
>>>>>>> 52b674f9e439d0ee6c72e802750bd5a9c86870ad
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