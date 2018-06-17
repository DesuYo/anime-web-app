const User = require('../models/user.model')

module.exports = {
  async signUp (req, res) {
    try {
      const { email, username, password } = req.body;

      const createdUser = new User({
        email,
        username,
        password
      })
      await createdUser.save()

      return res.status(201).json({
        message: 'User was successfully created'
      })
    }
    catch (err) {
      return res.status(500).json({
        message: 'Internal server error'
      })
    }
  }
}