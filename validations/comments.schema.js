const Joi = require('joi')

const Like = Joi.object({
  owner: Joi.string().required().alphanum()
})

module.exports = {
  addComment: Joi.object({
    text: Joi.string().required().max(300),
    author: Joi.string().required().alphanum()
  }),

  updateComment: Joi.object({
    text: Joi.string().max(300),
    asd: Joi.object().type(),
    liked: Joi.number().integer().min()
  })
}

