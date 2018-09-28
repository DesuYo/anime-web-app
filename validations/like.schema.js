const Joi = require('joi')

module.exports = {
  getList: Joi.object({
    ownerId: Joi.number().min(1).integer().default(1),
    commentId: Joi.number().min(1).integer().default(1)
  })
}