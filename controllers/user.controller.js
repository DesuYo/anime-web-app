const bcrypt = require('bcrypt')

const db = require('../connections.pool')
const { user } = require('../initSQL')

module.exports = {
  async signUp (req, res) {
    try {
      await db.query(user)

      const { username, email, password } = req.body
      const hashedPassword = await bcrypt.hash(password, 10)

      const [ createdUser ] = (await db.query({
        text: `INSERT INTO users(username, email, password) VALUES($1, $2, $3)
          RETURNING username, email;`,
        values: [ username, email, hashedPassword ]
      })).rows
      
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

      const [ loggedUser ] = (await db.query({
        text: `SELECT id, password FROM users WHERE username = $1 OR email = $2;`,
        values: [ username, email ]
      })).rows

      const { id } = loggedUser
      const modelPassword = loggedUser.password

      const checkedPassword = await bcrypt.compare(userPassword, password)

      if (!checkedPassword) {
        return res.status(401).json({
          error: 'Unauthorized user'
        })
      }

      return res.status(200).json({
        message: userId
      })
    }
    catch (err) {
      return res.status(500).json({
        message: err.message
      })
    }
  }
}