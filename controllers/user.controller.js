const User = require('../models/user.model')

module.exports = {
  async signUp (req, res) {
    try {
      const { email, username, password } = req.body

      const createdUser = new User({
        email,
        username,
        password
      })
      const user = await createdUser.save()
      const result = User.findById(user._id).select('-password')
      
      return res.status(201).json({
        createdUser: result,
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