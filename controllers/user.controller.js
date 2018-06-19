const db = require('../models/index')

module.exports = {
  async signUp (req, res) {
    try {
      const { email, username, password } = req.body

      const createdUser = db['user'].build({
        email,
        username,
        password
      })
      const user = await createdUser.save()
      const result = db['user'].findById(user._id, {
        attributes: { exclude: ['password'] }
      })
      
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
  },
  async logIn (req, res) {
    try {

    }
    catch (err) {
      return res.status(500).json({
        message: err.message
      })
    }
  }
}