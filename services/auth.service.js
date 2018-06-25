const jwt = require('jsonwebtoken')

const db = require('../connections.pool')

module.exports = {
  async checkAuth (req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1]
      const { id } = jwt.verify(token, process.env.JWT_KEY)

      const [ user ] = (await db.query({
        text: 'SELECT * FROM users WHERE id = $1',
        values: [ id ]
      })).rows

      if (!user) {
        throw new Error('User not found')
      }

      req.user = user
      next()
    }
    catch (err) {
      return res.status(401).json({
        message: err.message
      })
    }
  }
}