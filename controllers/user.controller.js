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
      const { email, username, password } = req.body

      const { Op } = Sequalize
      const user = await db['user'].findOne({
        where: { 
          [Op.or]: [{ username }, { email }]
        }
      })

      const checkedPassword = await user.comparePasswordWith(password)
      if (!checkedPassword) {
        return res.status(401).json({
          message: 'Unauthorized user'
        })
      }

      const token = jwt.sign({
        userId: user._id
      },
      process.env.JWT_KEY,
      {
        expiresIn: "3h"
      });

      return res.status(200).json({
        message: 'Authorization completed',
        userId: user._id,
        token
      })
    }
    catch (err) {
      return res.status(500).json({
        message: err.message
      })
    }
  }
}