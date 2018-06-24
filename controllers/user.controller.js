const User = require('../models/user.model')

module.exports = {
  async signUp (req, res) {
    try {
      await User.init()
      const createdUser = await User.add(req.body)
      
      return res.status(201).json({
        createdUser,
        message: 'User was saved successfully'
      })
    }
    catch (err) {
      return res.status(500).json({
        message: err.message
      })
    }
  },
  async logIn (req, res) {
    try {
      const { username, email, password } = req.body
      User.checkPassword(req.body)
    }
    catch (err) {
      return res.status(500).json({
        message: err.message
      })
    }
  }
}