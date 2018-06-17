const Joi = require('joi')

module.exports = {
  validateBody (schema) {
    return (req, res, next) => {
      const { error } = Joi.validate(req.body, schema)
      if (error) {
        return res.status(400).json(error)
      }
      next()
    }
  }
}