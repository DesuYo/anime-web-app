const User = require('../models/user.model')
const Joi = require('joi')
const userValidator = require('../validations/user.schema')

module.exports = {
  async signUp (req, res) {
    try {
      const { email, username, password } = req.body

      const createdUser = new User({
        email,
        username,
        password
      })
      await createdUser.save()

      return res.status(201).json({
        message: 'User was saved successfully'
      })
    }
    catch (err) {
      return res.status(500).json({
        message: err.message
      })
    }
  }
}