const User = require('../models/user.model')

const pg = require('pg')
const db = require('../connections.pool')

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
      const model = await User.getId(req.body)
      const userId = model.rows[0].id
      
      const checkedPassword = User.checkPassword(req.body)

      if (!checkedPassword) {
        return res.status(401).json({
          error: 'Unauthorized user'
        })
      }

      return res.status(200).end()
    }
    catch (err) {
      return res.status(500).json({
        message: err.message
      })
    }
  }
}