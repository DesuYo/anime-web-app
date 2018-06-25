const jwt = require('jsonwebtoken')

const db = require('../connections.pool')

module.exports = {
  async checkAuth (req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1]
      const decoded = jwt.verify(token, process.env.JWT_KEY)
      const { id } = decoded

      const user = (await db.query({
        text: 'SELECT * FROM users WHERE id = $1',
        values: [ id ]
      })).rows

      if (user) {
        req.user = user
      }

      next()
    }
    catch (err) {
      return res.status(500).json({
        message: err.message
      })
    }
  }
}