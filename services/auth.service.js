const jwt = require('jsonwebtoken')

const db = require('../connections.pool')

module.exports = {
  checkAuth (req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1]
      const decoded = jwt.verify(token, process.env.JWT_KEY)
      const user = db.query({
        text: 'SELECT id FROM users WHERE id = $1',
        values: [ decoded.id ]
      })

      next()
    }
    catch (err) {
      return res.status(500).json({
        message: err.message
      })
    }
  }
}